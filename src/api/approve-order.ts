import { api } from '@/lib/axios'

type ApproveOrderParams = {
  orderId: string
}

export async function approveOrder({ orderId }: ApproveOrderParams) {
  await api.put(`/orders/${orderId}/approve`)
}
