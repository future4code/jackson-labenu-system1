import {connection} from "../index"

export const removeStudentData = async(id:number):Promise<any> => {

      const result = await connection.raw(
          `DELETE * FROM Student WHERE id = ${id}`)

      return result[0]
}