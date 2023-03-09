// Chakra imports
import {
  AspectRatio,
  Box,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Image } from 'components/image/Image';
// Custom components
import Card from 'components/card/Card';
// Assets
import { FaDollarSign, FaEthereum } from 'react-icons/fa';
import { AlgoliaHit } from 'instantsearch.js';
import { Highlight } from 'instantsearch.js/es/components/Highlight/Highlight';

type HitProps2 = {
  hit: AlgoliaHit<{
    name: string;
    image: string;
    company: string;
    label: string;
  }>;
};

export default function Hit({ hit }: HitProps2) {
  return (
    <div className="hit">
      {/* <div className="hit-image">
        <img src={hit.image} alt={hit.name} />
      </div> */}
      <div>
        <h1>
          <Highlight hit={hit} attribute="title" />
        </h1>
      </div>
    </div>
  );
}
