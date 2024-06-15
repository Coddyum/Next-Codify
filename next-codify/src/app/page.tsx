"use client"

import Header from "./components/layout/home/Header/header"
import DefaultNav from "./components/layout/home/NavBar/DefaultNav"
import Main from "./components/layout/home/Main/MainBento"
import "./globals.css"
import MainPricing from "./components/layout/home/Main/mainPricing"

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