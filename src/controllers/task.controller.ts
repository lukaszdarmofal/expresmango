
import {Request, Response} from "express";
import {fetchTasks} from "../services/task.service";
import {Task} from "../models/Task";

export async function getTasks(req: Request, res: Response): Promise<void> {
    try {
        const tasks = await fetchTasks();
        res.status(200).json(tasks);
        console.log(tasks);


    } catch (e) {
        res.status(500).json({error: e});
    }
}