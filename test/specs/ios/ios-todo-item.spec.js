// const ListScreen = require('../../screenobjects/ios/list.screen');


describe('Todo Item', () => {
  it('Create a Todo Item', async () => {
    // Create TODO List
    // await ListScreen.createListBtn.click();
    // await ListScreen.listNameInput.addValue("Things to do");
    // await ListScreen.createBtn.click();

    await $('//*[@name="Create list"]').click();
    await $('//*[@value="List Name"]').addValue("Things to do");
    await $('~Create').click();

    // await expect(await ListScreen.listNameField("Things to do")).toBeExisting();
    await expect(await $('~Things to do')).toBeExisting();

    // Create Todo Item
    await $("~Things to do").click();
    await $("//*[@name='Create item']").click();
    await $('//*[@value="Title"]').addValue("Buy groceries");
    await $("//*[@value='Due']").click();
    // await $("//XCUIElementTypeButton[@name='Date Picker']").click();
    // await $("//*[@value='15']").click();
    // await $("//XCUIElementTypeWindow[@index=2]").click();
    await $("~Create").click();

    // assertion
    await expect(await $("~Buy groceries")).toBeExisting();
    await expect(await $("~No due date")).toBeExisting();
  });
});