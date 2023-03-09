import React from 'react';
import { Card, Typography, CardContent, CardActions } from '@mui/material';

interface SmallWeatherCardProps {
    /**
     * Describe the weather condition based on the WW WMO Weather Interpretation Codes
     * TODO: Write the main WMO Code translation in the parent component.
     */
    weatherCondition: string;

    /**
     * Optional icon showing the current weather condition.
     */
    weatherConditionIcon?: React.ReactNode;

    /**
     * The units in which the temperature is represented.
     */
    weatherUnits: '°C' | '°F';

    /**
     * The absolute temperature in numerical value.
     */
    temperature: number;

    /**
     * The perceived temperature, combining wind, humidity and solar factors.
     */
    apparentTemperature: number;

    /**
     * Timestamp as of when this data is shown in ISO 8601 format string.
     * @example `2023-11-17T04:00`
     */
    timestamp: string;
}

export const SmallWeatherCard = ({weatherCondition, weatherConditionIcon, weatherUnits = '°C', temperature, apparentTemperature, timestamp}: SmallWeatherCardProps) => {
    return (
        <Card>
            This is a card!
        </Card>
    );
};