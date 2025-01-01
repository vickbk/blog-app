import { useRef } from "react";

const NoReloadForm = ({callback, children}: {callback: (form: HTMLFormElement, event?: React.FormEvent)=>any, children: React.ReactNode})=>{
    const formRef = useRef<HTMLFormElement>(null);
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (formRef.current) {
            callback(formRef.current, event);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-group" ref={formRef}>
            {children}
        </form>
    );
}
export default NoReloadForm;