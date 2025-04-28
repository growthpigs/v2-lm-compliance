import { ScanResult } from './scanService';

// Mock data for demonstration
const MOCK_RESULTS: Record<string, ScanResult> = {
  'example.com': {
    url: 'example.com',
    jurisdiction: 'California',
    summary: 'Your website has several compliance issues that need attention.',
    screenshot: 'https://via.placeholder.com/800x600?text=Website+Screenshot',
    requiredActions: [
      {
        id: '1',
        title: 'Add Privacy Policy',
        description: 'Your website is missing a privacy policy page.',
        priority: 'high'
      },
      {
        id: '2',
        title: 'Update Attorney Advertising Disclaimer',
        description: 'Your disclaimer needs to be more prominent.',
        priority: 'medium'
      }
    ],
    sections: [
      {
        id: '1',
        title: 'Privacy Compliance',
        description: 'Issues related to privacy and data protection',
        issues: [
          {
            id: '1',
            title: 'Missing Privacy Policy',
            description: 'No privacy policy page found',
            priority: 'high'
          }
        ]
      }
    ],
    issuesCount: 5,
    complianceScore: 65,
    stateSpecificInfo: {
      state: 'California',
      regulations: [
        'California Consumer Privacy Act (CCPA)',
        'California Online Privacy Protection Act (CalOPPA)'
      ],
      requirements: [
        'Privacy policy must be easily accessible',
        'Clear disclosure of data collection practices'
      ]
    }
  }
};

// Simulate a scanning process
export const mockScanService = {
  async scanWebsite(url: string): Promise<{ scanId: string }> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { scanId: `mock-${Date.now()}` };
  },

  async getScanStatus(scanId: string): Promise<{
    status: 'processing' | 'completed' | 'failed';
    progress: number;
    result?: ScanResult;
  }> {
    // Simulate progress
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Extract URL from scanId (in a real app, this would come from the backend)
    const url = 'example.com'; // This would be the actual URL in a real implementation
    
    // Simulate different stages of the scan
    const progress = Math.min(100, Math.floor(Math.random() * 30) + 70);
    
    if (progress < 100) {
      return {
        status: 'processing',
        progress
      };
    } else {
      return {
        status: 'completed',
        progress: 100,
        result: MOCK_RESULTS[url] || {
          url,
          jurisdiction: 'Unknown',
          summary: 'Scan completed',
          screenshot: 'https://via.placeholder.com/800x600?text=No+Screenshot',
          requiredActions: [],
          sections: [],
          issuesCount: 0,
          complianceScore: 0,
          stateSpecificInfo: {
            state: 'Unknown',
            regulations: [],
            requirements: []
          }
        }
      };
    }
  }
}; 