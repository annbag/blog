function renderConfirmDeletionPopup(cb) {
    const $div = document.createElement('div');
    $div.classList.add('modal-content');
    const template = `
        <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Are you sure want to delete?</h5>
                        <button type="button" class="close close-btn" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary cancel-btn" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary confirm-btn">OK</button>
                    </div>
                </div>
            </div>
        </div>`;
    $div.innerHTML = template;
    const $container = document.querySelector('.container');
    $container.appendChild($div);
    showModal();
    const $closeBtn = $div.querySelector('.close-btn');
    $closeBtn.addEventListener('click', () => {
        hideModal();
    });
    const $cancelBtn = $div.querySelector('.cancel-btn');
    $cancelBtn.addEventListener('click', () => {
        hideModal();
    });
    const $confirmBtn = $div.querySelector('.confirm-btn');
    $confirmBtn.addEventListener('click', () => {
        cb();
        hideModal();
    });
}

function hideModal() {
    const $body = document.querySelector('body');
    $body.classList.remove('modal-open');
    const $modal = document.querySelector('.modal-content');
    $modal.remove();
}

function showModal() {
    const $body = document.querySelector('body');
    $body.classList.add('modal-open');
    const $modal = document.querySelector('.modal');
    $modal.classList.add('d-block');
    $modal.style.backgroundColor = 'rgba(0,0,0,.5)';
}
