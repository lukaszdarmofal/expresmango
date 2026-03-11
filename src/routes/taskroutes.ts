import express, {request, response} from 'express';
import TaskModel, {Task} from "../models/Task";

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const tasks: Array<Task> = await TaskModel.find()
        res.json(tasks)

    } catch (e) {
        res.status(500).json({error: e});
    }
})

router.post('/', async (req, res) => {
    try {
        const {title, description} = req.body;
        const newTask = new TaskModel({title, description});

        await newTask.save();
        res.status(201).json({message: 'Task created successfully.', task: newTask });


    } catch (e) {
        res.status(500).json({error: e});
    }
})

export default router;