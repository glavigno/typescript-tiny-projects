import { MatchData } from './MatchData';
import { ConsoleReport } from './ConsoleReport';
import { WinsAnalysis } from './WinsAnalysis';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  static winsAnalysisAndConsoleReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new ConsoleReport());
  }

  buildAndPrintReport(matches: MatchData[]) {
    const analysis = this.analyzer.run(matches);
    this.outputTarget.print(analysis);
  }
}
