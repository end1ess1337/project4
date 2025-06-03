# Kiểm Tra Số Dư Ví Ronin

Đây là một ứng dụng đơn giản được viết bằng TypeScript để kiểm tra số dư của địa chỉ ví trên mạng Ronin Saigon (testnet).

## Tính Năng

- Kết nối trực tiếp đến mạng Ronin Saigon thông qua JSON-RPC
- Kiểm tra tính hợp lệ của địa chỉ ví EVM
- Hiển thị số dư ví dưới dạng RON
- Xử lý lỗi cơ bản

## Yêu Cầu Hệ Thống

- Node.js (phiên bản 14.0.0 trở lên)
- npm (Node Package Manager)

## Cài Đặt

1. Cài đặt các gói phụ thuộc:
```bash
npm install
```

2. Biên dịch mã nguồn TypeScript:
```bash
npm run build
```

## Cách Sử Dụng

1. Chạy chương trình:
```bash
npm start
```

2. Nhập địa chỉ ví khi được yêu cầu (phải bắt đầu bằng 0x)

3. Chương trình sẽ hiển thị số dư của ví dưới dạng RON

## Giải Thích Mã Nguồn

Chương trình được chia thành các phần chính:

1. **Kết nối mạng**: Sử dụng thư viện ethers.js để kết nối với mạng Ronin Saigon

2. **Kiểm tra địa chỉ**: Hàm `isValidEVMAddress()` kiểm tra tính hợp lệ của địa chỉ ví

3. **Định dạng số dư**: Hàm `formatBalance()` chuyển đổi số dư từ Wei sang RON

4. **Xử lý lỗi**: Chương trình có các cơ chế xử lý lỗi cơ bản như:
   - Kiểm tra kết nối mạng
   - Kiểm tra tính hợp lệ của địa chỉ
   - Xử lý lỗi khi truy vấn số dư

## Lưu Ý

- Chương trình này chỉ hoạt động với mạng Ronin Saigon (testnet)
- Địa chỉ ví phải là địa chỉ EVM hợp lệ (bắt đầu bằng 0x)
- Cần có kết nối internet để truy cập mạng Ronin