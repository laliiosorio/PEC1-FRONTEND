# EJRCICIO 1

## 1. La aparición de HTML5/CSS3/JS ha supuesto el nacimiento del desarrollo front-end moderno. **(0.75 puntos)**

### - ¿Cuál es la ventaja del uso de etiquetas semánticas? Nombra y explica al menos 3 de estas ventajas.

1. **Mejora la accesibilidad:** Las etiquetas semánticas proporcionan información adicional sobre la estructura y el significado del contenido, lo que facilita a los usuarios con discapacidades visuales o cognitivas navegar por el sitio web utilizando lectores de pantalla u otros dispositivos de asistencia.
  
2. **Mejora el SEO:** Los motores de búsqueda utilizan las etiquetas semánticas para comprender mejor el contenido de una página web, lo que puede mejorar su posicionamiento en los resultados de búsqueda. Utilizar etiquetas apropiadas, como `<header>`, `<footer>`, `<article>`, etc., puede ayudar a los motores de búsqueda a indexar correctamente el contenido.

3. **Facilita el mantenimiento del código:** El uso de etiquetas semánticas hace que el código HTML sea más legible y comprensible tanto para los desarrolladores como para los colaboradores. Al utilizar etiquetas que describen claramente la función de cada sección del sitio web, es más fácil para otros desarrolladores comprender y mantener el código en el futuro.

### - Cita al menos 3 APIs HTML5 y explica brevemente su funcionalidad.

**APIs de HTML5:**

1. **API de Geolocalización:** Permite a los navegadores web acceder a la ubicación física del usuario mediante el GPS u otros métodos, lo que permite crear aplicaciones basadas en la ubicación.

2. **API de Canvas:** Permite la renderización dinámica de gráficos y elementos gráficos, lo que facilita la creación de aplicaciones web interactivas y juegos en el navegador.

3. **API de Web Storage:** Proporciona una forma más eficiente de almacenar datos en el navegador del usuario, lo que permite crear aplicaciones web que funcionan sin conexión y que almacenan datos localmente en el dispositivo del usuario.

### - Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos CSS sobre el mismo elemento en su visualización en diferentes dispositivos (diferentes tamaños de pantalla).

La opción que ofrece CSS3 para aplicar diferentes estilos CSS sobre el mismo elemento en su visualización en diferentes dispositivos se llama **Media Queries**. 

Las Media Queries permiten adaptar el estilo de un sitio web según características específicas del dispositivo, como el ancho de la pantalla, la orientación, la resolución, etc. Esto facilita la creación de sitios web responsivos que se ven bien y funcionan correctamente en una variedad de dispositivos y tamaños de pantalla.

### - Cita al menos 4 de las características principales de TypeScript (importante superset de JavaScript que trataremos en el siguiente capítulo).

1. **Tipado estático:** TypeScript permite la declaración de tipos estáticos para variables, parámetros de funciones y otros elementos del código, lo que ayuda a detectar errores de tipo durante la fase de desarrollo.

2. **Compatibilidad con JavaScript:** TypeScript es un superset de JavaScript, lo que significa que todo el código JavaScript válido también es válido en TypeScript. Esto permite una fácil adopción para proyectos existentes y una transición gradual hacia TypeScript.

3. **Soporte para características modernas de ECMAScript:** TypeScript es compatible con las características más recientes de ECMAScript, lo que permite a los desarrolladores utilizar las últimas funcionalidades de JavaScript mientras mantienen la compatibilidad con versiones anteriores de navegadores.

4. **Mejoras en el mantenimiento del código:** TypeScript ofrece características como interfaces, clases, módulos y genéricos, que facilitan la organización y el mantenimiento del código en proyectos grandes y complejos. Además, proporciona herramientas de desarrollo integradas, como el sistema de tipos estáticos y el autocompletado de código, que ayudan a mejorar la productividad y reducir los errores.

## 2. El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores CSS, que ofrecen evidentes ventajas (0.5 puntos)

## - Cita al menos 2 de estos preprocesadores.

1. **Sass (Syntactically Awesome Stylesheets)**
2. **Less (Leaner Style Sheets)**

## - Cita al menos 4 ventajas que ofrecen estos preprocesadores.

1. **Variables:** Permiten definir variables reutilizables para valores como colores, tamaños, márgenes, etc., lo que facilita la mantenibilidad del código y la aplicación de cambios globales.
   
1. **Nesting:** Permite anidar selectores CSS dentro de otros, mejorando la legibilidad y la organización del código al representar la estructura jerárquica del HTML.
   
