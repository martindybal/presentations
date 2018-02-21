Reveal.initialize({
    width: "100%",
    height: "100%",
    minScale: 1,
    maxScale: 1,
    controls: true,
    progress: true,
    history: true,
    loop: false,
    //mouseWheel: true,
    //transition: Reveal.getQueryHash().transition || 'default',
    dependencies: [
        {
            src: 'plugin/highlight/highlight.js',
            async: true,
            callback: function () { hljs.initHighlightingOnLoad(); }
        }
    ]
});
Reveal.configure({
    keyboard: {
        37: 'prev', // go to the next slide when the ENTER key is pressed
        39: 'next' // go to the next slide when the ENTER key is pressed
    }
});