import {useSelector} from "react-redux";
import {Navigate, useLocation} from "react-router-dom";


const Protected = ({onlyUnAuth = false, component}) => {
    const isAuthChecked = useSelector(store => store.userReducer.isAuthChecked);
    const user = useSelector(store => store.userReducer.userData.email);
    const location = useLocation();

    if (!isAuthChecked) {
        // Запрос еще выполняется
        // Выводим прелоадер
        return null;
    }

    if (onlyUnAuth && user) {
        // Пользователь авторизован, но роут предназначен для неавторизованного пользователя
        // Делаем редирект на главную страницу или на тот адрес, что записан в location.state.from
        const {from} = location.state || {from: {pathname: "/"}};
        return <Navigate to={from} replace/>
    }

    if (!onlyUnAuth && !user) {
        return <Navigate to="/login" state={{from: location}}/>;
    }

    // !onlyUnAuth && user Пользователь авторизован и роут для авторизованного пользователя

    return component;
}

export const OnlyAuth = Protected;
export const OnlyUnAuth = ({component}) => (
    <Protected onlyUnAuth={true} component={component}/>
);