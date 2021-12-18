
import {createStore} from 'vuex'
import journalmodule from '../modules/daybook/store/journal'


const store = createStore({

    modules:{
        journal:journalmodule
        
    }

})



export default store