import { connection } from "../index"

export const changeStudentMissionData = async (id: number, mission_id: number): Promise<any> => {

    const result = await connection.raw(`
        UPDATE Student
        SET mission_id = ${mission_id}
        WHERE id = ${id}
    `)

    return result[0]
}