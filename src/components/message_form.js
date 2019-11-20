import React from 'react'

export default ({user, onSubmit, onChange, editMsg}) => (
  <div className='form message-form'>
    <form onSubmit={onSubmit}>
      <p>
        <input type='text' name='title'
          defaultValue={editMsg.title}
          onChange={onChange}/>
      </p>
      <p>
        <textarea name='text' rows='10' cols='30'
          defaultValue={editMsg.text}
          onChange={onChange} />
      </p>
      <p>
        <input type='submit' value='Save' />
      </p>
    </form>
  </div>
)
