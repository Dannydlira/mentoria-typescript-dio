// Como podemos rodar isso em um arquivo .ts sem causar erros? 
interface Cantores {
    nome: string,
    code: number
}

const cantores: Cantores[] = []
cantores.push({ nome: 'João', code: 1 });

console.log(cantores);


const atores = {} as Cantores;
atores.nome = 'Will';
atores.code = 123;


console.log(atores);



// let employee = {};
// employee.code = 10;
// employee.name = "John";