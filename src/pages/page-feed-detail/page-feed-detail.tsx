import React from 'react';
import styles from './page-feed-detail.module.css';
import AboutOrder from "../../components/modals-inner/about-order/about-order";

const PageFeedDetail = (): JSX.Element => {
    return (
        <div className={'container'}>
            <div className={styles.body}>
                <AboutOrder/>
            </div>
        </div>

    );
};

export default PageFeedDetail;