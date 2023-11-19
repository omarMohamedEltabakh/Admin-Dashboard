import React from "react";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { ResponsivePie } from '@nivo/pie'







export default function Card(props) {
    const theme = useTheme();
    let { icon, title, subTitle, increase, data, scheme } = props;

    return <>

        <Paper sx={{ flexGrow: 1, minWidth: "333px", p: 1.5, display: "flex", justifyContent: "space-between" }}>

            <Stack gap={1} direction={"column"}>

                {icon}
                <Typography variant="body1" >{title}</Typography>
                <Typography variant="body1" >{subTitle}</Typography>
            </Stack>


            <Stack alignItems={"center"} direction={"column"}>

                <Box sx={{ height: "100px", width: "100px" }}>
                    <ResponsivePie
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
                       
                     
                       
                        legends={[
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
                        data={data}
                        margin={{ top: 0, right: 80, bottom: 10, left: 80 }}
                        innerRadius={0.7}
                        enableArcLabels={false}
                        enableArcLinkLabels={false}
                        padAngle={0.7}
                        colors={{ scheme: scheme }}
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

                        defs={[
                            {
                                id: '',
                                type: 'pattern',
                                background: 'inherit',
                                color: 'rgba(255, 255, 255, 0.3)',
                                size: 4,
                                padding: 1,
                                stagger: true
                            },
                            {
                                id: 'lines',
                                type: 'patternLines',
                                background: 'inherit',
                                color: 'rgba(255, 255, 255, 0.3)',
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
                                id: ''
                            },
                            {
                                match: {
                                    id: 'c'
                                },
                                id: ''
                            },
                            {
                                match: {
                                    id: 'go'
                                },
                                id: ''
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

                        ]}
                 
                    />
                </Box>

                <Typography variant="body1" >{increase}</Typography>

            </Stack>

        </Paper>
    </>
}
