(function() {
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

    document.querySelectorAll('.sample__title').forEach(function(element) {
        element.innerText = document.title;
    }); 
})();

