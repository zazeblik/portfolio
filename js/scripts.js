const portfolio = [
    {file:'1.jpg',title:'Языки пламени',material:'Берёзовый кап (2021)',description:'Один из первых моих капов. Стоит обычно на полу.'},
    {file:'2.jpg',title:'Гусыня',material:'Берёзовый кап (2021)',description:'Один из первых моих капов. Стоит обычно на полу.'},
    {file:'3.jpg',title:'Ваза для сладостей',material:'Берёзовый кап (2021)',description:'Один из первых моих капов. Стоит обычно на полу.'},
    {file:'4.jpg',title:'Лебедь',material:'Берёзовый кап (2022)',description:'Один из первых моих капов. Стоит обычно на полу.'},
    {file:'5.jpg',title:'Кубок',material:'Берёзовый кап (2022)',description:'Один из первых моих капов. Стоит обычно на полу.'},
    {file:'6.jpg',title:'Братина',material:'Берёзовый кап (2022)',description:'Один из первых моих капов. Стоит обычно на полу.'},
    {file:'7.jpg',title:'Сердце леса',material:'Берёзовый кап (2023)',description:'Массивная ваза с глубокой текстурой, подчеркивающей природные узоры древесины.'},
    {file:'8.jpg',title:'Лесной дух',material:'Берёзовый кап (2023)',description:'Декоративная чаша, в которой переплетаются естественные трещины и гладкая полировка.'},
    {file:'9.jpg',title:'Осенний вихрь',material:'Берёзовый кап (2023)',description:'Изящное изделие с динамичным рисунком волокон, напоминающим кружение листьев.'},
    {file:'10.jpg',title:'Таежный дар',material:'Берёзовый кап (2023)',description:'Прочная и вместительная ваза, сохранившая первозданную мощь северной березы.'},
    {file:'11.jpg',title:'Золото осени',material:'Берёзовый кап (2024)',description:'Светлый кап с янтарным отливом, идеально подходящий для украшения интерьера.'},
    {file:'12.jpg',title:'Вековой узел',material:'Берёзовый кап (2024)',description:'Сложная форма этой работы демонстрирует всю причудливость березового нароста.'},
    {file:'13.jpg',title:'Капля росы',material:'Берёзовый кап (2024)',description:'Небольшая, но очень детальная работа с тончайшей шлифовкой поверхности.'},
    {file:'14.jpg',title:'Берестяной шепот',material:'Берёзовый кап (2024)',description:'Ваза, сочетающая в себе грубую кору и нежную внутреннюю текстуру дерева.'},
    {file:'15.jpg',title:'Хранитель традиций',material:'Берёзовый кап (2024)',description:'Классическая форма братины, выполненная в уникальной технике резьбы по капу.'},
    {file:'16.jpg',title:'Зеркало природы',material:'Берёзовый кап (2024)',description:'Глубокая полировка позволяет увидеть каждое кольцо и изгиб каповой структуры.'},
    {file:'17.jpg',title:'Дыхание севера',material:'Берёзовый кап (2025)',description:'Холодные тона древесины и строгие формы создают образ северного леса.'},
    {file:'18.jpg',title:'Узор тумана',material:'Берёзовый кап (2025)',description:'Легкая, почти воздушная чаша с едва заметными переходами цвета.'},
    {file:'19.jpg',title:'Лесная нимфа',material:'Берёзовый кап (2025)',description:'Грациозная форма и тонкие стенки делают эту работу настоящим произведением искусства.'},
    {file:'20.jpg',title:'Сила земли',material:'Берёзовый кап (2025)',description:'Тяжелая, устойчивая работа, символизирующая неразрывную связь с природой.'},
    {file:'21.jpg',title:'Солнечный блик',material:'Берёзовый кап (2025)',description:'Работа с яркими вкраплениями сувеля, играющими на свету.'},
    {file:'22.jpg',title:'Легенда леса',material:'Берёзовый кап (2025)',description:'Большая ваза, на которой можно бесконечно изучать историю дерева.'},
    {file:'23.jpg',title:'Гармония',material:'Берёзовый кап (2025)',description:'Идеальный баланс между природной хаотичностью и человеческим мастерством.'},
    {file:'24.jpg',title:'Родник',material:'Берёзовый кап (2025)',description:'Чаша с плавными линиями, напоминающими течение лесного ручья.'},
    {file:'25.jpg',title:'Древний страж',material:'Берёзовый кап (2026)',description:'Монументальная работа из очень старого и редкого капа.'},
    {file:'26.jpg',title:'Пробуждение',material:'Берёзовый кап (2026)',description:'Светлое дерево с активным рисунком, символизирующее начало весны.'},
    {file:'27.jpg',title:'Вершина мастерства',material:'Берёзовый кап (2026)',description:'Одна из последних работ, объединившая в себе весь накопленный опыт.'}
];

