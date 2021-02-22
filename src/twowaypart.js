import * as yup from 'yup';
import CGA from './CGA';

export default (setData) => {
  const schema = yup.object().shape({
    set: yup.array().of(yup.number()).defined(),
  });

  try {
    schema.validateSync(setData);
  } catch (error) {
    throw new Error(`Incorrect input format (${error.message})`);
  }

  const result = CGA(setData.set);
  return result;
};
