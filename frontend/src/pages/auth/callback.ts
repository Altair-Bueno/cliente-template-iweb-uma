import type { APIContext } from "astro";
import cookies from "../../cookies";

export async function get(context: APIContext) {
  const code = context.url.searchParams.get("code") as string;

  // https://auth0.com/docs/api/authentication#get-token
  const payload = new URLSearchParams({
    grant_type: "authorization_code",
    redirect_uri: context.url.origin,
    client_id: import.meta.env.PUBLIC_AUTH0_CLIENTID,
    client_secret: import.meta.env.AUTH0_CLIENTSECRET,
    code,
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

  context.cookies.set(cookies.accesToken, response.access_token, {
    path: "/",
  });
  context.cookies.set(cookies.refreshToken, response.refresh_token, {
    path: "/",
  });

  return context.redirect("/");
}
