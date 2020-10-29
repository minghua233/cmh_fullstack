"use strict";
exports.__esModule = true;
var ObjStack = /** @class */ (function () {
    function ObjStack() {
        this.items = {}; // JSON Object
        this.count = 0;
    }
    // 入栈，当前栈的大小为新元素的key
    ObjStack.prototype.push = function (item) {
        this.items[this.count] = item;
        this.count++;
    };
    // 出栈，当前栈大小-1，取出栈顶元素，删除栈顶元素，返回取出的栈顶元素
    ObjStack.prototype.pop = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        var result = this.items[this.count];
        delete this.items[this.count];
        // console.log(this.items);
        return result;
    };
    ObjStack.prototype.isEmpty = function () {
        return this.count === 0;
    };
    //  返回栈顶元素，以当前栈大小-1为key获取其对应的value值
    ObjStack.prototype.peek = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    };
    // 清空栈内元素
    ObjStack.prototype.clear = function () {
        this.items = {};
        this.count = 0;
    };
    // 获取栈内元素数量
    ObjStack.prototype.size = function () {
        return this.count;
    };
    // 将栈内元素转为字符串，遍历当前栈对象中的数据，将栈中的数据用逗号拼接并返回。
    ObjStack.prototype.toString = function () {
        if (this.isEmpty()) {
            return "";
        }
        var objString = "" + this.items[0];
        for (var i = 1; i < this.count; i++) {
            objString = objString + "," + this.items[i];
        }
        return objString;
    };
    return ObjStack;
}());
exports["default"] = ObjStack;
