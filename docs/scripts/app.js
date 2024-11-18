const usuarios = [
    {
        id: 1,

        email: 'joao@gmail.com',
        
        nome: 'João',
    
        telefone: '11123456789',
    
        senha: '123'
    },
    {
        id: 2,

        email: 'victor@gmail.com',
        
        nome: 'Victor',
    
        telefone: '12123456789',
    
        senha: '456'
    },
    {
        id: 3,

        email: 'lucas@gmail.com',
        
        nome: 'Lucas',
    
        telefone: '13123456789',
    
        senha: '789'
    }
]

const videos = [

    {
        id: 1,

        url: 'vFW_TxKLyrE?si=tj7ovzZc_xH7iRfB'
    },
    {
        id: 2,

        url: 'rIfdg_Ot-LI?si=h7f6sLTfQXfoTZJV'
    },
    {
        id: 3,

        url: 'JYs_94znYy0?si=FKdxSDK7tIU1SLRE'
    },
    {
        id: 4,

        url: 'FJVFXsNzYZQ?si=7pU4cWmkT02XBHQf'
    },
    {
        id: 5,

        url: 'Gjnup-PuquQ?si=sNC0bsSJwMM6sSYM'
    },
    {
        id: 6,

        url: '446E-r0rXHI?si=ZnK6y4iyLazrMTRc'
    },
    {
        id: 7,

        url: 'l9AzO1FMgM8?si=ELknQGdvX_YICc_d'
    },
    {
        id: 8,

        url: 'sXQxhojSdZM?si=CgVc5mIbXnLk-B_h'
    },
    {
        id: 9,

        url: 'vKJpN5FAeF4?si=7s1G-NH10Ppxf9LN'
    },
    {
        id: 10,

        url: '2DvrRadXwWY?si=VjjCcl_HUk0_bjU5'
    },
    {
        id: 11,

        url: 'K74l26pE4YA?si=djGrTHy1XQlX-wFM'
    },
    {
        id: 12,

        url: 'U3aXWizDbQ4?si=EOW-Lbh8v1qZNywz'
    },
    {
        id: 13,

        url: 'KMxo3T_MTvY?si=onFlguOmlv1wIjh7'
    },
    {
        id: 14,

        url: 'ok-plXXHlWw?si=8L99iM3wHyM6Q2DU'
    },
    {
        id: 15,

        url: 'OEV8gMkCHXQ?si=lFQm5ogdTY1Amhdj'
    },
    {
        id: 16,

        url: 'Tn6-PIqc4UM?si=Hx3bFEFzuahD2uS7'
    },
    {
        id: 17,

        url: 'a7_WFUlFS94?si=a2bQGzBrLCOGDFQb'
    },
    {
        id: 18,

        url: 'vFW_TxKLyrE?si=tj7ovzZc_xH7iRfB'
    },
    {
        id: 19,

        url: 'I4EWvMFj37g?si=9LHk9zMqJmtr0FT8'
    },
    {
        id: 20,

        url: 'I7-hxTbpscU?si=IAAejaxqqmVtWf2L'
    }
];

function inicializarLocalStorage(){
   
    localStorage.setItem("videos", JSON.stringify(videos));
    
    localStorage.setItem("users", JSON.stringify(usuarios));
}


function carregarVideos(){
    const minivideo = document.getElementById('videosmini');
    console.log(minivideo);  

    if (!minivideo) {
        console.error('Elemento com id "videosmini" não encontrado');
        return; 
    }

    videos.forEach(video => {
        console.log(`Processando video ID: ${video.id}`); 
        const button = document.createElement('button');
        const iframe = document.createElement('iframe');

        iframe.width = "560";
        iframe.height = "315";
        iframe.src = `https://www.youtube.com/embed/${video.url}`;
        iframe.title = "Youtube video player";
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.referrerPolicy = "strict-origin-when-cross-origin";
        iframe.allowFullscreen = true;

        button.appendChild(iframe);
        minivideo.appendChild(button);
 });
}

function validarLogin(){
    let email = document.getElementById("email");
    let password = document.getElementById("senha");
    let usuarios = JSON.parse(localStorage.getItem('users'))
    let valido = 0;
    usuarios.forEach(user =>{
        if (user.email == email.value){
            if(user.senha == password.value){
                alert("Você logou!");
                valido = 1;
                window.location.href='../index.html';
            } else{
                alert("Senha incorreta.");
                valido = 1;
            }
        }
    })
    if (valido == 0){
        alert('Usuário não encontrado.')
    }
}

function fazerCadastro() {

    let inputNome = document.getElementById('nome');

    let inputTelefone = document.getElementById('telefone');

    let inputEmail = document.getElementById('email');

    let inputSenha = document.getElementById('senha');

    let inputConfirmSenha = document.getElementById('confirmSenha');

    
    if (inputSenha.value !== inputConfirmSenha.value) {
        alert("As senhas não estão iguais!");
        return;
    }

    let user = {
        id: 0,
        nome: inputNome.value,
        email: inputEmail.value,
        telefone: inputTelefone.value,
        senha: inputSenha.value
    };



    let usuarios = JSON.parse(localStorage.getItem("users"));

    
    if (usuarios.length > 0) {
        let ultimoUsuario = usuarios.at(-1);
        user.id = ultimoUsuario.id + 1; 
    } else {
        user.id = 1;
    }


            
    usuarios.push(user);

    localStorage.setItem("users", JSON.stringify(usuarios));


    alert('Cadastro feito com sucesso');
    window.location.href='../index.html';
}

if(localStorage.getItem("users") ==  null){
    inicializarLocalStorage();
}