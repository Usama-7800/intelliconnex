import { groq } from "next-sanity";

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;
