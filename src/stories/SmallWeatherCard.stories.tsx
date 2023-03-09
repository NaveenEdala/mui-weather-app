import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SmallWeatherCard } from './SmallWeatherCard';

export default {
    title: 'WeatherApp/Small Weather Card',
    component: SmallWeatherCard,
} as ComponentMeta<typeof SmallWeatherCard>;

const Template: ComponentStory<typeof SmallWeatherCard> = (args) => <SmallWeatherCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    weatherCondition: "Sunny",
    weatherConditionImage: "https://upload.wikimedia.org/wikipedia/commons/2/26/Sunny_day_in_India.jpg",
    weatherUnits: "°C",
    temperature: 30,
    apparentTemperature: 31.3,
    timestamp: "2023-11-17T04:00",
};