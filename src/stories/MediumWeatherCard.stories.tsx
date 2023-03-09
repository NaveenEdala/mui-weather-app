import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MediumWeatherCard } from './MediumWeatherCard';

export default {
    title: 'Weather App/Medium Weather Card',
    component: MediumWeatherCard,
} as ComponentMeta<typeof MediumWeatherCard>;

const Template: ComponentStory<typeof MediumWeatherCard> = (args) => <MediumWeatherCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    weatherUnits: "°C"
};