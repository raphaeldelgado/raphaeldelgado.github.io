// Vue.component('vue-multiselect', window.VueMultiselect.default)
var app = new Vue({
    el: '#page',
    data: {
        aluno: {
            nome: null,
            telefone: null,
            email: null,
            cursoPretendido: null,
            subjects: [
                {
                    id: "1",
                    value: "Matemática",
                    icon: "icons/matematica.png",
                    selectedDifficult: null,
                    difficulties: [
                        {
                            id: 1,
                            value: "Fácil" 
                        },
                        {
                            id: 2,
                            value: "Médio"
                        },
                        {
                            id: 3,
                            value: "Difícil"
                        }
                    ]
                },
                {
                    id: "2",
                    value: "Física",
                    icon: "icons/fisica.png",
                    selectedDifficult: null,
                    difficulties: [
                        {
                            id: 1,
                            value: "Fácil" 
                        },
                        {
                            id: 2,
                            value: "Médio"
                        },
                        {
                            id: 3,
                            value: "Difícil"
                        }
                    ]
                },
                {
                    id: "3",
                    value: "Química",
                    icon: "icons/quimica.png",
                    selectedDifficult: null,
                    difficulties: [
                        {
                            id: 1,
                            value: "Fácil" 
                        },
                        {
                            id: 2,
                            value: "Médio"
                        },
                        {
                            id: 3,
                            value: "Difícil"
                        }
                    ]
                },
                {
                    id: "4",
                    value: "Português",
                    icon: "icons/portugues.png",
                    selectedDifficult: null,
                    difficulties: [
                        {
                            id: 1,
                            value: "Fácil" 
                        },
                        {
                            id: 2,
                            value: "Médio"
                        },
                        {
                            id: 3,
                            value: "Difícil"
                        }
                    ]
                },
                {
                    id: "5",
                    value: "Literatura",
                    icon: "icons/literatura.png",
                    selectedDifficult: null,
                    difficulties: [
                        {
                            id: 1,
                            value: "Fácil" 
                        },
                        {
                            id: 2,
                            value: "Médio"
                        },
                        {
                            id: 3,
                            value: "Difícil"
                        }
                    ]
                },
                {
                    id: "6",
                    value: "Redação",
                    icon: "icons/redacao.png",
                    selectedDifficult: null,
                    difficulties: [
                        {
                            id: 1,
                            value: "Fácil" 
                        },
                        {
                            id: 2,
                            value: "Médio"
                        },
                        {
                            id: 3,
                            value: "Difícil"
                        }
                    ]
                },
                {
                    id: "7",
                    value: "Geografia",
                    icon: "icons/geografia.png",
                    selectedDifficult: null,
                    difficulties: [
                        {
                            id: 1,
                            value: "Fácil" 
                        },
                        {
                            id: 2,
                            value: "Médio"
                        },
                        {
                            id: 3,
                            value: "Difícil"
                        }
                    ]
                },
                {
                    id: "8",
                    value: "História",
                    icon: "icons/historia.png",
                    selectedDifficult: null,
                    difficulties: [
                        {
                            id: 1,
                            value: "Fácil" 
                        },
                        {
                            id: 2,
                            value: "Médio"
                        },
                        {
                            id: 3,
                            value: "Difícil"
                        }
                    ]
                },
                {
                    id: "9",
                    value: "Inglês",
                    icon: "icons/ingles.png",
                    selectedDifficult: null,
                    difficulties: [
                        {
                            id: 1,
                            value: "Fácil" 
                        },
                        {
                            id: 2,
                            value: "Médio"
                        },
                        {
                            id: 3,
                            value: "Difícil"
                        }
                    ]
                },
            ],
            weekDays: [
                {
                    id: "1",
                    value: "Segunda-feira",
                    selectedHours: [],
                    hours: [
                        {
                            id: "1",
                            value: "00:00" 
                        },
                        {
                            id: "2",
                            value: "01:00" 
                        },
                        {
                            id: "3",
                            value: "02:00" 
                        },
                        {
                            id: "4",
                            value: "03:00" 
                        },
                        {
                            id: "5",
                            value: "04:00" 
                        },
                        {
                            id: "6",
                            value: "05:00" 
                        },
                        {
                            id: "7",
                            value: "06:00" 
                        },
                        {
                            id: "8",
                            value: "07:00" 
                        },
                        {
                            id: "9",
                            value: "08:00" 
                        },
                        {
                            id: "10",
                            value: "09:00" 
                        },
                        {
                            id: "11",
                            value: "10:00" 
                        },
                        {
                            id: "12",
                            value: "11:00" 
                        },
                        {
                            id: "13",
                            value: "12:00" 
                        },
                        {
                            id: "14",
                            value: "13:00" 
                        },
                        {
                            id: "15",
                            value: "14:00" 
                        },
                        {
                            id: "16",
                            value: "15:00" 
                        },
                        {
                            id: "17",
                            value: "16:00" 
                        },
                        {
                            id: "18",
                            value: "17:00" 
                        },
                        {
                            id: "19",
                            value: "18:00" 
                        },
                        {
                            id: "20",
                            value: "19:00" 
                        },
                        {
                            id: "21",
                            value: "20:00" 
                        },
                        {
                            id: "22",
                            value: "21:00" 
                        },
                        {
                            id: "23",
                            value: "22:00" 
                        },
                        {
                            id: "24",
                            value: "23:00" 
                        },
                    ]
                },
                {
                    id: "2",
                    value: "Terca-feira",
                    selectedHours: [],
                    hours: [
                        {
                            id: "1",
                            value: "00:00" 
                        },
                        {
                            id: "2",
                            value: "01:00" 
                        },
                        {
                            id: "3",
                            value: "02:00" 
                        },
                        {
                            id: "4",
                            value: "03:00" 
                        },
                        {
                            id: "5",
                            value: "04:00" 
                        },
                        {
                            id: "6",
                            value: "05:00" 
                        },
                        {
                            id: "7",
                            value: "06:00" 
                        },
                        {
                            id: "8",
                            value: "07:00" 
                        },
                        {
                            id: "9",
                            value: "08:00" 
                        },
                        {
                            id: "10",
                            value: "09:00" 
                        },
                        {
                            id: "11",
                            value: "10:00" 
                        },
                        {
                            id: "12",
                            value: "11:00" 
                        },
                        {
                            id: "13",
                            value: "12:00" 
                        },
                        {
                            id: "14",
                            value: "13:00" 
                        },
                        {
                            id: "15",
                            value: "14:00" 
                        },
                        {
                            id: "16",
                            value: "15:00" 
                        },
                        {
                            id: "17",
                            value: "16:00" 
                        },
                        {
                            id: "18",
                            value: "17:00" 
                        },
                        {
                            id: "19",
                            value: "18:00" 
                        },
                        {
                            id: "20",
                            value: "19:00" 
                        },
                        {
                            id: "21",
                            value: "20:00" 
                        },
                        {
                            id: "22",
                            value: "21:00" 
                        },
                        {
                            id: "23",
                            value: "22:00" 
                        },
                        {
                            id: "24",
                            value: "23:00" 
                        },
                    ]
                },
                {
                    id: "3",
                    value: "Quarta-feira",
                    selectedHours: [],
                    hours: [
                        {
                            id: "1",
                            value: "00:00" 
                        },
                        {
                            id: "2",
                            value: "01:00" 
                        },
                        {
                            id: "3",
                            value: "02:00" 
                        },
                        {
                            id: "4",
                            value: "03:00" 
                        },
                        {
                            id: "5",
                            value: "04:00" 
                        },
                        {
                            id: "6",
                            value: "05:00" 
                        },
                        {
                            id: "7",
                            value: "06:00" 
                        },
                        {
                            id: "8",
                            value: "07:00" 
                        },
                        {
                            id: "9",
                            value: "08:00" 
                        },
                        {
                            id: "10",
                            value: "09:00" 
                        },
                        {
                            id: "11",
                            value: "10:00" 
                        },
                        {
                            id: "12",
                            value: "11:00" 
                        },
                        {
                            id: "13",
                            value: "12:00" 
                        },
                        {
                            id: "14",
                            value: "13:00" 
                        },
                        {
                            id: "15",
                            value: "14:00" 
                        },
                        {
                            id: "16",
                            value: "15:00" 
                        },
                        {
                            id: "17",
                            value: "16:00" 
                        },
                        {
                            id: "18",
                            value: "17:00" 
                        },
                        {
                            id: "19",
                            value: "18:00" 
                        },
                        {
                            id: "20",
                            value: "19:00" 
                        },
                        {
                            id: "21",
                            value: "20:00" 
                        },
                        {
                            id: "22",
                            value: "21:00" 
                        },
                        {
                            id: "23",
                            value: "22:00" 
                        },
                        {
                            id: "24",
                            value: "23:00" 
                        },
                    ]
                },
                {
                    id: "4",
                    value: "Quinta-feira",
                    selectedHours: [],
                    hours: [
                        {
                            id: "1",
                            value: "00:00" 
                        },
                        {
                            id: "2",
                            value: "01:00" 
                        },
                        {
                            id: "3",
                            value: "02:00" 
                        },
                        {
                            id: "4",
                            value: "03:00" 
                        },
                        {
                            id: "5",
                            value: "04:00" 
                        },
                        {
                            id: "6",
                            value: "05:00" 
                        },
                        {
                            id: "7",
                            value: "06:00" 
                        },
                        {
                            id: "8",
                            value: "07:00" 
                        },
                        {
                            id: "9",
                            value: "08:00" 
                        },
                        {
                            id: "10",
                            value: "09:00" 
                        },
                        {
                            id: "11",
                            value: "10:00" 
                        },
                        {
                            id: "12",
                            value: "11:00" 
                        },
                        {
                            id: "13",
                            value: "12:00" 
                        },
                        {
                            id: "14",
                            value: "13:00" 
                        },
                        {
                            id: "15",
                            value: "14:00" 
                        },
                        {
                            id: "16",
                            value: "15:00" 
                        },
                        {
                            id: "17",
                            value: "16:00" 
                        },
                        {
                            id: "18",
                            value: "17:00" 
                        },
                        {
                            id: "19",
                            value: "18:00" 
                        },
                        {
                            id: "20",
                            value: "19:00" 
                        },
                        {
                            id: "21",
                            value: "20:00" 
                        },
                        {
                            id: "22",
                            value: "21:00" 
                        },
                        {
                            id: "23",
                            value: "22:00" 
                        },
                        {
                            id: "24",
                            value: "23:00" 
                        },
                    ]
                },
                {
                    id: "5",
                    value: "Sexta-feira",
                    selectedHours: [],
                    hours: [
                        {
                            id: "1",
                            value: "00:00" 
                        },
                        {
                            id: "2",
                            value: "01:00" 
                        },
                        {
                            id: "3",
                            value: "02:00" 
                        },
                        {
                            id: "4",
                            value: "03:00" 
                        },
                        {
                            id: "5",
                            value: "04:00" 
                        },
                        {
                            id: "6",
                            value: "05:00" 
                        },
                        {
                            id: "7",
                            value: "06:00" 
                        },
                        {
                            id: "8",
                            value: "07:00" 
                        },
                        {
                            id: "9",
                            value: "08:00" 
                        },
                        {
                            id: "10",
                            value: "09:00" 
                        },
                        {
                            id: "11",
                            value: "10:00" 
                        },
                        {
                            id: "12",
                            value: "11:00" 
                        },
                        {
                            id: "13",
                            value: "12:00" 
                        },
                        {
                            id: "14",
                            value: "13:00" 
                        },
                        {
                            id: "15",
                            value: "14:00" 
                        },
                        {
                            id: "16",
                            value: "15:00" 
                        },
                        {
                            id: "17",
                            value: "16:00" 
                        },
                        {
                            id: "18",
                            value: "17:00" 
                        },
                        {
                            id: "19",
                            value: "18:00" 
                        },
                        {
                            id: "20",
                            value: "19:00" 
                        },
                        {
                            id: "21",
                            value: "20:00" 
                        },
                        {
                            id: "22",
                            value: "21:00" 
                        },
                        {
                            id: "23",
                            value: "22:00" 
                        },
                        {
                            id: "24",
                            value: "23:00" 
                        },
                    ]
                },
                {
                    id: "6",
                    value: "Sabado",
                    selectedHours: [],
                    hours: [
                        {
                            id: "1",
                            value: "00:00" 
                        },
                        {
                            id: "2",
                            value: "01:00" 
                        },
                        {
                            id: "3",
                            value: "02:00" 
                        },
                        {
                            id: "4",
                            value: "03:00" 
                        },
                        {
                            id: "5",
                            value: "04:00" 
                        },
                        {
                            id: "6",
                            value: "05:00" 
                        },
                        {
                            id: "7",
                            value: "06:00" 
                        },
                        {
                            id: "8",
                            value: "07:00" 
                        },
                        {
                            id: "9",
                            value: "08:00" 
                        },
                        {
                            id: "10",
                            value: "09:00" 
                        },
                        {
                            id: "11",
                            value: "10:00" 
                        },
                        {
                            id: "12",
                            value: "11:00" 
                        },
                        {
                            id: "13",
                            value: "12:00" 
                        },
                        {
                            id: "14",
                            value: "13:00" 
                        },
                        {
                            id: "15",
                            value: "14:00" 
                        },
                        {
                            id: "16",
                            value: "15:00" 
                        },
                        {
                            id: "17",
                            value: "16:00" 
                        },
                        {
                            id: "18",
                            value: "17:00" 
                        },
                        {
                            id: "19",
                            value: "18:00" 
                        },
                        {
                            id: "20",
                            value: "19:00" 
                        },
                        {
                            id: "21",
                            value: "20:00" 
                        },
                        {
                            id: "22",
                            value: "21:00" 
                        },
                        {
                            id: "23",
                            value: "22:00" 
                        },
                        {
                            id: "24",
                            value: "23:00" 
                        },
                    ]
                },
                {
                    id: "7",
                    value: "Domingo",
                    selectedHours: [],
                    hours: [
                        {
                            id: "1",
                            value: "00:00" 
                        },
                        {
                            id: "2",
                            value: "01:00" 
                        },
                        {
                            id: "3",
                            value: "02:00" 
                        },
                        {
                            id: "4",
                            value: "03:00" 
                        },
                        {
                            id: "5",
                            value: "04:00" 
                        },
                        {
                            id: "6",
                            value: "05:00" 
                        },
                        {
                            id: "7",
                            value: "06:00" 
                        },
                        {
                            id: "8",
                            value: "07:00" 
                        },
                        {
                            id: "9",
                            value: "08:00" 
                        },
                        {
                            id: "10",
                            value: "09:00" 
                        },
                        {
                            id: "11",
                            value: "10:00" 
                        },
                        {
                            id: "12",
                            value: "11:00" 
                        },
                        {
                            id: "13",
                            value: "12:00" 
                        },
                        {
                            id: "14",
                            value: "13:00" 
                        },
                        {
                            id: "15",
                            value: "14:00" 
                        },
                        {
                            id: "16",
                            value: "15:00" 
                        },
                        {
                            id: "17",
                            value: "16:00" 
                        },
                        {
                            id: "18",
                            value: "17:00" 
                        },
                        {
                            id: "19",
                            value: "18:00" 
                        },
                        {
                            id: "20",
                            value: "19:00" 
                        },
                        {
                            id: "21",
                            value: "20:00" 
                        },
                        {
                            id: "22",
                            value: "21:00" 
                        },
                        {
                            id: "23",
                            value: "22:00" 
                        },
                        {
                            id: "24",
                            value: "23:00" 
                        },
                    ]
                },
            ]
        },
        
        courseOptions: [
            {
                id: "1",
                value: "EsPCEx"
            },
            {
                id: "2",
                value: "EsSA"
            },
            {
                id: "3",
                value: "AFA"
            },
            {
                id: "4",
                value: "EFOMM"
            },
        ],

    },
    // methods: {
    //     toggleSelectedHours(hour, position) {
    //         const index = this.aluno.weekDays[position].selectedHours.findIndex((listHour) => listHour.id === hour.id);
    //         if (index !== -1) {
    //             this.aluno.weekDays[position].selectedHours.splice(index,1)
    //         } else {
    //             this.aluno.weekDays[position].selectedHours.push(hour)
    //         }
    //     }
    // }
})
