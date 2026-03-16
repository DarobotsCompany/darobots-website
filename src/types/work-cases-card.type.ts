export type WorkCasesCardType = {
  order: number;
  name: string;
  slug: string;
  description: string;
  imageSrc: string;
  points: {
    number: string;
    label: string;
  }[];
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  platform: string;
};
