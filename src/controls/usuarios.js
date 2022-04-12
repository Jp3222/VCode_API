const {Pool} =require('pg');
const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:'',
    database:'vcode',
    port:'5432'
});
const getUsers = async (req, res) => {
    const respuesta = await pool.query('select * from usuarios');
    console.log(respuesta.rows);
    res.status(200).json(respuesta.rows);
}

const addUser = async (req, res)=>{
    
}

const setUser =(req, res)=>{}

const removeUser =(req, res)=>{}


module.exports={
    getUsers,
    addUser,
    setUser,
    removeUser
}