import { api } from '@/lib/axios'

type DispatchOrderParams = {
  orderId: string
}

export async function dispatchOrder({ orderId }: DispatchOrderParams) {
  await api.put(`/orders/${orderId}/dispatch`)
}
