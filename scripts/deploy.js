async function main() {

    // const [deployer] = await ethers.getSigners();

    // const [owner, signer2, deployer] = await ethers.getSigners();


    // console.log(
    //     "Deploying contracts with the account:",
    //     deployer.address
    // );

    

    // console.log("Account balance:", (await deployer.getBalance()).toString());

    // const SdexV3Factory = await ethers.getContractFactory('SdexV3Factory');
    // const sdexV3Factory = await SdexV3Factory.deploy();

    // const provider = waffle.provider;
    // const SdexV3Factory = await ethers.getContractFactory('SdexV3Factory', owner);
    // const sdexV3Factory = await SdexV3Factory.deploy();
    // const _sdexV3Factory = sdexV3Factory.address;

    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const sdexV3Factory = await deployments.deploy('SdexV3Factory', {
        from: deployer.address,
        gasLimit: 30000000,
        nonce: 165
    });
    console.log("SdexV3Factory address:", sdexV3Factory.address);
    

    // const _factory = sdexV3Factory.address;
    // const _weth9 = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
    // const _nativeCurrencyLabelBytes = 'WETH';
    

    // const Quoter = await ethers.getContractFactory('Quoter');
    // const quoter = await Quoter.deploy(_factory, _weth9);

    // const SwapRouter = await ethers.getContractFactory("SwapRouter");
    // const swapRouter = await SwapRouter.deploy(_factory, _weth9);

    // const TickLens = await ethers.getContractFactory("TickLens");
    // const tickLens = await TickLens.deploy();

    // const NFTDescriptor = await ethers.getContractFactory("NFTDescriptor");
    // const nFTDescriptor = await NFTDescriptor.deploy();
    // const factoryOptions = {
    //     libraries: {
    //         NFTDescriptor: nFTDescriptor.address,
    //     },
    // };
    // const NonfungibleTokenPositionDescriptor = await ethers.getContractFactory("NonfungibleTokenPositionDescriptor", factoryOptions);
    // const nonfungibleTokenPositionDescriptor = await NonfungibleTokenPositionDescriptor.deploy(_weth9, ethers.utils.formatBytes32String(_nativeCurrencyLabelBytes));

    // const NonfungiblePositionManager = await ethers.getContractFactory("NonfungiblePositionManager");
    // const nonfungiblePositionManager = await NonfungiblePositionManager.deploy(_factory, _weth9, nonfungibleTokenPositionDescriptor.address);

    // const V3Migrator = await ethers.getContractFactory("V3Migrator");
    // const v3Migrator = await V3Migrator.deploy(_factory, _weth9, nonfungiblePositionManager.address);

    // const QuoterV2 = await ethers.getContractFactory("QuoterV2");
    // const quoterV2 = await QuoterV2.deploy(_factory, _weth9);

    console.log('------------------------------------------------------------------------------------------------');
    console.log("SdexV3Factory address:", sdexV3Factory.address);
    // console.log("Quoter address:", quoter.address);
    // console.log("SwapRouter address:", swapRouter.address);
    // console.log("TickLens address:", tickLens.address);
    // console.log("NFTDescriptor address:", nFTDescriptor.address);
    // console.log("NonfungibleTokenPositionDescriptor address:", nonfungibleTokenPositionDescriptor.address);
    // console.log("NonfungiblePositionManager address:", nonfungiblePositionManager.address);
    // console.log("V3Migrator address:", v3Migrator.address);
    // console.log("QuoterV2 address:", quoterV2.address);
    // console.log('------------------------------------------------------------------------------------------------');
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });