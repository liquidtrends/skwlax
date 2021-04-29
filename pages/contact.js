import Head from 'next/head'
import HeadCom from '../components/HeadCom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from "next/link"
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faBars, faHome } from '@fortawesome/free-solid-svg-icons'

export default function Contact({ title="Contact Us" }) {
  return (
    <div className="font-lato">
      <HeadCom />
      <Navbar />

      <div className="flex h-40 md:h-80 bg-no-repeat bg-auto md:bg-cover items-center justify-center" style={{backgroundImage: "url('img/header-bg.jpg')"}}>
        <h2 className="text-white uppercase text-3xl md:text-4xl font-lato">{title}</h2>
      </div>

      <div className="py-10 md:px-5">
        <div className="container mx-auto md:w-full px-5">
          <h2 className="md:text-xl text-black text-center mb-5 uppercase">
          Our knowledgable team is ready to hear from you about your future projects and inquiries</h2>
          <div className="grid md:grid-cols-2 gap-10 pt-10">
            <div className=""><img src="img/map.png" /></div>
            <div>
              <h3 className="text-2xl">Contact Us</h3>
              <p>105-440 Squilax Anglemont Road<br />Chase, BC<br /> V0E 1M2</p>
              <br />
              <a href="mailto:info@skwlax.com" className="text-skwlax"><i className="fas fa-envelope"></i> info@skwlax.com</a>
            </div>
          </div>
        </div>
      </div>

    <Footer />
    </div>
  )
}
