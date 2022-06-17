<template>
  <header class="header">
    <div class="sub-nav w-full bg-grey">
      <div class="sub-nav-container container min-w-minxl min-w-minlg min-w-minmd min-w-minsm h-[27px] mx-auto flex justify-between">
        <nav class="sub-nav-menu">
          <ul class="flex flex-row">
            <li class="mr-[28px]"><a href="#">{{$t('message.Services')}}</a></li>
            <li class="mr-[28px]"><a href="#">{{$t('message.Team')}}</a></li>
            <li class="mr-[28px]"><a href="#">{{$t('message.Vacancies')}}</a></li>
            <li>{{$t('message.Contacts')}}</li>
          </ul>
        </nav>
        <div class="language">
          Ru En
        </div>
      </div>
    </div>
    <div class="nav w-full bg-white">
      <div class="nav-container container flex justify-between h-[83px] items-center">
        <nav class="nav-menu mr-[132px]">
          <ul class="flex items-center">
            <li class="mr-[16px]"><img src="../assets/img/burger.svg" alt=""></li>
            <li class="mr-[22px] text-base"><a href="#">{{$t('message.Living')}}</a></li>
            <li class="mr-[22px] text-base"><a href="#">{{$t('message.Suburban')}}</a></li>
            <li class="mr-[22px] text-base"><a href="#">{{$t('message.New bulding')}}</a></li>
            <li class="mr-[22px] text-base"><a href="#">{{$t('message.Commercy')}}</a></li>
          </ul>
        </nav>
        <div class="header-logo absolute top-[9px] text-center w-[158px] h-[158px] z-10 left-0 right-0 mx-auto rounded-[25px] shadow-3xl bg-white">
          <img src="../assets/img/image 1.svg" alt="logo" class="m-auto mt-[13px]">
          <p class="font-semibold text-2xl">{{$t("message.Logo")}}</p>
          <p class="text-xs">{{$t("message.Company group")}}</p>
        </div>
        <div class="nav-contacts flex items-center ml-[97px]">
          <div class="location mr-[20px] flex items-center">
            <img src="../assets/img/Vector.svg" alt="locate" class="w-[8.9px] h-[12px] mr-[7px]">
            <p class="text-base">{{$t('message.Minsk region')}}</p>
          </div>
          <p class="cotact-number text-lg mr-[18px]">+375 (29) 633-37-47</p>
          <button class="w-[140px] h-[40px] rounded-[100px] bg-blue-700 flex items-center justify-center">
            <div class="contact-items flex">
              <p class="mr-[5px] text-white">{{$t('message.Order')}}</p>
              <img src="../assets/img/phone.svg" alt="phone">
            </div>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
