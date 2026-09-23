import AboutUs from "../../homelayout/About";
import Banner from "../../homelayout/Banner";
import BlogSection from "../../homelayout/BlogSection";
import Choose from "../../homelayout/Choose";
import InsuranePlaneSection from "../../homelayout/InsurancePlaneSection";
import Partners from "../../homelayout/Partners";
import Process from "../../homelayout/Process";
import TestimonialSection from "../../homelayout/TestimonialSection";
import Ctabanner from "../../shared/CtaBanner";

export default function HomeSection(){
    return(
        <>
        <Banner/>
        <AboutUs/>
        <InsuranePlaneSection/>
        <Process/>
        <Choose/>
        <TestimonialSection/>
        <Ctabanner/>
        <Partners/>
        <BlogSection limit={3}/>
        </>
    )
}