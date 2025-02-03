import  React from 'react';
import {render,screen} from "@testting-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "../landing_page/home/Hero";

// TEst Suite
describe("Hero Component",()=>{
    test("render hero image",()=>{
        render(<Hero />);
        const heroImage= screen.getByAltText("Hero Image");
        expect(heroimage).toBeInTheDocument();
        expect(heroImage).tohaveAttribute("src","media/images/homeHero.png");
    })
});