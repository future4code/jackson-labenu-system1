import { connection } from '../index';

export const allMissionStudentsData = async (id: string): Promise<any> => {
    try {
        const result = await connection.raw(
            `SELECT s.name as name_student FROM Student s
            WHERE m.id = ${id}
            LEFT JOIN Mission m ON s.id = m.id`
        )

        return result[0][0]
    } catch (e) {
        console.log(e)
    }
}
