import e from 'cors';
import { connection } from '../index';

export const searchByIdData = async (id: string): Promise<any> => {
    try {
        const result = await connection.raw(
            `SELECT YEAR(CURDATE()) - YEAR(birthdate) as idade FROM Student WHERE id = ${id}`
        )

        return result[0][0]
    } catch (e) {
        console.log(e)
    }
}




