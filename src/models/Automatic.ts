type AutomaticType = "garage" | "sliding" | "swing";

type AdditionalModel = {
  name: string;
  price: number;
};

export type AutomaticModel = {
  name: string;
  imageUrl: string;
  price: string;
  isSalePrice?: boolean;
  additionalModels?: AdditionalModel[];
};

export type AutomaticCategory = {
  type: AutomaticType;
  title: string;
  models: AutomaticModel[];
};
