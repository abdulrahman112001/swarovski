import { TextInput } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form'
import { t } from 'i18next'

type TextFieldProps_TP<T> = {
    name:string
    form: UseFormReturnType<T, (values: T) => T>
    label?:string
    className?:string
    required?:boolean
}

export default function TextField<T>({name , form , label , className , required}:TextFieldProps_TP<T>) {
    return (
        <TextInput
            label={`${label ? t(label) : t(name) }`}
            placeholder={`${t(name)}`}
            {...form.getInputProps(name)}
            className={className ? className :"py-5 w-[100%] sm:w-[49%]"}
            required = {required}
        />
    )
}
