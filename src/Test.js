//import { useState, useEffect, createContext, useContext, useRef, useReducer } from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import { createContext } from 'react';
import { useContext } from 'react';

const kontekst = createContext(0);


function DrugoUnutra() {
    return (
        <>
        <p>Trece unutra</p>
        <p> {useContext(kontekst)}</p>
        </>
    )
}

function Unutra() {
    return (
        <>
        <h2>Unutra</h2>
        <p> {useContext(kontekst)}</p>
         <DrugoUnutra/> 
         
        </>
    );
}

export default function Test() {

    return (
        <>
        <h1>Test</h1>
        <p> {useContext(kontekst)+1}</p>
        <Unutra/>
        </>
    );

};

