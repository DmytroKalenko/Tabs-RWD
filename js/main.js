// create tabs

    const tabsTitles = document.querySelectorAll('.tabs .tabs__titles .title_item');
    const itemsContent = document.querySelectorAll('.tabs .content_items .content_item');

    const mobile = window.innerWidth <= 978;

    if (!mobile) {
        tabsTitles[0].classList.add('active');
        itemsContent[0].classList.add('active');
    }


    for (let i = 0; i < tabsTitles.length; i++) {
        tabsTitles[i].addEventListener('click', function () {

            if (mobile != true) {
                for (let k = 0; k < itemsContent.length; k++) {
                    tabsTitles[k].classList.remove('active');
                    itemsContent[k].classList.remove('active');
                }
                this.classList.add('active');
                itemsContent[i].classList.add('active');
            }else{
                this.classList.toggle('active');
                this.nextElementSibling.classList.toggle('active');
            }

        })
        if (mobile) {
            document.querySelector('.tabs__titles').insertBefore(itemsContent[i], tabsTitles[i].nextElementSibling);
        }
    }

