const questionsData = [
    {
        index: 1,
        question: "Aşağıdaki seçeneklerden hangisi bir yazılım dilidir?",
        options: [
            { text: "Bird", isCorrect: false },
            { text: "iOS", isCorrect: false },
            { text: "Python", isCorrect: true },
            { text: "OS", isCorrect: false }
        ],
        isShown: false
    },
    {
        index: 2,
        question: "Bir mağazanın vitrinindeki 'Patron Çıldırdı!' ifadesi muhtemelen hangisini anlatmak istiyordur?",
        options: [
            { text: "İndirim olduğunu", isCorrect: true },
            { text: "İşyerine nazar değdini", isCorrect: false },
            { text: "Faturaların yüksek geldiğini", isCorrect: false },
            { text: "Patronun tatile çıktığını", isCorrect: false }
        ],
        isShown: false
    },
];

export default questionsData;