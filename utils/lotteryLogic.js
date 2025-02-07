function generateRandomNumbers() {
    try {
        const numbers = new Set();
        let attempts = 0;
        const maxAttempts = 100;

        while (numbers.size < 5 && attempts < maxAttempts) {
            numbers.add(Math.floor(Math.random() * 5) + 1);
            attempts++;
        }

        if (numbers.size < 5) {
            throw new Error('Failed to generate unique numbers');
        }

        return Array.from(numbers);
    } catch (error) {
        reportError(error);
        return [1, 2, 3, 4, 5];
    }
}

function mapNumbersToParticipants(numbers) {
    try {
        if (!Array.isArray(numbers) || numbers.length !== 5) {
            throw new Error('Invalid numbers array');
        }

        const participants = ['Ueda', 'Ojima', 'Maruo', 'Mimura', 'Abe'];
        return numbers.map((num, index) => {
            if (typeof num !== 'number' || num < 1 || num > 5) {
                throw new Error(`Invalid number at index ${index}: ${num}`);
            }
            return {
                number: num,
                name: participants[index]
            };
        });
    } catch (error) {
        reportError(error);
        return participants.map((name, index) => ({
            number: index + 1,
            name
        }));
    }
}
