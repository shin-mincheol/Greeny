import styles from './Filter.module.scss';
import { Controller, useForm } from 'react-hook-form';
import { FilterValues } from './page';

export default function Filter({ onClose, onSubmit }: { onClose: () => void; onSubmit: (data: FilterValues) => void }) {
  const { control, handleSubmit } = useForm<FilterValues>({
    defaultValues: {
      grwhstleCodes: [],
      flclrCodes: [],
      fmldecolrCodes: [],
      lefmrkCodes: [],
      lighttdemanddoCodes: [],
      waterCycleCode: '',
    },
  });
  const submitHandler = (formData: FilterValues) => {
    onSubmit(formData);
  };
  return (
    <div className={styles.filter_wrapper}>
      <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
        <div className={styles.filter_group}>
          <div className={styles.plant_type}>
            <p>식물의 종류를 선택해주세요.</p>
            <div className={styles.label_wrapper}>
              {[
                { grwhstleCode: '054001', grwhstleCodeNm: '관엽형' },
                { grwhstleCode: '054002', grwhstleCodeNm: '직립형' },
                { grwhstleCode: '054003', grwhstleCodeNm: '덩굴성' },
                { grwhstleCode: '054004', grwhstleCodeNm: '풀모양' },
                { grwhstleCode: '054005', grwhstleCodeNm: '로제트형' },
                { grwhstleCode: '054006', grwhstleCodeNm: '다육형' },
              ].map((type) => (
                <label key={type.grwhstleCode} htmlFor={type.grwhstleCode} className={styles.custom_checkbox}>
                  <Controller
                    name="grwhstleCodes"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        id={type.grwhstleCode}
                        value={type.grwhstleCode}
                        checked={field.value.includes(type.grwhstleCode)}
                        onChange={(e) => {
                          const checked = e.target.checked;
                          const value = e.target.value;
                          if (checked) {
                            field.onChange([...field.value, value]);
                          } else {
                            field.onChange(field.value.filter((item) => item !== value));
                          }
                        }}
                      />
                    )}
                  />
                  <span>{type.grwhstleCodeNm}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.plant_props}>
            <p>식물의 잎무늬, 꽃 색, 열매 색을 선택해주세요.</p>
            <div className={styles.flower_color}>
              <p>꽃 색</p>
              <div className={styles.label_wrapper}>
                {[
                  { flclrCode: '071001', flclrCodeNm: '파랑색' },
                  { flclrCode: '071002', flclrCodeNm: '보라색' },
                  { flclrCode: '071003', flclrCodeNm: '분홍색' },
                  { flclrCode: '071004', flclrCodeNm: '빨강색' },
                  { flclrCode: '071005', flclrCodeNm: '오렌지색' },
                  { flclrCode: '071006', flclrCodeNm: '노랑색' },
                  { flclrCode: '071007', flclrCodeNm: '흰색' },
                  { flclrCode: '071008', flclrCodeNm: '혼합색' },
                  { flclrCode: '071009', flclrCodeNm: '기타' },
                ].map((type) => (
                  <label key={type.flclrCode} htmlFor={type.flclrCode} className={styles.custom_checkbox}>
                    <Controller
                      name="flclrCodes"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="checkbox"
                          id={type.flclrCode}
                          value={type.flclrCode}
                          checked={field.value.includes(type.flclrCode)}
                          onChange={(e) => {
                            const checked = e.target.checked;
                            const value = e.target.value;
                            if (checked) {
                              field.onChange([...field.value, value]);
                            } else {
                              field.onChange(field.value.filter((item) => item !== value));
                            }
                          }}
                        />
                      )}
                    />
                    <span>{type.flclrCodeNm}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className={styles.fruit_color}>
              <p>열매 색</p>
              <div className={styles.label_wrapper}>
                {[
                  { fmldecolrCode: '081001', fmldecolrCodeNm: '파랑색' },
                  { fmldecolrCode: '081002', fmldecolrCodeNm: '보라색' },
                  { fmldecolrCode: '081003', fmldecolrCodeNm: '분홍색' },
                  { fmldecolrCode: '081004', fmldecolrCodeNm: '빨강색' },
                  { fmldecolrCode: '081005', fmldecolrCodeNm: '오렌지색' },
                  { fmldecolrCode: '081006', fmldecolrCodeNm: '노랑색' },
                  { fmldecolrCode: '081007', fmldecolrCodeNm: '흰색' },
                  { fmldecolrCode: '081008', fmldecolrCodeNm: '혼합색' },
                  { fmldecolrCode: '081009', fmldecolrCodeNm: '기타' },
                ].map((type) => (
                  <label key={type.fmldecolrCode} htmlFor={type.fmldecolrCode} className={styles.custom_checkbox}>
                    <Controller
                      name="fmldecolrCodes"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="checkbox"
                          id={type.fmldecolrCode}
                          value={type.fmldecolrCode}
                          checked={field.value.includes(type.fmldecolrCode)}
                          onChange={(e) => {
                            const checked = e.target.checked;
                            const value = e.target.value;
                            if (checked) {
                              field.onChange([...field.value, value]);
                            } else {
                              field.onChange(field.value.filter((item) => item !== value));
                            }
                          }}
                        />
                      )}
                    />
                    <span>{type.fmldecolrCodeNm}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className={styles.leaf_pattern}>
              <p>잎무늬</p>
              <div className={styles.label_wrapper}>
                {[
                  { lefmrkCode: '070001', lefmrkCodeNm: '줄무늬' },
                  { lefmrkCode: '070002', lefmrkCodeNm: '점무늬' },
                  { lefmrkCode: '070003', lefmrkCodeNm: '잎 가장자리 무늬' },
                  { lefmrkCode: '070004', lefmrkCodeNm: '기타(무늬없음 등)' },
                ].map((type) => (
                  <label key={type.lefmrkCode} htmlFor={type.lefmrkCode} className={styles.custom_checkbox}>
                    <Controller
                      name="lefmrkCodes"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="checkbox"
                          id={type.lefmrkCode}
                          value={type.lefmrkCode}
                          checked={field.value.includes(type.lefmrkCode)}
                          onChange={(e) => {
                            const checked = e.target.checked;
                            const value = e.target.value;
                            if (checked) {
                              field.onChange([...field.value, value]);
                            } else {
                              field.onChange(field.value.filter((item) => item !== value));
                            }
                          }}
                        />
                      )}
                    />
                    <span>{type.lefmrkCodeNm}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.light_quantity}>
            <p>식물이 필요한 햇빛의 양을 선택해주세요.</p>
            <div className={styles.label_wrapper}>
              {[
                { lighttdemanddoCode: '055001', lighttdemanddoCodeNm: '낮은 광도' },
                { lighttdemanddoCode: '055002', lighttdemanddoCodeNm: '중간 광도' },
                { lighttdemanddoCode: '055003', lighttdemanddoCodeNm: '높은 광도' },
              ].map((type) => (
                <label key={type.lighttdemanddoCode} htmlFor={type.lighttdemanddoCode} className={styles.custom_checkbox}>
                  <Controller
                    name="lighttdemanddoCodes"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        id={type.lighttdemanddoCode}
                        value={type.lighttdemanddoCode}
                        checked={field.value.includes(type.lighttdemanddoCode)}
                        onChange={(e) => {
                          const checked = e.target.checked;
                          const value = e.target.value;
                          if (checked) {
                            field.onChange([...field.value, value]);
                          } else {
                            field.onChange(field.value.filter((item) => item !== value));
                          }
                        }}
                      />
                    )}
                  />
                  <span>{type.lighttdemanddoCodeNm}</span>
                </label>
              ))}
            </div>
          </div>
          <div className={styles.waterCycle}>
            <p>식물의 물 주기 빈도를 선택해주세요.</p>
            <div className={styles.label_wrapper}>
              {[
                {
                  waterCycleCode: '053001',
                  waterCycle: '항상 물을 촉촉하게 유지(물에 잠김)',
                },
                {
                  waterCycleCode: '053002',
                  waterCycle: '흙을 촉촉하게 유지(물에 잠기지 않음)',
                },
                {
                  waterCycleCode: '053003',
                  waterCycle: '토양 표면이 말랐을 때 충분히 관수함',
                },
                {
                  waterCycleCode: '053004',
                  waterCycle: '화분 흙이 대부분 말랐을 떄 충분히 관수함',
                },
              ].map((type) => (
                <label key={type.waterCycleCode} htmlFor={type.waterCycleCode} className={styles.custom_checkbox}>
                  <Controller
                    name="waterCycleCode"
                    control={control}
                    render={({ field }) => (
                      <input type="radio" id={type.waterCycleCode} value={type.waterCycleCode} checked={field.value === type.waterCycleCode} onChange={(e) => field.onChange(e.target.value)} />
                    )}
                  />
                  <span>{type.waterCycle}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.btn_group}>
          <button type="submit" className={styles.btn_submit}>
            검색
          </button>
          <button type="button" className={styles.btn_cancel} onClick={onClose}>
            취소
          </button>
        </div>
      </form>
    </div>
  );
}
