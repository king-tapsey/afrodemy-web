import React from 'react'
import PlainDiv from './PlainDiv'

export default function PageBase({ colorMode, theme }) {
    const AppBar = (
        <ResponsiveAppBar colorMode={colorMode} theme={theme} />
    )
    return (
        <PlainDiv children={AppBar} />
    )
}
