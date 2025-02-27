import { useState } from 'react'
import AppFeatures from '../components/AppFeatures'
import Brands from '../components/Brands'
import ClientReviews from '../components/ClientReviews'
import HowDoesItWork from '../components/HowDoesItWork'
import MoneyTransfer from '../components/MoneyTransfer'
import ReceivePayment from '../components/ReceivePayment'
import Subscribe from '../components/Subscribe'
import Hero from '../components/Hero'

const HomePage = () => {

  return (
    <>
      <Hero />
      <Brands />
      <AppFeatures />
      <HowDoesItWork />
      <MoneyTransfer />
      <ReceivePayment />
      <ClientReviews />
      <Subscribe />
    </>
  )
}

export default HomePage