import React from'react';

const PersonalAreaMenu = () => {
    return (
        <div className="flex h-[700px] " >
            <div className="meny_personal_area border-r-2 border-gray w-[350px] h-fll py-14 px-8">
                <div className="a1 text-3xl text-bold mb-8" onClick={() => window.location.href='personal_area.html'}>Личный кабинет</div>
                <div className="a2 text-xl mb-8" onClick={() => window.location.href='personal_area.html'}>Мои данные</div>
                <div className="a2 text-xl mb-8" onClick={() => window.location.href='cart_edit.html'}>Заказы клиентов</div>
                <div className="a2_activ text-xl mb-8" onClick={() => window.location.href='purchases.html'}>Список поставщиков</div>
                <div className="a2 mb-8 text-xl" onClick={() => window.location.href='delivery.html'}>Добавить поставщика</div>
                <div className="a2 mb-8 text-xl" onClick={() => window.location.href='delivery.html'}>Предложения от поставщиков</div>
                <div className="a2 mb-8 text-xl" onClick={() => window.location.href='delivery.html'}>Контроль поставщика</div>
                <div className="a2 mb-8 text-xl" onClick={() => window.location.href='delivery.html'}>Прайс-лист поставщиков</div>
                <div className="a2 mb-8 text-xl" onClick={() => window.location.href='delivery.html'}>Карточки товаров</div>
                <div className="exit_pc text-xl flex flex-row" onClick={() => {}}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/swiftreplus.appspot.com/o/Compan_data%2Fcompany_logo%2FLogout%202.svg?alt=media&token=081db559-59ee-4ef3-8a67-5d37175c148c" alt="" />
                    <a>Выйти</a>
                </div>
            </div>
        </div>
    );
};

export default PersonalAreaMenu;