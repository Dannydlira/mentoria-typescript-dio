// Como podemos melhorar o esse código usando TS? 
enum Profissoes {
    Desenvolvedor,
    Analista,
    Heroina,
    Programador,
}

type Funcionario = {
    nome: string,
    profissao: Profissoes,
    code: number,
    idade: number
}

let pessoa1: Funcionario = {
    nome: "Maria",
    idade: 29,
    code: 1,
    profissao: Profissoes.Analista,
};


let pessoa2: Funcionario = {
    nome: "roberto",
    idade: 19,
    code: 2,
    profissao: Profissoes.Desenvolvedor,
};


let pessoa3: Funcionario = {
    nome: "laura",
    idade: 32,
    code: 3,
    profissao: Profissoes.Heroina,
};

let pessoa4 = {
    nome: "carlos",
    idade: 19,
    code: 4,
    profissao: Profissoes.Programador,
};

console.log(pessoa2);