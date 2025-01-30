import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";
import type { ScoreData } from "@/pages/index.astro";

interface Props {
  data: ScoreData[] | null;
}

export default function ScoreBorad({ data }: Props) {
  if (!data) {
    return <div>Invalid data</div>;
  }
  const sortedTeams = data.sort((a, b) => b.score - a.score);

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold mb-2 text-center">
          Arts Fest Scores
        </h1>
        <p className="text-center ">Celebrating creativity and talent</p>

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
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">Rank</TableHead>
                  <TableHead>Team Name</TableHead>
                  <TableHead className="text-right">Score</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedTeams.map((team, index) => (
                  <TableRow key={team.teamname} className="transition-colors">
                    <TableCell className="font-medium">
                      {index === 0 ? (
                        <Badge variant="default" className="bg-yellow-500">
                          <Trophy className="w-4 h-4 mr-1" />
                          1st
                        </Badge>
                      ) : (
                        `${index + 1}${
                          index === 1 ? "nd" : index === 2 ? "rd" : "th"
                        }`
                      )}
                    </TableCell>
                    <TableCell className="font-semibold">
                      {team.teamname}
                    </TableCell>
                    <TableCell className="text-right font-bold">
                      {team.score}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
