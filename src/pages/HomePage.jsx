//lib
import React from 'react';
//components
import Header from "../components/Header";
import Content from "../components/Сontent";
//style
import styles from "./HomePage.module.scss";

function HomePage() {
    return (
        <div className={styles.containerHomepage}>
            <div>
                <Header />
                <Content />
            </div>
        </div>
    );
}

export default HomePage;
