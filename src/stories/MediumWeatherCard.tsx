import React from 'react';
import { Card } from '@mui/material';

export interface MediumWeatherCardProps {
    /**
	 * The units in which the temperature is represented.
	 */
	weatherUnits: "°C" | "°F";
}

export const MediumWeatherCard = ({weatherUnits = "°C"}: MediumWeatherCardProps) => {
    return (
        <Card>
            This is a card!
        </Card>
    );
};