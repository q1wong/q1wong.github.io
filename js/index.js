var firstfocus = true;
function getTops(){
	var url = 'http://top.baidu.com/';
	
};

function onFocus(){
	if(firstfocus==false){
		return;
	}
	//var url = "http://top.baidu.com/m/#buzz/1/515";
	var url = "http://links.news.sohu.com/scscen013.html";
	$.ajax({
		url:url,
		type:"GET",
		dataType: "jsonp",
		jsonp: "callbackFunction",
		jsonpCallback: "callback",
		/*success: function(data){
			alert("请求成功");
			$("#textArea").val(data);
		}*/
	});
	/*var xmlhttp = new XMLHttpRequest();
  	xmlhttp.open("GET",url,true);
  	xmlhttp.send();
	xmlhttp.onreadystatechange = function () {
            // 为了保证 数据 完整返回，我们一般会判断 两个值
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                // 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
                // 5.在注册的事件中 获取 返回的 内容 并修改页面的显示
                alert('数据返回成功');

                // 数据是保存在 异步对象的 属性中
                console.log(xmlhttp.responseText);

                // 修改页面的显示
				$("#textArea").get(0).value=xmlhttp.responseText;	
            }
        };*/
  	
	firstfocus = false;
};

function callback(data) {
	alert("JSON.stringify(data)");
    $('#textArea').val(JSON.stringify(data));
};

function setTabb(name,cursel,n){
for(i=1;i<=n;i++){
 var menu=document.getElementById(name+i);
 var con=document.getElementById("con_"+name+"_"+i);
 menu.className=i==cursel?"hover":"";
 con.style.display=i==cursel?"block":"none";
};
};
