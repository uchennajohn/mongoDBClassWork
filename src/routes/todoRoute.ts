import express from "express"
import { createTodo, getTodo, removeTodo, updateTodo } from "../controller/todoController";

const router = express.Router()

router.post('/createTodo', createTodo)
router.get('/getTodo',getTodo )
router.patch('/updateTodo/:id', updateTodo)
router.delete('./deleteTodo/id',removeTodo)

export default router;
