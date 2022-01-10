// interactua con el archivo JSON, el cual almacena los productos

const path = require("path")
const fs = require("fs")
const file = require ('./file');
const model = {         // dentro de model tengo propiedades o funciones que necesite hacer respecto al json de producto. obtener y buscar producto por id/nombre/categoria/oferta/crear/agregar etc
    file: path.resolve(__dirname, "../data","products.json"),       //guardo en una propiedad en concreto, usando path, la ruta del archivo concreto que voy a estar utilizando
    read: () => fs.readFileSync(model.file),                        //me devuelve el contenido del archivo, toma como parametro la ruta que defini antes
    write: data => fs.writeFileSync(model.file,JSON.stringify(data,null,2)), //para que se vea como los otros productos, pongo null y 2 o 4
    all: () => JSON.parse(model.read()),                           //necesito que la informacion se vuelva datos para mandar a la vista, la funcion all parsea a json a un dato que quiera/necesite
    generate: data => Object({
        id: model.all().length == 0 ? 1 : model.all().pop().id +1, //llamo al metodo all que tiene la lista de mis productos
        name: data.name,
        price: parseInt(data.price), //de strin a number
        offert: data.offert ? true : false,
        image: data.files.map(f => file.create(f).id)
    }),
    create: data => {
        let newProduct = model.generate(data);
        let all = model.all();
        all.push(newProduct);
        model.write(all)
        return newProduct
    },
    search: (prop, value) => model.all().find(element => element[prop] == value),//agrego al archivo JSON
    update: (id,data) => {
        let all = model.all ();
        let update = all.map (e => {
            if (e.id == id){
                e.name = data.name;
                e.price = data.price;
                e.offert = data.offert ? true : false;
                return e
            }
            return e
        })

        model.write(update)
        let product = model.search ('id',id);
        return product
    },
        delete: id => model.write(model.all().filter(e => e.id != id))
            
        
        
}


module.exports = model