import "./App.css";
import { steps } from "./steps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessClock } from "@fortawesome/pro-solid-svg-icons/faChessClock";

function App() {
    const renderedSteps = steps.map((stepInfo) => {
        const subSteps = stepInfo.steps.map((step) => {
            const stepText = step
                .replace("__PLAY__", '<span class="button">Play</span>')
                .replace("__STOPP__", '<span class="button">Stop</span>')
                .replace("__OK__", '<span class="button">OK</span>')
                .replace("__H+__", '<span class="button">H+</span>')
                .replace("__H-__", '<span class="button">H-</span>')
                .replace("__G+__", '<span class="button">G+</span>')
                .replace("__G-__", '<span class="button">G-</span>');

            return <li key={step} dangerouslySetInnerHTML={{ __html: stepText }} />;
        });

        return (
            <div key={stepInfo.header}>
                <h2>{stepInfo.header}</h2>
                <ul>{subSteps}</ul>
            </div>
        );
    });

    return (
        <div className="App">
            <header>
                <div className="header-icon">
                    <FontAwesomeIcon icon={faChessClock} />
                </div>
                <h1>Aksla Stadionur</h1>
            </header>
            {renderedSteps}
        </div>
    );
}

export default App;
