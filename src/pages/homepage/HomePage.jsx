import { Header } from '../../components/Header';

export function HomePage() {
    return (
        <>
            <title>Homepage</title>

            <Header />
            <div className="home-hero">
                <h2>
                    Discover native <span>plants</span> that thrive in your
                    zone.
                </h2>
                <h3>
                    Enter your ZIP code or allow location access to find plants
                    that flourish in your climate. Track your garden's growth,
                    get care reminders, and watch your ecosystem thrive.
                </h3>
                <div className="zip-and-name">
                    <div className="zip">
                        <h4>Search by Zip Code</h4>
                        <input type="text" placeholder="Enter zip code" />
                        <button>Find my zip code</button>
                    </div>
                    <div className="separator"></div>
                    <div className="name">
                        <h4>
                            <em>Or</em> Search by Plant Name
                        </h4>
                        <input type="text" placeholder="Enter plant name" />
                    </div>
                </div>
            </div>
            <div className="home-quote">
                <blockquote className="quote">
                    "Here will be the quote."
                </blockquote>
                <p className="author">Author Placeholder</p>
            </div>
        </>
    );
}
