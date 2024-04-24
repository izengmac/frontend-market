import React from 'react';
import '../style_setting_pc.css';


const MenuPersonalArea = () => {
    return (
        <div className="meny_personal_area flex-1 flex flex-row">
            <div className="categories border-2 border-gray">
                <div className="a1">Каталог</div>
                <div className="categories_block">
                    <hr />
                    <div className="data_categories">
                        <div className="name_categories">Акции и скидки</div>
                        <span>&gt;</span>
                    </div>
                </div>
                <div className="categories_block">
                    <hr />
                    <div className="data_categories">
                        <div className="name_categories">Строительные материалы</div>
                        <span>&gt;</span>
                    </div>
                </div>
                <div className="categories_block">
                    <hr />
                    <div className="data_categories">
                        <div className="name_categories">Кровля и фасад</div>
                        <span>&gt;</span>
                    </div>
                </div>
                <div className="categories_block">
                    <hr />
                    <div className="data_categories">
                        <div className="name_categories">Отделочные материалы</div>
                        <span>&gt;</span>
                    </div>
                </div>
                {/* Repeat the above structure for other categories */}
            </div>
            <div className="categories_parths">
                <div className="categories_parths_block">
                    <div className="data_categories_parths">
                        <span>&lt;</span>
                        <div className="name_categories_parths" style={{ marginRight: '90px', fontWeight: 600 }}>Строительные материалы</div>
                    </div>
                    <hr />
                    <div className="data_categories_parths">
                        <div className="name_categories_parths">Гипсокартон (ГКЛ)</div>
                        <span>&gt;</span>
                    </div>
                </div>
                <div className="categories_parths_block">
                    <hr />
                    <div className="data_categories_parths">
                        <div className="name_categories_parths">Древесно-плитный материал</div>
                        <span>&gt;</span>
                    </div>
                </div>
                <div className="categories_parths_block">
                    <hr />
                    <div className="data_categories_parths">
                        <div className="name_categories_parths">Металлопрокат</div>
                        <span>&gt;</span>
                    </div>
                </div>
                {/* Repeat the above structure for other category paths */}
            </div>
            <div className="showcase">
                <div className="showcase_block">
                    <div className="photo_showcase" onClick={() => window.location.href = 'cart_product.html'}>
                        <img className="photo_product_showcase_home" src="/photo_product/00001.png" alt="#" />
                    </div>
                    <br />
                    <div className="an_showcase" onClick={() => window.location.href = 'cart_product.html'}>Лист гипсоволокнистый  KNAUF <br /> Суперпол, 600*1200*20мм </div>
                    <div className="top_cart_howcase" onClick={() => window.location.href = 'cart_product.html'}>
                        <div className="price_person_showcase">
                            <div className="prise_block">
                                <div className="price_showcase_home">610 ₽</div>
                                <div className="person_text_showcase_home">шт.</div>
                            </div>
                            <div className="availability_status">В наличии</div>
                        </div>
                        <div className="brend">
                            <div className="top_star">
                                <div className="top">5.0</div>
                                <div className="star">
                                    <img src="svg/Star.svg" alt="star" />
                                    <img src="svg/Star.svg" alt="star" />
                                    <img src="svg/Star.svg" alt="star" />
                                    <img src="svg/Star.svg" alt="star" />
                                    <img src="svg/Star.svg" alt="star" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="button_by">
                        <button className="color-button red-button" >В корзину</button>
                    </div>
                    <div className="prise_showcase_have_like">
                        <div className="prise_showcase_have">
                            <div className="like">
                                <button id="like_1" className="selector" aria-label="Отправить реакцию «нравится»" aria-pressed="false" data-id="1">
                                    <svg className="like_no_1" width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="svg/like_no_1.svg">
                                        <path className="like_no_1" d="M15.8398 2.39496C13.013 -0.169205 10.2871 2.03882 9.27755 3.46336C8.26797 2.03882 5.54163 -0.169205 2.71481 2.39496C-0.112011 4.95912 1.87349 8.80536 3.2196 10.408C4.22918 11.6544 6.85456 14.361 9.27755 15.2158C11.7005 14.361 14.3254 11.6544 15.335 10.408C16.6811 8.80536 18.6666 4.95912 15.8398 2.39496Z" stroke="black" strokeWidth="2" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuPersonalArea;
