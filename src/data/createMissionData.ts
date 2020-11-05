import { connection } from '../index';

export const createMissionData = async (
  id: number,
  name: string,
  start_date: Date,
  end_date: Date,
  module: number

): Promise<void> => {
  await connection
    .insert({
      id: id,
      name: name,
      start_date: start_date,
      end_date: end_date,
      module: module
    })
    .into("Mission");
};