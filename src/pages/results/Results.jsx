import "../../reset.css";

export function Results() {
    return (
        <>
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
                    <h4 className="noInput">Showing {number} results</h4>
                    <h4 className="yesInput">
                        Showing {number} results for: {userInput}
                    </h4>
                </div>
                 <div className="results-right">
                    <h5 className="yesFilters">Filters Applied: {filters}</h5>
                 </div>
            </div>
        </>
    );
}
