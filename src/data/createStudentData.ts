import { connection } from '../index';

export const createStudentData = async (
    id: number,
    name: string,
    email: string,
    birthdate: Date,
    mission_id: number

): Promise<void> => {
    await connection
        .insert({
            id: id,
            name: name,
            email: email,
            birthdate: birthdate,
            mission_id: mission_id
        })
        .into("Student");
};

