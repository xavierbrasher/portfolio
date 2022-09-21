export default async function sendPush(
    name: String,
    email: String,
    content: String
) {
    const { PUSHOVER_USER, PUSHOVER_TOKEN } = process.env;
    var msg = {
        message: `Name: ${name} \nEmail: ${email} \nContent: \n${content}`,
        title: "Portfolio Contact Me",
        sound: "magic",
        priority: "0",
    };
    let status: any;
    if (PUSHOVER_TOKEN && PUSHOVER_USER) {
        const responce = await fetch(
            "https://api.pushover.net/1/messages.json?" +
                new URLSearchParams({
                    token: PUSHOVER_TOKEN,
                    user: PUSHOVER_USER,
                    message: msg.message,
                    title: msg.title,
                    sound: msg.sound,
                    priority: msg.priority,
                }),
            { method: "POST" }
        );
        const json: any = await responce.json();
        if (json) {
            status = json.status || 0;
        }
    }
    return status;
}
