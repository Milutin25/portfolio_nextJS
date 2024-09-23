import { createClient } from "next-sanity";

export const client = createClient ({
    projectId: "yyyz127i",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: false
})