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



	document.onclick = function (e) {
		var div = document.getElementById('menu');
		e = e || event;
		var target = e.target || e.srcElement;
		if (target.className != 'but') {
			while (target && target != div) {
				target = target.parentNode;
			}

			if (target != div) {
				div.style.display = 'none';
			}
		}
	}
