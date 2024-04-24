import React from 'react';


const Header = () => {
    return (
        <div className="header_pc flex flex-row justify-center items-center border-b-2 border-gray ">
            <img src="https://firebasestorage.googleapis.com/v0/b/swiftreplus.appspot.com/o/Compan_data%2Fcompany_logo%2Flogo_pc_header.svg?alt=media&token=6f9eb882-96ca-4067-bdc2-9a16b0318d13" alt="Logo" className="w-44 cursor-pointer mr-14" onClick={() => window.location.href='home.html'} />
            <img src="https://firebasestorage.googleapis.com/v0/b/swiftreplus.appspot.com/o/Compan_data%2Fcompany_logo%2Fcvtalog_button.svg?alt=media&token=20feac49-fcb1-4550-aa59-d7db9c08adac" alt="Catalog" className="w-36 cursor-pointer mx-10" onClick={() => window.location.href='catalog.html'} />
            <div className="header_pc_vision flex felx-row border-2 border-gray">
                <input className="sgerch_pc w-[519px]" type="text" placeholder="Поиск товара" />
                <img src="https://firebasestorage.googleapis.com/v0/b/swiftreplus.appspot.com/o/Compan_data%2Fcompany_logo%2Fserch_header.svg?alt=media&token=1868782a-f953-4c8d-b697-876760d8ab73" alt="Search" className="cursor-pointer" />
            </div>
            <div className="blocs_header_pc flex flex-row ml-12">
                <div className="bloc_header_pc" onClick={() => window.location.href='personal_area_setting.html'}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/swiftreplus.appspot.com/o/Compan_data%2Fcompany_logo%2FUser.svg?alt=media&token=906ecfbc-3898-4e91-b21f-e7b6764b752d" alt="User" />
                    <a className="text-xs text-gray-500 cursor-pointer" onClick={() => window.location.href='personal_area_setting.html'}>Кабинет</a>
                </div>
                <div className="bloc_header_pc mx-8" onClick={() => window.location.href='favorites.html'}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/swiftreplus.appspot.com/o/Compan_data%2Fcompany_logo%2FHeart.svg?alt=media&token=a6938fc7-2dd4-4d48-bb76-3b2e8875aae5" alt="Heart" />
                    <a className="text-xs text-gray-500 cursor-pointer" onClick={() => window.location.href='favorites.html'}>Избранное</a>
                </div>
                <div className="bloc_header_pc " onClick={() => window.location.href='cart.html'}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/swiftreplus.appspot.com/o/Compan_data%2Fcompany_logo%2FCart.svg?alt=media&token=44d260cd-e695-4162-8df0-68d90e03166b" alt="Cart" />
                    <a className="text-xs text-gray-500 cursor-pointer" onClick={() => window.location.href='cart.html'}>Корзина</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
