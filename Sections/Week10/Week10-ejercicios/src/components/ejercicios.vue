<template>
<!-- Ej.1: Creamos un <h1> que tendrá un id bindeado. Dicho id tiene que tomar como referencia una variable que habréis creado en vuestro <script setup>. Apuntando al id en cuestión desde el <style> tag le daréis un poco de estilo (color, underline... lo que queráis). -->
    <h1 :id="idDelH1">Este H1 tiene un ID dinamico</h1>

    <!-- // Ej.2: Creamos un <h2> con un binding de clase. Este binding debe asignar una clase u otra según una variable booleánica. Si la variable es verdadera el h2 debería verse de color verde. En caso contrario, NO deberíamos ver el h2 en el render. -->
    <h2 :class="classDelH2 ? 'verde' : 'disabled' ">Este H2 tiene una clase dinamica</h2>


</template>


<script setup>
import {ref, reactive} from "vue";

let idDelH1 = "estoEsUnH1"
let classDelH2 = true;


</script>

<style>

#estoEsUnH1 {
    color: blue;
    font-size: 20px;
    text-decoration: underline;
}

.verde {
    color: green;
}

.disabled {
    display: none;
}
</style>