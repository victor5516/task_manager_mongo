import { Router } from 'express'
import { getTasks, createTask, updateTask, deleteTask } from '../../controller/task.controller'

const router = Router();

router.get('/tasks', getTasks)
router.post('/tasks', createTask)
router.put('/tasks/:id',updateTask)
router.delete('/tasks/:id', deleteTask)

export default router