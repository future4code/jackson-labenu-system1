import {connection} from "../index"


export const removeStudentMissionData = async(id:number):Promise<any> => {

    const result = await connection.raw(`
    DELETE * FROM Mission WHERE student_id = ${id}
    `)

    return result[0]
}