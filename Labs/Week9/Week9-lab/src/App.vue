<template>
  <div>
    <navbar />
    
    <div class="iteracion2">
      <h2>Iteracion 2</h2>
      <p>{{ 2 + 2 }}</p>
      <p>{{ iteracion2(variable) }}</p>
    </div>
    
    <div class="iteracion3">
      <h2>Iteracion 3</h2>
      <div v-if="variableCondicional">El valor del boooleano en la iteracion3 es TRUE</div>
    </div>

    <div class="iteracion4">
      <h2>Iteracion 4</h2>
      <template v-for="(post, index) in publicacion" :key="post.id">
        <ul>
          <p>Post {{ index + 1 }}</p>
          <li>{{ post.titulo }}</li>
          <li>{{ post.descripcion }}</li>
          <li>{{ post.contenido }}</li>
        </ul>
      </template>
    </div>

    <div class="iteracion5">
      <h2>Iteracion 5</h2>
      <button :class="{clicked: isClicked}" class="boton" v-on:click="changeColor()">{{ isClicked }}</button>
    </div>

    <footer1 />
  </div>  
</template>

<script setup>
  //iteracion1
  import navbar from "./components/navbar.vue";
  import footer1 from "./components/footer.vue";
 
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

  //Iteracion4
  const publicacion = reactive([{
  id: 1,
  titulo: "Este es el titulo de la publicacion 1",
  descripcion: "Esta es la descripcion de la publicacion 1",
  contenido: "Este es el contenido de la publicacion 1"
},
{
  id: 2,
  titulo: "Este es el titulo de la publicacion 2",
  descripcion: "Esta es la descripcion de la publicacion 2",
  contenido: "Este es el contenido de la publicacion 2"
},
{
  id: 3,
  titulo: "Este es el titulo de la publicacion 3",
  descripcion: "Esta es la descripcion de la publicacion 3",
  contenido: "Este es el contenido de la publicacion 3"
}])


//Iteracion5

let isClicked = ref(false);

 let changeColor = () => {
  isClicked = !isClicked; 
  console.log(isClicked);
 }

</script>

<style>
ul {
  border: 1px solid green;
  padding: 1rem;
}
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