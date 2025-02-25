import { DarkModeProvider } from "./DarkModeContext"
import { FaqProvider } from "./FaqContext"
import { TestimonialsProvider } from "./TestimonialsContext"
import React from "react"

const Providers = ({children}) => {
    return (
        <DarkModeProvider>
           <FaqProvider>
                <TestimonialsProvider>

                    {children}

                </TestimonialsProvider>
           </FaqProvider>
        </DarkModeProvider>
    )
}

export default Providers