<template>
  <div>
    <navbar />
    
    <!-- Iteracion 2 -->
    <div class="iteracion2">
      <h2>Iteracion 2</h2>
      <p>{{ 2 + 2 }}</p>
      <p>{{ iteracion2(variable) }}</p>
    </div>
    
    <!-- Iteracion 3 -->
    <div class="iteracion3">
      <h2>Iteracion 3</h2>
      <div v-if="variableCondicional">El valor del boooleano en la iteracion 3 es TRUE</div>
    </div>

    <!-- Iteracion 4 -->
    <publicaciones />

    <!-- Iteracion 5 -->
    <div class="iteracion5">
      <h2>Iteracion 5</h2>
      <button :class="{clicked: isClicked}" class="boton" v-on:click="changeColor()">{{ isClicked }}</button>
    </div>

    <footerbar />
  </div>  
</template>

<script setup>
  //iteracion1
  import navbar from "./components/navbar.vue";
  import footerbar from "./components/footer.vue";
 
  //Iteracion2
  import {ref, reactive} from "vue";
  
  let variable = reactive({
    valor1: "Esto es una prueba, ",
    valor2: "la iteracion 2 esta funcionando",
  })

  let iteracion2 = (objeto) => {
    return objeto.valor1 + objeto.valor2;
  }

  //Iteracion3
  let variableCondicional = true;

  //iteracion4
  import publicaciones from "./components/publicaciones.vue";

  //Iteracion5
  let isClicked = ref(false);

  let changeColor = () => {
    isClicked = !isClicked; 
    console.log(isClicked);
  }

</script>

<style>

h2 {
  margin-top: 4rem;
}
.boton {
  height: 3rem;
  width: 5rem;
  margin: 1rem 0rem;
  font-weight: bolder;
  border: none;
}
.clicked {
  background-color: red;
}

</style>