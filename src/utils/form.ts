export const getFieldAndIndexFromFieldArray = <F extends string>(field: F): [F, number] => {
  const [currentField, index] = field.split(".") as [F, string];
  const numIndex = Number(index);

  return [currentField, numIndex];
};

// Todo fix any in fieldErrors
export const getErrorFromFieldArray = <F extends string>(field: F, fieldErrors: any) => {
  const [currentField, index] = getFieldAndIndexFromFieldArray(field);
  const errorsByFieldArray = fieldErrors[currentField] ?? [];
  const error = errorsByFieldArray[index];

  return error;
};

export const isFieldArray = <F extends string>(field: F) => /\w+.\d+/.test(field);
