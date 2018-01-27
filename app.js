class ClickerGame {

    constructor() {
        this.cat = 0;
        this.dog = 0;
        this.mouse = 0;
        this.robot = 0;
        this.superman = 0;
        this.batman = 0;
        this.clicks = 0;
        this.clicks_per_second = 0;
        this.money = 0;
        this.clickersRatio = new Map();
        this.click_power = 1;

        this.clickersRatio.set('cat', 0.2);
        this.clickersRatio.set('dog', 0.25);
        this.clickersRatio.set('mouse', 0.30);
        this.clickersRatio.set('robot', 0.40);
        this.clickersRatio.set('superman', 0.50);
        this.clickersRatio.set('batman', 0.6);
    }


    click() {
        this.money += 1;
    }

    getMoney() {
        return this.money.toFixed(0);
    }

    buyCatClicker() {
        if (this.money >= 20) {
            this.money-=20;
            this.cat++;
        }
    }

    buyDogClicker() {
        if (this.money >= 40) {
            this.money-=40;
            this.dog++;
        }
    }

    buyMouseClicker() {
        if (this.money >= 80) {
            this.money-=80;
            this.mouse++;
        }
    }

    buyRobotClicker() {
        if (this.money >= 160) {
            this.money-=160;
            this.robot++;
        }
    }
    buySupermanClicker() {
        if (this.money >= 320) {
            this.money-=320;
            this.superman++;
        }
    }
    buyBatmanClicker() {
        if (this.money >= 640) {
            this.money-=640;
            this.batman++;
        }
    }

    addAutoClicker() {
       this.money = this.money + (this.cat * .2) + (this.dog * .45) + (this.mouse * .85) + (this.robot * 1.75) + (this.superman * 2.50) + (this.batman * 5);
    }

    getClicksPerSecond() {
        return ((this.cat * .2) + (this.dog * .45) + (this.mouse * .85) + (this.robot * 1.75) + (this.superman * 2.50) + (this.batman * 5)).toFixed(2);
    }
}

let game = new ClickerGame();
let money = document.getElementById('money');
let buyCat = document.getElementById('buyCat');
let buyDog = document.getElementById('buyDog');
let buyMouse = document.getElementById('buyMouse');
let buyBatman = document.getElementById('buyBatman');
let buyRobot = document.getElementById('buyRobot');
let buySuperman = document.getElementById('buySuperman');
let money_per_second = document.getElementById('money_per_second');

money.addEventListener(
    "click", function(){
        game.click();
        this.innerHTML = 'Money: ' + game.getMoney();
    }
);

buyCat.addEventListener(
    "click", function(){
        game.buyCatClicker();
    }
);

buyDog.addEventListener(
    "click", function(){
        game.buyDogClicker();
    }
);

buyMouse.addEventListener(
    "click", function(){
        game.buyMouseClicker();
    }
);

buyBatman.addEventListener(
    "click", function(){
        game.buyBatmanClicker();
    }
);

buySuperman.addEventListener(
    "click", function(){
        game.buySupermanClicker();
    }
);

buyRobot.addEventListener(
    "click", function(){
        game.buyRobotClicker();
    });

setInterval(function () {
    game.addAutoClicker();
}, 1000);

setInterval(function () {
    money.innerHTML = 'Money: ' + game.getMoney();
    money_per_second.innerHTML =  + game.getClicksPerSecond() + ' per second'
}, 500);