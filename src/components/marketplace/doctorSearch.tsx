import { AutocompleteOptions, autocomplete } from '@algolia/autocomplete-js';
import { createLocalStorageRecentSearchesPlugin } from '@algolia/autocomplete-plugin-recent-searches';
import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
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
import { useRouter } from 'next/router';
import { useCurDoctorForwardStore } from 'stores/curDoctorForward/curDoctorForward';
import { MdArrowRight } from 'react-icons/md';

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
    query_by: 'user_fullName, description_blocks_0_data_text',
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
    _id: string;
  }>;
};

export function LabHit(props: { hit: HitProps }) {
  const { hit } = props;
  const { setCurDoctor } = useCurDoctorForwardStore();
  // Chakra Color Mode
  const textColor = useColorModeValue('brands.900', 'white');
  const bgItem = useColorModeValue(
    { bg: 'white', boxShadow: '0px 40px 58px -20px rgba(112, 144, 176, 0.12)' },
    { bg: 'navy.700', boxShadow: 'unset' }
  );
  const router = useRouter();
  const textColorDate = useColorModeValue('secondaryGray.600', 'white');

  console.log('hit', hit);
  return (
    <Card
      onClick={() => setCurDoctor(hit)}
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
            direction="row"
            justify={'space-between'}
            align={'center'}
            w={{ base: '70%', md: '100%' }}
            me={{ base: '4px', md: '32px', xl: '10px', '3xl': '32px' }}
          >
            <Flex gap={4} align={'center'}>
              <Avatar size={'lg'} src={hit.user_avatar}></Avatar>
              <Flex direction="column">
                <Text
                  color={textColor}
                  fontSize={{
                    base: 'md',
                  }}
                  mb="5px"
                  fontWeight="bold"
                  me="14px"
                >
                  <Highlight hit={hit} attribute="user_fullName" />
                </Text>
                <Text
                  color="secondaryGray.600"
                  fontSize={{
                    base: 'sm',
                  }}
                  fontWeight="400"
                  me="14px"
                >
                  {hit.description_blocks_0_data_text}
                </Text>
              </Flex>
            </Flex>
            <IconButton
              colorScheme={'blue'}
              aria-label="go"
              onClick={() => router.push('/client/doctor/' + hit.id)}
            >
              <Icon as={MdArrowRight}></Icon>
            </IconButton>
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
const DoctorSearchModal = (props: ModalProps) => {
  const { isOpen, onClose } = props;
  const { doctor } = useCurDoctorForwardStore();
  return (
    <Modal size={'2xl'} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Доктора</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Выбран доктора: {doctor?.user?.fullName}</Text>
          <InstantSearch indexName="doctors" searchClient={searchClient}>
            <Autocomplete
              placeholder="Поиск доктора"
              detachedMediaQuery="none"
              openOnFocus
            />
            <Hits hitComponent={LabHit} />
          </InstantSearch>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Закрыть
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DoctorSearchModal;
