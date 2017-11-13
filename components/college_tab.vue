<template>
	<div>
		<table class="tab_cont" border="1">
			<tab-title :title_info="college_tit"></tab-title>
			<rows-body  v-for="(items,index) in college_detail" :key="index" :row_body="items">
			</rows-body>
<!-- 				<tr>
					<td>高校地区</td>
					<td>高校名称</td>
					<td>专业(类)</td>
					<td>类中所含专业</td>
					<td>选考科目范围</td>
					<td>高校名称</td>
				</tr>
				<slot>这是默认的</slot>
 -->
				<!-- <rows-tit :row_tits="items"></rows-tit> -->
<!-- 			<tr  v-for="(items,index) in college_detail" :key="index" :row_body="items">
				<rows-tit :row_tits="items"></rows-tit>
			</tr>
 -->		
 		</table>
	</div>
</template>
<!-- <template>	
	<div border='1' class="college_table_list">			
		<div class="college_title">
			<span v-for="(x,index) in college_tit">{{x}}</span>
		</div>
		<div  class="rows" v-for='(x,index) in college_detail'>
			<span v-for="(v,ind) in x" v-if="typeof v!='object'" @click="show_flag({ind,x,index})" :class="{college_name:ind==0}" >{{v}}
			</span>
				
			<div v-show="x[9][0].special" :class="x.special" class="inner_cont" v-for="(v,ind) in x"  v-if="typeof v=='object'">
				<table cellpadding="3" border="1" class="tab_inner">
					<tr v-for="i in v">
						<td class="provice">{{i.province}}</td>
						<td class="sub_college_name">{{i.collegeName}}</td>
						<td class="major_name">{{i.majorName}}</td>
						<td class="remark">{{i.remark | stringify}}</td>
						<td class="subject_rangeNames">{{i.subjectRangeNames | stringify}}</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template> -->
<script>
	import {mapMutations,mapState} from "vuex";
	import tab_title from "./tab_title.vue";
	import row_title from "./row_tit.vue";
	import row_body from "./row_body.vue";

	export default {
		name:"college_tab",
		props:["college_tit","college_detail"],
		created:function(){
			var _this=this;
			this.$http("./data/general_by_college.json").then(function(res){
				_this.update_college_title(res.data.result.title);
				_this.update_college_detail(res.data.result.rows);
			});
		},
		data:function(){
			return {
			}
		},
		created:function(){
			console.log(this.college_detail)
		},
		// methods:{
		// 	show_flag:function(){
		// 		alert(111)
		// 	}
		// },
		methods:Object.assign({},mapMutations(["update_college_detail","update_college_title","show_flag"])),
		filters:{
			// notobj:function(data){
			// 	if (typeof data !=="object") {
			// 		return data;
			// 	}
			// },
			// object:function(data){
			// 	if (typeof data =="object") {
			// 		return data;
			// 	}	
			// },
			stringify:function(data){
				return data.join(" ");
			}
		},
		computed:{
			// row_tit:function(){
			// 	var arr=[];
			// 	this.college_detail
			// 	var tit_info=this.college_detail.slice(0,this.college_detail.length-1);
			// 	return tit_info;
			// },
			// row_body:function(){
			// 	var body_info=this.college_detail[this.college_detail.length-1];
			// 	return body_info;
			// }
			// college_data:function(){
			// 	var _this=this;
			// 	var college_arr=[];
			// 	console.log(this.college_detail);
			// 	this.college_detail.forEach((value,index)=>{
			// 		var s=0;
			// 		var arr=college_arr[index]=[];
			// 		value.forEach((item,ind)=>{
			// 			if (typeof item != "object") {
			// 				arr[s]=item;
			// 				s++;
			// 			}
			// 		})
					
			// 	})
			// 	return college_arr; 
			// }
		},
		components:{
			// 'rows-tit':row_title,
			'tab-title':tab_title,
			'rows-body':row_body			
		}
	}

</script>
<style scoped>
	.college_table_list{
		text-align: center;
		width: 100%;
		margin-top: 30px;
	}
	.college_table_list .college_title{
		display: flex;
		height: 50px;
		background:rgba(0, 160, 92, 1);
		color:#fff; 
	}
	.college_table_list .college_title span{
		flex:1;
		border:1px solid #ccc;
		text-align: center;
		line-height: 50px;
	}
	.rows{
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.rows span{
		width: 11.1%;
		box-sizing: border-box;
		margin: 0;
		height:50px;
		line-height: 50px;
		border:1px solid #ccc;
	}

	.inner_cont{
		width: 100%;
	}
	.tab_inner{
		border-collapse: collapse;
		width: 100%;
		background: #eee;
	}
	.tab_inner td{
		height: 50px;
	}
	.college_name{
		color: rgba(0, 160, 92, 1);
		cursor: pointer;
	}
	.provice{
		width: 100px;
	}
	.sub_college_name{
		width: 150px;
	}
	.subject_rangeNames{
		width: 100px;
	}
	.tab_cont thead{
		background: rgba(0, 160, 92, 1);
		color: #fff;
	}
	.tab_cont thead td{

	}
	.tab_cont{
		width: 100%;
		border-collapse:collapse;
		margin-top: 20px; 
	}
	.tab_cont td{
		padding: 10px 0; 
	}
	/*.college_name:before {
		content: "<span class='flag'>+</span>";
	}*/
	.flag_btn{
			
	}
</style>