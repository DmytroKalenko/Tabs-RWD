function setProparty() {
    let tabs = {
        ".title1": '.content1',
        ".title2": '.content2',
        ".title3": '.content3',
        ".title4": '.content4'
    }

    const productInfoItems = Object.keys(tabs);
    const productInfo__Content = Object.values(tabs)

    for (let i = 0; i < productInfoItems.length; i++) {
        document.querySelector(productInfo__Content[i]).classList.remove('Active');
        document.querySelector(productInfoItems[i]).addEventListener('click', function() {
            for (let k = 0; k < productInfoItems.length; k++) {
                document.querySelector(productInfoItems[k]).classList.remove('Active');
                document.querySelector(productInfo__Content[k]).style.display = 'none';
                document.querySelector(productInfo__Content[k]).classList.remove('ActiveContent');
                if (window.innerWidth <= 978) {
                    document.querySelector('.tabs__title').insertBefore(document.querySelector(productInfo__Content[i]), document.querySelector(productInfoItems[i]).nextElementSibling)
                }
            }
            this.classList.add('Active');
            document.querySelector(productInfo__Content[i]).style.display = 'block';
            document.querySelector(productInfo__Content[i]).classList.add('ActiveContent');
        })
    }
}

setProparty()