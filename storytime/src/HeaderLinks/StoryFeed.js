import React from 'react'
import styled from 'styled-components'

export const StoryFeed = () => {
    return (
        <MainWrapper>
            Story Feed
        </MainWrapper>
    )
}

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    border: solid;
    width: 100%;
    padding: 1rem;
`