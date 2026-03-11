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

router.put('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const updatedTask: Task | null = await TaskModel.findByIdAndUpdate(id, req.body, {new: true})

        if (!updatedTask) {
            res.status(404).json({error: 'Task not found'});
            return;
        }
        res.status(200).json({message: 'Task updated successfully.', task: updatedTask});

    } catch (e) {
        res.status(500).json({error: e});
    }
})

router.delete('/:id', async (req, res) => {
    try {

        const {id} = req.params;
        const deletedTask: Task | null = await TaskModel.findByIdAndDelete(id)
        if (!deletedTask) {
            res.status(404).json({error: 'Task not found'});
            return;
        }
        res.json({message: 'Task deleted successfully.', task: deletedTask});

    } catch (e) {
        const err = e instanceof Error ? e.message : "Unknown error";
        res.status(500).json({error: err});
    }
})


export default router;