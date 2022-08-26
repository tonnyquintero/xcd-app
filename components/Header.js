import React from 'react'
import { Text, Container } from '@nextui-org/react'
import Link from 'next/link'


const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
            <h1 className="font-bold">Next<span className="font-light">xkc</span></h1>
        <nav>
            <Container display="flex" direction="row" responsive
            style={{listStyle: 'none', gap: '16px'}} >
                <li><Link href='/'><a>Home</a></Link></li>
                <li><Link href='/about'><a>About</a></Link></li>
                <li><Link href='/search'><a>Search</a></Link></li>
            </Container>   
        </nav>
    </header>
  )
}

export default Header