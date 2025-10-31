import { Header } from "../../components/Header";
import "../../reset.css";
import "./HomePage.css";

export function HomePage() {
    return (
        <>
            <title>Homepage</title>
            <div className="home-hero">
                <h2>
                    Discover native <span>plants</span> that thrive in your zone
                    <span>.</span>
                </h2>
                <h3>
                    Enter your ZIP code to find plants that thrive in your zone,
                    or search plants by name to see where it grows.
                </h3>
                <div className="ZIP-and-name">
                    <div className="ZIP">
                        <h4>Search by ZIP Code</h4>
                        <input type="text" placeholder="Enter ZIP code" />
                        <button className="location-link">
                            Find my location
                        </button>
                    </div>
                    <div className="separator"></div>
                    <div className="name">
                        <h4>Or search by plant name</h4>
                        <input type="text" placeholder="Enter plant name" />
                    </div>
                </div>
            </div>
            <div className="home-quote">
                <blockquote className="quote">
                    "Plant quote of the day"
                </blockquote>
                <p className="author">Jessica Alba</p>
            </div>
        </>
    );
}
