export default function DiscordJS() {
    return (
        <div className="text-xl mb-14">
            <img alt="Discord Bot Logo" src={"/discordjs.png"} />
            <h1 className="text-5xl font-bold mb-4">
                Very Special - Discord Bot
            </h1>
            <p className="mb-4">
                A fun and simple (looking) gameIts a discord bot which is
                written in typescript.
                <br /> I'm still working on this project and it's going well.{" "}
                <br /> It has a number of commands and can be downloaded and
                tested on Github. <br /> <br /> Jessus once said "If it aint't
                type checked, it ain't right". <br /> Its currently being hosted
                at Digital Ocean for 5 bucks a month and its doing a good job
            </p>
            <h1 className="text-4xl mb-3 font-bold">Installation</h1>
            <p>Its as simple as 1, 2, 3.</p>
            <ul className="list-decimal ml-8">
                <li>Clone the repo</li>
                <li>Create an .env file (Check Configuration on Github)</li>
                <li>
                    Run{" "}
                    <code className="bg-base-300 rounded px-2">yarn build</code>{" "}
                    or{" "}
                    <code className="bg-base-300 rounded px-2">
                        npm run build
                    </code>
                </li>
                <li>
                    Then run{" "}
                    <code className="bg-base-300 rounded px-2">yarn start</code>{" "}
                    or{" "}
                    <code className="bg-base-300 rounded px-2">
                        npm run start
                    </code>
                </li>
                <li>AND boom its up and running</li>
            </ul>
            <a
                href="https://github.com/xavierbrasher/Discord-Bot-Very-Special"
                className="btn btn-primary mt-4"
            >
                Discord Bot Github
            </a>
        </div>
    );
}
