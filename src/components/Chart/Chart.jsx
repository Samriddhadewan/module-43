import { LineChart, Line, XAxis, YAxis } from "recharts";
const Chart = () => {
    const students = [
        { id: "S001", name: "Alice Johnson", math: 85, physics: 78, chemistry: 92 },
        { id: "S002", name: "Bob Smith", math: 90, physics: 88, chemistry: 85 },
        { id: "S003", name: "Clara Brown", math: 72, physics: 95, chemistry: 89 },
        { id: "S004", name: "David Wilson", math: 88, physics: 76, chemistry: 91 },
        { id: "S005", name: "Eva Taylor", math: 95, physics: 89, chemistry: 94 },
        { id: "S006", name: "Frank Moore", math: 68, physics: 73, chemistry: 80 },
        { id: "S007", name: "Grace Davis", math: 84, physics: 90, chemistry: 88 },
        { id: "S008", name: "Henry Clark", math: 77, physics: 85, chemistry: 79 },
        { id: "S009", name: "Isla White", math: 92, physics: 84, chemistry: 87 },
        { id: "S010", name: "Jack Hall", math: 81, physics: 79, chemistry: 83 },
      ];
  return (
    <div className="flex  justify-center">
        <LineChart className="" width={600} height={300} data={students} >
        <Line dataKey="math" stroke="red" />
        <Line dataKey="physics" />
        <XAxis dataKey="name" />
        <YAxis />
        </LineChart>
        
    </div>
  )
}

export default Chart