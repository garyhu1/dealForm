window.onload = function() {
	var getValue = document.getElementById("get-value");
	var getColor = document.getElementById("get-color");
	var nameEdit = document.getElementById("name");
	var cat = document.getElementById("cat");
	var mon = document.getElementById("monkey");
	var c = document.getElementById("c");
	var form = document.getElementById("test-form");
	/**
	 * 获取输入框的内容
	 */
	getValue.onclick = function() {
		var s = nameEdit.value;
		s = '阴，不是天在变是我们无法理解'
		nameEdit.value = s;
		cat.checked = true;
		alert(cat.value);
	}
	/**
	 * 获取颜色值
	 */
	getColor.onclick = function() {
		alert(c.value);
	}
	/**
	 * 点击按钮提交
	 */
	function checkForm(){
		var con = document.getElementById("con");
		var pass = document.getElementById("pass");
		pass.value = "toMD5()";
		return true;
	}
}
