(function() {

    var peerServer = {
        host: "peer-server-dev.herokuapp.com",
        port: 443,
        secure: true,
        debug: 3
    }

    document.addEventListener('DOMContentLoaded', main);

    function main() {

        var peerId = getQueryString('peer');

        if (peerId) {
            connect(peerId);
        } else {
            initDraw();
            console.info('You are the designer');
        }

    }

    var initDraw = function() {
        var video = document.getElementById('video');
        video.style.display = 'none';
        
        var canvas = new fabric.Canvas('canvas');
        canvas.backgroundColor="red";
        canvas.isDrawingMode = true;
        canvas.renderAll();

        var peer = new Peer(peerServer);
    }

    var connect = function(peerId) {
        var canvas = document.getElementById('canvas');
        canvas.style.display = 'none';
        
        var video = document.getElementById('video');
    }


    var getQueryString = function (field, url) {
        var href = url ? url : window.location.href;
        var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
        var string = reg.exec(href);
        return string ? string[1] : null;
    };

})();