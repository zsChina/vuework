<template>
    <div>
        <div class="search"> <input type="text" placeholder="请输入要搜索的专业名称"> <span>检索</span></div>
     	<h3>选考科目分析</h3>
      <div class="remind">*科目比例：要求所选选考科目的专业总数/条件范围内专业总数。以专业为例：经济统计学专业历史所占比例为66.7%，意为选考历史，66.7%的经济统计学专业均可报考。</div>
        <tab-view class="tab_list" :title_="tab_title" :list_="tab_left_list"></tab-view>
        <tab-view class="tab_list" :title_="tab_title" :list_="tab_right_list"></tab-view>
        <div class="clearfix"></div>
    </div>
</template>
<script>

    import tab_view from "./table_view.vue";
    import college_tab from "./college_tab.vue";
    
    export default {
        name:'college',
        data:function(){
            return {
              tab_title:[],
              tab_left_list:[],
              tab_right_list:[],
            }
        },
       
        created:function(){
          var _this=this;          
          this.$http("./data/general.json").then(function(res){
            _this.tab_title=res.data.result.title;
            var tab_list=res.data.result.analysisData;
            var left_arr=[];
            tab_list.forEach((value,index)=>{
              if (index<tab_list.length/2) {
                left_arr[index]=value;
              }
            });
            _this.tab_left_list=left_arr;
            var right_arr=[];
            var s=0;
            tab_list.forEach((value,index)=>{
              if (index>=tab_list.length/2) {
                right_arr[s]=value;
                s++;
              }
            });
            
            // 根据大学数据
            _this.tab_right_list=right_arr;
            _this.college_title=res.data.result.title;
            _this.college_detail=res.data.result.rows;
          
          })
        },
        components: {
        'tab-view':tab_view,
        'college-tab':college_tab
      }

    }

</script>
<style scoped>
    .tab_list{
      float: left;
    }
    .wrap{
      padding: 5px;
      font-size: 15px;
      border: 1px solid #ccc;
    }
    .select_title span{
      display: inline-block;
      padding: 5px;
    }
    .select_title div{
      display: inline-block;
    }
    .select_title div span{
      display: inline-block;
      padding: 5px;
    }
    .select_wrap>div{
      line-height: 1.3;
      margin-top: 5px;
    }
    .remind{
      color: #f00;
    }
    .tab_container table{
      float: left;
    }
    .clearfix{
      clear: both;
    }
    .search{
    	height: 50px;
    	width: 40%;
    	line-height: 50px;
    	border:2px solid rgba(0, 160, 92, 1);
    	display: flex;
    	margin: 20px 0;
    }
	.search span{
		display: inline-block;
		padding: 5px;
		text-align: center;
		line-height: 40px;
		color: #fff;
		background: rgba(0, 160, 92, 1);
		width: 10%;
	}
    .search input{
		width: 90%;
		font-size: 17px;
    }
</style>
