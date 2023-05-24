import React from 'react';
import Card from "../card/card";
import {IIngredient} from "../../../../utils/types/types";

interface CategoryProps {
    name: string;
    data: IIngredient[];
}

const Category = ({name, data}:CategoryProps): JSX.Element => {
    return (
        <div className={`mt-10`}>
            <h2 className={'text text_type_main-medium mb-6'}>{name}</h2>
            <div>
                <Card data={data}/>
            </div>
        </div>
    );
};

export default Category;