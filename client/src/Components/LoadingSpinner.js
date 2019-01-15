// @flow
import React from 'react'
import styled from 'styled-components'
import { colors } from '../Theme'

const Wrapper = styled.div`
    .spinner {
        margin: 100px auto;
        width: 100px;
        height: 40px;
        text-align: center;
        font-size: 10px;
    }

    .spinner > div {
        background-color: ${colors.blue[1]};
        height: 100%;
        width: 6px;
        display: inline-block;

        -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
        animation: sk-stretchdelay 1.2s infinite ease-in-out;
    }

    .rect {
        margin: 1px;
    }

    .spinner .rect2 {
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s;
    }

    .spinner .rect3 {
        -webkit-animation-delay: -1s;
        animation-delay: -1s;
    }

    .spinner .rect4 {
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s;
    }

    .spinner .rect5 {
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s;
    }

    @-webkit-keyframes sk-stretchdelay {
        0%,
        40%,
        100% {
            -webkit-transform: scaleY(0.4);
        }
        20% {
            -webkit-transform: scaleY(1);
        }
    }

    @keyframes sk-stretchdelay {
        0%,
        40%,
        100% {
            transform: scaleY(0.4);
            -webkit-transform: scaleY(0.4);
        }
        20% {
            transform: scaleY(1);
            -webkit-transform: scaleY(1);
        }
    }
`
const LoadingSpinner = () => (
    <Wrapper>
        <div class="spinner">
            <div class="rect rect1" />
            <div class="rect rect2" />
            <div class="rect rect3" />
            <div class="rect rect4" />
            <div class="rect rect5" />
        </div>
    </Wrapper>
)

export default LoadingSpinner
