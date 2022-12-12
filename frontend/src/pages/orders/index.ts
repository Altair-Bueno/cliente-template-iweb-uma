import type { APIContext } from "astro";
import { z } from "zod";
import { OrdersApi, Configuration } from "../../api";
import { getAccessToken } from "../../lib/auth0";

const scheme = z.object({});

export async function post(context: APIContext) {
  const payload = await context.request.json().then((x) => scheme.parse(x));

  const config = new Configuration({
    accessToken: () => getAccessToken(context),
    basePath: import.meta.env.BACKEND_URL,
  });
  const ordersApi = new OrdersApi(config);

  const response = await ordersApi.createOrderRaw({ body: payload });
  const body = await response.raw.text();

  return { body };
}
