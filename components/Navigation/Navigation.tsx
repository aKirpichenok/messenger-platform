import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { FC } from 'react';

type RouteProps = {
  path:string;
  text: string
}

type NavigationProps = {
  routes: RouteProps[]
}

export const Navigation: FC<NavigationProps> = ({routes}) => {


  return (
    <>
    {routes.map(({path,text}) => (
      <Link href={`${path}`} legacyBehavior key={path}>
        <MenuItem sx={{ minWidth: 100 }}>{text}</MenuItem>
      </Link>
    ))}
    </>
  )
}