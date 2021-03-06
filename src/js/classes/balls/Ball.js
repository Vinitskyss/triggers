class Ball {
    constructor(x, y, dir, speed, color) {
        this.x = x;
        this.y = y;
        this.dir = dir;
        this.speed = speed / 100;
        this.id = ballId++;
        this.color = color;
    }

    update() {
        this.show();
        this.move();
    }

    move() {
        switch (this.dir) {
            case STOP:
                break;
            case MOVEUP:
                this.y -= this.speed;
                break;
            case MOVEDOWN:
                this.y += this.speed;
                break;
            case MOVELEFT:
                this.x -= this.speed;
                break;
            case MOVERIGHT:
                this.x += this.speed;
                break;
            default:
                this.x += this.speed;
                break;
                //console.log('no dir!');
        }
        //if the bal have reached the border
        let flag = false;
        if (this.x >= width - cellSize / 2 + 1) {
            this.x = width - cellSize / 2;
            this.dir = STOP;
            flag = true;
        }

        if (this.x <= cellSize / 2 - 1) {
            this.x = cellSize;
            this.dir = STOP;
            flag = true;
        }

        if (this.y >= height - cellSize / 2 + 1) {
            this.y = height - cellSize / 2;
            this.dir = STOP;
            flag = true;
        }

        if (this.y <= cellSize / 2 - 1) {
            this.y = cellSize / 2;
            this.dir = STOP;
            flag = true;
        }
        if(flag){
            for(let i = 0; i < field.balls.length; i++){
                if(field.balls[i].id == this.id){
                    field.balls.splice(i, 1);
                }
            }
        }
    }

    show() {
        fill(this.color);
        stroke(0);
        strokeWeight(1);
        ellipse(this.x, this.y, cellSize / 2, cellSize / 2);
        
    }
}