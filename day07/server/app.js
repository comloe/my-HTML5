const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser=require('body-parser')
const app = express();
app.listen(3100, () => {
    console.log('服务器启动...')
});
const pool = mysql.createPool({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: '',
    database: 'xzqa'
});
app.use( bodyParser.urlencoded({
    extended:false
  }) );
app.use(cors({
    origin: ['http://localhost:8080', 'http://127.0.0.1:8080']
}));
app.get('/categories', (req, res) => {
    let sql = 'SELECT * FROM xzqa_category';
    pool.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});
app.get('/article', (req, res) => {
    var $lid = req.query.cid;
    var $page = req.query.page;
    let pageSize=20;
    let page=($page-1)*pageSize;
    let sql = 'SELECT id,subject,description,image FROM xzqa_article WHERE category_id=? LIMIT ?,?';
    pool.query(sql,[$lid,page,pageSize],(err, result) => {
        if (err) throw err;
        sql='SELECT COUNT(id) AS count FROM xzqa_article WHERE category_id=?'
        pool.query(sql,[$lid],(err,record)=>{
            if(err) throw err;
            let count=record[0].count;
            let pagecount= Math.ceil(count/pageSize);
            res.send({result:result,pagecount:pagecount});
        })
    })
})
app.get('/details',(req, res)=>{
    let $lid=req.query.lid;
    let sql='SELECT id,subject,content,author_id FROM xzqa_article WHERE id=?'
    pool.query(sql,[$lid],(err,results)=>{
        if(err) throw err;
        sql='SELECT id,username,avatar FROM xzqa_author WHERE id='+results[0].author_id;
        pool.query(sql,(err,res_author)=>{
            if(err) throw err;
            res.send({results:results[0],res_author:res_author[0]});
        })
    })
})
app.post('/login',(req,res)=>{
    let obj=req.body
    let sql='SELECT id,username FROM xzqa_author WHERE username=? AND password=MD5(?)'
    pool.query(sql,[obj.username,obj.password],(err,resules)=>{
        if(err) throw err;
        resules.length<=0?res.send({message:"登录失败",code:0}):res.send({message:"登录成功",code:1});
    })
})