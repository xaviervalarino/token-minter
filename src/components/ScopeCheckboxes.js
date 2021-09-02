import { useEffect } from 'react';
import {
  Checkbox,
  Fieldset,
  Flex
} from 'gestalt';

const scopes = [
  {
    name: 'ads:read',
    description: 'Read access to advertising data'
  },
  {
    name: 'boards:read',
    description: 'Read access to public boards'
  },
  {
    name: 'boards:read_secret',
    description: 'Read access to secret boards'
  },
  {
    name: 'boards:write',
    description: 'Write access to create, update, or delete boards'
  },
  {
    name: 'boards:write_secret',
    description: 'Write access to create, update, or delete secret boards'
  },
  {
    name: 'pins:read',
    description: 'Read access to Pins'
  },
  {
    name: 'pins:read_secret',
    description: 'Read access to secret Pins'
  },
  {
    name: 'pins:write',
    description: 'Write access to create, update, or delete Pins'
  },
  {
    name: 'pins:write_secret',
    description: 'Write access to create, update, or delete secret Pins'
  },
  {
    name: 'user_accounts:read',
    description: 'Read access to user accounts'
  }
];

export default function ScopeCheckboxes({ data, setData }) {
  useEffect( () => {
    if ( !data.hasOwnProperty('scopes') ) {
      setData({ ...data, scopes: [] })
    }
  })
  const createCheckboxes = data => {
    return scopes.map(({ name, description }, index) => {

      const onChange = ({event, checked}) => {
        return (() => {
          const name = event.target.name
          const updatedScopes = data.scopes;
          const index = data.scopes.indexOf(name)
          if (!checked) {
            updatedScopes.splice(index, 1)
          } else {
            updatedScopes.push(name)
          }
          setData({ ...data, scopes: updatedScopes })
        })();
      };
      return (
        <Flex.Item key={index} flex='shrink'>
          <Checkbox
            name={name}
            id={name}
            label={name}
            subtext={description}
            checked={ data.scopes && data.scopes.includes(name) }
            onChange={onChange}
          />
        </Flex.Item>
      )
    })
  }
  return (
    <Fieldset legend='Your apps scopes (select at least one)'>
      <Flex gap={6}  wrap={true} direction='column'>
        { createCheckboxes(data) }
      </Flex>
    </Fieldset>
  )
}
