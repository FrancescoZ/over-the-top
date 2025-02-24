import { Button, Text, HStack, Image, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import itFlag from '../../assets/it.svg';
import gbFlag from '../../assets/en.svg';
import { FaChevronDown } from 'react-icons/fa';

const languages = [
  {
    code: 'it',
    name: 'Italiano',
    flag: itFlag
  },
  {
    code: 'en',
    name: 'English',
    flag: gbFlag
  }
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  const getCurrentLanguage = () => {
    return languages.find((lang) => lang.code === i18n.language) || languages[0];
  };

  return (
    <Menu>
          <MenuButton
            as={Button}
            rightIcon={<FaChevronDown />}
            bg="whiteAlpha.200"
            _hover={{ bg: 'whiteAlpha.300' }}
            _active={{ bg: 'whiteAlpha.400' }}
          >
            <HStack>
              <Image
                src={getCurrentLanguage().flag}
                alt={getCurrentLanguage().name}
                boxSize="20px"
                objectFit="cover"
                borderRadius="full"
              />
              <Text>{getCurrentLanguage().name}</Text>
            </HStack>
          </MenuButton>
          
          <MenuList bg="gray.800" borderColor="gray.700">
            {languages.map((language) => (
              <MenuItem
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                bg="gray.800"
                _hover={{ bg: 'gray.700' }}
              >
                <HStack>
                  <Image
                    src={language.flag}
                    alt={language.name}
                    boxSize="20px"
                    objectFit="cover"
                    borderRadius="full"
                  />
                  <Text>{language.name}</Text>
                </HStack>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
  );
};

export default LanguageSelector;
