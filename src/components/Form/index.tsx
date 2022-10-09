import React from "react"
import { FormProvider, useForm } from "react-hook-form"
import { FormProps } from "./Form"
import { yupResolver } from "@hookform/resolvers/yup"

/**
 * Controlled form component using react-hook-form.
 *
 * @param props N/A.
 * @param props.defaultValues DefaultValues.
 * @param props.onSubmit Function onSubmit.
 * @param props.schema Schema of the form with validation.
 * @param props.children Children element.
 * @returns Form Component.
 */
const Form = ({
  defaultValues = {},
  onSubmit,
  schema,
  children,
  ...restProps
}: FormProps) => {
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
    mode: "onBlur",
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} {...restProps}>
        {children}
      </form>
    </FormProvider>
  )
}

export default Form
