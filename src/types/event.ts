export interface QuestionList {
  id: number;
  type: 'EI' | 'SN' | 'FT' | 'JP';
  question: string;
  answer1: string;
  answer2: string;
  questionImage: string;
}
export interface ResultList {
  id: number;
  mbti: string;
  resultTitle: string;
  resultIntroduction: string;
  resultText: string;
  resultImage: string;
  recommendedPlants: recommendedPlants[];
}

interface recommendedPlants {
  cntntsNo: string;
  plantName: string;
  scientificName: string;
  rtnFileUrl: string;
  description: string;
}

export interface Score {
  EI: number;
  SN: number;
  FT: number;
  JP: number;
}
