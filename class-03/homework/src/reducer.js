import { 
    KEYVAL, 
    COMPUTE, 
    REVERTDATA,
    FETCHDATASUCCESS
} from './actionType';

const iniState = {
    num: 0,
    value: 0,
    logData: []
}

const Reducer = (state = iniState, action) => {
    let val = 0;
    switch (action.type) {
        case KEYVAL:
            return{
                ...state,
                num: action.num
            };
        case COMPUTE:
            let log = {};
            log.num = 0;
            log.isDelete = false;
            if(action.op === '+'){
                log.num = +state.num;
                val = state.value + state.num;
            }
            if(action.op === '-'){
                log.num = -state.num;
                 val = state.value - state.num;
            }
            return{
                ...state,
                value: val,
                logData: state.logData.concat(log)
            };
        case REVERTDATA:
            val = action.data.isDelete ? state.value + action.data.num : state.value - action.data.num;
            let newLogData = state.logData;
            newLogData[action.data.index].isDelete = !action.data.isDelete;
            return{
                ...state,
                value: val,
                logData: newLogData
            };
        case FETCHDATASUCCESS:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
}

module.exports = Reducer;