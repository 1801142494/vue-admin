<template>
    <div class="container">
        <!-- 数据大屏内容展示区 -->
        <div class="screen" ref="screen">
            <!-- 数据大屏顶部区域 -->
            <div class="top">
                <Top></Top>
            </div>
            <!-- 数据大屏底部区域 -->
            <div class="bottom">
                <!-- 底部左侧区域 -->
                <div class="left">
                    <Tourist class="tourist"></Tourist>
                    <Sex class="sex"></Sex>
                    <Age class="age"></Age>
                </div>
                <!-- 底部中间区域 -->
                <div class="center">中间</div>
                <!-- 底部右侧区域 -->
                <div class="right">右侧</div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref,onMounted } from 'vue';
// 引入子组件
import Top from './components/top/index.vue'
import Tourist from './components/tourist/index.vue'
import Sex from './components/sex/index.vue'
import Age from './components/age/index.vue'

// 获取数据大屏内容展示区的元素
let screen=ref<any>()
// 组件挂载时的生命周期钩子
onMounted(()=>{
    // 控制screen的大小
    screen.value.style.transform=`scale(${getScale()}) translate(-50%,-50%)`
})
// 定义大屏缩放比例
function getScale(w=1920,h=1080){
    let ww =window.innerWidth/w
    let hh =window.innerHeight/h
    return ww<hh?ww:hh
}
// 监听视口变化，动态调整screen的大小
window.onresize=()=>{
    screen.value.style.transform=`scale(${getScale()}) translate(-50%,-50%)`
}
</script>

<style scoped lang="scss">
.container{
    width: 100vw;
    height: 100vh;
    background: url('@/views/screen/images/bg.png');
    background-size: cover;
    .screen{
        width: 1920px;
        height: 1080px;
        position: fixed;
        left: 50%;
        top: 50%;
        transform-origin: left top;
        .top{
            width: 100%;
            height: 40px;
        }
        .bottom{
            display: flex;
            .left{
                flex: 1;
                height: 1040px;
                display: flex;
                flex-direction: column;
                .tourist{
                    flex: 1.2;
                }
                .sex{
                    flex: 1;
                }
                .age{
                    flex: 1;
                }
            }
            .center{
                flex: 2;
            }
            .right{
                flex: 1;
            }
        }
    }
}
</style>