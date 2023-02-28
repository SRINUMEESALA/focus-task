import "./index.css"

const Footer = () => (
    <div className="footerCon d-flex flex-column justify-content-center">
        <div className="contentCon d-flex pt-4 pb-4 text-secondary align-self-center">
            <div className="col-5">
                <h1 className="h6">ABOUTUS</h1>
                <ul className="list-unstyled">
                    <li>
                        FACE is a skill-development company that helps students across the country master the skills required to land their dream careers. FACE offers solutions in ..
                    </li>
                </ul>
            </div>
            <div className="col-2">
                <h1 className="h6">MENUS</h1>
                <ul className="list-unstyled d-flex flex-column justify-content-around h-75">
                    <li>Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>Services
                    </li>
                    <li>Products </li>
                </ul>
            </div>
            <div className="col-2">
                <h1 className="h6">LEARN MORE</h1>
                <ul className="list-unstyled">
                    <li className="mb-2">Laern
                    </li>
                    <li>
                        AI Tech

                    </li>
                </ul>
            </div>
            <div className="col-3">
                <h1 className="h6">ADDRESS</h1>
                <ul className="list-unstyled">
                    <li>
                        2nd floor phoneix padmavathi building, Koritepadu Rd, opp. LVR club, Guntur, Andhra Pradesh 522007 </li>
                </ul>
            </div>
        </div>
        <div className="footerEndCon d-flex justify-content-center">
            <p className=" contentCon m-0 pt-3 pb-3">@Copyright 2017-2023 | FOCUS is brand of THINK AHEAD INNOVATIONS PVT.LTD. | All rights Reserved</p>
        </div>
    </div>
)

export default Footer