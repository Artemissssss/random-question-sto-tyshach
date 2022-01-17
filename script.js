const quest = ["Чи був цей герой працьовитим, чому ви так вважаєте?",
    "Яка на вашу думку, гірша риса характеру цього героя?",
    "Цей персонаж більш позитивний чи негативний?",
    "У яких відносинах був цей персонаж з головним героєм?",
    "Чи мав цей персонаж любовні відносини з кимось?",
    "Чи мав цей персонаж в діалогах акцент або русизми?",
    "Які цілі були у цього персонажа?",
    "Як ви вважаєте, чи мав цей персонаж проблему з заздрістю до інших?",
    "Чим займався цей персонаж у плані роботи?",
    "Як ви ставитеся до цього героя?"
]
const answ = ["Ваша думка",
    "Ваша думка",
    "Ваша думка",
    "Роман у гарних " + "<br>" + " Параска у гарних " + "<br>" + " Мотря у гарних " + "<br>" + " Савка у гарних " + "<br>" + " Невідомий у поганих " + "<br>" + " Бонавентура у нормальних",
    "Герасим та Параска, Роман та Мотря",
    "Бонавентура і Невідомий",
    "Герасим мати багато землі " + "<br>" + " Роман одружитися з Мотрею(Мотроя з Романом) " + "<br>" + " Савка заробити легкі гроші " + "<br>" + " Невідоми заробити грошей " + "<br>" + " Бонавентура знайти скарб",
    "Герасим до Жолудя",
    "Герасим господар " + "<br>" + " Параска домогосподарка " + "<br>" + " Мотря прислуга " + "<br>" + " Невідомий продаж " + "<br>" + " Бонавентура копав",
    "Ваша думка"
]
document.getElementById("makeQ").addEventListener("click", o)
document.getElementById("sub").addEventListener("click", o)
let act = 0;
let r = 0;

function o() {
    document.getElementById("sub").style.display = "none"
    setTimeout(() => {
        document.getElementById("sub").style.display = "block"
    }, 1000 * 30)
    document.getElementById("makeQ").classList.toggle("dis");
    for (let i = 0; i < 3; i++) {
        let y = quest[Math.floor(quest.length * Math.random())];
        document.getElementsByClassName("questions")[i].textContent = (i + 1) + ". " + y;
        document.getElementsByClassName("questions")[i].id = quest.indexOf(y)
    }
    document.getElementById("question").classList.toggle("ap");
    if (r == 0) {
        r++;
    } else {
        r--;
        act--;
    }
    setTimeout(() => {
        act++;
    }, 30 * 1000)
    let l = 1;
    for (let g = 120; g >= 0; g -= 1) {
        setTimeout(() => {
            if (g <= 20) {
                document.getElementById("time").style.color = "red"
            }else if(g == 0){
                document.getElementById("time").textContent = "Кінець!"
            } else{
                document.getElementById("time").style.color = "black"
            }
            document.getElementById("time").textContent = `${Math.floor(g/60)}:${Math.round((g/60-Math.floor(g/60))*60)}`
        }, l * 1000)
        l += 1;
    }
}
document.getElementById("cross").addEventListener("click", () => {
    document.getElementById("ans").style.display = "none"
    document.getElementById("cross").style.display = "none"
})
document.getElementById("question-list").addEventListener("click", (e) => {
    if (act == 1) {
        document.getElementById("ans").innerHTML = answ[parseInt(e.path[0].id)]
        document.getElementById("ans").style.display = "block"
        document.getElementById("cross").style.display = "block"
    }
})