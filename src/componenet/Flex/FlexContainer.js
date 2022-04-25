import React from "react";
import styled from "styled-components";


const Container = styled.div`
    margin-right : auto;
    margin-left : auto;
`





function FlexContainer(props){


    return (
        <Container>{props.children}</Container>
    )
}

export default FlexContainer;