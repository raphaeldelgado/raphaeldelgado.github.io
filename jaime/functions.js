            document.getElementById("btn-enviar").onclick = function() {

            var NomeAluno = document.getElementById("inputNome").value;
            console.log("Nome do aluno: "+NomeAluno);
            window.localStorage.setItem('Aluno', NomeAluno);

            var TelefoneAluno = document.getElementById("inputTelefone").value;
            console.log("Telefone: "+TelefoneAluno);
            window.localStorage.setItem('Telefone', TelefoneAluno);

            var EmailAluno = document.getElementById("inputEmail").value;
            console.log("E-mail: "+EmailAluno);
            window.localStorage.setItem('Email', EmailAluno);

            var CursoEscolhido = document.getElementById("inputCurso").value;
            console.log("Curso escolhido: "+CursoEscolhido);
            window.localStorage.setItem('Curso', CursoEscolhido);

            var btns_matematica = document.getElementsByName("matematica");
            for (var i = 0; i < btns_matematica.length; i++) {
                if (btns_matematica[i].checked) {
                    console.log("Matemática tem peso: " + btns_matematica[i].value);
                    var peso_matematica = btns_matematica[i].value;
                    }
                }
            window.localStorage.setItem('PesoMatematica', peso_matematica);

            var btns_fisica = document.getElementsByName("fisica");
            for (var i = 0; i < btns_fisica.length; i++) {
                if (btns_fisica[i].checked) {
                    console.log("Física tem peso: " + btns_fisica[i].value);
                    var peso_fisica = btns_fisica[i].value;
                    }
                }
            window.localStorage.setItem('PesoFisica', peso_fisica);

            var btns_quimica = document.getElementsByName("quimica");
            for (var i = 0; i < btns_quimica.length; i++) {
                if (btns_quimica[i].checked) {
                    console.log("Química tem peso: " + btns_quimica[i].value);
                    peso_quimica = btns_quimica[i].value;
                    }
                }
            window.localStorage.setItem('PesoQuimica', peso_quimica);

            var btns_portugues = document.getElementsByName("portugues");
            for (var i = 0; i < btns_fisica.length; i++) {
                if (btns_portugues[i].checked) {
                    console.log("Português tem peso: " + btns_portugues[i].value);
                    peso_portugues = btns_portugues[i].value;
                    }
                }
            window.localStorage.setItem('PesoPortugues', peso_portugues);

            var btns_literatura = document.getElementsByName("literatura");
            for (var i = 0; i < btns_literatura.length; i++) {
                if (btns_literatura[i].checked) {
                    console.log("Literatura tem peso: " + btns_literatura[i].value);
                    peso_literatura = btns_literatura[i].value;
                    }
                }
            window.localStorage.setItem('PesoLiteratura', peso_literatura);

            var btns_redacao = document.getElementsByName("redacao");
            for (var i = 0; i < btns_redacao.length; i++) {
                if (btns_redacao[i].checked) {
                    console.log("Redação tem peso: " + btns_redacao[i].value);
                    peso_redacao = btns_redacao[i].value;
                    }
                }
            window.localStorage.setItem('PesoRedacao', peso_redacao);

            var btns_geografia = document.getElementsByName("geografia");
            for (var i = 0; i < btns_geografia.length; i++) {
                if (btns_geografia[i].checked) {
                    console.log("Geografia tem peso: " + btns_geografia[i].value);
                    peso_geografia = btns_geografia[i].value;
                    }
                }
            window.localStorage.setItem('PesoGeografia', peso_geografia);

            var btns_historia = document.getElementsByName("historia");
            for (var i = 0; i < btns_historia.length; i++) {
                if (btns_historia[i].checked) {
                    console.log("História tem peso: " + btns_historia[i].value);
                    peso_historia = btns_historia[i].value;
                    }
                }
            window.localStorage.setItem('PesoHistoria', peso_historia);

            var btns_ingles = document.getElementsByName("ingles");
            for (var i = 0; i < btns_ingles.length; i++) {
                if (btns_ingles[i].checked) {
                    console.log("Inglês tem peso: " + btns_ingles[i].value);
                    peso_ingles = btns_ingles[i].value;
                    }
                }
            window.localStorage.setItem('PesoIngles', peso_ingles);
            
            var peso_final = 0;
            peso_final = parseFloat(peso_ingles)+parseFloat(peso_literatura)+parseFloat(peso_matematica)+parseFloat(peso_portugues)+parseFloat(peso_quimica)+parseFloat(peso_redacao)+parseFloat(peso_historia)+parseFloat(peso_geografia)+parseFloat(peso_fisica);
            console.log("Somatório de pesos: "+peso_final+" horas.");
            window.localStorage.setItem('SomatorioPesos', peso_final);
            
            var horarios_segunda = $('#frameworkSegunda').val(); 
            console.log("Quantidade de horários disponíveis na SEGUNDA-FEIRA: "+(horarios_segunda.length)+" horários. ("+(horarios_segunda)+")."); 
            window.localStorage.setItem('QtdeHorasSegunda', horarios_segunda.length);
            window.localStorage.setItem('HorasSegunda', horarios_segunda);

            var horarios_terca = $('#frameworkTerca').val(); 
            console.log("Quantidade de horários disponíveis na TERÇA-FEIRA: "+(horarios_terca.length)+" horários. ("+(horarios_terca)+")."); 
            window.localStorage.setItem('QtdeHorasTerca', horarios_terca.length);
            window.localStorage.setItem('HorasTerca', horarios_terca);

            var horarios_quarta = $('#frameworkQuarta').val(); 
            console.log("Quantidade de horários disponíveis na QUARTA-FEIRA: "+(horarios_quarta.length)+" horários. ("+(horarios_quarta)+").");
            window.localStorage.setItem('QtdeHorasQuarta', horarios_quarta.length);
            window.localStorage.setItem('HorasQuarta', horarios_quarta);

            var horarios_quinta = $('#frameworkQuinta').val(); 
            console.log("Quantidade de horários disponíveis na QUINTA-FEIRA: "+(horarios_quinta.length)+" horários. ("+(horarios_quinta)+").");
            window.localStorage.setItem('QtdeHorasQuinta', horarios_quinta.length);
            window.localStorage.setItem('HorasQuinta', horarios_quinta);

            var horarios_sexta = $('#frameworkSexta').val(); 
            console.log("Quantidade de horários disponíveis na SEXTA-FEIRA: "+(horarios_sexta.length)+" horários. ("+(horarios_sexta)+").");
            window.localStorage.setItem('QtdeHorasSexta', horarios_sexta.length);
            window.localStorage.setItem('HorasSexta', horarios_sexta);

            var horarios_sabado = $('#frameworkSabado').val(); 
            console.log("Quantidade de horários disponíveis no SÁBADO: "+(horarios_sabado.length)+" horários. ("+(horarios_sabado)+").");
            window.localStorage.setItem('QtdeHorasSabado', horarios_sabado.length);
            window.localStorage.setItem('HorasSabado', horarios_sabado);

            var horarios_domingo = $('#frameworkDomingo').val(); 
            console.log("Quantidade de horários disponíveis no DOMINGO: "+(horarios_domingo.length)+" horários. ("+(horarios_domingo)+").");
            window.localStorage.setItem('QtdeHorasDomingo', horarios_domingo.length);
            window.localStorage.setItem('HorasDomingo', horarios_domingo);

            var disponibilidade_total_semana = parseFloat(horarios_segunda.length)+parseFloat(horarios_terca.length)+parseFloat(horarios_quarta.length)+parseFloat(horarios_quinta.length)+parseFloat(horarios_sexta.length)+parseFloat(horarios_sabado.length)+parseFloat(horarios_domingo.length);
            console.log("Total de espaços na semana: "+disponibilidade_total_semana);
            window.localStorage.setItem('TotalEspacosSemana', disponibilidade_total_semana);
            
            var fator_hora = peso_final / disponibilidade_total_semana;
            console.log("Fator-hora do aluno: "+fator_hora);
            window.localStorage.setItem('FatorHora', fator_hora);

            var tempo_matematica = peso_matematica * fator_hora;
            if (tempo_matematica <= 2){
                console.log("Tempo de estudo necessário para MATEMÁTICA: "+tempo_matematica+" horas.");
                window.localStorage.setItem('TempoMatematica', tempo_matematica);
            }
            else {
                alert("O tempo máximo de estudo disponível por disciplina é de 2 (duas) horas. De acordo com sua disponibilidade, o tempo de estudo necessário para MATEMÁTICA é de "+tempo_matematica+" horas.");
            }

            var tempo_fisica = peso_fisica * fator_hora;
            if (tempo_fisica <= 2){
                console.log("Tempo de estudo necessário para FÍSICA: "+tempo_fisica+" horas.");
                window.localStorage.setItem('TempoFisica', tempo_fisica); 
            }
            else {
                alert("O tempo máximo de estudo disponível por disciplina é de 2 (duas) horas. De acordo com sua disponibilidade, o tempo de estudo necessário para FÍSICA é de "+tempo_fisica+" horas.");
            }

            var tempo_quimica = peso_quimica * fator_hora;
            if (tempo_quimica <= 2){
                console.log("Tempo de estudo necessário para QUÍMICA: "+tempo_quimica+" horas.");
                window.localStorage.setItem('TempoQuimica', tempo_quimica);
            }
            else {
                alert("O tempo máximo de estudo disponível por disciplina é de 2 (duas) horas. De acordo com sua disponibilidade, o tempo de estudo necessário para QUÍMICA é de "+tempo_quimica+" horas.");
            }

            var tempo_portugues = peso_portugues * fator_hora;
            if (tempo_portugues <= 2){
                console.log("Tempo de estudo necessário para PORTUGUÊS: "+tempo_portugues+" horas.");
                window.localStorage.setItem('TempoPortugues', tempo_portugues);
            }
            else {
                alert("O tempo máximo de estudo disponível por disciplina é de 2 (duas) horas. De acordo com sua disponibilidade, o tempo de estudo necessário para PORTUGUÊS é de "+tempo_portugues+" horas.");
            }

            var tempo_literatura = peso_literatura * fator_hora;
            if (tempo_literatura <= 2){
                console.log("Tempo de estudo necessário para LITERATURA: "+tempo_literatura+" horas.");
                window.localStorage.setItem('TempoLiteratura', tempo_literatura);
            }
            else {
                alert("O tempo máximo de estudo disponível por disciplina é de 2 (duas) horas. De acordo com sua disponibilidade, o tempo de estudo necessário para LITERATURA é de "+tempo_literatura+" horas.");
            }

            var tempo_redacao = peso_redacao * fator_hora;
            if (tempo_redacao <= 2){
                console.log("Tempo de estudo necessário para REDAÇÃO: "+tempo_redacao+" horas.");
                window.localStorage.setItem('TempoRedacao', tempo_redacao);
            }
            else {
                alert("O tempo máximo de estudo disponível por disciplina é de 2 (duas) horas. De acordo com sua disponibilidade, o tempo de estudo necessário para REDAÇÃO é de "+tempo_redacao+" horas.");
            }

            var tempo_geografia = peso_geografia * fator_hora;
            if (tempo_geografia <= 2){
                console.log("Tempo de estudo necessário para GEOGRAFIA: "+tempo_geografia+" horas.");
                window.localStorage.setItem('TempoGeografia', tempo_geografia);
            }
            else {
                alert("O tempo máximo de estudo disponível por disciplina é de 2 (duas) horas. De acordo com sua disponibilidade, o tempo de estudo necessário para GEOGRAFIA é de "+tempo_geografia+" horas.");
            }

            var tempo_historia = peso_historia * fator_hora;
            if (tempo_historia <= 2){
                console.log("Tempo de estudo necessário para HISTÓRIA: "+tempo_historia+" horas.");
                window.localStorage.setItem('TempoHistoria', tempo_historia);
            }
            else {
                alert("O tempo máximo de estudo disponível por disciplina é de 2 (duas) horas. De acordo com sua disponibilidade, o tempo de estudo necessário para HISTÓRIA é de "+tempo_historia+" horas.");
            }

            var tempo_ingles = peso_ingles * fator_hora;
            if (tempo_ingles <= 2){
                console.log("Tempo de estudo necessário para INGLÊS: "+tempo_ingles+" horas.");
                window.localStorage.setItem('TempoIngles', tempo_ingles);
            }
            else {
                alert("O tempo máximo de estudo disponível por disciplina é de 2 (duas) horas. De acordo com sua disponibilidade, o tempo de estudo necessário para INGLÊS é de "+tempo_ingles+" horas.");
            }

            window.location.href = "imprimeDisponibilidade.html";
            // $("#btn-enviar").prop('disabled', true);
            };