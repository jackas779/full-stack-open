# Diagrama de Secuencia 0.5

  Diagrama que representa la aplicacion de una sola pagina

```mermaid
sequenceDiagram
  autonumber
  participant B as Cliente
  participant A as Servidor

  B->>A: Realiza petición GET (HTML)
  activate A
  Note over A: Procesa petición
  A-->>B: Devuelve código HTML
  deactivate A

  B->>A: Realiza petición GET (CSS)
  activate A
  Note over A: Procesa petición
  A-->>B: Devuelve hoja de estilos CSS
  deactivate A

  B->>A: Realiza petición GET (JS)
  activate A
  Note over A: Procesa petición
  A-->>B: Devuelve código JavaScript
  deactivate A

  B->>A: Realiza petición GET (JSON)
  activate A
  Note over A: Procesa petición
  A-->>B: Devuelve JSON
  deactivate A

  activate B
  B-->>B: Ejecuta código JS después de cargar la página

  B->>A: Realiza petición POST (Formulario)
  activate A
  Note over A: Procesa petición
  A-->>B: Devuelve JSON
  deactivate A

   B-->>B: Reemplaza el contenido anterior con la nueva información

  deactivate B
  Note over B: Espera a que se envíen más formularios
```
