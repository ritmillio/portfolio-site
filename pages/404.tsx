import Link from 'next/link'

export default function Custom404() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[url('https://media1.giphy.com/media/dvD0OAETRfCXC/giphy.gif?cid=790b761177ca8cfe75c0f148b4335561ee26091e45613362&rid=giphy.gif&ct=g')] bg-center bg-no-repeat bg-cover">
            <div className='text-center flex flex-col items-center justify-center'>
                <h1 className='text-black text-5xl'>404</h1>
                <h5 className='uppercase text-black mt-4'>Page is not found</h5>
            </div>
            <Link href="/">
                <a className='text-black underline mt-4'>Home</a>
            </Link>
        </div>
    );
}