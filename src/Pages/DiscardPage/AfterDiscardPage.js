import React from 'react'
import AnimatedLoader from 'react-native-animated-loader'
import { TextStyled, Container, UserDataContainer, AnimationContainer,
   ButtonStyled, CongratsText, CongratsTextContainer, ButtonContainer} from './styles.js'
import UserData from '../../Components/UserData/index'
import LottieView from 'lottie-react-native';
import {withNavigation} from 'react-navigation'



class Tabs extends React.Component {
  render() {

  const handleNavigate = () => {
    this.props.navigation.navigate('Statistics');
  }
  
    return (
      <Container>

        <AnimationContainer>
        <LottieView  visible={true} style={{backgroundColor: 'rgba(21, 219, 10, 1)' }} autoSize={true}
          resizeMode={"contain"} source={require("../../Components/Animations/trophy2.json")} autoPlay={true} loop={false}>
            
          </LottieView>
        </AnimationContainer>
        <UserDataContainer>
          <CongratsTextContainer>
            <CongratsText style={{fontSize: 40}}>
              Parabéns
            </CongratsText>
            <CongratsText>
              As gerações futuras te agradecem! ;)
            </CongratsText>
          </CongratsTextContainer>

        </UserDataContainer>
        <ButtonContainer>
            <ButtonStyled
                  onPress={handleNavigate}
                >
                  <TextStyled>Ver estatísticas</TextStyled>
              </ButtonStyled>
          </ButtonContainer>
      </Container>
    );
  }
}
export default withNavigation(Tabs);
