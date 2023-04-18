import { currencyFormatter } from '@/lib/utils'

import Expense from '@/components/Expense';

export default function Home() {
  return (
    <main className="container max-w-2xl px-6 mx-auto">
      <section className="py-3">
        <small className="text-gray-400 text-md">My balance</small>
        <h2 className="text-4xl font-bold">{currencyFormatter(100000)}</h2>
      </section>

      <section className="flex items-center gap-2 py-3">
        <button className="btn btn-primary"> + Gastos </button>
        <button className="btn btn-primary-outline">+ Salário</button>
      </section>
      <section className="py-6">
        <h3 className="text-2xl">Meus gastos</h3>
        <div className="flex flex-col gap-4 mt-6">
          <Expense
          title='Entrenimento'
          amount={1104500}
          color='#ebe162' />
          </div>
      </section>

    </main>
  );
}