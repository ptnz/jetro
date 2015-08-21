/**************************************/
/* My JavaScript */
/**************************************/


window.onload = function () {
	function sh(elem) {
		if (elem.style.display != 'block') {
			elem.style.display = 'block';
		} else {
			elem.style.display = 'none';
		}
	}

	var div = document.getElementById('div');


	document.body.onclick = function (e) {
		e = e || event;
		var target = e.target || e.srcElement;
		if (target.className == 'test') {
			sh(div);
		} else {
			while (target && target != div) {
				target = target.parentNode;
			}
			if (target != div) {
				div.style.display = 'none';
			}
		}
	}
}

