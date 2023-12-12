
import { PieChart, Pie, Tooltip, Cell , Legend } from 'recharts';

const FileTypeChart = ({ fileCounts }) => {
   // Normaliser les extensions en minuscules et sans caractères non alphabétiques
   const normalizedFileCounts = {};
   Object.entries(fileCounts).forEach(([fileType, count]) => {
     // Extraire la partie d'URL avant le "?"
     const fileTypeBase = fileType.toLowerCase().split('?')[0].replace(/[^a-z]/g, '');
     normalizedFileCounts[fileTypeBase] = (normalizedFileCounts[fileTypeBase] || 0) + count;
   });

   const data = Object.entries(normalizedFileCounts).map(([fileType, count]) => ({ fileType, count }));
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF6633', '#33CC33', '#6666FF', '#FF3333'];
  return (
    <PieChart width={600} height={400}>
      <Pie
        dataKey="count"
        isAnimationActive={true}
        data={data}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend layout="vertical" align="right" verticalAlign="middle" iconType="circle" payload={data.map((entry, index) => ({
        value: entry.fileType, // Utilisez le nom de l'extension comme valeur
        type: 'circle',
        color: COLORS[index % COLORS.length],
      }))} /> 
    </PieChart>
  );
};

export default FileTypeChart;
