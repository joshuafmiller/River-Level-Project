import Hero from "./Hero";
import ellie from "./ellie.jpg";

const Contact = () => {
    return(
        <div>
            <Hero text="Contact Us" />
            <div>
            <div class= "w-25 p-3 text-center d-inline-block">
            </div>
            <div class= "w-25 p-3 text-center d-inline-block align-middle">
            <h2>Please contact us with any questions, comments, or concerns!
            </h2>
            <br></br>
            <h4>Do you want a specific river added?  Please let me know which river and if possible I can add it to the list!
            </h4>
            <h5>Please email joshuafmiller@outlook.com with any questions, comments, or concerns.  Feel free to send Ellie (the best dog!) any fan mail as well!
            </h5>
            </div>
            <div class= "w-25 p-3 text-center align-middle d-inline-block mt-5">
            <img src={ellie} style={{width:"75%", height: "auto", transform: "rotate(90deg)"}}></img>
            </div>
            <div class= "w-25 p-3 text-center d-inline-block">
            </div>

        </div>
        </div>
    );
};

export default Contact;