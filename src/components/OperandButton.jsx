import { addExpression } from "../store/operationSlice";
import { useDispatch } from 'react-redux';

const OperandButton = ({height = "h-12", width = "w-12", text, id, className = ""}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addExpression(text));
    };

    return (
        <>
            <button
            id={id}
            onClick={handleClick}
            className={`bg-gray-600 text-white p-4 rounded text-lg ${height} ${width} ${className}`}>
                {text}
            </button>
        </>
    );
};

export default OperandButton;