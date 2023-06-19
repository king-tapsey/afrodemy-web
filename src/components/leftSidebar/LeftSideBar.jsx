import { Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react'

export default function LeftSideBar({ iterableList }) {
  return (
    <Drawer
      anchor='left'
      variant='permanent'
      open='true'
    >
      <List>
        {iterableList.map((listItem) => (
          <ListItem disablePadding>
          <ListItemButton component={Router} href={listItem.routesTo}>
            <ListItemText 
              primary={listItem.name} 
            />
          </ListItemButton>
        </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
