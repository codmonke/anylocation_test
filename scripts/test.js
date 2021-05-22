window.Content = {
    'coctail-bar': {
        'title': '<h1>коктельный</h1><span>бар</span>',
        'text': `Коктейли — наша страсть. Мы умеем готовить любые коктейли, которые известны вам и нам. Если этого мало — мы составим индивидуальную коктейльную карту под ваш проект.`,
        'images': [
            'images/home(8).jpg',
            'images/home(3).jpg'
        ],
        'categories': [{
                'name': 'mix',
                'title': 'микс—дринки',
                'positions': [
                    {
                        'id': '1621660127898',
                        'image': 'images/preview(1).jpg',
                        'pos_name': 'Куба либре',
                        'pos_info': 'Золотой ром, фреш лайма, кола, лайм, лед в кубиках',
                        'price': 200,
                        'portion': [50, 100]
                    },
                    {
                        'id': '1621660140246',
                        'image': 'images/preview(1).jpg',
                        'pos_name': 'Куба либре',
                        'pos_info': 'Золотой ром, фреш лайма, кола, лайм, лед в кубиках',
                        'price': 200,
                        'portion': [50, 100]
                    }
                ]
            },
            {
                'name': 'classic-coctails',
                'title': 'классические коктейли',
                'positions': [{
                    'id': '1621660148229',
                    'image': 'images/preview(2).jpg',
                    'pos_name': 'Мохито',
                    'pos_info': 'Белый ром, Сахарный сироп, Содовая, Лайм, Мята, Фраппе',
                    'price': 250,
                    'portion': [25, 50, 100]
                }]
            }
        ]
    },
    'beer-bar': {
        'images': [
            'images/home(5).jpg',
            'images/home(4).jpg'
        ],

        'title': '<h1>пивной</h1><span>бар</span>',
        'text': `Стоимость пивного бара складывается из стоимости пива, аренды оборудования, стойки и персонала. В среднем одна пивная станция разливает 50л в час.`
    },
    'coffee-bar': {
        'title': '<h1>кофейный</h1><span>бар</span>',
        'text': `Выездной кофейный бар - это качественный кофе, максимально возможный ассортимент кофейных напитков, профессиональное оборудование и опытные бариста. И все это на вашем мероприятии.`
    },
    'hot-bar': {
        'title': '<h1>бар горячих</h1><span>напитков</span>',
        'text': `Кофе, чай, глинтвейны, гроги, пунши и другие согревающие напитки. Всё это смотрите ниже.`
    },
    'non-alcoholic-bar': {
        'title': '<h1>безалкогольный</h1><span>бар</span>',
        'text': `Здоровье, бодрость и красота?! Вам сюда! Обратите внимание на овершейки!`
    }
}

window.Template = `<%if(this.categories) {%>
<%for(var i in this.categories) {%>
<div class="category">
    <div class="container">
        <div class="type">
            <h1 class="name">
                <%this.categories[i].title%>
            </h1>
            <div class="positions-slider slider-<%this.categories[i].name%> swiper-container">
                <div class="controls">
                    <a href="#" class="slide-prev slide-prev-<%this.categories[i].name%> swiper-button-prev"></a>
                    <div class="swiper-pagination swiper-pagination-<%this.categories[i].name%>"></div>
                    <a href="#" class="slide-next slide-next-<%this.categories[i].name%> swiper-button-next"></a>
                </div>
                <div class="positions swiper-wrapper">
                    <%for(var j in this.categories[i].positions) {%>
                    <div id="product-<%this.categories[i].positions[j].id%>" class="position swiper-slide">
                        <div class="add">
                            <a href="#"></a>
                        </div>
                        <div class="preview-image">
                            <img src="<%this.categories[i].positions[j].image%>">
                        </div>
                        <div class="details">
                            <div class="pos-title">
                                <h1 class="pos-name">
                                    <%this.categories[i].positions[j].pos_name%>
                                </h1>
                                <p class="pos-info">
                                    <%this.categories[i].positions[j].pos_info%>
                                </p>
                            </div>
                            <div class="pos-options">
                                <div class="amount">
                                    <div class="custom-select-wrapper" onclick="toggle_select(this)">
                                        <div class="custom-select">
                                            <div class="custom-select__trigger"><span>
                                                    <%this.categories[i].positions[j].portion[0]%> шт.</span>
                                                <div class="arrow"></div>
                                            </div>
                                            <div class="custom-options">
                                                <%for(var k in this.categories[i].positions[j].portion) {%>
                                                    <%if(this.categories[i].positions[j].portion[k] == this.categories[i].positions[j].portion[0]) {%>
                                                        <span class="selected custom-option" data-value="<%this.categories[i].positions[j].portion[0]%>">
                                                            <%this.categories[i].positions[j].portion[0]%> шт.
                                                        </span>
                                                    <%} else {%>
                                                        <span class="custom-option" data-value="<%this.categories[i].positions[j].portion[k]%>">
                                                            <%this.categories[i].positions[j].portion[k]%> шт.
                                                        </span>
                                                    <%}%>
                                                <%}%>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="price" data-price="<%this.categories[i].positions[j].price%>">
                                    <h2></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <%}%>
                </div>
            </div>
        </div>
    </div>
</div>
<%}%>
<%} else {%>
<div class="container">
    <div class="empty">пусто :(</div>
</div>
<%}%>`