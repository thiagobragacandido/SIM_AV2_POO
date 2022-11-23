// superclasse
class jornalista {
    construtor(foto,nome){
        this.foto = foto;
        this.nome = nome;
    }
noticia (){
    console.log('noticias');
}
}
class informacao extends jornalista {
    construtor(foto,nome,informacao){
        super(foto,nome);
        this.informacao = informacao;

    }
    informacoes() {
        super.informacoes();
        console.log('informacoes mutuas');
    }
}
