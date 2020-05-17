<template>
	<div id="app">
		<div id='top'>im top</div>
		<div id='left'>
			<button @click="nav('HelloWorld')">HelloWorld</button>
			<button @click="nav('sub0')">sub0</button>
		</div>
		<div id='rigth'>
			<router-view/>
		</div>
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import sub0 from './components/sub0.vue'
import QWebChannel from './qwebchannel.js'

export default {
	name: 'app',
	data: function(){
		return {
			a: '我是a',
		}
	},
	created: function () {
		this.qt_init()
	},
	methods:{
		qt_init: function(){
			try{ 
				new QWebChannel(qt.webChannelTransport, function(channel) {
					window.connection = channel.objects.conn_shared;
				});
			}catch(e){
				// alert('初始化失败:' + e)
			}
			
		},
		on_test: function(){
			window.connection.test_int_str(666, return_value => {
				alert(return_value);
				alert(this.a)
			});
			
			window.connection.test_str_int("3333", function(return_value){
				alert(return_value);
				alert(this.a)
			});
			
		},
		nav(name){
		  // 跳转第二个页面去  类似于 router-link to
		  // this.$router.push({name:'second',params:{itemData:this.mockList[index]}})
		  this.$router.push({name:name})
		}
	},
	components: {
		sub0	
	}
}
</script>

<style>
html, body{
	height: calc(100% - 10px);
}

#app {
	height: 100%;
	/* display: flex;
	flex-direction: row; */
	display: grid;
	grid-template-columns: 100px calc(100% - 100px);
	grid-template-rows: 30px calc(100% - 30px);
}

#top{
	margin: 3px;
	padding: 3px;
	background-color: aqua;
	grid-column-start: 1;
	grid-column-end: 3;
}

#left{
	margin: 3px;
	padding: 3px;
	background-color: aquamarine;
	grid-row-start: 2;
	grid-row-end: 3;
}

#rigth{
	margin: 3px;
	padding: 3px;
	background-color: antiquewhite;
	grid-column-start: 2;
	grid-column-end: 3;
}

</style>
