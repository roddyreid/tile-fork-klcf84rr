import "@lwc/synthetic-shadow";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css";
import BasicApp from "./basic";
import WithIconApp from "./withIcon";
import WithAvatarApp from "./withAvatar";
import ListApp from "./list";


// Tiles can use various layouts.
export const Basic = () => BasicApp;
Basic.storyName = "Basic Tile";

// A tile can include an icon passed in the media slot.
export const WithIcon = () => WithIconApp;
WithIcon.storyName = "Tile With Icon";

// A tile can include an avatar passed in the media slot.
export const WithAvatar = () => WithAvatarApp;
WithAvatar.storyName = "Tile With Avatar";

// Tiles can be nested in list items. Apply styles to the list and each item to create dividers.
export const List = () => ListApp;
List.storyName = "Tiles in a List";
