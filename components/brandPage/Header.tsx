
import { useWeb3AuthContext } from 'context/SocialLoginContext';
import { shortenAddress } from 'libs/helpers';
import Image from 'next/image';
// import { Chat } from "@pushprotocol/uiweb";
import logo from '../../public/assets/starbucks-logo.png';

const Header = () => {
	const { connect, address, loading: eoaWalletLoading } = useWeb3AuthContext();

	return (
    <div className="navbar h-16 m-1">
      <div className="navbar-links">
        <div className="navbar-links-logo">
        <Image className='z-50 p-1' src={logo} alt="header-logo" width={70} height={70} />
          {/* <img src="/assets/starbucks-logo.png" alt="header-logo" /> */}
        </div>
        <div className="navbar-links-container space-x-5">
          {address ? (
            <>
              <button className="bg-gray-100 px-5 py-2 rounded text-gray-600">
                {shortenAddress(address)}
              </button>

              {/* <WorldIDWidget
                actionId="wid_BPZsRJANxct2cZxVRyh80SFG" // obtain this from developer.worldcoin.org
                signal="my_signal"
                enableTelemetry
                onSuccess={(verificationResponse) =>
                  console.log(verificationResponse)
                }
                onError={(error) => console.error(error)}
                debug={true} // to aid with debugging, remove in production
              /> */}
            </>
          ) : (
            <button
              className="nav-btn"
              onClick={connect}
              disabled={eoaWalletLoading}
            >
              Login
            </button>
          )}
        </div>
      </div>
{/* <div>
<Chat
   account="0x6430C47973FA053fc8F055e7935EC6C2271D5174" //user address
   supportAddress="0xd9c1CCAcD4B8a745e191b62BA3fcaD87229CB26d" //support address
   apiKey="jVPMCRom1B.iDRMswdehJG7NpHDiECIHwYMMv6k2KzkPJscFIDyW8TtSnk4blYnGa8DIkfuacU0"
    env="staging"
 />
</div> */}
    </div>
  );
};

export default Header;
