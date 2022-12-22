import { Router } from 'express'
import { createUser, deleteUser, getCorreoUser, getUser, getUsers, updateUser } from '../controllers/user.controllers'

const router = Router()

router.post('/users', createUser)

router.get('/users', getUsers)

router.put('/user/:id', updateUser)

router.delete('/user/:id', deleteUser)

router.post('/userprueba', getCorreoUser)

export default router