/*
 * @Description: 请输入描述
 * @Author: tangdexin
 * @Date: 2019-08-05 23:28:54
 * @LastEditors: tangdexin
 * @LastEditTime: 2019-08-10 15:27:57
 */

/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1564996085157_1551';

  // add your middleware config here
  config.middleware = [];

  // config.mongoose = {
  // url: 'mongodb://47.98.188.235/study',
  // options: { server: { poolSize: 40 } } };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};

