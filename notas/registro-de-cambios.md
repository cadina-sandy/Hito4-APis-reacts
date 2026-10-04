
## Prueba del puerto 5000 después de desactivar AirPlay

- Se intentó iniciar el backend con `npm start`.
- Resultado: `EADDRINUSE`, el puerto 5000 sigue ocupado.
- La comprobación mostró al proceso `ControlCe` (PID 654) escuchando en ese puerto.
- Se conserva el backend en 5001 y las consultas actuales. No se modificó el código para apuntar a un servidor que no pudo iniciar.
- Pendiente: confirmar que la opción desactivada sea Receptor AirPlay y volver a comprobar el puerto.

## Nueva prueba: puerto 5000 liberado

- La comprobación ya no encontró un servicio ocupando el puerto.
- El backend inició correctamente con `npm start` en 5000.
- Se actualizaron Home.jsx y Pizza.jsx a 5000, conservando las direcciones anteriores en comentarios.

## Preparación de la entrega del Hito 4

- Se conservó el README anterior en README-Hito3-respaldo.md y se adaptó el README principal al Hito 4.
- La imagen externa del detalle no cargó durante la revisión. La versión original quedó comentada en Pizza.jsx y debajo se agregó un respaldo local ilustrativo.
- Home queda conservado y comentado en App.jsx para mostrar Pizza según la pauta.
- La ruta de Vite cambió de Hito3-carrito-reacts a Hito4-APis-reacts, con la anterior comentada.
- Se conservó el flujo de Pages para ejecución manual. El frontend necesita la API local y no se presenta como un despliegue completo.
