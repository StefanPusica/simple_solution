import { createContext, useEffect, useState } from 'react'

const SolutionContext = createContext()

export const SolutionProvider = ({children}) => {   

    const [english, setEnglish] = useState(false)
    let [languange, setLanguange] = useState(localStorage.getItem('CountryCode'))
    console.log("Dalibor",languange);

    const changeLanguange = () => {
        if (languange === 'other') {
            setLanguange('RS')
        } else if (languange === 'RS') {
            setLanguange('other')
        }
        console.log("Pero",languange)
    }

    return <SolutionContext.Provider value={{
        english,
        languange,
        setEnglish,
        setLanguange,
        changeLanguange
        
    }}>
        {children}
    </SolutionContext.Provider>
}

export default SolutionContext;