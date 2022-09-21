import PortfolioCard from "../components/portfolio_card";

export default function Portfolio() {
    return (
        <>
            <h1 className="text-5xl font-bold">Portfolio</h1>
            <PortfolioCard
                title="Stick it in"
                content="A game made in the Unity Engine and with using C#"
                img="/img/stick-it-in.png"
                imgAlt="Stick it in Logo"
                siteUrl="/portfolio/stick-it-in"
            />
            <PortfolioCard
                title="Discord Bot"
                content="A simple bot that I made in discord js, with Typescript"
                img="/img/discordjs.png"
                imgAlt="Discord bot's Logo"
                siteUrl="/portfolio/discordbot"
            />
            <PortfolioCard
                title="Push-Over-Over-Args"
                content="A Pushover CLI sender that is writen in Rust"
                img="/img/pushover.png"
                imgAlt="Pushover Logo"
                siteUrl="https://github.com/xavierbrasher/push_over_over_args"
            />
            <PortfolioCard
                title="Name and Age"
                content="Name and Age is my default project to show that I had learnt the basics of a language"
                img="/img/githubLogo.png"
                imgAlt="Github Logo"
                siteUrl="/portfolio/name-and-age"
            />
        </>
    );
}
