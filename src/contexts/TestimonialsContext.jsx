import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const TestimonialsContext = createContext()

export const TestimonialsProvider = ({children}) => {

        const apiUrl = 'https://kyhn24.azurewebsites.net/api/testimonials'
        const [testimonials, setTestimonials] = useState([])
    
        useEffect(() => {
            getData()
        }, [])
    
        const getData = async () => {
            const res = await fetch(apiUrl)
            const data = await res.json()
            setTestimonials(data)
        }
    
        return (
            <TestimonialsContext.Provider value={{ testimonials }}>
                {children}
            </TestimonialsContext.Provider>
        )
}
