import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        fetch(import.meta.env.VITE_REACT_API_URL)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

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
                    <li>
                        Data Search, Sort, & Filter
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default Home;