<template>
	<tbody>
		<tr>
			<td v-for="(sub_item,index) in tit_info">
				
				<span @click="show_flag" v-if="index==0" v-show="flag" class="sub_btn">-</span> 
				<span @click="show_flag" v-if="index==0" v-show="!flag" class="sub_btn">+</span> {{sub_item}}
			</td>
		</tr>
		<tr v-show="flag">
			<td colspan="9" v-for="sub_item in body_info">
				<sub-tab :sub_info="sub_item"></sub-tab>
			</td>
		</tr>
	</tbody>
</template>
<script>

	import sub_tab from "./sub_tab.vue";
	export default {
		name:"row_body",
		props:["row_body"],
		data:function(){
			return {
				flag:false
			}
		},
		mounted:function(){
			console.log(this.body_info);
		},
		methods:{
			show_flag:function(){
				this.flag=!this.flag;
			}
		},
		computed:{
			tit_info:function(){
				var arr=[];
				this.row_body.forEach(function(value,index){
					if (typeof value!=="object") {
						arr.push(value);
					}
				})
				return arr;
			},
			body_info:function(){
				var arr=[];
				this.row_body.forEach(function(value,index){
					if (typeof value=="object") {
						arr.push(value);
					}
				})
				return arr;
			}
		},
		components:{
			"sub-tab":sub_tab
		}
	}
	
</script>
<style>
	tbody{
		border-collapse:collapse; 
	}
	tbody tr td{
		text-align: center;
		height: 50px;
		line-height: 50px;

	}
	.sub_btn{
		background:rgba(0, 160, 92, 1);
		line-height: 1.2;
		margin: 10px;
		color: #fff;
		font-size: 20px;
		display: inline-block;
		float: left;
		width: 25px;
		height: 25px;
		
	}
</style>
