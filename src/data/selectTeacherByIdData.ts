import {connection} from "../index"

export async function selectTeacherById(id:number):Promise<any> {

      const result = await connection.raw(`SELECT * FROM Mission WHERE teacher_id = ${id}`)

      return result[0]
}