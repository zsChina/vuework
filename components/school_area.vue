<template>
	 <div class="school_area">
        <div>高校地区:</div>  <filter-item v-for="(x,index) in schoolAreaList" :catagory="'高校地区'" :index="index" :key="index" :range-object="x"></filter-item>
    </div>
</template>
<script>
	import filter_item from "./filter_item.vue";
	export default {
		props: ["schoolAreaList"],
		components:{'filter-item':filter_item}
	}
	
</script>
<style>
	.school_area div{
		display: inline-block;
		padding: 5px;
	}
	
</style>