![header](./docs/img/OSW-project-GitHub-template-header.jpg)


![travis](https://img.shields.io/travis/OSWeekends/kienba.svg)
![issues abiertos](https://img.shields.io/github/issues/OSWeekends/kienba.svg)
![issues promedio](https://img.shields.io/issuestats/i/github/OSWeekends/kienba.svg)
![PR Abiertos](https://img.shields.io/github/issues-pr/OSWeekends/kienba.svg)
![PR Promedio](https://img.shields.io/issuestats/p/github/OSWeekends/kienba.svg)
![último commit](https://img.shields.io/github/last-commit/OSWeekends/kienba/master.svg)
![TOP Lang](https://img.shields.io/github/languages/top/OSWeekends/kienba.svg)
![total lang](https://img.shields.io/github/languages/count/OSWeekends/kienba.svg)

# Kienba

> App web para coger turnos y hacer preguntas al profesor o profesora/conferenciante/organizadora de eventos.

- [ ] TODO: ![Logo de {{proyecto}}]({{LOGO URL}})

Esta app consiste en que el profesor se loguea, crea una clase (un espacio de trabajo) y facilita a los usuarios y usuarias (alumnos) un PIN que corresponde a esa clase. Ellos y ellas se meterán en la clase donde podrán enviar preguntas introduciendo los siguientes campos: nombre, proyecto (opcional) y duda.  El profesor recibirá esas dudas en su dashboard y podrá priorizarlas para responderlas, ver si se repiten para resolverlas a toda la clase o resolverlas conforme van llegando (por turno de llegada).

**Motivación**

Este proyecto parte de un problema que nos encontramos en las aulas: cuando trabajamos por grupos en la sesión de proyectos, el profesor se vuelve loco intentando atendernos a todas en turnos equitativos pero no lo consigue. Empezamos a apuntarnos en una pizarra para llevar un orden de turnos, pero este sistema deja de lado las prioridades, las dudas que pueden ser iguales o muy parecidas y el tiempo que se dedica a cada turno (o proyecto).

De esta necesidad de ‘organizar’ de forma más equitativa la clase, surge el proyecto de Kienba: una app para ayudar a profesor@s y alumn@s a ‘organizar’ mejor la clase y conseguir una óptima interacción entre todos.


### Equipo y Roles

**Lider de Proyecto**:
Responsable del Guild. Coordina el equipo y las reuniones semanales de seguimiento.
- [Mónica Aguado @MoniAguado](//github.com/MoniAguado/)

**Product Owner**:
Responsable del Backlog (Producto y Técnico). Integra las Pull Requests realizando Code Reviews.
- [Carlos Azaustre @carlosazaustre](//github.com/carlosazaustre)

**Scrum Master**:
Responsable de asignar que tareas del backlog van a cada Sprint. Asigna las tareas a los contributors
- [Mónica Aguado @MoniAguado](//github.com/MoniAguado/)

**Contributors**:
Aportan al proyecto con ideas, flujo de trabajo, código, features, bugs, etc...
 - [Aida Adalaber @Alienah](//github.com/Alienah) (Contributor)
 - [Gala @gala1234](//github.com/gala1234) (Contributor)
 - [Mª Virginia Rivas](//github.com/mariav53) (Contributor)
 - [Jorge Baumann @baumannzone](//github.com/baumannzone) (Contributor)
 - [Carlos Azaustre @carlosazaustre](//github.com/carlosazaustre) (Contributor - Full-Stack)
 - [Mónica Aguado @MoniAguado](//github.com/MoniAguado/) (Contributor)
 - [Juan Rodríguez @sjdonando](https://github.com/sjdonado) (Contributor)
 - [Rubén @rubenGit](//github.com/rubenGit) (Contributor)

##### Agradecimientos

 - [Theba Gómez @KoolTheba](//github.com/KoolTheba) (Master of Guilds)
 - [Ulises Gascón @UlisesGascon](github.com/UlisesGascon) (Master of Open Source)
 - [Carlos Hernández @CodingCarlos](//github.com/CodingCarlos) (Master of Beards)
 - [Jose @Josheriff](//github.com/Josheriff) (Master of Gingers)

##### Necesitamos

 - [ ] Diseñadora/or: Alguien que haga un logo molón para el proyecto.

### Demo

Puedes ver la aplicación funcionando en el siguiente enlace: [Demo](https://kienba-ec5bf.firebaseapp.com)

### Tecnología utilizada

#### Dependencias

- **firebase**: Base de datos (FireStore), Autenticación, Hosting,...
- **firebase-functions**: Backend Serverless con Cloud Functions.
- **vue**: Framework para el Frontend.
- **vue-router**: Routing para la SPA.

### Cómo contribuir en el proyecto

Por ahora somos bastantes personas en el proyecto y estamos en proceso de asignar tareas y algunos roles.
Siempre son bienvenidas las Pull-Request y reporting de bugs en cualquier momento.
**Más informacion en [CONTRIBUTING.md](CONTRIBUTING.md)**

### ¿Cómo usarlo?.
#### Instalación

* Instalar [Node.js v8.10.0 LTS](https://nodejs.org/en/)
* Clonar este proyecto en tu equipo con `git clone git@github.com:OSWeekends/kienba.git`
* Ejecutar `npm install`
* Para servir con HotReload en `https://localhost:8080`: `npm run dev`
* Para hacer el *build* de producción: `npm run build`
* Para hacer el *build* de producción y ver un análisis del bundle: `npm run build --report`

### Estado del proyecto.

**Sprint 0**: Definir roles del equipo, completar README y BACKLOG definir herramientas y estilo.

### Releases anteriores

- [ ] TODO: A completar cuando lancemos la primera release.
#### [{{Fecha}} {{Nombre release}} {{Version}}]({{Link a la release}})
- {{Feature añadido o bug resuelto}}. [{{Número del issues}}]({{Link al issue}})
- ...

### Licencia
GNU General Public License v3.0


![footer](./docs/img/OSW-project-GitHub-template-footer.jpg)
