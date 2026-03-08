//importamos el framework express para crear el servidor
import express from "express";

//importamos los tipos request y response para typescript
//sepa que tipo de datos tiene las peticiones y respuestas
import { Request, Response } from "express";

//creamos una instancia de la app de express
const app = express();

//definimos el puerto donde correra el servidor
//":number" es el tipo de dato en typescript
const PORT: number = 3000;

//middleware que permite al servidor trabajar con datos JSON
app.use(express.json());

/* Ruta 1 - Ruta base
esta ruta responde cuando alguien visita: http://localhost:3000
*/
app.get("/", (req: Request, res: Response) => {
    // enviamos una respuesta en formato JSON
    res.json({
        mensaje: "Bienvenido a mi servidor con Node y Typescript"
    });
});

/* ruta 2 esta ruta recibe un parametro en la URL
ejemplo: http://localhost:3000/usuario/5
el numero 5 se guarda como "id"
*/
app.get("/usuario/:id", (req: Request, res: Response) => {

    //extraemos el parametro id desde la URL
    //"as string" le dice a typescript que este valor sera texto
    const id = req.params.id as string;

    //respondemos con un JSON que contiene el id recibido
    res.json({
        usuario: id
    });
});

/* Ruta 3: los parametros query se envian despues del signo
ejemplo: http://localhost:3000/buscar?nombre=juan
*/
app.get("/buscar", (req: Request, res: Response) => {

    //obtenemos el parametro "nombre" desde la query
    const nombre = req.query.nombre as string;
    //devolvemos el resultado en JSON
    res.json({
        nombre: nombre
    });
});

/*inicia el servidor
app.listen hace que el servidor empiece
a  escuchar peticiones en el puerto definido
*/
app.listen(PORT, () => {

    //mensaje que aparece en la terminal cuando el servidor inicia
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
