import { ClearButton, EqualButton, OperandButton, OperatorButton } from './index'

const Input = () => {
    return (
            <div className='grid grid-cols-4 gap-1'>
                <ClearButton />
                <OperatorButton text="/" id="divide" opeator="/" />
                <OperatorButton text="X" id="multiply" opeator="*" />
                <OperandButton text="7" id="seven" />
                <OperandButton text="8" id="eight" />
                <OperandButton text="9" id="nine" />
                <OperatorButton text="-" id="subtract" opeator="-" />
                <OperandButton text="4" id="four"/>
                <OperandButton text="5" id="five" />
                <OperandButton text="6" id="six" />
                <OperatorButton text="+" id="add" opeator="+" />
                <OperandButton text="1" id="one" />
                <OperandButton text="2" id="two" />
                <OperandButton text="3" id="three" />
                <EqualButton className="row-span-2" />
                <OperandButton text="0" id="zero" className="col-span-2" height = "h-12" width = "w-24"/>
                <OperandButton text="." id="decimal" />
                <a href="https://github.com/PriteshThorat/Build-a-JavaScript-Calculator" target="_blank" rel="noopener noreferrer" className="col-span-4 text-center text-blue-500 underline">
                    View Source Code
                </a>
            </div>
    );
};

export default Input;