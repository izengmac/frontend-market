import React from 'react';


const BuyScreen = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="header_pc">
                <img src="img/logo_pc_header.svg" alt="" style={{ width: '176px', cursor: 'pointer' }} onClick={() => window.location.href = 'home.html'} />
                <img src="img/cvtalog_button.svg" alt="" style={{ width: '146px', cursor: 'pointer' }} onClick={() => window.location.href = 'catalog.html'} />

                <div className="header_pc_vision">
                    <input className="sgerch_pc" type="text" placeholder="Поиск товара" />
                    <img src="img/serch_header.svg" alt="" style={{ cursor: 'pointer' }} />
                </div>

                <div className="blocs_header_pc" onClick={() => window.location.href = 'personal_area.html'}>
                    <div className="bloc_header_pc">
                        <img src="svg/User.svg" alt="" />
                        <a style={{ fontSize: '10px', color: '#757575' }} onClick={() => window.location.href = 'personal_area.html'}>Кабинет</a>
                    </div>
                    <div className="bloc_header_pc" onClick={() => window.location.href = 'favorites.html'}>
                        <img src="svg/Heart.svg" alt="" />
                        <a style={{ fontSize: '10px', color: '#757575' }} onClick={() => window.location.href = 'favorites.html'}>Избранное</a>
                    </div>
                    <div className="bloc_header_pc" onClick={() => window.location.href = 'cart.html'}>
                        <img src="svg/Cart.svg" alt="" />
                        <a style={{ fontSize: '10px', color: '#757575' }} onClick={() => window.location.href = 'cart.html'}>Корзина</a>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex' }}>
                <div>
                    <div className="buy_var">
                        <div style={{ display: 'flex' }}>
                            <img src="svg/Banknote 2.svg" alt="" style={{ marginLeft: '20px', marginRight: '5px', width: '30px' }} />
                            <a style={{ fontSize: '20px', fontWeight: 'bold' }}>Способ оплаты</a>
                        </div>
                        {/* Способы оплаты */}
                        <div className="buy_var_parts" style={{ marginRight: '40px', borderBottom: '1px solid #E0E0E0' }}>
                            <div className="block"  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                <a style={{ fontSize: '13px', fontWeight: '600' }}>Карта</a>
                                <a style={{ fontSize: '13px', fontWeight: '600' }}>7345</a>
                            </div>
                            <div className="block selected" >
                                <img src="svg/sbp.png" alt="" style={{ width: '110px', marginTop: '5px' }} />
                            </div>
                            <div className="block" >
                                <img src="svg/create_cart.png" alt="" style={{ width: '110px', marginTop: '5px' }} />
                            </div>
                            <div className="block" >
                                <img src="img/schet.png" alt="" style={{ width: '110px', marginTop: '3px' }} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div style={{ marginLeft: '20px', marginTop: '20px', marginBottom: '10px', fontWeight: '600' }}>Выбор поставщика</div>
                        <div className="supplier" style={{ display: 'flex', marginBottom: '5px' }}>
                            <div>
                                <div style={{ display: 'flex' }}>
                                    <input type="checkbox" id="checkbox1" name="checkbox" value="checkbox1" />
                                    <div className="supplier_name">Поставщик 1</div>
                                </div>
                                <div className="supplier_name_data">Дата доставки: 18 марта</div>
                            </div>
                            <div style={{ marginLeft: '20px' }}>
                                <div className="photo_name" style={{ marginLeft: '60px' }}>
                                    <img src="/photo_product/00001.png" alt="" style={{ width: '74px', height: '74px' }} />
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <a className="name_pr" style={{ fontSize: '12px', marginTop: '0px' }}>Лист гипсоволокнистый KNAUF <br /> Суперпол, 600*1200*20мм</a>
                                        <a className="name_pr" style={{ fontSize: '16px', marginTop: '0px', fontWeight: '800', marginTop: '3px' }}>610 ₽</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* More supplier entries */}
                    </div>
                </div>

                <div style={{ borderLeft: '1px solid #E0E0E0', height: '70vh', paddingLeft: '40px', paddingTop: '0px' }}>
                    <div className="dilivery_block" style={{ width: '300px', border: 'none' }}>
                        <div className="name_edit" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginBottom: '30px', marginLeft: '-43px' }}>
                            <img src="svg/Calendar.svg" alt="" style={{ marginRight: '5px', width: '30px' }} />
                            <a className="p1" style={{ fontSize: '20px' }}>Ожидаемая дата доставки</a>
                        </div>
                        <a className="p2">18 марта</a>
                        <br />
                        <a className="p3">1 товар</a>
                        <div className="photo_name">
                            <img src="/photo_product/00001.png" alt="" />
                            <a className="name_pr">Лист гипсоволокнистый KNAUF <br /> Суперпол, 600*1200*20мм</a>
                        </div>
                        <div className="price">
                            <a>610 ₽</a>
                        </div>
                        <div style={{ display: 'none' }}>
                            <div className="b black-border" id="block1">18.08</div>
                            <div className="b" id="block2">18.08</div>
                            <div className="b" id="block3">18.08</div>
                            <div className="b" id="block4">18.08</div>
                            <div className="b" id="block5">18.08</div>
                        </div>
                    </div>
                    <div className="result" style={{ background: 'white', borderRadius: '20px', padding: '10px 0px', marginTop: '1px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 20px', alignSelf: 'center' }}>
                            <div style={{ fontSize: '20px', fontWeight: '600' }}>Ваша корзина</div>
                            <div style={{ color: '#757575', fontSize: '11px' }}>1 товар</div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '5px 20px' }}>
                            <div style={{ fontSize: '14px', fontWeight: '600' }}>Товары (1)</div>
                            <div style={{ fontSize: '16px', fontWeight: '800' }}>610 ₽</div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '5px 20px' }}>
                            <div style={{ fontSize: '14px', fontWeight: '600' }}>Итого</div>
                            <div style={{ fontSize: '16px', fontWeight: '800' }}>610 ₽</div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <button className="by_next">Продолжить</button>
                            <a style={{ fontSize: '10px', marginTop: '10px', marginBottom: '40px', color: '#757575' }}>Доступные способы и время доставки можно выбрать <br /> при оформлении заказа</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyScreen;
