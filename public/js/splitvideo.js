    function onCvLoaded () {
        console.log('cv', cv);
        cv.onRuntimeInitialized = onReady;
    }
    let video = document.getElementById('video');
    let inputElement = document.getElementById('fileInput');
    inputElement.addEventListener('change', (e) => {
          video.src = URL.createObjectURL(e.target.files[0]);
        }, false);
        video.onload = function () {
          let mat = cv.imread(video);
          mat.delete();
        };
    const actionBtn = document.getElementById('actionBtn');
    const FPS = 30;
    let streaming = false;
    let count = 0;
    function onReady () {
        console.log('ready?');
        let src;
        let cap;
    
        video.controls = true;
        video.addEventListener('play', start);
        video.addEventListener('pause', stop);
    
        function start () {
            console.log('playing video');
            streaming = true;
            const width = video.width;
            const height = video.height;
            src = new cv.Mat(height, width, cv.CV_8UC4);
            cap = new cv.VideoCapture(video);
            setTimeout(processVideo, 0);
        }
    
        function stop () {
            console.log('paused or ended');
            streaming = false;
        }
    
        function processVideo () {
            if (!streaming) {
                src.delete();
                return;
            }
            const begin = Date.now();
            count = count + 1;
            if (count > 1) {
              let newCanvas = document.createElement("canvas");
              newCanvas.setAttribute("id", "canvasOutput".concat(count));
              newCanvas.setAttribute("width", 320); 
              newCanvas.setAttribute("height", 240);
              newCanvas.setAttribute("title", count);
              let currentCanvas = document.getElementById("canvasOutput".concat(count-1));
              document.body.insertBefore(newCanvas, currentCanvas);
            }

            cap.read(src)
            cv.imshow('canvasOutput'.concat(count), src);

            const delay = 1000/FPS - (Date.now() - begin);
            
            setTimeout(processVideo, delay);
        }
    }
  