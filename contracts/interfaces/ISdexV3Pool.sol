// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.5.0;

import './pool/ISdexV3PoolImmutables.sol';
import './pool/ISdexV3PoolState.sol';
import './pool/ISdexV3PoolDerivedState.sol';
import './pool/ISdexV3PoolActions.sol';
import './pool/ISdexV3PoolOwnerActions.sol';
import './pool/ISdexV3PoolEvents.sol';

/// @title The interface for a Sdex V3 Pool
/// @notice A Sdex pool facilitates swapping and automated market making between any two assets that strictly conform
/// to the ERC20 specification
/// @dev The pool interface is broken up into many smaller pieces
interface ISdexV3Pool is
    ISdexV3PoolImmutables,
    ISdexV3PoolState,
    ISdexV3PoolDerivedState,
    ISdexV3PoolActions,
    ISdexV3PoolOwnerActions,
    ISdexV3PoolEvents
{

}
