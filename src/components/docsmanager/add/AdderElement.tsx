import InputWithLabel from "@/components/form/InputWithLabel";
import NoReloadForm from "@/components/form/NoReloadForm";
import TextareaWithLabel from "@/components/form/TextareaWithLabel";
import { FocusString } from "@/script/common/FocusString";
import { FormEvent, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export interface docInterface {
    name: string;
    id: string;
    date: string;
    description: string;
    file: string | ArrayBuffer | null;
}

export default function AdderElement (){
    const [image, setImage] = useState<string | ArrayBuffer | null>(null);

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files, file = files?files[0]:null;
        const reader = new FileReader();
        reader.onloadend = () => 
            setImage(reader.result)
        if (file) reader.readAsDataURL(file);
    }

    function handleSubmit (form: HTMLFormElement) {
        const {docName, docDescription, document} = form;
        if (docName.value === "" || docDescription.value === "" || document.value==="") {
            toast.error("Please add all the values.");
            return;
        }

        const date = (new Date()).toLocaleDateString(),
        existingDocs:docInterface[] = JSON.parse(localStorage.getItem("docs") ?? "[]"),
        newDoc : docInterface = {
            name: docName.value,
            id: FocusString.randomString(5),
            date: date,
            description: docDescription.value,
            file: image
        };

        existingDocs.push(newDoc);
        localStorage.setItem("docs", JSON.stringify(existingDocs));
        toast.success(`Document ${docName.value} added successfully!`);
        form.docName.value = "";
        form.docDescription.value="";
        form.document.value="";
    }
    return <NoReloadForm callback={handleSubmit}>
        <InputWithLabel id="docName" required={true} 
        label="Document title" name="docName"/>
        <TextareaWithLabel label="Document description" id="docDescription" 
         name="docDescription" />
        
        <InputWithLabel id="doc" name="document" required={true} type="file" 
        label="document file" onChange={handleImage} />

        <div className="row p-2 justify-content-end">
            <button type="submit" className="col-4 btn btn-primary">Submit</button>
        </div>
        <ToastContainer/>
    </NoReloadForm>
}