import React from 'react';

const userIcon = require('../../images/user.svg')
const optimizeIcon = require('../../images/optimization.svg')
const responsiveIcon = require('../../images/responsive-design.svg')
const subscriptionIcon = require('../../images/subscription.svg')

const subscriptionText = () => {
    return (
      <>
    <span>NO SETUP FEE</span>, <span>$250</span> per month for a 5 page website + maintenance. Affordable packages with no hidden fees. Simple yearly contracts.
    </>
    )
  }

const data = {
    one: {
        title: 'Subscription-Based',
        text: subscriptionText(),
        icon: subscriptionIcon,
        alt: 'blue envelope icon'
    },
    two: {
        title: 'Optimization',
        text: "Website speed is our driving force for a quality site. The number one reason visitors will leave your website is if it's too slow.",
        icon: optimizeIcon,
        alt: 'bar graph showing increases'
    },
    three: {
        title: 'Mobile-First Design',
        text: ' We build all our sites mobile-first because most online traffic is on mobile devices. We also ensure every site is fully responsive.',
        icon: responsiveIcon,
        alt: 'blue desktop and phone icon'
    },
    four: {
        title: 'User-Friendly',
        text: 'A simple and easy to use website is a priority, yet sometimes overlooked. All of our sites are easy to navigate and use.',
        icon: userIcon,
        alt: 'user in front of desktop with a colorful layout'
    },
}
export default data;