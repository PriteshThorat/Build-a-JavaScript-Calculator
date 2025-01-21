import { addExpression } from "../store/operationSlice";
import { useDispatch } from "react-redux";

const OperatorButton = ({text, id, opeator}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addExpression(opeator));
    };

    return (
        <button
        onClick={handleClick}
        id={id}
        className={`bg-gray-700 text-white p-4 rounded text-lg h-12 w-12`}>
            {text}
        </button>
    );
};

export default OperatorButton;