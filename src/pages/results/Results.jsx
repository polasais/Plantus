import "../../reset.css";
import "./Results.css"

export function Results() {
    return (
        <>
            <title>Plantus | Results</title>
            <div className="header-sentences">
                <h2>Discover Plants That Belong In Your Garden</h2>
                <h3>
                    Search by name, or use your ZIP code to see what grows
                    naturally in your area.
                </h3>
            </div>
            <div className="inputs">
                <div className="inputs-left-side">
                    <input
                        className="search-box"
                        placeholder="Enter plant name"
                    />
                    <button>Set Location</button>
                </div>
                <div className="inputs-right-side">
                    <button>Filter Options</button>
                </div>
            </div>
            <div className="results-text">
                <div className="results-left">
                    <h4 className="noInput">Showing 205 results</h4>
                    <h4 className="yesInput">
                        Showing 205 results for: <span>Rose</span>
                    </h4>
                </div>
                <div className="results-right">
                    <h5 className="yesFilters">Filters Applied:</h5>
                    <p>Filter,filter</p>
                </div>
            </div>
        </>
    );
}
