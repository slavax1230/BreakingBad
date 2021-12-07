import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DashboardScreen, {screenOptions as DashboardScreenoptions} from 'src/screens/dashboard/index.js';
import CharacterScreen, {screenOptions as CharacterScreenoptions} from 'src/screens/character/index.js';
import EpisodeScreen, {screenOptions as EpisodeScreenoptions} from 'src/screens/episode/index.js';
import QuotesScreen, {screenOptions as QuotesScreenoptions} from 'src/screens/quotes/index.js';

const DashboardStackNavigator = createStackNavigator();
export const DashboardStack = () => {
    return(
        <DashBoardStackNavigator.Navigator>
            <DashBoardStackNavigator.Screen name='Dashboard' component={DashboardScreen} option={DashboardScreenoptions}/>
        </DashBoardStackNavigator.Navigator>
    )

}
const CharacterStackNavigator = createStackNavigator();
export const CharacterStack = () => {
    return(
        <CharacterStackNavigator.Navigator>
            <CharacterStackNavigator.Screen name='Character' component={CharacterScreen} option={CharacterScreenoptions}/>
        </CharacterStackNavigator.Navigator>
    )
    
}
const EpisodeStackNavigator = createStackNavigator();
export const EpisodeStack = () => {
    return(
        <EpisodeStackNavigator.Navigator>
            <EpisodeStackNavigator.Screen name='Episode' component={EpisodeScreen} option={EpisodeScreenoptions}/>
        </EpisodeStackNavigator.Navigator>
    )
    
}
const QuotesStackNavigator = createStackNavigator();
export const QuotesStack = () => {
    return(
        <QuotesStackNavigator.Navigator>
            <QuotesStackNavigator.Screen name='Quotes' component={QuotesScreen} option={QuotesScreenoptions}/>
        </QuotesStackNavigator.Navigator>
    )
    
}

const AppBottomBarNavigator = createMaterialBottomTabNavigator();
export const AppBottomBar = () => {
    return(
        <AppBottomBarNavigator.Navigator>
            <AppBottomBarNavigator.screens name="DashBoard" component={DashboardStack}/>
            <AppBottomBarNavigator.screens name="Character" component={CharacterStack}/>
            <AppBottomBarNavigator.screens name="Episode" component={EpisodeStack}/>
            <AppBottomBarNavigator.screens name="Quotes" component={QuotesStack}/>


        </AppBottomBarNavigator.Navigator>
    )
}