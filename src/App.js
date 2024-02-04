import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Lil from "./lil.jpeg";
import Lil2 from "./2.jpeg";
import Lil3 from "./3.jpeg";
import Lil4 from "./4.jpeg";

function App() {
    const [nameVal, setNameVal] = useState("");
    const [toggleView, setToggleView] = useState(true);

    const handleSubmit = () => {
        setToggleView(false);
    };
    return (
        <main>
            {toggleView ? (
                <div className="firstView">
                    <h2>Enter your name</h2>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={nameVal}
                        onChange={(e) => setNameVal(e.target.value)}
                    />
                    <button disabled={!nameVal} onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            ) : (
                <>
                    <h2>Click this card</h2>
                    <div className="body">
                        <div className="birthdayCard">
                            <div className="cardFront">
                                <h3 className="happy">
                                    HAPPY BIRTHDAY! {nameVal}
                                </h3>
                                <div className="balloons">
                                    <div className="balloonOne">
                                        <img src={Lil} alt="" />
                                    </div>

                                    <div className="balloonTwo">
                                        <img src={Lil2} alt="" />
                                    </div>
                                    <div className="balloonThree">
                                        <img src={Lil3} alt="" />
                                    </div>
                                    <div className="balloonFour">
                                        <img src={Lil4} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="cardInside">
                                <h3 className="back">HAPPY BIRTHDAY!</h3>
                                <p contenteditable="true">Dear {nameVal},</p>
                                <p contenteditable="true">
                                    "Happy Birthday to lil kittu.! May your year
                                    be filled with joy, laughter, love, and
                                    unforgettable moments. 🎉🎂💖"
                                </p>
                                <p contenteditable="true" className="name">
                                    Adnan
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </main>
    );
}

export default App;
