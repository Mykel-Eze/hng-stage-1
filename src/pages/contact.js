import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css'

const Contact = () => {
    const submitFunction = (event) => {
        event.preventDefault();
        M.toast({html: 'Message sent successfully'})
        document.querySelectorAll('.input-field input, .input-field textarea').forEach(item => {
            item.value="";
        })
        document.querySelector('.checkbox-field input[type=checkbox]').checked = false
    }
    return(
        <section className="contact-page">
            <div className="container">
                <div className="page-header-wrapper">
                    <h1 className="page-header-title">Contact Me</h1>
                    <p className="page-header-desc">
                        Hi there, contact me to ask me about anything you have in mind.
                    </p>
                </div>

                <form action="#" id="contact_form" onSubmit={submitFunction}>
                    <div className="input-field grid-2-field">
                        <div className="input-field error">
                            <input type="text" id="first_name" placeholder="Enter your first name" required />
                            <label htmlFor="first_name" className="active">First name</label>
                            <span className="helper-text" hidden>Please enter your first name</span>
                        </div>
                        <div className="input-field error">
                            <input type="text" id="last_name" placeholder="Enter your last name" required />
                            <label htmlFor="last_name" className="active">Last name</label>
                            <span className="helper-text" hidden>Please enter your last name</span>
                        </div>
                    </div>

                    <div className="input-field error">
                        <input type="email" id="email" placeholder="yourname@email.com" required />
                        <label htmlFor="email" className="active">Email</label>
                        <span className="helper-text" hidden>Please enter your email</span>
                    </div>

                    <div className="input-field error">
                        <textarea id="message" placeholder="Send me a message and I'll reply you as soon as possible..." required></textarea>
                        <label htmlFor="email" className="active">Message</label>
                        <span className="helper-text" hidden>Please enter a message</span>
                    </div>

                    <label className="checkbox-field">
                        <input type="checkbox" className='filled-in' required />
                        <span>You agree to providing your data to MykelEagle who may contact you.</span>
                    </label>

                    <div className="submit-btn-wrapper">
                        <button id="btn__submit" className="submit-btn">Send message</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;