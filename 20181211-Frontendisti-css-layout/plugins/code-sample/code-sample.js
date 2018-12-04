(function () {
    var removeTabFromStart = function (text) {
        function getIndentLevel(text) {
            var index = 0;
            while (text.charAt(index) === "\t" || 
                   text.charAt(index) === " ") {
                index++;
            }
            return index;
        }

        var lines = text.split('\n');
        var firstLineIndentLevel = getIndentLevel(lines[1]);

        text = "";
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i].substr(firstLineIndentLevel);
            text = text + "\n" + line;
        }

        return text.replace(/(^[ \t]*\n)/gm, "");
    };

    function createCodeSample(element, sourceCode, lang) {
        var pre = document.createElement('pre');
        pre.classList.add('code-sample__' + lang);
        var code = document.createElement('code');
        code.classList.add('hljs');
        code.classList.add('lang-' + lang);
        code.textContent = sourceCode;
        pre.appendChild(code);
        element.appendChild(pre);
    }

    document.querySelectorAll('[data-sample-url]').forEach(function (element) {
        var sampleUrl = element.getAttribute('data-sample-url');

        var htmlRequest = new XMLHttpRequest();
        htmlRequest.open('GET', sampleUrl, true);

        htmlRequest.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                var codeSample = document.createElement("div");
                codeSample.classList.add('code-sample');

                var sampleDocument = document.createElement('html');
                sampleDocument.innerHTML = this.response;

                var title = document.createElement('h2');
                title.classList.add('code-sample__title');
                title.innerText = sampleDocument.getElementsByTagName('title')[0].innerText;
                element.id = title.innerText.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
                    ;;
                codeSample.appendChild(title);

                var sampleHtml = sampleDocument.querySelectorAll('#sample-html')[0].innerHTML;
                sampleHtml = removeTabFromStart(sampleHtml);

                var sampleCss = sampleDocument.querySelectorAll('#sample-css')[0].innerHTML;
                sampleCss = removeTabFromStart(sampleCss);

                createCodeSample(codeSample, sampleCss, 'css');
                createCodeSample(codeSample, sampleHtml, 'html');

                var sample = document.createElement('div');
                sample.classList.add('code-sample__sample');

                var link = document.createElement('a');
                link.classList.add('code-sample__sample__link');
                link.innerText = "Příklad";
                link.href = sampleUrl;
                link.target = 'code-sample';
                sample.appendChild(link);

                var sampleIframe = document.createElement("iframe");
                sampleIframe.classList.add('code-sample__sample__iframe');
                sampleIframe.src = sampleUrl;
                sampleIframe.frameBorder = "0";
                sampleIframe.width = "100%";
                
                sample.appendChild(sampleIframe);

                codeSample.appendChild(sample);

                element.appendChild(codeSample);
            }
        };

        htmlRequest.onerror = function (error) {
            console.log(error);
        };

        htmlRequest.send();
    });
})();