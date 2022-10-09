import React, { FC } from "react"
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material/TextField"
import { Controller } from "react-hook-form"
import { TextFieldProps } from "./Form"

/**
 * TextField Controlled component.
 *
 * @param props N/A.
 * @param props.name Name prop.
 * @param props.defaultValue DefaultValue prop.
 * @param props.hideError Boolean indicating if helperText should be shown.
 * @param props.restProps Rest Props.
 * @returns TextField Controlled component.
 */
const TextField: FC<TextFieldProps & MuiTextFieldProps> = ({
  name,
  defaultValue,
  hideError,
  ...restProps
}) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      render={({
        field: { onChange, onBlur, name: fieldName, value },
        fieldState: { error },
      }) => (
        <MuiTextField
          {...restProps}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          name={fieldName}
          error={!hideError && !!error?.message}
          helperText={!hideError && error?.message}
        />
      )}
    />
  )
}

export default TextField
