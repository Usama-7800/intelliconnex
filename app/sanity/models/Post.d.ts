import { Image } from "sanity";

export interface Post {
  publishedAt: string;
  _type: string;
  body: Body[];
  slug: Slug;
  _id: string;
  categories: Category[];
  title: string;
  _updatedAt: string;
  mainImage: Image;
  author: Asset;
  _createdAt: string;
  _rev: string;
}

interface MainImage {
  _type: string;
  alt: string;
  asset: Asset;
}

interface Asset {
  _ref: string;
  _type: string;
}

interface Category {
  _ref: string;
  _type: string;
  _key: string;
}

interface Slug {
  current: string;
  _type: string;
}

interface Body {
  _key: string;
  markDefs: any[];
  children: Child[];
  _type: string;
  style: string;
}

interface Child {
  _type: string;
  marks: any[];
  text: string;
  _key: string;
}
