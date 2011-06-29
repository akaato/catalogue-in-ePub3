//
// Grep in JavaScript
//   ref. http://0xcc.net/blog/archives/000019.html
function quotemeta (string) {
    return string.replace(/(\W)/, "\\$1");
}

function grep (pattern) {
//    clear();

    var regex = new RegExp(quotemeta(pattern), "i");
    var articles = document.getElementsByTagName('article');
    var length = articles.length;
    var result = document.getElementById('result');
    for (var i=0; i < length; i++) {
        var e = articles.item(i);
        if (e.className == "item") {
            if (e.innerHTML.match(regex)) {
	        result.appendChild(e.cloneNode(true));
		i++;
		length++;
            }
        }
    }
}

function clear () {
    var search = document.getElementById('search');
    search.value = "";

    var result = document.getElementById('result');
    if (result.hasChildNodes()) {
        var articles = result.childNodes;
        var length = articles.length;
        for (var i = articles.length-1; i >= 0; i--) {
            result.removeChild(articles[i]);
        }
    }
}