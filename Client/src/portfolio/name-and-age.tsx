import { useEffect } from "react";

export default function NameAndAge() {
    useEffect(() => {
        document.title = "Name and Age";
    }, []);
    return (
        <div className="text-xl">
            <img alt="Github Logo" src="/img/githubLogo.png" />
            <h1 className="font-bold text-5xl mb-4">Name and Age rememberer</h1>
            <p className="mb-4">
                Name and Age Remember is a project that I do everytime I learn a
                new language.
                <br /> Sometimes I cannot be bothered to do it but most of the
                time I will make one.
            </p>

            <a
                className="btn btn-primary mr-4"
                href="https://github.com/xavierbrasher/Name-And-Age-Remember-Rust"
            >
                Name and Age Rust
            </a>
            <a
                className="btn btn-primary mr-4"
                href="https://github.com/xavierbrasher/Name-And-Age-Remember-CPP"
            >
                Name and Age C++
            </a>
            <a
                className="btn btn-primary mr-4"
                href="https://github.com/xavierbrasher/nameAndAgeRemember"
            >
                Name and Age Python
            </a>
        </div>
    );
}
