import { useDispatch } from "react-redux";
import { clear } from "../store/operationSlice";

const ClearButton = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(clear());
    };

    return (
        <>
            <button
            onClick={handleClick}
            id="clear"
            className={`col-span-2 bg-red-600 text-white p-4 rounded font-bold text-lg h-12 w-24`}>
                AC
            </button>
        </>
    );
};

export default ClearButton;