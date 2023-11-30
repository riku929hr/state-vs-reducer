import { type wrappingType } from './constants';

type DeliveryForm = {
  zipCode: string;
  prefecture: string;
  city: string;
  address: string;
  building: string;
  wrapping: keyof typeof wrappingType;
};

export { type DeliveryForm };
