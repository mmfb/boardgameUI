// Actions
async function requestEndTurn() {
    try {
        const response = await fetch(`/api/plays/endturn`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "PATCH"
            });
        return { successful: response.status == 200 };
    } catch (err) {
        // Treat 500 errors here
        console.log(err);
        return { err: err };
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