"use strict";
var diceContainer = $("#die-container");
var dieArray = [];
var idNumber = 0;
var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        this.value;
        this.roll();
        this.div = $("<div class=dice></div>");
        this.h1 = $("<h1></h1>");
        this.id = idNumber;
        this.div.attr("id", this.id);
        this.div.append(this.dieFace());
        diceContainer.append(this.div);
        this.div.click(function () {
            _this.roll();
            _this.div.empty().html(_this.dieFace());
        });
        this.div.dblclick(function () {
            _this.removeDie();
        });
    }
    Die.prototype.roll = function () {
        this.value = Math.floor((Math.random() * 6) + 1);
    };
    Die.prototype.removeDie = function () {
        var _this = this;
        $("#" + this.id).remove();
        var index = dieArray.findIndex(function (dice) { return dice.id === _this.id; });
        dieArray.splice(index, 1);
    };
    Die.prototype.dieFace = function (unicode) {
        if (this.value === 1) {
            unicode = '&#9856;';
            return unicode;
        }
        else if (this.value === 2) {
            unicode = '&#9857;';
            return unicode;
        }
        else if (this.value === 3) {
            unicode = '&#9858;';
            return unicode;
        }
        else if (this.value === 4) {
            unicode = '&#9859;';
            return unicode;
        }
        else if (this.value === 5) {
            unicode = '&#9860;';
            return unicode;
        }
        else if (this.value === 6) {
            unicode = '&#9861;';
            return unicode;
        }
    };
    return Die;
}());
function sumDice() {
    var total = 0;
    for (var i = 0; i < dieArray.length; i++) {
        total += dieArray[i].value;
    }
    alert("Total Sum of Die Rolled: " + total);
}
;
$("#generate-dice").click(function () {
    var d = new Die();
    dieArray.push(d);
    idNumber++;
});
$("#roll-dice").click(function () {
    for (var i = 0; i < dieArray.length; i++) {
        dieArray[i].roll();
        $("#" + i).html(dieArray[i].dieFace());
    }
});
$("#sum-dice").click(sumDice);
