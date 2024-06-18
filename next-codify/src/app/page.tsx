"use client"

import Header from "./components/layout/home/Header/header"
import DefaultNav from "./components/layout/NavBar/DefaultNav"
import "./globals.css"
import MainPricing from "./components/layout/home/Main/mainPricing"
import Main from "./components/layout/home/Main/MainBento"

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
        <MainPricing/>
      </main>
    </>
  )
}