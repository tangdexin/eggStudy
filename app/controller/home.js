'use strict';

const Controller = require('egg').Controller;


class HomeController extends Controller {
  async index() {

    const { ctx } = this;
    ctx.body = '永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修禊事也。群贤毕至，少长咸集。此地有崇山峻岭，茂林修竹，又有清流激湍，映带左右，引以为流觞曲水，列坐其次。虽无丝竹管弦之盛，一觞一咏，亦足以畅叙幽情。';
  }
}

module.exports = HomeController;
