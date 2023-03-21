import PropTypes from "prop-types";

export const URL = 'https://norma.nomoreparties.space/api/'
export const BUN = 'bun'
export const SAUCE = 'sauce'
export const FILLINGS = 'main'
export const ESC_KEYCODE = 27;

export const ItemTypes = {
        CONSTRUCTOR_LIST: 'constructorList',
}

export const DATA_PROP_TYPES = PropTypes.arrayOf(PropTypes.shape(
    {
        _id: PropTypes.string.isRequired,
        __v: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        proteins: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image_mobile: PropTypes.string.isRequired,
        image_large: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
    }
)).isRequired;