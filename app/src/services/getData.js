export const getData = () =>{
    const dataAtual = new Date();

    const ano = dataAtual.getFullYear();
    const mes = dataAtual.getMonth() + 1; // Os meses começam do zero, então você precisa adicionar 1
    const dia = dataAtual.getDate();
    const hora = dataAtual.getHours();
    const minuto = dataAtual.getMinutes();
    const segundo = dataAtual.getSeconds();
    const dataCriacao = `${ano}/${mes}/${dia} ${hora}:${minuto}:${segundo}`;
    
    return dataCriacao;
}