import React from 'react';
import Header from './Header';

function PersonalArea() {
  return (
    <div>
    <Header/>
      <div className='flex flex-row ' >
        <div className="meny_personal_area w-[25%] h-[650px] border-gray border-r-2">
          <div className="a1">Избранное</div>
        </div>
        <div>
          <div className=' flex mt-[20px] px-16 '>
            <div className="showcase_home_block ">
              <div className="photo_like">
                <img className="photo_product_showcase_home" src="https://firebasestorage.googleapis.com/v0/b/swiftreplus.appspot.com/o/Compan_data%2Fcompany_logo%2FRectangle%2015.png?alt=media&token=e33b3196-97cb-42fe-aacc-0325129c2a3e" alt="#" />
                <button id="like_1" className="selector" aria-label="Отправить реакцию «нравится»" aria-pressed="false" data-id="1">
                  <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="svg/like_no.svg">
                    <path d="M15.8398 2.39496C13.013 -0.169205 10.2871 2.03882 9.27755 3.46336C8.26797 2.03882 5.54163 -0.169205 2.71481 2.39496C-0.112011 4.95912 1.87349 8.80536 3.2196 10.408C4.22918 11.6544 6.85456 14.361 9.27755 15.2158C11.7005 14.361 14.3254 11.6544 15.335 10.408C16.6811 8.80536 18.6666 4.95912 15.8398 2.39496Z" stroke="black" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className="price_person">
                <div className="price_showcase_home font-light">610 ₽</div> <div className="person_text_showcase_home">шт.</div>
              </div>
              <br />
              <div className="an_showcase_home">Лист гипсоволокнистый  KNAUF <br /> Суперпол, 600*1200*20мм </div>
              <div className="top_cart">
                <div className="top_star flex flex-row">
                  <div className="top">5.0</div>
                  <div className="star flex flex-row">
                    <img src="https://firebasestorage.googleapis.com/v0/b/swiftreplus.appspot.com/o/Compan_data%2Fcompany_logo%2FStar.svg?alt=media&token=d9301b0a-dc25-4fcd-8b11-d59e71e25d1e" alt="star" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/swiftreplus.appspot.com/o/Compan_data%2Fcompany_logo%2FStar.svg?alt=media&token=d9301b0a-dc25-4fcd-8b11-d59e71e25d1e" alt="star" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/swiftreplus.appspot.com/o/Compan_data%2Fcompany_logo%2FStar.svg?alt=media&token=d9301b0a-dc25-4fcd-8b11-d59e71e25d1e" alt="star" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/swiftreplus.appspot.com/o/Compan_data%2Fcompany_logo%2FStar.svg?alt=media&token=d9301b0a-dc25-4fcd-8b11-d59e71e25d1e" alt="star" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/swiftreplus.appspot.com/o/Compan_data%2Fcompany_logo%2FStar.svg?alt=media&token=d9301b0a-dc25-4fcd-8b11-d59e71e25d1e" alt="star" />
                  </div>
                </div>
                <div className="cart_by"></div>
              </div>
              <button className="color-button red-button w-[235px] h-[43.36px] bg-black text-white rounded-lg"> Купить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalArea;
