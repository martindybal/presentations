window.onload = function () {
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

        multiplex: {
            secret: '15416809388682258903',
            id: '1ff4091619892812',
            url: 'https://reveal-js-multiplex-ccjbegmaii.now.sh'
        },

        dependencies: [
            {
                src: '//cdn.socket.io/socket.io-1.3.5.js',
                async: true
            }, {
                src: '../reveal/plugin/multiplex/master.js',
                async: true
            }, {
                src: '../reveal/plugin/notes/notes.js',
                async: true
            }, {
                src: '../reveal/plugin/highlight/highlight.js',
                async: true,
                callback: function() {
                    hljs.initHighlighting();
                }
            }
        ]
    });
//Reveal.configure({
//    keyboard: {
//        37: 'prev',
//        39: 'next' 
//    }
//});

};