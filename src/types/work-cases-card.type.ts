export type WorkCasesCardType = {
  order: number;
  name: string;
  description: string;
  imageSrc: string;
  points: {
    number: string;
    label: string;
  }[];
};
