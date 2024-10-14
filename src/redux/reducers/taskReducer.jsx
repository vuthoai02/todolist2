import {INIT_STATE} from '../../constants';
export const taskReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_TASKS":
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter((task, index) => index !== action.payload)
            }
        case "UPDATE_TASK":
            const { id, ...restPayload } = action.payload;
            return {
                ...state,
                tasks: state.tasks.map((task, index) => index === id ? {...restPayload} : task)
            }
        default:
            return state;
    }
};