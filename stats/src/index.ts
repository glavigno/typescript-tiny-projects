import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

Summary.winsAnalysisAndConsoleReport('Man United').buildAndPrintReport(
  matchReader.matches
);
