import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Concluídas", value: 65, color: "#A78BFA" },
  { name: "Em Progresso", value: 25, color: "#C7D2FE" },
  { name: "Pendentes", value: 10, color: "#E0BBE4" },
];

type chartProps = {
  isOpen: boolean;
};

export default function DistributionChart({ isOpen }: chartProps) {
  return (
    <div className={`flex items-center transition-all duration-500 ${!isOpen ? "gap-6" : "gap-1"}`}>
      <PieChart width={140} height={140}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={60}
          startAngle={90}
          endAngle={-270}
          paddingAngle={3}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
      <div className="flex flex-col gap-3">
        {data.map((d) => (
          <div key={d.name} className="flex items-center gap-2">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ background: d.color }}
            ></span>
            <div>
              <span className="font-semibold text-sm text-slate-500">
                {d.name}
              </span>
              <div className="text-xs   text-slate-400">
                {d.value}% das tarefas
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
