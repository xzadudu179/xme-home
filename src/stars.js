let canvas=document.getElementById('canvas'),
            context=canvas.getContext('2d'),
            round=[],
            WIDTH,
            HEIGHT,
            initRoundPopulation=380;


        WIDTH=document.documentElement.clientWidth;
        HEIGHT=document.documentElement.clientHeight;

        // console.log(WIDTH,HEIGHT);

        canvas.width=WIDTH;
        canvas.height=HEIGHT;
        context.beginPath();
        context.arc(100,100,50,0,Math.PI*1,false);
        context.strokeStyle="white";
        context.stroke();

        const _getRandomR=Symbol('setRandomR');
        const _getRandomAlpha=Symbol('setRandomAlpha');

        class pointItem {
            constructor(index,x,y){
                this.index=index;
                this.x=x;
                this.y=y;
            }

            [_getRandomR](){
                return  Math.random()*2.2;
            }
            [_getRandomAlpha](){
                let alpha=(Math.floor(Math.random()*10)+1)/10;
                return `rgba(${Math.min(Math.floor(Math.random() * 100) + 155, 255)},${Math.min(Math.floor(Math.random() * 100) + 155, 255)},${Math.min(Math.floor(Math.random() * 100) + 155, 255)},` + alpha + ")";
            }

            draw(){
                context.fillStyle= this[_getRandomAlpha]();
                context.shadowBlur=this[_getRandomR]()*2;
                context.beginPath();
                context.arc(this.x,this.y,this[_getRandomR](),2 * Math.PI,false)
                context.closePath();
                context.fill();

            }
            move(){
                this.y -= 0.2;
                // this.y -= 0.15;
                if (this.y <= -10) {
                    // this.y = HEIGHT + 10;
                    this.y =HEIGHT;
                }
                this.draw();
            }



        }

        // 递归调用animate
        function animate(){
            context.clearRect(0, 0, WIDTH, HEIGHT);
            for (var i in round) {
                round[i].move();
            }
            requestAnimationFrame(animate);
        }

        function init(){
            for(var i = 1; i < initRoundPopulation; i++ ){
                    round[i] = new pointItem(i,Math.random() * WIDTH,Math.random() * HEIGHT);
                    round[i].draw();
                }
            animate();
        }

        init();