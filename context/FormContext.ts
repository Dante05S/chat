// import { DateElement } from 'interfaces/DateElement.interface';
import { type Error } from 'interfaces/error.interface';
import { createContext } from 'react';

export interface FormState {
  values: any;
  errors: Error[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setValuesForm: (field: string, value: string) => void;
}

const FormContext = createContext<FormState | undefined>(undefined);

export default FormContext;
