javascript: ( function() {
    let regions = {
        'Киев':'kiev.bigl.ua',
        'Харьков':'kharkov.bigl.ua',
        'Днепр':'dp.bigl.ua',
        'Одесса':'odessa.bigl.ua',
        'Хмельницкий':'khmelnitskiy.bigl.ua',
        'Запорожье':'zp.bigl.ua',
        'Львов':'lviv.bigl.ua',
        'Херсон':'kherson.bigl.ua',
        'Николаев':'nikolaev.bigl.ua',
        'Кривой Рог':'krivoyrog.bigl.ua',
        'Черновцы':'chernovtsy.bigl.ua',
        'Луцк':'lutsk.bigl.ua',
        'Черкассы':'cherkassy.bigl.ua',
        'Полтава':'poltava.bigl.ua',
        'Кременчуг':'kremenchug.bigl.ua',
        'Ивано-Франковск':'ivano-frankivsk.bigl.ua',
        'Винница':'vinnica.bigl.ua',
        'Ровно':'rivne.bigl.ua',
        'Житомир':'zhitomir.bigl.ua',
        'Тернополь':'ternopil.bigl.ua',
        'Сумы':'sumy.bigl.ua',
        'Ужгород':'uzhgorod.bigl.ua',
        'Чернигов':'chernigiv.bigl.ua',
        'Каменец-Подольский':'kam-pod.bigl.ua',
        'Мариуполь':'mariupol.bigl.ua',
        'Луганск':'lugansk.bigl.ua',
        'Донецк':'donetsk.bigl.ua',
        'Кропивницкий':'kropivnitskij.bigl.ua'
    };
    let query = document.querySelectorAll('a.ui-grid__item');
    let regionNames = [];
    let regionsOnPage = {};
    for (let i = 0; i < query.length; i++) {
        regionNames.push(query[i].text.trim());
        regionsOnPage[query[i].text.trim()] = query[i].getAttribute('href');
    }
    let regionsKeys = Object.keys(regions);
    let exludedRegions = [];
    for (let i = 0; i < regionsKeys.length; i++) {
        if (!regionNames.includes(regionsKeys[i])) {
            exludedRegions.push(regionsKeys[i]);
        }
    }


    let message = `
            Кол-во эл. одинаково:  ${regionsKeys.length == regionNames.length}\n
            На странице элементы из основных регионов: ${exludedRegions.every(elem => regionsKeys.includes(elem))}\n
            Регионы, отсутствующие на странице:
            ${exludedRegions.length > 0 ? exludedRegions : 'none'}\n
            Ссылки в блоке совпадают с эталонными:
            ${regionNames.every(elem => {
                return regionsOnPage[elem].replace('-trunk.uaprom', '.ua').includes(regions[elem]);
            })}
            `;
    alert(message);
})();