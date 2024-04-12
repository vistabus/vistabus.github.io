'use client'
import React, { useState, useEffect} from 'react';
import Dexie from 'dexie';
import { useLiveQuery } from 'dexie-react-hooks'
import * as Switch from '@radix-ui/react-switch';

export const db = new Dexie('myDatabase');
db.version(1).stores({swipe:'key'});

export default function Home() {
  const swipe = useLiveQuery(() => db.swipe.toArray());//output

  function resetDatabase() {
    Dexie.delete('myDatabase');
    };
    async function One(count) {
      try{const id = await db.swipe.put({key:'1',value:count});
    }catch(err){console.log(err)}
    }
  return (
    <>
      <button onClick={()=>resetDatabase()}>Clear Cache</button>
      <br></br>
      <label htmlFor="s1">Dark Mode</label>
      <Switch.Root className="SR" id="s1"><Switch.Thumb className="ST"/></Switch.Root>
      <br></br>
      <label htmlFor="s2">Show other Weekdays</label>
      <Switch.Root className="SR" id="s2"><Switch.Thumb className="ST"/></Switch.Root>
    </>
  );
}
