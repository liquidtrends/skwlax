import Link from "next/link"
import HeadCom from '../components/HeadCom'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faBars, faHome } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div className="font-lato">
    <HeadCom />
    <Navbar />
      <header className="flex flex-wrap h-screen h-full content-center bg-no-repeat bg-auto bg-center md:bg-cover" style={{backgroundImage: "url('img/header-bg.jpg')"}}>
        <div className="mx-auto px-5 text-center">
          <h2 className="animate-fade-in-down text-white uppercase text-4xl md:text-7xl pt-10 -mt-40">Ensuring a balanced<br /> and productive future</h2>
        </div>
      </header>

      <Footer />
    </div>
  )
}
