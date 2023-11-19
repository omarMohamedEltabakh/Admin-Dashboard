import React from "react";
import './Line.module.css'
import { ResponsiveLine } from '@nivo/line'
import { Box, useTheme } from "@mui/material";
import Header from "../Header/Header";




const data = [
  {
    "id": "japan",
    "color": "hsl(336, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 229
      },
      {
        "x": "helicopter",
        "y": 92
      },
      {
        "x": "boat",
        "y": 22
      },
      {
        "x": "train",
        "y": 289
      },
      {
        "x": "subway",
        "y": 103
      },
      {
        "x": "bus",
        "y": 123
      },
      {
        "x": "car",
        "y": 248
      },
      {
        "x": "moto",
        "y": 61
      },
      {
        "x": "bicycle",
        "y": 271
      },
      {
        "x": "horse",
        "y": 204
      },
      {
        "x": "skateboard",
        "y": 21
      },
      {
        "x": "others",
        "y": 62
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(82, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 100
      },
      {
        "x": "helicopter",
        "y": 198
      },
      {
        "x": "boat",
        "y": 135
      },
      {
        "x": "train",
        "y": 66
      },
      {
        "x": "subway",
        "y": 205
      },
      {
        "x": "bus",
        "y": 136
      },
      {
        "x": "car",
        "y": 108
      },
      {
        "x": "moto",
        "y": 214
      },
      {
        "x": "bicycle",
        "y": 197
      },
      {
        "x": "horse",
        "y": 2
      },
      {
        "x": "skateboard",
        "y": 264
      },
      {
        "x": "others",
        "y": 25
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(349, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 125
      },
      {
        "x": "helicopter",
        "y": 119
      },
      {
        "x": "boat",
        "y": 291
      },
      {
        "x": "train",
        "y": 219
      },
      {
        "x": "subway",
        "y": 78
      },
      {
        "x": "bus",
        "y": 168
      },
      {
        "x": "car",
        "y": 282
      },
      {
        "x": "moto",
        "y": 97
      },
      {
        "x": "bicycle",
        "y": 90
      },
      {
        "x": "horse",
        "y": 282
      },
      {
        "x": "skateboard",
        "y": 90
      },
      {
        "x": "others",
        "y": 215
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(112, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 261
      },
      {
        "x": "helicopter",
        "y": 275
      },
      {
        "x": "boat",
        "y": 151
      },
      {
        "x": "train",
        "y": 255
      },
      {
        "x": "subway",
        "y": 252
      },
      {
        "x": "bus",
        "y": 19
      },
      {
        "x": "car",
        "y": 270
      },
      {
        "x": "moto",
        "y": 275
      },
      {
        "x": "bicycle",
        "y": 149
      },
      {
        "x": "horse",
        "y": 81
      },
      {
        "x": "skateboard",
        "y": 274
      },
      {
        "x": "others",
        "y": 42
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(224, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 92
      },
      {
        "x": "helicopter",
        "y": 189
      },
      {
        "x": "boat",
        "y": 260
      },
      {
        "x": "train",
        "y": 250
      },
      {
        "x": "subway",
        "y": 21
      },
      {
        "x": "bus",
        "y": 179
      },
      {
        "x": "car",
        "y": 164
      },
      {
        "x": "moto",
        "y": 262
      },
      {
        "x": "bicycle",
        "y": 249
      },
      {
        "x": "horse",
        "y": 188
      },
      {
        "x": "skateboard",
        "y": 242
      },
      {
        "x": "others",
        "y": 103
      }
    ]
  }
]

export default function Line({ isDashboard = false }) {

  const theme = useTheme()

  return <>
  {isDashboard?null: <Header title={"Line Chart"} suBtitle={"Simple Line Chart"}/>}
    <Box sx={{ height: isDashboard ? "280px" : "75vh" }}>
      <ResponsiveLine
        curve="catmullRom"
        theme={{

          "text": {
            "fontSize": 11,
            "fill": theme.palette.text.primary,
            "outlineWidth": 0,
            "outlineColor": "transparent"
          },
          "axis": {
            "domain": {
              "line": {
                "stroke": theme.palette.divider,
                "strokeWidth": 1
              }
            },
            "legend": {
              "text": {
                "fontSize": 12,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
              }
            },
            "ticks": {
              "line": {
                "stroke": theme.palette.divider,
                "strokeWidth": 1
              },
              "text": {
                "fontSize": 11,
                "fill": theme.palette.text.secondary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
              }
            }
          },
          "grid": {
            "line": {
              "stroke": theme.palette.divider,
              "strokeWidth": 1
            }
          },
          "legends": {
            "title": {
              "text": {
                "fontSize": 11,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
              }
            },
            "text": {
              "fontSize": 11,
              "fill": theme.palette.text.primary,
              "outlineWidth": 0,
              "outlineColor": "transparent"
            },
            "ticks": {
              "line": {},
              "text": {
                "fontSize": 10,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
              }
            }
          },
          "annotations": {
            "text": {
              "fontSize": 13,
              "fill": theme.palette.text.primary,
              "outlineWidth": 2,
              "outlineColor": "#ffffff",
              "outlineOpacity": 1
            },
            "link": {
              "stroke": "#000000",
              "strokeWidth": 1,
              "outlineWidth": 2,
              "outlineColor": "#ffffff",
              "outlineOpacity": 1
            },
            "outline": {
              "stroke": "#000000",
              "strokeWidth": 2,
              "outlineWidth": 2,
              "outlineColor": "#ffffff",
              "outlineOpacity": 1
            },
            "symbol": {
              "fill": "#000000",
              "outlineWidth": 2,
              "outlineColor": "#ffffff",
              "outlineOpacity": 1
            }
          },
          "tooltip": {
            "container": {
              "background": theme.palette.background.default,
              "fontSize": 12
            },
            "basic": {},
            "chip": {},
            "table": {},
            "tableCell": {},
            "tableCellValue": {}
          }
        }}

        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: theme.palette.text.primary,
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: theme.palette.text.primary,
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        fill={[
          {
            match: {
              id: 'ruby'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'c'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'go'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'python'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'scala'
            },
            id: 'lines'
          },
          {
            match: {
              id: 'lisp'
            },
            id: 'lines'
          },
          {
            match: {
              id: 'elixir'
            },
            id: 'lines'
          },
          {
            match: {
              id: 'javascript'
            },
            id: 'lines'
          }
        ]}

        // eslint-disable-next-line react/jsx-no-duplicate-props
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false
        }}

        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? null : 'transportation',
          legendOffset: 36,
          legendPosition: 'middle'
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? null : 'Count',
          legendOffset: -45,
          legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />

    </Box>
  </>
}
