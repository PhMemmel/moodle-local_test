import Modal from 'core/modal';

export const init = async() => {
    console.log("bla")
    const modal = await Modal.create({
        templateContext: {},
        template: 'local_test/testmodal'
    });
    await modal.show();
};
