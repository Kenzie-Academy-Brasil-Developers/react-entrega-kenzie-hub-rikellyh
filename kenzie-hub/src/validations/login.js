import * as yup from "yup";

export const loginValidation = yup.object({
  email: yup
    .string()
    .email("Deve ser um e-mail válido")
    .required("Email é obrigatório"),
  password: yup
    .string()
    .min(8, "No minimo 8 caracteres")
    .required("Senha é obrigatória"),
});
