const Footer = ({settings}) => (

<div className="bg-skwlax py-10 bg-bottom bg-cover bg-no-repeat" style={{backgroundImage: "url('img/footer-bg.jpg')"}}>
  <div className="container mx-auto">
    <div className="grid md:grid-cols-2 gap-4 space-y-10 flex flex-row content-center">
      <div className="flex flex-row flex-wrap w-full h-auto justify-center md:py-8"><img className="object-contain md:object-scale-down md:w-80" src="img/logo-white.png"/></div>
      <div className="text-center pt-10"><h3 className="text-white text-2xl">Contact Us</h3><br /><a className="text-white hover:text-black text-3xl" href="mailto:info@skwlax.com"><i className="fas fa-envelope"></i> info@skwlax.com</a></div>
    </div>
  </div>
</div>

)
export default Footer
