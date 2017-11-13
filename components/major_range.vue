<template>
	<div class="major">
        <div>专业层次:</div> <filter-item v-for="(x,index) in majorRangeList" :index="index" :key="index" :catagory="'专业层次'" :range-object="x"></filter-item>
    </div>
</template>
<script>
	import filter_item from "./filter_item.vue";
	export default {
		props: ["majorRangeList"],
		components:{'filter-item':filter_item}
	}
</script>
<style scoped>
	.major div{
		display: inline-block;
		padding: 5px;
	}
	
</style>
