import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CharactersScreen, {screenOptions as CharacterScreenoptions} from '../screens/character/index';
import CharacterScreen, {screenOptions as CharScreenoptions} from '../screens/character/character'
import EpisodesScreen, {screenOptions as EpisodeScreenoptions} from '../screens/episode/index.js';
import SeasonScreen,{screenOptions as SeasonScreenoption}from '../screens/episode/episode.js';
import QuotesScreen, {screenOptions as QuotesScreenoptions} from '../screens/quotes';

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
            <EpisodeStackNavigator.Screen name='Season' component={SeasonScreen} option={SeasonScreenoption}/>
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
            name="Character"
             component={CharacterStack}/>
            <AppBottomBarNavigator.Screen 
            options={{ tabBarLabel: '', tabBarIcon:({}) => (<MaterialCommunityIcons name='bookmark' color="#20a864" size={26}/>)}}
            name="Episodes" component={EpisodeStack}/>
            <AppBottomBarNavigator.Screen 
             options={{ tabBarLabel: '', tabBarIcon:({}) => (<MaterialCommunityIcons name='bookmark' color="#20a864" size={26}/>)}}
            name="Quotes" component={QuotesStack}/>


        </AppBottomBarNavigator.Navigator>
    )
}