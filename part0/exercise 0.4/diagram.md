# Diaagrama de Secuencia 0.4

  Diagrama que representa la peticion que se realiza al momento de enviar una nota en el formulario y el servidor recibe la peticion.

```mermaid
sequenceDiagram
  autonumber
  participant B as Cliente
  participant A as Servidor
  participant C as JSON

  B->>A: Petición POST /notes
  activate A
  Note right of B: Envía la nota nueva
  Note over A: Procesa petición
  A->>C: push notas (contenido)
  activate C
  C-->>A: OK
  deactivate C
  Note right of A: Crea nueva nota en el json
  A-->>B: Respuesta 302 (Location: /notes)
  deactivate A
  Note left of A: Redirección al cliente
  activate B
  Note over B: Recibe redirección
  B->>A: GET /notes
  deactivate B
  Note over B: Reinicia ciclo
```
