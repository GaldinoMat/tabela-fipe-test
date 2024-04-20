export interface GenericArr {
  codigo: string;
  nome: string;
}

export interface HomeProps {
  brands: GenericArr[];
}

export interface MockResponseObject {
  paramKey: string;
  paramValue: string;
}
