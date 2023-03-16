import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MediumWeatherCard } from './MediumWeatherCard';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default {
    title: 'Weather App/Medium Weather Card',
    component: MediumWeatherCard,
} as ComponentMeta<typeof MediumWeatherCard>;

const Template: ComponentStory<typeof MediumWeatherCard> = (args) => <MediumWeatherCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    temperature: 30,
    apparentTemperature: 31.3,
    timestamp: "2023-11-17T04:00",
    weatherCondition: "Sunny",
    weatherConditionIcon: <WbSunnyIcon />,
    weatherConditionImage: "https://upload.wikimedia.org/wikipedia/commons/2/26/Sunny_day_in_India.jpg",
    weatherUnits: "°C",
    relativeHumidity: 88,
    relativeHumidityUnits: "%",
};