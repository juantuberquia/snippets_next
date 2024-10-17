import Link from 'next/link';
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
      <table>
        <thead>
          <tr className='bg-gray-100'>
            <th className='px-4 py-2 w-28 border text-center'>Name</th>
            <th className='px-4 py-2  w-60 border text-center'>Code</th>
          </tr>
        </thead>
      </table>
      <tbody className=' justify-between gap-x-1 max-w-96 '>
        {
          snippes.map(({ id, title, code }) => (
            <div key={id} className='flex'>
              <tr className='bg-white border w-28'>
                <td className='px-4 py-2'>
                  <Link href={"/snippets/" + id}>
                    {title}
                  </Link>
                </td>
              </tr>
              <tr className='bg-white border w-60'>
                <td className='px-4 py-2'>
                  <Link href={"/snippets/" + id}>{code}</Link>
                </td>
              </tr>
            </div>
          ))
        }
      </tbody>
    </div>
  )
}

export default FetchData