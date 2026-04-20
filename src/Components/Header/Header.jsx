import Profile from '../../assets/image/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-5 border-b-1'>
            
                <h2 className="text-4xl font-bold p-5">Knowledge Cafe</h2>
               <img src={Profile} alt="" />
            
        </header>
    );
};

export default Header;