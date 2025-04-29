import { ScanResult } from './types';

// Function to find the active backend port
async function findActiveBackendPort(): Promise<string> {
  // Try ports from 3001 to 3010
  for (let port = 3001; port <= 3010; port++) {
    try {
      const response = await fetch(`http://localhost:${port}/api/health`, {
        method: 'GET',
        signal: AbortSignal.timeout(500) // Timeout after 500ms
      });
      if (response.ok) {
        console.log(`Found backend server on port ${port}`);
        return `http://localhost:${port}/api`;
      }
    } catch (error) {
      continue; // Try next port
    }
  }
  console.warn('Could not find active backend port, falling back to 3001');
  return 'http://localhost:3001/api';
}

let API_BASE_URL = 'http://localhost:3001/api';

// Initialize the API URL
findActiveBackendPort().then(url => {
  API_BASE_URL = url;
  console.log('Using backend URL:', API_BASE_URL);
});

export const scanService = {
  async scanWebsite(url: string): Promise<ScanResult> {
    // Ensure we have the correct port
    API_BASE_URL = await findActiveBackendPort();
    console.log('Attempting scan request to:', `${API_BASE_URL}/scan`);
    
    const response = await fetch(`${API_BASE_URL}/scan`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to start scan');
    }

    const data = await response.json();
    return data.result;
  },

  async getScanStatus(scanId: string): Promise<{
    status: 'processing' | 'completed' | 'failed';
    progress: number;
    result?: ScanResult;
  }> {
    // Ensure we have the correct port
    API_BASE_URL = await findActiveBackendPort();
    
    const response = await fetch(`${API_BASE_URL}/scan/${scanId}`);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to get scan status');
    }

    const data = await response.json();
    return {
      status: data.status,
      progress: data.progress,
      result: data.result
    };
  }
};
