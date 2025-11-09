import "../../reset.css";
import "./GardenGrid.css";

export function GardenGrid() {
    return (
        <>
            <div className="garden-grid">
                <div className="garden-card">
                    <div className="top">
                        <div className="nativeness">Native</div>
                        <button className="remove-from-garden">×</button>
                    </div>
                    <img className="plant-img" src="plant.jpg" />
                    <div className="bottom">
                        <div className="names">
                            <h3>Regular Name</h3>
                            <h4>Scientific Name</h4>
                        </div>
                        <div className="separator"></div>
                        <div class="plant-info">
                            <div class="section-row">
                                <button>Water</button>
                                <div className="watering-text">
                                    <p>Next Watering</p>
                                    <span>Last Watered</span>
                                </div>
                                <div className="watering-dates">
                                    <p>Overdue!</p>
                                    <span>June 14th</span>
                                </div>
                            </div>

                            <div class="section-row">
                                <button>Repot</button>
                                <div className="potting-text">
                                    <p>Next Repotting</p>
                                    <span>Last Repotted</span>
                                </div>
                                <div className="watering-dates">
                                    <p>June 15th, 2026</p>
                                    <span>June 15th, 2025</span>
                                </div>
                            </div>
                        </div>
                        <div className="separator"></div>
                        <div>
                            <p>Planted</p>
                            <input type="Date" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
