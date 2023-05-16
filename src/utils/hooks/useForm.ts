import {ChangeEvent, useState} from "react";

export interface FormValues {
    [key: string]: string;
}

type UseFormReturnType = {
    values: FormValues;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    setValues: (values: FormValues) => void;
};

export function useForm(inputValues: FormValues): UseFormReturnType {
    const [values, setValues] = useState<FormValues>(inputValues);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
    };

    return { values, handleChange, setValues };
}
