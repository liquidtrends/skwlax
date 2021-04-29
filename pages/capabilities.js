import Head from 'next/head'
import HeadCom from '../components/HeadCom'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Capabilities from '../components/Capabilities'
import Link from "next/link"
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faBars, faHome } from '@fortawesome/free-solid-svg-icons'

export default function OurCapabilities({ title="Our Capabilities" }) {
  return (
    <div className="font-lato">
      <HeadCom />
      <Navbar />

      <div className="flex h-40 md:h-80 bg-no-repeat bg-auto md:bg-cover items-center justify-center" style={{backgroundImage: "url('img/header-bg.jpg')"}}>
        <h2 className="text-white uppercase text-3xl md:text-4xl font-lato">{title}</h2>
      </div>

      <div className="bg-black-100 pb-20">
        <div className="container mx-auto space-y-5">
          <div className="py-10 px-10 font-light md:text-xl text-center">
            <p>Aligning with the strategic business and social initiatives of the Little Shuswap Lake Band, <strong>Skwlax Resource Management</strong> offers six key services: Forestry, Environmental Services, Civil and Infrastructure, Capacity Support and Management, Powerline Extension and Maintenance, and Construction.</p>
          </div>
          <Capabilities />
        </div>
      </div>

      <Footer />
    </div>
  )
}
