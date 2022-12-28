import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_ID,
  dataset: "production",
  apiVersion: "2022-12-20",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

const urlFor = source => builder.image(source);

export { client, urlFor };
