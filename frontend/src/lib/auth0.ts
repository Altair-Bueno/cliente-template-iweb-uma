// https://auth0.com/docs/api/authentication#refresh-token
export async function refreshToken(refresh_token: string) {
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
