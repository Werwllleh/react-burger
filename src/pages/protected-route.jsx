import {useSelector} from "react-redux";
import {Navigate, useLocation} from "react-router-dom";

const Protected = ({onlyUnAuth = false, component, ...rest}) => {
    const isAuthChecked = useSelector(store => store.user.isAuthChecked);
    const user = useSelector(store => store.user.user);
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
        return <Navigate to={from}/>
    }

    if (!onlyUnAuth && !user) {
        return <Navigate to="/login" state={{from: location}}/>;
    }

    // !onlyUnAuth && user Пользователь авторизован и роут для авторизованного пользователя

    return component({...rest});
}

export const OnlyAuth = Protected;
export const OnlyUnAuth = (props) => <Protected onlyUnAuth={true} {...props} />