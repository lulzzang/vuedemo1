var express = require('express');
var router = express.Router();



const axios=require('axios')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express1' });
});


// 引入cors
var app = express();
const cors=require("cors")
app.use(cors())
// `CORS`主要的实现方式是服务端通过对响应头的设置，接收跨域请求的处理。
app.all('*', function (req, res) {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')

  res.header('Access-Control-Allow-Methods', 'GEt,POST,PUT')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Content-Type', 'application/json;charset=utf-8')
  req.next()
})


// token相关
let jwt=require("jsonwebtoken")//安装了jsonwebtoken用来生成token
//  用户信息
let payload={username:"wenwen",password:666666}
// 口令
 let secret="xiaoluxian"
//   生成token
 let token=jwt.sign(payload,secret,{  //这里生成token啦
   expiresIn:600
 })


 router.get('/api/login', function(req, res, next) {
  res.send({
    code:200,
    data:{
      success:true,
      msg:"请求登录~",
      name:"徐艺洋",
      token:token,
      yzm:8848
    }
  })
});



router.get('/api/code', function(req, res, next) {
// 模拟生成验证码
var num="";
for(var i=0;i<4;i++){
	  num+=Math.floor(Math.random()*10)
}
  res.send({
    code:200,
    data:{
      success:true,
      msg:"请求验证码",
      name:"徐艺洋yzm",
      token:token,
      yzm:num
    }
  })
});


router.get('/api/test1', function(req, res, next) {
  res.send({
    code:200,
    data:{
      success:true,
      msg:"请求数据成功1",
      name:"李沁",
      token:token
    }
  })
});

router.post('/api/test2', function(req, res, next) {
  res.send({
    code:200,
    data:{
      success:true,
      msg:"请求数据成功2",
      name:"李一桐"
    }
  })
});


router.get('/api/test3', function(req, res, next) {
  res.send({
    code:200,
    data:{
      success:true,
      msg:"请求数据成功3",
      name:"白鹿"
    }
  })
});



// 分类的接口
router.get("/api/goods", function (req, res, next){
  res.send({
    code: 200,
    data: [
      {
        id: 0,
        name: "推荐类",
        data: [
          {
            id: 0,
            name: "推荐",
            list: [
              {
                id: 0,
                name: "铁观音",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 1,
                name: "功夫茶具",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 2,
                name: "茶具电器",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 3,
                name: "紫砂壶",
                imgUrl: "./images/list4.jpg",
              },
              {
                id: 4,
                name: "龙井茶",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 5,
                name: "武夷岩茶",
                imgUrl: "./images/list5.jpg",
              },
            ],
          },
        ],
      },
      //一级
      {
        //一级
        id: 1,
        name: "绿茶类",
        data: [
          {
            //二级
            id: 0,
            name: "绿茶",
            list: [
              {
                id: 0,
                name: "龙井",
                imgUrl: "./images/list5.jpg",
              },
              {
                id: 1,
                name: "碧螺春",
                imgUrl: "./images/list5.jpg",
              },
              {
                id: 2,
                name: "雀舌",
                imgUrl: "./images/list2.jpg",
              },
              {
                id: 3,
                name: "湄潭翠芽",
                imgUrl: "./images/list3.jpg",
              },
              {
                id: 4,
                name: "峨眉雪芽",
                imgUrl: "./images/list1.jpeg",
              },
            ],
          },
        ],
      },
       //一级
       {
        //一级
        id: 2,
        name: "乌龙类",
        data: [
          {
            //二级
            id: 0,
            name: "乌龙",
            list: [
              {
                id: 0,
                name: "铁罗汉",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 1,
                name: "白鸡冠",
                imgUrl: "./images/list2.jpg",
              },
              {
                id: 2,
                name: "水金龟",
                imgUrl: "./images/list3.jpg",
              },
              {
                id: 3,
                name: "东方美人",
                imgUrl: "./images/list4.jpg",
              },
              {
                id: 4,
                name: "黄金桂",
                imgUrl: "./images/list5.jpg",
              },
            ],
          },
        ],
      },
       //一级
       {
        //一级
        id: 3,
        name: "红茶类",
        data: [
          {
            id: 0,
            name: "红茶",
            list: [
              {
                id: 0,
                name: "铁罗汉",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 1,
                name: "白鸡冠",
                imgUrl: "./images/list5.jpg",
              },
              {
                id: 2,
                name: "水金龟",
                imgUrl: "./images/list2.jpg",
              },
              {
                id: 3,
                name: "东方美人",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 4,
                name: "黄金桂",
                imgUrl: "./images/list3.jpg",
              },
            ],
          },
        ],
      },
       {
        id: 4,
        name: "白茶类",
        data: [
          {
            //二级
            id: 0,
            name: "白茶",
            list: [
              {
                id: 0,
                name: "铁罗汉",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 1,
                name: "白鸡冠",
                imgUrl: "./images/list2.jpg",
              },
              {
                id: 2,
                name: "水金龟",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 3,
                name: "东方美人",
                imgUrl: "./images/list3.jpg",
              },
              {
                id: 4,
                name: "黄金桂",
                imgUrl: "./images/list4.jpg",
              },
            ],
          },
        ],
      },
       {
        id: 5,
        name: "普洱类",
        data: [
          {
            //二级
            id: 0,
            name: "普洱",
            list: [
              //三级
              {
                id: 0,
                name: "铁罗汉",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 1,
                name: "白鸡冠",
                imgUrl: "./images/list5.jpg",
              },
              {
                id: 2,
                name: "水金龟",
                imgUrl: "./images/list3.jpg",
              },
              {
                id: 3,
                name: "东方美人",
                imgUrl: "./images/list2.jpg",
              },
              {
                id: 4,
                name: "黄金桂",
                imgUrl: "./images/list2.jpg",
              },
            ],
          },
        ],
      },
    ],
  });
});

module.exports = router;
