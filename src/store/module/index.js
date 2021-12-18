
import state from "./state";
import * as mutations from "./mutations";
import * as actions from "./actions";
import * as getter from "./getter";

const module = {

    namespaced:true,
    actions,
    getter,
    mutations,
    state


}


export default module