<template>
	<thead>
		<tr>
			<td v-for="item in title_info">{{item}}</td>
		</tr>
	</thead>
</template>
<script>

	export default {
		name:"tab_title",
		props:["title_info"],
		created:function(){
			console.log(this.title_info);
		}
	}

</script>
<style>
	thead td{	
		height: 50px;
		line-height: 50px;
		text-align: center;
	}
</style>