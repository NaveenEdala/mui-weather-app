import React from "react";
import { Box, Card, Typography, CardContent, CardMedia, CardActions, CardHeader } from "@mui/material";

export interface SmallWeatherCardProps {
	/**
	 * Describe the weather condition based on the WW WMO Weather Interpretation Codes
	 * TODO: Write the main WMO Code translation in the parent component.
	 */
	weatherCondition: string;

	/**
	 * Optional image URL to display on card showing weather.
	 */
	weatherConditionImage?: string;

	/**
	 * Optional icon showing the current weather condition.
	 */
	weatherConditionIcon?: React.ReactNode;

	/**
	 * The units in which the temperature is represented.
	 */
	weatherUnits: "°C" | "°F";

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

export const SmallWeatherCard = ({
	weatherCondition,
	weatherConditionIcon,
	weatherConditionImage,
	weatherUnits = "°C",
	temperature,
	apparentTemperature,
	timestamp,
}: SmallWeatherCardProps) => {
	let cardDate: Date = new Date(timestamp);
	return (
		<Card sx={{ maxWidth: 250 }}>
			{weatherConditionImage && <CardMedia sx={{ height: 125 }} image={weatherConditionImage} />}
			<CardContent>
				<Typography sx={{mb:1}} variant="body1" gutterBottom color="text.secondary">
					{cardDate.toLocaleTimeString("en-US", {
						year: "numeric",
						month: "long",
						day: "numeric",
						hour: "numeric",
						minute: "numeric",
						hour12: false,
					})}
				</Typography>
				<Typography color="text.primary" variant="h3">
					{temperature} {weatherUnits}
				</Typography>
				<Typography gutterBottom variant="body1" color="text.secondary">
					Feels like {apparentTemperature} {weatherUnits}
				</Typography>
				<Typography sx={{mt: 1, mb: -1}} variant="body1" color="text.secondary">
					{weatherConditionIcon} {weatherCondition}
				</Typography>
			</CardContent>
		</Card>
	);
};
