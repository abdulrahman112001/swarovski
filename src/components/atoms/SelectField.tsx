import { Select } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
type Select_TP = {
    value: string
    label: string
}
type SelectFieldProps_TP<T> = {
    data: Select_TP[]
    useFormContext: () => UseFormReturnType<T, (values: T) => T>
    title: string
    name: keyof T
    showLabel?:boolean
}

export function SelectField<T>({ data, title, useFormContext, name , showLabel }: SelectFieldProps_TP<T>) {

    const { setFieldValue  , values } = useFormContext()
    return (
        <Select
            label={ showLabel ? title : null}
            placeholder={title}
            data={data}
            value={values[name] as string}
            onChange={(option) => {
                setFieldValue(name , option as never )
            }}
        />
    );
}