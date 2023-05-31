'use client';

import { ReactElement } from "react"
import ToasterProvider from "./ToasterProvider"

const ContextWrapper = ({children}: {children: ReactElement}) => {
    return (
        <ToasterProvider>
            {children}
        </ToasterProvider>
    )
}

export default ContextWrapper