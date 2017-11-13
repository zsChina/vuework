<template>
    <span class="filter-item" @click="toggle" :class="{active:rangeObject.selected}">{{rangeObject.value}}</span>	
</template>
<script>
    import {mapMutations,mapState} from "vuex";

	export default {
		props:["index","catagory","rangeObject"],
		methods:{
			toggle:function(){

				if (this.catagory=="高校层次") {
					this.$store.commit("reset_school_range",{
						index:this.index,
						selected:this.rangeObject
					});
					return;
				}
				if (this.catagory=="专业层次") {	
					this.$store.commit("reset_major_range",{
						index:this.index,
						selected:this.rangeObject.selected
					});
					return;
				}
				if (this.catagory=="高校地区") {	
					this.$store.commit("reset_school_area",{
						index:this.index,
						selected:this.rangeObject.selected
					});
					return;
				}

			}
		}
	}
</script>
<style scoped>
	.filter-item{
		padding: 10px;
		display: inline-block;
		cursor: pointer;

	}
	span.active{
		background: #00a05c;
		color: #fff;
	}
	
</style>