import {Link} from 'react-router-dom'

const Footer = () => {
	return (
		<footer className='bg-[#1f1f1f] text-white pt-10 pb-8 border-t border-gray-800'>
			<div className='max-w-7x1 mx-auto-px-6'>
				<div className='grid grid-cols-12 gap-x-8 gap-y-10'>
					
					<div className='col-span-12 md:col-span-5'>
						<div className='flex items-center gap-4'>
							<img 
								src="/src/assets/AveronLogo.png" 
								alt="Sokken Lokken Logo" 
								className='h-12 w-auto'
							/>
							<div className='leading-none'>
								<div className='font-bold text4x1 tracking-tighter' style={{fontFamily: "'Montserrat Subrayada', sans-serif"}}>
									SOKKEN
								</div>
								<div className='font-bold text4x1 tracking-tighter -mt-1' style={{fontFamily: "'Montserrat Subrayada', sans-serif"}}>
									LOKKEN
								</div>
							</div>
						</div>

						<p className='text-gray-400 text-sm mt-6'>
							Какая-то фраза.
						</p>
					</div>

					<div className='col-span-6 md:col-span-2'>
						<h3 className='text-white font-semibold mb-5 text-base'>Categories</h3>
						<ul className='space-y-3 text-gray-400 text-sm'>
							<li><Link to='/catalog/men' className='hover:text-white transition-colors'>Man's</Link></li>
							<li><Link to='/catalog/women' className='hover:text-white transition-colors'>Woman's</Link></li>
							<li><Link to='/catalog/kids' className='hover:text-white transition-colors'>Kid's</Link></li>
							<li><Link to='/catalog/new' className='hover:text-white transition-colors'>Our new socks</Link></li>
						</ul>
					</div>

					<div className='col-span-6 md:col-span-2'>
						<h3 className='text-white font-semibold mb-5 text-base'>Service</h3>
						<ul className='space-y-3 text-gray-400 text-sm'>
							<li><Link to='/about' className='hover:text-white transition-colors'>Our shop</Link></li>
							<li><Link to='/about' className='hover:text-white transition-colors'>Payment methods</Link></li>
							<li><Link to='/about' className='hover:text-white transition-colors'>Shipping & return</Link></li>
							<li><Link to='/about' className='hover:text-white transition-colors'>General terms & conditions</Link></li>
						</ul>
					</div>

					<div className="col-span-12 md:col-span-3">
            <h3 className="text-white font-semibold mb-5 text-base">Contact</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-400">Phone:</p>
                <p className="text-white">+123456789</p>
              </div>
              <div>
                <p className="text-gray-400">Email:</p>
                <p className="text-white">sokkenlokken@gmail.com</p>
              </div>
            </div>
          </div>
				</div>
			</div>

			<div className='border-t border-gray-800 mt-12 pt-6'>
				<div className='max-w-7x1 mx-auto px-6 text-center text-xs text-gray-500'>
					&copy; 2026 SOKKEN LOKKEN. rights reserved.
				</div>
			</div>
		</footer>
	)
}

export default Footer