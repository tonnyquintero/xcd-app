import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header'



const tonnyFunction = () => {
  return (
    <>
      <Head>
        <title>Xkcd - Comics for developers</title>
        <meta name="description" content="Comics for developers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1>Comics</h1>
      </main>
    </>
  )
}

export default tonnyFunction