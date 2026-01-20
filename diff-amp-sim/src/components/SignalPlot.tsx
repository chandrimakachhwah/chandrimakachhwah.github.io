import React from 'react';
import Plot from 'react-plotly.js';

interface SignalPlotProps {
  x: number[];
  y: number[];
  title: string;
  color?: string;
  interactive?: boolean;
  showGrid?: boolean;
  yAxisLabel?: string;
  xAxisLabel?: string;
  theme?: 'light' | 'dark';
}

const SignalPlot: React.FC<SignalPlotProps> = ({ 
  x, 
  y, 
  title, 
  color, 
  interactive = true,
  showGrid = true,
  yAxisLabel = 'Voltage (V)',
  xAxisLabel = 'Time (ms)',
  theme = 'dark'
}) => {
  const themeColors = {
    dark: {
      bg: '#1a1a1a',
      text: '#ffffff',
      grid: '#333333',
      axis: '#666666'
    },
    light: {
      bg: '#ffffff',
      text: '#000000',
      grid: '#e0e0e0',
      axis: '#999999'
    }
  };

  return (
    <Plot
      data={[
        {
          x,
          y,
          type: 'scatter',
          mode: 'lines',
          marker: { color: color || '#4CAF50' },
          line: { width: 2 },
          hovertemplate: `Time: %{x:.2f}ms<br>Voltage: %{y:.2f}V<extra></extra>`
        },
      ]}
      layout={{
        width: 500,
        height: 250,
        title: {
          text: title,
          font: {
            size: 16,
            color: themeColors[theme].text
          }
        },
        paper_bgcolor: themeColors[theme].bg,
        plot_bgcolor: themeColors[theme].bg,
        margin: { t: 40, l: 50, r: 20, b: 40 },
        showlegend: false,
        xaxis: {
          title: {
            text: xAxisLabel,
            font: {
              color: themeColors[theme].text
            }
          },
          showgrid: showGrid,
          gridcolor: themeColors[theme].grid,
          color: themeColors[theme].text,
          zeroline: true,
          zerolinecolor: themeColors[theme].axis,
          tickcolor: themeColors[theme].axis,
          linecolor: themeColors[theme].axis
        },
        yaxis: {
          title: {
            text: yAxisLabel,
            font: {
              color: themeColors[theme].text
            }
          },
          showgrid: showGrid,
          gridcolor: themeColors[theme].grid,
          color: themeColors[theme].text,
          zeroline: true,
          zerolinecolor: themeColors[theme].axis,
          tickcolor: themeColors[theme].axis,
          linecolor: themeColors[theme].axis
        },
      }}
      config={{
        displayModeBar: interactive,
        scrollZoom: interactive,
        modeBarButtonsToAdd: ['drawline', 'drawopenpath', 'eraseshape'],
        toImageButtonOptions: {
          format: 'png',
          filename: `signal_plot_${title}`,
          height: 500,
          width: 1000,
          scale: 2
        }
      }}
    />
  );
};

export default SignalPlot;
