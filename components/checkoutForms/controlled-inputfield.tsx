import { Box, TextField } from "@mui/material";
import { FC } from "react";
import { useController, useFormContext } from "react-hook-form";

type ControlledTextInputProps = {
  name: string;
  label: string;
  type?: string;
  defaultValue?: string;
};

const ControlledInputField: FC<ControlledTextInputProps> = ({name, label, defaultValue, type}) => {
  const { control } = useFormContext(); //gracias a este hook nos unimos al contexto, espera un form
  const {
    field: { onChange, value, ref },
    formState: { errors }} = useController<Record<string, string>>({ 
    name: name, 
    control, //xq necesitamos asociar un control a nuestro contexto
    defaultValue,
  });

  return (
    <Box mb={2}>
      <TextField
        onChange={onChange}
        value={value}
        label={label}
        inputRef={ref}
        fullWidth
        error={!!errors[name]}
        helperText={`${errors[name]?.message || ""}`}
        type={type || "text"}
      />
    </Box>
  );
};

export default ControlledInputField;
