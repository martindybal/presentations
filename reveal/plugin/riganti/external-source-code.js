(function () {
    var codesSamples = document.querySelectorAll('pre[data-sample-source]').forEach(function (element) {
        var sourceUrl = element.getAttribute('data-sample-source');

        var request = new XMLHttpRequest();
        request.open('GET', sourceUrl, true);

        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                var code = document.createElement('code');
                var lang = element.getAttribute('data-sample-lang');
                code.classList.add('hljs');
                code.classList.add('lang-' + lang);
                code.textContent = this.response;

                console.log(code);

                element.appendChild(code);
            }
        };

        request.onerror = function (error) {
            console.log(error);
        };

        request.send();
    });
})();