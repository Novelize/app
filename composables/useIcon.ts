// https://icon-sets.iconify.design/material-symbols/

export default function useIcon() {
  function string(name: string) {
    switch (name) {
      case 'bold':
        return 'material-symbols:format-bold-rounded';
      case 'italic':
        return 'material-symbols:format-italic-rounded';
      case 'underline':
        return 'material-symbols:format-underlined-rounded';
      case 'strikethrough':
        return 'material-symbols:strikethrough-s-rounded';
      case 'align-left':
        return 'material-symbols:format-align-left-rounded';
      case 'align-center':
        return 'material-symbols:format-align-center-rounded';
      case 'align-right':
        return 'material-symbols:format-align-right-rounded';
      case 'align-justify':
        return 'material-symbols:format-align-justify-rounded';
      case 'link':
        return 'material-symbols:link-rounded';
      case 'indent':
        return 'material-symbols:format-indent-decrease-rounded';
      case 'outdent':
        return 'material-symbols:format-indent-increase-rounded';
      case 'tint':
        return 'material-symbols:format-color-text-rounded';
      case 'highlight':
        return 'material-symbols:format-ink-highlighter-rounded';
      case 'undo':
        return 'material-symbols:undo-rounded';
      case 'redo':
        return 'material-symbols:redo-rounded';
      case 'print':
        return 'material-symbols:print-rounded';
      case 'history':
        return 'material-symbols:history-rounded';
      case 'arrow-right':
        return 'material-symbols:arrow-forward-rounded';
      case 'arrow-left':
        return 'material-symbols:arrow-back-rounded';
      case 'h2':
        return 'material-symbols:format-h2-rounded';
      case 'h3':
        return 'material-symbols:format-h3-rounded';
      case 'horizontalRule':
        return 'material-symbols:horizontal-rule-rounded';
      case 'image':
        return 'material-symbols:imagesmode-outline-rounded';
      case 'listOl':
        return 'material-symbols:format-list-numbered-rounded';
      case 'listUl':
        return 'material-symbols:format-list-bulleted-rounded';
      case 'settings':
        return 'material-symbols:settings';
      case 'hexagon':
        return 'material-symbols:hexagon-rounded';
      case 'add':
        return 'material-symbols:add-rounded';
      case 'check':
        return 'material-symbols:check-rounded';
      case 'close':
        return 'material-symbols:close-rounded';
      case 'delete':
        return 'material-symbols:delete-rounded';
      case 'download':
        return 'material-symbols:download-rounded';
      case 'menu':
        return 'material-symbols:menu-rounded';
      case 'search':
        return 'material-symbols:search-rounded';
      case 'character':
        return 'material-symbols:person-rounded';
      case 'location':
        return 'material-symbols:location-on-rounded';
      case 'item':
        return 'material-symbols:diamond-rounded';
      case 'event':
        return 'material-symbols:calendar-today-rounded';
      case 'group':
        return 'material-symbols:interests-rounded';
      case 'note':
        return 'material-symbols:sticky-note-2-rounded';
      case 'book':
        return 'material-symbols:book-2-rounded';
      case 'bookmark':
        return 'material-symbols:bookmark-rounded';
      case 'bookmarks':
        return 'material-symbols:bookmarks-rounded';
      case 'notebook':
        return 'material-symbols:school-rounded';
      case 'details':
        return 'material-symbols:view-list-rounded';
      case 'contents':
        return 'material-symbols:list-alt-rounded';
      case 'hive':
        return 'material-symbols:hive-rounded';
    }

    return '';
  }

  return {
    string,
  }
}
