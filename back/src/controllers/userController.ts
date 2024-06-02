import { Request, Response } from 'express';
import User from '../models/User';

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.findAll();
  res.json(users);
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await User.findByPk(id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found!');
  }
};

export const createUser = async (req: Request, res: Response) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const [updated] = await User.update(req.body, {
    where: { id }
  });

  if (updated) {
    const updatedUser = await User.findByPk(id);
    res.status(200).json(updatedUser);
  } else {
    res.status(404).send('User not found!');
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const deleted = await User.destroy({
    where: { id }
  });
  
  if (deleted) {
    res.status(204).send('User deleted!');
  } else {
    res.status(404).send('User not found!');
  }
};