// import React from 'react';

// export default function Price({ price, locale, currency }) {
//   const formatPrice = () =>
//     new Intl.NumberFormat(locale, {
//       style: 'currency',
//       currency,
//     }).format(price);

//   return <span>{formatPrice()}</span>;
// }

// Price.defaultProps = {
//   locale: 'en-US',
//   currency: 'USD',
// };
import React from 'react';

export default function Price({ price, locale, currency }) {
  const formatPrice = () =>
    new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    }).format(price);

  return <span>{formatPrice()}</span>;
}

Price.defaultProps = {
  locale: 'en-IN', // Change locale to 'en-IN' for Indian English
  currency: 'INR', // Change currency to 'INR' for Indian Rupees
};
