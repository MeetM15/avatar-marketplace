import { Platform, PlatformType } from "@/types";

// Constants for platforms
export const platformsData: Platform[] = [
  {
    id: PlatformType.VRChatQuest,
    label: "VRChat (Quest)",
    image: "/platforms/vrchat.png",
    imageHeight: 24,
    imageWidth: 52,
    imageStyle: {
      filter: "drop-shadow(0px 0px 12px rgba(30, 248, 77, 0.72))",
    },
  },
  {
    id: PlatformType.VRChatPCVR,
    label: "VRChat (PCVR)",
    imageHeight: 24,
    imageWidth: 52,
    image: "/platforms/vrchat.png",
    imageStyle: {
      filter: "drop-shadow(0px 0px 12px rgba(28, 248, 239, 0.88))",
    },
  },
  {
    id: PlatformType.Spatial,
    label: "Spatial",
    imageHeight: 24,
    imageWidth: 28,
    image: "/platforms/spatial.png",
  },
  {
    id: PlatformType.ChilloutVR,
    label: "ChilloutVR",

    imageHeight: 20,
    imageWidth: 41,
    image: "/platforms/cvr.png",
  },
  {
    id: PlatformType.Resonite,
    label: "Resonite",
    imageHeight: 25,
    imageWidth: 26,
    image: "/platforms/resonite.png",
  },
  {
    id: PlatformType.NeosVR,
    label: "Neos VR",
    image: "/platforms/neos.png",
    imageHeight: 24,
    imageWidth: 24,
  },
  {
    id: PlatformType.Cluster,
    label: "Cluster",
    imageHeight: 24,
    imageWidth: 34,
    image: "/platforms/cluster.png",
  },
  {
    id: PlatformType.VirtualCast,
    label: "Virtual Cast",
    imageHeight: 26,
    imageWidth: 26,
    image: "/platforms/virtual_cast.png",
  },
  { id: PlatformType.Others, label: "Others", imageHeight: 0, imageWidth: 0 },
];
