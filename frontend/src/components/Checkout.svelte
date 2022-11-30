<script lang="ts">
  import type {
    CreateOrderActions,
    CreateOrderData,
    OnApproveActions,
    OnApproveData,
  } from "@paypal/paypal-js";
  import PaypalButton from "./PaypalButton.svelte";

  export let paypalClientId: string;

  async function createOrder(
    data: CreateOrderData,
    actions: CreateOrderActions
  ) {
    return await actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "10",
          },
        },
      ],
    });
  }
  async function onApprove(data: OnApproveData, actions: OnApproveActions) {
    return await actions.order?.capture().then((orderData) => {
      console.log(orderData);
    });
  }
</script>

<form>
  <PaypalButton {paypalClientId} {createOrder} {onApprove} />
</form>
