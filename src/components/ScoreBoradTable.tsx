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
  data: ScoreData[];
}

export default function ScoreBoardTable({ data }: Props) {
  const sortedTeams = data.sort((a, b) => b.score - a.score);
  return (
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
                `${index + 1}${index === 1 ? "nd" : index === 2 ? "rd" : "th"}`
              )}
            </TableCell>
            <TableCell className="font-semibold">{team.teamname}</TableCell>
            <TableCell className="text-right font-bold">{team.score}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
