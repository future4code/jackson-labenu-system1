import { connection } from "../index"

export const removeTeacherMissionData = async (id: number): Promise<any> => {

    const result = await connection.raw(`
        SELECT IS NOT null mission_id from Teacher WHERE id = 5 AND mission_id = 5;

        UPDATE Teacher
        SET mission_id = null
        WHERE id = ${id}
    `)

    return result[0]
}