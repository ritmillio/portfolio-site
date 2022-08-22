import Link from 'next/link'

export default function Custom500() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[url('https://media1.giphy.com/media/dvD0OAETRfCXC/giphy.gif?cid=790b761177ca8cfe75c0f148b4335561ee26091e45613362&rid=giphy.gif&ct=g')] bg-center bg-no-repeat bg-cover">
            <div className='text-center flex flex-col items-center justify-center'>
                <h1 className='text-black text-5xl'>500</h1>
                <h5 className='uppercase text-black mt-4'>Server encountered an unexpected condition that prevented it from fulfilling the request</h5>
            </div>
            <Link href="/">
                <a className='text-black underline mt-4'>Home</a>
            </Link>
        </div>
    );
}