import { Platform, PlatformType } from "@/types";

// Constants for platforms
export const platformsData: Platform[] = [
  {
    id: PlatformType.VRChatQuest,
    label: "VRChat (Quest)",
    image: "/platforms/vrchat.png",
  },
  {
    id: PlatformType.VRChatPCVR,
    label: "VRChat (PCVR)",
    image: "/platforms/vrchatpcvr.png",
  },
  {
    id: PlatformType.Spatial,
    label: "Spatial",
    image: "/platforms/spatial.png",
  },
  {
    id: PlatformType.ChilloutVR,
    label: "ChilloutVR",

    image: "/platforms/cvr.png",
  },
  {
    id: PlatformType.Resonite,
    label: "Resonite",
    image: "/platforms/resonite.png",
  },
  { id: PlatformType.NeosVR, label: "Neos VR", image: "/platforms/neos.png" },
  {
    id: PlatformType.Cluster,
    label: "Cluster",
    image: "/platforms/cluster.png",
  },
  {
    id: PlatformType.VirtualCast,
    label: "Virtual Cast",
    image: "/platforms/virtual_cast.png",
  },
  { id: PlatformType.Others, label: "Others" },
];
