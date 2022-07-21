const { conn, router } = require('../index')
const { customAlphabet } = require('nanoid')
const nanoid = customAlphabet('1234567890', 5)
const { resData } = require('../utils/resData')
// router.get('/', function (req, res) {
//   conn.query('select * from list', (e, r) => {
//     console.log(r);
//     res.json(resData(r, 'SUCCESS'))
//   })
// })
router.get('/api/postList', function (req, res) {
  conn.query('select * from list', (e, r) => {
    const list = r.filter(item => {
      return item.userId === req.userId
    })
    res.send({ code: 200, data: list});
  })
})
router.post('/api/submit', function (req, res) {
  console.log(req);
  let data = {
    userId: req.userId,
    title: req.body.title,
    main: req.body.main,
    weather: req.body.weather,
    mood: req.body.mood,
    time: new Date(),
    listId: nanoid()
  }
  console.log(data);
  conn.query('insert into list set ?', data, (e, r) => {
  })
})
router.post('/api/search', function (req, res) {
  const startDate = new Date(req.body.startDate).getTime()
  const endDate = new Date(req.body.endDate).getTime()
  conn.query('select * from list', (e, r) => {
    let list = r.filter(item => {
      return item.userId === req.userId
    })

    if (req.body.startDate === '') {
      res.send({ code: 200, data: list});
    } else {
      const seatchList = list.filter(item => {
        let time = new Date(item.time).getTime()
        return time >= startDate && time <= endDate
      })
      res.send({ code: 200, data: seatchList});
    }

    
  })
})
module.exports = router
