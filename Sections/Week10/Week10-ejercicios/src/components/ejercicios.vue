<template>
    <!-- Ej.1: Creamos un <h1> que tendrá un id bindeado. Dicho id tiene que tomar como referencia una variable que habréis creado en vuestro <script setup>. Apuntando al id en cuestión desde el <style> tag le daréis un poco de estilo (color, underline... lo que queráis). -->
    <h1 :id="idDelH1">Este H1 tiene un ID dinamico</h1>

    <!-- // Ej.2: Creamos un <h2> con un binding de clase. Este binding debe asignar una clase u otra según una variable booleánica. Si la variable es verdadera el h2 debería verse de color verde. En caso contrario, NO deberíamos ver el h2 en el render. -->
    <h2 :class="classDelH2 ? 'verde' : 'disabled' ">Este H2 tiene una clase dinamica</h2>

    <!-- // Ej.3: Cramos un <h3> con un binding de estilo. Este binding debe leer un array de variables que tendréis en vuestro <script setup>. Cada variable debería ser una variable reactiva con un valor de objeto que contenga diferentes estilos de CSS (los que queráis). -->
    <h3 :style="estilosDelH3">Este H3 tiene un bindeo de estilos</h3>
    
    <!-- // Ej.4: Creamos un <h4> con un binding de clase que contendrá un array. El primer elemento del array leerá una variable booleánica y solo si esta es true aplicará una clase 'red' que cambie el color a rojo. El segundo elemento del array leerá otra variable booleánica y, según si es verdadera o falsa, aisgnará un border al h4 o no. -->
    <h4>esto es un H4</h4>
    

</template>


<script setup>
import {ref, reactive} from "vue";

let idDelH1 = ref ("estoEsUnH1");
let classDelH2 = ref (true);
let estilosDelH3 = reactive ({

})

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