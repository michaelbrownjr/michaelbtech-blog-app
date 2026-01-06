import { DrupalClient } from "next-drupal";

export const drupal = new DrupalClient(
  process.env.NEXT_PUBLIC_DRUPAL_BASE_URL || "",
  {
    auth: {
      clientId: process.env.DRUPAL_CLIENT_ID || "valid_id", // Fallback to avoid build error if missing
      clientSecret: process.env.DRUPAL_CLIENT_SECRET || "valid_secret",
    },
  }
);
