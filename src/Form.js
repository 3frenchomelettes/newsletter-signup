import {useState} from 'react';

const Form = () => {

    const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const [emailAdded, setEmailAdded] = useState(false);

    const [email, setEmail] = useState('');
    const [hasError, setHasError] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (EMAIL_REGEX.test(email)) {
            setHasError(false);
            setEmailAdded(true);
        } else {
            setEmail('');
            setHasError(true);
        }
    }

    const handleInputClick = (e) => {
        if (hasError) {
            setHasError(false);
            e.target.value = '';
        }
    }

    return (
        emailAdded ? (dismissed || 
        <section>
            <div className="content">
                <div className="success"><img src="/images/icon-success.svg" alt="success"></img></div>
                <h1>Thanks for subscribing!</h1>
                <p>A confirmation email has been sent to <span className="email">{email}</span>.
                Please open it and click the button inside to confirm your subscription.</p>
                <div className="button dismiss" onClick={() => setDismissed(true)}>Dismiss message</div>
            </div>
        </section>) :

        <main>
            <div><img className="sign-up-mobile" alt="sign-up-mobile" src='/images/illustration-sign-up-mobile.svg'></img><img className="sign-up-desktop" alt="sign-up-desktop" src='/images/illustration-sign-up-desktop.svg'></img></div>
            <div className="form-page">
                <h1>Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <div>
                    <ul>
                        <li>Product discovery and building what matters</li>
                        <li>Measuring to ensure updates are a success</li>
                        <li>And much more!</li>
                    </ul>
                </div>

                <form className="form" onSubmit={handleSubmit} noValidate={true}>
                    <div className="labels">
                        <label htmlFor="email">Email address</label>
                        <label htmlFor="email" className="error-msg">{hasError ? 'Valid email required' : ''}</label>
                    </div>
                    <input id="email" className={hasError ? 'error' : ''} onChange={handleChange} onClick={handleInputClick} type="email" placeholder="email@company.com" />
                    <input className="button" type="submit" value="Subscribe to monthly newsletter" />
                </form>
            </div>

        </main>
    )
}

export default Form;