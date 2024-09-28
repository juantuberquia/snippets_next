import { db } from '../app/db/index';

interface listSnippet {
  id: number,
  title: string,
  code: string
}

const FetchData = async () => {

  let snippes: listSnippet[] = await db.snippet.findMany()



  return (
    <div className='mt-5'>
      {
        snippes.map(({ id, title, code }) => (
          <div key={id} className='flex justify-between gap-x-1 max-w-96 '>
            <span>{title}</span>
            <span >{code}</span>
          </div>
        ))
      }
    </div>
  )
}

export default FetchData