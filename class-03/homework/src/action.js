import 'whatwg-fetch';
import { 
    KEYVAL,
    COMPUTE,
    REVERTDATA,
    FETCHDATASUCCESS 
} from './actionType';

const action = {
    keyVal: (num) => ({ type: KEYVAL, num }),
    compute: (op) => ({ type: COMPUTE, op: op }),
    revertData: (data) => ({ type: REVERTDATA, data }),
    fetchData() {
        return (dispatch) => {
            fetch('/data/data.json')
            .then((response) => response.json())
            .then((data) => dispatch({
                type: FETCHDATASUCCESS,
                data
            }));
        }
    }
}

module.exports = action;