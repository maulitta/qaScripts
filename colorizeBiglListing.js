javascript: (function () {
    function stringToColour(str) {
        var hash = 0;

        for (var i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 8) - hash);
        }

        var colour = '#';
        for (var i = 0; i < 3; i++) {
            var value = (hash >> (i * 8)) & 0xFF;
            colour += ('00' + value.toString(16)).substr(-2);
        }
        return colour;
    }

    var products = document.querySelectorAll('[data-qaid=product-block]');
    products.forEach(function(elem, index, products) {
        company_name = elem.querySelector('[data-qaid=company-name]').getAttribute('title');
        elem.setAttribute('style', 'background: ' + stringToColour(company_name));
    });
})();