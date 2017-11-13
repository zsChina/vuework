import Vue from "../js/vue.js";
import Vuex from "vuex";
Vue.use(Vuex);
let store=new Vuex.Store({
	state:{
		major_flag:false,
        range_flag:false,
        area_flag:false,
		major_obj:[],
		school_range_obj:[],
		school_area_obj:[],
	},
	mutations:{
		update_school_range:function(state,data){
			state.school_range_obj=data;
		},
		update_area_range:function(state,data){
			state.school_area_obj=data;
		},
		update_major_obj:function(state,data){
			state.major_obj=data;
		},
		cancel:function(state,data){
			if (data=="cancelMajor") {
				state.major_flag=false;
				var school_major_arr=[];
				school_major_arr=state.major_obj.map((value,index)=>{
					value.selected=(index==0);
					return value;
				})
				state.major_obj=school_major_arr;
				return;
			}
			if (data=="cancelRange") {
				state.range_flag=false;
				var school_range_arr=[];
				school_range_arr=state.school_range_obj.map((value,index)=>{
					value.selected=(index==0);
					return value;
				})
				state.school_range_obj=school_range_arr;
				return;
			}
			if (data=="cancelArea") {
				state.area_flag=false;
				var school_area_arr=[];
				school_area_arr=state.school_area_obj.map((value,index)=>{
					value.selected=(index==0);
					return value;
				})
				state.school_area_obj=school_area_arr;
				return;
			}
		},
		reset_school_range:function(state,data){
				var school_range_arr=[];
				
					school_range_arr=state.school_range_obj.map((value,index)=>{
						if (index==data.index) {
							value.selected=!value.selected;
						}else{
							value.selected=false;
						}
						return value;
					})
					var selected_none=true;

					school_range_arr.forEach((value,index)=>{
						if (value.selected) {
							selected_none=false;
							state.range_flag=true;
						}
					})
					if (selected_none) {
						state.range_flag=false;
						school_range_arr=school_range_arr.map((value,index)=>{
							value.selected=(index==0);
							return value;
						})
					}

				if (data.index==0) {
					console.log(11)
					state.range_flag=false;
				}
				state.school_range_obj=school_range_arr;
		},
		reset_major_range:function(state,data){
				var major_range_arr=[];
				
				major_range_arr=state.major_obj.map((value,index)=>{
					if (index==data.index) {
						value.selected=!value.selected;
					}else{
						value.selected=false;
					}
					return value;
				})
				var selected_none=true;
				major_range_arr.forEach((value,index)=>{
					if (value.selected) {
						selected_none=false;
						state.major_flag=true;
					}
				})
				console.log(major_range_arr)
				if (selected_none) {
					state.major_flag=false;
					major_range_arr=major_range_arr.map((value,index)=>{
						value.selected=(index==0);
						return value;
					})
						
				}
				if (data.index==0) {
					state.major_flag=false;
				}
				state.major_obj=major_range_arr;
		},
		reset_school_area:function(state,data){
				var school_area_arr=[];
				if (data.index==0) {
						school_area_arr=state.school_area_obj.map((value,index)=>{
						if (index==0) {
							value.selected=true;
						}else{							
							value.selected=false;
						}
						return value;
					})
				}else{
					school_area_arr=state.school_area_obj.map((value,index)=>{
						if (index==0) {
							value.selected=false;
						}else{
							if (data.index==index) {
								value.selected=!value.selected;
							}
						}
						return value;
					})
				}
				
				var selected_none=true;
				school_area_arr.forEach((value,index)=>{
					if (value.selected) {
						state.area_flag=true;
						selected_none=false;
					}
				})
				if (selected_none) {
					state.area_flag=false;
					school_area_arr=school_area_arr.map((value,index)=>{
						value.selected=(index==0);
						return value;
					})
						
				}
				if (data.index==0){
					state.area_flag=false;					
				}
				state.school_area_obj=school_area_arr;
		}

	}
})
export default store;