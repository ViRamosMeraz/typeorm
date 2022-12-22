import { Request, Response } from 'express'
import { Any } from 'typeorm'
import { User } from '../entities/User'
import Cryptr from 'cryptr'
export const createUser = async (req: Request, res: Response) => {
    try {
        const { firstname, lastname, mail } = req.body
        const user = new User()
        user.firstname = firstname
        user.lastname = lastname
        user.mail = mail
        await user.save()

        return res.json(user)
    } catch (error: any) {
        return res.status(500).json(error.message)

    }
}

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find()
        return res.json(users)

    } catch (error: any) {
        return res.status(500).json(error.message)

    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { firstname, lastname } = req.body
        const { id } = req.params
        const user = await User.findOneBy({ id: parseInt(id) })

        if (!user) {
            return res.status(404).json({ message: 'usuario no encontrado' })
        } else {

            await User.update({ id: parseInt(id) }, req.body)
            return res.sendStatus(204)
        }

    } catch (error: any) {
        return res.status(500).json(error.message)
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {

        const { id } = req.params
        const user = await User.findOneBy({ id: parseInt(id) })

        if (!user) {
            return res.status(404).json({ message: 'usuario no encontrado' })
        } else {

            const result = await User.delete({ id: parseInt(id) })
            console.log(result)
            return res.sendStatus(204)
        }

    } catch (error: any) {
        return res.status(500).json(error.message)
    }
}

export const getUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const user = await User.findOneBy({ id: parseInt(id) })
        if (!user) {
            return res.status(404).json({ message: 'usuario no encontrado' })
        } else {
            return res.json(user)
        }

    } catch (error: any) {
        return res.status(500).json(error.message)

    }
}

export const getCorreoUser = async (req: Request, res: Response) => {
    try {
        const Aes = require('aes-256-gcm')
        const SHARED_SECRET = 'abcdefghijklmnopqrstuvwxyzabcdef'
    
        const  valor = JSON.stringify(req.body)
        let { ciphertext, iv, tag } = Aes.encrypt(valor, SHARED_SECRET);
        console.log(ciphertext, iv, tag)

        crytar()
        

        
        return res.json(JSON.parse(valor))
        

    } catch (error: any) {
        return res.status(500).json(error.message)

    }

}

const crytar = ()  => {

    let data = "buenos dias ";
    let key = "5cc4d4c420e845f0571cd6141f2a41f50fa9e688831b1e9a3396c44bb734bb5d";
    let cryptr = new Cryptr(key);
    
}
