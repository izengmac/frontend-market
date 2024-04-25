import React from 'react';


const CartEdit = () => {
    return (
        <div>
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
                <div className="meny_personal_area">
                    <div className="a1" onClick={() => window.location.href = 'personal_area.html'}>Личный кабинет</div>
                    <div className="a2" onClick={() => window.location.href = 'personal_area.html'}>Мои данные</div>
                    <div className="a2_activ" onClick={() => window.location.href = 'cart_edit.html'}>Способы оплаты</div>
                    <div className="a2" onClick={() => window.location.href = 'purchases.html'}>Покупки</div>
                    <div className="a2" onClick={() => window.location.href = 'delivery.html'}>Доставки</div>
                    <div className="exit_pc">
                        <img src="svg/Logout 2.svg" alt="" />
                        <a>Выйти</a>
                    </div>
                </div>
                <div>
                    <div className="data_pay">
                        <div className="name_user" style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <a style={{ fontSize: '20px', marginLeft: '40px' }}>Способы оплаты</a>
                        </div>
                        <div className="cart" style={{ fontSize: '20px', marginLeft: '40px' }}>
                            <div className="graf_name">
                                <p>Мир *9033</p>
                            </div>
                            <img src="svg/Line 18.svg" alt="" />
                            <div className="graf_data">
                                <img src="svg/Trash.svg" alt="del" />
                            </div>
                        </div>
                        <div className="cross">
                            <a style={{ fontSize: '20px', marginLeft: '20px', fontWeight: '600' }}>Добавить карту</a>
                        </div>
                        <div className="cart_pagers">
                            <div className="cart_1">
                                <div className='visa_mc_mir'>
                                    <img src="img/carts.png" alt="#" />
                                </div>
                                <div className="num_cart" style={{ marginTop: '15px', marginBottom: '15px' }}>
                                    <a style={{ color: '#757575', fontSize: '13px' }}>Номер карты</a>
                                    <input type="num_cart" name="num_cart" />
                                </div>
                                <div className="data_cvv">
                                    <div className="day_action">
                                        <a style={{ color: '#757575', fontSize: '13px' }}>Действует до</a>
                                        <div className="input_day">
                                            <input type="month_action" name="month" placeholder="мм" />
                                            <a style={{ margin: '5px', color: '#757575' }}>/</a>
                                            <input type="year" name="year" placeholder="гг" />
                                        </div>
                                    </div>
                                    <div className="cvv">
                                        <a style={{ color: '#757575', fontSize: '13px' }}>CVV CVC</a>
                                        <input type="CVV" name="CVV" />
                                    </div>
                                </div>
                            </div>
                            <div className="button">
                                <button onClick="">Добавить карту</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartEdit;
