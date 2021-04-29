import Head from 'next/head'
import HeadCom from '../components/HeadCom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from "next/link"
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faBars, faHome } from '@fortawesome/free-solid-svg-icons'

export default function Partnership({ title="Partnership" }) {
  return (
    <div className="font-lato">
      <HeadCom />
      <Navbar />

      <div className="flex h-40 md:h-80 bg-no-repeat bg-auto md:bg-cover items-center justify-center" style={{backgroundImage: "url('img/header-bg.jpg')"}}>
        <h2 className="text-white uppercase text-3xl md:text-4xl">{title}</h2>
      </div>

      <div className="container mx-auto md:w-1/2 px-10 py-20 space-y-5 font-light md:text-xl">
        <div class="space-x-4 flex justify-center content-end items-end">
          <div class="inline-block"><img className="w-60 md:w-60" src="img/lslb.jpg" /></div>
          <div class="inline-block"><img className="w-60 md:w-80" src="img/logo-large.png" /></div>
        </div>
        <p className="pt-20">
        <strong>Skwlax Resource Management (SRM)</strong> is the operational extension of the vision of the Little Shuswap
        Lake Band. SRM allows the Band to operate across a wide range of industries which Little Shuswap Lake
        Band previously did not have the capacity, support structures, or relationships necessary to navigate.
        SRM pursues to enhance and expand the operations of current Band enterprises by creating new
        opportunities in areas that require the highly specialized and integrated skill set that SRM now boasts.
        </p>
        <p>
        This approach of expansion of current Band operations as well as entry into new types of industry and
        fields will diversify the economic strength of the community of Little Shuswap Lake Band and create
        resilience from downturns in specific industries or areas of operation.
        </p>
      </div>

      <Footer />
    </div>
  )
}
