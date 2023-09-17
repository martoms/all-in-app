import HomeFeatures from "../features/home/HomeFeatures";
// import { useEffect } from "react";
// import store from "../app/store";
// import { retrieveFeatures } from "../features/home/homeSlice";

const Home = () => {

    // useEffect(() => {
    //     fetch(import.meta.env.VITE_REACT_API_URL)
    //     .then(res => res.json())
    //     .then(data => {
    //         store.dispatch(retrieveFeatures(data));
    //     })
    // }, [])

    // console.log('Initial State ', store.getState())
    // const unsubscribe = store.subscribe(() => {
    // console.log('Updated State ', store.getState())
    // })

    // unsubscribe()


    return ( 
        <div className="main-container">
            <div>
                <h1>Web App Features<br className="d-md-none"/> and Components</h1>
                <hr className="hr-left" />
                <p>
                    The following are sample features and components that I can further develop and implement on any website.
                </p>
                <p>
                    The components I created basically follows the mobile-first design principle and are built using the MERN stack together with Vite, TypeScript, and SASS in the development process.
                </p>
            </div>
            <div className="home-features">
                <ul>
                    <HomeFeatures />
                </ul>
            </div>
        </div>
    );
}
 
export default Home;