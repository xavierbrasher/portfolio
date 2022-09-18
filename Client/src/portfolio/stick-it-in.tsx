export default function StickItIn() {
    return (
        <div className="text-xl mb-14">
            <img alt="Stick It In Logo" src={"/stick-it-in.png"} />
            <h1 className="text-5xl font-bold mb-4">Stick It In</h1>
            <p>A fun and simple (looking) game</p>
            <p className="mb-4">
                It is about moving a cube left and right while it speeds up to
                Lightning Mcqueen speeds
            </p>
            <p className="mb-2">Gameplay image:</p>
            <img alt="Gameplay image" src="/screenshot_of_gameplay.png" />
            <a
                href="https://github.com/xavierbrasher/stick-it-in-exacutables"
                className="btn btn-primary mt-2 mb-2"
            >
                Downloads
            </a>
        </div>
    );
}
