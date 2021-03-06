const router = require('koa-router')()
const userService = require('../controllers/mySqlConfig')
// const util = require('../controllers/utils')

router.prefix('/users')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })

// 注册
router.post('/userRegister', async (ctx, next) => {
  let _username = ctx.request.body.username;
  let _userpwd = ctx.request.body.userpwd;
  let _nickname = ctx.request.body.nickname
  // console.log();
  if (!_username || !_userpwd || !_nickname) {
    ctx.body = {
      code: '80001',
      mess: '用户名密码和昵称不能为空'
    }
    return
  }
  await userService.findUser(_username).then(async (res) => {
    console.log(res);
    if (res.length) {
      ctx.body = {
        code: '80003',
        mess: '用户名已存在'
      }
    } else {
      await userService.insertUser([_username, _userpwd, _nickname]).then(res => {
        console.log(res);
        let r = ''
        if (res.affectedRows != 0) {
          r = 'ok'
          ctx.body = {
            code: '80000',
            data: r,
            mess: '注册成功'
          }
        } else {
          r = 'error'
          ctx.body = {
            code: '80002',
            data: r,
            mess: '注册失败'
          }
        }
      })
    }
  })
})

// 登录
router.post('/userLogin', async (ctx, next) => {
  let _username = ctx.request.body.username;
  let _userpwd = ctx.request.body.userpwd;

  // 把参数拿到数据库里查询
  await userService.userLogin(_username, _userpwd).then(res => {
    console.log(res);
    let r = '';
    if (res.length) {
      r = 'ok';
      let result = {
        id: res[0].id,
        nickname: res[0].nickname,
        username: res[0].username
      }
      ctx.body = {
        code: '80000',
        data: result,
        mess: '登录成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '80004',
        data: r,
        mess: '账号或密码错误'
      }
    }
  }).catch(err => {
    ctx.body = {
      code: '80002',
      data: err
    }
  })
})

// 查找文章
router.post('/findNoteListByType', async (ctx, next) => {
  let _note_type = ctx.request.body.note_type
  await userService.findNoteListByType(_note_type).then(res => {
    // console.log(res);
    let r = '';
    if (res.length) {
      ctx.body = {
        code: '80000',
        data: res,
        mess: '查找成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '80004',
        data: r,
        mess: '查找失败'
      }
    }
  })
})

router.post('/findNoteById', async (ctx, next) => {
  let _note_id = ctx.request.body.note_id
  await userService.findNoteById(_note_id).then(res => {
    // console.log(res);
    let r = '';
    if (res.length) {
      ctx.body = {
        code: '80000',
        data: res[0],
        mess: '查找成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '80004',
        data: r,
        mess: '查找失败'
      }
    }
  })
})

// 发布文章
router.post('/insertNote', async (ctx, next) => {
  let _userId = ctx.request.body.userId;
  let _title = ctx.request.body.title;
  let _note_type = ctx.request.body.note_type
  let _note_content = ctx.request.body.note_content
  let _head_img = ctx.request.body.head_img
  let _nickname = ctx.request.body.nickname
  console.log(123);
  if (!_title || !_note_type || !_note_content) {
    ctx.body = {
      code: '80001',
      mess: '文章不能为空'
    }
    return
  }
  await userService.insertNewNote([_userId, _title, _note_type, _note_content, _head_img, _nickname]).then(res => {
    let r = ''
    if (res.affectedRows != 0) {
      r = 'ok'
      ctx.body = {
        code: '80000',
        data: r,
        mess: '发布成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '80002',
        data: r,
        mess: '发布失败'
      }
    }
  })
})


router

module.exports = router
