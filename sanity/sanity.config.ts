import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import event from "./schemas/event";
import pastEvent from "./schemas/pastEvent";
import partner from "./schemas/partner";
import teamMember from "./schemas/teamMember";

export default defineConfig({
  name: "tsu-community-farm",
  title: "TSU Community Farm CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [event, pastEvent, partner, teamMember],
  },
});
