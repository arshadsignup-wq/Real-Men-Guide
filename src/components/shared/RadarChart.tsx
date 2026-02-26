'use client';

import { RadarDataPoint } from '@/lib/types';

interface RadarChartProps {
  data: RadarDataPoint[];
  size?: number;
}

export default function RadarChart({ data, size = 300 }: RadarChartProps) {
  const center = size / 2;
  const radius = size * 0.38;
  const levels = 5;
  const angleStep = (2 * Math.PI) / data.length;

  const getPoint = (index: number, value: number, maxValue: number) => {
    const angle = angleStep * index - Math.PI / 2;
    const r = (value / maxValue) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  // Grid lines
  const gridLines = Array.from({ length: levels }, (_, level) => {
    const r = (radius * (level + 1)) / levels;
    const points = data.map((_, i) => {
      const angle = angleStep * i - Math.PI / 2;
      return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
    });
    return points.join(' ');
  });

  // Data polygon
  const dataPoints = data.map((d, i) => {
    const p = getPoint(i, d.value, d.maxValue);
    return `${p.x},${p.y}`;
  });

  // Labels
  const labels = data.map((d, i) => {
    const angle = angleStep * i - Math.PI / 2;
    const labelR = radius + 30;
    return {
      x: center + labelR * Math.cos(angle),
      y: center + labelR * Math.sin(angle),
      label: d.label,
      value: d.value,
    };
  });

  return (
    <div className="flex justify-center">
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full max-w-sm">
        {/* Grid */}
        {gridLines.map((points, i) => (
          <polygon
            key={i}
            points={points}
            fill="none"
            stroke="rgb(30 41 59)"
            strokeWidth="1"
          />
        ))}

        {/* Axis lines */}
        {data.map((_, i) => {
          const angle = angleStep * i - Math.PI / 2;
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={center + radius * Math.cos(angle)}
              y2={center + radius * Math.sin(angle)}
              stroke="rgb(30 41 59)"
              strokeWidth="1"
            />
          );
        })}

        {/* Data area */}
        <polygon
          points={dataPoints.join(' ')}
          fill="rgba(245, 158, 11, 0.2)"
          stroke="rgb(245, 158, 11)"
          strokeWidth="2"
        />

        {/* Data points */}
        {data.map((d, i) => {
          const p = getPoint(i, d.value, d.maxValue);
          return (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r="4"
              fill="rgb(245, 158, 11)"
            />
          );
        })}

        {/* Labels */}
        {labels.map((l, i) => (
          <text
            key={i}
            x={l.x}
            y={l.y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-muted text-[10px]"
          >
            <tspan x={l.x} dy="-0.5em">{l.label}</tspan>
            <tspan x={l.x} dy="1.2em" className="fill-accent font-mono text-[11px] font-bold">
              {l.value}/{data[i].maxValue}
            </tspan>
          </text>
        ))}
      </svg>
    </div>
  );
}
