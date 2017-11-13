<template>
	<table border="1" class="table_list">
		<thead>
			<tr>
				<td>选考科目</td>
				<td>高校数</td>
				<td>专业类数</td>
				<td>科目比例</td>
			</tr>
		</thead>

		<tr v-for="(x,index) in list_">
			<td>{{x.subject}}</td>
			<td>{{x.collegesCount}}</td>
			<td>{{x.majorCount}}</td>
			<td>{{x.rate}}</td>
		</tr>
	</table>
</template>
<script>
	
	export default {
		name:"table_view",
		props:["title_","list_"]
	}	
	

</script>
<style scoped>
	
	.table_list{
		border-collapse: collapse;
		text-align: center;
		border-spacing: 5px;
		width: 50%;
	}

	.table_list thead{
		background:rgba(0, 160, 92, 1);
		color:#fff; 
	}
	.table_list td{
		height:50px;
		line-height: 50px;
	}
</style>