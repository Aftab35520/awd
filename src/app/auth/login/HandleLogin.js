import LiveUrl from "@/app/comonents/Url";
async function Loginhandle({ email, password }) {
    try {
        const res = await fetch(`${LiveUrl}login`, {
            method: "POST",
            body: JSON.stringify({ email, password }), 
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


export default Loginhandle

