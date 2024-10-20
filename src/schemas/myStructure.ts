export const myStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('reviewSection')
        .child(
          S.document()
            .schemaType('reviewSection')
            .documentId('reviewSection')),
      ...S.documentTypeListItems().filter(listItem => !['reviewSection'].includes(listItem.getId()))
    ])