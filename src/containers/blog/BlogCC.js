import React from 'react'
import css from './blogcc.module.css'
import { Article } from '../../components'
import {blog01,blog02,blog03,blog04,blog05} from './import'

const BlogCC = () => {
  return (
    <div className={`${css.blog} section__padding`} id='blog'>
      <div className={`${css.blog_heading}`}>
        <h1 className='gradient__text' >
        A lot is happening, We are blogging about it.
        </h1>
      </div>

      <div className={`${css.blog_container}`}>
        <div className={`${css.blog_container_groupA}`}>
            <Article imgurl={blog01}  date={'Sep 26, 2021'} title={'GPT-3 and Open AI is the future. Let us exlore how it is?'}/>
        </div>

        <div className={`${css.blog_container_groupB}`}>
        <Article imgurl={blog02} date={'Sep 26, 2021'} title={'GPT-3 and Open AI is the future. Let us exlore how it is?'}/>

        <Article imgurl={blog03} date={'Sep 26, 2021'} title={'GPT-3 and Open AI is the future. Let us exlore how it is?'}/>

        <Article imgurl={blog04} date={'Sep 26, 2021'} title={'GPT-3 and Open AI is the future. Let us exlore how it is?'}/>

        <Article imgurl={blog05} date={'Sep 26, 2021'} title={'GPT-3 and Open AI is the future. Let us exlore how it is?'}/>
          </div>
      </div>
    </div>
  )
}

export default BlogCC