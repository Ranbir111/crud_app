"use client";
import { FormEventHandler } from "react";

let fileSize: number = 0;

export const getFileSize = (event: any) => {
    const file = event.target.files[0]
    const size = file.size // it's in bytes
    fileSize = size;
}

export const submitHandle: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const type = formData.get('transcode_kind')?.toString().toLowerCase();
    const response: { generated_name: string } = await fetch('https://api.ai-coustics.com/v1/media/enhance', {
        method: 'POST',
        body: formData,
        headers: {
            'X-API-Key': '745bb71363d41a51765625619ef47bbdefb0ddec356fbb81d90fc91931d558cf'
        }
    }).then(
        response => { return response.json() }
    )

    setTimeout(async () => {
        await fetch('https://api.ai-coustics.com/v1/media/' + response.generated_name, {
            method: 'GET',
            headers: {
                'X-API-Key': '745bb71363d41a51765625619ef47bbdefb0ddec356fbb81d90fc91931d558cf',
                responseType: "blob",
            }
        }).then(
            response => response.blob()
        ).then(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'file.' + type;
            a.click();
        })
    }, fileSize / 50)

    // redirect("https://api.ai-coustics.com/v1/media/" + response.generated_name);
}