import type { APIContext } from "astro";
import cookies from "../cookies";

// https://auth0.com/docs/api/authentication#refresh-token
async function refreshToken(refresh_token: string) {
  const payload = new URLSearchParams({
    grant_type: "refresh_token",
    client_id: import.meta.env.PUBLIC_AUTH0_CLIENTID,
    client_secret: import.meta.env.AUTH0_CLIENTSECRET,
    refresh_token,
  });

  const response = await fetch(
    `${import.meta.env.PUBLIC_AUTH0_BASEURL}/oauth/token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: payload.toString(),
    }
  ).then((x) => x.json());
  return response;
}

export async function getAccessToken(context: APIContext): Promise<string> {
  const value = context.cookies.get(cookies.auth0).json();

  const createdAt = new Date(value.created_at);

  if (createdAt.valueOf() + value.expires_in >= Date.now()) {
    const token = await refreshToken(value.refresh_token);
    value.refresh_token = token;
    context.cookies.set(cookies.auth0, JSON.stringify(value), { path: "/" });
  }
  return value.access_token;
}
