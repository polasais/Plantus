export function ResultsGrid() {
    return (
        <div className="results-grid">
            <div className="plant-card">
                <div className="top">
                    <div className="nativeness">Native</div>
                    <button className="add-to-garden">+ Add to Garden</button>
                    {/* if already in garden, gray out button */}
                </div>
                <img className="plant-img" />
                <div className="bottom">
                    <div className="names">
                        <h3>Regular Name</h3>
                        <h4>Scientific Name</h4>
                    </div>
                    <div className="separator"></div>
                    <div class="plant-info">
                        <div class="info-row">
                            <span class="icon">X</span>
                            <h5 class="label">Light:</h5>
                            <span class="value">Low light</span>
                        </div>
                        <div class="info-row">
                            <span class="icon">X</span>
                            <h5 class="label">Water:</h5>
                            <span class="value">Medium</span>
                        </div>
                        <div class="info-row">
                            <span class="icon">X</span>
                            <h5 class="label">Zone:</h5>
                            <span class="value">1, 3, 5, 9, 10</span>
                        </div>
                    </div>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    );
}
