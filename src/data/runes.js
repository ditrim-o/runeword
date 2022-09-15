const runes = [
    {
        "id": 0,
        "nameEn": "El",
        "nameRus": "Эл",
        "img": require("../img/el.png"),
        "recept": {
            "first": true,
            "countPred": 0,
            "dop": false
        },
        "effects": {
            "weapon": "+50 к рейтингу атаки, + 1 к радиусу обзора",
            "armor": "+15 к защите, + 1 к радиусу обзора",
            "shield": "+15 к защите, + 1 к радиусу обзора",
            "level": "11-й"
        }
    },
    {
        "id": 1,
        "nameEn": "Eld",
        "nameRus": "Элд",
        "img": require("../img/eld.png"),
        "recept": {
            "first": false,
            "countPred": 3,
            "dop": false
        },
        "effects": {
            "weapon": "+75% урона по нежити, +50 к рейтингу атаки против нежити",
            "armor": "Выносливость снижается на 15% медленнее",
            "shield": "Вероятность 7% заблокировать удар",
            "level": "11-й"
        }
    },
    {
        "id": 2,
        "nameEn": "Tir",
        "nameRus": "Тир",
        "img": require("../img/tir.png"),
        "recept": {
            "first": false,
            "countPred": 3,
            "dop": false
        },
        "effects": {
            "weapon": "+2 к мане при убийстве",
            "armor": "+2 к мане при убийстве",
            "shield": "+2 к мане при убийстве",
            "level": "13-й"
        }
    },
    {
        "id": 3,
        "nameEn": "Nef",
        "nameRus": "Неф",
        "img": require("../img/nef.png"),
        "recept": {
            "first": false,
            "countPred": 3,
            "dop": false
        },
        "effects": {
            "weapon": "Отбрасывает",
            "armor": " +30 к защите от снарядов",
            "shield": " +30 к защите от снарядов",
            "level": "13-й"
        }
    },
    {
        "id": 4,
        "nameEn": "Eth",
        "nameRus": "Эт",
        "img": require("../img/et.png"),
        "recept": {
            "first": false,
            "countPred": 3,
            "dop": false
        },
        "effects": {
            "weapon": "-25% к защите цели",
            "armor": "Восполняет 15% маны",
            "shield": "Восполняет 15% маны",
            "level": "15-й"
        }
    },
    {
        "id": 5,
        "nameEn": "Ith",
        "nameRus": "Ит",
        "img": require("../img/it.png"),
        "recept": {
            "first": false,
            "countPred": 3,
            "dop": false
        },
        "effects": {
            "weapon": "+9 к максимальному урону",
            "armor": "15% урона приходится на ману",
            "shield": "15% урона приходится на ману",
            "level": "15-й"
        }
    },
    {
        "id": 6,
        "nameEn": "Tal",
        "nameRus": "Тал",
        "img": require("../img/tal.png"),
        "recept": {
            "first": false,
            "countPred": 3,
            "dop": false
        },
        "effects": {
            "weapon": "+75 урона от яда за 5 сек.",
            "armor": "+30% к сопротивлению яду",
            "shield": "+35% к сопротивлению яду",
            "level": "17-й"
        }
    },
    {
        "id": 7,
        "nameEn": "Ral",
        "nameRus": "Рал",
        "img": require("../img/ral.png"),
        "recept": {
            "first": false,
            "countPred": 3,
            "dop": false
        },
        "effects": {
            "weapon": "+5-30 урона от огня",
            "armor": "+30% к сопротивлению огню",
            "shield": "+35% к сопротивлению огню",
            "level": "19-й"
        }
    },
    {
        "id": 8,
        "nameEn": "Ort",
        "nameRus": "Орт",
        "img": require("../img/ort.png"),
        "recept": {
            "first": false,
            "countPred": 3,
            "dop": false
        },
        "effects": {
            "weapon": "+1-50 урона от молнии",
            "armor": "+30% к сопротивлению молнии",
            "shield": "+35% к сопротивлению молнии",
            "level": "21-й"
        }
    },
    {
        "id": 9,
        "nameEn": "Thul",
        "nameRus": "Тул",
        "img": require("../img/tul.png"),
        "recept": {
            "first": false,
            "countPred": 3,
            "dop": false
        },
        "effects": {
            "weapon": "+3-14 урона от льда",
            "armor": "+30% к сопротивлению льду",
            "shield": "+35% к сопротивлению льду",
            "level": "23-й"
        }
    },
    {
        "id": 10,
        "nameEn": "Amn",
        "nameRus": "Амн",
        "img": require("../img/amn.png"),
        "recept": {
            "first": false,
            "countPred": 3,
            "dop": true,
            "name": "надколотый топаз",
            "img": require("../img/gem/nt.png")
        },
        "effects": {
            "weapon": "Похищает 7% здоровья за удар",
            "armor": "Атакующий получает 14 урона",
            "shield": "Атакующий получает 14 урона",
            "level": "25-й"
        }
    },
    {
        "id": 11,
        "nameEn": "Sol",
        "nameRus": "Сол",
        "img": require("../img/sol.png"),
        "recept": {
            "first": false,
            "countPred": 3,
            "dop": true,
            "name": "надколотый аметист",
            "img": require("../img/gem/na.png")
        },
        "effects": {
            "weapon": "+9 к минимальному урону",
            "armor": "-7 к урону",
            "shield": "-7 к урону",
            "level": "27-й"
        }
    },
    {
        "id": 12,
        "nameEn": "Shael",
        "nameRus": "Шаэл",
        "img": require("../img/shael.png"),
        "recept": {
            "first": false,
            "countPred": 3,
            "dop": true,
            "name": "надколотый сапфир",
            "img": require("../img/gem/ns.png")
        },
        "effects": {
            "weapon": "+20% к скорости атаки",
            "armor": "+20% к ускоренному восстановлению от удара",
            "shield": "+20% к скорости блока",
            "level": "29-й"
        }
    },
    {
        "id": 13,
        "nameEn": "Dol",
        "nameRus": "Дол",
        "img": require("../img/dol.png"),
        "recept": {
            "first": false,
            "countPred": 3,
            "dop": true,
            "name": "надколотый рубин",
            "img": require("../img/gem/nr.png")
        },
        "effects": {
            "weapon": "Вероятность 25% обратить монстра в бегство при ударе",
            "armor": "Восполняет +7 здоровья",
            "shield": "Восполняет +7 здоровья",
            "level": "31-й"
        }
    },
    {
        "id": 14,
        "nameEn": "Hel",
        "nameRus": "Хел",
        "img": require("../img/hel.png"),
        "recept": {
            "first": false,
            "countPred": 3,
            "dop": true,
            "name": "надколотый изумруд",
            "img": require("../img/gem/ni.png")
        },
        "effects": {
            "weapon": "Требования -20%",
            "armor": "Требования -15%",
            "shield": "Требования -15%",
            "level": "0-й"
        }
    },
    {
        "id": 15,
        "nameEn": "Io",
        "nameRus": "Ио",
        "img": require("../img/io.png"),
        "recept": {
            "first": false,
            "countPred": 3,
            "dop": true,
            "name": "надколотый алмаз",
            "img": require("../img/gem/nal.png")
        },
        "effects": {
            "weapon": "+10 к живучести",
            "armor": "+10 к живучести",
            "shield": "+10 к живучести",
            "level": "35-й"
        }
    },
    {
        "id": 16,
        "nameEn": "Lum",
        "nameRus": "Лум",
        "img": require("../img/lum.png"),
        "recept": {
            "first": false,
            "countPred": 1,
            "dop": true,
            "name": "мутный топаз",
            "img": require("../img/gem/mt.png")
        },
        "effects": {
            "weapon": "+10 к энергии",
            "armor": "+10 к энергии",
            "shield": "+10 к энергии",
            "level": "37-й"
        }
    },
    {
        "id": 17,
        "nameEn": "Ko",
        "nameRus": "Ко",
        "img": require("../img/ko.png"),
        "recept": {
            "first": false,
            "countPred": 3,
            "dop": true,
            "name": "мутный аметист",
            "img": require("../img/gem/ma.png")
        },
        "effects": {
            "weapon": "+10 к ловкости",
            "armor": "+10 к ловкости",
            "shield": "+10 к ловкости",
            "level": "39-й"
        }
    },
    {
        "id": 18,
        "nameEn": "fal",
        "nameRus": "Фал",
        "img": require("../img/fal.png"),
        "recept": {
            "first": false,
            "countPred": 3,
            "dop": true,
            "name": "мутный сапфир",
            "img": require("../img/gem/ma.png")
        },
        "effects": {
            "weapon": "+10 к силе",
            "armor": "+10 к силе",
            "shield": "+10 к силе",
            "level": "41-й"
        }
    },
    {
        "id": 19,
        "nameEn": "Lem",
        "nameRus": "Лем",
        "img": require("../img/lem.png"),
        "recept": {
            "first": false,
            "countPred": 3,
            "dop": true,
            "name": "мутный рубин",
            "img": require("../img/gem/mr.png")
        },
        "effects": {
            "weapon": "+75% к золоту за убийство монстров",
            "armor": "+50% к золоту за убийство монстров",
            "shield": "+50% к золоту за убийство монстров",
            "level": "43-й"
        }
    },
    {
        "id": 20,
        "nameEn": "Pul",
        "nameRus": "Пул",
        "img": require("../img/pul.png"),
        "recept": {
            "first": false,
            "countPred": 3,
            "dop": true,
            "name": "мутный изумруд",
            "img": require("../img/gem/mi.png")
        },
        "effects": {
            "weapon": "+75% урона по демонам, +100 к рейтингу атаки против демонов",
            "armor": "+30% к защите",
            "shield": "+30% к защите",
            "level": "45-й"
        }
    },
    {
        "id": 21,
        "nameEn": "Um",
        "nameRus": "Ум",
        "img": require("../img/ym.png"),
        "recept": {
            "first": false,
            "countPred": 3,
            "dop": true,
            "name": "мутный алмаз",
            "img": require("../img/gem/mal.png")
        },
        "effects": {
            "weapon": "Вероятность 25% нанести открытую рану",
            "armor": "+15 к сопротивлению всем видам урона",
            "shield": "+22 к сопротивлению всем видам урона",
            "level": "47-й"
        }
    },
    {
        "id": 22,
        "nameEn": "Mal",
        "nameRus": "Мал",
        "img": require("../img/mal.png"),
        "recept": {
            "first": false,
            "countPred": 2,
            "dop": true,
            "name": "топаз",
            "img": require("../img/gem/t.png")
        },
        "effects": {
            "weapon": "Запрещает монстрам лечиться",
            "armor": "-7 к магическому урону",
            "shield": "-7 к магическому урону",
            "level": "49-й"
        }
    },
    {
        "id": 23,
        "nameEn": "Ist",
        "nameRus": "Ист",
        "img": require("../img/ist.png"),
        "recept": {
            "first": false,
            "countPred": 2,
            "dop": true,
            "name": "аметист",
            "img": require("../img/gem/a.png")
        },
        "effects": {
            "weapon": "+30% к вероятности найти магический предмет",
            "armor": "+25% к вероятности найти магический предмет",
            "shield": "+25% к вероятности найти магический предмет",
            "level": "51-й"
        }
    },
    {
        "id": 24,
        "nameEn": "Gul",
        "nameRus": "Гул",
        "img": require("../img/gul.png"),
        "recept": {
            "first": false,
            "countPred": 2,
            "dop": true,
            "name": "сапфир",
            "img": require("../img/gem/s.png")
        },
        "effects": {
            "weapon": "+20% к рейтингу атаки",
            "armor": "+5% к максимальному сопротивлению яду",
            "shield": "+5% к максимальному сопротивлению яду",
            "level": "53-й"
        }
    },
    {
        "id": 25,
        "nameEn": "Vex",
        "nameRus": "Векс",
        "img": require("../img/vex.png"),
        "recept": {
            "first": false,
            "countPred": 2,
            "dop": true,
            "name": "рубин",
            "img": require("../img/gem/r.png")
        },
        "effects": {
            "weapon": "Похищает 7% маны за удар",
            "armor": "+5% к максимальному сопротивлению огню",
            "shield": "+5% к максимальному сопротивлению огню",
            "level": "55-й"
        }
    },
    {
        "id": 26,
        "nameEn": "Ohm",
        "nameRus": "Ом",
        "img": require("../img/om.png"),
        "recept": {
            "first": false,
            "countPred": 2,
            "dop": true,
            "name": "изумруд",
            "img": require("../img/gem/i.png")
        },
        "effects": {
            "weapon": "+50% к урону",
            "armor": "+5% к максимальному сопротивлению льду",
            "shield": "+5% к максимальному сопротивлению льду",
            "level": "57-й"
        }
    },
    {
        "id": 27,
        "nameEn": "Lo",
        "nameRus": "Ло",
        "img": require("../img/lo.png"),
        "recept": {
            "first": false,
            "countPred": 2,
            "dop": true,
            "name": "алмаз",
            "img": require("../img/gem/a.png")
        },
        "effects": {
            "weapon": "Вероятность 20% нанести смертельный удар",
            "armor": "+5% к максимальному сопротивлению молнии",
            "shield": "+5% к максимальному сопротивлению молнии",
            "level": "59-й"
        }
    },
    {
        "id": 28,
        "nameEn": "Sur",
        "nameRus": "Сур",
        "img": require("../img/sur.png"),
        "recept": {
            "first": false,
            "countPred": 2,
            "dop": true,
            "name": "безупречный топаз",
            "img": require("../img/gem/bt.png")
        },
        "effects": {
            "weapon": "При ударе ослепляет цель",
            "armor": "+5% к максимальной мане",
            "shield": "+50 к мане",
            "level": "61-й"
        }
    },
    {
        "id": 29,
        "nameEn": "Ber",
        "nameRus": "Бер",
        "img": require("../img/ber.png"),
        "recept": {
            "first": false,
            "countPred": 2,
            "dop": true,
            "name": "безупречный аметист",
            "img": require("../img/gem/ba.png")
        },
        "effects": {
            "weapon": "Вероятность 20% нанести сокрушительный удар",
            "armor": "-8% к урону",
            "shield": "-8% к урону",
            "level": "63-й"
        }
    },
    {
        "id": 30,
        "nameEn": "Jah",
        "nameRus": "Жа",
        "img": require("../img/jah.png"),
        "recept": {
            "first": false,
            "countPred": 2,
            "dop": true,
            "name": "безупречный сапфир",
            "img": require("../img/gem/bs.png")
        },
        "effects": {
            "weapon": "Игнорирует защиту цели",
            "armor": "+5% к максимальному здоровью",
            "shield": "+50 к здоровью",
            "level": "65-й"
        }
    },
    {
        "id": 31,
        "nameEn": "Cham",
        "nameRus": "Чам",
        "img": require("../img/cham.png"),
        "recept": {
            "first": false,
            "countPred": 2,
            "dop": true,
            "name": "безупречный рубин",
            "img": require("../img/gem/br.png")
        },
        "effects": {
            "weapon": "Замораживает цель +3",
            "armor": "Нельзя заморозить",
            "shield": "Нельзя заморозить",
            "level": "67-й"
        }
    },
    {
        "id": 32,
        "nameEn": "Zod",
        "nameRus": "Зод",
        "img": require("../img/zod.png"),
        "recept": {
            "first": false,
            "countPred": 2,
            "dop": true,
            "name": "мутный изумруд",
            "img": require("../img/gem/mi.png")
        },
        "effects": {
            "weapon": "Не теряет прочности",
            "armor": "Не теряет прочности",
            "shield": "Не теряет прочности",
            "level": "69-й"
        }
    }
]

export default runes