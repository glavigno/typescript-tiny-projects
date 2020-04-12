import { Analyzer } from './Summary';
import { MatchData } from './MatchData';

export class AverageGoalsAnalysis implements Analyzer {
  constructor(public teamName: string) {}

  run(matches: MatchData[]) {
    let nbGoals = 0,
      nbGames = 0;

    for (let match of matches) {
      if (match[1] === this.teamName || match[2] === this.teamName) {
        nbGames++;
        nbGoals += match[match[1] === this.teamName ? 3 : 4];
      }
    }

    const average = (nbGoals / nbGames).toFixed(2);
    return `${this.teamName} has scored ${average} goals on average this season`;
  }
}
