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
            <div class="main-team relative max-w-[1426px] mx-auto mt-[91px]">
                <a href="#" class="video-modal absolute left-0 right-0 mx-auto mt-[-61px] z-10 w-[110px]">
                    <img src="../assets/img/Component 172.svg" alt="video" class="mx-auto">
                </a>
                <img src="../assets/img/team 1.png" alt="team" class="m-auto">
                <div class="say-card absolute">
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
    <section class="min-risks">
        <div class="min-risks-statistics max-w-[1158px] h-[85px] flex text-lg leading-[130%] mx-auto mt-[154px]">
            <div class="statistic flex items-center">
                <p class="number font-semibold text-[61px] text-[#6346FA] mr-[20px]  h-[46.8px] flex items-center">5</p>
                <p class="statistic-title font-medium mr-[114px]">лет на рынке недвижимости</p>
            </div>
            <div class="statistic flex items-center">
                <p class="number font-semibold text-[61px] text-[#6346FA] pl-[124px] mr-[20px] border-l h-[46.8px] flex items-center">57</p>
                <p class="statistic-title font-medium pr-[122px] border-r">грамотных специалистов</p>
            </div>
            <div class="statistic flex items-center">
                <p class="number font-semibold text-[61px] text-[#6346FA] ml-[40px] mr-[20px] h-[46.8px] flex items-center">13.000+</p>
                <p class="statistic-title font-medium">успешных сделок</p>
            </div>
        </div>
        <div class="min-risks-box mt-[9px] xl:container flex justify-between mx-auto">
            <img src="../assets/img/Group 3232.png" alt="blue-man" class="min-risks-img">
            <div class="min-risks-block mt-[171px] ml-[63px]">
                <h3 class="min-risks-header text-[46px] text-semibold leading-[120%]"><span class="text-[#6346FA]">Сведем к минимуму ваши риски</span> при покупке и продаже недвижимости</h3>
                <p class="min-risks-title text-normal leading-[140%] mt-[22px] whitespace-normal">
                    При основании компании, я понимал, что в данной сфере большая конкуренция. Поэтому на самом старте мы сделали упор на людей и технологии. И не прогадали.
                    <br>
                    <br>
                    Достигнуть успеха помогло выстраивание между сотрудниками компании и клиентами только честных и прозрачных взаимоотношений, <span class="font-medium"> а за счёт большого вклада в разработку собственных технологий получилось значительно повысить качество риэлторской услуги.</span>
                </p>
                <div class="min-risks-sign flex items-center font-medium ml-2 mt-[35px]">
                    <img src="../assets/img/image 3.svg" alt="signature">
                    <p class="min-risks-author"><span class="text-[#6346FA]">Андрей Вариниченко </span> <br> Основатель «Престиж»</p>
                </div>
            </div>
        </div>
    </section>
    <section class="how-we-work">
        <div class="secondary-bg pb-[186px]">
            <div class="note free-consultation xl:container mt-[-100px]">
                <p class="free-consultation-title ml-[69px] text-sm text-[32px] mr-[37px] whitespace-nowrap leading-[38.4px]">
                    Запишитесь на <span class="text-[#222222] font-semibold">бесплатную <br> консультацию</span> с нашим менеджером
                </p>
                <div class="free-consultation-contact flex mr-[35px] h-[50px] bg-[#F7F6FB] rounded-[100px] mt-[35px]">
                    <input type="" placeholder="+7 (___) ___-__-__" class="free-consultation-number bg-[#F7F6FB] rounded-l-[100px] pl-4 w-[188px]">
                    <button class="order-call rounded-[100px] text-base bg-[#6346FA] text-white w-[200px]">Заказать звонок</button>
                </div>
                <img src="../assets/img/Frame.svg" alt="alter" class="free-consultation-img mb-[-100px]">
            </div>
            <div class="how-we-work-box xl:container text-center mx-auto pt-[142px]">
                <h2 class="how-we-work-header font-semibold text-[64px]">Как мы работаем</h2>
                <p class="how-we-work-title text-[46px] font-normal mt-[5px] text-[#222222]">Все этапы работы с нашей компанией</p>
            </div>
            <div class="free-consultation-contact xl:container flex justify-center h-[50px] rounded-[100px] mt-[32px] box-border">
                <button class="order-call rounded-l-[100px] text-base bg-[#6346FA] text-white w-[200px]">Покупка</button>
                <button class="order-call rounded-r-[100px] border-[#6346FA] border-[1px] text-base w-[200px]">Продажа</button>
            </div>
            <div class="purchase xl:container mx-auto mt-[36px] flex">
                <div class="purchase-stages grid grid-cols-1 flex-[1_1_50%] box-border">
                    <p class="purchase-stages-header text-[24px] ml-[30px]">Этапы покупки:</p>
                    <div class="purchase-stage-steps ml-[34px] grid grid-cols-1 gap-[30px] mt-[17px]">
                        <div class="purchase-stage">
                            <div class="purchase-stage-order">01.</div>
                            <div class="purchase-stage-block">
                                <p class="purchase-stage-invisible">Сегодня</p>
                                <h3 class="purchase-stage-header">Позвоните нам</h3>
                                <p class="purchase-stage-title">или закажите звонок, также будем рады предоставить вам бесплатную консультацию при личной встрече.</p>
                            </div>
                        </div>
                        <div class="purchase-stage">
                            <div class="purchase-stage-order">02.</div>
                            <div class="purchase-stage-block">
                                <p class="purchase-stage-invisible">После заключения договора</p>
                                <h3 class="purchase-stage-header">Ознакамливаемся с предложениями</h3>
                                <p class="purchase-stage-title">Предоставим актуальную информацию о предложениях на рынке недвижимости</p>
                            </div>
                        </div>
                        <div class="purchase-stage">
                            <div class="purchase-stage-order">03.</div>
                            <div class="purchase-stage-block">
                                <p class="purchase-stage-invisible">От 1 недели до 2-х месяцев</p>
                                <h3 class="purchase-stage-header">Ищем недвижимость</h3>
                                <p class="purchase-stage-title">Осуществим подбор варианта покупки соответствующий вашим пожеланиям. Организуем и сопроводим вас на заинтересовавшие объекты. Поможем сориентироваться в выборе лучшего варианта покупки.</p>
                            </div>
                        </div>
                        <div class="purchase-stage">
                            <div class="purchase-stage-order">04.</div>
                            <div class="purchase-stage-block">
                                <p class="purchase-stage-invisible">Когда объект выбран</p>
                                <h3 class="purchase-stage-header">Организуем и сопроводим вас на заинтересовавшие объекты</h3>
                                <p class="purchase-stage-title">Поможет организовать подписание предварительного договора (цена, сроки и схема оплаты, сроки освобождения и передачи квартиры). Проверим наличие и соответствие документов для проведения сделки купли-продажи</p>
                            </div>
                        </div>
                        <div class="purchase-stage">
                            <div class="purchase-stage-order">05.</div>
                            <div class="purchase-stage-block">
                                <p class="purchase-stage-invisible">После переговоров</p>
                                <h3 class="purchase-stage-header">Передаем объект покупателю</h3>
                                <p class="purchase-stage-title">Организуем проведение сделки купли-продажи;<br> Сопроводим вас до получения правоустанавливающих документов и ключей от вашего нового дома</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="work-with-you flex-[1_1_50%] box-border">
                    <p class="work-with-you-header text-[24px] ml-[47px]">С вами будут работать</p>
                    <div class="work-with-you-boxes">
                        <div class="work-with-you-box mt-[15px]">
                            <div class="work-with-you-header-logo">
                                <img src="../assets/img/broker.svg" alt="broker" class="work-with-you-logo">
                                <h3 class="work-with-you-spesialist">Брокер</h3>
                            </div>
                            <ul class="work-with-you-title">
                                <li>Ознакомит с предложениями, согласно вашим потребностям;</li>
                                <li>Подберет варианты, соответствующие вашим пожеланиям.</li>
                                <li>Организует и примет участие в просмотрах по выбранным объектам, расскажет об инфраструктуре и особенностях района;</li>
                                <li>Порекомендует и даст объективную оценку по выбору лучшего объекта к покупке из выбранных вами;</li>
                                <li>Проведет переговоры в ваших интересах.</li>
                            </ul>
                        </div>
                        <div class="work-with-you-box mt-[32px]">
                            <div class="work-with-you-header-logo">
                                <img src="../assets/img/lawyer.svg" alt="lawyer" class="work-with-you-logo">
                                <h3 class="work-with-you-spesialist">Брокер</h3>
                            </div>
                            <ul class="work-with-you-title">
                                <li>Профессионально и качественно проведёт организацию и согласование условий вашей сделки;</li>
                                <li>Осуществит юридическую экспертизу правоустанавливающей и технической документации, исключит все возможные риски и удостоверит отсутствие третьих лиц претендующих на покупаемый вами объект;</li>
                                <li>Окажет компетентное сопровождение удостоверения государственной регистрации приобретаемого объекта до момента получения правоустанавливающих документов.</li>
                            </ul>
                        </div>
                    </div>
                </div>  
            </div>
            <div class="note follow-news xl:container mt-[106px] flex">
                <h3 class="follow-news-header flex-[1_1_50%] text-[32px] font-normal text-center">
                    Следите за новостями в <span class="font-semibold">Instagram</span>
                </h3>
                <div class="follow-news-instagram flex-[1_1_50%]">
                    <div class="follow-news-logo relative w-[90px]">
                        <img src="../assets/img/instLogo.svg" alt="inst-logo" class="follow-news-instagram-logo">
                        <img src="../assets/img/inst.svg" alt="inst" class="follow-news-instagram absolute top-0 right-0">
                    </div>
                    <div class="follow-news-instagram-header">
                        
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
