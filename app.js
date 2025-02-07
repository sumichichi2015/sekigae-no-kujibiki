function App() {
    const [isDrawing, setIsDrawing] = React.useState(false);
    const [handsVisible, setHandsVisible] = React.useState(false);
    const [papersGrabbed, setPapersGrabbed] = React.useState(false);
    const [papersUnfolded, setPapersUnfolded] = React.useState(false);
    const [showResults, setShowResults] = React.useState(false);
    const [results, setResults] = React.useState([]);

    const startDrawing = async () => {
        try {
            setIsDrawing(true);
            
            // Step 1: Show hands
            setHandsVisible(true);
            await new Promise(resolve => setTimeout(resolve, 1200));

            // Step 2: Generate results
            const numbers = generateRandomNumbers();
            const mappedResults = mapNumbersToParticipants(numbers);
            setResults(mappedResults);

            // Step 3: Unfold papers in place
            setPapersUnfolded(true);
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Step 4: Show results table
            setShowResults(true);
            setIsDrawing(false);
        } catch (error) {
            reportError(error);
            resetDrawing();
        }
    };

    const resetDrawing = () => {
        try {
            setIsDrawing(false);
            setHandsVisible(false);
            setPapersGrabbed(false);
            setPapersUnfolded(false);
            setShowResults(false);
            setResults([]);
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div 
            data-name="lottery-app"
            className="lottery-container flex flex-col items-center justify-start"
        >
            <Title />
            
            <div 
                data-name="papers-container"
                className="papers-container relative mb-6 sm:mb-8 h-[150px] sm:h-[200px] w-full max-w-2xl mx-auto"
            >
                {[0, 1, 2, 3, 4].map(index => (
                    <div key={index} className="relative">
                        <Paper
                            index={index}
                            isGrabbed={papersGrabbed}
                            isUnfolded={papersUnfolded}
                            number={results[index]?.number}
                        />
                        <Hand
                            index={index}
                            isVisible={handsVisible}
                        />
                    </div>
                ))}
            </div>

            <StartButton
                onClick={startDrawing}
                disabled={isDrawing}
            />

            <Result
                results={results}
                isVisible={showResults}
            />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
