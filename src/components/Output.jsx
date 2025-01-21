import { useSelector } from "react-redux";

const Output = () => {
    const expression = useSelector(state => state.operation.expression);
    const result = useSelector(state => state.operation.result);
    return (
        <div
        className="bg-black text-green-500 text-right p-4 rounded-lg shadow-lg mb-4 flex flex-col justify-end h-24 w-full" >
            <p 
            className="text-gray-400 text-sm">
                {expression}
            </p>
            <p 
            id="display"
            className="text-2xl" >
                {result}
            </p>
        </div>
    );
};

export default Output;