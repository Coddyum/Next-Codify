"use client"

import Header from "./components/layout/home/Header/header"
import DefaultNav from "./components/layout/home/NavBar/DefaultNav"
import Main from "./components/layout/home/Main/main"
import "./globals.css"

export default function LandingPage(){
  return (
    <>
      <nav>
        <DefaultNav/>
      </nav>
      <header>
        <Header/>
      </header>
      <main>
        <Main/>
      </main>
    </>
  )
}