export const componentePeticion = (dataPiloto, userMessage) => {
    const URL_API = "https://api.openai.com/v1/chat/completions";
    const API_KEY = localStorage.getItem("ApyKey");

    return fetch(URL_API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
        },

        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: `Finge que eres ${dataPiloto.name}, contesta como si fueras ${dataPiloto.name}` },
                { role: "user", content: userMessage },
            ],
        }),
    })
}