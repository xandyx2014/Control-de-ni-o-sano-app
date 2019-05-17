export interface Resultado {
  id: string;
  estatura?: any;
  peso?: any;
  fecha?: string;
  pesoEdad: any;
  tamagnoEdad: any;
  pesoTamagno: any;
  mesesNacido?: any;
  tipo: 'mayor' | 'menor';
}
