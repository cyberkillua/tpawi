import { env } from "@/env";

export type CampaignKey = string;

export type GalleryItem = {
  id: string;
  campaign: CampaignKey;
  campaignName: string;
  year: number;
  tag: string;
  title: string;
  description?: string;
  src: string;
  type: "image" | "video";
  poster?: string;
  span?: "tall" | "wide" | "big";
  sortOrder: number;
};

export type GalleryGroup = {
  key: CampaignKey;
  label: string;
  description: string;
};

type AirtableAttachment = {
  url?: string;
  type?: string;
  thumbnails?: {
    large?: { url?: string };
    full?: { url?: string };
  };
};

type AirtableRecord = {
  id: string;
  fields: {
    Title?: string;
    Description?: string;
    Campaign?: string;
    Year?: number;
    Media?: AirtableAttachment[];
    "Media Type"?: string;
    Featured?: boolean;
    "Sort Order"?: number;
    Published?: boolean;
  };
};

type AirtableResponse = {
  records?: AirtableRecord[];
  offset?: string;
};

export const FALLBACK_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    campaign: campaignKey("World Menstrual Hygiene Day", 2025),
    campaignName: "World Menstrual Hygiene Day",
    year: 2025,
    tag: "World Menstrual Hygiene Day · 2025",
    title: "Volunteer with menstrual hygiene education cards",
    src: "/optimized/gallery/IMG_4153.webp",
    type: "image",
    span: "big",
    sortOrder: 10,
  },
  {
    id: "g2",
    campaign: campaignKey("World Menstrual Hygiene Day", 2025),
    campaignName: "World Menstrual Hygiene Day",
    year: 2025,
    tag: "World Menstrual Hygiene Day · 2025",
    title: "Sanitary pads and health education supplies",
    src: "/optimized/gallery/IMG_3882.webp",
    type: "image",
    span: "tall",
    sortOrder: 20,
  },
  {
    id: "g3",
    campaign: campaignKey("World Menstrual Hygiene Day", 2025),
    campaignName: "World Menstrual Hygiene Day",
    year: 2025,
    tag: "World Menstrual Hygiene Day · 2025",
    title: "Menstrual hygiene awareness materials on display",
    src: "/optimized/gallery/IMG_4184.webp",
    type: "image",
    sortOrder: 30,
  },
  {
    id: "g4",
    campaign: campaignKey("World Malaria Day", 2025),
    campaignName: "World Malaria Day",
    year: 2025,
    tag: "World Malaria Day · 2025",
    title: "World Malaria Day outreach recap",
    src: "/optimized/gallery/video/vid_1487.m4v",
    poster: "/optimized/gallery/IMG_1539.webp",
    type: "video",
    sortOrder: 40,
  },
  {
    id: "g5",
    campaign: campaignKey("World Menstrual Hygiene Day", 2025),
    campaignName: "World Menstrual Hygiene Day",
    year: 2025,
    tag: "World Menstrual Hygiene Day · 2025",
    title: "World Menstrual Hygiene Day education board",
    src: "/optimized/gallery/IMG_4248.webp",
    type: "image",
    span: "wide",
    sortOrder: 50,
  },
  {
    id: "g6",
    campaign: campaignKey("Hepatitis B Vaccine Outreach", 2025),
    campaignName: "Hepatitis B Vaccine Outreach",
    year: 2025,
    tag: "Hepatitis B Vaccine Outreach · 2025",
    title: "Free Hepatitis B vaccine campaign banner",
    src: "/optimized/gallery/IMG_9110.webp",
    type: "image",
    sortOrder: 60,
  },
  {
    id: "g7",
    campaign: campaignKey("Hepatitis B Vaccine Outreach", 2025),
    campaignName: "Hepatitis B Vaccine Outreach",
    year: 2025,
    tag: "Hepatitis B Vaccine Outreach · 2025",
    title: "Community health awareness banner",
    src: "/optimized/gallery/IMG_9111.webp",
    type: "image",
    sortOrder: 70,
  },
  {
    id: "g8",
    campaign: campaignKey("World Menstrual Hygiene Day", 2025),
    campaignName: "World Menstrual Hygiene Day",
    year: 2025,
    tag: "World Menstrual Hygiene Day · 2025",
    title: "Health education materials recap",
    src: "/optimized/gallery/video/vid_3879.m4v",
    poster: "/optimized/gallery/IMG_3882.webp",
    type: "video",
    span: "tall",
    sortOrder: 80,
  },
  {
    id: "g9",
    campaign: campaignKey("Hepatitis B Vaccine Outreach", 2025),
    campaignName: "Hepatitis B Vaccine Outreach",
    year: 2025,
    tag: "Hepatitis B Vaccine Outreach · 2025",
    title: "Team members at a vaccination awareness stand",
    src: "/optimized/gallery/IMG_9189.webp",
    type: "image",
    sortOrder: 90,
  },
  {
    id: "g10",
    campaign: campaignKey("Hepatitis B Vaccine Outreach", 2025),
    campaignName: "Hepatitis B Vaccine Outreach",
    year: 2025,
    tag: "Hepatitis B Vaccine Outreach · 2025",
    title: "Hepatitis B vaccine campaign signage",
    src: "/optimized/gallery/IMG_9197.webp",
    type: "image",
    span: "wide",
    sortOrder: 100,
  },
  {
    id: "g11",
    campaign: campaignKey("World Menstrual Hygiene Day", 2025),
    campaignName: "World Menstrual Hygiene Day",
    year: 2025,
    tag: "World Menstrual Hygiene Day · 2025",
    title: "Menstrual hygiene education handout",
    src: "/optimized/gallery/IMG_4249.webp",
    type: "image",
    sortOrder: 110,
  },
  {
    id: "g12",
    campaign: campaignKey("Hepatitis B Vaccine Outreach", 2025),
    campaignName: "Hepatitis B Vaccine Outreach",
    year: 2025,
    tag: "Hepatitis B Vaccine Outreach · 2025",
    title: "Volunteer pointing to campaign information",
    src: "/optimized/gallery/IMG_9198.webp",
    type: "image",
    sortOrder: 120,
  },
  {
    id: "g13",
    campaign: campaignKey("World Malaria Day", 2025),
    campaignName: "World Malaria Day",
    year: 2025,
    tag: "World Malaria Day · 2025",
    title: "World Malaria Day field recap",
    src: "/optimized/gallery/video/vid_1497.m4v",
    poster: "/optimized/gallery/IMG_1616.webp",
    type: "video",
    sortOrder: 130,
  },
  {
    id: "g14",
    campaign: campaignKey("Hepatitis B Vaccine Outreach", 2025),
    campaignName: "Hepatitis B Vaccine Outreach",
    year: 2025,
    tag: "Hepatitis B Vaccine Outreach · 2025",
    title: "Team photo after a health awareness activity",
    src: "/optimized/gallery/IMG_9207.webp",
    type: "image",
    sortOrder: 140,
  },
  {
    id: "g15",
    campaign: campaignKey("World Malaria Day", 2025),
    campaignName: "World Malaria Day",
    year: 2025,
    tag: "World Malaria Day · 2025",
    title: "Volunteer in TPAWI outreach shirt",
    src: "/optimized/gallery/IMG_1539.webp",
    type: "image",
    sortOrder: 150,
  },
  {
    id: "g16",
    campaign: campaignKey("World Menstrual Hygiene Day", 2025),
    campaignName: "World Menstrual Hygiene Day",
    year: 2025,
    tag: "World Menstrual Hygiene Day · 2025",
    title: "Menstrual hygiene outreach video",
    src: "/optimized/gallery/video/vid_3896.m4v",
    poster: "/optimized/gallery/IMG_4153.webp",
    type: "video",
    sortOrder: 160,
  },
  {
    id: "g17",
    campaign: campaignKey("World Menstrual Hygiene Day", 2025),
    campaignName: "World Menstrual Hygiene Day",
    year: 2025,
    tag: "World Menstrual Hygiene Day · 2025",
    title: "Handmade poster on menstrual health myths",
    src: "/optimized/gallery/IMG_1992.webp",
    type: "image",
    span: "wide",
    sortOrder: 170,
  },
  {
    id: "g18",
    campaign: campaignKey("World Malaria Day", 2025),
    campaignName: "World Malaria Day",
    year: 2025,
    tag: "World Malaria Day · 2025",
    title: "Outreach volunteers in branded shirts",
    src: "/optimized/gallery/IMG_1616.webp",
    type: "image",
    span: "tall",
    sortOrder: 180,
  },
  {
    id: "g19",
    campaign: campaignKey("World Malaria Day", 2026),
    campaignName: "World Malaria Day",
    year: 2026,
    tag: "World Malaria Day · 2026",
    title: "Volunteer presenting outreach supplies",
    src: "/optimized/gallery/wa_01.webp",
    type: "image",
    span: "wide",
    sortOrder: 190,
  },
  {
    id: "g20",
    campaign: campaignKey("World Malaria Day", 2026),
    campaignName: "World Malaria Day",
    year: 2026,
    tag: "World Malaria Day · 2026",
    title: "Community member holding an antimalarial pledge sign",
    src: "/optimized/gallery/wa_02.webp",
    type: "image",
    sortOrder: 200,
  },
  {
    id: "g21",
    campaign: campaignKey("World Malaria Day", 2026),
    campaignName: "World Malaria Day",
    year: 2026,
    tag: "World Malaria Day · 2026",
    title: "Volunteers sharing health information at a market stall",
    src: "/optimized/gallery/wa_03.webp",
    type: "image",
    sortOrder: 210,
  },
  {
    id: "g22",
    campaign: campaignKey("World Malaria Day", 2026),
    campaignName: "World Malaria Day",
    year: 2026,
    tag: "World Malaria Day · 2026",
    title: "Volunteers checking in with community members",
    src: "/optimized/gallery/wa_04.webp",
    type: "image",
    sortOrder: 220,
  },
  {
    id: "g23",
    campaign: campaignKey("World Malaria Day", 2026),
    campaignName: "World Malaria Day",
    year: 2026,
    tag: "World Malaria Day · 2026",
    title: "Volunteers speaking with a family at a stall",
    src: "/optimized/gallery/wa_05.webp",
    type: "image",
    sortOrder: 230,
  },
  {
    id: "g24",
    campaign: campaignKey("World Malaria Day", 2026),
    campaignName: "World Malaria Day",
    year: 2026,
    tag: "World Malaria Day · 2026",
    title: "Outreach supplies shared during a market visit",
    src: "/optimized/gallery/wa_06.webp",
    type: "image",
    span: "tall",
    sortOrder: 240,
  },
  {
    id: "g25",
    campaign: campaignKey("World Malaria Day", 2026),
    campaignName: "World Malaria Day",
    year: 2026,
    tag: "World Malaria Day · 2026",
    title: "Community member holding an antimalarial pledge sign",
    src: "/optimized/gallery/wa_07.webp",
    type: "image",
    sortOrder: 250,
  },
  {
    id: "g26",
    campaign: campaignKey("World Malaria Day", 2026),
    campaignName: "World Malaria Day",
    year: 2026,
    tag: "World Malaria Day · 2026",
    title: "Volunteer holding malaria prevention message boards",
    src: "/optimized/gallery/wa_08.webp",
    type: "image",
    sortOrder: 260,
  },
];

