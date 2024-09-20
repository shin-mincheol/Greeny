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
  resultText: string;
  resultImage: string;
}

export interface Score {
  EI: number;
  SN: number;
  FT: number;
  JP: number;
}
