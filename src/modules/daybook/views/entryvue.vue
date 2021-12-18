<template>
 <div class="entry-title  justify-content-between p-2">

     <div>
         <span class="text-success  f-3 fw-bold">15</span>
         <span class="mx-1  f-3 ">julio</span>
         <span class="mx-2  f-4 fw-light">2021,jueves</span>
     </div>

     <div>
         <button class="btn btn-danger mx-2">
             borrar 
             <i class="fa fa-trash-alt"></i>
         </button>
          <button class="btn btn-primary ">
             subir foto
             <i class="fa fa-upload"></i>
         </button>
     </div>

     <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="que ocurrio hoy"></textarea>

    </div>

    <fab
        icon="fa-save"/>

    <img class="img-thumbnail" src="https://www.fichajes.net/files/styles/epsa_horizontal_thumbail/public/depay-fracaso-barcelona-menos-salio-gratis.jpg?itok=DiMvN27j" alt="">
 </div>
</template>

<script>
import fab from '../components/fab.vue'
export default {
    components:{
        fab
    },


    

}
</script>

<style lang="scss" scoped>

textarea{
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus{
        outline: none;
    }



}

img{
        width: 200px;
        position: fixed;
        bottom: 150px;
        right: 20px;
        box-shadow: 0px5px 10px rgba($color: #000000, $alpha: 0.2);
    }

</style>