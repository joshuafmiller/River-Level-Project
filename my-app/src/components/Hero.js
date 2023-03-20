const Hero = ({text}) => {
    return(
        <header className="bg-dark text-white p-5 hero-container text-center">
        <h1 className="hero-text">{text}</h1>
      </header>  
    )
}


export default Hero;