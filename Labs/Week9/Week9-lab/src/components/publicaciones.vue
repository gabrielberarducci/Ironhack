<template>
    <div class="iteracion4">
      <h2>Iteracion 4</h2>
        <div v-for="(post, index) in publicacion" :key="post.id">
            <ul>
                <p>Post {{ index + 1 }}</p>
                <li>{{ post.titulo }}</li>
                <li>{{ post.descripcion }}</li>
                <li>{{ post.contenido }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup>

  //Iteracion4
  import {ref, reactive} from "vue";

  let publicacion = reactive([{
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
}]);

</script>

<style>
ul {
  border: 1px solid green;
  padding: 1rem;
}
</style>