
import { User } from '../models/User'


const getAllUser = async () => {
  try {
    const allUser = await User.findAll()
    return allUser
  } catch (error) {
    throw error
  }
}

const addNewUser = async (data) => {
  if (data) {
    try {
      const newUser = await User.create({
        name: data.name,
        priority: data.priority,
        description: data.description,
        duedate: data.duedate
      },
        {
          fields: ["name", "priority", "description", "duedate"]
        });
      return newUser
    } catch (error) {
      throw error
    }
  }
  return false
}

const getUserById = async (id) => {
  if (id) {
    try {
      const user = await User.findById(id)
      return user
    } catch (error) {
      throw error
    }
  }
  return false
}

const updateUser = async (data) => {
  if (data) {
    try {
      const editUser = await User.update(
        {
          name: data.name,
          duedate: data.duedate
        },
        { where: { id: data.id } },
        { fields: ["name", "duedate"] }
      )
      return editUser
    } catch (error) {
      throw error
    }
  }
  return false
}

const deleteUser = async (id) => {
  // console.log(id);
  if (id) {
    try {
      const userDeleted = await User.destroy({
        where: { id: id }
      })
      return userDeleted
    } catch (error) {
      throw error
    }
  }
  return false
}

module.exports = { getAllUser, addNewUser, updateUser, getUserById, deleteUser }