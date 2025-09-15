import { TrafficLight, VehicleDetection, TrafficMetrics, AIDecision, CameraFeed, SimulationScenario, SystemHealth } from '../types';

// Mock Traffic Lights Data for Indian Cities
export const mockTrafficLights: TrafficLight[] = [
  {
    id: 'tl-001',
    location: 'Connaught Place, Delhi',
    lat: 28.6315,
    lng: 77.2167,
    status: 'green',
    countdown: 45,
    phase: 'North-South',
    lastUpdated: new Date(),
  },
  {
    id: 'tl-002',
    location: 'Bandra West, Mumbai',
    lat: 19.0596,
    lng: 72.8295,
    status: 'red',
    countdown: 30,
    phase: 'East-West',
    lastUpdated: new Date(),
  },
  {
    id: 'tl-003',
    location: 'MG Road, Bangalore',
    lat: 12.9716,
    lng: 77.5946,
    status: 'yellow',
    countdown: 5,
    phase: 'North-South',
    lastUpdated: new Date(),
  },
  {
    id: 'tl-004',
    location: 'Park Street, Kolkata',
    lat: 22.5726,
    lng: 88.3639,
    status: 'green',
    countdown: 60,
    phase: 'East-West',
    lastUpdated: new Date(),
  },
];

// Mock Camera Feeds
export const mockCameraFeeds: CameraFeed[] = [
  {
    id: 'cam-001',
    name: 'CP Metro Junction',
    location: 'Connaught Place, Delhi',
    lat: 28.6315,
    lng: 77.2167,
    status: 'online',
    streamUrl: 'https://example.com/stream1',
    detections: [],
  },
  {
    id: 'cam-002',
    name: 'Bandra Station',
    location: 'Bandra West, Mumbai',
    lat: 19.0596,
    lng: 72.8295,
    status: 'online',
    streamUrl: 'https://example.com/stream2',
    detections: [],
  },
];

// Mock Vehicle Detections
export const generateMockDetections = (): VehicleDetection[] => {
  const vehicles = ['car', 'bus', 'truck', 'motorcycle', 'bicycle'];
  const detections: VehicleDetection[] = [];
  
  for (let i = 0; i < Math.floor(Math.random() * 20) + 5; i++) {
    detections.push({
      id: `detection-${Date.now()}-${i}`,
      type: vehicles[Math.floor(Math.random() * vehicles.length)] as any,
      confidence: 0.7 + Math.random() * 0.3,
      bbox: {
        x: Math.random() * 800,
        y: Math.random() * 600,
        width: 50 + Math.random() * 100,
        height: 50 + Math.random() * 100,
      },
      timestamp: new Date(),
      cameraId: `cam-${String(Math.floor(Math.random() * 4) + 1).padStart(3, '0')}`,
    });
  }
  
  return detections;
};

// Mock Traffic Metrics
export const mockTrafficMetrics: TrafficMetrics[] = [
  {
    intersection: 'Connaught Place',
    vehicleCount: 156,
    avgWaitTime: 45,
    congestionLevel: 'medium',
    throughput: 320,
    timestamp: new Date(),
  },
  {
    intersection: 'Bandra West',
    vehicleCount: 234,
    avgWaitTime: 67,
    congestionLevel: 'high',
    throughput: 280,
    timestamp: new Date(),
  },
  {
    intersection: 'MG Road',
    vehicleCount: 89,
    avgWaitTime: 23,
    congestionLevel: 'low',
    throughput: 450,
    timestamp: new Date(),
  },
];

// Mock AI Decisions
export const mockAIDecisions: AIDecision[] = [
  {
    id: 'ai-001',
    intersection: 'Connaught Place',
    action: 'Extend green signal by 15 seconds',
    confidence: 0.92,
    reasoning: 'High vehicle density detected on north-south corridor',
    timestamp: new Date(Date.now() - 120000),
    impact: {
      waitTimeReduction: 12,
      throughputIncrease: 8,
    },
  },
  {
    id: 'ai-002',
    intersection: 'Bandra West',
    action: 'Activate emergency vehicle protocol',
    confidence: 0.98,
    reasoning: 'Ambulance detected approaching from east',
    timestamp: new Date(Date.now() - 300000),
    impact: {
      waitTimeReduction: 0,
      throughputIncrease: 0,
    },
  },
];

// Mock Simulation Scenarios
export const mockSimulationScenarios: SimulationScenario[] = [
  {
    id: 'sim-001',
    name: 'Peak Hour Optimization',
    description: 'Test AI performance during morning rush hour (8-10 AM)',
    parameters: {
      vehicleDensity: 0.85,
      peakHours: true,
      weather: 'clear',
      emergencyVehicles: false,
    },
    results: {
      commuteTimeReduction: 12.5,
      fuelSavings: 18.2,
      emissionReduction: 22.1,
    },
  },
  {
    id: 'sim-002',
    name: 'Monsoon Traffic',
    description: 'Heavy rain impact on traffic flow and AI adaptation',
    parameters: {
      vehicleDensity: 0.6,
      peakHours: false,
      weather: 'rain',
      emergencyVehicles: true,
    },
    results: {
      commuteTimeReduction: 8.7,
      fuelSavings: 11.4,
      emissionReduction: 15.8,
    },
  },
];

// Mock System Health
export const mockSystemHealth: SystemHealth[] = [
  {
    component: 'YOLOv8 Detection Engine',
    status: 'healthy',
    uptime: 99.7,
    lastCheck: new Date(),
    metrics: {
      fps: 28.5,
      accuracy: 94.2,
      memoryUsage: 2.1,
    },
  },
  {
    component: 'RL Control Algorithm',
    status: 'healthy',
    uptime: 99.9,
    lastCheck: new Date(),
    metrics: {
      decisions_per_minute: 45,
      confidence_avg: 0.89,
      cpu_usage: 15.3,
    },
  },
  {
    component: 'Camera Network',
    status: 'warning',
    uptime: 97.2,
    lastCheck: new Date(),
    metrics: {
      online_cameras: 142,
      total_cameras: 150,
      bandwidth_usage: 78.5,
    },
  },
];

// Real-time data simulation
export const generateRealTimeUpdate = () => ({
  timestamp: new Date(),
  vehicleDetections: generateMockDetections(),
  trafficLights: mockTrafficLights.map(light => ({
    ...light,
    countdown: Math.max(0, light.countdown - 1),
    status: light.countdown <= 0 ? 
      (light.status === 'red' ? 'green' : light.status === 'green' ? 'yellow' : 'red') 
      : light.status,
    lastUpdated: new Date(),
  })),
  metrics: mockTrafficMetrics.map(metric => ({
    ...metric,
    vehicleCount: metric.vehicleCount + Math.floor(Math.random() * 10) - 5,
    avgWaitTime: Math.max(0, metric.avgWaitTime + Math.floor(Math.random() * 10) - 5),
    timestamp: new Date(),
  })),
});