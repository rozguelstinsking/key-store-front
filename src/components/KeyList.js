import React from 'react';
import MobileTearSheet from '../MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ActionInfo from 'material-ui/svg-icons/action/info';

const KeyList = () => (
  <MobileTearSheet>
    <List>
      <ListItem primaryText="key1"  />
      <ListItem primaryText="key2"  />
      <ListItem primaryText="key3"  />
      <ListItem primaryText="key4"  />
      <ListItem primaryText="..."  />
    </List>

  </MobileTearSheet>
);

export default KeyList;
