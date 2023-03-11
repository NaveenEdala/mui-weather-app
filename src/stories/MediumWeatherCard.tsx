import React from "react";
import { Card, CardMedia, CardContent, Box, Typography } from "@mui/material";

export interface MediumWeatherCardProps {
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

export const MediumWeatherCard = ({
	weatherCondition,
	weatherConditionImage,
	weatherConditionIcon,
	weatherUnits = "°C",
	temperature,
	apparentTemperature,
	timestamp,
}: MediumWeatherCardProps) => {
	let cardDate: Date = new Date(timestamp);
	return (
		<Card sx={{ maxWidth: 750 }}>
			{weatherConditionImage && <CardMedia sx={{ height: 250 }} image={weatherConditionImage} />}
			<CardContent>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Typography color="text.primary" variant="h3">
						{temperature} {weatherUnits}
					</Typography>
					<Box>
						<Typography sx={{ mb: 1 }} variant="body1" gutterBottom color="text.secondary">
							{cardDate.toLocaleTimeString("en-US", {
								year: "numeric",
								month: "long",
								day: "numeric",
								hour: "numeric",
								minute: "numeric",
								hour12: false,
							})}
						</Typography>
						<Typography gutterBottom variant="body1" color="text.secondary">
							Feels like {apparentTemperature} {weatherUnits}
						</Typography>
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
};