
import './Fail.css'

function Fail() {
    return (
        <div className="fail-page">
            <div className="fail-card">

                <div className="fail-icon">✕</div>

                <p className="fail-tag">LOGIN STATUS</p>

                <h1>Login Failed!</h1>

                <h2>Oops! Something went wrong.</h2>

                <p className="fail-message">
                    Invalid username or password.
                </p>

                <p className="fail-message">
                    Please check your credentials and try again.
                </p>

                <div className="fail-badge">
                    <span></span>
                    Authentication Failed
                </div>

                <button
                    className="fail-button"
                    onClick={() => window.location.href = '/'}
                >
                    ↻ Try Again
                </button>

            </div>
        </div>
    )
}

export default Fail;
