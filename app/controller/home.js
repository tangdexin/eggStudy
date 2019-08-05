'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '荣光丽,我爱你哦';
  }
}

module.exports = HomeController;
