(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach( form => {
        form.addEventListener('submit', event => {
            if(!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
}) ()

// const popovertriggerList = document.querySelectorAll('[data-bs-toggle="popover"')
// const popoverList = [...popovertriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

import AOS from 'aos';
import 'js/aos/dist/aos.css';
AOS.init();
