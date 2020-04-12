import fs from 'fs';
import { OutputTarget } from './Summary';

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const path = './report.html';
    const html = `
    <div>
      <h1>Analysis Report</h1>
      <p>${report}</p>
    </div>
    `;

    fs.writeFileSync(path, html);
  }
}
