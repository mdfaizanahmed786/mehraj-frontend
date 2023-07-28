import HomeIcon from '@mui/icons-material/Home';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SellIcon from '@mui/icons-material/Sell';
import React from 'react'

export const SidebarData=[
  {  
    name:"Home",
    icon:<HomeIcon/>,
    path:"/home",
  },

  { 
    name:"Department",
    icon:<AccountTreeIcon/>,
    path:"/departments",
   },
   
  { 
      name:"Scholarship",
      icon:<SellIcon/>,
      path:"/scholarship",
     },
]
