const CracoLessPlugin = require('craco-less');
const path = require('path');
//获取当前路径 和 传过来的路径做个拼接
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            //配置
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        //定义变量
                        modifyVars: { '@primary-color': '#1DA57A' },
                        //开启函数
                        javascriptEnabled: true,
                    }
                }
            }
        }
    ],
    webpack: {
        //起别名
        alias: {
            '@': resolve('src'),
            'components': resolve('src/components'),
            'comment': resolve('src/comment')
        }
    }
};