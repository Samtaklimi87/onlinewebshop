import { useState } from "react";

const FormComponents = (initValue) => {
  const [value, setValues] = useState(initValue);
  return [
    value,
    (val) => {
      setValues({
        ...value,
        [val.target.name]: val.target.value,
      });
    },
  ];
};
export default FormComponents;
