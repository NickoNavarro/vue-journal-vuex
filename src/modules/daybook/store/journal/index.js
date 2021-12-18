
import state from "./state";
import * as mutations from "./mutations";
import * as actions from "./actions";
import * as getter from "./getters";

const journalmodule = {

    namespaced:true,
    actions,
    getter,
    mutations,
    state


}


export default journalmodule