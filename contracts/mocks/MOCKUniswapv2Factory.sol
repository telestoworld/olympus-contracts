
contract MockUniswapV2Factory {
    mapping(address => mapping(address => address)) public getPair;
    event PairCreated(address indexed token0, address indexed token1, address pair, uint);

    function createPair(address tokenA, address tokenB) external returns (address pair) {
        address test = tokenB;
        return test;
    }
}