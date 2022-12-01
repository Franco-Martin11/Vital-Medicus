import React, { FC } from 'react'

type poligonCta = { children: React.ReactNode, title: string, route: string, direction: string }

const PoligonContainer: FC<poligonCta> = ({ children, title, route, direction }) => {
    return (
        <div className={`App w-[158px] h-[151px] ${direction === 'right' ? 'path-container' : 'path-container-left'} relative overflow-hidden bg-darkViolet rounded-[10px] border-[1px] border-darkViolet flex items-end justify-center p-3`}>
            {children}
            <h1 className={`font-heading text-[#fff] text-2xl capitalize ${title=='cuenta'&&'relative -top-[15px]'}`}>{title}</h1>
        </div>
    )
}

export default PoligonContainer