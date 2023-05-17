import {ChangeEvent, useState} from "react";

type UseFormReturnType<T> = {
    values: T;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    setValues: (values: T) => void;
};
export function useForm<T>(inputValues: T): UseFormReturnType<T> {
    const [values, setValues] = useState<T>(inputValues);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;
        setValues({...values, [name]: value});
    };
    return {values, handleChange, setValues};
}
