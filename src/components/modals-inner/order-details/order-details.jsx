import React from 'react';
import styles from './order-details.module.css';

const OrderDetails = () => {
    return (
        <div className={styles.body}>
            <div className={`${styles.order_num} text text_type_digits-large`}>
                034536
            </div>
            <div className={`${styles.order_text} text text_type_main-medium`}>
                идентификатор заказа
            </div>
            <div className={styles.order_success}>
                <svg xmlns="http://www.w3.org/2000/svg" width="122" height="122" viewBox="0 0 122 122" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.3664 48.3873C10.5445 56.5044 10.5445 67.4957 16.3664 75.6127L36.3336 103.452C42.1554 111.569 52.4748 114.965 61.8947 111.865L94.2023 101.231C103.622 98.1309 110 89.2387 110 79.2055V44.7945C110 34.7612 103.622 25.8691 94.2023 22.7687L61.8947 12.1351C52.4748 9.03464 42.1554 12.4311 36.3336 20.5482L16.3664 48.3873Z" fill="url(#paint0_radial_70878_2881)" fillOpacity="0.25"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M111.944 50.453C116.019 57.5983 116.019 66.4017 111.944 73.547L96.5996 100.453C92.5247 107.598 84.994 112 76.8442 112H46.1558C38.006 112 30.4753 107.598 26.4004 100.453L11.0562 73.547C6.98128 66.4017 6.98128 57.5983 11.0562 50.453L26.4004 23.547C30.4753 16.4017 38.006 12 46.1558 12L76.8442 12C84.994 12 92.5247 16.4017 96.5996 23.547L111.944 50.453Z" fill="url(#paint1_radial_70878_2881)" fillOpacity="0.25"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M51.9249 31.9109C57.3362 28.0297 64.6638 28.0297 70.0751 31.9109L88.6345 45.2224C94.0459 49.1036 96.3102 55.9832 94.2433 62.2632L87.1542 83.8016C85.0873 90.0815 79.1592 94.3333 72.4703 94.3333H49.5296C42.8408 94.3333 36.9127 90.0815 34.8458 83.8016L27.7567 62.2632C25.6898 55.9832 27.9541 49.1036 33.3655 45.2224L51.9249 31.9109Z" fill="url(#paint2_radial_70878_2881)" fillOpacity="0.25"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M81.3122 48.5959C82.1999 49.4172 82.2327 50.7806 81.3852 51.641L58.0519 75.3333C57.6272 75.7646 57.0371 76.0059 56.422 75.9999C55.8069 75.9939 55.222 75.741 54.8063 75.3016L42.5841 62.3785C41.7548 61.5016 41.8159 60.1392 42.7206 59.3354C43.6253 58.5316 45.031 58.5908 45.8604 59.4677L56.4773 70.6934L78.1703 48.6667C79.0177 47.8062 80.4244 47.7745 81.3122 48.5959Z" fill="#F2F2F3"/>
                    <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use transform="translate(-0.156667) scale(0.00333333)"/>
                        </pattern>
                        <radialGradient id="paint0_radial_70878_2881" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(61 62) rotate(-46.1458) scale(70.7248 53.2019)">
                            <stop stopColor="#801AB3" stopOpacity="0"/>
                            <stop offset="1" stopColor="#4C4CFF"/>
                        </radialGradient>
                        <radialGradient id="paint1_radial_70878_2881" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(61.5 62) rotate(-43.0632) scale(73.2274 55.0025)">
                            <stop stopColor="#801AB3" stopOpacity="0"/>
                            <stop offset="1" stopColor="#4C4CFF"/>
                        </radialGradient>
                        <radialGradient id="paint2_radial_70878_2881" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(61 61.6667) rotate(136.146) scale(47.1499 35.4679)">
                            <stop stopColor="#801AB3" stopOpacity="0"/>
                            <stop offset="1" stopColor="#4C4CFF" stopOpacity="0.5"/>
                        </radialGradient>
                        <image id="image0_70878_2881" width="394" height="300" />
                    </defs>
                </svg>
            </div>
            <div className={`${styles.footer} text text_type_main-default`}>
                <div>Ваш заказ начали готовить</div>
                <div className={'text_color_inactive'}>Дождитесь готовности на орбитальной станции</div>
            </div>
        </div>
    );
};

export default OrderDetails;