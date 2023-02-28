import Header from "../Header"
import "./index.css"
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { v4 as uuidv4 } from "uuid"
import Footer from "../Footer"
import { useEffect } from "react"
import { useState } from "react"
import InfiniteScroll from 'react-infinite-scroll-component';
import Cookies from "js-cookie"
import { Redirect } from "react-router-dom"


const apiStatusConstants = {
    initial: "initial",
    loading: "loading",
    success: "successful",
    failed: "failed"
}

const Home = (props) => {
    const [data, setData] = useState([{ picture: { large: "" }, name: { first: "", last: "", title: "" } }])
    const [count, setCount] = useState(10)
    const [getListApiStatus, setGetListApiStatus] = useState(apiStatusConstants.loading)

    const getList = async () => {
        try {
            const response = await fetch(`https://randomuser.me/api/?results=${count + 10}`)
            const result = await response.json()
            setData(result.results)
            setCount(count + 10)
            setGetListApiStatus(apiStatusConstants.success)
            // console.log(result.results)
        } catch (err) {
            console.log("Get list api failed")
            setGetListApiStatus(apiStatusConstants.failed)
        }
    }

    useEffect(() => {
        if (Cookies.get("jwtToken") === undefined) {
            const { history } = props
            history.replace("/login")
        }
        getList()
    }, [])

    const renderLoader = () => (
        <div className="loadingCon d-flex justify-content-center align-items-center"><Loader type="TailSpin" color="#00BFFF" height={50} width={50} /></div>
    )

    const renderInfiniteList = () => (
        <ul className="list-unstyled listCon p-3 overflow-auto" id="parentCon">
            <InfiniteScroll
                dataLength={data.length} //This is important field to render the next data
                next={getList}
                hasMore={true}
                loader={renderLoader()}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>All Done!</b>
                    </p>
                }
                scrollableTarget="parentCon"
            // height={500}
            >
                {
                    data.map(obj => (
                        <div className="d-flex justify-content-between align-items-center itemCon p-3 mb-2 rounded" key={uuidv4()} >
                            <img className="profilePic rounded-circle" alt="profile" src={obj.picture.large} />
                            <h1 className="h5">{`${obj.name.title} ${obj.name.first} ${obj.name.last}`}</h1>
                        </div>
                    ))
                }
            </InfiniteScroll>
        </ul>
    )

    const renderUI = () => {
        switch (getListApiStatus) {
            case apiStatusConstants.success:
                return renderInfiniteList()
            case apiStatusConstants.loading:
                return renderLoader()
            default:
                return null
        }
    }


    return (
        <div className="homeParentCon">
            <Header />
            <div className="d-flex justify-content-center align-items-center">
                <div className="contentCon d-flex justify-content-center flex-column align-items-center">
                    <h1 className="h3 text-secondary">Infinite Scroll List</h1>
                    {renderUI()}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home