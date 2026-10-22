const pokemons = [
    {
        "imagen": "assets/floatzel.jpg",
        "nombre": "Floatzel",
        "tipos": ["Agua"],
        "altura": 1.1,
        "peso": 33.5,
        "sexo": "50% macho, 50% hembra",
        "descripcion": "Pokemon acuatico con aspecto de nutria que utiliza su flotador para desplazarse rapidamente por el agua y rescatar a otros seres.",
        "region": "Sinnoh",
        "habilidades": ["Hidrobomba", "Acua Jet", "Colmillo Hielo", "Triturar"],
        "categoria": "Comun"
    },
    {
        "imagen": "assets/lucario.jpg",
        "nombre": "Lucario",
        "tipos": ["Lucha", "Acero"],
        "altura": 1.2,
        "peso": 54,
        "sexo": "87.5% macho, 12.5% hembra",
        "descripcion": "Pokemon humanoide capaz de percibir y controlar el aura, detectar presencias y anticipar movimientos enemigos.",
        "region": "Sinnoh",
        "habilidades": ["Esfera Aural", "A Bocajarro", "Puño Bala", "Danza Espada"],
        "categoria": "Comun"
    },
    {
        "imagen": "assets/infernape.jpg",
        "nombre": "Infernape",
        "tipos": ["Fuego", "Lucha"],
        "altura": 1.2,
        "peso": 55,
        "sexo": "87.5% macho, 12.5% hembra",
        "descripcion": "Pokemon inspirado en un simio que destaca por su velocidad y agilidad, combinando tecnicas de combate cuerpo a cuerpo con ataques de fuego.",
        "region": "Sinnoh",
        "habilidades": ["Envite Igneo", "A Bocajarro", "Ultrapuño", "Terremoto"],
        "categoria": "Comun"
    },
    {
        "imagen": "assets/luxray.jpg",
        "nombre": "Luxray",
        "tipos": ["Electrico"],
        "altura": 1.4,
        "peso": 42,
        "sexo": "50% macho, 50% hembra",
        "descripcion": "Pokemon felino con una melena oscura y ojos capaces de atravesar objetos para localizar presas y observar lo que se oculta tras los obstaculos.",
        "region": "Sinnoh",
        "habilidades": ["Voltio Cruel", "Colmillo Rayo", "Triturar", "Colmillo Hielo"],
        "categoria": "Comun"
    },
    {
        "imagen": "assets/staraptor.jpg",
        "nombre": "Staraptor",
        "tipos": ["Normal", "Volador"],
        "altura": 1.2,
        "peso": 24.9,
        "sexo": "50% macho, 50% hembra",
        "descripcion": "Pokemon ave de presa con una cresta caracteristica, agresivo y resistente, que utiliza sus alas y garras para atacar con gran potencia.",
        "region": "Sinnoh",
        "habilidades": ["Pajaro Osado", "A Bocajarro", "Ataque Rapido", "Ida y Vuelta"],
        "categoria": "Comun"
    },
    {
        "imagen": "assets/garchomp.jpg",
        "nombre": "Garchomp",
        "tipos": ["Dragon", "Tierra"],
        "altura": 1.9,
        "peso": 95,
        "sexo": "50% macho, 50% hembra",
        "descripcion": "Pokemon con apariencia de tiburon y dragon que alcanza velocidades extraordinarias y posee poderosas mandibulas y garras.",
        "region": "Sinnoh",
        "habilidades": ["Terremoto", "Garra Dragon", "Roca Afilada", "Danza Espada"],
        "categoria": "Pseudo legendario"
    },
    {
        "imagen": "assets/dialga.jpg",
        "nombre": "Dialga",
        "tipos": ["Acero", "Dragon"],
        "altura": 5.4,
        "peso": 683,
        "sexo": "Sin genero",
        "descripcion": "Pokemon legendario asociado al tiempo, cuya existencia esta vinculada al flujo temporal y que posee un cuerpo acorazado con gran poder destructivo.",
        "region": "Sinnoh",
        "habilidades": ["Distorsion", "Cabeza de Hierro", "Pulso Dragon", "Tierra Viva"],
        "categoria": "Legendario"
    },
    {
        "imagen": "assets/palkia.jpg",
        "nombre": "Palkia",
        "tipos": ["Agua", "Dragon"],
        "altura": 4.2,
        "peso": 336,
        "sexo": "Sin genero",
        "descripcion": "Pokemon legendario relacionado con el espacio y las dimensiones, capaz de alterar el espacio que lo rodea y desplazarse entre dimensiones.",
        "region": "Sinnoh",
        "habilidades": ["Corte Vacio", "Hidrobomba", "Pulso Dragon", "Tierra Viva"],
        "categoria": "Legendario"
    },
    {
        "imagen": "assets/gengar.jpg",
        "nombre": "Gengar",
        "tipos": ["Fantasma", "Veneno"],
        "altura": 1.5,
        "peso": 40.5,
        "sexo": "50% macho, 50% hembra",
        "descripcion": "Pokemon espectral travieso que se oculta entre las sombras, puede atravesar paredes y disfruta asustando a personas y otros Pokemon.",
        "region": "Kanto",
        "habilidades": ["Bola Sombra", "Bomba Lodo", "Rayo", "Hipnosis"],
        "categoria": "Comun"
    },
    {
        "imagen": "assets/chimchar.jpg",
        "nombre": "Chimchar",
        "tipos": ["Fuego"],
        "altura": 0.5,
        "peso": 6.2,
        "sexo": "87.5% macho, 12.5% hembra",
        "descripcion": "Pequeño Pokemon simiesco muy energico cuya llama en la cola refleja su vitalidad y que utiliza para lanzar ataques de fuego.",
        "region": "Sinnoh",
        "habilidades": ["Ascuas", "Arañazo", "Puño Fuego", "Roca Afilada"],
        "categoria": "Comun"
    },
    {
        "imagen": "assets/monferno.jpg",
        "nombre": "Monferno",
        "tipos": ["Fuego", "Lucha"],
        "altura": 0.9,
        "peso": 22,
        "sexo": "87.5% macho, 12.5% hembra",
        "descripcion": "Evolucion de Chimchar que combina agilidad, ataques fisicos y fuego, utilizando su cola y extremidades para ejecutar movimientos rapidos y acrobaticos.",
        "region": "Sinnoh",
        "habilidades": ["Puño Fuego", "Ultrapuño", "Ida y Vuelta", "Roca Afilada"],
        "categoria": "Comun"
    },
    {
        "imagen": "assets/gyarados.jpg",
        "nombre": "Gyarados",
        "tipos": ["Agua", "Volador"],
        "altura": 6.5,
        "peso": 235,
        "sexo": "50% macho, 50% hembra",
        "descripcion": "Pokemon de aspecto serpentino y temperamento extremadamente agresivo, conocido por su enorme fuerza y por provocar destruccion cuando entra en colera.",
        "region": "Kanto",
        "habilidades": ["Cascada", "Danza Dragon", "Terremoto", "Colmillo Hielo"],
        "categoria": "Comun"
    },
    {
        "imagen": "assets/umbreon.jpg",
        "nombre": "Umbreon",
        "tipos": ["Siniestro"],
        "altura": 1.0,
        "peso": 27,
        "sexo": "87.5% macho, 12.5% hembra",
        "descripcion": "Evolucion de Eevee asociada a la noche, con pelaje oscuro y anillos luminosos. Es resistente y esta especializado en la defensa.",
        "region": "Johto",
        "habilidades": ["Juego Sucio", "Luz Lunar", "Toxico", "Proteccion"],
        "categoria": "Comun"
    },
    {
        "imagen": "assets/glaceon.jpg",
        "nombre": "Glaceon",
        "tipos": ["Hielo"],
        "altura": 0.8,
        "peso": 25.9,
        "sexo": "87.5% macho, 12.5% hembra",
        "descripcion": "Evolucion de Eevee especializada en el hielo, capaz de enfriar el ambiente y producir particulas heladas para atacar y defenderse.",
        "region": "Sinnoh",
        "habilidades": ["Rayo Hielo", "Ventisca", "Bola Sombra", "Agua Helada"],
        "categoria": "Comun"
    },
    {
        "imagen": "assets/giratina.jpg",
        "nombre": "Giratina",
        "tipos": ["Fantasma", "Dragon"],
        "altura": {
        "formaModificada": 4.5,
        "formaOrigen": 6.9
        },
        "peso": {
        "formaModificada": 750,
        "formaOrigen": 650
        },
        "sexo": "Sin genero",
        "descripcion": "Pokemon legendario que habita en el Mundo Distorsion, una dimension paralela donde las leyes de la realidad funcionan de manera diferente. Puede adoptar dos formas.",
        "region": "Sinnoh",
        "habilidades": ["Golpe Umbrio", "Garra Dragon", "Tierra Viva", "Esfera Aural"],
        "categoria": "Legendario"
    }
];

