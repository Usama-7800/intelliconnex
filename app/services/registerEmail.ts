import axios from "axios";

export const registerEmail = (
  email: string,
  mergeFields: Object = {},
  status:
    | "subscribed"
    | "unsubscribed"
    | "cleaned"
    | "pending"
    | "transactional" = "pending"
): Promise<void> => {
  const apiUrl = "/api/subscribe";
  return axios
    .request({
      method: "POST",
      url: apiUrl,
      data: { email, mergeFields, status },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};
