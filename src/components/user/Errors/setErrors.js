export const setErrors = (description, from, to) => {
  let errors = {};

  errors.description = description ? '' : 'description is required';
  errors.from = from ? '' : 'from is required';
  errors.to = to ? '' : 'to is required';

  return errors;
};
