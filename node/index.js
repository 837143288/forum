const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()
const router = express.Router()
const option = {
  host: 'localhost',
  user: 'root',
  password: 'shitm',
  port: '3306',
  database: 'forum',
  connectTimeout: 5000,
  multipleStatements: false,
}
app.use(cors()) // 解决跨域
app.use(express.json()) // json请求
app.use(express.urlencoded({ extended: false })) // 表单请求

let conn = mysql.createConnection(option)

module.exports = { conn, router, app }
