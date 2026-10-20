
import './Success.css'

function Success() {
    return (
        <div className="success-page">
            <div className="success-card">

                <div className="success-icon">✓</div>

                <p className="success-tag">LOGIN STATUS</p>

                <h1>Login Successful!</h1>

                <h2>Welcome Back! 🎉</h2>

                <p className="success-message">
                    You have successfully logged into your account.
                </p>

                <p className="success-message">
                    We're glad to have you here!
                </p>

                <div className="success-badge">
                    <span></span>
                    Authentication Successful
                </div>

                <button
                    className="success-button"
                    onClick={() => window.location.href = '/'}
                >
                    Back to Login →
                </button>

            </div>
        </div>
    )
}

export default Success;
