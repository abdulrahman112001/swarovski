import { Textarea } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form'
import { t } from 'i18next'

type TextFieldProps_TP<T> = {
    name: string
    form: UseFormReturnType<T, (values: T) => T>
    label?: string
    className?:string
    autosize?:boolean
}

export default function TextAreaField<T>({ form, name, label , className, autosize, ...props }: TextFieldProps_TP<T>) {
    return <Textarea
        label={`${label ? t(label) : t(name)}`}
        placeholder={`${t(name)}`}
        {...form.getInputProps(name)}
        className={className}
        autosize={autosize}
        {...props}
    />
}
