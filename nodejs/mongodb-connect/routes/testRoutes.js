import express from "express"
import { isNumeric, isEmail } from 'validator';
const router = express.Router()
import { SUCCESS, FAILED } from "../constans.js"

import UserControllers from "../controllers/testControllers.js"

router.get("/", async (req, res) => {
	try {
		let allUser = await UserControllers.getAllUser()
		if (allUser) {
			res.json({
				status: SUCCESS,
				data: allUser,
				message: `Lấy danh sách user thành công`
			})
		} else {
			res.json({
				status: FAILED,
				data: {},
				message: `Lỗi trong quá trình lấy danh sách user`
			})
		}
	} catch (error) {
		res.json({
			status: FAILED,
			data: {},
			message: `Lỗi xảy ra trong quá trình lấy dữ liệu user từ cơ sở dữ liệu ${error}`
		})
	}
})

router.get("/limit", async (req, res) => {
	try {
		let allUserLimit = await UserControllers.getAllUserLimit()
		if (allUserLimit) {
			res.json({
				status: SUCCESS,
				data: allUserLimit,
				message: `Lấy danh sách user thành công`
			})
		} else {
			res.json({
				status: FAILED,
				data: {},
				message: `Lỗi trong quá trình lấy danh sách user`
			})
		}
	} catch (error) {
		res.json({
			status: FAILED,
			data: {},
			message: `Lỗi xảy ra trong quá trình lấy dữ liệu user từ cơ sở dữ liệu ${error}`
		})
	}
})

router.get("/criteria", async (req, res) => {
	let limit = req.query.limit;
	if (!isNumeric(limit)) {
		res.json({
			status: FAILED,
			data: {},
			message: `Limit phải là số`
		})
		return;
	}

	limit = parseInt(limit);
	try {
		let allUserCriteria = await UserControllers.getAllUserCriteria(limit)
		if (allUserCriteria) {
			res.json({
				status: SUCCESS,
				data: allUserCriteria,
				message: `Lấy danh sách user thành công`
			})
		} else {
			res.json({
				status: FAILED,
				data: {},
				message: `Lỗi trong quá trình lấy danh sách user`
			})
		}
	} catch (error) {
		res.json({
			status: FAILED,
			data: {},
			message: `Lỗi xảy ra trong quá trình lấy dữ liệu user từ cơ sở dữ liệu ${error}`
		})
	}
})


router.get("/criteriaCheckLimit", async (req, res) => {

	let criteria = { name: new RegExp(req.query.name, "i") }
	let limit = parseInt(req.query.limit) > 0 ? parseInt(req.query.limit) : 100
	try {
		let allUserCriteria = await UserControllers.getAllUserCriteriaCheckLimit(criteria, limit)
		if (allUserCriteria) {
			res.json({
				status: SUCCESS,
				data: allUserCriteria,
				message: `Lấy danh sách user thành công`
			})
		} else {
			res.json({
				status: FAILED,
				data: {},
				message: `Lỗi trong quá trình lấy danh sách user`
			})
		}
	} catch (error) {
		res.json({
			status: FAILED,
			data: {},
			message: `Lỗi xảy ra trong quá trình lấy dữ liệu user từ cơ sở dữ liệu ${error}`
		})
	}
})

router.post("/", async (req, res) => {
	let data = req.body
	try {
		let newUser = await UserControllers.addNewUser(data)
		if (newUser) {
			res.json({
				status: SUCCESS,
				data: newUser,
				message: `Tạo mới user thành công`
			})
		} else {
			res.json({
				status: FAILED,
				data: {},
				message: `Lỗi trong quá trình tạo mới user`
			})
		}
	} catch (error) {
		res.json({
			status: FAILED,
			data: {},
			message: `Lỗi xảy ra trong quá trình tạo mới user ở cơ sở dữ liệu ${error}`
		})
	}
})

router.get("/:id", async (req, res) => {
	let id = req.params.id
	if (id) {
		try {
			let user = await UserControllers.getUserById(id)
			if (user) {
				res.json({
					status: SUCCESS,
					data: user,
					message: `Truy xuất user thành công`
				})
			} else {
				res.json({
					status: FAILED,
					data: {},
					message: `Lỗi trong quá trình truy xuất user`
				})
			}
		} catch (error) {
			res.json({
				status: FAILED,
				data: {},
				message: `Lỗi xảy ra trong quá trình truy xuất user ở cơ sở dữ liệu ${error}`
			})
		}
	}
})

router.put("/", async (req, res) => {
	let data = req.body
	if (data) {
		try {
			let userUpdate = await UserControllers.updateOneUserById(data)
			if (userUpdate) {
				res.json({
					status: SUCCESS,
					data: userUpdate,
					message: `Cập nhật user thành công`
				})
			} else {
				res.json({
					status: FAILED,
					data: {},
					message: `Lỗi trong quá trình cập nhật user`
				})
			}
		} catch (error) {
			res.json({
				status: FAILED,
				data: {},
				message: `Lỗi xảy ra trong quá trình cập nhật user ở cơ sở dữ liệu ${error}`
			})
		}
	}
})

router.delete("/", async (req, res) => {
	let id = req.body.id
	if (id) {
		try {
			let userDelete = await UserControllers.deleteUserById(id)
			if (userDelete) {
				res.json({
					status: SUCCESS,
					data: userDelete,
					message: `Xóa user thành công`
				})
			} else {
				res.json({
					status: FAILED,
					data: {},
					message: `Lỗi trong quá trình xóa user`
				})
			}
		} catch (error) {
			res.json({
				status: FAILED,
				data: {},
				message: `Lỗi xảy ra trong quá trình xóa user ở cơ sở dữ liệu ${error}`
			})
		}
	}
})
module.exports = router
