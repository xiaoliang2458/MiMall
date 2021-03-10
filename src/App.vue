<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import axios from 'axios'  //导入axios插件
import jsonp from 'jsonp'  //导入jsonp插件
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted(){
    let url = 'https://coding.imooc.com/class/ajaxprelearn?'
    //jsonp请求方式
    jsonp(url,()=>{

    }) 

    // //axios请求方式
    // axios(url).then(()=>{

    // })

  }

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>