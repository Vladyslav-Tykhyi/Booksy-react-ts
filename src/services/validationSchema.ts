import * as yup from "yup";

export const modalSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email"),
  message: yup.string().max(500, "Message can't exceed 500 characters"),
});

export type ModalFormValues = yup.InferType<typeof modalSchema>;
