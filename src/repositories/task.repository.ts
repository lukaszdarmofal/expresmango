import TaskModel, {Task} from "../models/Task"

export async function getAllTasks(): Promise<Task[]> {
    return TaskModel.find();
}

