
<template>
  <div>
    <header class="bg-white shadow" v-if="$route.meta.title">
      <div>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>

import '@/css/components/components.css'

</script>

