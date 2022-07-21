const mysql = require('mysql');
const db_config={
  host:'localhost',
  user: 'root',
  password: 'shitm',
  port: '3306',
  database: 'node',
  timezone: 'SYSTEM'
}
let connect = mysql.createConnection(db_config)

connect.connect(function (err) {
  if(err) {
    console.log(`'mysql连接失败：'${err}`);
  } else {
    console.log('mysql连接成功');
  }
})

let sqlQuery='select * from seven'
connect.query(sqlQuery,function (err,res) {
  if (err) {
    console.log(`'SQL error:' ${err}`);
  } else {
    console.log(res);
    closeMysql(connect)
  }
})

function closeMysql(connect) {
  connect.end(err=>{
    if(err) {
      console.log(`'mysql关闭失败：'${err}`);
    } else {
      console.log('mysql关闭成功');
    }
  })
}