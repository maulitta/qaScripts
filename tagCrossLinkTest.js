javascript: ( function() {
    if (sessionStorage.getItem("sessionId") == null) {
            sessionStorage.setItem("sessionId", 0);
        }

    var query = document.querySelectorAll('.qa-tag-link[href^="/t-"]');
    if (query.length == 0) {
        query = document.querySelectorAll('[href^="/t-"]');
    }
    var items = [];
    for (let i = 0; i < query.length; i++) {
        items.push(query[i].text);
    }

    var sessionId = sessionStorage.getItem('sessionId');
    var previousSessionId = parseInt(sessionId) - 1;
    if (sessionStorage.getItem("tagNames_" + previousSessionId) !== null) {
            var previousItems = JSON.parse(sessionStorage.getItem("tagNames_" + previousSessionId)).sort();
            var currentItems = items.sort();
            var newItems = currentItems.filter(item => !previousItems.includes(item));
            var itemsLength = previousItems.length;
            if (currentItems.length > previousItems.length) {
                itemsLength = currentItems.length;
            }
            var notEqualItems = '';
            var message = "";
            for (let i = 0; i < itemsLength; i++) {
                if (previousItems[i] === currentItems[i]) {
                    message += previousItems[i] + ' —— ' + currentItems[i] + '\n';
                } else {
                   notEqualItems += previousItems[i] + ' —— ' + currentItems[i] + '\n';
                }
        }
        message += notEqualItems + '\n' + 'Новые элементы: ' + newItems;
        alert(message);
    }
    sessionStorage.setItem("tagNames_" + sessionId, JSON.stringify(items));
    sessionStorage.setItem("sessionId", ++sessionId);
})();