import { Router } from "express";
import { userServices } from "../services/userServices";


const userController = Router()
const user = new userServices()

userController.get("/", async (req, res) => {

  try {
    const users = await user.list();  
    return res.json(users);
  } catch (error : any) {
    return res.status(400).send({ message: "Houve um erro ao listar os dados!", error });
  }
});

userController.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = await user.create(name, email, password);
    return res.json(newUser);
  } catch (error : any) {
    return res.status(400).send({ message: "Houve um erro ao criar o usuário!", error });
  }
});

userController.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  try {
    const updateUser = await user.update(id, name, email, password);
    return res.json(updateUser);
    
  } catch (error : any) {
    return res.status(400).send({ message: "houve um erro ao atualizar o usuário!", error });
  }
});

userController.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleteUser = await user.delete(id);  
    return res.json(deleteUser);
  } catch (error) {
    return res.status(400).send({ message: "Houve um erro ao deletar o usuário!", error });
  }
});

export default userController;