import { createContext, useContext, useState } from "react";


export const FormContext = createContext();

export function useForm() {
    return useContext(FormContext);
}

export function FormProvider({children}){
    const [openElements,setOpenElements] = useState(false)
    return(
        <FormContext.Provider value={{openElements,setOpenElements}}>
            {children}
        </FormContext.Provider>
    )
}