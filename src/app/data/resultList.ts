import { ResultList } from '@/types/event';
import image from '@images/PlantImg1.png';

const resultData: ResultList[] = [
  {
    id: 1,
    mbti: 'ISTJ',
    resultTitle: '🔧 정밀한 그린 엔지니어 🔧',
    resultText:
      '당신은 철두철미한 성격으로 모든 일을 계획적으로 처리하는 타입이에요. 물 주는 시간과 양, 햇빛의 양까지 꼼꼼하게 체크하며 최적의 환경을 조성하는 당신은 식물 관리에 있어 효율과 정확성을 최고로 중요하게 여겨요. 작은 문제도 즉시 인지하고 빠르게 수정해 완벽한 식물 환경을 유지하죠. 당신의 식물들은 언제나 정밀하게 관리된 그린 시스템에서 자라나고 있어요!',
    resultImage: '/images/PlantImg1.png',
    recommendedPlants: [
      {
        cntntsNo: '13186',
        plantName: '금전수',
        scientificName: 'Zamioculcas zamiifolia',
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/13186_MF_REPR_ATTACH_01.jpg',
        description: '규칙적인 물주기만으로도 잘 자라는 금전수는 성실함을 중시하는 ISTJ에게 안성맞춤이에요.',
      },
      {
        cntntsNo: '12963',
        plantName: '관음죽',
        scientificName: 'Rhapis excelsa',
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/12963_MF_ATTACH_04.jpg',
        description: '튼튼하고 오래 사는 관음죽은 신뢰를 중요하게 생각하는 ISTJ의 가치관과 잘 어울려요.',
      },
    ],
  },
  {
    id: 2,
    mbti: 'ISFJ',
    resultTitle: '🌿 식물 감성 치유사 🌿',
    resultText:
      '당신은 식물을 섬세하고 따뜻하게 돌보는 힐링 마스터에요. 작은 변화에도 귀를 기울이고, 마치 친구처럼 식물의 상태를 배려하며 마음을 다해 돌보죠. 식물이 시들기 시작하면 마음이 아프지만, 절대 포기하지 않고 애정과 인내심으로 다시 살려내려 노력합니다. 언제나 사랑과 치유의 에너지를 담아 식물에게 전하는 당신의 손길은 진정한 ‘초록 손길’로 불릴 만해요.',
    resultImage: '/images/PlantImg1.png',
    recommendedPlants: [
      {
        cntntsNo: '19717',
        plantName: '스파티필룸',
        scientificName: 'Spathiphyllum wallisii',
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/19717_MF_ATTACH_01.gif',
        description: '깔끔하고 정갈한 스파티필룸은 따뜻한 마음씨를 가진 ISFJ에게 평온함을 선사해요.',
      },
      {
        cntntsNo: '12962',
        plantName: '관엽베고니아',
        scientificName: 'Begonia  spp.',
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/12962_MF_ATTACH_01.jpg',
        description: '부드러운 잎사귀가 매력적인 관엽베고니아는 배려심 깊은 ISFJ의 성격과 잘 어울려요.',
      },
    ],
  },
  {
    id: 3,
    mbti: 'INFJ',
    resultTitle: '🌼 내면을 가꾸는 식물 철학자 🌼',
    resultText:
      '당신에게 식물 키우기는 단순한 관리가 아니에요. 식물과 교감하며 내면의 평화를 찾아가는 과정이죠. 느리게 자라는 식물의 변화를 존중하고, 그들의 성장을 보며 스스로도 성장하는 깊은 성찰을 경험해요. 식물이 꽃을 피우면 혼자만의 시간을 보내며 그 순간의 아름다움을 음미하고, 시들어가는 식물에게는 차분한 위로를 건네며 회복의 가능성을 믿습니다. 당신은 식물과 함께 내면을 가꾸는 철학자입니다.',
    resultImage: '/images/PlantImg1.png',
    recommendedPlants: [
      {
        cntntsNo: '18654',
        plantName: '에메랄드리플 페페로미아',
        scientificName: 'Peperomia caperata',
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/18654_MF_REPR_ATTACH_01.jpg',
        description: '깊은 녹색 잎사귀가 매력적인 에메랄드리플 페페로미아는 조용한 INFJ에게 평화를 선사해요.',
      },
      {
        cntntsNo: '13208',
        plantName: '네오레겔리아',
        scientificName: 'Neoregelia carolinae',
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/13208_MF_ATTACH_04.jpg',
        description: '독특한 꽃이 매력적인 네오레겔리아는 내적인 성장을 추구하는 INFJ에게 영감을 줘요.',
      },
    ],
  },
  {
    id: 4,
    mbti: 'INTJ',
    resultTitle: '🌳 초록 설계자 🌳',
    resultText:
      '당신은 식물 키우기에서도 논리와 전략을 추구하는 사람입니다. 물, 빛, 영양분 등 모든 요소를 철저히 분석해 식물이 최고의 조건에서 자라도록 계획을 세우고 실행하죠. 문제 발생 시에도 감정적인 대응보다는 원인을 분석해 과학적이고 효율적인 해결책을 마련합니다. 식물 관리에서도 변함없이 치밀하게 설계하고 실행하는 당신은, 그야말로 초록 설계자입니다.',
    resultImage: '/images/PlantImg1.png',
    recommendedPlants: [
      {
        cntntsNo: '16449',
        plantName: '몬스테라',
        scientificName: 'Monstera deliciosa',
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/16449_MF_ATTACH_02.jpg',
        description: '시원하게 뚫린 잎사귀가 매력적인 몬스테라는 계획적인 INTJ에게 안정감을 제공해요.',
      },
      {
        cntntsNo: '13260',
        plantName: '크로톤',
        scientificName: 'Codiaeum variegatum',
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/13260_MF_ATTACH_02.jpg',
        description: '다채로운 색감이 매력적인 크로톤은 분석적인 INTJ에게 지적 호기심을 자극해요.',
      },
    ],
  },
  {
    id: 5,
    mbti: 'ISTP',
    resultTitle: '🧭 실험적인 그린 탐험가 🧭',
    resultText:
      '당신에게 식물 키우기는 하나의 모험입니다. 규칙에 얽매이지 않고, 자유롭고 유연하게 식물을 돌보며 새로운 방법을 시도하죠. 정해진 방식 대신 실험적인 방법을 즐기며, 흥겨운 음악을 틀어 놓고 식물에게 물을 주거나 때로는 예측할 수 없는 돌봄 방식을 통해 식물과 함께 모험을 즐깁니다. 실패를 두려워하지 않고 늘 새로운 시도로 나아가는 당신은 진정한 그린 탐험가입니다.',
    resultImage: '/images/PlantImg1.png',
    recommendedPlants: [
      {
        cntntsNo: '14676',
        plantName: "드라세나  '송오브자마이카'",
        scientificName: "Dracaena reflexa 'Song of Jamaica'",
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/14676_MF_ATTACH_02.jpg',
        description: "변화에 잘 적응하는 드라세나 '송오브자마이카'는 실용적인 ISTP에게 흥미를 더해요.",
      },
      {
        cntntsNo: '12974',
        plantName: '군자란',
        scientificName: 'Clivia miniata',
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/12974_MF_ATTACH_02.jpg',
        description: '튼튼하고 생명력이 강한 군자란은 독립적인 ISTP에게 힘을 주는 존재에요.',
      },
    ],
  },
  {
    id: 6,
    mbti: 'ISFP',
    resultTitle: '🎨 자연의 순간을 포착하는 감성 아티스트 🎨',
    resultText:
      '당신은 자연 속에서 느껴지는 모든 순간을 예술로 표현하는 타입이에요. 식물이 성장하는 작은 순간도 놓치지 않고 감상하며, 그 아름다움을 사진이나 그림으로 남겨요. 꽃이 피면 그 순간의 감동을 소중히 기록하고, 시들면 다시 일어날 수 있는 가능성을 믿으며 격려하죠. 식물과 함께 감성을 나누고, 그들의 자연스러운 아름다움을 사랑하는 당신은 진정한 자연의 감성 아티스트입니다.',
    resultImage: '/images/PlantImg1.png',
    recommendedPlants: [
      {
        cntntsNo: '19706',
        plantName: '수박페페로미아',
        scientificName: 'Peperomia sandersii',
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/19706_MF_REPR_ATTACH_01.jpg',
        description: '독특한 무늬가 매력적인 수박페페로미아는 예술적인 감각을 가진 ISFP에게 영감을 줘요.',
      },
      {
        cntntsNo: '19461',
        plantName: '아이비',
        scientificName: 'Hedera helix',
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/19461_MF_ATTACH_02.jpg',
        description: '싱그러운 잎사귀가 매력적인 아이비는 자유로운 영혼을 가진 ISFP에게 편안함을 선사해요.',
      },
    ],
  },
  {
    id: 7,
    mbti: 'INFP',
    resultTitle: '🎥 그린스토리텔러 🎥',
    resultText:
      '당신은 식물과의 감정적인 교감을 통해 이야기를 만들어가는 스토리텔러에요. 식물 하나하나가 자신의 이야기를 가지고 있다고 믿고, 그들의 성장 과정을 영상이나 글로 기록하며 감동을 나누죠. 식물이 꽃을 피우면 그 순간을 기념하며 스토리나 유튜브를 통해 사람들에게 알리고, 시들면 다정한 위로의 말을 건네며 함께 다시 피어날 날을 기다려요. 당신은 자연 속 이야기꾼입니다.',
    resultImage: '/images/PlantImg1.png',
    recommendedPlants: [
      {
        cntntsNo: '19712',
        plantName: '심비디움',
        scientificName: 'Cymbidium spp.',
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/19712_MF_REPR_ATTACH_01.JPG',
        description: '우아한 꽃이 매력적인 심비디움은 감성적인 INFP에게 위로를 선사해요.',
      },
      {
        cntntsNo: '19474',
        plantName: '옥살리스(사랑초)',
        scientificName: 'Oxalis triangularis',
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/19474_MF_REPR_ATTACH_01.jpg',
        description: '사랑스러운 꽃이 매력적인 옥살리스(사랑초)는 섬세한 INFP에게 행복을 가져다줘요.',
      },
    ],
  },
  {
    id: 8,
    mbti: 'INTP',
    resultTitle: '🔍 문제 해결하는 식물 탐정 🔍',
    resultText:
      '논리적이고 분석적인 성격을 지닌 당신은 식물이 작은 문제를 보이면 즉각 원인을 파악하고 해결책을 찾아내는 전문가입니다. 물이 부족한지, 햇빛이 너무 강한지 세심하게 관찰하고, 데이터를 바탕으로 가장 효율적인 방법을 찾아냅니다. 식물 관리에서도 언제나 호기심을 갖고 실험을 즐기며 해결책을 제시하는 당신은 진정한 식물 탐정이에요.',
    resultImage: '/images/PlantImg1.png',
    recommendedPlants: [
      {
        cntntsNo: '19463',
        plantName: '아스플레니움',
        scientificName: 'Asplenium nidus',
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/19463_MF_REPR_ATTACH_01.jpg',
        description: '시원하게 펼쳐진 잎사귀가 매력적인 아스플레니움은 지적 호기심이 강한 INTP에게 흥미를 더해요.',
      },
      {
        cntntsNo: '15829',
        plantName: '칼라데아 마코야나',
        scientificName: 'Calathea makoyana',
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/15829_MF_ATTACH_01.jpg',
        description: '독특한 무늬가 매력적인 칼라데아 마코야나는 창의적인 INTP에게 영감을 줘요.',
      },
    ],
  },
  {
    id: 9,
    mbti: 'ESTP',
    resultTitle: '📸 식물계의 스포트라이트 📸',
    resultText:
      '당신은 에너지가 넘치고, 그 에너지를 식물에게도 전하는 타입입니다. 물을 줄 때도 단순히 주는 것이 아니라, 흥겨운 분위기 속에서 리듬을 타며 식물과 교감해요. 식물이 꽃을 피우면 바로 사진을 찍어 스토리에 올리고, 그들의 성장을 축하하는 당신은 그야말로 식물계의 스포트라이트! 항상 즉흥적이고 즐겁게 식물을 돌보는 모습이 당신의 매력입니다.',
    resultImage: '/images/PlantImg1.png',
    recommendedPlants: [
      {
        cntntsNo: '19469',
        plantName: '아글라오네마',
        scientificName: 'Aglaonema commutatum',
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/19469_MF_ATTACH_04.jpg',
        description: '활기차게 자라는 아글라오네마는 에너지 넘치는 ESTP에게 활력을 불어넣어요.',
      },
      {
        cntntsNo: '14698',
        plantName: "드라세나 '트리컬러 레인보우'",
        scientificName: "Dracaena concinna 'Tricolor Rainbow'",
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/14698_MF_ATTACH_01.jpg',
        description: "화려한 색감이 매력적인 드라세나 '트리컬러 레인보우'는 모험심 강한 ESTP에게 도전 정신을 북돋아요.",
      },
    ],
  },
  {
    id: 10,
    mbti: 'ESFP',
    resultTitle: '🌟 초록 파티 메이커 🌟',
    resultText:
      '당신은 언제나 활기차고 즐겁게 식물을 돌보는 타입이에요. 식물이 자라나는 과정 속에서도 축하와 파티가 가득합니다. 물을 줄 때도, 꽃이 피었을 때도, 모든 순간을 특별하게 만들고 그 순간을 주변 사람들과 나누는 당신은 그야말로 식물계의 파티 메이커! 당신의 긍정적인 에너지가 식물에게도 전해져 더욱 건강하게 자라납니다.',
    resultImage: '/images/PlantImg1.png',
    recommendedPlants: [
      {
        cntntsNo: '18613',
        plantName: '부겐빌레아',
        scientificName: 'Bougainvillea glabra',
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/18613_MF_ATTACH_02.jpg',
        description: '화려한 꽃이 매력적인 부겐빌레아는 밝고 긍정적인 ESFP에게 기쁨을 선물해요.',
      },
      {
        cntntsNo: '13319',
        plantName: '칼랑코에',
        scientificName: 'Kalanchoe blossfeldiana',
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/13319_MF_REPR_ATTACH_01.jpg',
        description: '다채로운 색감이 매력적인 칼랑코에는 활기찬 ESFP에게 에너지를 충전시켜요.',
      },
    ],
  },
  {
    id: 11,
    mbti: 'ESTJ',
    resultTitle: '🧑 효율적인 식물 감독관 🧑',
    resultText:
      '당신은 체계적이고 계획적인 방식으로 식물을 돌보며, 효율성을 가장 중요하게 생각해요. 언제 물을 줘야 하는지, 햇빛은 어느 정도가 필요한지 철저히 관리하며, 실수를 최소화하려 하죠. 모든 것이 계획에 맞아야 만족하는 당신은 진정한 식물계의 감독관으로, 식물들이 당신의 철저한 관리 아래에서 최상의 상태로 자라납니다.',
    resultImage: '/images/PlantImg1.png',
    recommendedPlants: [
      {
        cntntsNo: '12990',
        plantName: '금목서',
        scientificName: 'Osmanthus fragrans',
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/12990_MF_ATTACH_01.jpg',
        description: '관리하기 쉽고 향기로운 금목서는 효율적인 일처리를 중요하게 생각하는 ESTJ에게 활력을 불어넣어요.',
      },
      {
        cntntsNo: '19465',
        plantName: '아레카야자',
        scientificName: 'Chrysalidocarpus lutescens',
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/19465_MF_ATTACH_02.jpg',
        description: '쭉쭉 뻗어 자라는 아레카야자는 목표 지향적인 ESTJ의 성격과 잘 어울려요.',
      },
    ],
  },
  {
    id: 12,
    mbti: 'ESFJ',
    resultTitle: '👑 그린 팀 리더 👑',
    resultText:
      '당신은 주변 사람들과 식물을 모두 배려하며, 식물이 건강하게 자랄 수 있도록 책임감 있게 관리하는 타입이에요. 식물이 잘 자라는 환경을 만들고, 그들의 성장 과정을 꼼꼼하게 챙기는 모습이 리더십을 보여줍니다. 언제나 주변을 잘 돌보는 당신은 식물들에게도 긍정적인 영향을 미치는 진정한 그린 팀 리더입니다.',
    resultImage: '/images/PlantImg1.png',
    recommendedPlants: [
      {
        cntntsNo: '13338',
        plantName: '덴파레',
        scientificName: 'Dendrobium phalaenopsis',
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/13338_MF_ATTACH_02.jpg',
        description: '화려하고 아름다운 덴파레는 사람들과의 관계를 중요하게 생각하는 ESFJ에게 기쁨을 선물해요.',
      },
      {
        cntntsNo: '18694',
        plantName: '백량금',
        scientificName: 'Ardisia crenata',
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/18694_MF_ATTACH_06.jpg',
        description: '푸르른 잎사귀가 매력적인 백량금은 따뜻한 마음씨를 가진 ESFJ에게 안정감을 제공해요.',
      },
    ],
  },
  {
    id: 13,
    mbti: 'ENTJ',
    resultTitle: '📊 전략적인 플랜트 CEO 📊',
    resultText:
      '식물 관리에서도 비즈니스처럼 접근하는 당신! 모든 자원을 효율적으로 배분하고, 최대의 성과를 내기 위해 계획을 세워 실행합니다. 당신의 목표는 식물을 건강하게 키우는 것뿐만 아니라, 그 과정에서 최적의 조건을 찾아내는 것이죠. 언제나 전략적인 사고로 식물을 돌보는 당신은 진정한 플랜트 CEO입니다.',
    resultImage: '/images/PlantImg1.png',
    recommendedPlants: [
      {
        cntntsNo: '13248',
        plantName: '파키라',
        scientificName: 'Pachira aquatica',
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/13248_MF_ATTACH_02.jpg',
        description: '굵은 줄기가 매력적인 파키라는 목표 지향적인 ENTJ에게 강한 의지를 심어줘요.',
      },
      {
        cntntsNo: '18582',
        plantName: '유카',
        scientificName: 'Yucca',
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/18582_MF_ATTACH_02.jpg',
        description: '튼튼하고 생명력이 강한 유카는 리더십이 강한 ENTJ에게 힘을 주는 존재에요.',
      },
    ],
  },
  {
    id: 14,
    mbti: 'ENTP',
    resultTitle: '🧠 혁신적인 식물 개척자 🧠',
    resultText:
      '당신은 식물 관리에서도 창의적인 아이디어와 혁신을 추구하는 타입입니다. 새로운 시도와 실험을 즐기며, 기존의 방식에 얽매이지 않고 독창적인 방법으로 식물을 돌보죠. 늘 새로운 것을 시도하고, 실패를 두려워하지 않으며 끊임없이 도전하는 당신은 진정한 식물 개척자입니다.',
    resultImage: '/images/PlantImg1.png',
    recommendedPlants: [
      {
        cntntsNo: '13004',
        plantName: '틸란드시아',
        scientificName: 'Tillandsia cyanea',
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/13004_MF_REPR_ATTACH_01.jpg',
        description: '공중에서 자라는 독특한 틸란드시아는 창의적인 ENTP에게 새로운 아이디어를 떠올리게 해요.',
      },
      {
        cntntsNo: '13251',
        plantName: '피토니아 핑크스타',
        scientificName: "Fittonia verschaffeltii 'Pink Star'",
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/13251_MF_ATTACH_01.jpg',
        description: '화려한 무늬가 매력적인 피토니아 핑크스타는 모험심 강한 ENTP에게 도전 정신을 북돋아요.',
      },
    ],
  },
  {
    id: 15,
    mbti: 'ENFP',
    resultTitle: '🌈 창의적인 그린 드리머 🌈',
    resultText:
      '당신은 자유로운 발상과 창의적인 아이디어로 식물을 돌보며, 그 과정에서 새로운 꿈을 키워가는 타입입니다. 식물의 성장에서 영감을 얻고, 그들과 함께 희망을 나누며 돌봅니다. 때로는 즉흥적으로, 때로는 계획적으로 창의적인 방법을 시도하며 식물과 함께 성장하는 당신은 그린 드리머입니다.',
    resultImage: '/images/PlantImg1.png',
    recommendedPlants: [
      {
        cntntsNo: '13242',
        plantName: '팬더 고무나무',
        scientificName: 'Ficus panda',
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/13242_MF_ATTACH_01.jpg',
        description: '밝은 잎사귀가 매력적인 팬더 고무나무는 낙천적인 ENFP에게 활력을 불어넣어요.',
      },
      {
        cntntsNo: '19709',
        plantName: '수박필레아',
        scientificName: 'Pilea cadierei',
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/19709_MF_ATTACH_01.jpg',
        description: '다채로운 무늬가 매력적인 수박필레아는 창의적인 ENFP에게 영감을 줘요.',
      },
    ],
  },
  {
    id: 16,
    mbti: 'ENFJ',
    resultTitle: '🌍 그린 케어 리더 🌍',
    resultText:
      '당신은 주변의 모든 식물과 사람을 아우르며, 그들이 잘 성장할 수 있도록 리더십을 발휘하는 타입이에요. 식물이 건강하게 자랄 수 있도록 돌보고, 그들의 성장을 응원하며 주변 사람들에게도 긍정적인 영향을 미칩니다. 언제나 따뜻한 마음으로 식물과 사람을 챙기는 당신은 진정한 그린 케어 리더입니다.',
    resultImage: '/images/PlantImg1.png',
    recommendedPlants: [
      {
        cntntsNo: '18660',
        plantName: '안수리움',
        scientificName: 'Anthurium andraeanum',
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/18660_MF_ATTACH_03.jpg',
        description: '화려한 꽃이 매력적인 안수리움은 따뜻한 마음씨를 가진 ENFJ에게 기쁨을 선물해요.',
      },
      {
        cntntsNo: '18598',
        plantName: '엘라티올 베고니아',
        scientificName: 'Begonia X hiemalis',
        rtnFileUrl: 'https://nongsaro.go.kr/cms_contents/301/18598_MF_ATTACH_01.jpg',
        description: '사랑스러운 꽃이 매력적인 엘라티올 베고니아는 배려심 깊은 ENFJ에게 행복을 가져다줘요.',
      },
    ],
  },
];

export default resultData;
