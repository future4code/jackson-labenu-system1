import { connection } from '../index';

export const allMissionTeachersData = async (id: string): Promise<any> => {
    try {
        const result = await connection.raw(
            `SELECT * FROM Mission m
            LEFT JOIN Teacher s ON s.id = m.id`
        )

        return result[0][0]
    } catch (e) {
        console.log(e)
    }
}