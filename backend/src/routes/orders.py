from fastapi import APIRouter, Depends

from ..auth import Authentication, Claims

from ..service.orders import OrdersService
from ..beans import get_orders_service
from ..model import CreateOrder, CaptureOrder

ordersRouter = APIRouter(tags=["Orders"], prefix="/orders")

@ordersRouter.post("", operation_id="create_order")
async def create_order(
    payload: CreateOrder,
    auth: Claims = Depends(Authentication),
    orderService: OrdersService = Depends(get_orders_service)
):
    """Creates a new order"""
    return await orderService.new(payload)

@ordersRouter.put("/{orderId}/capture", operation_id="capture")
async def capture(orderId: str,
    payload: CaptureOrder,
    auth: Claims = Depends(Authentication),
    orderService: OrdersService = Depends(get_orders_service)
):
    return await orderService.capture(orderId, payload)
