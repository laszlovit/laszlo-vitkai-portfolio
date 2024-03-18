import { z, defineCollection } from "astro:content";
import { format } from "date-fns";

const projectsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      date: z
        .string()
        .transform((str) => format(new Date(str), "MMMM d, yyyy")),
      featured: z.boolean().default(false),
      image: image(),
      icon: image(),
      title: z.string(),
      description: z.string(),
      link: z.string(),
    }),
});

export const collections = {
  projects: projectsCollection,
};
