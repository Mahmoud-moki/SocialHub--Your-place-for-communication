import { Button, Card, Divider } from '@heroui/react'
import { IconBookmark, IconCalendarEvent, IconHomeFilled, IconLogout, IconSettings, IconUser, IconUsers } from '@tabler/icons-react'
import React from 'react'
import { Link, NavLink  } from 'react-router-dom'

export default function SideNav() {

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
      isActive
        ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white'
        : 'bg-white text-gray-700 hover:bg-gray-100'
    }`;

    
  return (
    <Card className="bg-white boreder border-gray-300 rounded-2xl shadow-gray-500 shadow p-4 ">

    <ul className="space-y-1">
      <li>
        <NavLink 
          to="/home"
          className={linkClass}
        >
          <IconHomeFilled className="text-lg" />
          <span className="font-medium">Home</span>
        </NavLink >
      </li>
      <li>
        <NavLink 
          to="/profile"
          className={linkClass}
        >
          <IconUser className="text-lg" />
          <span className="font-medium">Profile</span>
        </NavLink >
      </li>
      <li>
        <NavLink 
          to="/saved"
          className={linkClass}
        >
          <IconBookmark className="text-lg" />
          <span className="font-medium">Saved Posts</span>
        </NavLink >
      </li>
      <li>
        <NavLink 
          to="/friends"
          className={linkClass}
        >
          <IconUsers className="text-lg" />
          <span className="font-medium">Friends</span>
        </NavLink >
      </li>
      <li>
        <NavLink 
          to="/events"
          className={linkClass}
        >
          <IconCalendarEvent className="text-lg" />
          <span className="font-medium">Events</span>
        </NavLink >
      </li>
      <li>
        <NavLink 
          to="/settings"
          className={linkClass}
        >
          <IconSettings className="text-lg" />
          <span className="font-medium">Settings</span>
        </NavLink >
      </li>
    </ul>
    <Divider />
    <div className="  pt-4">
      <Button
        className="flex  gap-3 px-4 bg-transparent py-3 rounded-xl text-red-500 hover:bg-red-50 w-full transition-all duration-200"
      >
        <IconLogout className="text-lg" />
        <span className="font-medium">Logout</span>
      </Button>
    </div>
  </Card>  )
}
