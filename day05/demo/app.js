const express=require("express");
const multer=require("multer");
const mysql=require("mysql")
const pool=mysql.createPool({
    host:"127.0.0.1",
    port:3306,
    user:"root",
    password:"",
    database:"multer"
})
const uuid=require("uuid")
//设置multer---上传位置
const upload=multer({
    dest:'upload'
})
const fs=require("fs");
const app=express();
app.listen(3000,()=>{
    console.log("服务器启动")
})
app.use(express.static('public'))
//单文件HTML页面上传的路由
app.get("/single",(req,res)=>{
    let data=fs.readFileSync('./01_single.html',{encoding:"utf8"})
    res.send(data);
})
//单文件上传时出来业务的路由
app.post("/single",upload.single("avatar"),(req,res)=>{  
    res.send("上传成功")
})
//多文件HTML页面上传的路由
app.get("/multiple",(req,res)=>{
    let data=fs.readFileSync('./02_multiple.html',{encoding:"utf8"})
    res.send(data);
})
//多文件上传时出来业务的路由
app.post("/multiple",upload.array("avatar"),(req,res)=>{
    res.send("上传成功")
})
//多文件HTML页面上传的路由--自定义
app.get("/custom",(req,res)=>{
    let data=fs.readFileSync('./03_custom.html',{encoding:"utf8"})
    res.send(data);
})

//声明存储规则
let storage=multer.diskStorage({
    destination(req,file,cb){
        //构建一个日期函数
        let now=new Date();
        let year=now.getFullYear();
        let month=now.getMonth()+1;
        let day=now.getDate();
        month=month<10?'0'+month:month;
        day=day<10?"0"+day:day;
        let path='upload/'+year+'-'+month+'-'+day
        if(!fs.existsSync(path)){
            fs.mkdirSync(path,err=>{
                if(err) throw err;
            })
        }
        cb(null,path)
    },
    filename(req,file,cb){
        //获取原始的名称
        let origin=file.originalname;
        //获取原始名称的扩展名--带点
        let extension=origin.substr(origin.lastIndexOf('.')).toLowerCase();
        let mainname=uuid.v1();
        let newname=mainname+extension;
        cb(null,newname)
    }
});
const upload1=multer({
    storage:storage
})


//多文件上传时出来业务的路由--自定义存储规则
app.post("/custom",upload1.array("avatar"),(req,res)=>{
    res.send("上传成功")
})
//拖放文件上传时出来业务的路由
app.post("/drag",upload1.array("aaa"),(req,res)=>{
    let $files=req.files;
    if($files.length){
        for(let n=0;n<$files.length;n++){
            let file=$files[n];
            let sql="INSERT INTO images(imageurl) VALUES(?)";
            pool.query(sql,[file.destination.substr(7)+'/'+file.filename],(err,result)=>{
                if(err) throw err;
            })
        }
    }
    res.send("上传成功");
})

//拖放上传
app.get("/drag",(req,res)=>{
    let data=fs.readFileSync('./04_drag.html',{encoding:"utf8"})
    res.send(data);
})