import { AutocompleteOptions, autocomplete } from '@algolia/autocomplete-js';
import { createLocalStorageRecentSearchesPlugin } from '@algolia/autocomplete-plugin-recent-searches';
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/system';
import Card from 'components/card/Card';
import { AlgoliaHit } from 'instantsearch.js';
import {
  useRef,
  useState,
  useEffect,
  useMemo,
  Fragment,
  createElement,
} from 'react';
import { render } from 'react-dom';
import {
  useSearchBox,
  usePagination,
  Highlight,
  InstantSearch,
  Hits,
} from 'react-instantsearch-hooks-web';
import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';
import { BaseItem } from '@algolia/autocomplete-core';

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: 'xyz', // Be sure to use an API key that only allows search operations
    nodes: [
      {
        host: 'alabs.pulse.org.kg',
        port: 443,
        path: '', // Optional. Example: If you have your typesense mounted in localhost:8108/typesense, path should be equal to '/typesense'
        protocol: 'https',
      },
    ],
    cacheSearchResultsForSeconds: 2 * 60, // Cache search results from server. Defaults to 2 minutes. Set to 0 to disable caching.
  },
  // The following parameters are directly passed to Typesense's search API endpoint.
  //  So you can pass any parameters supported by the search endpoint below.
  //  query_by is required.
  additionalSearchParameters: {
    query_by: 'title',
  },
});
const searchClient = typesenseInstantsearchAdapter.searchClient;

type AutocompleteProps = Partial<AutocompleteOptions<BaseItem>> & {
  className?: string;
};

type SetInstantSearchUiStateOptions = {
  query: string;
};

export function Autocomplete({
  className,
  ...autocompleteProps
}: AutocompleteProps) {
  const autocompleteContainer = useRef<HTMLDivElement>(null);

  const { query, refine: setQuery } = useSearchBox();
  const { refine: setPage } = usePagination();

  const [instantSearchUiState, setInstantSearchUiState] =
    useState<SetInstantSearchUiStateOptions>({ query });

  useEffect(() => {
    setQuery(instantSearchUiState.query);
    setPage(0);
  }, [instantSearchUiState]);

  const plugins = useMemo(() => {
    const recentSearches = createLocalStorageRecentSearchesPlugin({
      key: 'instantsearch',
      limit: 3,
      transformSource({ source }) {
        return {
          ...source,
          onSelect({ item }) {
            setInstantSearchUiState({ query: item.label });
          },
        };
      },
    });

    return [recentSearches];
  }, []);

  useEffect(() => {
    if (!autocompleteContainer.current) {
      return;
    }

    const autocompleteInstance = autocomplete({
      ...autocompleteProps,
      container: autocompleteContainer.current,
      initialState: { query },
      onReset() {
        setInstantSearchUiState({ query: '' });
      },
      onSubmit({ state }) {
        setInstantSearchUiState({ query: state.query });
      },
      onStateChange({ prevState, state }) {
        if (prevState.query !== state.query) {
          setInstantSearchUiState({
            query: state.query,
          });
        }
      },
      renderer: { createElement, Fragment, render },
      plugins,
    });

    return () => autocompleteInstance.destroy();
  }, []);

  return <div className={className} ref={autocompleteContainer} />;
}

type HitProps = {
  hit: AlgoliaHit<{
    title: string;
  }>;
};

export function LabHit(props: { hit: HitProps }) {
  const { hit } = props;
  // Chakra Color Mode
  const textColor = useColorModeValue('brands.900', 'white');
  const bgItem = useColorModeValue(
    { bg: 'white', boxShadow: '0px 40px 58px -20px rgba(112, 144, 176, 0.12)' },
    { bg: 'navy.700', boxShadow: 'unset' }
  );
  const textColorDate = useColorModeValue('secondaryGray.600', 'white');
  return (
    <Card
      _hover={bgItem}
      bg="transparent"
      boxShadow="unset"
      px="24px"
      py="21px"
      transition="0.2s linear"
    >
      <Flex direction={{ base: 'column' }} justify="center">
        <Flex position="relative" align="center">
          <Flex
            direction="column"
            w={{ base: '70%', md: '100%' }}
            me={{ base: '4px', md: '32px', xl: '10px', '3xl': '32px' }}
          >
            <Text
              color={textColor}
              fontSize={{
                base: 'md',
              }}
              mb="5px"
              fontWeight="bold"
              me="14px"
            >
              <Highlight hit={hit} attribute="title" />
            </Text>
            <Text
              color="secondaryGray.600"
              fontSize={{
                base: 'sm',
              }}
              fontWeight="400"
              me="14px"
            >
              Исследование
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const LabsSearchModal = (props: ModalProps) => {
  const { isOpen, onClose } = props;
  return (
    <Modal size={'2xl'} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Исследования</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <InstantSearch indexName="labs" searchClient={searchClient}>
            <Autocomplete
              placeholder="Поиск исследований"
              detachedMediaQuery="none"
              openOnFocus
            />
            <Hits hitComponent={LabHit} />
          </InstantSearch>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LabsSearchModal;
