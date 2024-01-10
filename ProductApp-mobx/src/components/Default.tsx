import React from 'react'
import NotFound from '@spectrum-icons/illustrations/NotFound';
import { Content, Heading, IllustratedMessage, Provider } from '@adobe/react-spectrum';

export default function Default() {
  return (


    <IllustratedMessage>
      <NotFound />
      <Heading>404 Not Found</Heading>
      <Content>Try another search</Content>
    </IllustratedMessage>

  )
}
