// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {
    layout: '456',
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/settings', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('settings', {
    layout: '456',
    // ↙ сюди вводимо JSON дані
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/testy', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('testy', {
    layout: '456',
    // ↙ сюди вводимо JSON дані
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/sign', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('sign', {
    layout: '456',
    // ↙ сюди вводимо JSON дані
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/insta', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('insta', {
    layout: '456',
    // ↙ сюди вводимо JSON дані
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/myStoris', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('myStoris', {
    layout: '456',
    // ↙ сюди вводимо JSON дані
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/play-games', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('play-games', {
    layout: '456',
    // ↙ сюди вводимо JSON дані
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/game-1', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('cuber', {
    layout: 'game',
    // ↙ сюди вводимо JSON дані
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/game-2', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('game-2', {
    layout: 'game-2',
    // ↙ сюди вводимо JSON дані
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/game-2-play', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('game-2-play', {
    layout: 'game-2',
    // ↙ сюди вводимо JSON дані
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/game-2-play-playing', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('playing', {
    layout: 'game-2',
    // ↙ сюди вводимо JSON дані
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
