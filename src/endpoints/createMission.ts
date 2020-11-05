import { Request, Response } from "express"
import { createMissionData } from "../data/createMissionData"

export const createMission = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id, name, start_date, end_date, module } = req.body;
        const mission = await createMissionData(id, name, start_date, end_date, module);
        res.status(200).send(mission)

        if (!(id && name && start_date && end_date && module)) {
            res.statusCode = 400
            throw new Error("É necessario preencher todos os campos!")
        }

    } catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
}; 
