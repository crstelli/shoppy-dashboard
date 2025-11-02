import { useQuery } from "@tanstack/react-query";

import { getProducts } from "../../services/apiProducts";
import { getOrders } from "../../services/apiOrders";
import { getCategories } from "../../services/apiCategories";

import { Statistic } from "../../shared/components/Statistic";

import { ShoppingCart, Package, Bookmark, Banknote } from "lucide-react";

function CardStatistics() {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const { data: orders } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const revenue = orders.reduce((acc, ord) => acc + ord.total, 0);

  return (
    <div className="mt-10 grid grid-cols-4 gap-10 text-left">
      <Statistic
        color="purple"
        value={products?.length}
        icon={<ShoppingCart className="size-9 text-purple-400" />}
      >
        Products
      </Statistic>
      <Statistic
        color="sky"
        value={orders?.length}
        icon={<Package className="size-9 text-sky-400" />}
      >
        Orders
      </Statistic>
      <Statistic
        color="orange"
        value={categories?.length}
        icon={<Bookmark className="size-9 text-orange-400" />}
      >
        Categories
      </Statistic>
      <Statistic
        color="emerald"
        value={`$${revenue}`}
        icon={<Banknote className="size-9 text-emerald-400" />}
      >
        Revenue
      </Statistic>
    </div>
  );
}

export { CardStatistics };
