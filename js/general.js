import Vue from './vue.js';
let bus = new Vue({});
// Vue.component("filter-item", {
//     props: {
//         rangeObject: {
//             type: Object,
//             required: true
//         },
//         index: {
//             required: true
//         },
//         catagory: {
//             type: String,
//             required: true
//         }
//     },
//     template: `<span class="filter-item" @click="toggle" :class="{active:flag}">{{rangeObject.value}}</span>`,
//     data: function () {
//         return {
//             flag: false
//         }
//     },
//     methods: {
//         toggle: function () {
//             bus.$emit(this.catagory, {
//                 index: this.index,
//                 selected:!this.rangeObject.selected
//             })
//         },

//     },
//     mounted: function () {
//         var _this = this;
//         this.flag=this.rangeObject.selected;
//         this.$watch("rangeObject", function (data) {
//             _this.flag=data.selected;
//         });
//     }

// });

let vm = new Vue({
    el: ".wrap",
    data: {
        major_range: ["不限", "专科", "本科"],
        school_range: ["不限", "一流大学", "一流学科", "985工程", "211工程", "普通本科(公办)", "普通专科(民办)", "高职专科"],
        school_area: ["不限", "安徽", "天津市", "苏州市", "北京", "西安", "重庆市", "南京市", "重庆", "长沙市", "福建", "沈阳市", "甘肃", "成都市", "宁波市", "大连市", "东莞市", "青岛市", "武汉市", "杭州市"],
        school_range_obj: [],
        school_area_obj: [],
        major_range_obj: [],
        major_flag:false,
        range_flag:false,
        area_flag:false,

    },
    methods:{
        cancel:function(data){
            
            bus.$emit(data)
        }
    },
    created: function () {
        //在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
        // 父传子时子不能改变父的值
        this.major_range_obj = this.major_range.map(function (value, index) {
            return index == 0 ? { value: value, selected: true } : { value: value, selected: false }
        });
        this.school_range_obj = this.school_range.map(function (value, index) {
            return index == 0 ? { value: value, selected: true } : { value: value, selected: false }
        });
        this.school_area_obj = this.school_area.map(function (value, index) {
            return index == 0 ? { value: value, selected: true } : { value: value, selected: false }
        });

    },
    components: {
        // "major-range": {
        //     props: ["majorRangeList"],
        //     template: `
        //     <div class="clearfix">
        //         <div>专业层次:</div> <filter-item v-for="(x,index) in majorRangeList" :index="index" :key="index" :catagory="'专业层次'" :range-object="x"></filter-item>
        //     </div>
        //     `
        // },
        "school-range": {
            props: ["schoolRangeList"],
            template: `
        <div class="clearfix">
            <div>高校层次:</div> <filter-item v-for="(x,index) in schoolRangeList" :catagory="'高校层次'" :index="index" :key="index" :range-object="x"></filter-item>
        </div>
        `
        },
        "school-area":
        {
            props: ["schoolAreaList"],
            template: `
            <div class="clearfix">
                <div>高校地区:</div>  <filter-item v-for="(x,index) in schoolAreaList" :catagory="'高校地区'" :index="index" :key="index" :range-object="x"></filter-item>
            </div>
            `
        }
    },
    mounted: function () {
        // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。

        // 注意 mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 vm.$nextTick 替换掉 mounted：
        var _this = this;
        bus.$on('cancelMajor',function(){
            var arr = JSON.parse(JSON.stringify(_this.major_range_obj));
                arr=arr.map((value,index)=>{
                    value.selected=(index==0)
                    return value;
                })
            _this.major_range_obj=arr;
            _this.major_flag=false;

        })
        
         bus.$on('cancelRange',function(){
            var arr = JSON.parse(JSON.stringify(_this.school_range_obj));
                arr=arr.map((value,index)=>{
                    value.selected=(index==0)
                    return value;
                })
            _this.school_range_obj=arr;
            _this.range_flag=false;
        })
         bus.$on('cancelArea',function(){
            var arr = JSON.parse(JSON.stringify(_this.school_area_obj));
                arr=arr.map((value,index)=>{
                    value.selected=(index==0)
                    return value;
                })
            _this.school_area_obj=arr;
            _this.area_flag=false;
        })
        bus.$on("专业层次", function (data) {
            var arr = JSON.parse(JSON.stringify(_this.major_range_obj));
            _this.major_range_obj = arr.map((value, index)=>{
                if (data.index == index) {
                    value.selected = true;
                } else {
                    value.selected = false;
                }
                return value;
            })
            // 重复点击取反选中状态
            _this.major_range_obj[data.index].selected=data.selected;

            // 功能1当全部取消之后 选择不限 
            let selected_none=true;
            arr.forEach((item,index)=>{
                if (index==0) return;
                if (item.selected) {
                    selected_none=false;
                }
            })
            if (selected_none) {
                arr[0].selected=true;
                _this.major_flag=false;
            }else{
                _this.major_flag=true;
            }
            _this.major_range_obj=arr;

        });
        bus.$on("高校层次", function (data) {
           // 不能在循环里直接操作父作用域传过来的值
            var arr = JSON.parse(JSON.stringify(_this.school_range_obj));
            _this.school_range_obj = arr.map((value, index)=>{
                if (data.index == index) {
                    value.selected = true;
                } else {
                    value.selected = false;
                }
                return value;
            })
            _this.school_range_obj[data.index].selected=data.selected;
            let selected_none=true;
            arr.forEach((item,index)=>{
                if (index==0) return;
                if (item.selected) {
                    selected_none=false;
                }
            })
            if (selected_none) {
                _this.range_flag=false;
                arr[0].selected=true;
            }else{
                _this.range_flag=true;
            }
            // console.log(data)
            
            _this.school_range_obj=arr;
        });
        bus.$on("高校地区", function (data) {
            var arr = JSON.parse(JSON.stringify(_this.school_area_obj));
            if(data.index==0){
            _this.school_area_obj=arr.map((value, index)=>{
                    if (index == 0) {
                        value.selected = true;
                    } else{
                        value.selected = false;
                    }
                    return value;
                })
            }else{
                _this.school_area_obj=arr.map((value, index)=>{
                    if (index == 0) {
                        value.selected = false;
                    } else if(index==data.index){
                        value.selected = true;
                    }
                    return value;
                })
                
            }
            _this.school_area_obj[data.index].selected=data.selected;

            let selected_none=true;
            arr.forEach((item,index)=>{
                if (index==0) return;
                if (item.selected) {
                    selected_none=false;
                }
            })
            if (selected_none) {
                _this.area_flag=false;
                arr[0].selected=true;
            }else{
                _this.area_flag=true;
            }
            _this.school_area_obj=arr;

        });
    }
})