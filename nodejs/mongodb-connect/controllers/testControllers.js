import mongoose from "mongoose"
// const Users = mongoose.model('Users')
import Users from "../models/testModel"

const getAllUser = async () => {
	try {
		const allUser = await Users.find()
		return allUser
	} catch (error) {
		throw error
	}
}

const getAllUserLimit = async () => {
	try {
		const allUserLimit = await Users.find().limit(3).sort({name : 1}).select({
		email : 1,
		password : 1
		})
		return allUserLimit
	} catch (error) {
		throw error
	}
}

const getAllUserCriteria = async limit => {
	let criteria = {}
	try {
		const allUserCriteria = await Users.find(criteria).limit(limit).sort({name : 1}).select({
		email : 1,
		password : 1
		})
		return allUserCriteria
	} catch (error) {
		throw error
	}
}

const getAllUserCriteriaCheckLimit = async (criteria, limit) => {
	try {
		const allUserCriteria = await Users.find(criteria).limit(limit).sort({name : 1}).select({
		email : 1,
		password : 1
		})
		return allUserCriteria
	} catch (error) {
		throw error
	}
}

const addNewUser = async data => {
	if (data) {
		try {
			const newUser = await Users.create(data)
			return newUser
		} catch (error) {
			throw error
		}
	}
	return false
}

const getUserById = async id => {
	if (id) {
		try {
			const user = await Users.findById(id)
			return user
		} catch (error) {
			throw error
		}
	}
	return false
}

const updateOneUserById = async data => {
	if (data) {
		try {
			const userUpdate = await Users.updateOne(
				{ _id: data.id },
				{
					$set: {
						first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: data.password,
            updated_date : new Date()
					}
				}
			)
			return userUpdate
		} catch (error) {
			throw error
		}
	}
	return false
}

const deleteUserById = async id => {
	if (id) {
		try {
			const userDelete = await Users.deleteOne()
			return userDelete
		} catch (error) {
			throw error
		}
	}
	return false
}

module.exports = {
	getAllUser,
	getAllUserLimit,
	getAllUserCriteria,
	getAllUserCriteriaCheckLimit,
	addNewUser,
	getUserById,
  updateOneUserById,
  deleteUserById
}
