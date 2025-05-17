const setSizeCookie = () => {

}

const setColorCookie = () => {
    
}
export const WCAG = (props) => (
<div className="container">
    <div className="site-divider px-3" style={{paddingTop: '0.7rem', paddingBottom: '0.7rem'}}>
        <div className="row">
            <div className="col-5 mb-2 mb-md-0"></div>
            <div className="col-2 mb-2 mb-md-0 text-center">
                <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                    <svg className="bi" width="80" height="64" role="img" aria-label="Bootstrap" style={{fill:'#163391'}}>
                        <use href="#bootstrap"></use>
                    </svg>
                </a>
            </div>
            <div className="col-5 mb-2 mb-md-0">
                <div className="page-options font-normal color-normal" aria-label="Zmiana wielkości czcionki:"
                    id="page-options">
                    <button className="font-normal" onClick={setSizeCookie('font-normal')} data-placement="right"
                        title="Zmień wielkość czcionki na normalną"
                        aria-label="Zmień wielkość czcionki na normalną">A</button>
                    <button className="font-bigger" onClick={setSizeCookie('font-bigger')} data-placement="right"
                        title="Zmień wielkość czcionki na większą"
                        aria-label="Zmień wielkość czcionki na większą">A</button>
                    <button className="font-biggest" onClick={setSizeCookie('font-biggest')} data-placement="right"
                        title="Zmień wielkość czcionki na dużą" aria-label="Zmień wielkość czcionki na dużą">A</button>
                    <button className="change-version contrast-one contrast-version"
                        onClick={setColorCookie('color-normal')} data-placement="right" title="kontrast domyślny"
                        aria-label="kontrast domyślny">A</button>
                    <button className="change-version contrast-two contrast-version"
                        onClick={setColorCookie('color-contrast')} data-placement="right" title="kontrast czarno-biały"
                        aria-label="kontrast czarno-biały">A</button>
                </div>
            </div>
        </div>
    </div>
</div>
)