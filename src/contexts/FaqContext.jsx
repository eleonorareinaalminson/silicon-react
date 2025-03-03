import { useEffect, useState, createContext } from "react";

export const FaqContext = createContext()

export const FaqProvider = ({children}) => {
    const apiUrl = 'https://kyhn24.azurewebsites.net/api/faq'

    const [faqs, setFaqs] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            setLoading(true)
            const res = await fetch(apiUrl)
            
            if (!res.ok) {
                throw new Error(`API returned status: ${res.status}`)
            }
            
            const data = await res.json()
            setFaqs(data)
            setError(null)
        } catch (err) {
            console.error('Error fetching FAQ data:', err)
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <FaqContext.Provider value={{ faqs, loading, error, refetch: getData }}>
            {children}
        </FaqContext.Provider>
    )
}