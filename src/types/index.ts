export interface TrafficLight {
  id: string;
  location: string;
  lat: number;
  lng: number;
  status: 'red' | 'yellow' | 'green';
  countdown: number;
  phase: string;
  lastUpdated: Date;
}

export interface VehicleDetection {
  id: string;
  type: 'car' | 'bus' | 'truck' | 'motorcycle' | 'bicycle';
  confidence: number;
  bbox: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  timestamp: Date;
  cameraId: string;
}

export interface TrafficMetrics {
  intersection: string;
  vehicleCount: number;
  avgWaitTime: number;
  congestionLevel: 'low' | 'medium' | 'high';
  throughput: number;
  timestamp: Date;
}

export interface AIDecision {
  id: string;
  intersection: string;
  action: string;
  confidence: number;
  reasoning: string;
  timestamp: Date;
  impact: {
    waitTimeReduction: number;
    throughputIncrease: number;
  };
}

export interface CameraFeed {
  id: string;
  name: string;
  location: string;
  lat: number;
  lng: number;
  status: 'online' | 'offline' | 'maintenance';
  streamUrl: string;
  detections: VehicleDetection[];
}

export interface SimulationScenario {
  id: string;
  name: string;
  description: string;
  parameters: {
    vehicleDensity: number;
    peakHours: boolean;
    weather: 'clear' | 'rain' | 'fog';
    emergencyVehicles: boolean;
  };
  results: {
    commuteTimeReduction: number;
    fuelSavings: number;
    emissionReduction: number;
  };
}

export interface SystemHealth {
  component: string;
  status: 'healthy' | 'warning' | 'critical';
  uptime: number;
  lastCheck: Date;
  metrics: Record<string, number>;
}