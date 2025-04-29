export interface ScanResult {
  url: string;
  issues: Array<{
    type: string;
    description: string;
    severity: 'low' | 'medium' | 'high';
    location?: string;
  }>;
  summary?: {
    totalIssues: number;
    highSeverity: number;
    mediumSeverity: number;
    lowSeverity: number;
  };
} 