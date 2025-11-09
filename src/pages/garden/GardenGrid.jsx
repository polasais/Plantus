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
                        <div class="plant-care">
                            <div class="section-row">
                                <button>Water</button>
                                <div className="watering-text">
                                    <p>Next Watering</p>
                                    <span>Last Watered</span>
                                </div>
                                <div className="watering-dates">
                                    <p>Overdue!</p>
                                    <span>06/01/2025</span>
                                </div>
                            </div>

                            <div class="section-row">
                                <button>Repot</button>
                                <div className="potting-text">
                                    <p>Next Repotting</p>
                                    <span>Last Repotted</span>
                                </div>
                                <div className="potting-dates">
                                    <p>07/01/2026</p>
                                    <span>06/01/2025</span>
                                </div>
                            </div>
                        </div>
                        <div className="separator"></div>
                        <div className="planted-date">
                            <p>Planted</p>
                            <input type="Date" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
