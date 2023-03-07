async function requestBoardInfo() {
    try {
        const response = await fetch(`/api/columns`);
        let result = await response.json();
        return { successful: response.status == 200,
                 unauthenticated: response.status == 401,
                 columns: result};
    } catch (err) {
        // Treat 500 errors here
        console.log(err);
        return {err: err};
    }
}

async function requestRollDice() {
    try {
        const response = await fetch(`/api/plays/dices`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST"
            });
        const result = await response.json();
        return { successful: response.status == 200, dice : result.dice };
    } catch (err) {
        // Treat 500 errors here
        console.log(err);
        return { err: err };
    }
}