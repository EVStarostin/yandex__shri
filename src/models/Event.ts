export interface CurrentGestures {
  events: PointerEvent[];
  prevPos: number | null;
  prevDiff: number | null;
  prevAngle: number | null;
}

export interface NodeState {
  zoom: number;
  scroll: number;
  brightness: number;
}

export interface Point {
  x: number;
  y: number;
}

export interface Event {
  type: string;
  title: string;
  source: string;
  time: string;
  description: string;
  icon: string;
  size: string;
  data?: {
    type?: string;
    values?: {
      electricity: Array<number | string>;
      water: Array<number | string>;
      gas: Array<number | string>;
    };
    buttons?: string[];
    image?: string;
    temperature?: number;
    humidity?: string;
    albumcover?: string;
    artist?: string;
    track?: {
      name: string;
      length: string;
    };
    volume?: number;
  };
}
