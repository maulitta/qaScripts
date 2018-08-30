javascript: (function () {
	var currentUrl = document.location;
	var headLinks = document.getElementsByTagName('link');
	var compareStatusText = {
		'equal': '\r\nCanonical НЕ совпадает с текущей страницей:\r\n',
		'notEqual': '\r\nCanonical совпадает с текущей страницей:\r\n' 
	};
	var message = '';
	for (let item of headLinks) {
		if (item.getAttribute('rel') == 'canonical') {
			var itemUrl = item.getAttribute('href');
			if (itemUrl != currentUrl) {
				message += compareStatusText.equal + itemUrl;
				break;
			} else {
				message += compareStatusText.notEqual + decodeURIComponent(itemUrl);
				break;
			}
		}
	}
	if (message == '') message = 'Нет каноникала';
	alert(message);
})();
