type AutomaticType = "garage" | "sliding" | "swing";

export type Feature = {
  title: string;
  iconSrc: string; 
  unit?: string; 
  values?: (string | number)[]; 
};

export type AutomaticConfig = {
  config: string;
  price: number;
};

export type AutomaticModel = {
  name: string;
  productImage: string;
  productGalleryImages: string[];
  price: number;
  isSalePrice?: boolean;
  isNewProduct?: boolean;
  automaticConfigs: AutomaticConfig[];
  features: Feature[];
};

export type AutomaticCategory = {
  id: string;
  type: AutomaticType;
  title: string;
  models: AutomaticModel[];
};
