import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data01 = [
  { name: "Category A", value: 400, color: "oklch(63.7% 0.237 25.331)" },
  { name: "Category B", value: 300, color: "oklch(70.5% 0.213 47.604)" },
  { name: "Category C", value: 300, color: "oklch(79.5% 0.184 86.047)" },
  { name: "Category D", value: 200, color: "oklch(76.8% 0.233 130.85)" },
  { name: "Category E", value: 278, color: "oklch(70.4% 0.14 182.503)" },
  { name: "Other", value: 189, color: "oklch(62.7% 0.265 303.9)" },
];

function CategoriesChart() {
  return (
    <div className="rounded-md bg-gray-50 p-4">
      <h3 className="text-xl font-semibold">Sold products summary</h3>
      <PieChart width={450} height={250}>
        <Pie
          data={data01}
          dataKey={"value"}
          nameKey={"name"}
          paddingAngle={3}
          innerRadius={75}
          isAnimationActive={true}
        >
          {data01.map((el) => (
            <Cell fill={el.color} key={el.name} />
          ))}
          <Tooltip />
        </Pie>
        <Legend
          verticalAlign="middle"
          align="right"
          layout="vertical"
          iconSize={10}
          iconType="circle"
        />
      </PieChart>
    </div>
  );
}

export { CategoriesChart };
