import React from 'react';
import Header from './Header';

const PersonalAreaMenu = () => {
    return (
        <div className="flex h-[700px] " >
            <div className="meny_personal_area border-r-2 border-gray w-[300px] h-fll py-14 px-8">
                <div className="a1 text-3xl text-bold mb-8" onClick={() => window.location.href='personal_area.html'}>Личный кабинет</div>
                <div className="a2 text-xl mb-8" onClick={() => window.location.href='personal_area.html'}>Мои данные</div>
                <div className="a2 text-xl mb-8" onClick={() => window.location.href='cart_edit.html'}>Способы оплаты</div>
                <div className="a2_activ text-xl mb-8" onClick={() => window.location.href='purchases.html'}>Покупки</div>
                <div className="a2 mb-8 text-xl" onClick={() => window.location.href='delivery.html'}>Доставки</div>
                <div className="exit_pc text-xl flex flex-row" onClick={() => {}}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/swiftreplus.appspot.com/o/Compan_data%2Fcompany_logo%2FLogout%202.svg?alt=media&token=081db559-59ee-4ef3-8a67-5d37175c148c" alt="" />
                    <a>Выйти</a>
                </div>
            </div>
        </div>
    );
};


const ProfileSettings = () => {
    return (
        <div className="bata px-10 py-10">
            <div className="setting_profile mb-10">
                <div className="footer">
                    <div className="name_block my-4 font-medium ">
                        <a>Мои данные</a>
                    </div>
                    <div className="name_block my-6 font-medium">
                        <a>Личная информация</a>
                    </div>
                    
                </div>
                <div className="input_profile_setting flex flex-row">
                    <div className="pool w-[367px] h-[97px] border-2 border-gray rounded-2xl  flex justify-center items-center flex-col">
                        <div className="name_input ">
                            <a>Имя</a>
                        </div>
                        <input type="name" name="name" placeholder="Иванов Иван" className="tlk-input text-center" required />
                    </div>
                    <div className="pool w-[367px] h-[97px] border-2 border-gray rounded-2xl  flex justify-center items-center flex-col ml-10">
                        <div className="name_input">
                            <a>Email</a>
                        </div>
                        <input type="login" name="login" placeholder="janedoe@mail.com" className="tlk-input text-center" required />
                    </div>
                </div>
                <div className="flex flex-row my-6">
                <div className="pool w-[367px] h-[97px] border-2 border-gray rounded-2xl  flex justify-center items-center flex-col  ">
                        <div className="name_input">
                            <a>Телефон</a>
                        </div>
                        <input type="phone" name="phone" placeholder="+7 (900) 000-00-00" className="tlk-input text-center" required />
                    </div>
                    <div className="pool w-[367px] h-[97px] border-2 border-gray rounded-2xl  flex justify-center items-center flex-col ml-10">
                        <div className="name_input">
                            <a>ИНН</a>
                        </div>
                        <input type="INN" name="INN" placeholder="0000000000" className="tlk-input text-center" required />
                    </div>
                </div>
            </div>
           
            <div className="setting_password">
                <div className="name_password_review font-medium mb-4">
                    <a>Изменить пароль</a>
                </div>
                <div className="password_review flex flex-row">
                    <div className="block_password_review w-[195px]">
                        <input className='w-[195px] h-[60px] border-gray border-2 rounded-lg'/>
                        <div className="name_block_password_review text-center">
                            <a>Старый пароль</a>
                        </div>
                        <div className="input_block_password_review">
                            <input type="password" name="old_password" placeholder="" />
                        </div>
                    </div>
                    <div className="block_password_review w-[195px] mx-6">
                        <input className='w-[195px] h-[60px] border-gray border-2 rounded-lg'/>
                        <div className="name_block_password_review text-center">
                            <a>Новый пароль</a>
                        </div>
                        <div className="input_block_password_review">
                            <input type="password" name="old_password" placeholder="" />
                        </div>
                    </div>
                    <div className="block_password_review w-[195px] ">
                        <input className='w-[195px] h-[60px] border-gray border-2 rounded-lg'/>
                        <div className="name_block_password_review text-center">
                            <a>Повторите пароль</a>
                        </div>
                        <div className="input_block_password_review">
                            <input type="password" name="old_password" placeholder="" />
                        </div>
                    </div>
                  
                </div>
                <button className="color-button red-button w-[342px] h-[80px] bg-black text-white rounded-lg">Сохранить изменения</button>
                
            </div>
        </div>
    );
};




const PersonalAreaPage = () => {
    return (
        <>
            <Header/>
           <div className='flex '>
           <PersonalAreaMenu />
            <ProfileSettings/>
           </div>
        </>
    );
};

export default PersonalAreaPage;
