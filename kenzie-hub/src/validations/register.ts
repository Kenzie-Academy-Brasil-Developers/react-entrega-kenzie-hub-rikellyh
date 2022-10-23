import * as yup from "yup";

export const registerValidation = yup.object({
  name: yup.string().required("*Nome é obrigatório"),
  email: yup
    .string()
    .email("Deve ser um e-mail válido")
    .required("*Email é obrigatório"),
  password: yup.string().required("*Senha é obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "*Confirmação de senha deve ser igual a senha"
    ),
  bio: yup
    .string()
    .max(150, "A descrição precisa ter menos de 150 caracteres")
    .required("*Bio é obrigatória"),
  contact: yup.string().required("*Contato é obrigatório"),
  course_module: yup.string(),
});
