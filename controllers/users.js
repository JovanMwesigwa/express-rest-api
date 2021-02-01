import { v4 as uuidv4 } from 'uuid';

let users = []

export  const createUser = (req, res) => {
    const user = req.body;
    const userID = uuidv4();
    const userWithId = {...user, id: userID};
    users.push(userWithId);
    res.send(`User with username ${user.firstName} added to the database`)
}

 export const getUsers = (req, res) => {
    console.log(users);
    res.send(users)
}

export const getUser = (req, res) => {
    const { id }= req.params;
    const foundUser = users.find(user => user.id === id )

    res.send(foundUser)
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter(user => user.id !== id);
    res.send(`User with id: ${id} deleted`)
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const user = users.find(user => user.id === id); 

    res.send()
}