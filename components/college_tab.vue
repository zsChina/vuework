<template>	
	<div border='1' class="college_table_list">			
			<div class="college_title">
				<span v-for="(x,index) in college_tit">{{x}}</span>
			</div>
			<div  class="rows" v-for='(x,index) in college_detail'>
				<span v-for="(v,ind) in x" v-if="typeof v!='object'" @click="show_flag(ind,x)" :class="{college_name:ind==0}" >{{v}}
				</span>
				<div :class="'flag'+index" class="inner_cont" v-for="(v,ind) in x"  v-if="typeof v=='object'" v-show="x.special">
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

</template>

<script>
	export default {
		name:"college_tab",
		props:["college_tit","college_detail"],
		mouted:function(){
			console.log(this.college_detail);
		},
		data:function(){
			return {
				detail_msg:this.college_detail
			}
		},
		watch:{
			detail_msg:{
				handler: function (val, oldVal) {
					console.log(val);
					console.log(oldVal);
				 },
      			deep: true,
				immediate: true
			}

		},

		methods:{
			show_flag:function(ind,item){
			// console.log(item);
				if (ind==0) {
					// this.flag=!this.flag;
					// this["flag"]=!this["flag"];
					item.special=!item.special;
				}
				// console.log(this.college_detail);
				this.$watch("detail_msg",function(newVal,oldVal){
					console.log(newVal)
					console.log(oldVal)
				})
			}
		},
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
	.college_table_list head{
		
	}

	.college_table_list span{
		
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
	/*.college_name:before {
		content: "<span class='flag'>+</span>";
	}*/
	.flag_btn{
			
	}
</style>