import React from 'react'

const pageContext = React.createContext()
export const pageContextProvider = pageContext.Provider
export const pageContextConsumer = pageContext.Consumer

export default pageContext