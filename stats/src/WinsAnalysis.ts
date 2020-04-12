import { Analyzer } from './Summary';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';

export class WinsAnalysis implements Analyzer {
  constructor(public teamName: string) {}

  run(matches: MatchData[]) {
    let teamWins = 0;

    for (let match of matches) {
      if (match[1] === this.teamName && match[5] === MatchResult.HomeWin)
        teamWins++;
      else if (match[2] === this.teamName && match[5] === MatchResult.AwayWin)
        teamWins++;
    }

    return `${this.teamName} has won ${teamWins} games this season`;
  }
}
