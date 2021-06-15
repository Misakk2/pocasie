import React from 'react'

export const ValueBox = ({ children, ...props }) => {
    return (
        <div className="value" {...props}>
            {children}
        </div>
    )
}
