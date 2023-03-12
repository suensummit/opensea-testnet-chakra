import {
  MdLocalFireDepartment,
  MdBolt,
  MdOnlinePrediction,
} from "react-icons/md";

const exploreRouterMenu = [
  {
    sectionId: "Assets",
    sectionLabel: "Assets",
    sectionItems: [
      {
        path: "asset",
        label: "Popular",
        Icon: MdLocalFireDepartment,
      },
      {
        path: "asset",
        label: "Latest",
        Icon: MdBolt,
      },
      {
        path: "asset",
        label: "Upcoming",
        Icon: MdOnlinePrediction,
      },
    ],
  },
];

export default exploreRouterMenu;