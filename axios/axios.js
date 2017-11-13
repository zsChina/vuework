import axios from "axios";
let query={
	install:function(vm){
		vm.prototype.$http=axios;
	}
}
export default query;