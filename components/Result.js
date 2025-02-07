function Result({ results, isVisible }) {
    try {
        if (!isVisible) return null;

        const sortedResults = [...results].sort((a, b) => a.number - b.number);

        return (
            <div 
                data-name="results"
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                onClick={(e) => e.currentTarget === e.target && window.location.reload()}
            >
                <div 
                    data-name="results-container"
                    className="bg-white p-6 sm:p-8 rounded-lg shadow-xl result-appear w-full max-w-md"
                >
                    <h2 
                        data-name="results-title"
                        className="text-xl sm:text-2xl font-bold mb-6 text-center text-blue-600"
                    >
                        抽選結果
                    </h2>
                    <div 
                        data-name="results-list"
                        className="space-y-4"
                    >
                        {sortedResults.map((result, index) => (
                            <div 
                                key={index}
                                data-name={`result-item-${index}`}
                                className="flex justify-between items-center p-3 border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200"
                            >
                                <span className="font-medium text-lg text-gray-800">{result.name}</span>
                                <span className="text-xl text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full">#{result.number}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 text-center">
                        <button
                            data-name="close-button"
                            onClick={() => window.location.reload()}
                            className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
                        >
                            もう一度抽選する
                        </button>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
