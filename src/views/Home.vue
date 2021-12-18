<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1>hola mundo</h1>
    <button @click="gotobook" class="btn btn-primary">enviar</button>
     <button @click="gotobook" class="btn btn-secondary">enviar</button>
      <button @click="gotobook" class="btn btn-success">enviar</button>


  </div>
</template>

<script>
export default{

   methods: {

     gotobook(){
       this.$router.push({name:'no-entry'})
     }
   }
}
</script>






