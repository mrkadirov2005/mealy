import store, { persistedStore } from '@/reducers/store';
import React from 'react'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// "use client"
	return (
  
        <>
        <div>layout</div>
        {children}
        </>
        
  )
}
