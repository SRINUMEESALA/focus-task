import { Link } from "react-router-dom"



const NotFound = () => (
    <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="text-center">
            <img alt="" className="" src="https://img.freepik.com/premium-vector/empty-states-illustration-concept-white-background_701961-312.jpg?w=740" />
            <h1 className="h2 text-secondary mb-3 mt-0">Page Not Found</h1>
            <button type="button" className="btn btn-outline-primary"><Link to="/" className="routerLinkUnsetStyles">Go To Home Page</Link></button>
        </div>
    </div>
)

export default NotFound