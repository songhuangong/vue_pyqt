<template>
	<div id="sub_top">
		<button type="default" @click="on_test">su</button>
	</div>
	
</template>

<script>
	export default {
		name: 'sub0',
		data: function(){
			return {
				
			}
		},
		created: function () {
			
		},
		methods:{
			on_test: function(){
				window.connection.test_int_str(666, return_value => {
					alert(return_value);
				});
			},
		},
	  // components: {
	  //   HelloWorld
	  // }
	}
	
</script>

<style>
</style>
