import styled from "styled-components/native";


export const Container = styled.View`
    background-color: #ffffff;
    height: 100%;
    width: 100%;
`;

export const Title = styled.Text`
    color: #888888;
    font-size: 14px;
`;
export const Followers = styled.Text`
    color: #888888;
    font-size: 14px;
    margin-right:20px;
`;
export const UserTitle = styled.Text`
    color: #888888;
    font-size: 25px;
`;

export const ImgProfile = styled.Image`
    height: 60;
    width: 60;
    border-radius: 100px;
    border-width: 10px;
    border-color: white;

`;

export const ContainerInfo = styled.View`
    display: flex;
    justify-content: flex-start;
    margin: 0px;
    padding: 20px;
    margin-left:70px;
`;
export const UserImg = styled.View`
    position:absolute;
    padding: 30px 15px;
`;

export const ContainerLocation = styled.View`
    display:flex;
    flex-flow: row nowrap;
    justify-content: space-around;
`;
export const ContainerSeguidores = styled.View`
    display:flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    margin-right: 70px;
`;
export const ContainerRepositorios = styled.View`
    display:flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    
`;

export const ContainerRepositorie = styled.View`
    border: #888888;
    border-radius: 12px;

    margin: 10px;
    display:flex;
    align-content: stretch;
    background: white;
    height:210px;
`;
export const RepositorieText = styled.Text`
    color: #888888;
`;

export const RepositorieButton = styled.View`
    background:#2679ff;
    padding: 10px;
    border-radius: 0px 0px 12px 12px;
    width:100%;
    margin:10px 0px;
    position:absolute;
`;
    
export const ButtonText = styled.Text`
    color: #ffffff;
    text-align:center;
`;

export const List = styled.View`
    display:flex;
    height:500px;
`;

export const QuantityRepositorie = styled.Text`
    color: #888888;
    font-size: 15px;
    padding:10px;
    width:100%;
`;
    
export const ViewInfo = styled.View`
    padding: 10px;
`;  
export const RepositorieTitle = styled.Text`
    color: #ffffff;
    font-size: 18px;
`;
export const ViewTitle = styled.View`
    padding: 10px;
    background:#2679ff;
    border-radius: 12px 12px 0px 0px;
`;  