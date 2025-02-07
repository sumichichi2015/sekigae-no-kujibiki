function Paper({ index, isGrabbed, isUnfolded, number }) {
    try {
        const animationClass = isGrabbed 
            ? 'paper-grab' 
            : isUnfolded 
                ? 'paper-unfold' 
                : '';

        const floatClass = isUnfolded && !isGrabbed ? 'paper-float' : '';

        const baseStyle = {
            zIndex: isUnfolded ? 5 - index : 1,
            transform: !isGrabbed && !isUnfolded ? `rotate(${(index - 2) * 2}deg)` : undefined,
            left: `calc(50% - 200px + ${index * 80}px)`,
            '@media (min-width: 640px)': {
                left: `calc(50% - 250px + ${index * 100}px)`
            }
        };

        return (
            <div 
                data-name="paper"
                className={`paper mx-2 ${animationClass} ${floatClass} absolute`}
                style={baseStyle}
            >
                {isUnfolded && (
                    <div 
                        data-name="paper-number"
                        className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl font-bold text-blue-600 bg-blue-50 rounded-sm"
                    >
                        {number}
                    </div>
                )}
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
