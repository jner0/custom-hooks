import { useState } from "react";


export const useForm = ( initialForm = {} ) => {
  
    const [formState, setformState] = useState(initialForm);

    const onInputChange = ( { target } ) => { //desestructuro el target del event
        //console.log(event.target.value);
        //desestructuramos el target para obtener el name y value y no llamar targey.name...
        const { name, value } = target;
        setformState({
            //desestructuramos el form state para mantener todos los valores del formulario
            ...formState,
            [ name ]: value
        }); 
    }
    const onResetForm = () => {
        setformState( initialForm );
    }

    return{
        ...formState, //utilizamos este spread para en el codigo de formWith... tener disponible username,....
        formState,
        onInputChange,
        onResetForm
    }

}
