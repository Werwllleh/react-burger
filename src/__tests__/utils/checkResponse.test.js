import {checkResponse} from "../../utils/burger-api";

describe('check Response func', () => {
    it( 'should be success', () => {
        const testObject = {
            ok: true,
            json: () => {
                return { result: 'Ok'}
            }
        }

        const result = checkResponse(testObject)
        expect(result).toEqual({result: 'Ok'})
    });

    it( 'should be fail', () => {
        const testObject = {
            ok: false,
            status: 400
        }

        const result = checkResponse(testObject)
        return expect(result).rejects.toBe('Ошибка 400')
    });
})