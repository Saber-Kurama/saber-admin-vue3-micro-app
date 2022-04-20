/*
 * @Author: saber
 * @Date: 2022-04-13 16:08:29
 * @LastEditTime: 2022-04-13 16:09:43
 * @LastEditors: saber
 * @Description: 
 */
/*
 * @Author: saber
 * @Date: 2022-01-12 10:47:22
 * @LastEditTime: 2022-03-07 16:44:17
 * @LastEditors: saber
 * @Description:
 */
const { linkPaths } = require('./.digitforce.js');
function readPackage(pkg, context) {
  // 添加了 dev 环境
  if (pkg.name == 'studiox-ui' && process.env.NODE_ENV === 'development') {
    Object.keys(linkPaths).forEach((key) => {
      if (pkg.dependencies[key]) {
        pkg.dependencies[key] = linkPaths[key];
      }
      if (pkg.devDependencies[key]) {
        pkg.devDependencies[key] = linkPaths[key];
      }
    });
  }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};
