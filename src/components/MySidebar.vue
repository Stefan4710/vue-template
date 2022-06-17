<template class="bg-white">
    <section class="main">
        <div class="primary-bg my-0 mx-auto min-w-2xl">
            <h1 class="text-header text-7xl pt-[84px] font-semibold max-w-[850px] mx-auto text-center">
                {{$t('message.General header')}}
                <VueWriter  class="text-blue-700 inline" :array="['квартиру']" :caret="cursor" /> <br>
                <span class="text-[45px] font-normal">{{$t('message.General header2')}}</span>
            </h1>
            <div class="text-title flex items-center justify-center mt-[20px]">
                <div class="dot w-[8px] h-[8px] bg-blue-700 rounded-full mr-[9px] self-start mt-[8px]"></div>
                <p class="text-start text-lg max-w-[450px]">{{$t('message.General title')}}</p>
            </div>
            <div class="relative">
                <a href="#" class="video-modal absolute left-0 right-0 mx-auto mt-[-61px] z-10 w-[110px]">
                    <img src="../assets/img/Component 172.svg" alt="video" class="mx-auto">
                </a>
                <img src="../assets/img/team 1.svg" alt="team" class="m-auto mt-[91px]">
                <div class="say-card">
                    <div class="say-header w-[218px] h-[44px] ml-[42px] mt-[-23px] rounded-[20px] bg-white flex justify-center items-center">
                        <p class="say-header-text font-semibold text-lgv">{{$t('message.Team Prestige')}}</p>
                    </div>
                    <div class="say-title ml-[61px] w-[350px] h-[100px]">
                        <img src="../assets/img/“.svg" alt="apostrof" class="mb-[-10px] mt-[11px] ml-[-35px]">
                        <p class="say-title-text w-[312px]">
                            {{$t('message.Say title')}}
                        </p>
                        <img src="../assets/img/koska.svg" alt="apostrof" class="mt-[-20px] ml-[240px]">
                        <p class="say-author text-lg font-medium mt-2">{{$t('message.Broker kodeks')}}</p>
                    </div>
                </div>
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

.primary-bg {
    background-image: url("../assets/img/bgImage.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    z-index: -1;
}

.say-card {
    position: absolute;
    width: 390px;
    height: 173px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(97px);
    border-radius: 20px;
    right: 334px;
    bottom: -86px;
}

</style>