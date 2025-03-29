# Decisiones de Diseño

## 🏗️ Arquitectura del Proyecto
![Arquitectura del Proyecto](./images/Arquitectura%20Movies-App.jpeg)

## 🗄️ Arquitectura de la Base de Datos
La base de datos utilizada en este proyecto es **movies.db**, que almacena la información en la tabla `favorites`.  

```sql
   Table favorites {
   id       INTEGER [primary key, autoincrement]
   Title    TEXT
   Relesed  TEXT
   Runtime  TEXT
   Poster   TEXT
}
```

## Herramientas principales

- **Next.js**: Usado por su rendimiento y capacidad de renderizado en el servidor.
- **TypeScript**: Elegido por su tipado estático, que ayuda a evitar errores comunes y facilita el mantenimiento del código.
- **Tailwind CSS**: Usado por su enfoque de utilidad y flexibilidad.
- **SQLite**: Elegido por su ligereza y facilidad para proyectos pequeños.
- **Node.js & Express**: Para construir el backend de manera sencilla y eficiente.

## Otras Herramientas

- **React Toastify**: Para manejar notificaciones emergentes fáciles de configurar y personalizar.
- **Swiper**: Usado para crear carruseles de imágenes en el frontend.
- **React Skeletons**: Usado para mostrar esqueletos de carga mientras los datos se cargan.
- **SQLite3**: Cliente de SQLite para la interacción con la base de datos en el backend.
- **Cors**: Para habilitar la comunicación entre el backend y el frontend en desarrollo.
- **Express-rate-limit**: Utilizado para limitar las consultas por sgundo hacia la API de OMDb.

## Suposiciones y Consideraciones 

1. **Los me gusta películas tienen persistencia gracias al guardado de datos en la base de datos**  
   - Se asumió que la persistencia de los datos es fundamental para la funcionalidad de favoritos. Los me gustas de las películas se almacenan en una base de datos SQLite, lo que permite mantener la información incluso después de reiniciar el servidor.
   
2. **Solo pueden darse un me gusta por usuario**  
   - Actualmente, las películas marcadas como favoritas son globales y no dependen de un usuario en particular. Si una película es marcada como favorita, seguirá siéndolo sin importar desde qué dispositivo o sesión se acceda. En una futura implementación con autenticación, cada usuario podrá marcar sus propias películas favoritas de forma independiente. Además, se contará el número total de me gusta que ha recibido cada película en base a los likes de cada usuario autenticado.

3. **Validación de si una película ya es favorita o no**  
   - Se implementó un sistema de validación que comprueba si una película ya ha sido marcada como favorita en la base de datos antes de permitirla como favorita nuevamente. Esto asegura que no haya duplicados en la lista de películas favoritas.
