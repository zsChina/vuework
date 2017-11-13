<template>
    <div>
      <div class="wrap">
          <div class="select_title"><span>已选条件:</span>
              <div  v-show="$store.state.major_flag">专业层次:<span v-for="(x,index) in $store.state.major_obj" v-show="x.value!='不限'" v-if="x.selected">{{x.value}}</span><span @click="cancel('cancelMajor')">x</span></div>
              
              <div  v-show="$store.state.range_flag" >高校层次:<span v-for="(x,index) in $store.state.school_range_obj" v-show="x.value!='不限'" v-if="x.selected">{{x.value}}</span><span @click="cancel('cancelRange')">x</span></div>
              
              <div  v-show="$store.state.area_flag">高校地区:<span v-for="(x,index) in $store.state.school_area_obj" v-show="x.value!='不限'" v-if="x.selected">{{x.value}}</span><span @click="cancel('cancelArea')">x</span></div>
          </div>
          <div class="select_wrap">
              <major-range  :major-range-list="major_obj"></major-range>
              <school-range  :school-range-list="school_range_obj"></school-range>
              <school-area  :school-area-list="school_area_obj"></school-area>
          </div>
      </div>
      <div class="remind">*科目比例：要求所选选考科目的专业总数/条件范围内专业总数。以专业为例：经济统计学专业历史所占比例为66.7%，意为选考历史，66.7%的经济统计学专业均可报考。</div>
        <tab-view class="tab_list" :title_="tab_title" :list_="tab_left_list"></tab-view>
        <tab-view class="tab_list" :title_="tab_title" :list_="tab_right_list"></tab-view>
        <div class="clearfix"></div>
        <college-tab :college_tit="college_title" :college_detail="college_detail" ></college-tab>
    </div>
</template>
<script>
    import major_range from "./major_range.vue";
    import school_range from "./school_range.vue";
    import school_area from "./school_area.vue";
    import {mapMutations,mapState} from "vuex";
    import tab_view from "./table_view.vue";
    import college_tab from "./college_tab.vue";
    
    export default {
        name:'general',
        data:function(){
            return {
              tab_title:[],
              tab_left_list:[],
              tab_right_list:[],
              "college_detail":[],
              "college_title":[],
            }
        },
        methods:Object.assign({},mapMutations(["update_major_obj","update_school_range","update_area_range","cancel"])),
        computed:Object.assign({},
        // {
        //     //这个对象可以免写
        //     major_obj:function(){
        //     return this.$store.major_obj;
        //   },school_range_obj:function(){
        //     return this.$store.school_range_obj;
        //   },school_area_obj:function(){
        //     return this.$store.school_area_obj;
        //   },
        // },
        mapState(["major_obj","school_range_obj","school_area_obj"])),
       
        created:function(){
          var _this=this;
          var major_obj=["不限", "专科", "本科"];
          var school_range_obj=["不限", "一流大学", "一流学科", "985工程", "211工程", "普通本科(公办)", "普通专科(民办)", "高职专科"];
          var school_area_obj=["不限", "安徽", "天津市", "苏州市", "北京", "西安", "重庆市", "南京市", "重庆", "长沙市", "福建", "沈阳市", "甘肃", "成都市", "宁波市", "大连市", "东莞市", "青岛市", "武汉市", "杭州市"];
          var major_arr=major_obj.map((value,index)=>{
            return index==0?{value:value,selected:true}:{value:value,selected:false};
          })
          var school_range_arr=school_range_obj.map((value,index)=>{
            return index==0?{value:value,selected:true}:{value:value,selected:false};
          })
          var school_area_arr=school_area_obj.map((value,index)=>{
            return index==0?{value:value,selected:true}:{value:value,selected:false};
          })
          this.update_major_obj(major_arr);
          this.update_school_range(school_range_arr);
          this.update_area_range(school_area_arr);
          
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
            // var college_arr=[];
            // var s=0;
            // console.log(res.data.result.rows);
            // res.data.result.rows.forEach((value,index)=>{
            //     if (typeof value =="string") {
            //       college_arr[s]=value;
            //       s++;
            //     }
            // })
            // console.log(college_arr)
            // _this.college_detail=college_arr;
          })
        },
        components: {
        "major-range": major_range,
        "school-range": school_range,
        "school-area":school_area,
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
       font-family:'Arial Normal', 'Arial';
      padding: 5px;
      font-size: 15px;
      border: 1px solid #ccc;
    }
    .select_title{
      height: 65px;
      line-height: 65px;
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
    

</style>
