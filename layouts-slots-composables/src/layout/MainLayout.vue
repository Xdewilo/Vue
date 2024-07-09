<template>
    <div class="container">
      <div class="auxbar">
        <AuxBar />
      </div>
  
      <div class="main-content-container">
        <div class="men">
          <MenuSideBar />
        </div>
  
        <div class="main-content">
            <slot name="main"></slot>
        </div>
        <div class="aux-content">
            <slot name="aux"></slot>
        </div>


      </div>
    </div>
</template>
  
<script lang="ts" setup>
import MenuSideBar from '@/components/MenuSideBar.vue';
import AuxBar from '@/components/AuxBar.vue';

  
</script>
  