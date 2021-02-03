import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationsErrors(err: ValidationError): Errors {
  const validationsErros: Errors = {};

  err.inner.forEach(error => {
    validationsErros[error.path!] = error.message;
  });

  return validationsErros;
}