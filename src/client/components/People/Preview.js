import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty, map } from 'ramda';
import styled from 'styled-components';
import { withStateHandlers } from 'recompose';
import { Button } from '@blueprintjs/core';
import {
  LinkButton,
  PreviewContainer,
  Tag,
  Tags,
  NameLink,
  CompanyLink,
  Actions,
  ModalConfirmation,
} from '../widgets';
import Avatar from '../Avatar';
import { getPathByName } from '../../routes';

const StyledLinkButton = styled(LinkButton)`margin-left: 10px;`;

const StyledButton = styled(Button)`margin-left: 10px;`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledInfos = styled.div`
  display: flex;
  margin-left: 15px;
  flex-direction: column;
  overflow: hidden;
`;

export const Icons = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  color: rgb(68, 86, 99);
`;

export const Preview = ({
  handleMouseEnter,
  handleMouseLeave,
  showActions,
  person: { _id, name, avatar, tags = [] },
  company = {},
  onTagClick,
  deletePeople,
  isDeleteDialogOpen,
  showDialog,
  hideDialog,
}) => {
  const handleClick = tag => onTagClick(`#${tag}`);
  return (
    <PreviewContainer
      className="pt-card pt-elevation-0 pt-interactive"
      onMouseOver={handleMouseEnter}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ModalConfirmation
        isOpen={isDeleteDialogOpen}
        title="Would you like to delete this people?"
        reject={() => hideDialog()}
        accept={() => deletePeople(_id)}
      />
      <TitleRow>
        {avatar && (
          <Avatar
            name={name}
            color={avatar.color}
            size="MEDIUM"
            to={getPathByName('person', _id)}
          />
        )}
        <StyledInfos>
          <NameLink to={getPathByName('person', _id)}>{name}</NameLink>
          <CompanyLink to={getPathByName('company', company._id)}>
            {company.name}
          </CompanyLink>
        </StyledInfos>
        {showActions && (
          <Actions>
            <StyledLinkButton
              to={getPathByName('editPerson', _id)}
              className="pt-small pt-button"
              iconName="pt-icon-edit"
            />
            <StyledButton
              className="pt-small pt-button"
              iconName="pt-icon-trash"
              onClick={() => showDialog()}
            />
          </Actions>
        )}
      </TitleRow>
      {!isEmpty(tags) && (
        <Tags>
          {map(tag => (
            <Tag key={tag} onClick={() => handleClick(tag)}>
              {tag}
            </Tag>
          ))(tags)}
        </Tags>
      )}
    </PreviewContainer>
  );
};

Preview.propTypes = {
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  showActions: PropTypes.bool.isRequired,
  person: PropTypes.object.isRequired,
  company: PropTypes.object,
  onTagClick: PropTypes.func.isRequired,
  deletePeople: PropTypes.func.isRequired,
  showDialog: PropTypes.func.isRequired,
  hideDialog: PropTypes.func.isRequired,
  isDeleteDialogOpen: PropTypes.bool.isRequired,
};

const enhance = withStateHandlers(
  {
    showActions: false,
    isDeleteDialogOpen: false,
  },
  {
    handleMouseLeave: () => () => ({ showActions: false }),
    handleMouseEnter: () => () => ({ showActions: true }),
    showDialog: () => () => ({ isDeleteDialogOpen: true }),
    hideDialog: () => () => ({ isDeleteDialogOpen: false }),
  },
);

export default enhance(Preview);
