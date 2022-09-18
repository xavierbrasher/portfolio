import { Link } from "react-router-dom";

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
        <a href={siteUrl}>
            <div className="card card-side bg-base-300 shadow-xl mt-4">
                <figure className="ml-4">
                    <img width={100} height={100} src={img} alt={imgAlt} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{content}</p>
                </div>
            </div>
        </a>
    );
}
