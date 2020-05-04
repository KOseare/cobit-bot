module.exports = {
    index: 0,
    symptoms: [{
        name: "Temperatura alta",
        question: "¿Su temperatura corporal es mayor o igual 37,5°C?",
        options: [{
            description: "Si",
            value: 1
        }, {
            description: "No",
            value: 0
        }],
        finalAnswer: null
    }, {
        name: "Tos o dolor de garganta",
        question: "¿Tenés tos o dolor de garganta?",
        options: [{
            description: "Si",
            value: 1
        }, {
            description: "No",
            value: 0
        }],
        finalAnswer: null
    }, {
        name: "Cansancio o dolores",
        question: "¿Sentís mucho cansancio o dolores corporales?",
        options: [{
            description: "Si",
            value: 1
        }, {
            description: "No",
            value: 0
        }],
        finalAnswer: null
    }, {
        name: "Dificultad para respirar",
        question: "¿Te cuesta respirar o sentís que te falta el aire?",
        options: [{
            description: "Si",
            value: 1
        }, {
            description: "No",
            value: 0
        }],
        finalAnswer: null
    }, {
        name: "Falta de gusto o olfato",
        question: "¿Comenzaste a sentir una pérdida del gusto o el olfato?",
        options: [{
            description: "Si",
            value: 1
        }, {
            description: "No",
            value: 0
        }],
        finalAnswer: null
    }]
}