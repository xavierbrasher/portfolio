import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

export default function NavBar() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );
    const [themeMenuOpened, setThemeMenuOpened] = useState(false);
    const themeMenuButton = useRef<HTMLLabelElement>(null);
    const themeMenu = useRef<HTMLDivElement>(null);

    const HamburgerButton = () => {
        return <span className="material-symbols-outlined">menu</span>;
    };

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (!themeMenuOpened) {
            (document.activeElement as HTMLElement).blur();
        } else if (
            themeMenuOpened &&
            !themeMenu.current?.contains(document.activeElement)
        ) {
            setThemeMenuOpened(false);
        }
    }, [themeMenuOpened]);

    return (
        <div className="navbar bg-base-300">
            <div className="flex-1 xl:ml-3">
                <Link
                    to={"/"}
                    className="btn btn-ghost normal-case  xl:text-xl lg:text-xl font-semibold text-base"
                >
                    Xavier Brasher
                </Link>
            </div>
            {windowDimensions.width >= 500 ? (
                <div className="flex-none mr-3">
                    <ul className="menu menu-horizontal p-0">
                        <li>
                            <Link to={"/portfolio"}>Portfolio</Link>
                        </li>
                        <li className="ml-2">
                            <Link to={"/contactme"}>Contact Me</Link>
                        </li>
                    </ul>
                </div>
            ) : (
                <div ref={themeMenu} className="dropdown dropdown-end">
                    <label
                        ref={themeMenuButton}
                        tabIndex={0}
                        className="btn btn-ghost btn-circle"
                        onClick={(e) => {
                            if (themeMenuOpened) {
                                setThemeMenuOpened(false);
                            } else setThemeMenuOpened(true);
                        }}
                    >
                        <HamburgerButton />
                    </label>
                    <ul
                        tabIndex={0}
                        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-200 rounded-box w-56"
                        onFocus={(e) => {
                            setThemeMenuOpened(true);
                        }}
                        onBlur={(e) => {
                            themeMenuButton.current?.focus();
                        }}
                    >
                        <li
                            onClick={(e) => {
                                setThemeMenuOpened(true);
                            }}
                        >
                            <Link to={"/portfolio"}>Portfolio</Link>
                        </li>
                        <li
                            onClick={(e) => {
                                setThemeMenuOpened(true);
                            }}
                        >
                            <Link to={"/contactme"}>Contact Me</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
