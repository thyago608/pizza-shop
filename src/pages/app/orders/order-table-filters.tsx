import { Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { z } from 'zod'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'react-router-dom'

const ordersFiltersSchema = z.object({
  orderId: z.string().optional(),
  customerName: z.string().optional(),
  status: z.string().optional(),
})

type OrderFiltersSchema = z.infer<typeof ordersFiltersSchema>

export function OrderTableFilters() {
  const [searchParams, setSearchParams] = useSearchParams()
  const orderId = searchParams.get('orderId')
  const customerName = searchParams.get('customerName')
  const status = searchParams.get('status')

  const { register, handleSubmit, control, reset } =
    useForm<OrderFiltersSchema>({
      resolver: zodResolver(ordersFiltersSchema),
      defaultValues: {
        orderId: orderId ?? '',
        customerName: customerName ?? '',
        status: status ?? 'all',
      },
    })

  function handleFitler({ orderId, customerName, status }: OrderFiltersSchema) {
    setSearchParams((state) => {
      if (orderId) {
        state.set('orderId', orderId)
      } else {
        state.delete('orderId')
      }

      if (customerName) {
        state.set('customerName', customerName)
      } else {
        state.delete('customerName')
      }

      if (status) {
        state.set('status', status)
      } else {
        state.delete('status')
      }

      state.set('page', '1')

      return state
    })
  }

  const handleClearFilters = () => {
    setSearchParams((state) => {
      state.delete('orderId')
      state.delete('customerName')
      state.delete('status')

      state.set('page', '1')
      return state
    })

    reset({
      orderId: '',
      customerName: '',
      status: 'all',
    })
  }

  return (
    <form
      className="flex items-center gap-2"
      onSubmit={handleSubmit(handleFitler)}
    >
      <span className="text-sm font-semibold">Filtros:</span>
      <Input
        placeholder="ID do pedido"
        className="h-8 w-auto"
        {...register('orderId')}
      />
      <Input
        placeholder="Nome do cliente"
        className="h-8 w-[320px]"
        {...register('customerName')}
      />

      <Controller
        control={control}
        name="status"
        render={({ field: { name, onChange, value, disabled } }) => {
          return (
            <Select
              defaultValue="all"
              name={name}
              onValueChange={onChange}
              value={value}
              disabled={disabled}
            >
              <SelectTrigger className="h-8 w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos status</SelectItem>
                <SelectItem value="pending">Pendente</SelectItem>
                <SelectItem value="canceled">Cancelado</SelectItem>
                <SelectItem value="processing">Em preparo</SelectItem>
                <SelectItem value="delivering">Em entrega</SelectItem>
                <SelectItem value="delivered">Entregue</SelectItem>
              </SelectContent>
            </Select>
          )
        }}
      />

      <Button type="submit" size="xs" variant="secondary">
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>

      <Button
        type="button"
        size="xs"
        variant="outline"
        onClick={handleClearFilters}
      >
        <X className="mr-2 h-4 w-4" />
        Remover Filtros
      </Button>
    </form>
  )
}
