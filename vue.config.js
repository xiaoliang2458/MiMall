module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{
                target:'https://coding.imooc.com',
                // changeOrigin:false
                changeOrigin:true,  //修改请求头的信息
                pathRewrite:{
                    '/api':'' 
                }
            }
        }
    }
}