javascript: (function () {
	var headLinks = document.getElementsByTagName('link');
	var nextObj = {url: undefined, name: 'next'};
	var prevObj = {url: undefined, name: 'prev'};
	
	for (let item of headLinks) {
		if (item.getAttribute('rel') == 'next') {
			nextObj.url = item.getAttribute('href');
		}
		if (item.getAttribute('rel') == 'prev') {
			prevObj.url = item.getAttribute('href');
		}
	}

	var basicUri = document.createElement('a');
	var message = '';
	const getResult = (obj) => {
		if (obj.url) {
			basicUri.href = obj.url;
			let uri = decodeURIComponent(basicUri.pathname + basicUri.search);
			message += '\r\n' + obj.name.toUpperCase() + ': ' + uri;
		} else {
			message += '\r\n' + obj.name.toUpperCase() + ': NOT_FOUND';
		}
	};
	getResult(nextObj);
	getResult(prevObj);
	alert(message);
})();
