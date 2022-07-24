export const areEmptyFieldsInObject = <O extends object, K extends keyof O>(obj: O, fields: K[]) =>
  fields.every((key) => !obj[key]);
