const state = reactive({
  novels: [
    {id: 1, title: 'Psycho Shifters'},
    {id: 2, title: 'Psycho Fae'},
    {id: 3, title: 'Psycho Beasts'}
  ],
  current: {
    id: 1,
    title: 'Psycho Shifters',
    sections: [
      {
        id: 1,
        title: "Prologue",
        order: 0,
        isChapter: false,
        scenes: [
          {id: 1, order: 1, title: "Scene 1", content: null}
        ]
      },
      {
        id: 2,
        title: "Chapter 1",
        order: 1,
        isChapter: true,
        scenes: [
          {id: 2, order: 1, title: null, content: ''},
          {id: 3, order: 2, title: null, content: ''}
        ]
      },
      {
        id: 3,
        title: "Chapter 2",
        order: 2,
        isChapter: true,
        scenes: [
          {id: 4, order: 1, title: "Scene 1", content: ''},
          {
            id: 5,
            order: 2,
            title: "This is a really long title for scene 2",
            content: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies eget magna eu commodo. Duis non ante pretium, maximus mi sit amet, dapibus augue. Suspendisse et bibendum tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis risus non tortor rutrum, sed laoreet arcu malesuada. Aliquam a blandit dolor. Aenean ornare consectetur felis quis rhoncus. Duis posuere tincidunt mattis. Curabitur vehicula metus diam, eget dapibus sem elementum vel. Curabitur quis ipsum id elit vestibulum bibendum id et leo. In in consectetur justo. Cras fringilla luctus eros ut molestie. Nulla blandit dui tortor, id congue enim sodales at.</p><p>Vivamus vel quam tincidunt, dictum mi ut, laoreet ante. Nunc tincidunt sapien justo, non faucibus odio faucibus in. Curabitur a consequat nunc. Fusce pulvinar augue ultrices posuere ultricies. Morbi molestie elit in nulla dignissim elementum in nec purus. Sed eget urna dictum, cursus leo non, rutrum mauris. Praesent sit amet vulputate massa. Morbi ultricies sed sapien at placerat. Ut congue lectus eget nisl rutrum bibendum. Proin fringilla nulla ante, sit amet pellentesque turpis blandit sit amet. Fusce scelerisque ultrices dolor ut posuere.</p> <p>Quisque lorem est, tristique in iaculis ut, eleifend in lectus. Duis pretium ligula justo, a pellentesque augue placerat et. Sed ornare porttitor neque, non ultricies odio blandit in. Morbi odio augue, luctus nec mattis ut, ornare at turpis. Suspendisse vitae convallis risus, eget porta nunc. Donec maximus, massa vitae feugiat sagittis, est turpis blandit turpis, at mattis risus est eu purus. Curabitur consequat egestas dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur vel faucibus lectus. Mauris efficitur id erat venenatis lacinia. Duis vitae fringilla quam. Mauris vehicula purus sit amet neque feugiat, aliquet auctor justo tempus. Donec consequat pretium lectus, at pellentesque nisl imperdiet eu.</p> <h2>This is a heading</h2> <p>Mauris ante dui, sodales commodo elit ut, pretium vulputate velit. Aenean odio tortor, pretium ut auctor eu, aliquam quis libero. Mauris et ligula non nisi blandit molestie. Morbi nisi diam, pulvinar ac felis eget, posuere ullamcorper est. Pellentesque convallis mi quis leo mattis, imperdiet viverra sapien volutpat. Nulla facilisi. Mauris et finibus tellus. Cras ultricies libero urna, et iaculis leo ultrices et. Praesent eu ante vel justo molestie lobortis. Phasellus a interdum enim. Cras cursus quam vitae nisi consectetur euismod quis vel augue. Nam malesuada neque in felis dignissim, vitae dignissim urna sagittis. Vestibulum vulputate semper ligula, efficitur suscipit arcu tincidunt nec.</p> <p>Vivamus vel quam tincidunt, dictum mi ut, laoreet ante. Nunc tincidunt sapien justo, non faucibus odio faucibus in. Curabitur a consequat nunc. Fusce pulvinar augue ultrices posuere ultricies. Morbi molestie elit in nulla dignissim elementum in nec purus. Sed eget urna dictum, cursus leo non, rutrum mauris. Praesent sit amet vulputate massa. Morbi ultricies sed sapien at placerat. Ut congue lectus eget nisl rutrum bibendum. Proin fringilla nulla ante, sit amet pellentesque turpis blandit sit amet. Fusce scelerisque ultrices dolor ut posuere.</p> <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus vel sem id est interdum commodo ut vel nibh. Ut accumsan, arcu a dignissim semper, est libero ultricies quam, nec porttitor mi purus nec massa. Proin cursus, neque nec dignissim consequat, magna ipsum faucibus massa, vel ultricies dui enim id erat. Sed in eros nec felis sagittis elementum sed a sapien. Morbi facilisis felis eget ipsum euismod, vel tempus purus eleifend. Pellentesque dolor mauris, porta in turpis nec, lacinia interdum erat. Etiam ut ligula ligula. Aliquam nec bibendum est.</p>"
          },
          {id: 6, order: 3, title: "Scene 3", content: ''},
          {id: 7, order: 4, title: "Scene 4", content: ''}
        ]
      },
      {
        id: 4,
        title: "Chapter 3",
        order: 3,
        isChapter: true,
        scenes: [
          {id: 8, order: 1, title: "Scene 1", content: ''}
        ]
      },
      {
        id: 5,
        title: "Chapter With a Really Long Title",
        order: 4,
        isChapter: true,
        scenes: [
          {id: 9, order: 1, title: "Scene 1", content: ''}
        ]
      },
      {
        id: 6,
        title: null,
        order: 5,
        isChapter: true,
        scenes: [
          {id: 10, order: 1, title: null, content: ''},
          {id: 11, order: 2, title: null, content: ''}
        ]
      },
      {
        id: 7,
        title: null,
        order: 6,
        isChapter: true,
        scenes: [
          {id: 12, order: 1, title: "Scene 1", content: ''}
        ]
      },
      {
        id: 8,
        title: "Epilogue",
        order: 999999,
        isChapter: false,
        scenes: [
          {id: 1, order: 1, title: "Scene 1", content: null}
        ]
      },
    ]
  },
  currentChapterId: 3,
  currentSceneId: 5,
})

export default function useNovel() {
  const toc = computed(() => {
    return state.current.sections.map((section) => {
      return {
        id: section.id,
        label: section.title ? section.title : `Chapter ${section.order}`,
        order: section.order,
        isChapter: section.isChapter,
        items: section.scenes.map((scene) => {
          return {
            id: scene.id,
            label: scene.title ? scene.title : `Scene ${scene.order}`,
            order: scene.order,
          }
        })
      }
    })
  });

  return {
    state,
    toc: toc.value,
  }
}
