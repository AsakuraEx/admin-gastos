export const formatearCantidad = (cantidad) => {
    return Number(cantidad).toLocaleString('es-US', {
        style: 'currency',
        currency: 'USD'
    })
}

export const generarId = () => {
    let fecha = Date.now().toString(36);
    let random = Math.random().toString(36).substring(2);
    return fecha+random
}

export const formatearFecha = (fecha) => {
    let fechaNueva = new Date(fecha);
    let opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return fechaNueva.toLocaleDateString('es-Es', opciones)
}