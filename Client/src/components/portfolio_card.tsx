interface PortfolioCardProps {
    title: string;
    content: string;
    img: string;
    imgAlt: string;
    siteUrl: string;
}

export default function PortfolioCard({
    title,
    content,
    img,
    imgAlt,
    siteUrl,
}: PortfolioCardProps) {
    return (
        <>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img src={img} alt={imgAlt} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{content}</p>
                </div>
            </div>
        </>
    );
}