const lista_pokemons = document.createElement("p");
let lista_desordenada = document.getElementById("lista_desordenada");
let lista = document.getElementById("lista");
let lista_desordenada_2 = document.getElementById("lista_desordenada_2");

pokemons.forEach(pokemon => {
    const linea_pokemon = document.createElement("li");
    linea_pokemon.id = "elemento";
    
    const boton = document.createElement("button");
    boton.className = "boton";
    boton.innerText = pokemon.nombre;
    
    boton.addEventListener("click", function(){
        lista_desordenada_2.innerHTML = "";

        const datos = document.createElement("li");

        const titulo = document.createElement("h3");
        titulo.innerText = pokemon.nombre;

        const imagen = document.createElement("img");
        imagen.src = pokemon.imagen;

        datos.appendChild(imagen);
        datos.appendChild(titulo);

        
        for(const [clave, valor] of Object.entries(pokemon)) {
            if(clave == "imagen" || clave == "nombre") {
                continue
            }

            const parrafo = document.createElement("p");
            if(Array.isArray(valor)) {
                parrafo.innerText = `${clave}: ${valor.join(", ")}`;
            } else if (typeof valor == "object" && valor !== null) {
                const detalles = Object.entries(valor)
                .map(([forma, dato]) => `${forma}: ${dato}`)
                .join(" | ");

                parrafo.innerText = `${clave}: ${detalles}`;

            } else {
                parrafo.innerText = `${clave}: ${valor}`;
            }

            datos.appendChild(parrafo);
        }

        lista_desordenada_2.appendChild(datos);

    })

    linea_pokemon.append(boton);
    lista_desordenada.appendChild(linea_pokemon);

});










