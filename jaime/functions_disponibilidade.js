var nome = '';
var idade = '';
var telefone = '';
var cidade = '';
var e_mail = '';
var curso = '';
var nivel_matematica = '';
var nivel_fisica = '';
var nivel_quimica = '';
var nivel_portugues = '';
var nivel_literatura = '';
var nivel_redacao = '';
var nivel_geografia = '';
var nivel_historia = '';
var nivel_ingles = '';
var pesototal = '';
var qtde_segunda = '';
var qtde_terca = '';
var qtde_quarta = '';
var qtde_quinta = '';
var qtde_sexta = '';
var qtde_sabado = '';
var qtde_domingo = '';
var horas_segunda = '';
var horas_terca = '';
var horas_quarta = '';
var horas_quinta = '';
var horas_sexta = '';
var horas_sabado = '';
var horas_domingo = '';
var espacos_semana = '';
var fator_hora_aluno = '';
var tempo_matematica = '';
var tempo_fisica = '';
var tempo_quimica = '';
var tempo_portugues = '';
var tempo_literatura = '';
var tempo_redacao = '';
var tempo_geografia = '';
var tempo_historia = '';
var tempo_ingles = '';

    function buscaDadosParaRelatorio() {
        nome = window.localStorage.getItem('Aluno');
        idade = window.localStorage.getItem('Idade');
        telefone = window.localStorage.getItem('Telefone');
        cidade = window.localStorage.getItem('Cidade');
        e_mail = window.localStorage.getItem('Email');
        curso = window.localStorage.getItem('Curso');
        nivel_matematica = window.localStorage.getItem('PesoMatematica');
        nivel_fisica = window.localStorage.getItem('PesoFisica');
        nivel_quimica = window.localStorage.getItem('PesoQuimica');
        nivel_portugues = window.localStorage.getItem('PesoPortugues');
        nivel_literatura = window.localStorage.getItem('PesoLiteratura');
        nivel_redacao = window.localStorage.getItem('PesoRedacao');
        nivel_geografia = window.localStorage.getItem('PesoGeografia');
        nivel_historia = window.localStorage.getItem('PesoHistoria');
        nivel_ingles = window.localStorage.getItem('PesoIngles');
        pesototal = window.localStorage.getItem('SomatorioPesos');
        qtde_segunda = window.localStorage.getItem('QtdeHorasSegunda');
        qtde_terca = window.localStorage.getItem('QtdeHorasTerca');
        qtde_quarta = window.localStorage.getItem('QtdeHorasQuarta');
        qtde_quinta = window.localStorage.getItem('QtdeHorasQuinta');
        qtde_sexta = window.localStorage.getItem('QtdeHorasSexta');
        qtde_sabado = window.localStorage.getItem('QtdeHorasSabado');
        qtde_domingo = window.localStorage.getItem('QtdeHorasDomingo');
        horas_segunda = window.localStorage.getItem('HorasSegunda');
        horas_terca = window.localStorage.getItem('HorasTerca');
        horas_quarta = window.localStorage.getItem('HorasQuarta');
        horas_quinta = window.localStorage.getItem('HorasQuinta');
        horas_sexta = window.localStorage.getItem('HorasSexta');
        horas_sabado = window.localStorage.getItem('HorasSabado');
        horas_domingo = window.localStorage.getItem('HorasDomingo');
        espacos_semana = window.localStorage.getItem('TotalEspacosSemana');
        fator_hora_aluno = window.localStorage.getItem('FatorHora');
        tempo_matematica = window.localStorage.getItem('TempoMatematica');
        tempo_fisica = window.localStorage.getItem('TempoFisica');
        tempo_quimica = window.localStorage.getItem('TempoQuimica');
        tempo_portugues = window.localStorage.getItem('TempoPortugues');
        tempo_literatura = window.localStorage.getItem('TempoLiteratura');
        tempo_redacao = window.localStorage.getItem('TempoRedacao');
        tempo_geografia = window.localStorage.getItem('TempoGeografia');
        tempo_historia = window.localStorage.getItem('TempoHistoria');
        tempo_ingles = window.localStorage.getItem('TempoIngles');
    }

    function montaRelatorio() {
        document.getElementById("nomeAluno").innerHTML = nome;
        document.getElementById("idadeAluno").innerHTML = idade;
        document.getElementById("telefoneAluno").innerHTML = telefone;
        document.getElementById("cidadeAluno").innerHTML = cidade;
        document.getElementById("emailAluno").innerHTML = e_mail;
        document.getElementById("cursoAluno").innerHTML = curso;
        document.getElementById("nivelMatematica").innerHTML = nivel_matematica;
        document.getElementById("nivelFisica").innerHTML = nivel_fisica;
        document.getElementById("nivelQuimica").innerHTML = nivel_quimica;
        document.getElementById("nivelPortugues").innerHTML = nivel_portugues;
        document.getElementById("nivelLiteratura").innerHTML = nivel_literatura;
        document.getElementById("nivelRedacao").innerHTML = nivel_redacao;
        document.getElementById("nivelGeografia").innerHTML = nivel_geografia;
        document.getElementById("nivelHistoria").innerHTML = nivel_historia;
        document.getElementById("nivelIngles").innerHTML = nivel_ingles;
        document.getElementById("somatorio").innerHTML = pesototal;
        document.getElementById("qtdeHorasSegunda").innerHTML = (qtde_segunda+" espaços ("+horas_segunda+").");
        document.getElementById("qtdeHorasTerca").innerHTML = (qtde_terca+" espaços ("+horas_terca+").");
        document.getElementById("qtdeHorasQuarta").innerHTML = (qtde_quarta+" espaços ("+horas_quarta+").");
        document.getElementById("qtdeHorasQuinta").innerHTML = (qtde_quinta+" espaços ("+horas_quinta+").");
        document.getElementById("qtdeHorasSexta").innerHTML = (qtde_sexta+" espaços ("+horas_sexta+").");
        document.getElementById("qtdeHorasSabado").innerHTML = (qtde_sabado+" espaços ("+horas_sabado+").");
        document.getElementById("qtdeHorasDomingo").innerHTML = (qtde_domingo+" espaços ("+horas_domingo+").");
        document.getElementById('espacosSemana').innerHTML = (espacos_semana+" horários.");
        document.getElementById('fatorHoraAluno').innerHTML = fator_hora_aluno;
        document.getElementById('tempoMatematica').innerHTML = (Math.round(tempo_matematica)+" hora(s).");
        document.getElementById('tempoFisica').innerHTML = (Math.round(tempo_fisica)+" hora(s).");
        document.getElementById('tempoQuimica').innerHTML = (Math.round(tempo_quimica)+" hora(s).");
        document.getElementById('tempoPortugues').innerHTML = (Math.round(tempo_portugues)+" hora(s).");
        document.getElementById('tempoLiteratura').innerHTML = (Math.round(tempo_literatura)+" hora(s).");
        document.getElementById('tempoRedacao').innerHTML = (Math.round(tempo_redacao)+" hora(s).");
        document.getElementById('tempoGeografia').innerHTML = (Math.round(tempo_geografia)+" hora(s).");
        document.getElementById('tempoHistoria').innerHTML = (Math.round(tempo_historia)+" hora(s).");
        document.getElementById('tempoIngles').innerHTML = (Math.round(tempo_ingles)+" hora(s).");
        
    }

    function renomeiaNiveis(a,b) {
        if (a == 1) {
            document.getElementById(b).innerHTML = "Fácil";
        } else if (a == 2) {
            document.getElementById(b).innerHTML = "Médio";
        } else {
            document.getElementById(b).innerHTML = "Difícil";
        }
    }
