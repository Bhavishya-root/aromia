import React, { Component } from 'react';
import cafe from '../img/cafe-img.jpg'
import gift from '../img/gift.png'
import phone from '../img/phone.png'
import whatsapp from '../img/whatsapp.png'
import { NavLink, Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>

                <section>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 mt-5">
                                <h1 className="text-center display-1 mb-3">Aromia <br /> Coffee & More.</h1>
                                <p className="section-sub-heading">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. "</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="my-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <img className="img-style img-fluid" src={cafe} />
                            </div>
                        </div>
                    </div>
                </section>



                <section className="my-5 py-5 icon-type-img">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 mb-5">
                                <div className="row align-items-center">
                                    <div className="me-2 circle-box bg-r-pink">
                                        <img src={gift} className=" img-fluid " />
                                    </div>
                                    <div className="col">
                                        <h6 className="feature-lines">60% Gross Margin On Most Products</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-5">
                                <div className="row align-items-center">
                                    <div className="me-2 circle-box bg-d-blue">
                                        <img src={gift} className=" img-fluid " />
                                    </div>
                                    <div className="col">
                                        <h6 className="feature-lines">60% Gross Margin On Most Products</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-5">
                                <div className="row align-items-center">
                                    <div className="me-2 circle-box bg-l-blue">
                                        <img src={gift} className=" img-fluid " />
                                    </div>
                                    <div className="col">
                                        <h6 className="feature-lines">60% Gross Margin On Most Products</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-5">
                                <div className="row align-items-center">
                                    <div className="me-2 circle-box bg-purple">
                                        <img src={gift} className=" img-fluid " />
                                    </div>
                                    <div className="col">
                                        <h6 className="feature-lines">60% Gross Margin On Most Products</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mb-5">
                                <div className="row align-items-center">
                                    <div className="me-2 circle-box bg-sky-blue">
                                        <img src={gift} className=" img-fluid " />
                                    </div>
                                    <div className="col">
                                        <h6 className="feature-lines">60% Gross Margin On Most Products</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-5">
                                <div className="row align-items-center">
                                    <div className="me-2 circle-box bg-l-orange">
                                        <img src={gift} className=" img-fluid " />
                                    </div>
                                    <div className="col">
                                        <h6 className="feature-lines">60% Gross Margin On Most Products</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-5">
                                <div className="row align-items-center">
                                    <div className="me-2 circle-box bg-pink">
                                        <img src={gift} className=" img-fluid " />
                                    </div>
                                    <div className="col">
                                        <h6 className="feature-lines">60% Gross Margin On Most Products</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 my-5">
                                <h1 className="text-center display-1">Our Store's.</h1>
                                <p className="section-sub-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua.Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="mb-5 pb-5">
                    <div className="container mb-5 pb-5">
                        <div className="row">
                            <div className="col-md-6 position-relative">
                                <img src={cafe} className="img-fluid store-img" />
                                <div className="our-stores text-center">
                                    <div className="p-3">
                                        <h3>
                                            Pozzallo
                                        </h3>
                                        <p>
                                            Carso Vittorio Veneto 109, Pozzallo ,Sicillia<br />
                                            ITALY 96018
                                        </p>
                                        <div className="pb-2">
                                            <span class="badge bg-r-pink me-2">Candy Store </span>
                                            <span class="badge bg-warning me-2">Cafe</span>
                                            <span class="badge bg-info">Shopping</span>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="col-6 store-bottom-contact tel">
                                            <span>
                                                <img src={phone} className="our-store-img" />
                                            </span>
                                            <span>+39 349 822 2086</span>
                                        </div>
                                        <div className="col-6 store-bottom-contact wht">
                                            <span>
                                                <img src={whatsapp} className="our-store-img" />
                                            </span>
                                            <span>+39 349 822 2086</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 position-relative">
                                <img src={cafe} className="img-fluid store-img" />
                                <div className="our-stores text-center">
                                    <div className="p-3">
                                        <h3>
                                            Pozzallo
                                        </h3>
                                        <p>
                                            Carso Vittorio Veneto 109, Pozzallo ,Sicillia<br />
                                            ITALY 96018
                                        </p>
                                        <div className="pb-2">
                                            <span class="badge bg-r-pink me-2">Candy Store </span>
                                            <span class="badge bg-warning me-2">Cafe</span>
                                            <span class="badge bg-info">Shopping</span>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="col-6 store-bottom-contact tel">
                                            <span>
                                                <img src={phone} className="our-store-img" />
                                            </span>
                                            <span>+39 349 822 2086</span>
                                        </div>
                                        <div className="col-6 store-bottom-contact wht">
                                            <span>
                                                <img src={whatsapp} className="our-store-img" />
                                            </span>
                                            <span>+39 349 822 2086</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className=" my-5 information-img-style">
                    <div className="container py-5 my-5">
                        <div className="row my-5 py-5">
                            <div className="col-md-3 px-4 text-center">
                                <div className="circle-box bg-l-orange mx-auto">
                                    <img src={gift} className=" img-fluid " />
                                </div>
                                <h4 className="text-center mt-3">Layout Project</h4>
                                <h6 style={{ fontSize: 14 }} className="text-center">consectetur adipiscing elit Sed non purse at eart emuismod</h6>
                            </div>
                            <div className="col-md-3 px-4 text-center">
                                <div className="circle-box bg-purple mx-auto">
                                    <img src={gift} className=" img-fluid " />
                                </div>
                                <h4 className="text-center mt-3">Logo & Furniture</h4>
                                <h6 style={{ fontSize: 14 }} className="text-center">consectetur adipiscing elit Sed non purse at eart emuismod</h6>
                            </div>
                            <div className="col-md-3 px-4 text-center">
                                <div className="circle-box bg-r-pink mx-auto">
                                    <img src={gift} className=" img-fluid " />
                                </div>
                                <h4 className="text-center mt-3">Branded Bags</h4>
                                <h6 style={{ fontSize: 14 }} className="text-center">consectetur adipiscing elit Sed non purse at eart emuismod</h6>
                            </div>
                            <div className="col-md-3 px-4 text-center">
                                <div className="circle-box bg-sky-blue mx-auto">
                                    <img src={gift} className=" img-fluid " />
                                </div>
                                <h4 className="text-center mt-3">Informatics Systems</h4>
                                <h6 style={{ fontSize: 14 }} className="text-center">consectetur adipiscing elit Sed non purse at eart emuismod</h6>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="my-5 py-5">
                    <div className="container pt-5">
                        <div className="row">
                            <div className="col-md-6 pe-5">
                                <div className="px-4 py-2">
                                    <h1 className="text-center display-1">Join The Family</h1>

                                    <p className="section-sub-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim veniam</p>
                                </div>

                                <ul className="join-section pe-4">
                                    <li><span className="li-number">1</span> APPLY & QUALIFY</li>
                                    <li><span className="li-number">2</span> LOCATION SEARCH</li>
                                    <li><span className="li-number">3</span> CONSTRUCTURE & DESIGN</li>
                                    <li><span className="li-number">4</span> TRAINING & DEVELOPMENT</li>
                                    <li><span className="li-number">5</span> PRE-OPENING & OPENING</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <img src={cafe} className="img-fluid join-family-img-style" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="my-5 py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2">
                                <img src="data:image/png;base64,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" />
                            </div>
                            <div className="col-md-2">
                                <img src="data:image/png;base64,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" />
                            </div>
                            <div className="col-md-2">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAAvCAMAAADuOqUiAAAAilBMVEX///8YLFTs7e8AGEoAFknw8fT09fcOJFDZ2t8AH00ABkMAAEIFG0sVKlPT1NsAA0IADkUAADwAACwAADUNJlApNlvMztUAEkeVmacAADmztsCKkKC+wMlHUG1xeY19g5VPWHNtcog8SWiqrbhjaoDj5ek0QWIAACWgo7BaYnsAAA4AADEAAB8AAADgmv+HAAAFVUlEQVRYhe1Y2ZaqOhAtAjKDoAwKiChi67Hv///eraQyaZ91eq1+8KnrAZOQ1E7NhQA/oaF1FLXDjzj8jPpI40b9G3EPlcatDm/ELTKNmxXvgw0Lx1ARvg13di1cd34b7ikg04pncHobbiDMG4wCPgt+zshfCfLtiSCc6oEesVgImuT0G7PvASyWvrV8KDykkix1iT1F2xzCrRig89xKPtowlTVSWKvMcUtSTV4NV89MkxsXJWkVy6K2cBMnQ5KeWVeZJGeNuPydk+Cre8DXapU1qrsMY8wcjeXgwQQnk1actuO4UaZ5lkZg5C0YiAlbm0Mx4oopx80y6UVnBXekC5xhVZoz0RFu6RMLjmvFXaNxKS6qSUys3PuEuwiZ0lllDW+AzlWZIzOJJNo9ib9mL7jpTuOSY8oFqcUvuJ0n2OSQE9dkke+cIoe7SZwYz9LxiIVvcMWm4K5x6bZSARN/m5HpbFxSagJKiyXu3ZMEN+jbIKDocgosUFkUBHSTTLgR4VbEtFWwTFgna8ngKbFyX3HPmbTFJSAmuPdMgXyB5jSOoyNma3SFHmekAiobhBvtxM96kbhk0epq+ZhLsWnh+uI+vOpVgj26D0gdZBXxoYnHbK6kVcL1GvrpJC5ZVDCSPlZdV+sXXLoIxir5l+Py0+RYTiwk8BO6hG87K3El3CIUOpBAqpq2nfGxqH/FXciqa501qvt4krqUPceyNgZF2kndWri5YCIVC0DBV5Dar5XwDfaKK6zKmR5lTFSB8h0pQRMbg3IBIq0WjUsFdE8bSIMyvfviEpH/Im8c1iprXE3IKMqulkFVeSJdFIONS04rA4c0iE4pLl0IsYb52Z/bQbo5+G32FdfzjUFVv0XWS0Lbn4crPywTBVVTWb7JKlkrHUbhpuR7mDXsXKRJSEBH05vEFQpy4pXBdaJWxZ1wf4qLfp7nAZO/zU/jVhSpsc4ajkrzjgYjw7szY9xTfBluC2PsKU8ieSZr4A7XXe9kcH7BpZTAs8Zd5SEi2i4koHzipEmyRWdaSb3EOH3FFZlj8Iy6clY+bTC4dLVeaccpmeWGThaB3dxy/14SfQyTTqR0RPJ2YOKC60gm/6oKXuoCkckapCptRRGEtVYVVkbbD9yZcDOlHxF3Ji4woMUlsKL7dN0XXBSSLqZqpm7xuARmI89ZnVEjwgjctpHuITJHab8/8F6DewnmDd1v6Hs5XDvCnXS07FKaH7nKdVOBteGW6ll18IV1uNeTGrCW5UmgKO5g7yLt8f2yFSPELfX7FFNC3fJ1t1S5fSjFvK2xEXM1YafWJ9aUpfx80vAkzkcoD/iGUExBws3VyP/LBmZaSLPALPJhZU9BHQdr9Eu/9Eu/9HNa8jzHvsQfeFO0DLyJCBlgqfH5kHXqi6rBhTwXa7RFPlaKUY4JqeEdTtjx0TAs8C+6VUl2gKWcnJr3g1d8nmeYL7B8+DA87gk1KOwPhJGXYoMe8oUz75BqflXZwi7Fg8Gpjm7QbCcXK955+u7PNf71dsHqmN3gOEIZwtRBt70w/GgNOmAb/lEJqw0+jry1OT1QnInXiDNyHjbyL5YwZnBudkfoT5A1cO3/LS4SfuTBAfnc8ePWOUyCaXeYrtgw7vFV3GncEZtCFnW9hXse5AeLj4V6TrHchuvLY4Fdr8vXv3D7M1bBAcbjeCTcCS4o72FEgdgT7rGM9wY3f3jbQePuwxnVvlxHnML43Z+JD66R++cHMj3t/E0j7Itdy8kHVn/uB2CZsC+u9OD/t8JdMG3+jNy+B7RnAB0H+mDQf2y4Ybg1tp/16hvc7+k7D2HN17W/lNv/ARqUZMezNTmwAAAAAElFTkSuQmCC" />
                            </div>
                            <div className="col-md-2">
                                <img src="data:image/png;base64,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" />
                            </div>
                            <div className="col-md-2">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAAvCAMAAADuOqUiAAAAilBMVEX///8YLFTs7e8AGEoAFknw8fT09fcOJFDZ2t8AH00ABkMAAEIFG0sVKlPT1NsAA0IADkUAADwAACwAADUNJlApNlvMztUAEkeVmacAADmztsCKkKC+wMlHUG1xeY19g5VPWHNtcog8SWiqrbhjaoDj5ek0QWIAACWgo7BaYnsAAA4AADEAAB8AAADgmv+HAAAFVUlEQVRYhe1Y2ZaqOhAtAjKDoAwKiChi67Hv///eraQyaZ91eq1+8KnrAZOQ1E7NhQA/oaF1FLXDjzj8jPpI40b9G3EPlcatDm/ELTKNmxXvgw0Lx1ARvg13di1cd34b7ikg04pncHobbiDMG4wCPgt+zshfCfLtiSCc6oEesVgImuT0G7PvASyWvrV8KDykkix1iT1F2xzCrRig89xKPtowlTVSWKvMcUtSTV4NV89MkxsXJWkVy6K2cBMnQ5KeWVeZJGeNuPydk+Cre8DXapU1qrsMY8wcjeXgwQQnk1actuO4UaZ5lkZg5C0YiAlbm0Mx4oopx80y6UVnBXekC5xhVZoz0RFu6RMLjmvFXaNxKS6qSUys3PuEuwiZ0lllDW+AzlWZIzOJJNo9ib9mL7jpTuOSY8oFqcUvuJ0n2OSQE9dkke+cIoe7SZwYz9LxiIVvcMWm4K5x6bZSARN/m5HpbFxSagJKiyXu3ZMEN+jbIKDocgosUFkUBHSTTLgR4VbEtFWwTFgna8ngKbFyX3HPmbTFJSAmuPdMgXyB5jSOoyNma3SFHmekAiobhBvtxM96kbhk0epq+ZhLsWnh+uI+vOpVgj26D0gdZBXxoYnHbK6kVcL1GvrpJC5ZVDCSPlZdV+sXXLoIxir5l+Py0+RYTiwk8BO6hG87K3El3CIUOpBAqpq2nfGxqH/FXciqa501qvt4krqUPceyNgZF2kndWri5YCIVC0DBV5Dar5XwDfaKK6zKmR5lTFSB8h0pQRMbg3IBIq0WjUsFdE8bSIMyvfviEpH/Im8c1iprXE3IKMqulkFVeSJdFIONS04rA4c0iE4pLl0IsYb52Z/bQbo5+G32FdfzjUFVv0XWS0Lbn4crPywTBVVTWb7JKlkrHUbhpuR7mDXsXKRJSEBH05vEFQpy4pXBdaJWxZ1wf4qLfp7nAZO/zU/jVhSpsc4ajkrzjgYjw7szY9xTfBluC2PsKU8ieSZr4A7XXe9kcH7BpZTAs8Zd5SEi2i4koHzipEmyRWdaSb3EOH3FFZlj8Iy6clY+bTC4dLVeaccpmeWGThaB3dxy/14SfQyTTqR0RPJ2YOKC60gm/6oKXuoCkckapCptRRGEtVYVVkbbD9yZcDOlHxF3Ji4woMUlsKL7dN0XXBSSLqZqpm7xuARmI89ZnVEjwgjctpHuITJHab8/8F6DewnmDd1v6Hs5XDvCnXS07FKaH7nKdVOBteGW6ll18IV1uNeTGrCW5UmgKO5g7yLt8f2yFSPELfX7FFNC3fJ1t1S5fSjFvK2xEXM1YafWJ9aUpfx80vAkzkcoD/iGUExBws3VyP/LBmZaSLPALPJhZU9BHQdr9Eu/9Eu/9HNa8jzHvsQfeFO0DLyJCBlgqfH5kHXqi6rBhTwXa7RFPlaKUY4JqeEdTtjx0TAs8C+6VUl2gKWcnJr3g1d8nmeYL7B8+DA87gk1KOwPhJGXYoMe8oUz75BqflXZwi7Fg8Gpjm7QbCcXK955+u7PNf71dsHqmN3gOEIZwtRBt70w/GgNOmAb/lEJqw0+jry1OT1QnInXiDNyHjbyL5YwZnBudkfoT5A1cO3/LS4SfuTBAfnc8ePWOUyCaXeYrtgw7vFV3GncEZtCFnW9hXse5AeLj4V6TrHchuvLY4Fdr8vXv3D7M1bBAcbjeCTcCS4o72FEgdgT7rGM9wY3f3jbQePuwxnVvlxHnML43Z+JD66R++cHMj3t/E0j7Itdy8kHVn/uB2CZsC+u9OD/t8JdMG3+jNy+B7RnAB0H+mDQf2y4Ybg1tp/16hvc7+k7D2HN17W/lNv/ARqUZMezNTmwAAAAAElFTkSuQmCC" />
                            </div>
                            <div className="col-md-2">
                                <img src="data:image/png;base64,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" />
                            </div>
                        </div>
                    </div>
                </section>


                <section className="mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 fg-main">
                                <div className="fg-sec">
                                    <img src={cafe} className="img-fluid rounded-3" />
                                </div>
                            </div>
                            <div className="col-md-3 fg-main">
                                <div className="fg-sec">
                                    <img src={cafe} className="img-fluid rounded-3" />
                                </div>
                            </div>
                            <div className="col-md-3 fg-main">
                                <div className="fg-sec">
                                    <img src={cafe} className="img-fluid rounded-3" />
                                </div>
                            </div>
                            <div className="col-md-3 fg-main">
                                <div className="fg-sec">
                                    <img src={cafe} className="img-fluid rounded-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="my-5 py-5">
                    <div className="container pt-5">
                        <div className="row text-center">
                            <div className="col-md-6">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="col-md-6">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-5 py-5 contact-section">
                    <div className="container py-5">
                        <div className="row justify-content-center mb-5">
                            <div className="col-6">
                                <h1 className="text-center display-1">Contact Us</h1>
                                <p className="section-sub-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua.Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-8">
                                <div class="row g-3">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                                    </div>
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                                    </div>
                                </div>

                                <div class="row g-3 mt-4">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Email Address" aria-label="Email Address" />
                                    </div>
                                </div>

                                <div class="row g-3 mt-4">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Message" aria-label="Message" />
                                    </div>
                                </div>
                                <div class="d-grid gap-1 col-2 mx-auto mt-3">
                                    <button class="btn btn-submit" type="button">SUBMIT</button>

                                </div>

                            </div>
                        </div>

                    </div>
                </section>

                <section className="my-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="mb-0" style={{ fontSize: '12px' }}>2020 Aromia Coffee & More all Rights Resvered</p>
                            </div>
                            <div className="col-md-6">
                                <ul className="nav justify-content-end">
                                    <li className="nav-item px-3">
                                        <Link style={{ textDecoration: 'none', color: 'black', fontSize: '12px' }}>Facebook</Link>
                                    </li>
                                    <li className="nav-item px-3">
                                        <Link style={{ textDecoration: 'none', color: 'black', fontSize: '12px' }}>Instagram</Link>
                                    </li>
                                    <li className="nav-item px-3">
                                        <Link style={{ textDecoration: 'none', color: 'black', fontSize: '12px' }}>Twitter</Link>
                                    </li>
                                    <li className="nav-item px-3">
                                        <Link style={{ textDecoration: 'none', color: 'black', fontSize: '12px' }}>Youtube</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Home;