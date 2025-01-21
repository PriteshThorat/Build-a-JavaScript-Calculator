import { createSlice } from "@reduxjs/toolkit";
import { evaluate } from "mathjs";

const initialState ={
    expression: "",
    result: 0
};

const operantionSlice = createSlice({
    name: "operation",
    initialState,
    reducers: {
        addExpression: (state, action) => {
            const lastChar = state.expression.slice(-1);

            if (/[\+\-\*\/]/.test(action.payload) && /[\+\-\*\/]/.test(lastChar)) {
                if (action.payload === "-" && lastChar !== "-") {
                    state.expression += action.payload;
                    return;
                }

                const trimmedExpression = state.expression.replace(/[\+\-\*\/]+$/, "");
                state.expression = trimmedExpression + action.payload;
                return;
            }

            const lastNumber = state.expression.split(/[\+\-\*\/]/).pop();
            if (lastNumber.includes(".") && action.payload === ".") {
                return;
            }

            if (lastNumber === "0" && action.payload === "0") {
                return; 
            }

            if (lastNumber === "0" && action.payload !== "." && !isNaN(action.payload)) {
                state.expression = state.expression.slice(0, -1) + action.payload; 
                state.result = action.payload;
                return;
            }

            if (state.expression === "" || /[\+\-\*\/]$/.test(state.expression)) {
                if (action.payload === ".") {
                    state.expression += "0."; 
                    state.result = "0.";
                    return;
                }
            }

            state.expression += action.payload;

            const numbers = state.expression.split(/([\+\-\*\/])/);
            state.expression = numbers
                .map((segment) =>
                    /\d+\.\d*/.test(segment) ? segment.replace(/(\.\.+)/g, ".") : segment
                )
                .join("");

            const updatedLastNumber = state.expression.split(/[\+\-\*\/]/).pop();
            state.result = updatedLastNumber;
        },
        evaluateExpression: state => {
            try {
                state.result = evaluate(state.expression);
            } catch (error) {
                state.result = "Invalid Expression";
            }
        },
        clear: state => {
            state.expression = "";
            state.result = 0;
        },
        equal: (state) => {
            state.expression = "";
            state.expression += state.result;
        }
    }
});

export const { addExpression, evaluateExpression, clear, equal } = operantionSlice.actions;

export default operantionSlice.reducer;