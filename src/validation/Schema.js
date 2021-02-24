import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("name is required")
    .min(1, "should have at least 1 character"),
  pizzaSize: yup
    .string()
    .oneOf(["small", "medium", "large"], "size is required"),
  sausage: yup.boolean(),
  bacon: yup.boolean(),
  ham: yup.boolean(),
  cheese: yup.boolean(),
  olives: yup.boolean(),
  mushrooms: yup.boolean(),
  bellpepper: yup.boolean(),



  text: yup.string()
});

//testing