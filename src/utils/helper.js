import { format } from "date-fns";

export const todaysDate = (dateFormat = "MM-dd-yyyy") => {
  const date = format(new Date(), dateFormat);
  return date;
};
