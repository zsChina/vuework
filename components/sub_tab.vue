<template>
	<table class="sub_tab" border="1">
		<tr v-for="(i,index) in sub_info" :key="index">
			<td class="provice">{{i.province}}</td>
			<td class="collegeName">{{i.collegeName}}</td>
			<td class="majorName">{{i.majorName}}</td>
			<td class="remark">{{i.remark.join(" ")}}</td>
			<td class="subjectRangeNames">{{i.subjectRangeNames.join(" ")}}</td>
		</tr>
	</table>
</template>
<script>

	export default {
		name:"sub_tab",
		props:["sub_info"],
		created:function(){
			console.log(this.sub_info);
		}

	}

</script>
<style>
	.sub_tab td{
		text-align: center;
		height: 50px;
		line-height: 50px;
	}	
	.sub_tab{
		background: #eee;
		border-collapse:collapse; 
		width: 100%;
	}
	.collegeName{
		width: 150px;
	}
	.provice{
		width: 100px;
	}
	.subjectRangeNames{
		width: 120px;
	}
</style>
