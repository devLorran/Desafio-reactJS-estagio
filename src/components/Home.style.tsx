import styled from "styled-components/native";


export const UserPhoto = styled.Image`
    width: 200px;
    height: 200px;
    border-radius: 4px;
    border-color:#ffffff;
    border-rwidth:2px;
`

export const SearchInput = styled.TextInput`
    width:80%;
    height: 50px;
    margin-top: 11px;
    padding: 14px;
    border-radius: 10px;
    border: 1px solid #cccccc;
    border-radius: 50px;
`

export const MainView = styled.SafeAreaView`
    background-color: #ffffff;
    display: flex;
    flex-direction: column-reverse;
`
export const ViewResult = styled.View`
    background-color: #2679ff;
    display:flex;
    align-items: center;
    padding: 70px;
    height:500px;
`;

export const ViewInfoUser = styled.View`
    display: flex;
    align-items: left;
`
export const ViewSearchContainer = styled.View`
    display: flex;
    flex-direction: column-reverse;
    flex-flow: row nowrap;
    position: relative;
    margin-top:20px;
`;
export const ButtonToSearch = styled.Pressable`
    border-radius: 5px;
    padding: 10px;
    color: #ffffff;
    width: 20%;
`
export const ViewButton = styled.View`
    background: #2679ff;
    padding-vertical: 10px;
    padding-horizontal: 10px;
    color: white;
    border:none;
    border-radius: 56px;

`
export const Name = styled.Text`
    color: #ffffff;
    font-size: 26px;
    font-weight: 600;
`
export const Username = styled.Text`
    color: #cccccc;
    font-size: 15px;
`
export const Location = styled.Text`
    color: #cccccc;
    font-size: 15px;
`