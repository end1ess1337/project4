import { ethers } from 'ethers';
import * as readlineSync from 'readline-sync';

// Cấu hình kết nối đến mạng Ronin Saigon testnet
const RONIN_RPC_URL = 'https://saigon-testnet.roninchain.com/rpc';

/**
 * Kiểm tra tính hợp lệ của địa chỉ ví EVM
 * @param address Địa chỉ ví cần kiểm tra
 * @returns true nếu địa chỉ hợp lệ, false nếu không hợp lệ
 */
function isValidEVMAddress(address: string): boolean {
    return ethers.isAddress(address);
}

/**
 * Chuyển đổi số Wei sang RON
 * @param balanceInWei Số dư dạng Wei
 * @returns Số dư dạng RON với định dạng dễ đọc
 */
function formatBalance(balanceInWei: bigint): string {
    return ethers.formatEther(balanceInWei);
}

/**
 * Hàm chính để kiểm tra số dư ví
 */
async function main() {
    try {
        // Tạo kết nối đến mạng Ronin
        const provider = new ethers.JsonRpcProvider(RONIN_RPC_URL);

        // Kiểm tra kết nối
        try {
            await provider.getNetwork();
        } catch (error) {
            console.error('❌ Không thể kết nối đến mạng Ronin Saigon. Vui lòng kiểm tra kết nối internet.');
            return;
        }

        // Nhập địa chỉ ví từ người dùng
        const walletAddress = readlineSync.question('nhap dia chi vi (bat dau bang 0x): ');

        // Kiểm tra tính hợp lệ của địa chỉ
        if (!isValidEVMAddress(walletAddress)) {
            console.error('❌ Địa chỉ ví không hợp lệ. Vui lòng kiểm tra lại.');
            return;
        }

        // Lấy số dư của ví
        const balanceInWei = await provider.getBalance(walletAddress);
        const balanceInRON = formatBalance(balanceInWei);

        // Hiển thị kết quả
        console.log('\n📊 Thông tin số dư:');
        console.log(`dia chi vi: ${walletAddress}`);
        console.log(`So du: ${balanceInRON} RON`);

    } catch (error) {
        console.error('❌ Đã xảy ra lỗi:', error instanceof Error ? error.message : 'Lỗi không xác định');
    }
}

// Chạy chương trình
main();