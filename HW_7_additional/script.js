//- Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }
//
function User(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
    this.id = id,
        this.name = name,
        this.email = email,
        this.address = {
            street: street,
            suite: suite,
            city: city,
            zipcode: zipcode,
            geo: {
                lat: lat,
                lng: lng
            }
        },
        this.phone = phone,
        this.website = website,
        this.company = {
            companyName: companyName,
            catchPhrase: catchPhrase,
            bs: bs
        }
}

const newUser = new User(1, 'Oleg', 'Sam', 'dwgy@gmail.com', 'vv', 'wfw', 'lviv', '324923', '-4287346.3428', '426238476', '4626', 'wjudwi@dwin', 'ecne', 'qwr', 'cemoco');
console.log(newUser);
//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//  -назва тегу ()
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результуючого об'єкту
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }
class Tag {
    constructor() {
        this.a = {
            titleOfTag: 'area',
            action: 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>,' +
                ' <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.' +
                ' Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. ' +
                'Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.\n' +
                '\n',
            atributes: [
                {
                    name:'href',
                    action:'Задает адрес документа, на который следует перейти.'
                },
                {
                    name: 'rel',
                    action: 'Отношения между ссылаемым и текущим документами.'
                }
            ]

        };
        this.div = {
            titleOfTag: 'block',
            action: 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
            atributes: [
                {
                    name: 'align',
                    action: 'Задает выравнивание содержимого тега div'
                },
                {
                    name: 'title',
                    action: 'Добавляет всплывающую подсказку к содержимому.'
                }
            ]
        };
        this.h1 = {
            titleOfTag: 'header',
            action: 'Tег h1 представляет собой наиболее важный заголовок первого уровня',
            atributes: [
                {
                    name: 'align',
                    action: 'Определяет выравнивание заголовка.'
                }
            ]
        };
        this.span = {
            titleOfTag: 'span',
            action: 'Тег span предназначен для определения строчных элементов документа.',
            atributes: [
                {
                    name:'accesskey',
                    action:'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'
                },
                {
                    name:'class',
                    action: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
                }
            ]
        };
        this.input = {
            titleOfTag: 'input',
            action:'Тег input является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем',
            atributes:[
                {
                    name:'align',
                    action:'Определяет выравнивание изображения.'
                },
                {
                    name:'border',
                    action: 'Толщина рамки вокруг изображения.'
                },
                {
                    name: 'checked',
                    action: 'Предварительно активированный переключатель или флажок.'
                }
            ]

        };
        this.form = {
            titleOfTag: 'form',
            action: 'Связывает поле с формой по её идентификатору. Такая связь необходима в случае, когда поле располагается за пределами form, например, при создании её программно или по соображениям дизайна.',
            atributes:[
                {
                    name:'id',
                    action:'Идентификатор формы'
                }
            ]
        };
        this.option = {
            titleOfTag: 'option',
            action:'Тег option определяет отдельные пункты списка, создаваемого с помощью контейнера select.',
            atributes: [
                {
                    name:'disabled',
                    action: 'Заблокировать для доступа элемент списка.'
                },
                {
                    name: 'label',
                    action: 'Указание метки пункта списка.'
                },
                {
                    name: 'selected',
                    action: 'Заранее устанавливает определенный пункт списка выделенным.'
                }
            ]
        };
        this.select = {
            titleOfTag: 'select',
            action: 'Тег select позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.',
            atributes: [
                {
                    name:'multiple',
                    action:'Позволяет одновременно выбирать сразу несколько элементов списка.'
                },
                {
                    name: 'required',
                    action: 'Список обязателен для выбора перед отправкой формы.'
                }
            ]
        };
    }
}

let newTag = new Tag();
console.log(newTag);