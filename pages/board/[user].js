import React from 'react'

export default function Board({ user }) {
  // console.log(req.query);
  return (
    <div>
      Board
      <h1>
        { user }
      </h1>
    </div>

  )
}

export async function getServerSideProps({ params }){
  const user = params.user;
  return {props: {user}}
}

