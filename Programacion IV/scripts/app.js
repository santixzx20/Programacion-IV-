document.addEventListener('DOMContentLoaded', () => {
    // 1. Referencias a elementos del DOM
    const botonCursos = document.getElementById('btn-cursos');
    const botonEstudiantes = document.getElementById('btn-estudiantes');
    const botonInicio = document.getElementById('btn-inicio');
    const botonInscripciones = document.getElementById('btn-inscripciones');
    
    const vistaBienvenida = document.getElementById('contenido-principal');
    const vistaCursos = document.getElementById('menu-lateral');
    const vistaEstudiantes = document.getElementById('menu-estudiantes');
    const vistaInscripciones = document.getElementById('menu-inscripciones');

    const tablaCursos = document.getElementById('tabla-cursos');
    const tablaEstudiantes = document.getElementById('tabla-estudiantes');
    const tablaInscripciones = document.getElementById('tabla-inscripciones');

    // 2. Carga inicial de datos en las tablas
    cursos.forEach(curso => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td style="padding: 15px;" class="text-center">${curso.nombre}</td>
            <td style="padding: 15px;" class="text-center">${curso.descripcion}</td>
            <td style="padding: 15px;" class="text-center">${curso.duracion}</td>
        `;
        tablaCursos.appendChild(fila);
    });

    // Carga inicial de estudiantes
    estudiantes.forEach(estudiante => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td style="padding: 15px" class="text-center">${estudiante.nombre}</td>
            <td style="padding: 15px" class="text-center">${estudiante.email}</td>
        `;
        tablaEstudiantes.appendChild(fila);
    });

    // Carga inicial de inscripciones
    inscripciones.forEach(inscripcion => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td style="padding: 15px" class="text-center">${inscripcion.estudiante}</td>
            <td style="padding: 15px" class="text-center">${inscripcion.curso}</td>
        `;
        tablaInscripciones.appendChild(fila);
    });
    


    // 3. Función para ocultar todas las vistas (Reset)
    function ocultarVistas() {
        vistaBienvenida.classList.add('d-none');
        vistaCursos.classList.add('d-none');
        vistaEstudiantes.classList.add('d-none');
        vistaInscripciones.classList.add('d-none');
    }

    // 4. Eventos de los botones (Fijos)
    botonInicio.addEventListener('click', (e) => {
        e.preventDefault();
        ocultarVistas();
        vistaBienvenida.classList.remove('d-none');
    });


    botonCursos.addEventListener('click', (e) => {
        e.preventDefault();
        ocultarVistas(); // Primero escondemos todo
        vistaCursos.classList.remove('d-none'); // Mostramos solo cursos
    });

    botonEstudiantes.addEventListener('click', (e) => {
        e.preventDefault();
        ocultarVistas(); // Primero escondemos todo
        vistaEstudiantes.classList.remove('d-none'); // Mostramos solo estudiantes
    });

    botonInscripciones.addEventListener('click', (e) => {
        e.preventDefault();
        ocultarVistas(); // Primero escondemos todo
        vistaInscripciones.classList.remove('d-none'); // Mostramos solo inscripciones
    });
});

// Datos
const cursos = [
    { nombre: 'Curso de JavaScript', descripcion: 'Aprende JavaScript desde cero', duracion: '4 semanas' },
    { nombre: 'Curso de HTML y CSS', descripcion: 'Domina los fundamentos de HTML y CSS', duracion: '3 semanas' },
    { nombre: 'Curso de React', descripcion: 'Desarrolla aplicaciones modernas con React', duracion: '5 semanas' }
];

const estudiantes = [
    { nombre: 'Juan Pérez', email: 'juan.perez@example.com' },
    { nombre: 'María García', email: 'maria.garcia@example.com' },
    { nombre: 'Carlos López', email: 'carlos.lopez@example.com' }
];

const inscripciones = [
    { estudiante: 'Juan Pérez', curso: 'Curso de JavaScript' },
    { estudiante: 'María García', curso: 'Curso de HTML y CSS' },
    { estudiante: 'Carlos López', curso: 'Curso de React' }
];
