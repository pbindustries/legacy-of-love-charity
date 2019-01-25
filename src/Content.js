import React from 'react';
import styled from 'styled-components';

const Content = ({ children }) => (
  <div>
    <BannerWrapper>
      <Banner
        src={__PATH_PREFIX__ + '/banner.jpg'}
        alt="Legacy of Love"
      />
    </BannerWrapper>

    <h1>Join the Legacy of Love</h1>

    <p>
       This is a charity fund with the goal of funding cutting edge ovarian cancer research in memory of Margo Gottesman. 
       We have started this fund to furthur Margo's substantial legacy and to prevent others from going through the same pain and loss.
    </p>

    <p>
      Please help us save lives
    </p>

    <h2>Events</h2>

    <p>Lorem ipsum ...</p>

    <h2>Goals</h2>

    <p>
      75,000$
    </p>

    {/*<ul>*/}
      {/*<li>*/}
        {/*If more than <strong>100 €</strong> are funded, I am able to create the ebook!*/}
      {/*</li>*/}
      {/*<li>*/}
        {/*If more than <strong>500 €</strong> are funded, I am going to do it!*/}
      {/*</li>*/}
      {/*<li>*/}
        {/*If more than <strong>1500 €</strong> are funded, I will ...!*/}
      {/*</li>*/}
    {/*</ul>*/}

    <p>
      The payments are handled by <a href="https://stripe.com/">Stripe</a> and
      thus your credit card details are securely managed by them. No credit card
      information is saved on my server.
    </p>

    {/*<p>*/}
      {/*So what are the perks for your contribution to this crowdfunding campaign ...*/}
    {/*</p>*/}

    {/*<ul>*/}
      {/*<li>*/}
        {/*If you contribute <strong>5 € or more</strong>, you will be notified*/}
        {/*about the release to grab a free ebook in PDF, EPUB or MOBI.*/}
      {/*</li>*/}
      {/*<li>*/}
        {/*If you contribute <strong>25 € or more</strong>, you can choose to be*/}
        {/*included in the list of backers on the official website.*/}
      {/*</li>*/}
      {/*<li>*/}
        {/*If you contribute <strong>75 € or more</strong>, you can choose to be*/}
        {/*included in the list of backers in the ebook.*/}
      {/*</li>*/}
    {/*</ul>*/}

    <p>
      Thank you for reading and for your support!
    </p>

    {children}
  </div>
);

const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Banner = styled.img`
  margin: 0;
  max-width: 100%;
  height: 400px;
`;

export default Content;
