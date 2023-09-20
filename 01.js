net = require('net');

var scokets = []

var s = net.Server((scoket)=>{
  scokets.push(scoket)

  //监听客户端发送过来的信息
  scoket.on('data',(data)=>{
    for(var i=0;i<scokets.length;i++){
      if(scokets[i]===scoket)continue;
      scokets[i].write(data)
    }
  })

  //移除断开的客户端
  scoket.on('end',()=>{
    var i = scokets.indexOf(scoket);
    scokets.splice(i,1)
  })
})

s.listen(8000)
