export interface PanelTab {
  label: string;
  value: string;
  active?: boolean;
}

const state = reactive({
  showLeft: true,
  showBottom: false,
  showRight: true,
  options: [
    {label: 'Contents', value: 'contents'},
    {label: 'Details', value: 'contents'},
    {label: 'Characters', value: 'contents'},
    {label: 'Locations', value: 'contents'},
    {label: 'Items', value: 'contents'},
    {label: 'Events', value: 'contents'},
    {label: 'Notes', value: 'contents'},
    {label: 'Groups', value: 'contents'},
  ],
  leftTabs: [
    {label: 'Contents', value: 'contents', active: true},
    {label: 'Details', value: 'contents'},
  ],
  bottomTabs: [],
  rightTabs: [],
})

// TODO: Save panel info to the database

export default function usePanels() {
  function toggleLeftPanel() {
    state.showLeft = !state.showLeft;
  }

  function toggleBottomPanel() {
    state.showBottom = !state.showBottom;
  }

  function toggleRightPanel() {
    state.showRight = !state.showRight;
  }

  return {
    state,
    toggleLeftPanel,
    toggleBottomPanel,
    toggleRightPanel,
  }
}
