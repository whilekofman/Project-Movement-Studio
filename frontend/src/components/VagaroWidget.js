import { useEffect, useRef } from 'react'

const VagaroWidget = () => {
    const widgetRef = useRef(null);

    useEffect(() => {
        const scriptSrc = "https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqoEJ0uD3KcT3qmV35y6RuRFXoSlXYO61Cq7fYO61WO4pUUeJUtjP0dDxkJEvwRapWUgZawifCs7fYJEPwMc8?v=JFhzcm3kDWeBwDvr4MkQciO4DEInhvZHeOb2XEkx7pW#";
        let existingScript = document.querySelector(`script[src="${scriptSrc}"]`);
        const script = document.createElement('script');
        
        if (!existingScript) {
            script.src = scriptSrc;
            script.async = true;

            widgetRef.current.appendChild(script);
        };

        return () => {
            widgetRef.current.removeChild(script);
        };
    }, []);
    
    
    return (
        <div>
            <div id='frameTitle' className='embedded-widget-title'>Book Now</div>
            <div class="vagaro" id='widget' ref={widgetRef} style={{height: '5000px'}}>
                <a href="https://www.vagaro.com/pro/">Powered by Vagaro</a>&nbsp;
                <a href="https://www.vagaro.com/pro/salon-software">Salon Software</a>,&nbsp;
                <a href="https://www.vagaro.com/pro/spa-software">Spa Software</a>&nbsp;&amp;&nbsp;
                <a href="https://www.vagaro.com/pro/fitness-software">Fitness Software</a>
            </div>
        </div>
    );
};

export default VagaroWidget;