import styles from '@greeny/story/Community.module.scss';
import post from './Post.module.scss';
import Image from 'next/image';
import UserProfile from '@components/UserProfile';
import PostInfo from '@greeny/story/PostInfo';
import ReplyList from '@greeny/story/community/ReplyList';
import ReplyInput from '@greeny/story/community/ReplyInput';
// import ImageSlider from '@greeny/story/ImageSlider';

export default function PostDetail() {
  return (
    <>
      <article className={post.detail_container}>
        <section className={post.content}>
          <h1 className={post.title}>베란다에 이정도 그늘에서 키워도 되나요?</h1>
          {/* 다른 사용자 게시글일 때*/}
          <div className={post.info}>
            {/* <UserProfile
            fontStyle="sm_medium"
            component={
              <div style={{ marginLeft: 'auto' }}>
                <Image src="/images/Bookmark.svg" width={18} height={18} alt="bookmark" />
              </div>
            }
          /> */}
            {/* 내 게시글일 때*/}
            <UserProfile
              fontStyle="sm_medium"
              component={
                <div style={{ marginLeft: 'auto' }}>
                  {/* submenuicon 컴포넌트 */}
                  <button>
                    <Image src="/images/SubMenuIcon.svg" width={14} height={14} alt="bookmark" />
                  </button>
                </div>
              }
            />
          </div>
          <div>
            오른쪽에 있는 식물들 반양지, 반음지에서 키우라고 해서 저렇게 구분해놨는데 너무 해가 안드는것 같아서 좀 걱정되는데요, 저정도 광도도 괜찮을까요? 아니면 다 햇빛이 강하게 드는쪽으로 가는게
            좋을까요?
          </div>
          {/* 사진 */}
          {/* <ImageSlider /> */}
          <PostInfo />
        </section>
        <section className={styles.reply}>
          <ReplyList />
          <ReplyInput />
        </section>
      </article>
    </>
  );
}
