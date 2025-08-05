'use server'

import axios from "axios";

export async function getInfo() {
    try {
        const { data } = await axios.get(`https://igroom.ru/api/v2/profile/5e800be0-088e-41cb-b549-10ebf4a13591`);
        return data
    }
    catch (error) {
        console.error("Ошибка запроса:", error);
        return { error: "Ошибка запроса" };
    }
}