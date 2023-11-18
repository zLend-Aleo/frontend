export const AuctionProgramId = 'undefined';

export const AuctionProgram =`import zkid_nft_001.aleo;
import credits.aleo;
program zkid_auction_001.aleo;





record Bid:
    owner as address.private;
    bidder as address.private;
    amount as u64.private;
    loan_id as u128.private;
    is_winner as boolean.private;
    is_paid as boolean.private;


mapping paid:
	key as u128.public;
	value as boolean.public;

function place_bid:
    input r0 as u64.private;
    input r1 as u128.private;
    cast aleo1fjmx66zrmfxx288udrw93re4x9xvxkuszwuegmf78prt3shc2yrscf6shw self.caller r0 r1 false false into r2 as Bid.record;
    output r2 as Bid.record;


function resolve:
    input r0 as Bid.record;
    input r1 as Bid.record;
    assert.eq self.caller aleo1fjmx66zrmfxx288udrw93re4x9xvxkuszwuegmf78prt3shc2yrscf6shw;
    gte r0.amount r1.amount into r2;
    ternary r2 r0.owner r1.owner into r3;
    ternary r2 r0.bidder r1.bidder into r4;
    ternary r2 r0.amount r1.amount into r5;
    ternary r2 r0.loan_id r1.loan_id into r6;
    ternary r2 r0.is_winner r1.is_winner into r7;
    ternary r2 r0.is_paid r1.is_paid into r8;
    cast r3 r4 r5 r6 r7 r8 into r9 as Bid.record;
    output r9 as Bid.record;


function finish:
    input r0 as Bid.record;
    assert.eq self.caller aleo1fjmx66zrmfxx288udrw93re4x9xvxkuszwuegmf78prt3shc2yrscf6shw;
    cast r0.bidder r0.bidder r0.amount r0.loan_id true false into r1 as Bid.record;
    output r1 as Bid.record;


function pay_bid:
    input r0 as Bid.record;
    input r1 as credits.aleo/credits.record;
    call credits.aleo/transfer_private r1 aleo1fjmx66zrmfxx288udrw93re4x9xvxkuszwuegmf78prt3shc2yrscf6shw r0.amount into r2 r3;
    cast r0.bidder r0.bidder r0.amount r0.loan_id true true into r4 as Bid.record;
    output r4 as Bid.record;


function send_zkid:
    input r0 as zkid_nft_001.aleo/NFT.record;
    input r1 as Bid.record;
    assert.eq r1.is_paid true;
    call zkid_nft_001.aleo/zkid_transfer_private r0 r1.bidder into r2;
    output r2 as zkid_nft_001.aleo/NFT.record;
`