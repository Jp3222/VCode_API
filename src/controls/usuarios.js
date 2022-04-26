const { is } = require('express/lib/request');
const bd = require('./bd');

const getUsers = async (req, res) => {
    const respuesta = await bd.pool.query('select * from usuarios');
    console.log(respuesta.rows);
    res.status(200).json(respuesta.rows);
}

const get = async (req,res)=>{
    const id = req.params.id;
    const respuesta = await bd.pool.query("select * from usuarios where id = $1",[id]);
    res.json(respuesta.rows);
    res.render('web/html/inicio_sesion.html');
}

const create = async (req, res)=>{
    const {nombre,apellidos,experiencia,teléfono,usuario,contra,correo} =req.body;
    let valores = [nombre,apellidos,experiencia,teléfono,usuario,contra,correo];
    let query = "insert into usuarios(nombre,apellidos,experiencia,teléfono,usuario,contra,correo) values($1,$2,$3,$4,$5,$6,$7)";
    const respuesta = await bd.pool.query(query,valores);
    console.log(respuesta);
    res.send("Usuario Creado");
}

const update = async (req, res)=>{
    const id = req.params.id;
    const {nombre,correo}=req.body;
    console.log(id,nombre,correo);
    bd.pool.query('update usuarios set nombre = $2 , correo = $3 where id = $1',[id,nombre,correo] )
    res.json('data update');
}

const remove = async (req, res) => {
    const id = req.params.id;
    const respuesta = await bd.pool.query('delete from usuarios where id = $1',[id]);
    console.log(respuesta);
    res.json(`user ${id} borrado con exito`);
    
}

module.exports = {
    get,
    getUsers,
    create,
    update,
    remove
}