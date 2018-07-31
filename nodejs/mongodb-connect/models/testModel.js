'use strict';

import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = mongoose.Schema({
	first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: true
	},
	email: { 
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	created_date: {
		type: Date,
		default: Date.now
	},
	updated_date: {
		type: Date,
		default: Date.now
	}
})

// setter de lam gi do truoc khi insert vao db
// UsersSechema.path('user').set(inputString=>{
// 	return inputString[0].toUpperCase() + inputString.slice(1)
// })

module.exports = mongoose.model('Users', UserSchema)