import React, { FC } from "react"
import { Controller } from "react-hook-form"
import { CheckboxProps } from "./Form"
import FormControl from "@mui/material/FormControl"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormHelperText from "@mui/material/FormHelperText"
import MuiCheckbox, {
  CheckboxProps as MuiCheckboxProps,
} from "@mui/material/Checkbox"

/**
 * Checkbox Controlled component.
 *
 * @param props N/A.
 * @param props.name Name prop.
 * @param props.defaultValue DefaultValue prop.
 * @param props.hideError Boolean indicating if helperText should be shown.
 * @param props.labelProps Props for FormControlLabelProps.
 * @param props.defaultChecked DefaultChecked prop.
 * @param props.restCheckboxProps Rest Props.
 * @returns Checkbox Controlled component.
 */
const Checkbox: FC<CheckboxProps & MuiCheckboxProps> = ({
  name,
  defaultValue,
  hideError,
  labelProps,
  defaultChecked,
  ...restCheckboxProps
}) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue || defaultChecked}
      render={({
        field: { onChange, onBlur, name: fieldName, value },
        fieldState: { error },
      }) => (
        <FormControl required error={!!error} variant="outlined">
          <FormControlLabel
            {...labelProps}
            // Indicating label because typescript shouting that label is required, eventhough it can have undefined but it must be given anyway even undefine, so juste getting out from labelProps to avoid typescript error.
            label={labelProps?.label}
            control={
              <MuiCheckbox
                checked={value}
                onChange={onChange}
                name={fieldName}
                onBlur={onBlur}
                {...restCheckboxProps}
              />
            }
          />
          {!hideError && !!error?.message && (
            <FormHelperText>{error?.message}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  )
}

export default Checkbox
