(function () {
    function inIframe() {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    }

    if (!inIframe()) {
        document.body.classList.remove('sample--in-iframe');
    }

    document.querySelectorAll('.sample__title').forEach(function (element) {
        element.innerText = document.title;
    });

    (function () {
        var images = document.querySelectorAll("img[data-srcset]");

        for (var index = 0; index < images.length; index++) {
            var image = images[index];

            image.setAttribute("srcset", image.getAttribute("data-srcset"));
            image.removeAttribute("data-srcset");
        }
    })();

    (function () {
        var images = document.querySelectorAll("img[data-src]");
        for (var index = 0; index < images.length; index++) {
            var image = images[index];

            image.setAttribute("src", image.getAttribute("data-src"));
            image.removeAttribute("data-src");
        }
    })();
})();

