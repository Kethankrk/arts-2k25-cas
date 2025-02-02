import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import type { AppScriptResponse, ScoreData } from "@/pages/index.astro";
import ScoreBoardTable from "./ScoreBoradTable";
import TotalScoreCard from "./TotalScoreCard";

interface Props {
  data: AppScriptResponse | null;
}

export interface TotalScoreData {
  [team: string]: number;
}

export default function ScoreBorad({ data }: Props) {
  const totalScoreData: TotalScoreData = {};
  data?.offstage.forEach((team) => {
    if (Object.keys(totalScoreData).includes(team.teamname)) {
      totalScoreData[team.teamname] += team.score;
    } else {
      totalScoreData[team.teamname] = team.score;
    }
  });

  data?.onstage.forEach((team) => {
    if (Object.keys(totalScoreData).includes(team.teamname)) {
      totalScoreData[team.teamname] += team.score;
    } else {
      totalScoreData[team.teamname] = team.score;
    }
  });

  return (
    <div className="flex flex-1 flex-col">
      <div className="container mx-auto py-10 px-4">
        <div className="w-[200px] mx-auto">
          <img src="/logo.png" alt="" />
        </div>
        <h1 className="text-4xl font-bold mb-2 text-center">
          Arts Fest Scores
        </h1>
        <p className="text-center ">Celebrating creativity and talent</p>

        {data && (
          <div className="mt-10">
            <TotalScoreCard data={totalScoreData} />
          </div>
        )}
        <Card className="shadow-xl mt-10">
          <CardHeader>
            <CardTitle className="text-2xl text-center  ">
              Team Rankings
            </CardTitle>
            <CardDescription className="text-center">
              Current standings for the Arts Fest competition
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!data && (
              <Alert variant="destructive">
                <Terminal className="h-4 w-4" />
                <AlertTitle>No data found</AlertTitle>
                <AlertDescription>
                  Try contacting the system admin.
                </AlertDescription>
              </Alert>
            )}
            {data && (
              <div className="flex flex-col gap-10">
                <div>
                  <p className="font-bold w-full mb-2">Offstage</p>
                  <ScoreBoardTable data={data.offstage} />
                </div>
                <div>
                  <p className="font-bold w-full mb-2">Onstage</p>
                  <ScoreBoardTable data={data.onstage} />
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
