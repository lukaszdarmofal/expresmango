import {Task} from "../models/Task";
import {getAllTasks} from "../repositories/task.repository";

export async function fetchTasks(): Promise<Task[]> {
    return await getAllTasks()
}