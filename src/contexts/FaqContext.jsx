import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const FaqContext = createContext()

export const FaqProvider = ({children}) => {
    const apiUrl = 'https://kyhn24.azurewebsites.net/api/faq'

    const [faqs, setFaqs] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const res = await fetch(apiUrl)
        const data = await res.json()
        setFaqs(data)
    }

    return (
        <FaqContext.Provider value={{ faqs }}>
            {children}
        </FaqContext.Provider>
    )
}