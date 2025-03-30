export type PanelLocation = 'left' | 'bottom' | 'right';

const state = reactive<{
  showLeft: boolean;
  showBottom: boolean;
  showRight: boolean;
}>({
  showLeft: true,
  showBottom: false,
  showRight: true,
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
