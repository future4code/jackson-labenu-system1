import { connection } from "../index"

export const removeStudentMissionData = async (id: number): Promise<any> => {

    const result = await connection.raw(`
        SELECT IS NOT null mission_id from Student WHERE id = 5 AND mission_id = 5;

        UPDATE Student
        SET mission_id = null
        WHERE id = ${id}
    `)

    return result[0]
}