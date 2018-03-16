import React from 'react';
import MobileTearSheet from '../MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';


const KeyList = () => (
  <MobileTearSheet>
    <List>
      <ListItem primaryText="key1"  />
      <Divider />
      <ListItem primaryText="key2"  />
      <Divider />
      <ListItem primaryText="key3"  />
      <Divider />
      <ListItem primaryText="key4"  />
      <Divider />
      <ListItem primaryText="..."  />
    </List>

  </MobileTearSheet>
);

export default KeyList;
