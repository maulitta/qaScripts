/*
Original script:
javascript: (function () { var url = document.location; var links = document.getElementsByTagName('meta'); var found = 'none';var robotNames = {'robots':0, 'yandex':0, 'google':0}; for (var i = 0, l; l = links[i]; i++) { if (l.getAttribute('name') in robotNames) { alert(l.getAttribute('content'), l.getAttribute('name'));} break; } })();
javascript: (function () { var url = document.location; var links = document.getElementsByTagName('meta'); var found = 'none'; for (var i = 0, l; l = links[i]; i++) { if (l.getAttribute('name') == 'robots') { found = l.getAttribute('content'); break; } } alert(found); })();
*/

javascript: (function () {
    var url = document.location;
    var meta_nodes = document.getElementsByTagName('meta');
    var link_nodes = document.getElementsByTagName('link');
    var canonical = 'none';
    var message = 'none';
    var robotNames = {'robots':0, 'yandex':0, 'google':0};
    for (var i = 0, l; l = meta_nodes[i]; i++) {
        if (l.getAttribute('name') in robotNames) {
            message = 'meta name: ' + l.getAttribute('name') + '\n' + 'meta content: ' + l.getAttribute('content');
            break;
        }
    }
    for (var i = 0; i < link_nodes.length; i++)  {

        if (link_nodes[i].getAttribute('rel') == 'canonical') {
            canonical = link_nodes[i].getAttribute('href');
        }
    }
    message = message + '\n' + 'canonical: ' + canonical;
    alert(message);
})();
"company_id";"company_is_on_bigl";"popolnenie_prosale_sum";"prosale_balance_now";"product_id";"product_is_on_bigl";"sold_times"