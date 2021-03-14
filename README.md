Para instalar la aplicación, descargar o clonar el repostorio desde https://github.com/jyongkim/delilahResto.
Una vez descargado, abrir la consola y ejecutar el comando "npm i", luego crear la base de datos, ejecutando el script que se encuentra en db.config.sql, una vez realizado esto, ejecutar "npm start".
Para poder ingresar, desde la ruta /login o /signup acceder o registrarse para generar un token.
Dicho token deberá utilizarse en las rutas /users /products /cart /orders para poder realizar las diferentes operaciones.
Debe tenerse encuenta que algunas operaciones las pueden realizar sólo administradores y el token tiene un tiempo de vida y pasado dicho tiempo se debe renovar.