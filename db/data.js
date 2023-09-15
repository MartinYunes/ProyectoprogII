const data = {
    usuarios: [
        {
            id_usuario: 1,
            email: "Bosh",
            contraseña: "contraseña",
            foto_perfil: "https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg",
            fecha: "2004-09-22",
            dni: "46573891",
        },
        {
            id_usuario: 2,
            email: "Marcelo",
            contraseña: "galletita",
            foto_perfil: "https://aishlatino.com/wp-content/uploads/2021/11/que-tipo-de-persona-te-gustaria-ser-730x411-SP.jpg",
            fecha: "2001-02-24",
            dni: "40433891",
        },
        {
            id_usuario: 3,
            email: "Cleveland",
            contraseña: "pepito",
            foto_perfil: "https://i0.wp.com/sonria.com/wp-content/uploads/2016/08/2165947w620.jpg?fit=620%2C348&ssl=1",
            fecha: "1976-06-02",
            dni: "18467891",
        },
        {
            id_usuario: 4,
            email: "Khaled",
            contraseña: "brianluis",
            foto_perfil: "https://cdn.pixabay.com/photo/2022/06/17/20/39/person-7268693_1280.png",
            fecha: "1989-05-14",
            dni: "33667855",
        },
        {
            id_usuario: 5,
            email: "Durant",
            contraseña: "sanandres123",
            foto_perfil: "https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg",
            fecha: "1997-12-31",
            dni: "44657825",
        }
    ],
   
    posteos: [
        {
            id_posteo: 1,
            nombre_imagen: "https://www.smartprix.com/bytes/wp-content/uploads/2019/02/foldables.webp",
            pie_post: "Foldable Phone",
            id_usuario: 2,
            email_usuario: "Durant",
            comentario: [
                {
                    id_usuario: 1,
                    email_usuario: "Marcelo",
                    texto_comentario: "¡Increíble innovación en tecnología móvil! 📱"
                },
                {
                    id_usuario: 2,
                    email_usuario: "Bosh",
                    texto_comentario: "¡Quiero uno ya mismo! 😍"
                },
                {
                    id_usuario: 3,
                    email_usuario: "Cleveland",
                    texto_comentario: "¿Dónde puedo conseguirlo? 😮"
                },
                {
                    id_usuario: 4,
                    email_usuario: "Khaled",
                    texto_comentario: "¡Esto es el futuro! 💫"
                }
            ]
        },
        {
            id_posteo: 2,
            nombre_imagen: "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8zMTgwMjMwMi9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTcwNzc0NTEwOX0.JCfKEjrRbXlUuXHCUpw_JhymrFoFZ-qbWGUEDXJ1Mjk/img.jpg?width=1200&height=800&quality=85&coordinates=0%2C0%2C0%2C0",
            pie_post: "Aesthetic Moon Headphones",
            id_usuario: 4,
            email_usuario: "Bosh",
            comentario: [
                {
                    id_usuario: 5,
                    email_usuario: "Marcelo",
                    texto_comentario: "¡Estos auriculares son una obra de arte! 🌙🎧"
                },
                {
                    id_usuario: 1,
                    email_usuario: "Cleveland",
                    texto_comentario: "¡Los quiero en mi vida! 💖"
                },
                {
                    id_usuario: 2,
                    email_usuario: "Marcelo",
                    texto_comentario: "¡Son el complemento perfecto para mi estilo! ✨"
                },
                {
                    id_usuario: 3,
                    email_usuario: "Durant",
                    texto_comentario: "¡Necesito estos auriculares ahora mismo! 😍"
                }
            ]
        },
        {
            id_posteo: 3,
            nombre_imagen: "https://m.media-amazon.com/images/I/61Uy4GVp-UL.jpg",
            pie_post: "Oculus VR",
            id_usuario: 3,
            email_usuario: "Marcelo",
            comentario: [
                {
                    id_usuario: 4,
                    email_usuario: "Bosh",
                    texto_comentario: "¡Increíble experiencia inmersiva! 🕶️🌌"
                },
                {
                    id_usuario: 5,
                    email_usuario: "Cleveland",
                    texto_comentario: "¡Me encantaría probarlo! 😍🎮"
                },
                {
                    id_usuario: 1,
                    email_usuario: "Cleveland",
                    texto_comentario: "¡Demasiado cool! 🚀🎮"
                },
                {
                    id_usuario: 2,
                    email_usuario: "Marcelo",
                    texto_comentario: "¡Una verdadera revolución! 🌟🎮"
                }
            ]
        },
        {
            id_posteo: 4,
            nombre_imagen: "https://hips.hearstapps.com/bestproducts/assets/17/19/1494595014-bose-soundlink-review-01.jpg",
            pie_post: "Parlante Bose",
            id_usuario: 1,
            email_usuario: "Cleveland",
            comentario: [
                {
                    id_usuario: 3,
                    email_usuario: "Durant",
                    texto_comentario: "¡Suena espectacular! 🎶🔊"
                },
                {
                    id_usuario: 4,
                    email_usuario: "Cleveland",
                    texto_comentario: "Bose nunca decepciona. 👌🎶"
                },
                {
                    id_usuario: 5,
                    email_usuario: "Durant",
                    texto_comentario: "¡A todo volumen! 🎵🔥"
                },
                {
                    id_usuario: 1,
                    email_usuario: "Bosh",
                    texto_comentario: "La calidad de sonido es impresionante. 🎵🔊"
                }
            ]
        },
        {
            id_posteo: 5,
            nombre_imagen: "https://images.ctfassets.net/8cd2csgvqd3m/7f5dpwowNKEKGNW2T5P0Fn/c3b0ff52c3009405f32d28ef7ce7a5fa/Connected_speakers_edge.jpg",
            pie_post: "Edge Speakers",
            id_usuario: 5,
            email_usuario: "Khaled",
            comentario: [
                {
                    id_usuario: 2,
                    email_usuario: "Cleveland",
                    texto_comentario: "¡Diseño elegante y sonido potente! 🎶🔊"
                },
                {
                    id_usuario: 3,
                    email_usuario: "Marcelo",
                    texto_comentario: "Colores vibrantes, ¡me encanta! 🌈🎶"
                },
                {
                    id_usuario: 4,
                    email_usuario: "Bosh",
                    texto_comentario: "Perfectos para ambientar cualquier espacio. 🎵🎉"
                },
                {
                    id_usuario: 5,
                    email_usuario: "Durant",
                    texto_comentario: "¡Una experiencia sonora única! 🎶🔥"
                }
            ]
        },
        {
            id_posteo: 6,
            nombre_imagen: "https://i.ytimg.com/vi/kYFnAnmwG5c/maxresdefault.jpg",
            pie_post: "Gaming Laptop",
            id_usuario: 2,
            email_usuario: "Durant",
            comentario: [
                {
                    id_usuario: 1,
                    email_usuario: "Marcelo",
                    texto_comentario: "¡Potencia y estilo en un solo equipo! 💻🎮"
                },
                {
                    id_usuario: 2,
                    email_usuario: "Bosh",
                    texto_comentario: "¡Una verdadera bestia de rendimiento! 💪🎮"
                },
                {
                    id_usuario: 3,
                    email_usuario: "Cleveland",
                    texto_comentario: "¡El sueño de cualquier gamer! 🕹️🔥"
                },
                {
                    id_usuario: 4,
                    email_usuario: "Khaled",
                    texto_comentario: "¿Dónde puedo conseguir uno? 💻🚀"
                }
            ]
        },
        {
            id_posteo: 7,
            nombre_imagen: "https://cdn.vox-cdn.com/thumbor/lIWoCcbkhwy0vvau9OXm7j_pQ_E=/0x0:1000x563/2000x1333/filters:focal(656x296:657x297)/cdn.vox-cdn.com/uploads/chorus_asset/file/23982116/Low_Resolution_JPG_G502_X_Plus_Black_Bionic_Fluid_1920x1080.jpg",
            pie_post: "Logitech's G502 X gaming mice",
            id_usuario: 3,
            email_usuario: "Marcelo",
            comentario: [
                {
                    id_usuario: 5,
                    email_usuario: "Cleveland",
                    texto_comentario: "¡Una maravilla ergonómica! 🖱️🌟"
                },
                {
                    id_usuario: 1,
                    email_usuario: "Durant",
                    texto_comentario: "¡Logitech siempre innovando! 👏🎮"
                },
                {
                    id_usuario: 2,
                    email_usuario: "Khaled",
                    texto_comentario: "¡Feliz cumpleaños, gamer! 🎂🎮"
                },
                {
                    id_usuario: 3,
                    email_usuario: "Bosh",
                    texto_comentario: "¡Estilo y funcionalidad en uno! 🖱️🔥"
                }
            ]
        },
        {
            id_posteo: 8,
            nombre_imagen: "https://hips.hearstapps.com/hmg-prod/images/gh-index-gamingconsoles-052-print-preview-1659705142.jpg?resize=1200:*",
            pie_post: "Gaming Consoles",
            id_usuario: 1,
            email_usuario: "Khaled",
            comentario: [
                {
                    id_usuario: 4,
                    email_usuario: "Cleveland",
                    texto_comentario: "¡El paraíso de todo gamer! 🎮🌟"
                },
                {
                    id_usuario: 5,
                    email_usuario: "Durant",
                    texto_comentario: "¡Fachas total! 👾💥"
                },
                {
                    id_usuario: 1,
                    email_usuario: "Khaled",
                    texto_comentario: "¡La perfección hecha consola! 🎮🚀"
                },
                {
                    id_usuario: 2,
                    email_usuario: "Bosh",
                    texto_comentario: "El pie de post es lo de menos con esas consolas. 🤷‍♂️🎮"
                }
            ]
        },
        {
            id_posteo: 9,
            nombre_imagen: "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/global/video/fitpro-tips-tricks-videothumbnail-black-android.jpg.large.2x.jpg",
            pie_post: "Beats Fit Pro",
            id_usuario: 4,
            email_usuario: "Khaled",
            comentario: [
                {
                    id_usuario: 3,
                    email_usuario: "Cleveland",
                    texto_comentario: "¡Te extraño, mi compañero de música! 🎧💔"
                },
                {
                    id_usuario: 4,
                    email_usuario: "Bosh",
                    texto_comentario: "¿Dónde te metiste? ¡Necesitamos música de vuelta! 🎵🔍"
                },
                {
                    id_usuario: 5,
                    email_usuario: "Marcelo",
                    texto_comentario: "¡Estos Beats son la onda! 🎶🔥"
                },
                {
                    id_usuario: 1,
                    email_usuario: "Durant",
                    texto_comentario: "¡Vuelve pronto, amigo! Necesitamos beats de nuevo. 🎵🎧"
                }
            ]
        },
        {
            id_posteo: 10,
            nombre_imagen: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FtaW5nJTIwa2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
            pie_post: "Keyboard & Mouse",
            id_usuario: 5,
            email_usuario: "Cleveland",
            comentario: [
                {
                    id_usuario: 2,
                    email_usuario: "Bosh",
                    texto_comentario: "Ufff!"
                },
                {
                    id_usuario: 3,
                    email_usuario: "Khaled",
                    texto_comentario: "Precio?"
                },
                {
                    id_usuario: 4,
                    email_usuario: "Durant",
                    texto_comentario: "Marca del teclado?"
                },
                {
                    id_usuario: 5,
                    email_usuario: "Marcelo",
                    texto_comentario: "..."
                }
            ]
        }

    ]
}
module.exports = data
