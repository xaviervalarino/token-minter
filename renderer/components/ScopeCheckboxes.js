import { useEffect } from 'react';
import { Checkbox, Box, Fieldset, Flex } from 'gestalt';

const scopes = [
  {
    name: 'ads:read',
    description: 'Read access to advertising data',
  },
  {
    name: 'boards:read',
    description: 'Read access to public boards',
  },
  {
    name: 'boards:read_secret',
    description: 'Read access to secret boards',
  },
  {
    name: 'boards:write',
    description: 'Write access to create, update, or delete boards',
  },
  {
    name: 'boards:write_secret',
    description: 'Write access to create, update, or delete secret boards',
  },
  {
    name: 'pins:read',
    description: 'Read access to Pins',
  },
  {
    name: 'pins:read_secret',
    description: 'Read access to secret Pins',
  },
  {
    name: 'pins:write',
    description: 'Write access to create, update, or delete Pins',
  },
  {
    name: 'pins:write_secret',
    description: 'Write access to create, update, or delete secret Pins',
  },
  {
    name: 'user_accounts:read',
    description: 'Read access to user accounts',
  },
];

export default function ScopeCheckboxes({ data, setData }) {
  useEffect(() => {
    if (!Object.prototype.hasOwnProperty.call(data, 'scopes')) {
      setData({ ...data, scopes: [] });
    }
  });

  const onChange = ({ event, checked }) => {
    return (() => {
      const { name } = event.target;
      const updatedScopes = data.scopes;
      const index = data.scopes.indexOf(name);
      if (!checked) {
        updatedScopes.splice(index, 1);
      } else {
        updatedScopes.push(name);
      }
      setData({ ...data, scopes: updatedScopes });
    })();
  };

  const createCheckboxes = scopes.map(({ name, description }) => {
    return (
      <Box key={name} width="40vw" marginBottom={6}>
        <Checkbox
          name={name}
          id={name}
          label={name}
          subtext={description}
          checked={data.scopes && data.scopes.includes(name)}
          onChange={onChange}
        />
      </Box>
    );
  });

  return (
    <Fieldset legend="Your apps scopes (select at least one)">
      <Flex gap={6} wrap>
        {createCheckboxes}
      </Flex>
    </Fieldset>
  );
}
