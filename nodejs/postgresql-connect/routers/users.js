import express from "express"
const router = express.Router()
import { SUCCESS, FAILED } from "../constants"

import userCL from "../controllers/userCL"

/* GET users listing. */

router.get("/", async (req, res) => {
	try {
		let allUser = await userCL.getAllUser()
		if (allUser) {
			res.json({
				result: SUCCESS,
				data: allUser,
				description: `Lấy danh sách user thành công`
			})
		} else {
			res.json({
				result: FAILED,
				data: "",
				description: `Lỗi trong quá trình lấy danh sách user`
			})
		}
	} catch (error) {
		res.json({
			result: FAILED,
			data: "",
			description: `Lỗi xảy ra trong quá trình lấy dữ liệu user từ cơ sở dữ liệu ${error}`
		})
	}
})


router.post("/", async (req, res) => {
	let data = req.body
	try {
		let newUser = await userCL.addNewUser(data)
		if (newUser) {
			res.json({
				result: SUCCESS,
				data: newUser,
				description: `Tạo mới user thành công`
			})
		} else {
			res.json({
				result: FAILED,
				data: "",
				description: `Lỗi trong quá trình khởi tạo user`
			})
		}
	} catch (error) {
		res.json({
			result: FAILED,
			data: "",
			description: `Lỗi xảy ra trong quá trình tạo mới user từ cơ sở dữ liệu ${error}`
		})
	}
})

router.get("/update/:id", async (req,res) => {
	let id = req.params.id
	try {
		let user = await userCL.getUserById(id)
		if (user) {
			res.json({
				result: SUCCESS,
				data: user,
				description: `Tìm kiếm user thành công`
			})
		} else {
			res.json({
				result: FAILED,
				data: "",
				description: `Lỗi trong quá trình tìm kiếm user`
			})
		}
	} catch (error) {
		res.json({
			result: FAILED,
			data: "",
			description: `Lỗi xảy ra trong quá trình tìm kiếm user từ cơ sở dữ liệu ${error}`
		})
	}
})


router.put("/update/:id", async (req, res) => {
	let data = req.body
	data.id = req.params.id
	
	try {
		let editUser = await userCL.updateUser(data)
		if(editUser){
			res.json({
				result: SUCCESS,
				data: editUser,
				description: `Update user thành công`
			})
		}else{
			res.json({
				result: FAILED,
				data: "",
				description: `Lỗi trong quá trình update user`
			})
		}
	} catch (error) {
		res.json({
			result: FAILED,
			data: "",
			description: `Lỗi xảy ra trong quá trình update user từ cơ sở dữ liệu ${error}`
		})
	}
})

router.delete("/delete", async(req, res)=> {
	let id = req.body.id
	console.log(id);
	try {
		let userDeleted = await userCL.deleteUser(id)
		if(userDeleted){
			res.json({
				result: SUCCESS,
				data: userDeleted,
				description: `Delete user thành công`
			})
		}else{
			res.json({
				result: FAILED,
				data: "",
				description: `Lỗi trong quá trình Delete user`
			})
		}
	} catch (error) {
		res.json({
			result: FAILED,
			data: "",
			description: `Lỗi xảy ra trong quá trình Delete user từ cơ sở dữ liệu ${error}`
		})
	}
})

module.exports = router
