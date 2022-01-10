const path = require("path");
const express = require("express");
const method = require("method-override");
const app = express();

app.set("view engine", "ejs")// motor de vista
app.set("views", path.resolve(__dirname, "views"))
app.set("port", process.env.PORT || 3000) 



app.listen(app.get("port"), () => console.log("listening on port http://localhost:" + app.get("port")))

app.use(express.static(path.resolve(__dirname,"../public"))) 
app.use('/uploads',express.static(path.resolve(__dirname,"../uploads"))) 
app.use(express.urlencoded({extended : true})) // para cuando mando datos de formulario y los quiero capturar del lado del servidor

app.use(method("m")) // ?m=PUT || ?m=DELETE
 /*
app.use(require("./routes/main"))*/

const mainRoutes = require("./routes/main") /*otra forma de usarlo en playground*/
app.use(mainRoutes)

const productRoutes = require("./routes/product") /*otra forma de usarlo en playground*/
app.use("/products", productRoutes)

const filesRoutes = require("./routes/product") /*otra forma de usarlo en playground*/
app.use("/files", filesRoutes)