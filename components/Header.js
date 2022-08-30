import React from 'react'
import { Container } from '@nextui-org/react'
import Link from 'next/link'


const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
            <h1 className="font-bold">Next<span className="font-light">xkc</span></h1>
        <nav>
            <Container display="flex" direction="row" responsive
            style={{listStyle: 'none', gap: '16px'}} >
                <li><Link href='/'><a className="font-semibold">Home</a></Link></li>
                <li><Link href='/about'><a className="font-semibold">About</a></Link></li>
                <li><Link href='/search'><a className="font-semibold">Search</a></Link></li>
            </Container>   
        </nav>
    </header>
  )
}

export default Header