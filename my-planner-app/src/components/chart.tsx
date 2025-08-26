import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { dia: "S", valor: 20 },
  { dia: "T", valor: 40 },
  { dia: "Q", valor: 60 },
  { dia: "Q", valor: 80 },
  { dia: "S", valor: 40 },
  { dia: "S", valor: 20 },
  { dia: "D", valor: 10 },
];

function ProgressoSemanal({ isOpen = true }) {
  return (
    <div
      className="py-1 px-4 mt-4 border-t border-b shadow-sm bg-gray-100 border-gray-300 flex flex-col justify-center items-center"
      style={{ height: 192, minHeight: 192, maxHeight: 192, boxSizing: 'border-box', width: '100%' }}
    >
      <div className="w-full text-center mb-2">
        <span className="text-gray-800 text-sm font-base">Progresso Semanal</span>
      </div>
      {isOpen ? (
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={data}>
            <defs>
              <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#7c3aed" stopOpacity={0.7} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dia" axisLine={false} tickLine={false} />
            <Tooltip cursor={{ fill: "transparent" }} />
            <Bar
              dataKey="valor"
              fill="url(#colorBar)"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <div
          className="w-full h-[150px] bg-gray-200 rounded-lg flex items-center justify-center opacity-100 select-none pointer-events-auto"
          style={{ minHeight: 150, maxHeight: 150 }}
        >
          <span className="text-gray-500 text-sm font-semibold">Gráfico oculto</span>
        </div>
      )}
    </div>
  );
}
export default ProgressoSemanal;