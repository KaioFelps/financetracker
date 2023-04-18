export const currencyFormatter = (amount: number) => {
  const formatter = Intl.NumberFormat("pt-br", {
  currency: "BRL",
  style: "currency",
});

return formatter.format(amount);
};