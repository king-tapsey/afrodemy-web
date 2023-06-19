import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { useState } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

export default function BottomNav({ navElements }) {
    const [value, setValue] = useState(navElements[0].value)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
            {navElements.map((navElement) => (
                <BottomNavigationAction 
                    label={navElement.label}
                    value={navElement.value}
                    icon={<navElement.icon />}
                    LinkComponent={Router} href={navElement.linkTo}
                />
            ))}
        </BottomNavigation>
    )
}
