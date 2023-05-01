import {ChangeEvent, useState} from "react";

interface FormValues {
    [key: string]: string;
}

type UseFormReturnType = {
    values: FormValues;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    setValues: (values: FormValues) => void;
};
export function useForm(inputValues: FormValues): UseFormReturnType {
    const [values, setValues] = useState<FormValues>(inputValues);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;
        setValues({...values, [name]: value});
    };
    return {values, handleChange, setValues};
}