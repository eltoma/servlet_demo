/**
 * Test1 异步请求
 */

function sendasyRequest(){
	// JQuery
	sendAsyRequestByJq("http://localhost:8080/ServletDemo/Test1");
	// JS NATIVE
	// sendAsyRequstByNativ("http://localhost:8080/ServletDemo/Test1");
}


/*******************************************************
 * 使用 JQuery 封装后发送异步请求
 ******************************************************/
function sendAsyRequestByJq(url) {
	$.ajax({
        type: "get",
        url: url,
//      data: ,  // 发送key-value参数
/*        cache: false,
        async : false,
        dataType: "json",*/
        success: function (data)
        {
        	alert(data);
        },
        error:function (XMLHttpRequest, textStatus, errorThrown) {      
            alert("请求失败！");
        }
     });
}







/**********************************************************
 *             JS 原生API发起异步请求
 ********************************************************/
var xmlhttp;
function sendAsyRequstByNativ(url) {
	xmlhttp = null;
	if (window.XMLHttpRequest) {// code for all new browsers
		xmlhttp = new XMLHttpRequest();
	} else if (window.ActiveXObject) {// code for IE5 and IE6
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if (xmlhttp != null) {
		// 注册回调
		xmlhttp.onreadystatechange = asyCallback;
		xmlhttp.open("GET", url, true);
		xmlhttp.send(null);
	} else {
		alert("Your browser does not support XMLHTTP.");
	}
}

// 回调函数
function asyCallback() {
	if (xmlhttp.readyState == 4) {// 4 = "loaded"
		if (xmlhttp.status == 200) {// 200 = OK
			alert(xmlhttp.response);
			console.log(xmlhttp);
			console.log(xmlhttp.response);
		} else {
			alert("Problem retrieving XML data");
		}
	}
}
