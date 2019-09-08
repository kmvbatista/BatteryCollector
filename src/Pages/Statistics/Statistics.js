import LineChart from '../../Components/Charts/LineChart/index'
import BarChart from '../../Components/Charts/BarChart/index'
import ContributionChart from '../../Components/Charts/ContributionChart/index'

import React from 'react';
import {Container, LineContainer, BarContainer, ContributionContainer} from './styles'
import {View, StyleSheet, Dimensions, Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
const {width : WIDTH} = Dimensions.get('window');

export default function Statistics() {
    return (
        <View>  
            <View>
                <Text>
                    Gire para o lado
                </Text>
                
            </View>
            <ScrollView
                horizontal= {true}
                pagingEnabled= {true}
                showsHorizontalScrollIndicator={true}
                contentInset= {{top: 90, left: -100, bottom: 0, right: 0}}
            >
                <LineContainer style={{width: WIDTH}}>
                    <LineChart ></LineChart>
                </LineContainer>
                <BarContainer style={{width: WIDTH}}> 
                    <BarChart>
                    </BarChart>
                </BarContainer>

                <ContributionContainer style={{width: WIDTH}}>
                    <ContributionChart>

                    </ContributionChart>
                </ContributionContainer>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    Line: {
        width: 360
    }
});