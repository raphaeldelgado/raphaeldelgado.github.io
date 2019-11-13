<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-multiselect/0.9.13/css/bootstrap-multiselect.css" />
  
    <title>Contato Sirius</title>
  </head>
  <body>
    <div id="page">
            <img src="bg/sirius.png" id="logo"><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <h3 align="center">Ficha do Aluno</h3><br /><br /><br />
            <tr>
                <h5>Aluno: </h5><div id="nomeAluno"></div>
            </tr>
            <br />
            <tr>
                <h5>Idade: </h5>
                <div id="idadeAluno"></div>
            </tr>
            <br />
            <tr>
                <h5>Telefone: </h5>
                <div id="telefoneAluno"></div>
            </tr>
            <br />
            <tr>
                <h5>Cidade: </h5>
                <div id="cidadeAluno"></div>
            </tr>
            <br />
            <tr>
                <h5>E-mail: </h5>
                <div id="emailAluno"></div>
            </tr>
            <br />
            <tr>
                <h5>Curso Pretendido: </h5>
                <div id="cursoAluno"></div>
            </tr>
            <br /><hr /><br />
            <h3 align="center">Níveis de Dificuldade</h3><br /><br /><br />
                <h5>Matemática: </h5><div id="nivelMatematica"></div>
            </tr>
            <br />
            <tr>
                <h5>Física: </h5><div id="nivelFisica"></div>
            </tr>
            <br />
            <tr>
                <h5>Química: </h5><div id="nivelQuimica"></div>
            </tr>
            <br />
            <tr>
                <h5>Português: </h5><div id="nivelPortugues"></div>
            </tr>
            <br />
            <tr>
                <h5>Literatura: </h5><div id="nivelLiteratura"></div>
            </tr>
            <br />
            <tr>
                <h5>Redação: </h5><div id="nivelRedacao"></div>
            </tr>
            <br />
            <tr>
                <h5>Geografia: </h5><div id="nivelGeografia"></div>
            </tr>
            <br />
            <tr>
                <h5>História: </h5><div id="nivelHistoria"></div>
            </tr>
            <br />
            <tr>
                <h5>Inglês: </h5><div id="nivelIngles"></div>
            </tr>
            <br />
            <tr>
                <h5 align="center">Somatório: </h5><div id="somatorio" align="center"></div>
            </tr>
            <br /><hr /><br />
            <tr>
                <h3 align="center">Disponibilidade de Horários</h3><br /><br /><br />
                <h5>Segunda-Feira: </h5><div id="qtdeHorasSegunda"></div>
            </tr>
            <br />
            <tr>
                <h5>Terça-Feira: </h5><div id="qtdeHorasTerca"></div>
            </tr>
            <br />
            <tr>
                <h5>Quarta-Feira: </h5><div id="qtdeHorasQuarta"></div>
            </tr>
            <br />
            <tr>
                <h5>Quinta-Feira: </h5><div id="qtdeHorasQuinta"></div>
            </tr>
            <br />
            <tr>
                <h5>Sexta-Feira: </h5><div id="qtdeHorasSexta"></div>
            </tr>
            <br />
            <tr>
                <h5>Sábado: </h5><div id="qtdeHorasSabado"></div>
            </tr>
            <br />
            <tr>
                <h5>Domingo: </h5><div id="qtdeHorasDomingo"></div>
            </tr>
            <br />
            <tr>
                <h5 align="center">Total de espaços na semana: </h5><div id="espacosSemana" align="center"></div><br />
                <h5 align="center">Fator Hora do aluno: </h5><div id="fatorHoraAluno" align="center"></div>
            </tr>
            <br /><hr /> <br />
            <tr>
                <h3 align="center">Carga Horária por Disciplina</h3><br /><br /><br />
                <h5>Matemática: </h5><div id="tempoMatematica"></div>
            </tr>
            <br />
            <tr>
                <h5>Física: </h5><div id="tempoFisica"></div>
            </tr>
            <br />
            <tr>
                <h5>Química: </h5><div id="tempoQuimica"></div>
            </tr>
            <br />
            <tr>
                <h5>Português: </h5><div id="tempoPortugues"></div>
            </tr>
            <br />
            <tr>
                <h5>Literatura: </h5><div id="tempoLiteratura"></div>
            </tr>
            <br />
            <tr>
                <h5>Redação: </h5><div id="tempoRedacao"></div>
            </tr>
            <br />
            <tr>
                <h5>Geografia: </h5><div id="tempoGeografia"></div>
            </tr>
            <br />
            <tr>
                <h5>História: </h5><div id="tempoHistoria"></div>
            </tr>
            <br />
            <tr>
                <h5>Inglês: </h5><div id="tempoIngles"></div>
            </tr>
            <br /><hr /><br /><br /><br />
    </div>
    <!-- JavaScript -->
    <!-- jQuery primeiro, depois Popper.js, depois Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.11/jquery.mask.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-multiselect/0.9.13/js/bootstrap-multiselect.js"></script>
    <script src="optionCourse.js"></script>
    <script src="functions.js"></script>
    <script src="functions_disponibilidade.js"></script>
    <script>
            buscaDadosParaRelatorio();
            montaRelatorio();
            renomeiaNiveis(nivel_matematica,"nivelMatematica");
            renomeiaNiveis(nivel_fisica,"nivelFisica");
            renomeiaNiveis(nivel_quimica,"nivelQuimica");
            renomeiaNiveis(nivel_portugues,"nivelPortugues");
            renomeiaNiveis(nivel_literatura,"nivelLiteratura");
            renomeiaNiveis(nivel_redacao,"nivelRedacao");
            renomeiaNiveis(nivel_geografia,"nivelGeografia");
            renomeiaNiveis(nivel_historia,"nivelHistoria");
            renomeiaNiveis(nivel_ingles,"nivelIngles");
    </script>
    </body>
</html>

<style>
#logo {
    position: absolute;
    left: 0; right: 0; 
    margin: auto;
    z-index: -1;
}
#page {
    margin-left: 30%;
    margin-right: 30%;
}
body {
    /* background-image: url(bg/bg3.png);
    background-attachment: fixed; */
}
</style>