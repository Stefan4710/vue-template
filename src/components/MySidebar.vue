<template class="bg-white">
    <section class="main">
        <div class="sidebar-container container my-0 mx-auto min-w-2xl relative z-10">
            <h1 class="text-header text-7xl pt-[84px] font-semibold max-w-[850px] mx-auto text-center">
                {{$t('message.General header')}}
                <VueWriter  class="text-blue-700 inline" :array="['квартиру']" :caret="cursor" /> <br>
                <span class="text-[45px] font-normal">{{$t('message.General header2')}}</span>
            </h1>
            <div class="text-title flex items-center justify-center mt-[20px]">
                <div class="dot w-[8px] h-[8px] bg-blue-700 rounded-full mr-[9px] self-start mt-[8px]"></div>
                <p class="text-start text-lg max-w-[450px]">{{$t('message.General title')}}</p>
            </div>
            <div class="watch-video mt-[30px]">
                <a href="#">
                    <img src="../assets/img/Group 3166.svg" alt="video" class="mx-auto">
                </a>
            </div>
        </div>
    </section>
</template>

<script>



export default {
    components: {
        
    },
     data() {
      
    },
     
}

</script>

<style>



</style>