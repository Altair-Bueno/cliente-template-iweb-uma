import type { APIContext } from "astro";
import { z } from "zod";
import { Configuration, OrdersApi } from "../../../api";
import { getAccessToken } from "../../../lib/auth0";

const scheme = z.object({});

export async function put(context: APIContext) {
  const { orderId } = context.params as { orderId: string };
  const payload = await context.request.json().then((x) => scheme.parse(x));

  const config = new Configuration({
    accessToken: () => getAccessToken(context),
    basePath: import.meta.env.BACKEND_URL,
  });
  const ordersApi = new OrdersApi(config);
  const response = await ordersApi.capture({ body: payload, orderId });

  const body = JSON.stringify(response);

  return { body };
}
