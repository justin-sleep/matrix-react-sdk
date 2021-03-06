/*
Copyright 2019 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// These are in their own file because of circular imports being a problem.
export const RIGHT_PANEL_PHASES = Object.freeze({
    // Room stuff
    RoomMemberList: 'RoomMemberList',
    FilePanel: 'FilePanel',
    NotificationPanel: 'NotificationPanel',
    RoomMemberInfo: 'RoomMemberInfo',
    Room3pidMemberInfo: 'Room3pidMemberInfo',

    // Group stuff
    GroupMemberList: 'GroupMemberList',
    GroupRoomList: 'GroupRoomList',
    GroupRoomInfo: 'GroupRoomInfo',
    GroupMemberInfo: 'GroupMemberInfo',
});

// These are the phases that are safe to persist (the ones that don't require additional
// arguments).
export const RIGHT_PANEL_PHASES_NO_ARGS = [
    RIGHT_PANEL_PHASES.NotificationPanel,
    RIGHT_PANEL_PHASES.FilePanel,
    RIGHT_PANEL_PHASES.RoomMemberList,
    RIGHT_PANEL_PHASES.GroupMemberList,
    RIGHT_PANEL_PHASES.GroupRoomList,
];
