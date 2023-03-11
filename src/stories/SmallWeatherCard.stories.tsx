import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SmallWeatherCard } from "./SmallWeatherCard";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ShowerIcon from "@mui/icons-material/Shower";

export default {
	title: "Weather App/Small Weather Card",
	component: SmallWeatherCard,
} as ComponentMeta<typeof SmallWeatherCard>;

const Template: ComponentStory<typeof SmallWeatherCard> = (args) => <SmallWeatherCard {...args} />;

export const Sunny = Template.bind({});
Sunny.args = {
	weatherCondition: "Sunny",
	weatherConditionIcon: <WbSunnyIcon />,
	weatherConditionImage: "https://upload.wikimedia.org/wikipedia/commons/2/26/Sunny_day_in_India.jpg",
	weatherUnits: "°C",
	temperature: 30,
	apparentTemperature: 31.3,
	timestamp: "2023-11-17T04:00",
};

export const Rainy = Template.bind({});
Rainy.args = {
	weatherCondition: "Rainy",
	weatherConditionIcon: <ShowerIcon />,
	weatherConditionImage: "https://upload.wikimedia.org/wikipedia/commons/3/32/GGB_refracts_in_rain_dropletes_original_1.JPG",
	weatherUnits: "°C",
	temperature: -2.3,
	apparentTemperature: 1.7,
	timestamp: "2023-08-03T15:00",
};
