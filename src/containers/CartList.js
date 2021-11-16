import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectGoods
} from '../store/goodsSlice';

import {
    selectCart
} from '../store/cartSlice';
import Cart from '../components/Cart';
import { increment, minus, del } from '../store/cartSlice';
function CartList() {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
    // переиндексирую массив товара
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {});

    const total = Object.keys(cart).reduce((acc, item) => {
        acc += cart[item] * goodsObj[item]['cost'];
        return acc;
    }, 0);

    const tableHandler = (e) => {
        let target = e.target;
        if (target.classList.contains('more')) {
            dispatch(increment(target.getAttribute('articul')));
        }
        if (target.classList.contains('less')) {
            dispatch(minus(target.getAttribute('articul')));
        }
        if (target.classList.contains('delete')) {
            dispatch(del(target.getAttribute('articul')));
        }
    }


    return (

        <div>
            <div className={Object.keys(cart).length > 0 ? 'active' : 'hidden'}>
                <table onClick={tableHandler} className="cart">
                    <thead>
                        <tr>
                            <td>Изображение</td>
                            <td>Название</td>
                            <td>Цена</td>
                            <td>Количество</td>
                            <td>Общая стоимость</td>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(cart).map(item =>
                            <Cart
                                key={item + goodsObj[item]['title']}
                                title={goodsObj[item]['title']}
                                quantity={cart[item]}
                                cost={goodsObj[item]['cost']} image={goodsObj[item]['image']}
                                articul={item}
                            />)}
                    </tbody>
                </table>
                <div className="total">Итого: {total}$</div>
            </div>
        </div>
    );
}

export default CartList;