export function campaignKey(campaignName: string, year: number) {
  return `${slugify(campaignName)}-${year}`;
}

export function buildGalleryGroups(items: GalleryItem[]): GalleryGroup[] {
  const groups = new Map<CampaignKey, GalleryGroup>();

  for (const item of items) {
    if (groups.has(item.campaign)) continue;
    groups.set(item.campaign, {
      key: item.campaign,
      label: `${item.campaignName} ${item.year}`,
      description: campaignDescription(item.campaignName, item.year),
    });
  }

  return [...groups.values()].sort((a, b) => {
    const first = items.find((item) => item.campaign === a.key);
    const second = items.find((item) => item.campaign === b.key);
    return (second?.year ?? 0) - (first?.year ?? 0);
  });
}

export async function getGalleryItems(): Promise<GalleryItem[]> {
  const token = env.AIRTABLE_TOKEN;
  const baseId = env.AIRTABLE_BASE_ID;
  const tableName = env.AIRTABLE_GALLERY_TABLE;

  if (!token || !baseId || !tableName) {
    return FALLBACK_GALLERY_ITEMS;
  }

  try {
    const items = await fetchAirtableGalleryItems(token, baseId, tableName);
    return items.length > 0 ? items : FALLBACK_GALLERY_ITEMS;
  } catch (error) {
    console.warn("Falling back to local gallery items:", error);
    return FALLBACK_GALLERY_ITEMS;
  }
}

