import {connection} from "../index"


export const removeTeacherMissionData = async(id:number):Promise<any> => {

    const result = await connection.raw(`
    DELETE * FROM Mission WHERE teacher_id = ${id}
    `)

    return result[0]
}