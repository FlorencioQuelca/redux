//ESTA ES LA STORE DE TODOS LOS ESTADOS GLOBALES
import { configureStore } from "@reduxjs/toolkit";
import counter from './slices/counter.slice'
export default configureStore({
    reducer: { //contiene a todos los estados globales
        counter,
    }
})