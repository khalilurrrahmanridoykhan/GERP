// Remove container class from page-body and page-head - run immediately
(function () {
    function removeContainerClass() {
        // Remove from page-body
        const pageBody = document.querySelector('.page-body');
        if (pageBody) {
            pageBody.classList.remove('container');
            pageBody.classList.remove('container-fluid');
            pageBody.classList.remove('container-xl');
            pageBody.classList.remove('container-lg');
            pageBody.classList.remove('container-md');
            pageBody.classList.remove('container-sm');
        }

        // Remove from page-head
        const pageHeadContainers = document.querySelectorAll('.page-head .container, .page-head-content .container');
        pageHeadContainers.forEach(function (container) {
            container.classList.remove('container');
            container.classList.remove('container-fluid');
            container.classList.remove('container-xl');
            container.classList.remove('container-lg');
            container.classList.remove('container-md');
            container.classList.remove('container-sm');
        });
    }

    // Run immediately
    removeContainerClass();

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', removeContainerClass);
    } else {
        removeContainerClass();
    }

    // Run when frappe is ready
    if (typeof frappe !== 'undefined') {
        frappe.ready(removeContainerClass);
    }

    // Watch for dynamic changes using MutationObserver
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                removeContainerClass();
            }
        });
    });

    // Start observing when page-body exists
    function startObserving() {
        const pageBody = document.querySelector('.page-body');
        if (pageBody) {
            observer.observe(pageBody, { attributes: true });
        }

        // Also observe page-head containers
        const pageHeadContainers = document.querySelectorAll('.page-head .container, .page-head-content .container');
        pageHeadContainers.forEach(function (container) {
            observer.observe(container, { attributes: true });
        });

        if (!pageBody && pageHeadContainers.length === 0) {
            setTimeout(startObserving, 100);
        }
    }
    startObserving();

    // Also watch for page changes
    $(document).on('page-change', removeContainerClass);
    $(document).on('form-load', removeContainerClass);
    $(document).on('list-load', removeContainerClass);
})();
