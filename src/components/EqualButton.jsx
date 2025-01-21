import { useDispatch } from "react-redux";
import { evaluateExpression, equal } from "../store/operationSlice";

const EqualButton = ({className = ""}) => {
    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(evaluateExpression());
        dispatch(equal());
    };

    return (
        <>
            <button
            id="equals"
            onClick={handleClick}
            className={`bg-blue-700 text-white p-4 rounded text-lg ${className}`}>
                =
            </button>
        </>
    );
};

export default EqualButton;