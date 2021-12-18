<template>
<div class=" entry-container mb-3 pointer p-2 "
@click="$router.push({name:'entry', params:{id:10}})">


    <div class="entry-title mb-3 ">

        <span class="text-success fs-5 fw-bold">15</span>
        <span class="mx-1 fs-5 ">julio</span>
        <span class="mx-1 fs-5">jueves 2021</span>
    </div>

    <div class="entry-description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore cupiditate fuga earum nobis, eum autem? Quam repellendus ratione optio mollitia a eligendi! Molestias facilis neque modi accusantium vitae temporibus libero.

    </div>
    
</div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.entry-container{
    border-bottom: 1px solid#2e3e50;
    transition: 0.2s ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount: 45%);
    }
}

.entry-description{
    font-size: 16px;
}

</style>