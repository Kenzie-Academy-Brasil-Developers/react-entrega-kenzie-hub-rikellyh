import * as yup from "yup";

export const addTech = yup.object().shape({
  title: yup.string().required("*Campo obrigatório"),
});
