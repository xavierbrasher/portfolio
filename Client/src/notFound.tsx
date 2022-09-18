import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="text-center">
            <h1 className="font-bold text-6xl">404</h1>
            <p className="text-3xl mb-3">Page Not Found</p>
            <Link className="btn btn-primary" to="/">
                Home
            </Link>
        </div>
    );
}
