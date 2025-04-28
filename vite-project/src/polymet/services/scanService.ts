import axios from 'axios';

// Update this URL to your actual API endpoint
const API_BASE_URL = 'http://localhost:3000/api'; // Example local development URL

export interface ScanResult {
  url: string;
  jurisdiction: string;
  summary: string;
  screenshot: string;
  requiredActions: Array<{
    id: string;
    title: string;
    description: string;
    priority: 'high' | 'medium' | 'low';
  }>;
  sections: Array<{
    id: string;
    title: string;
    description: string;
    issues: Array<{
      id: string;
      title: string;
      description: string;
      priority: 'high' | 'medium' | 'low';
    }>;
  }>;
  issuesCount: number;
  complianceScore: number;
  stateSpecificInfo: {
    state: string;
    regulations: string[];
    requirements: string[];
  };
}

export const scanService = {
  async scanWebsite(url: string): Promise<{ scanId: string }> {
    try {
      const response = await axios.post(`${API_BASE_URL}/scan`, { 
        url,
        timestamp: new Date().toISOString()
      });
      return { scanId: response.data.scanId };
    } catch (error) {
      console.error('Error scanning website:', error);
      throw new Error('Failed to start website scan. Please try again.');
    }
  },

  async getScanStatus(scanId: string): Promise<{
    status: 'processing' | 'completed' | 'failed';
    progress: number;
    result?: ScanResult;
  }> {
    try {
      const response = await axios.get(`${API_BASE_URL}/scan/${scanId}/status`);
      return {
        status: response.data.status,
        progress: response.data.progress,
        result: response.data.result
      };
    } catch (error) {
      console.error('Error getting scan status:', error);
      throw new Error('Failed to get scan status. Please try again.');
    }
  }
}; 