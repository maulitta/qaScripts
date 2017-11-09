javascript: (function () {
    var currentUrl = document.location;
    var headLinks = document.getElementsByTagName('link');

    var compareStatusText = {
        'equal': '\r\nCanonical НЕ совпадает с текущей страницей:\r\n',
        'notEqual': '\r\nCanonical совпадает с текущей страницей:\r\n'
    };
    var message = '';

    for (var i = 0; i < headLinks.length; i++) {
        if (headLinks[i].getAttribute('rel') == 'canonical') {
            var resultUrl = headLinks[i].getAttribute('href');
            var message = '';
            if (resultUrl != currentUrl) {
                message += compareStatusText.equal + resultUrl;
                break;
            } else {
                message += compareStatusText.notEqual + resultUrl;
                break;
            }
        }
    }
    if (message == '') message = 'Нет каноникала';
    alert(message);
})();
