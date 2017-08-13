let express = require('express');
let app = express();
var Mock = require('mockjs');
var Random = Mock.Random;

app.use(express.static(__dirname));

app.get('/list', function (req, res) {
	var data = Mock.mock({
	    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
	    'list|1-10': [{
	        // 属性 id 是一个自增数，起始值为 1，每次增 1
	        'id|+1': 1,
	        'name': Random.cname(),
	        'birthday': Random.date('yyyy-MM-dd') 
	    }]
	});
  	res.send(JSON.stringify(data));
});

// 网站首页接受 POST 请求
app.post('/addComment', function (req, res) {
  res.send('Got a POST request');
});

// /user 节点接受 PUT 请求
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

// /user 节点接受 DELETE 请求
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});


app.listen(8080);