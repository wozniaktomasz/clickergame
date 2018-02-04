import "./scss/style.scss";

class ClickerGame {

    constructor() {
        this.catCount = 0;
        this.dogCount = 0;
        this.mouseCount = 0;
        this.robotCount = 0;
        this.supermanCount = 0;
        this.batmanCount = 0;
        this.money = 0;
        this.clickersRatio = new Map();
        this.clickPower = 1;

        this.clickersRatio.set('catCount', 0.2);
        this.clickersRatio.set('dogCount', 0.25);
        this.clickersRatio.set('mouseCount', 0.30);
        this.clickersRatio.set('robotCount', 0.40);
        this.clickersRatio.set('supermanCount', 0.50);
        this.clickersRatio.set('batmanCount', 0.6);
    }

    click() {
        this.money += this.clickPower;
    }

    getMoney() {
        return this.money.toFixed(0);
    }

    buyCatClicker() {
        if (this.money >= 20) {
            this.money-=20;
            this.catCount++;
        }
    }

    buyDogClicker() {
        if (this.money >= 40) {
            this.money-=40;
            this.dogCount++;
        }
    }

    buyMouseClicker() {
        if (this.money >= 80) {
            this.money-=80;
            this.mouseCount++;
        }
    }

    buyRobotClicker() {
        if (this.money >= 160) {
            this.money-=160;
            this.robotCount++;
        }
    }
    buySupermanClicker() {
        if (this.money >= 320) {
            this.money-=320;
            this.supermanCount++;
        }
    }
    buyBatmanClicker() {
        if (this.money >= 640) {
            this.money-=640;
            this.batmanCount++;
        }
    }

    addAutoClicker() {
       this.money =
           this.money + (this.catCount * this.clickersRatio.get('catCount'))
           + (this.dogCount * this.clickersRatio.get('dogCount'))
           + (this.mouseCount * this.clickersRatio.get('mouseCount'))
           + (this.robotCount * this.clickersRatio.get('robotCount'))
           + (this.supermanCount * this.clickersRatio.get('supermanCount'))
           + (this.batmanCount * this.clickersRatio.get('batmanCount'));
    }

    getClicksPerSecond() {
        return ((this.catCount * .2) + (this.dogCount * .45) + (this.mouseCount * .85) + (this.robotCount * 1.75) + (this.supermanCount * 2.50) + (this.batmanCount * 5)).toFixed(2);
    }
}

let game = new ClickerGame();
let money = document.getElementById('money');
let money_text = document.getElementById('money_text');
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
        money_text.innerHTML = 'Money: ' + game.getMoney() + '$';
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
    money_text.innerHTML = 'Money: ' + game.getMoney() + '$';
    money_per_second.innerHTML = 'Money per second:' + game.getClicksPerSecond() + '$';
}, 500);