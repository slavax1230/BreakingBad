import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DashboardScreen, {screenOptions as DashboardScreenoptions} from '../screens/dashboard';
import CharactersScreen, {screenOptions as CharacterScreenoptions} from '../screens/character';
import CharacterScreen, {screenOptions as CharScreenoptions} from '../screens/character'
import EpisodesScreen, {screenOptions as EpisodeScreenoptions} from '../screens/episode';
import EpisodeScreen,{screenOptions as EpiScreenoptions}from '../screens/episode/episode';
import QuotesScreen, {screenOptions as QuotesScreenoptions} from '../screens/quotes';

const DashboardStackNavigator = createStackNavigator();
export const DashboardStack = () => {
    return(
        <DashboardStackNavigator.Navigator>
            <DashboardStackNavigator.Screen name='Dashboard' component={DashboardScreen} option={DashboardScreenoptions}/>
        </DashboardStackNavigator.Navigator>
    )
}

const CharacterStackNavigator = createStackNavigator();

export const CharacterStack = () => {
    return(
        <CharacterStackNavigator.Navigator>
            <CharacterStackNavigator.Screen name='Characters' component={CharactersScreen} option={CharacterScreenoptions}/>
            <CharacterStackNavigator.Screen name='Character' component={CharacterScreen} option={CharScreenoptions}/>
        </CharacterStackNavigator.Navigator>
    )   
}

const EpisodeStackNavigator = createStackNavigator();
export const EpisodeStack = () => {
    return(
        <EpisodeStackNavigator.Navigator>
            <EpisodeStackNavigator.Screen name='Episodes' component={EpisodesScreen} option={EpisodeScreenoptions}/>
            <EpisodeStackNavigator.Screen name='Episode' component={EpisodeScreen} option={EpiScreenoptions}/>
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
            <AppBottomBarNavigator.Screen
             options={{ tabBarLabel: '', tabBarIcon:({}) => (<MaterialCommunityIcons name='bookmark' color="#20a864" size={26}/>)}}
             name="Dashboard" 
             component={DashboardStack}/>
            <AppBottomBarNavigator.Screen 
            options={{ tabBarLabel: '', tabBarIcon:({}) => (<MaterialCommunityIcons name='bookmark' color="#20a864" size={26}/>)}}
            name="Character"
             component={CharacterStack}/>
            <AppBottomBarNavigator.Screen 
            options={{ tabBarLabel: '', tabBarIcon:({}) => (<MaterialCommunityIcons name='bookmark' color="#20a864" size={26}/>)}}
            name="Episode" component={EpisodeStack}/>
            <AppBottomBarNavigator.Screen 
             options={{ tabBarLabel: '', tabBarIcon:({}) => (<MaterialCommunityIcons name='bookmark' color="#20a864" size={26}/>)}}
            name="Quotes" component={QuotesStack}/>


        </AppBottomBarNavigator.Navigator>
    )
}