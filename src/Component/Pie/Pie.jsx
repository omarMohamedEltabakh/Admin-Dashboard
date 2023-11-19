import React from "react";
import './Pie.module.css'
import { ResponsivePie } from '@nivo/pie'
import { Box, useTheme } from "@mui/material";
import Header from "../Header/Header";



const data = [
  {
    "id": "javaScript",
    "label": "javaScript",
    "value": 250,
    "color": "hsl(235, 70%, 50%)"
  },
  {
    "id": "html",
    "label": "html",
    "value": 300,
    "color": "hsl(30, 70%, 50%)"
  },
  {
    "id": "React",
    "label": "React",
    "value": 341,
    "color": "black"
  },
  {
    "id": "css",
    "label": "css",
    "value": 200,
    "color": "hsl(188, 70%, 50%)"
  },
  {
    "id": "bootstrap",
    "label": "bootstrap",
    "value": 200,
    "color": "hsl(56, 70%, 50%)"
  }
]


export default function Pie({isDashboard=false}) {


  let theme = useTheme()

  return<> 
  {isDashboard?null: <Header title={"Pie Chart"} suBtitle={"Simple Pie Chart"}/>}
   


  <Box sx={{ height:isDashboard?"220px":"75vh" }}>
    <ResponsivePie
    enableArcLabels={isDashboard?false:true}
    enableArcLinkLabels={isDashboard?false:true}
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
              "fill": theme.palette.text.primary,
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
      data={data}
      margin={isDashboard?{ top: 10, right: 0, bottom: 10, left: 0 }:{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={isDashboard?.8:.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [
          [
            'darker',
            0.2
          ]
        ]
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={theme.palette.text.primary}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [
          [
            'darker',
            2
          ]
        ]
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
      legends={
        isDashboard?[]:
        
        [
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: theme.palette.text.primary,
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: theme.palette.text.primary
              }
            }
          ]
        }
      ]}
    />


  </Box>
  </>
}
