import React from 'react';

export type boxIcons = "cart" | "cloud-download" | "search" | "toggle-left" | "toggle-right" | "moon" | "sun" | "dashboard" | "user" | "menu" | "message" | "bell" | "bookmark" | "calendar" | "chat" | "check" | "check-circle" | "check-square" | "chevron-down" | "chevron-left" | "chevron-right" | "chevron-up" | "clock" | "close" | "close-circle" | "close-square" | "code" | "comment" | "copy" | "edit" | "error" | "error-circle" | "error-square" | "exclamation" | "exclamation-circle" | "exclamation-square" | "external" | "file" | "filter" | "folder" | "heart" | "home" | "image" | "info" | "info-circle" | "info-square" | "link" | "location" | "lock" | "mail" | "menu-alt-left" | "menu-alt-right" | "message-add" | "message-alt" | "mobile" | "news" | "notification" | "options" | "paperclip" | "pause" | "phone" | "play" | "plus" | "plus-circle" | "plus-square" | "print" | "refresh" | "repeat" | "save" | "search-alt" | "share" | "shield" | "shopping-bag" | "shopping-cart" | "sort" | "star" | "time" | "trash" | "upload" | "user-circle" | "user-detail" | "user-minus" | "user-plus" | "user-x" | "users" | "video" | "volume" | "volume-full" | "volume-low" | "volume-mute" | "volume-off" | "warning" | "wifi" | "zoom-in" | "zoom-out" | "log-out-circle" | "cog" | "truck" | "mail-send" | "loader" | "dots-vertical-rounded";

interface BxIconProps {
    name: boxIcons;
    size?: '' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    color?: string;
    solid?: boolean;
}

const BxIconx: React.FC<BxIconProps> = ({ name, size = '', color = 'black', solid = true }) => {
    return (
        <i 
            className={`bx bx${solid?'s':''}-${name}${size.trim() === ''?'':' bx-'+size}`} 
            
        />
    );
};

export default BxIconx;