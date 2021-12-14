import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from '../redux/blockchain/blockchainActions';
import { fetchData } from '../redux/data/dataActions';
import gifImage from '../assets/images/gif-2.gif';
const Mint = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: '',
    SCAN_LINK: '',
    NETWORK: {
      NAME: '',
      SYMBOL: '',
      ID: 0,
    },
    NFT_NAME: '',
    SYMBOL: '',
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: '',
    MARKETPLACE_LINK: '',
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log('Cost: ', totalCostWei);
    console.log('Gas limit: ', totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(CONFIG.CONTRACT_ADDRESS, mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once('error', (err) => {
        console.log(err);
        setFeedback('Sorry, something went wrong please try again later.');
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== '' && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch('/config/config.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [blockchain.account]);

  useEffect(() => {
    dispatch(connect());
    getData();
    // eslint-disable-next-line
  }, [dispatch]);
  return (
    <>
      <section className='mint bg-secondary' id='mint'>
        <div className='pt-12 2xl:px-72 mx-auto md:px-12'>
          <div
            className='mint__wrapper px-4 md:grid md:items-center md:grid-cols-2 md:gap-14'
            data-aos='fade-right'
            data-aos-duration='1000'
          >
            <div className='mint__left bg-default p-7'>
              <h1 className='uppercase font-black font-heading text-4xl text-white'>
                Mint
              </h1>
              <div className='count font-bold font-heading text-2xl text-btn py-6'>
                {data.totalSupply} / {CONFIG.MAX_SUPPLY}
              </div>
              <p className='leading-5 text-base text-white'>
                Connect your wallet in order to purchase.
              </p>

              {/* mint start */}
              {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                <>
                  <p className='font-bold text-default'>The sale has ended.</p>
                  <p className='font-bold text-default'>
                    You can still find {CONFIG.NFT_NAME} on
                  </p>

                  <a
                    target='_blank'
                    rel='noreferrer'
                    href={CONFIG.MARKETPLACE_LINK}
                  >
                    {CONFIG.MARKETPLACE}
                  </a>
                </>
              ) : (
                <>
                  {blockchain.account === '' ||
                  blockchain.smartContract === null ? (
                    <>
                      {blockchain.errorMsg !== '' ? (
                        <>
                          <p className='err__msg text-left text-white py-4'>
                            {blockchain.errorMsg}
                          </p>
                        </>
                      ) : null}
                    </>
                  ) : (
                    <>
                      <p className='err__msg text-left text-white py-4'>
                        {feedback}
                      </p>
                      <>
                        <div className='amount__wrapper flex items-center gap-8 my-5 w-32'>
                          <h1
                            className='minus bg-white px-2 rounded-sm text-xl cursor-pointer hover:bg-btn hover:text-white'
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              decrementMintAmount();
                            }}
                          >
                            -
                          </h1>
                          <h1 className='counter text-white font-bold text-2xl'>
                            {mintAmount}
                          </h1>
                          <h1
                            className='plus bg-white px-2 rounded-sm text-lg cursor-pointer hover:bg-btn hover:text-white'
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              incrementMintAmount();
                            }}
                          >
                            +
                          </h1>
                        </div>
                      </>
                      <>
                        <div>
                          <div className='mint__btn__wrapper'>
                            <div className='bg- uppercase rounded-sm font-medium text-white text-center text-base w-32 py-3 bg-btn'>
                              <button
                                href='#'
                                disabled={claimingNft ? 1 : 0}
                                onClick={(e) => {
                                  e.preventDefault();
                                  claimNFTs();
                                  getData();
                                }}
                              >
                                {claimingNft ? 'BUSY' : 'MINT'}
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    </>
                  )}
                </>
              )}

              {/* mint end */}
            </div>
            <div className='mint__right'>
              <img src={gifImage} alt={gifImage} className='w-max-100' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mint;
