import LiveUrl from "@/app/comonents/Url";
async function registrationhandle(name, email, password) {
    try {
        const res = await fetch(`${LiveUrl}registration`, {
            method: "POST",
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();
        return data;

    } catch (err) {
        return { success: false, message: err.message };
    }
}

export default registrationhandle