async function fetchAirtableGalleryItems(
  token: string,
  baseId: string,
  tableName: string,
) {
  const records: AirtableRecord[] = [];
  let offset: string | undefined;

  do {
    const url = new URL(
      `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`,
    );
    url.searchParams.set("pageSize", "100");
    url.searchParams.set("filterByFormula", "{Published}=TRUE()");
    url.searchParams.append("sort[0][field]", "Sort Order");
    url.searchParams.append("sort[0][direction]", "asc");
    if (offset) url.searchParams.set("offset", offset);

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Airtable request failed: ${response.status}`);
    }

    const data = (await response.json()) as AirtableResponse;
    records.push(...(data.records ?? []));
    offset = data.offset;
  } while (offset);

  return records.map(recordToGalleryItem).filter((item) => item !== null);
}

function recordToGalleryItem(record: AirtableRecord): GalleryItem | null {
  const fields = record.fields;
  const media = fields.Media?.[0];
  const campaignName = fields.Campaign?.trim();
  const year = fields.Year;
  const mediaUrl = media?.url;

  if (!campaignName || !year || !mediaUrl) return null;

  const mediaType = fields["Media Type"] === "video" ? "video" : "image";
  const title = fields.Title?.trim() || `${campaignName} ${year}`;

  return {
    id: record.id,
    campaign: campaignKey(campaignName, year),
    campaignName,
    year,
    tag: `${campaignName} · ${year}`,
    title,
    description: fields.Description?.trim(),
    src: mediaUrl,
    poster:
      mediaType === "video"
        ? media.thumbnails?.large?.url ?? media.thumbnails?.full?.url
        : undefined,
    type: mediaType,
    sortOrder: fields["Sort Order"] ?? 0,
  };
}

function campaignDescription(campaignName: string, year: number) {
  if (campaignName === "World Malaria Day") {
    return year >= 2026
      ? "Market outreach, prevention messages, and community pledge moments."
      : "Field moments, volunteer portraits, and malaria awareness activities.";
  }

  if (campaignName === "World Menstrual Hygiene Day") {
    return "Menstrual health education, pads, and awareness materials.";
  }

  if (campaignName === "Hepatitis B Vaccine Outreach") {
    return "Vaccination awareness signage and campaign team moments.";
  }

  return "Photos and videos from this outreach campaign.";
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
