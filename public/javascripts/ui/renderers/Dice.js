
class Dice {

    constructor(start, x, y, width, height, img, snd, swaptime) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = img;
        this.snd = snd;
        this.number = start;
        this.rolled = start;
        this.dicex = img.width / 6;
        this.dicey = img.height;
        this.swaptime = swaptime || 200;

        // drag stuff
        // these will be set outside 
        this.draggable = false;
        this.dragAction = undefined;
        // these are only to be used inside
        this.dragging = false;
        this.offsety = 0;
        this.offsetx = 0;
        this.dragx = 0;
        this.dragy = 0;

    }

    roll(number) {
        this.snd.play();
        this.rolled = number;
        this.time = millis();
    }
    draw() {
        if (this.snd.isPlaying()) {
            let ellapsed = millis() - this.time;
            if (ellapsed > this.swaptime) {
                this.number = Math.ceil(Math.random() * 6);
                this.time = millis();
            }
        } else {
            this.number = this.rolled;
        }
        if (Number.isInteger(this.number)) {
            image(this.img, this.x, this.y, this.width, this.height, 
                  this.dicex * (this.number - 1), 0, this.dicex, this.dicey);
        } else {
            fill(255);
            stroke(0);
            strokeWeight(2);
            rect(this.x,this.y,this.width, this.height,5);
            strokeWeight(1);
        }

        // Second image when we are dragging (semi transparent)
        if (this.dragging) {
            tint(255, 100);
            image(this.img, this.dragx, this.dragy, this.width, this.height,
                this.dicex * (this.number - 1), 0, this.dicex, this.dicey);
            tint(255, 255);
        }
    }

    // These functions we need because of the dragging
    update() {
        // Adjust location if being dragged
        if (this.dragging) {
            this.dragx = mouseX + this.offsetX;
            this.dragy = mouseY + this.offsetY;
        }
    }


    press() {
        if (this.draggable &&
            mouseX > this.x && mouseX < this.x + this.width &&
            mouseY > this.y && mouseY < this.y + this.height) {
            // If so, keep track of relative location of click to corner of rectangle
            this.offsetX = this.x - mouseX;
            this.offsetY = this.y - mouseY;
            this.dragx = mouseX + this.offsetX;
            this.dragy = mouseY + this.offsetY;
            this.dragging = true;
        }
    }
    release() {
        this.dragging = false;
        if (this.draggable && this.dragAction) {
            this.dragAction(mouseX, mouseY, this.number);
        }
    }

}