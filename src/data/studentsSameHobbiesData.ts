import { connection } from '../index';

export const studentsSameHobbiesData = async (id: string): Promise<any> => {
    try {
        const result = await connection.raw(
            `SELECT * FROM Student_Hobby sh
            INNER JOIN Student s ON s.id = sh.hobby_id`
        )

        return result[0][0]
    } catch (e) {
        console.log(e)
    }
}

