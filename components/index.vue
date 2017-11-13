<template>
    <div class="container">
            <div class="remind">*由于2020年拟在京招生普通高校专业（类）选考科目范围尚未公布，暂时调用2018年拟在浙招生普通高校专业（类）选考科目范围，该数据仅供参考，正式文件公布后会即时替换</div>
            <div class="route">
                <router-link tag="span" :to="{name:'general'}">综合检索</router-link>
                <router-link tag="span" :to="{name:'college'}">高校检索</router-link>
                <router-link tag="span" :to="{name:'major'}">专业检索</router-link>
            </div>
            <div>
                <router-view></router-view>
            </div>
    </div>
</template>
<script>
    export default {
        name:"index",
        data:function(){
            return {

            }
        },
    }

</script>
<style scoped>
    .container{
        width: 90%;
        margin: 0 auto;
        font-size: 15px;
        font-family: "weiruanyahei";
    }
    .container .remind{
        color: #f00;
        font-family: "weiruanyahei";
        font-size:15px;
    }
    .route span{
        display: inline-block;
        padding: 5px;
    }
    .router-link-exact-active{
        color: #fff;
        background: #00a05c;
    }
</style>
