javascript: (function () {
    var url = document.location;
    var links = document.getElementsByTagName('link');
    var str = '';
    var found = '';

    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute('rel') == 'canonical') {
            found = links[i].getAttribute('href');

            if (found != url) {
                str = str + '\r\n' + found + '\r\nCanonical не совпадает с текущей страницей\r\n--------------------------------------------------\r\n';
            } else  {
                str = str + '\r\n' + found + '\r\nCanonical совпадает с текущей страницей\r\n--------------------------------------------------\r\n';
            }
        }
    }
        if (str == '') str = 'Нет каноникала';
        alert(str);
})();
