function Title() {
    try {
        return (
            <div 
                data-name="title-container"
                className="title-container"
            >
                <h1 
                    data-name="japanese-title"
                    className="japanese-title"
                >
                    せきがえのくじびき
                </h1>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
