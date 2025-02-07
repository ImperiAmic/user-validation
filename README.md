# Launch starter JavaScript

Aquí tienes un starter para tus primeros proyectos con JavaScript.

## ¿Cómo utilizarlo?

### Clona el repo

Primero clona el repositorio desde GitHub a tu disco duro, y luego ya puedes abrir el proyecto local en VS Code.

### Cambia el nombre del proyecto

Abre el archivo `package.json` y cambia el nombre "launch-starter-js" por el nombre de tu proyecto.

### Instala las dependencias

Lanza el siguiente comando para instalar las herramientas que tu proyecto necesita. Asegúrate de que la terminal está abierta en la carpeta raíz de tu proyecto.

```bash
npm install
```

Después de lanzar este comando se te debe haber creado una carpeta llamada `node_modules` y un archivo llamado `package-lock.json`. Por ahora no es necesario entender qué son, pero es importante que estén.

### Crea la carpeta para tu código

Todavía no estás en el punto en el que tengas que separar entre código fuente y código compilado, por tanto aún no hace falta que crees la carpeta `src`. Sin embargo, es importante que separes el código JS de todos los archivos de configuración que tienes en la carpeta raíz. Así que puedes crear una carpeta llamada `js` y crear el archivo `index.js` dentro de esa carpeta.

### Configura el archivo de inicio

Tu programa necesita un punto de entrada. Al tener un único archivo por ahora, será ése. Este punto de entrada lo tienes que configurar en el archivo `package.json`, en la propiedad `"main"`. Ahora está configurado para que el punto de entrada sea `index.js`, situado en la raíz del proyecto. Pero tú no tienes el archivo en el raíz, por tanto tienes que cambiarlo para que apunte al archivo en su ruta actual.

Para probar el punto de entrada, haz un programa que imprima "Hola, mundo" por consola y lanza el siguiente comando desde la terminal:

```bash
node .
```

Ese comando significa "ejecuta el archivo que está en el punto de entrada de este proyecto" (`.`) significa _el directorio actual_).

Si todo ha ido bien, deberías ver la frase "Hola, mundo" en la consola.

### Añade un script de lanzamiento

Los programas hechos para ejecutar en Node.js se lanzan con el comando `npm start`. Si te fijas en el archivo `package.json`, verás que hay una propiedad llamada `"scripts"`, donde ya hemos configurado el script `start`.

Cada vez que quieras ejecutar tu programa, puedes lanzar el comando `npm start` desde la terminal. Esto se irá al script `start` del `package.json` y ejecutará el comando que haya configurado, que ahora mismo es `node .`
