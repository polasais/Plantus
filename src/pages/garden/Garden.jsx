import { GardenGrid } from "./GardenGrid";
import "../../reset.css";
import "./Garden.css";

export function Garden() {
    return (
        <>
            <title>Plantus | My Garden</title>
            <div className="header-sentences">
                <h2>My Garden</h2>
                <h3>Keep track of your garden.</h3>
            </div>
            <div className="inputs">
                <div className="inputs-left-side">
                    <h4 className="garden-search-text">Search your garden</h4>
                    <input
                        className="search-box"
                        placeholder="Enter plant name"
                    />
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
            <GardenGrid />
        </>
    );
}
