import { FormControlLabelProps } from "@mui/material/FormControlLabel"
import React from "react"
import { ObjectSchema } from "yup"
/**
 * Form Props.
 */
export type FormProps = Omit<
  React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement,
    "onSubmit"
  >
> & {
  /**
   * Default Values.
   */
  defaultValues?: { [x: string]: any }
  /**
   * OnSubmit.
   */
  onSubmit: (input: any) => void
  /**
   * Schema of the form with validation.
   */
  schema: ObjectSchema
  /**
   * Children Element.
   */
  children: ReactNode
}

/**
 * TextFieldProps.
 */
export type TextFieldProps = {
  /**
   * Name of the input.
   */
  name: string
  /**
   * Default Value.
   */
  defaultValue?: string
  /**
   * Boolean indicating if helperText should be shown.
   */
  hideError?: boolean
}

/**
 * TextFieldProps.
 */
export type CheckboxProps = {
  /**
   * Name of the input.
   */
  name: string
  /**
   * Default Value.
   */
  defaultValue?: boolean
  /**
   * Default Value.
   */
  checked?: string
  /**
   * Boolean indicating if helperText should be shown.
   */
  hideError?: boolean
  /**
   * Props given to the Label of the Checkbox.
   */
  labelProps?: Partial<FormControlLabelProps>
}
