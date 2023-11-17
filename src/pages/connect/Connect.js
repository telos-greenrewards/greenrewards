import React from "react";
import {
    ConnectParent,
    ConnectWrapper,
    Wrapper,
    FormHeader
} from "./connect.styles";
import signupimage from "../../assets/signupimage.svg";
import arrow from "../../assets/arrow.png";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Link } from "react-router-dom";








const Connect = () => {






    return (
        <ConnectParent>
            <ConnectWrapper>
                <Wrapper>

                    <form>
                        <FormHeader>
                            <h3>CONNECT YOUR WALLET</h3>

                            <img src={arrow} alt="arrow" />
                            <ConnectButton />
                           <Link to='/sell-product'><button class="bg-[#427142] hover:bg-[#DBE1D4] text-white font-bold py-2 px-4 mt-2 rounded">
                                Get Seller    </button></Link> 
                           
                            <Link to='/market-place' style={{ textDecoration: 'none', color: '#427142' }}>  <button class="bg-[#DBE1D4] hover:bg-[#427142] text-[#427142] font-bold py-2 px-4 mt-2 border border-[#427142] rounded">
                                Buy Products    </button></Link>
                        </FormHeader>








                    </form>

                    <div style={{ height: '50rem', width: '50rem' }}><img src={signupimage} alt="signupimage" /></div>
                </Wrapper>

            </ConnectWrapper>
        </ConnectParent>

    );
};

export default Connect;