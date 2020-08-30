import styled from 'styled-components/native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #f0f0f7;
`;

export const HeaderButton = styled(BorderlessButton)``;

export const ScrollView = styled.ScrollView`
  margin-top: -40px;
`;

export const SearchForm = styled.View`
  margin-bottom: 24px;
`;

export const LabelText = styled.Text`
  color: #d4c2ff;
  font-family: 'Poppins_400Regular';
`;

export const TextInput = styled.TextInput`
  height: 54px;
  background-color: #fff;
  border-radius: 8px;
  justify-content: center;
  padding: 0 16px;
  margin-top: 4px;
  margin-bottom: 16px;
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputBlock = styled.View`
  width: 48%;
`;

export const SubmitButton = styled(RectButton)`
  height: 56px;
  border-radius: 8px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: #04d361;
`;

export const SubmitButtonText = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #fff;
  font-size: 16px;
`;
