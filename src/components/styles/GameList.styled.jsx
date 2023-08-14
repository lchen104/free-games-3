import styled from 'styled-components'

export const StyledGameList = styled.div`
    ${'' /* border: 2px solid red; */}
    
    .container {
        ${'' /* border: 2px solid green; */}
        padding: 0;
        width: 1150px;
        ${'' /* text-align: center; */}
    }

    .item {
        ${'' /* border: 2px solid blue; */}
        display: inline-block;
        padding: 3px;
    }

    img {
        border-radius: 10px;
    }

    /* Add/Delete favorites overlay */

    .game-app .row {
        overflow-x: auto;
        flex-wrap: nowrap;
    }

    .image-container {
        transition:  transform 0.2s;
    }

    .image-container:hover {
        cursor: pointer;
        transform: scale(1.1);
    }

    .image-container:hover .overlay {
        opacity: 0.7;
        border: 1px solid #141414;
    }

    .overlay {
        position: absolute;
        background: black;
        width: 90%;
        transition: 0.5s ease;
        opacity: 0;
        bottom: 10px;
        left: 20px;
        margin: 0;
        font-size: 20px;
        padding: 5px 0px;
        text-align: center;
        border-radius: 25px;
        color: white;
    }
`