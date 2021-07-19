let diceContainer = $("#die-container");
let dieArray = [];
let idNumber = 0;

class Die {
    constructor() {
        this.value;
        this.roll();
        this.div = $("<div class=dice></div>");
        this.h1 = $("<h1></h1>");
        this.id = idNumber;
        this.div.attr("id", this.id);
        this.div.append(this.dieFace());
        diceContainer.append(this.div);
        this.div.click(() => {
            this.roll();
            this.div.empty().html(this.dieFace());
        })
        this.div.dblclick(() => {
            this.removeDie();
        })
    }

    roll() {
        this.value = Math.floor((Math.random() * 6) + 1);
    }

    removeDie() {
        $(`#${this.id}`).remove();
        let index = dieArray.findIndex(dice => dice.id === this.id)
        dieArray.splice(index, 1);
    }

    dieFace(unicode) {
        if (this.value === 1) {
            unicode = '&#9856;';
            return unicode;
        } else if (this.value === 2) {
            unicode = '&#9857;';
            return unicode;
        } else if (this.value === 3) {
            unicode = '&#9858;';
            return unicode;
        } else if (this.value === 4) {
            unicode = '&#9859;';
            return unicode;
        } else if (this.value === 5) {
            unicode = '&#9860;';
            return unicode;
        } else if (this.value === 6) {
            unicode = '&#9861;';
            return unicode;
        }
    }
}

function sumDice() {
    let total = 0;
    for (let i = 0; i < dieArray.length; i++) {
        total += dieArray[i].value;
    }
    alert(`Total Sum of Die Rolled: ${total}`);
};

$("#generate-dice").click(function () {
    let d = new Die();
    dieArray.push(d);
    idNumber++;
});

$("#roll-dice").click(function () {
    for (let i = 0; i < dieArray.length; i++) {
        dieArray[i].roll();
        $(`#${i}`).html(dieArray[i].dieFace());
    }
});

$("#sum-dice").click(sumDice);