const story = [
    {file:'1.jpg',date:'2009-2011',title:'Увидел кап на заявке',message:'Я занимаюсь ремонтом холодильников на дому. Увидел у мужика на заявке кап. Спросил как делать. Он рассказал всё и показал. Дал инструменты.'},
    {file:'2.jpg',date:'Март 2011',title:'Сделал свой первый кап',message:'Нашёл в лесу кап. Отодрал от берёзы. Выстрогал там всё по красоте. Покрыл морилкой и лаком. И вот она красотень!'},
    {file:'3.jpg',date:'Декабрь 2015',title:'Первая моя выставка',message:'О моём хобби узнала заведающия музеем. Пригласила сделать выставку своих работ. Пригласил всех своих друзей и родственников. Ребята из школы, кто пришёл на выставку написали много приятных отзывов.'},
    {file:'4.jpg',date:'Июль 2020',title:'Мой 100й кап',message:'Всегда хотел сделать 100 капов! Крутая цифра и абициозная цель. Таки ура! У меня всё получилось!'},
];

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    portfolio.forEach((pi, i) => {
        let item = document.createElement('div');
        item.className = 'col-lg-4 col-sm-6 mb-4';
        item.innerHTML = `<div class="portfolio-item">
            <a class="portfolio-link" onclick="showModal(${i})" href="javascript:void(0)">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                </div>
                <img class="img-fluid" src="assets/img/portfolio/${pi.file}" alt="..." />
            </a>
            <div class="portfolio-caption">
                <div class="portfolio-caption-heading">${pi.title}</div>
                <div class="portfolio-caption-subheading text-muted">${pi.material}</div>
            </div>
        </div>`;
        document.getElementById('portfolio-list').appendChild(item);
    });

    story.forEach((si, i) => {
        let item = document.createElement('li');
        if (i% 2 !== 0) {
            item.className = 'timeline-inverted';
        }
        item.innerHTML=`<div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/${si.file}" alt="${si.title}" /></div>
        <div class="timeline-panel">
            <div class="timeline-heading">
                <h4>${si.date}</h4>
                <h4 class="subheading">${si.title}</h4>
            </div>
            <div class="timeline-body"><p class="text-muted">${si.message}</p></div>
        </div>`;
        document.getElementById('story').appendChild(item);
    });
    const lastStoryItem = document.createElement('li');
    lastStoryItem.innerHTML = `<div class="timeline-image">
        <h4>
            Покой
            <br />
            мне только
            <br />
            снится!
        </h4>
    </div>`;
    document.getElementById('story').appendChild(lastStoryItem);
});

function showModal(i){
    const item = portfolio[i];
    var portfolioModal = new bootstrap.Modal(document.getElementById('portfolioModal'), {
        keyboard: false
    });
    document.getElementById('modal-title').innerText = item.title;
    document.getElementById('modal-material').innerText = item.material;
    document.getElementById('modal-description').innerText = item.description;
    document.getElementById('modal-img').setAttribute('src', 'assets/img/portfolio/'+item.file);
    portfolioModal.toggle();
}