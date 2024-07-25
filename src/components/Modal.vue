<script setup>
    import cerrarModal from '../assets/img/cerrar.svg';
    const props = defineProps({
        modal: {
            type: Object,
            required: true
        }
    })
    defineEmits(['ocultar-modal']);
</script>

<template>
    <div class="modal">
        <div class="cerrar-modal">
            <img 
                :src="cerrarModal" 
                alt="icono de cerrar"
                @click="$emit('ocultar-modal')"
            >
        </div>

        <div
            class="contenedor contenedor-formulario"
            :class="[modal.animar ? 'animar': 'cerrar']"
        >
            <form
                class="nuevo-gasto"
            >
                <legend>Añadir Gasto</legend>
                <div class="campo">
                    <label for="nombre">Nombre Gasto:</label>
                    <input 
                        type="text"
                        id="nombre"
                        placeholder="Nombre del gasto"
                    >
                </div>
                <div class="campo">
                    <label for="cantidad">Cantidad:</label>
                    <input 
                        type="number"
                        id="cantidad"
                        placeholder="Añade la cantidad del gasto"
                    >
                </div>
                <div class="campo">
                    <label for="categoria">Categoria:</label>
                    <select
                        id="categoria"
                    >
                        <option value=""> -- Seleccione -- </option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos-varios">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                    </select>
                </div>

                <input 
                    type="submit"
                    value="Añadir Gasto"
                >
            </form>

        </div>
    </div>
</template>

<style scoped>

    .modal {
        position: absolute;
        background-color: rgb(0 0 0 / 0.9);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .cerrar-modal{
        position: absolute;
        right: 3rem;
        top: 3rem;
    }

    .cerrar-modal img{
        width: 3rem;
        cursor: pointer;
    }

    .contenedor-formulario{
        transition-property: all;
        transition-duration: 300ms;
        transition-timing-function: ease-in;
        opacity: 0;
    }
    .contenedor-formulario.animar{
        opacity: 1;
    }
    .contenedor-formulario.cerrar{
        opacity: 0;
    }


    .nuevo-gasto{
        margin: 10rem auto 0 auto;
        display: grid;
        gap: 2rem;
    }

    .nuevo-gasto legend {
        text-align: center;
        color: var(--blanco);
        font-size: 3rem;
        font-weight: 700;
    }

    .campo{
        display: grid;
        gap: 2rem;
    }

    .nuevo-gasto input, select {
        background-color: var(--gris-claro);
        border-radius: 1rem;
        border: none;
        padding: 1rem;
        font-size: 2.2rem;
    }

    .nuevo-gasto label {
        color: var(--blanco);
    }

    .nuevo-gasto input[type="submit"]{
        background-color: var(--azul);
        color: var(--blanco);
        font-weight: 700;
        cursor: pointer;
        transition: background-color 300ms;
    }

    .nuevo-gasto input[type="submit"]:hover{
        background-color: #202899;
    }
</style>