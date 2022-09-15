const films = [
    {
        id: 1,
        name: "Отступники",
        link: "https://www.kinopoisk.ru/film/otstupniki-2006-81314/"
    },
    {
        id: 2,
        name: "Общак",
        link: "https://www.kinopoisk.ru/film/506490/"
    },
    {
        id: 3,
        name: "Американская история Х",
        link: "https://www.kinopoisk.ru/film/382/"
    },
    {
        id: 4,
        name: "Законополслушный гражданин",
        link: "https://www.kinopoisk.ru/film/406408/"
    },
    {
        id: 5,
        name: "Линкольн для адвоката",
        link: "https://www.kinopoisk.ru/film/461939/"
    },
    {
        id: 6,
        name: "Реинкарнация",
        link: "https://www.kinopoisk.ru/film/1112132/"
    },
    {
        id: 7,
        name: "Фарго",
        link: "https://www.kinopoisk.ru/film/402/"
    },
    {
        id: 8,
        name: "Подозрительные лица",
        link: "https://www.kinopoisk.ru/film/340/"
    },
    {
        id: 9,
        name: "Первобытный страх",
        link: "https://www.kinopoisk.ru/film/2962/"
    },
    {
        id: 10,
        name: "Дом, который построил Джек",
        link: "https://www.kinopoisk.ru/film/942396/"
    },
    {
        id: 11,
        name: "Знакомьтесь, Джо Блэк",
        link: "https://www.kinopoisk.ru/film/5059/"
    },
    {
        id: 12,
        name: "Дурак",
        link: "https://www.kinopoisk.ru/film/808639/"
    },
    {
        id: 13,
        name: "Дорога",
        link: "https://www.kinopoisk.ru/film/395523/"
    },

    {
        id: 14,
        name: "Помни",
        link: "https://www.kinopoisk.ru/film/335/"
    },
    {
        id: 15,
        name: "Башмаки мертвеца",
        link: "https://www.kinopoisk.ru/film/botinki-mertvetsa-2004-82274/"
    },
    {
        id: 16,
        name: "Славные парни",
        link: "https://www.kinopoisk.ru/film/slavnye-parni-2016-841152/"
    },
    {
        id: 17,
        name: "Отточенное Лезвие",
        link: "https://www.kinopoisk.ru/film/479/"
    },
    {
        id: 18,
        name: "С меня хватит",
        link: "https://www.kinopoisk.ru/film/4853/"
    },
    {
        id: 19,
        name: "Заводной апельсин",
        link: "https://www.kinopoisk.ru/film/391/"
    },
    {
        id: 20,
        name: "Луговые собачки",
        link: "https://www.kinopoisk.ru/film/lugovye-sobachki-1997-1962/"
    },
    {
        id: 21,
        name: "Побег из Шоушенка",
        link: "https://www.kinopoisk.ru/film/pobeg-iz-shoushenka-1994-326/"
    },
    {
        id: 22,
        name: "Ганибалл",
        link: "https://www.kinopoisk.ru/film/gannibal-2001-686/"
    },
    {
        id: 23,
        name: "Красный дракон",
        link: "https://www.kinopoisk.ru/film/krasnyy-drakon-2002-798/"
    },
    {
        id: 24,
        name: "молчание ягнят",
        link: "https://www.kinopoisk.ru/film/345/"
    },
    {
        id: 25,
        name: "Гранд Торино",
        link: "https://www.kinopoisk.ru/film/gran-torino-2008-408410/"
    },
    {
        id: 26,
        name: "Голгофа",
        link: "https://www.kinopoisk.ru/film/666951/"
    },
    {
        id: 27,
        name: "Старикам тут не место",
        link: "https://www.kinopoisk.ru/film/starikam-tut-ne-mesto-2007-195434/"
    },
    {
        id: 28,
        name: "Робот по имени Чаппи",
        link: "https://www.kinopoisk.ru/film/591485/"
    },
    {
        id: 29,
        name: "Майор",
        link: "https://www.kinopoisk.ru/film/mayor-2013-675498/"
    },
    {
        id: 30,
        name: "Мандарины",
        link: "https://www.kinopoisk.ru/film/772017/"
    },
    {
        id: 31,
        name: "Пока не сыграл в ящик",
        link: "https://www.kinopoisk.ru/film/258885/"
    },
    {
        id: 32,
        name: "Невидимый гость",
        link: "https://www.kinopoisk.ru/film/959365/"
    },
    {
        id: 33,
        name: "Лобстер",
        link: "https://www.kinopoisk.ru/film/819846/"
    },
    {
        id: 34,
        name: "Семь психопатов",
        link: "https://www.kinopoisk.ru/film/sem-psikhopatov-2012-586584/"
    },
    {
        id: 35,
        name: "Мизери",
        link: "https://www.kinopoisk.ru/film/mizeri-1990-1574/"
    },
    {
        id: 36,
        name: "Однажды в Ирландии",
        link: "https://www.kinopoisk.ru/film/odnazhdy-v-irlandii-2011-484474/"
    },
    {
        id: 37,
        name: "Жить",
        link: "https://www.kinopoisk.ru/film/zhit-2010-521526/"
    },
    {
        id: 38,
        name: "Форма воды",
        link: "https://www.kinopoisk.ru/film/977743/"
    },
    {
        id: 39,
        name: "Из машины",
        link: "https://www.kinopoisk.ru/film/iz-mashiny-2014-197532/"
    },
    {
        id: 40,
        name: "Кожа в которой я живу",
        link: "https://www.kinopoisk.ru/film/462737/"
    },
    {
        id: 41,
        name: "Гладиатор",
        link: "https://www.kinopoisk.ru/film/gladiator-2000-474/"
    },
    {
        id: 42,
        name: "3 билборда на границе",
        link: "https://www.kinopoisk.ru/film/tri-bilborda-na-granitse-ebbinga-missuri-2017-944098/"
    },
    {
        id: 43,
        name: "Лучшее предложение",
        link: "https://www.kinopoisk.ru/film/681849/"
    },
    {
        id: 44,
        name: "Залечь на дно в Брюгге",
        link: "https://www.kinopoisk.ru/film/276295/"
    },
    {
        id: 45,
        name: "Луна 2112",
        link: "https://www.kinopoisk.ru/film/406671/"
    },
    {
        id: 46,
        name: "Счастливое число Слевина",
        link: "https://www.kinopoisk.ru/film/schastlivoe-chislo-slevina-2005-86326/"
    },
    {
        id: 47,
        name: "Забавные игры",
        link: "https://www.kinopoisk.ru/film/zabavnye-igry-1997-79544/"
    },
    {
        id: 48,
        name: "Прочь",
        link: "https://www.kinopoisk.ru/film/proch-2017-944708/"
    },
    {
        id: 49,
        name: "Сити-Айленд",
        link: "https://www.kinopoisk.ru/film/siti-aylend-2009-418802/"
    },
    {
        id: 50,
        name: "Охотники за головами",
        link: "https://www.kinopoisk.ru/film/okhotniki-za-golovami-2011-526812/"
    },
    {
        id: 51,
        name: "Остров собак",
        link: "https://www.kinopoisk.ru/film/939785/"
    },
    {
        id: 52,
        name: "1408",
        link: "https://www.kinopoisk.ru/film/195563/"
    },

    {
        id: 53,
        name: "Достать ножи",
        link: "https://www.kinopoisk.ru/film/1188529/"
    },
    {
        id: 54,
        name: "Отель «Гранд Будапешт»",
        link: "https://www.kinopoisk.ru/film/683999/"
    },
    {
        id: 55,
        name: "Кошачьи миры Луиса Уэйна",
        link: "https://www.kinopoisk.ru/film/1290289/"
    },

]

export default films