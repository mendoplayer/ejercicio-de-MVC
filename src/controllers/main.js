// ya no necesitamos path, tenemos la variable view que sabe buscar 

module.exports = {                              //todas las funciones llevan dosp arametros req y res
    index: (req,res) => res.render("home", {     //puedo pasarle datos a traves del objeto literar
        styles:["main"],                        /*["header","footer",etc] puedo ponerle todos los css que queira o encesite*/
        title: "Home"                           /*son variables que le comparto a la vista de ejs*/
    })
}




/*

const productos = require("../data/productos")

const menu = require */
