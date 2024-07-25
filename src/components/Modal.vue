<script setup>
    import cerrarModal from '../assets/img/cerrar.svg';
    
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
            class="contenedor"
        >
            <form>
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

</style>