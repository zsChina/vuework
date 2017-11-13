<template>
	 <div class="school_range">
            <div>高校层次:</div> <filter-item v-for="(x,index) in schoolRangeList" :catagory="'高校层次'" :index="index" :key="index" :range-object="x"></filter-item>
        </div>
</template>
<script>
	import filter_item from "./filter_item.vue";
	export default {
		props: ["schoolRangeList"],
		components:{'filter-item':filter_item}
	}
	
</script>
<style scoped>
	.school_range div{
		display: inline-block;
		padding: 5px;
	}

</style>