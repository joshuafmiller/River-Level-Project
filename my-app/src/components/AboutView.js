import Footer from "./Footer";
import Hero from "./Hero";
import kayak from "./kayak.jpg";

const About = () => {
    return(
        <div>
            <Hero text="About Us" />
            <div class= "w-25 p-3 text-center d-inline-block">
            </div>
            <div class= "w-25 p-3 text-center d-inline-block align-middle">
            <h2>A love for whitewater kayaking and coding has allowed for worlds to collide!
            </h2>
            <br></br>
            <h4>This tool has been created to help monitor river levels of popular runs in the Southeast.  Here you can view current river levels and the runnable state of the river.
            </h4>
            </div>
            <div class= "w-25 p-3 text-center align-middle d-inline-block">
            <img src={kayak} style={{width:"100%"}}></img>
            </div>
            <div class= "w-25 p-3 text-center d-inline-block">
            </div>
        </div>
    );
};

export default About;