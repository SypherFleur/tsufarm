import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = createImageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}

// GROQ Queries

export async function getUpcomingEvents(limit = 3) {
  const now = new Date().toISOString();
  return client.fetch(
    `*[_type == "event" && date >= $now] | order(date asc) [0...$limit] {
      _id, title, slug, date, endDate, time, type, description, image, location
    }`,
    { now, limit }
  );
}

export async function getAllUpcomingEvents() {
  const now = new Date().toISOString();
  return client.fetch(
    `*[_type == "event" && date >= $now] | order(date asc) {
      _id, title, slug, date, endDate, time, type, description, image, location
    }`,
    { now }
  );
}

export async function getPastEvents() {
  return client.fetch(
    `*[_type == "pastEvent"] | order(date desc) {
      _id, title, date, description, images,
      partners[]-> { _id, name, logo, website }
    }`
  );
}

export async function getPartners() {
  return client.fetch(
    `*[_type == "partner"] | order(name asc) {
      _id, name, logo, website
    }`
  );
}

export async function getTeamMembers() {
  return client.fetch(
    `*[_type == "teamMember"] | order(name asc) {
      _id, name, role, photo, bio
    }`
  );
}
