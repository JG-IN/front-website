import React from 'react'
import styled from 'styled-components'

const CommonStyle = styled.div`

    flex : 0 0 auto;
    padding-right : ;
    padding-left : ;
    
    //해당 조건에 따라서 실행 되도록 한다.
    //flex-basis
    //max-width
`

const PcContainer = styled(CommonStyle)`
    display : flex;
`
const TabletContainer = styled(CommonStyle)`
    display : flex;
`

const MobileContainer = styled(CommonStyle)`
    display : flex;
`


function FlexRow(props){

    const isPc = useMediaQuery({query : '(min-width : 1824px)'})
    const isTablet = useMediaQuery({query : '(max-width : 992px)'})
    const isMobile = useMediaQuery({query : '(max-width : 500px)'}) 

    return(
        <React.Fragment>
            {isPc && PcContainer}
            {isTablet && TabletContainer}
            {isMobile && MobileContainer}
        </React.Fragment>
    )

}

export default FlexRow