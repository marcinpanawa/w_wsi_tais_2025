export const AuthButtons = (props) => (
    <div className="col-md-3 text-end">
        {(props.session && props.session.userId) ?
            <a className="button btn btn-outline-danger me-2" href="/logout">Logout {props.session.userName}</a>
            :
            <>
                <a className="button btn btn-outline-primary me-2" href="/login">Login</a>
                <a className="button btn btn-primary me-2" href="/register">Sign-up</a>
            </>

        }
    </div>
)