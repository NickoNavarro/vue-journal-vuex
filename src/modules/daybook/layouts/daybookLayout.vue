<template>
<div>
   <navbar/>

   <div class="d-flex">
       <div class="col-4">
         <entrylist/>
       </div>

        <div class="col-4">
           <router-view/>
       </div>


   </div>

   </div>
</template>


<script>
import navbar from '../components/nabvar.vue'
import entrylist from '../components/entrylist.vue'

export default {
    components:{
        navbar,
        entrylist
    }
   
}
</script>
