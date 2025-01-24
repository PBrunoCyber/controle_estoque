import { Controller } from "react-hook-form";
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
} from "../ui/form-control";
import { AlertCircleIcon } from "../ui/icon";
import { Input, InputField } from "../ui/input";

interface InputRHF {
  control: any;
  name: string;
  label: string;
  defaultValue?: string;
  type?: "text" | "password";
  helperText?: string;
  error?: string;
  placeholder?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  size?: "lg" | "md" | "sm";
}

export default function InputRHF({
  control,
  name,
  label,
  defaultValue,
  type,
  helperText,
  error,
  placeholder,
  isDisabled,
  isReadOnly,
  isRequired,
  size = "md",
}: InputRHF) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field: { onChange, value } }) => (
        <FormControl
          isInvalid={!!error}
          size={size}
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
        >
          <FormControlLabel>
            <FormControlLabelText>{label}</FormControlLabelText>
          </FormControlLabel>
          <Input className="my-1" size={size}>
            <InputField
              type={type}
              placeholder={placeholder}
              value={value}
              autoCapitalize={"none"}
              onChangeText={onChange}
            />
          </Input>
          {helperText && (
            <FormControlHelper>
              <FormControlHelperText>{helperText}</FormControlHelperText>
            </FormControlHelper>
          )}
          {error && (
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>{error}</FormControlErrorText>
            </FormControlError>
          )}
        </FormControl>
      )}
    />
  );
}
