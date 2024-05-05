import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./style.module.css";
import newsBg from "../../img/background_entrance.jpg"; // импортируем изображение
import { Header } from "../header/Header";
import newsPhoto1 from "../../img/schet.png";
import newsPhoto2 from "../../img/serch_header.svg";
import allowImg from "../../img/Vector.png";

export const AboutUs = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1400 });

  return (
    <>
      <div className={styles["news_page"]}>
        <Header />
        <div className={styles["common_page_main"]}>
          <div className={styles["common_page_bg-container"]}>
            {/* <img src={newsBg} alt="bg" className={styles["news_page-bg"]} /> */}
            {/* <div className={styles["common_page_bg-blue-layer"]} /> */}
            <div className={styles["common_page-title"]}>
              <span>О НАС</span>
              <img
                src={allowImg}                      
                alt="allow"
                className={styles["news_page-allow"]}
              />
            </div>
          </div>
          <div className={styles["news_page-text"]}>
            <span>
              Наше предназначение заключается в содействии успешному росту и
              развитию строительного бизнеса и отрасли в целом через повышение
              эффективности путем внедрения комплексных инновационных решений.
              <br />
              <br />
              Торговый парк «КРТ» - крупнейший оптовый маркетплейс строительных
              товаров. Здесь собраны лучшие предложения от проверенных
              продавцов. Также у нас крупнейшая площадка по продаже, участков
              под застройку. Нет больше необходимости искать товары, материалы,
              технику, в разных местах. Мы создали уникальную систему,
              комфортную для всех участников. Покупатели получат удобный сервис,
              безопасную оплату, огромный ассортимент. Продавцы – высокие
              продажи, снижение затрат на рекламу, логистику и узнаваемость
              бренда. Выбирайте лучшие условия и цены от разных поставщиков в
              КРТ парке.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs