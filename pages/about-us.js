import Head from 'next/head'
import HeadCom from '../components/HeadCom'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faBars, faHome } from '@fortawesome/free-solid-svg-icons'

export default function About() {
  return (
    <div className="font-lato">
      <HeadCom />
      <Navbar />
      <div className="flex h-40 md:h-80 bg-no-repeat bg-auto md:bg-cover items-center justify-center" style={{backgroundImage: "url('img/header-bg.jpg')"}}>
        <h2 className="text-white uppercase text-3xl md:text-4xl">About Us</h2>
      </div>

      <div className="bg-right-bottom bg-no-repeat bg-auto" style={{backgroundImage: "url('img/bear-icon.png')"}}>
        <div className="container mx-auto px-5 py-20">
          <h2 className="font-mono uppercase text-skwlax md:text-3xl font-bold">Skwlax Resource Management</h2>
          <h3 className="text-black-200 uppercase md:text-2xl">At a Glance</h3>
          <div class="grid md:grid-cols-2 gap-5">
            <div>
              <img className="animate-fade-in-down mt-6 shadow rounded-lg" src="img/about-img.jpg"/>
            </div>
            <div className="mt-5 font-light md:text-xl space-y-5">
                <p>
                <span class="text-skwlax font-bold">Skwlax Resource Management</span> is a construction industry leader, creating and facilitating opportunities
                through economic development and construction activities for the community and for the Little
                Shuswap Lake Band members.
                </p>
                <p>
                Through our One Team Approach, Skwlax Resource Management reimagines how an Indigenous
                company can capture value for its members, community, and region. This approach supports the
                prosperity, economic sovereignty, and cultural identity of Little Shuswap Lake Band for future
                generations.
                </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-black-400">
        <div className="container mx-auto px-5 py-20">
          <h2 className="text-white lg:text-2xl uppercase">Our Vision</h2>
          <ul className="text-white text-sm md:text-xl divide-y-2 divide-skwlax divide-dotted">
            <li className="py-2">A sustainable economic band owned entity that sets precedence in how economic opportunity is accessed by Indigenous communities.</li>
            <li className="py-2">First mover, trend setter.</li>
            <li className="py-2">Economic self determination for community.</li>
            <li className="py-2">Build strong relationships with all levels of government: federal, provincial, agencies as well as industry, municipalities, neighbouring bands.</li>
            <li className="py-2">Redefine reconciliation while supporting the advancement and growth of the economy.</li>
          </ul>
        </div>
      </div> */}

      <Footer />
    </div>
  )
}
