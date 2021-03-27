var filmes = [
    `Classificação: 18
    Lançado em: 2020
    Duração: 1:36:00`,

    `Classificação: 12
    Lançado em: 2020
    Duração: 2:31:06`,

    `Classificação: 18
    Lançado em: 2009
    Duração: 2:42:01`,

    `Classificação: 18
    Lançado em: 2016
    Duração: 3:02:29`,

    `Classificação: 12
    Lançado em: 2019
    Duração: 2:03:39`,

    `Classificação: 16
    Lançado em: 2016
    Duração: 1:48:11`,

    `Classificação: 12
    Lançado em: 2017
    Duração: 2:00:00`

]

var filmes_link = [
    'https://www.youtube.com/watch?v=uqiiJ38D97w',
    'https://www.youtube.com/watch?v=-cdgNGmhX88',
    'https://www.youtube.com/watch?v=bu76tuQwQXQ',
    'https://www.youtube.com/watch?v=CUSEcmj3JS4',
    'https://www.youtube.com/watch?v=OKaL1EcdIlc',
    'https://www.youtube.com/watch?v=TjBH2FckLLY',
    'https://www.youtube.com/watch?v=6tUzAx5qI48'
]
var filmes_titulo = [
    'DCU Batman: Morte em Família',
    'Mulher-Maravilha 1984',
    'Watchmen',
    'Batman vs Superman: A Origem da Justiça (versão estendida) (Dublado)',
    'Capitã Marvel (Dublado)',
    'Deadpool (Dublado)',
    'Liga da Justiça'
]
//background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) 100%),url("../img/batman_deathinfamily.jpg");
var filmes_img = [
    'img/batman_deathinfamily.jpg',
    'img/mulher_maravlilha.jpg',
    'img/Watchmen.jpg',
    'img/batman_vs_superman.jpg',
    'img/capita_marvel.jpg',
    'img/deadpool.jpg',
    'img/justiceleague.jpg'
]

var filmes_info = [
    'Batman: Death in the Family – Treinado como um pupilo do Batman, Jason Todd traz um senso implacável de justiça como Robin e está focado em acabar com o Coringa. Mas será que Batman poderá salvar Robin    de um destino pior que a morte? Tragédia, vingança e redenção aguardam você nesse revolucionário     filme da DC! Quem viverá? Quem morrerá? Quem cuidará de Gotham? Também inclui 4 curtas do DC     Showcase: Adam Strange, Sgt. Rock, Vingador Fantasma e Morte.',
    'Avance para os anos 80, numa aventura que mostrará a Mulher-Maravilha enfrentando novos inimigos, incluindo Max Lord e a Mulher-Leopardo.',
    'Alguém está matando nossos super-heróis. É o ano de 1985 e os super-heróis se aliaram para revidar ao assassinato de um deles. Logo descobrem um sinistro plano que coloca toda a humanidade em grave perigo.',
    '“Batman v Superman: Dawn of Justice Ultimate Edition” inclui aproximadamente 30 minutos de cenas estendidas nunca vistas antes nos cinemas! O diretor Zack Snyder apresenta “Batman v Superman: Dawn of Justice”, que estrela Ben Affleck como Batman/Bruce Wayne e Henry Cavill como Superman/Clark Kent, na primeira vez que os personagens se encontram na tela dos cinemas.',
    'Ambientado nos anos 1990, Capitã Marvel da Marvel Studios é uma aventura totalmente nova de um período nunca visto na história do Universo Cinematográfico da Marvel que acompanha a jornada de Carol Danvers, conforme ela se torna uma das personagens mais poderosas do universo. Enquanto uma guerra galáctica entre duas raças alienígenas chega à Terra, Danvers se vê junto a um pequeno grupo de aliados bem no meio da ação.',
    'Baseado no anti-herói não convencional da Marvel Comics, DEADPOOL conta a história da origem do ex-agente das Forças Especiais que se tornou o mercenário Wade Wilson. Depois de ser submetido a um desonesto experimento que o deixa com poderes de cura acelerada, Wade adota o alter ego de Deadpool. Armado com suas novas habilidades e um senso de humor negro e distorcido, Deadpool persegue o homem que quase destruiu sua vida',
    'Impulsionados pela sua fé na humanidade e inspirados pelo altruísmo do Superman, Bruce Wayne solicita a ajuda de sua nova aliada, Diana Prince, para enfrentar um inimigo ainda maior. Juntos, Batman e Mulher-Maravilha trabalham rapidamente para encontrar e recrutar uma equipe de meta-humanos a fim de enfrentarem essa ameaça recém-despertada. Porém, apesar da formação dessa liga de heróis sem precedentes — Batman, Mulher-Maravilha, Aquaman, Ciborgue e o Flash — talvez seja tarde demais para salvar o planeta de um ataque de proporções catastróficas.'
]

function abrirvideo(id) {
    window.open(filmes_link[id]);
}

function exibeinfo(id) {
    //Swal.fire(filmes[id]);

    Swal.fire({
        title: filmes_titulo[id],
        text: filmes[id],
        imageUrl: filmes_img[id],
        imageWidth: 150,
        imageHeight: 200,
        imageAlt: filmes_titulo[id],
    })
}

function destaque(id) {
    var titulo = document.querySelector(".titulo");
    var descricao = document.querySelector(".descricao");
    var titulo = document.querySelector(".titulo");
    var assistir = document.getElementById("assistir");
    var info = document.getElementById("info");
    var background = document.querySelector(".filme-principal");

    if (titulo) {
        titulo.innerHTML = filmes_titulo[id];
    }
    if (descricao) {
        descricao.innerHTML = filmes_info[id];
    }
    if (assistir) {
        assistir.setAttribute("onclick", "abrirvideo(" + id + ");")
    }
    if (info) {
        info.setAttribute("onclick", "exibeinfo(" + id + ");")
    }
    if (background) {
        background.setAttribute("style", "background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) 100%),url('" + filmes_img[id] + "');   height: 400px;  background-size: cover;  display: flex;  flex-direction: column;  justify-content: center;  align-items: flex-start;")
    }
}