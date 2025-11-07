// src/api/useSiteInfo.ts
import { useQuery } from "@tanstack/react-query";
import moodleClient from "../services/moodleClient";

interface SiteInfo {
  sitename: string;
  username: string;
  firstname: string;
  lastname: string;
  fullname: string;
}

export function useSiteInfo() {
  return useQuery<SiteInfo>({
    queryKey: ["siteInfo"],
    queryFn: async () => {
      const res = await moodleClient.get("/webservice/rest/server.php", {
        params: {
          wsfunction: "core_webservice_get_site_info",
        },
      });
      return res.data;
    },
  });
}
