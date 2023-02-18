export default function errorController(){
    const erros = {
        ErroMessage: 'Jogador não encontrado'
    }

    return alert(erros.ErroMessage.toString())
}