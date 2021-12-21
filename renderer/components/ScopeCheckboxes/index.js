import { Checkbox, Box, Fieldset, Flex } from 'gestalt';
import scopes from './data.json';

export default function ScopeCheckboxes({ data, setData }) {
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
      setData({ scopes: updatedScopes });
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
          checked={data.scopes.includes(name)}
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
