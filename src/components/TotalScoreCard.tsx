import type { ScoreData } from "@/pages/index.astro";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Medal, Trophy } from "lucide-react";
import type { TotalScoreData } from ".";

interface Props {
  data: TotalScoreData;
}

export default function TotalScoreCard({ data }: Props) {
  const positionColors = [
    "from-yellow-300 to-yellow-500",
    "from-gray-300 to-gray-500",
    "from-amber-600 to-amber-800",
  ];

  let dataList: ScoreData[] = [];

  for (const [team, score] of Object.entries(data)) {
    dataList.push({
      teamname: team,
      score,
    });
  }

  dataList = dataList.sort((a, b) => b.score - a.score);

  if (dataList.length > 3) {
    dataList = dataList.slice(0, 3);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {dataList.map((team, index) => (
        <Card
          key={team.teamname}
          className={`bg-gradient-to-br ${positionColors[index]} text-white dark:text-gray-900 shadow-lg`}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-bold">
              {index + 1}. {team.teamname}
            </CardTitle>
            {index === 0 ? (
              <Trophy className="w-6 h-6" />
            ) : (
              <Medal className="w-6 h-6" />
            )}
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">{team.score}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
