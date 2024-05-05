import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./style.module.css";
import { Header } from "../header/Header";
import newsPhoto1 from "../../img/Putin.png";
import newsPhoto2 from "../../img/Event.png";
import allowImg from "../../img/Vector.png";

export const News = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1400 });

  return (
    <div className={styles["news_page"]}>
      <Header />
      <div className={styles["common_page_main"]}>
        <div className={styles["common_page_bg-container"]}>
          {/* <img src={newsBg} alt="bg" className={styles["news_page-bg"]} /> */}
          {/* <div className={styles["common_page_bg-blue-layer"]} /> */}
          <span>Партнеры</span>
          <img
            src={allowImg}
            alt="allow"
            className={styles["news_page-allow"]}
          />
        </div>
        <div className={styles["news_container"]}>
          <div className={styles["news_container-item"]}>
            
              <img
                src={newsPhoto1}
                alt="photo_news"
                className={styles["news_container-item-img"]}
              />
               <img
                src={newsPhoto1}
                alt="photo_news"
                className={styles["news_container-item-img"]}
              />
               <img
                src={newsPhoto1}
                alt="photo_news"
                className={styles["news_container-item-img"]}
              />
               <img
                src={newsPhoto1}
                alt="photo_news"
                className={styles["news_container-item-img"]}
              />
               <img
                src={newsPhoto1}
                alt="photo_news"
                className={styles["news_container-item-img"]}
              />
        
          </div>
          <div className={styles["news_container-item"]}> 
              <img
                src={newsPhoto2}
                alt="photo_news"
                className={styles["news_container-item-img"]}
              />
              <img
                src={newsPhoto2}
                alt="photo_news"
                className={styles["news_container-item-img"]}
              />
              <img
                src={newsPhoto2}
                alt="photo_news"
                className={styles["news_container-item-img"]}
              />
              <img
                src={newsPhoto2}
                alt="photo_news"
                className={styles["news_container-item-img"]}
              />
              <img
                src={newsPhoto2}
                alt="photo_news"
                className={styles["news_container-item-img"]}
              />
            
          </div>
        </div>{" "}
        *
      </div>
    </div>
  );
};

export default News;
