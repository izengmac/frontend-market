import React from 'react';
import '../style_area_pc.css';
import '../style_entrance_pc.css';
import '../style_setting_pc.css'

function PersonalArea() {
    const decrement = () => {
        // decrement function logic here
    };

    const increment = () => {
        // increment function logic here
    };

    const changeColorAndText = (element) => {
        // change color and text logic here
    };

    const toggleStar = (starIndex) => {
        // toggle star logic here
    };

    const changeReviews = () => {
        // change reviews logic here
    };

    return (
        <div lang="en">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="header_pc">
                    <img src="img/logo_pc_header.svg" alt="" style={{ width: '176px', cursor: 'pointer' }} onClick={() => window.location.href='home.html'} />
                    <img src="img/cvtalog_button.svg" alt="" style={{ width: '146px', cursor: 'pointer' }} onClick={() => window.location.href='catalog.html'} />
                    <div className="header_pc_vision">
                        <input className="sgerch_pc" type="text" placeholder="Поиск товара" />
                        <img src="img/serch_header.svg" alt="" style={{ cursor: 'pointer' }} />
                    </div>
                    <div className="blocs_header_pc" onClick={() => window.location.href='personal_area.html'}>
                        <div className="bloc_header_pc">
                            <img src="svg/User.svg" alt="" />
                            <a style={{ fontSize: '10px', color: '#757575' }} onClick={() => window.location.href='personal_area.html'}>Кабинет</a>
                        </div>
                        <div className="bloc_header_pc" onClick={() => window.location.href='favorites.html'}>
                            <img src="svg/Heart.svg" alt="" />
                            <a style={{ fontSize: '10px', color: '#757575' }} onClick={() => window.location.href='favorites.html'}>Избранное</a>
                        </div>
                        <div className="bloc_header_pc" onClick={() => window.location.href='cart.html'}>
                            <img src="svg/Cart.svg" alt="" />
                            <a style={{ fontSize: '10px', color: '#757575' }} onClick={() => window.location.href='cart.html'}>Корзина</a>
                        </div>
                    </div>
                </div>
                <div className="" style={{ display: 'flex' }}>
                    <div className="slider-container">
                        <div className="thumbnails">
                            <button className="prev"><img src="svg/Round Alt Arrow Up.svg" alt="" /></button>
                            <div className="thumbnail"><img src="/photo_product/00001.png" alt="Thumbnail 1" /></div>
                            <div className="thumbnail"><img src="svg/Arrow.svg" alt="Thumbnail 2" /></div>
                            <div className="thumbnail"><img src="/photo_product/00001.png" alt="Thumbnail 3" /></div>
                            <button className="next"><img src="svg/Round Alt Arrow Down.svg" alt="" /></button>
                        </div>
                        <div className="slider">
                            <div className="slide"><img src="/photo_product/00001.png" alt="Slide 1" /></div>
                            <div className="slide"><img src="svg/Arrow.svg" alt="Slide 2" /></div>
                            <div className="slide"><img src="/photo_product/00001.png" alt="Slide 3" /></div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="name_product">Лист гипсоволокнистый KNAUF <br /> Суперпол, 600*1200*20мм</div>
                            <div className="top_cart_howcase">
                                <div className="top_star">
                                    <div className="top_cart_product">5.0</div>
                                    <div className="star_cart_product">
                                        <img src="svg/Star.svg" alt="star" />
                                        <img src="svg/Star.svg" alt="star" />
                                        <img src="svg/Star.svg" alt="star" />
                                        <img src="svg/Star.svg" alt="star" />
                                        <img src="svg/Star.svg" alt="star" />
                                    </div>
                                </div>
                                <div className="brend_cart_product">Бренд: Кнауф</div>
                            </div>
                            <div className="price_person">
                                <div className="price_pr">
                                    <div className="prise">610 ₽</div>
                                    <div className="pr"><u>шт</u></div>
                                    <div className="counter">
                                        <img src="svg/min.svg" alt="" className="min" onClick={decrement} />
                                        <span id="counterValue">1</span>
                                        <img src="svg/max.svg" alt="" className="max" onClick={increment} />
                                    </div>
                                </div>
                            </div>
                            <div className="like_cart_product">
                                <div className="like_cart_product">
                                    <button id="like_19" className="selector" aria-label="Отправить реакцию «нравится»" aria-pressed="false" data-id="1" style={{ width: '50px', height: '50px' }}>
                                        <svg className="like_no_1" width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="svg/like_no_1.svg">
                                            <path className="like_no_1" d="M15.8398 2.39496C13.013 -0.169205 10.2871 2.03882 9.27755 3.46336C8.26797 2.03882 5.54163 -0.169205 2.71481 2.39496C-0.112011 4.95912 1.87349 8.80536 3.2196 10.408C4.22918 11.6544 6.85456 14.361 9.27755 15.2158C11.7005 14.361 14.3254 11.6544 15.335 10.408C16.6811 8.80536 18.6666 4.95912 15.8398 2.39496Z" stroke="black" strokeWidth="2" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="button_cart_product">
                                    <button className="color-button red-button" onClick={() => changeColorAndText(this)}>В корзину</button>
                                </div>
                            </div>
                        </div>
                        <div className="delivery_var">
                            <hr />
                            <div className="delivery_base">
                                <div className="n1">
                                    <img src="svg/Box.svg" alt="" />
                                    <div>Доставка</div>
                                </div>
                                <div className="info_delivery_base">18.03 - 20.03, бесплатно</div>
                            </div>
                            <div className="delivery_fast">
                                <div className="n2">Экспресс-доставка</div>
                                <div className="info_delivery_fast">завтра, бесплатно от 5000₽, предоплата 100%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{ marginTop: '100px' }} />
                <div style={{ display: 'flex', paddingTop: '50px', borderTop: '1px solid #757575' }}>
                    <div className="pool_pc_cart_product_1" style={{ width: '500px' }}>
                        <a>Описание</a>
                        <div className="info">КНАУФ-суперпол — элемент пола (ЭП), представляет
                            собой изделие заводской готовности к поэлементной
                            сборке в конструкциях стяжек сборных оснований пола
                            КНАУФ. Элементы пола изготавливаются путем
                            склеивания двух влагостойких гипсоволокнистых
                            листов (ГВЛВ по ГОСТ Р 51829-2001) с размерами
                            1200х600х20 мм с взаимным смещением в двух
                            перпендикулярных направлениях и образованием
                            фальцев шириной 50 мм по периметру изделий.
                            Общая толщина ЭП — 20 мм. Применяется для
                            устройства сборного основания пола, в зданиях
                            различного назначения.</div>
                    </div>
                    <div className="pool_pc_cart_product_2">
                        <a>Характеристики</a>
                        <div className="characteristics">
                            {/* Characteristics content */}
                        </div>
                        <a>Размер упаковки</a>
                        <div className="characteristics">
                            {/* Package size content */}
                        </div>
                    </div>
                </div>
                <div className="" style={{ display: 'flex', alignItems: 'center', borderTop: '1px solid #757575' }}>
                    <div className="" style={{ marginRight: '70px' }}>
                        <div className="reviews">
                            {/* Reviews content */}
                        </div>
                        <div className="reviews_h">
                            {/* Reviews header content */}
                        </div>
                    </div>
                    <div className="" style={{ marginLeft: '70px' }}>
                        <div className="button_create_reviews">
                            <button className="create_reviews">Оставить отзыв</button>
                        </div>
                        <div className="reviews_users">
                            {/* Reviews users content */}
                        </div>
                    </div>
                </div>
                <div className="" style={{ height: '200px' }}></div>
                <div className="modal" id="modal">
                    <div className="modal-content">
                        {/* Modal content */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalArea;