2. **Mixins:** Proporciona la capacidad de reutilizar bloques de estilos CSS, lo que reduce la repetición de código y facilita la aplicación de estilos complejos.
   
3. **Importación de archivos:** Permite dividir el código CSS en múltiples archivos y luego importarlos en un archivo principal, lo que mejora la organización y la modularidad del código.

## - Explica brevemente en qué consisten los sourcemaps.

Los sourcemaps son archivos que mapean el código fuente original (por ejemplo, el código Sass o TypeScript) al código generado (por ejemplo, el código CSS o JavaScript) durante el proceso de compilación o transpilación. Esto permite a los desarrolladores depurar el código generado directamente en el código fuente original, lo que facilita la identificación y corrección de errores.

## - Explica qué es un transpilador.

Un transpilador es una herramienta que traduce código de un lenguaje a otro. En el contexto de los preprocesadores CSS o los lenguajes de programación como TypeScript, un transpilador toma el código escrito en un lenguaje de nivel superior (como Sass o TypeScript) y lo traduce a código en un lenguaje de nivel inferior (como CSS o JavaScript), que es compatible con los navegadores web. Esto permite a los desarrolladores utilizar características avanzadas del lenguaje de nivel superior mientras mantienen la compatibilidad con los navegadores y los estándares web.


## El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas como controles de versiones y herramientas de gestión de módulos (0.75 puntos).

### - Cita al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos.
**Sistemas de control de versiones:**

1. **Git**
2. **SVN (Subversion)**

**Herramientas de gestión de módulos:**

1. **npm (Node Package Manager)**
2. **Yarn**

### - Cita y explica al menos 3 comandos de Git.

1. **git init:** Inicializa un repositorio Git en un directorio local.
2. **git add:** Agrega cambios de archivos al área de preparación para el siguiente commit.
3. **git commit:** Guarda los cambios confirmados en el repositorio.
4. **git push:** Envía los commits locales a un repositorio remoto.
5. **git pull:** Obtiene y fusiona los cambios remotos en el repositorio local.

### - Cita y explica brevemente las características más definitorias de WebPack.

1. **Bundling (Empaquetado):** Webpack permite empacar múltiples archivos JavaScript y recursos web en un solo archivo, lo que reduce la cantidad de solicitudes HTTP y mejora el rendimiento de la aplicación.
2. **Module Bundling (Empaquetado de módulos):** Permite utilizar el sistema de módulos de JavaScript (CommonJS, AMD, ES6) para organizar y cargar dependencias de manera eficiente.
3. **Loaders (Cargadores):** Webpack es extensible a través de loaders, que permiten transformar archivos de diferentes tipos (como JavaScript, CSS, imágenes) durante el proceso de construcción, por ejemplo, para transpilar código ES6 a ES5 o aplicar preprocesadores CSS.

## Webgrafía

1. **Ventaja del uso de etiquetas semánticas en HTML5:**
   - [MDN Web Docs - HTML Semantics](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

2. **APIs HTML5:**
   - [MDN Web Docs - Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)

3. **Opción de CSS3 para aplicar diferentes estilos CSS sobre el mismo elemento en diferentes dispositivos:**
   - [MDN Web Docs - Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)

4. **Características principales de TypeScript:**
   - [TypeScript Official Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

5. **Preprocesadores CSS:**
   - [Sass Documentation](https://sass-lang.com/documentation)
   - [Less Documentation](http://lesscss.org/)

6. **Ventajas de los preprocesadores CSS:**
   - [Sass Guide](https://sass-lang.com/guide)
   - [Less Features](http://lesscss.org/features/)

7. **Sourcemaps:**
   - [Introduction to JavaScript Source Maps](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)

8. **Transpilador:**
   - [Understanding Transpilers](https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them)

9. **Sistemas de control de versiones:**
   - [Git Documentation](https://git-scm.com/doc)
   - [Subversion Documentation](https://subversion.apache.org/docs/)

10. **Herramientas de gestión de módulos:**
    - [npm Documentation](https://docs.npmjs.com/)
    - [Yarn Documentation](https://yarnpkg.com/getting-started)

11. **Comandos de Git:**
    - [Git Commands](https://git-scm.com/docs)

12. **Características definitorias de Webpack:**
    - [Webpack Concepts](https://webpack.js.org/concepts/)
    - [Webpack Loaders](https://webpack.js.org/concepts/loaders/)
