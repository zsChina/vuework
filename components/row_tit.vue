<template>
	<tr>
		<td v-for="(j,ind) in row_tits">{{j}}</td>
	</tr>
</template>
<script>
	export default {
		name:"row_title",
		props:["row_tits"],
		created:function(){
			console.log(this.tit_info);
		},
		mounted:function(){
			console.log(this.tit_info);
		},
		computed:{
			tit_info:function(){
				console.log(this.row_tit);
				var arr=[];
				this.row_tit.forEach(function(value,index){
					if (typeof value!=="object") {
						arr.push(value);
					}
				});

				return arr;
			}
		}
	}

</script>