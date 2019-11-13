            document.getElementById("btn-enviar").onclick = function() {

            var NomeAluno = document.getElementById("inputNome").value;
            var idadeAluno = document.getElementById("inputAge").value;
            var TelefoneAluno = document.getElementById("inputTelefone").value;
            var cidadeAluno = document.getElementById("inputCity").value;
            var EmailAluno = document.getElementById("inputEmail").value;
            var CursoEscolhido = document.getElementById("inputCurso");
            var nomeCursoEscolhido = CursoEscolhido.options[CursoEscolhido.selectedIndex].text;

            if (NomeAluno == '') {
                alert("Preencha o campo NOME");
            } else if (idadeAluno == '') {
                alert("Preencha o campo IDADE");
            } else if (TelefoneAluno == '') {
                alert("Preencha o campo TELEFONE");
            } else if (cidadeAluno =='') {
                alert("Preencha o campo CIDADE");
            } else if (EmailAluno == '') {
                alert("Preencha o campo E-MAIL");
            } else if (nomeCursoEscolhido == "Escolher curso...") {
                alert("Escolha o CURSO PRETENDIDO");
            } else {

            window.localStorage.setItem('Aluno', NomeAluno);
            window.localStorage.setItem('Idade', idadeAluno);
            window.localStorage.setItem('Telefone', TelefoneAluno);
            window.localStorage.setItem('Cidade', cidadeAluno);
            window.localStorage.setItem('Email', EmailAluno);
            window.localStorage.setItem('Curso', nomeCursoEscolhido);

            var btns_matematica = document.getElementsByName("matematica");
            var btns_fisica = document.getElementsByName("fisica");
            var btns_quimica = document.getElementsByName("quimica");
            var btns_portugues = document.getElementsByName("portugues");
            var btns_literatura = document.getElementsByName("literatura");
            var btns_redacao = document.getElementsByName("redacao");
            var btns_geografia = document.getElementsByName("geografia");
            var btns_historia = document.getElementsByName("historia");
            var btns_ingles = document.getElementsByName("ingles");

            var peso_matematica, peso_fisica, peso_quimica, peso_portugues, peso_literatura, peso_redacao, peso_geografia, peso_historia, peso_ingles = null;
            checkRadioButtons(btns_matematica,1);
            checkRadioButtons(btns_fisica,2);
            checkRadioButtons(btns_quimica,3);
            checkRadioButtons(btns_portugues,4);
            checkRadioButtons(btns_literatura,5);
            checkRadioButtons(btns_redacao,6);
            checkRadioButtons(btns_geografia,7);
            checkRadioButtons(btns_historia,8);
            checkRadioButtons(btns_ingles,9);

            function checkRadioButtons(x,y) {
            for (var i = 0; i < x.length; i++) {
                if (x[i].checked) {
                    if (y == 1) {
                        peso_matematica = x[i].value;
                    } else if (y == 2) {
                        peso_fisica = x[i].value;
                    } else if (y == 3) {
                        peso_quimica = x[i].value;
                    } else if (y == 4) {
                        peso_portugues = x[i].value;
                    } else if (y == 5) {
                        peso_literatura = x[i].value;
                    } else if (y == 6) {
                        peso_redacao = x[i].value;
                    } else if (y == 7) {
                        peso_geografia = x[i].value;
                    } else if (y == 8) {
                        peso_historia = x[i].value;
                    } else if (y == 9) {
                        peso_ingles = x[i].value;
                    }
                    }
                }
            }
            window.localStorage.setItem('PesoMatematica', peso_matematica);
            window.localStorage.setItem('PesoFisica', peso_fisica);
            window.localStorage.setItem('PesoQuimica', peso_quimica);
            window.localStorage.setItem('PesoPortugues', peso_portugues);
            window.localStorage.setItem('PesoLiteratura', peso_literatura);
            window.localStorage.setItem('PesoRedacao', peso_redacao);
            window.localStorage.setItem('PesoGeografia', peso_geografia);
            window.localStorage.setItem('PesoHistoria', peso_historia);
            window.localStorage.setItem('PesoIngles', peso_ingles);

            var peso_final = parseFloat(peso_ingles)+parseFloat(peso_literatura)+parseFloat(peso_matematica)+parseFloat(peso_portugues)+parseFloat(peso_quimica)+parseFloat(peso_redacao)+parseFloat(peso_historia)+parseFloat(peso_geografia)+parseFloat(peso_fisica);
            window.localStorage.setItem('SomatorioPesos', peso_final);

            var horarios_segunda = $('#hoursMonday').val();
            window.localStorage.setItem('QtdeHorasSegunda', horarios_segunda.length);
            window.localStorage.setItem('HorasSegunda', horarios_segunda);

            var horarios_terca = $('#hoursTuesday').val();
            window.localStorage.setItem('QtdeHorasTerca', horarios_terca.length);
            window.localStorage.setItem('HorasTerca', horarios_terca);

            var horarios_quarta = $('#hoursWednesday').val();
            window.localStorage.setItem('QtdeHorasQuarta', horarios_quarta.length);
            window.localStorage.setItem('HorasQuarta', horarios_quarta);

            var horarios_quinta = $('#hoursThursday').val();
            window.localStorage.setItem('QtdeHorasQuinta', horarios_quinta.length);
            window.localStorage.setItem('HorasQuinta', horarios_quinta);

            var horarios_sexta = $('#hoursFriday').val();
            window.localStorage.setItem('QtdeHorasSexta', horarios_sexta.length);
            window.localStorage.setItem('HorasSexta', horarios_sexta);

            var horarios_sabado = $('#hoursSaturday').val();
            window.localStorage.setItem('QtdeHorasSabado', horarios_sabado.length);
            window.localStorage.setItem('HorasSabado', horarios_sabado);

            var horarios_domingo = $('#hoursSunday').val();
            window.localStorage.setItem('QtdeHorasDomingo', horarios_domingo.length);
            window.localStorage.setItem('HorasDomingo', horarios_domingo);

            var disponibilidade_total_semana = parseFloat(horarios_segunda.length)+parseFloat(horarios_terca.length)+parseFloat(horarios_quarta.length)+parseFloat(horarios_quinta.length)+parseFloat(horarios_sexta.length)+parseFloat(horarios_sabado.length)+parseFloat(horarios_domingo.length);
            window.localStorage.setItem('TotalEspacosSemana', disponibilidade_total_semana);

            var fator_hora = peso_final / disponibilidade_total_semana;
            window.localStorage.setItem('FatorHora', fator_hora);

            var tempo_matematica, tempo_fisica, tempo_quimica, tempo_portugues, tempo_literatura, tempo_redacao, tempo_geografia, tempo_historia, tempo_ingles = null;
            calcTempos(peso_matematica,fator_hora,1,"MATEMÁTICA");
            calcTempos(peso_fisica,fator_hora,2,"FÍSICA");
            calcTempos(peso_quimica,fator_hora,3,"QUÍMICA");
            calcTempos(peso_portugues,fator_hora,4,"PORTUGUÊS");
            calcTempos(peso_literatura,fator_hora,5,"LITERATURA");
            calcTempos(peso_redacao,fator_hora,6,"REDAÇÃO");
            calcTempos(peso_geografia,fator_hora,7,"GEOGRAFIA");
            calcTempos(peso_historia,fator_hora,8,"HISTÓRIA");
            calcTempos(peso_ingles,fator_hora,9,"INGLÊS");

            function calcTempos(a,b,c,d) {
                tempo_disciplina = a*b;
                if (tempo_disciplina <= 2) {
                    if (c == 1) {
                        window.localStorage.setItem('TempoMatematica', tempo_disciplina);
                    } else if (c == 2) {
                        window.localStorage.setItem('TempoFisica', tempo_disciplina);
                    } else if (c == 3) {
                        window.localStorage.setItem('TempoQuimica', tempo_disciplina);
                    } else if (c == 4) {
                        window.localStorage.setItem('TempoPortugues', tempo_disciplina);
                    } else if (c == 5) {
                        window.localStorage.setItem('TempoLiteratura', tempo_disciplina);
                    } else if (c == 6) {
                        window.localStorage.setItem('TempoRedacao', tempo_disciplina);
                    } else if (c == 7) {
                        window.localStorage.setItem('TempoGeografia', tempo_disciplina);
                    } else if (c == 8) {
                        window.localStorage.setItem('TempoHistoria', tempo_disciplina);
                    } else if (c == 9) {
                        window.localStorage.setItem('TempoIngles', tempo_disciplina);
                    }
                } else {
                    alert("O tempo máximo de estudo disponível por disciplina é de 2 (duas) horas. De acordo com sua disponibilidade, o tempo de estudo necessário para "+d+" é de "+tempo_disciplina+" horas.");
                    return;
                }
            }
            }
            window.location.href = "imprimeDisponibilidade.php";
        };