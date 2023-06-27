<template>

<h1>Soda Stereo</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nobis architecto assumenda amet quam illum sunt est harum in eum.</p>
<button @click="mostrarImagen()">Click me</button>
<img v-if="visibilidad.imagen" src="https://i.scdn.co/image/ab6761610000e5eb4a6d2f5e161c011cdb9cef69" alt="imagen de la banda">

</template>

<script setup>

var visibilidad = reactive ({
    imagen: true
})

const mostrarImagen = () => { visibilidad.imagen = true; }

// mediante CLI de vue, crean un projecto con el vue-router activado - ref'readME-clase

// Dejen el projecto como viene no borren para su reff, MAKE 2 paginas nuevas

// page structure

// 1 pagina === banda musica
// section> h1="nombre" - p="info" - img="img"
// creene una funcion que este asociada a un evento de el html con directivo [v-on || @] - este evento es un evento click, que al darle click a un boton, se activara la funcion y muestren en pantalla la img!
// vamos a ver solamente el nombre, info + buton
// darle click al boton y la img aparecera en pantalla
// bonus points para la persona que haga un toggle en la funcion!
</script>

<style></style>