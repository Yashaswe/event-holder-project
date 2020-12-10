<template>
    <div class="loading">
        <div class="fa-3x">
        <i class="fas fa-spinner fa-spin"></i>
        <!-- <i class="fas fa-circle-notch fa-spin"></i> -->
        <!-- <i class="fas fa-sync fa-spin"></i> -->
        <!-- <i class="fas fa-cog fa-spin"></i>
        <i class="fas fa-spinner fa-pulse"></i>
        <i class="fas fa-stroopwafel fa-spin"></i> -->
      </div>
    </div>
</template>

<script>
export default {
    name:'loading'    
}
</script>

<style>
.loading {
    margin-top: 150px;
    display: flex;
    justify-content: center;
}
</style>
