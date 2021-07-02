const mouse = {
    x: undefined,
    y: undefined,
};

window.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

export default class BubbleLandingPage {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.canvas.width = document.documentElement.scrollWidth;
        this.canvas.height = document.documentElement.scrollHeight;
        this.context = this.canvas.getContext("2d");
        this.circleArray = [];
        this.circleNumber = 400;
        this.resizeWindow();
        this.initCanvas();
        this.animate();
    }

    initCanvas() {
        this.circleArray = [];
        for (let i = 0; i < this.circleNumber; i++) {
            this.circleArray.push(new Circle(this.context));
        }
    }

    resizeWindow() {
        window.addEventListener("resize", () => {
            this.canvas.width = document.documentElement.scrollWidth;
            this.canvas.height = document.documentElement.scrollHeight;
            this.initCanvas();
        });
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < this.circleArray.length; i++) {
            this.circleArray[i].update();
        }
    }
}

class Circle {
    constructor(context) {
        this.context = context;
        this.colorArray = [
            "#C3D973",
            "#697322",
            "#D9D9D2",
            "#F26B1D",
            "#F24130",
        ];
        this.maxRadius = 50;
        this.minRadius = 4;
        this.windowHeight = document.documentElement.scrollHeight;
        this.windowWidth = document.documentElement.scrollWidth;
        this.radius = Math.random() * this.minRadius + this.minRadius;
        this.x =
            Math.random() * (this.windowWidth - this.radius * 2) + this.radius;
        this.y =
            Math.random() * (this.windowHeight - this.radius * 2) +
            this.radius;
        this.dx = (Math.random() - 0.5) * 2;
        this.dy = (Math.random() - 0.5) * 2;
        this.color = this.colorPicker();
        this.orignialRadius = this.radius;

        this.interactingDistance = 50;
    }

    // pick a random color from the colorArray
    colorPicker() {
        const randomColorIndex = Math.floor(
            Math.random() * this.colorArray.length
        );
        return this.colorArray[randomColorIndex];
    }

    draw() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.context.fillStyle = this.color;
        this.context.fill();
    }

    update() {
        this.draw();
        if (
            this.x + this.radius >= this.windowWidth ||
            this.x - this.radius <= 0
        ) {
            this.dx *= -1;
        }
        if (
            this.y + this.radius >= this.windowHeight ||
            this.y - this.radius <= 0
        ) {
            this.dy *= -1;
        }

        this.x += this.dx;
        this.y += this.dy;

        // interactivity
        if (
            Math.abs(mouse.x - this.x) < this.interactingDistance &&
            Math.abs(mouse.y - this.y) < this.interactingDistance
        ) {
            if (this.radius < this.maxRadius) {
                this.radius += 1;
            }
        } else if (this.radius > this.orignialRadius) {
            this.radius -= 1;
        }
    }
}
