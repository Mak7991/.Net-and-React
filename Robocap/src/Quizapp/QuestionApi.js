const qBank = [ 
    { 
        question: 
        "Who build the app ?", 
        answers: ["vinayak", "sarthak", "somil", "devesh"], 
        correct: "vinayak", 
        questionId: "099099"
    }, 
    { 
        question: 
        "Who build the app ?", 
        answers: ["vinayak", "sarthak", "somil", "devesh"], 
        correct: "vinayak", 
        questionId: "093909"
    }, 
    { 
        question: 
        "Who build the app ?", 
        answers: ["vinayak", "sarthak", "somil", "devesh"], 
        correct: "vinayak", 
        questionId: "009039"
    }, 
    { 
        question: 
        "Who build the app ?", 
        answers: ["vinayak", "sarthak", "somil", "devesh"], 
        correct: "vinayak", 
        questionId: "090089"
    }, 
    { 
        question: 
        "Who build the app ?", 
        answers: ["vinayak", "sarthak", "somil", "devesh"], 
        correct: "vinayak", 
        questionId: "01010101"
    }, 
    { 
        question: 
        "Who build the app ?", 
        answers: ["vinayak", "sarthak", "somil", "devesh"], 
        correct: "vinayak", 
        questionId: "092299"
    }, 
    { 
        question: 
        "Who build the app ?", 
        answers: ["vinayak", "sarthak", "somil", "devesh"], 
        correct: "vinayak", 
        questionId: "099012"
    }, 
    { 
        question: 
        "Who build the app ?", 
        answers: ["vinayak", "sarthak", "somil", "devesh"], 
        correct: "vinayak", 
        questionId: "222099"
    }, 
    { 
        question: 
        "Who build the app ?", 
        answers: ["vinayak", "sarthak", "somil", "devesh"], 
        correct: "vinayak", 
        questionId: "2222099"
    }, 
    { 
        question: 
        "Who build the app ?", 
        answers: ["vinayak", "sarthak", "somil", "devesh"], 
        correct: "vinayak", 
        questionId: "09922099"
    }, 
    { 
        question: 
        "Who build the app ?", 
        answers: ["vinayak", "sarthak", "somil", "devesh"], 
        correct: "vinayak", 
        questionId: "222292099"
    }, 
    { 
        question: 
        "Who build the app ?", 
        answers: ["vinayak", "sarthak", "somil", "devesh"], 
        correct: "vinayak", 
        questionId: "0998999099"
    }, 
    { 
        question: 
        "Who build the app ?", 
        answers: ["vinayak", "sarthak", "somil", "devesh"], 
        correct: "vinayak", 
        questionId: "099018"
    }, 
    { 
        question: 
        "Who build the app ?", 
        answers: ["vinayak", "sarthak", "somil", "devesh"], 
        correct: "vinayak", 
        questionId: "099017"
    }, 
    { 
        question: 
        "Who build the app ?", 
        answers: ["vinayak", "sarthak", "somil", "devesh"], 
        correct: "vinayak", 
        questionId: "099019"
    }, 
    { 
        question: 
        "Who build the app ?", 
        answers: ["vinayak", "sarthak", "somil", "devesh"], 
        correct: "vinayak", 
        questionId: "09459099"
    }, 
    { 
        question: 
        "Who build the app ?", 
        answers: ["vinayak", "sarthak", "somil", "devesh"], 
        correct: "vinayak", 
        questionId: "0912219099"
    }, 
    
    ]; 
    
    // n = 5 to export 5 question 
    export default (n = 5) => 
    Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n)); 
    