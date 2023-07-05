import "./index.css"

const Form = ()=>{
    return(
        <div className="form">
            <div className="left">
                <div className="heading">
                Let's Talk About Your Project
                </div>
                <div className="head">
                We Would Be Happy To Meet You And Learn All About Your Business
                </div>
                <div className="content">
                Digital marketing agency in Delhi that offers a variety of services. Feel free to contact us if you have any questions about our digital marketing services. We would be glad to discuss what your business targets are and how we can help you to achieve them. We’ll contact you as soon as possible.
                </div>
                <div className="hours">
                24 X 7 Business hours
                </div>
                <div className="email">
                Email Us : contact@91digitals.com
                </div>
            </div>
            <div className="right">
            <div className="formhead">
            Let's
            <br/> Work Together
            </div>
                <form>
                <div className="fields">
                    <label>Your name*</label>
                        <input type="text" />
                </div>
                <div className="fields">
                    <label>Your email*</label>
                        <input type="text" />
                </div>
                <div className="fields">
                    <label>Your Number(optional)</label>
                        <input type="text" />
                </div>
                <div className="fields">
                    <label>Company*</label>
                        <input type="text" />
                </div>
                <div className="fields">
                    <label>Your message*</label>
                        <input type="text" />
                </div>

                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Form;