/*
 * @Author: chenguanyin
 * @Date: 2022-03-05 11:59:56
 * @LastEditTime: 2022-03-22 16:13:53
 * @LastEditors: chenguanyin
 * @Description:
 */
module.exports = {
  plugins: {
    // TODO: 暂时在项目中没有使用 tailwind
    // 'tailwindcss': {},
    'autoprefixer': {},
    'postcss-nesting': {},
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*'],
      unitPrecision: 2,
    },
  },
};
