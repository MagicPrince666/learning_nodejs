var fs = require("fs");
// 执行前创建一个空的 /tmp/test 目录
console.log("准备删除目录 ./test1");
fs.rmdir("./test1",function(err){
   if (err) {
       return console.error(err);
   }
   console.log("读取 ./test1 目录");
   fs.readdir("./test1",function(err, files){
      if (err) {
          return console.error(err);
      }
      files.forEach( function (file){
          console.log( file );
      });
   });
});