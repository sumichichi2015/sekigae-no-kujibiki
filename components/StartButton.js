function StartButton({ onClick, disabled }) {
    try {
        return (
            <button
                data-name="start-button"
                onClick={onClick}
                disabled={disabled}
                className="start-button bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-lg sm:text-xl transition-all duration-300 ease-in-out"
            >
                {disabled ? "抽選中..." : "抽選開始"}
            </button>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
