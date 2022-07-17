enum profissao{
    Atriz,
    Padeiro
}

type pessoas = {
    nome: string,
    idade: number,
    profissao: profissao
}

let pessoa1:pessoas = {
    nome: "maria",
    idade: 29,
    profissao: profissao.Atriz
}


let pessoa2:pessoas = {
    nome: "roberto",
    idade: 19,
    profissao: profissao.Padeiro
}


let pessoa3:pessoas = {
    nome: "laura",
    idade: 32,
    profissao: profissao.Atriz
};

let pessoa4:pessoas = {
    nome: "carlos",
    idade: 19,
    profissao: profissao.Padeiro
}