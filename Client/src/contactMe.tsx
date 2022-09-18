import { useEffect, useRef, useState } from "react";

export default function ContactMe() {
    let formRef = useRef(HTMLFormElement);
    let [empty, setEmpty] = useState(false);
    let [responce, setResponce] = useState("");
    let [showToast, setShowToast] = useState(false);

    useEffect(() => {
        document.title = "Contact Me";
    }, []);

    let grabber = async (e: any) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const content = e.target.content.value;
        if (name == "") {
            setEmpty(true);
            return;
        }
        if (email == "") {
            setEmpty(true);
            return;
        }
        if (content == "") {
            setEmpty(true);
            return;
        }
        const api = await fetch(
            "/api/sendmessage?" +
                new URLSearchParams({
                    name: name,
                    email: email,
                    content: content,
                    apikey: "thisisnothiddenatall",
                })
        );
        const { responce } = await api.json();
        if (responce == 0) {
            setResponce("Sent Succesfully");
            setShowToast(true);
        } else {
            setResponce("Failed to Send");
            setShowToast(true);
        }
    };

    let clear = (e: any) => {
        e.preventDefault();
        let form: any = document.getElementById("contact-me-form");
        setEmpty(false);
        form.reset();
    };

    return (
        <>
            <h1 className="text-5xl font-bold mb-3">Send Me An Email</h1>
            <form id="contact-me-form" onSubmit={grabber}>
                <label className="label">
                    <span className="label-text text-xl">Name:</span>
                </label>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-90 max-w-xs"
                    name="name"
                />
                <label className="label">
                    <span className="label-text text-xl">Email:</span>
                </label>
                <input
                    type="email"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    name="email"
                />
                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text text-xl">Content:</span>
                    </label>
                    <textarea
                        className="textarea textarea-bordered h-24"
                        placeholder="Type Here"
                        name="content"
                    />
                </div>
                {empty && (
                    <>
                        <p className="mb-2 border-2 w-44 border-dotted border-normal rounded-lg text-center">
                            Please fill in all blanks
                        </p>
                    </>
                )}
                <button type="submit" className="btn btn-primary inline mr-3">
                    Submit
                </button>
                <button onClick={clear} className="btn btn-error inline">
                    Clear
                </button>
            </form>
            {showToast && (
                <div className="mb-14 toast">
                    <div className="alert alert-info">
                        <div>
                            <span>{responce}</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
