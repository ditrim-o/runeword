export default function Cart(props) {

    return (
        <tr>
            <td><img src={props.image} alt={props.title} /></td>
            <td>{props.title}</td>
            <td>{props.cost}$</td>
            <td>
                <button type="button" className="more" articul={props.articul}>+</button>
                {props.quantity}
                <button type="button" className="less" articul={props.articul}>-</button>
                <button type="button" className="delete" articul={props.articul}>del</button>
            </td>
            <td>{props.quantity * props.cost}$</td>
        </tr>
    );
}