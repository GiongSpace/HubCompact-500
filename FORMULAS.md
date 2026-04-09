# 📐 GIONG SPACE — Tài liệu Công thức & Cách tính
**Hub Flagship · 1.500m² NLA**  
Phiên bản: 2026-03-30 · Tỷ giá: $1 USD = 25.000 VNĐ

---

## MỤC LỤC
1. [Thông số căn bản](#1-thông-số-căn-bản)
2. [CapEx — Đầu tư ban đầu](#2-capex--đầu-tư-ban-đầu)
3. [Doanh thu Diện tích](#3-doanh-thu-diện-tích)
4. [Doanh thu Add-on](#4-doanh-thu-add-on)
5. [Chi phí vận hành (OPEX & Rent)](#5-chi-phí-vận-hành-opex--rent)
6. [S&M — Marketing & Sales](#6-sm--marketing--sales)
7. [Cashflow 12 tháng](#7-cashflow-12-tháng)
8. [Breakeven & NOI ổn định](#8-breakeven--noi-ổn-định)
9. [Phân tích 3 phương thức phát triển](#9-phân-tích-3-phương-thức-phát-triển)
10. [Payback & ROI](#10-payback--roi)

---

## 1. Thông số căn bản

| Tham số | Giá trị | Ghi chú |
|---------|---------|---------|
| **NLA tổng** | 1.500 m² | Net Leasable Area |
| **PO area** | 750 m² | 50% NLA — Private Office |
| **Hub/Common area** | 750 m² | 50% NLA — CW + Meeting + Event + Showroom |
| **Café diện tích** | 75 m² | Cho thuê cố định (trong Common) |
| **Tỷ giá USD** | 25.000 VNĐ | $1 USD = 25K VNĐ |
| **VPA** | 450 DN | = NLA × 0,3 = 1.500 × 0,3 |
| **Hub DN** | ~71 DN | PO 31 + (CW+DD)×0,6 = 40 |
| **Phễu DN** | ~521 DN | 450 VPA + 71 Hub |

**Công thức Hub DN** (dẫn xuất từ PO + CW + DD):
- **PO**: 250 seats ÷ 8 avg seats/phòng = **31 DN** (midpoint của range 6–10 seats/phòng)
- **(CW + DD) × 0,6**: (48 + 19) × 0,6 = **40 DN** (hệ số 0,6 vì đa số là cá nhân, không phải DN)
- **Tổng Hub DN**: 31 + 40 = **71 DN**

---

## 2. CapEx — Đầu tư ban đầu

### Công thức đơn giá fit-out

```
Fit-out PO      = $1,5/m² × 750m²  × 25.000 VNĐ = 28.125.000 VNĐ/m² → 1,125 tỷ
Fit-out Common  = $4/m²   × 750m²  × 25.000 VNĐ = 75.000.000 VNĐ  → 3,0 tỷ
Fit-out tổng    = 1,125 + 3,0 = 4,125 tỷ VNĐ
```

### Công thức tiền cọc & thuê setup

```
Tiền cọc MB (3th) = 3 × Rent/th = 3 × 563 tr = 1.689 tr ≈ 1,69 tỷ
Tiền thuê Setup   = 3 × Rent/th = 3 × 563 tr = 1.689 tr ≈ 1,69 tỷ
  (3 tháng fit-out trước khi mở cửa — chưa có doanh thu)

Rent/th = $15/m² × 1.500m² × 25.000 VNĐ = 562.500.000 ≈ 563 tr/th
```

### Công thức vốn buffer

```
Buffer = 3 tháng × OPEX Location = 3 × 94 tr = 282 tr ≈ 0,28 tỷ
OPEX Location/th = $2,5/m² × 1.500m² × 25.000 = 93.750.000 ≈ 94 tr/th
```

### 3 Kịch bản CapEx tổng

| Hạng mục | Baseline (IFF) | Giong tự mở | NĐT + Franchise |
|----------|---------------|-------------|-----------------|
| Fit-out tổng | 4,125 tỷ | 4,125 tỷ | 4,125 tỷ |
| IFF | **0,30 tỷ** | ~~0~~ | **0,30 tỷ** |
| Tiền cọc MB 3th | **1,69 tỷ** | **1,69 tỷ** | ~~0~~ (chủ MB) |
| Thuê setup 3th | **1,69 tỷ** | **1,69 tỷ** | ~~0~~ (chủ MB) |
| Buffer OPEX 3th | 0,28 tỷ | 0,28 tỷ | 0,28 tỷ |
| **S&M năm đầu** | **~1,26 tỷ** | **~1,26 tỷ** | **~1,26 tỷ** |
| **TỔNG** | **~9,3 tỷ** | **~9,0 tỷ** | **~5,96 tỷ** |

```
Baseline  = 4,125 + 0,30 + 1,69 + 1,69 + 0,28 + 1,26 ≈ 9,3 tỷ
Tự mở    = 4,125 + 0    + 1,69 + 1,69 + 0,28 + 1,26 ≈ 9,0 tỷ
NĐT      = 4,125 + 0,30 + 0    + 0    + 0,28 + 1,26 ≈ 5,96 tỷ

Lưu ý: S&M năm đầu (1.258 tr ≈ 1,26 tỷ, theo per-month T1–T12 thực tế với CS đạt 88%
 cuối Năm 1) là chi phí vận hành nhưng được đưa vào “vốn đầu tư ban đầu” để
 giúp NDĐT thấy tổng vốn cần chuẩn bị trước khi vận hành (Pitch Deck convention).
```

---

## 3. Doanh thu Diện tích

### Công thức mỗi phân khu (tại CS ổn định ~88%)

```
┌─────────────────────────────────────────────────────────────────────┐
│ PRIVATE OFFICE (PO)                                                 │
│   Số ghế = 750m² ÷ 3m²/seat = 250 seats                           │
│   DT = 250 seats × 90% occ × 2.500.000 VNĐ/seat/th               │
│       = 225 seats × 2,5 tr = 562,5 tr ≈ 563 tr/th                 │
├─────────────────────────────────────────────────────────────────────┤
│ COWORKING TEAM (CW, nhóm ≥5)                                        │
│   Diện tích CW = 150m² (trong Common 750m²)                        │
│   Số ghế = 150m² ÷ 5m²/seat × 1,6 (hệ số) = 48 seats             │
│   DT = 48 × 85% occ × 3.000.000 = 40,8 × 3 tr = 122,4 ≈ 123 tr  │
├─────────────────────────────────────────────────────────────────────┤
│ DEDICATED DESK (DD, cá nhân)                                         │
│   Số ghế = 19 seats (trong Common)                                  │
│   DT = 19 × 88% occ × 4.000.000 = 16,7 × 4 tr ≈ 68 tr            │
├─────────────────────────────────────────────────────────────────────┤
│ MEETING ROOM                                                         │
│   Số phòng = 4 phòng (trong Common 750m²)                          │
│   DT = 4 phòng × 55% occ × 110 giờ booking/th × 250K/h            │
│       = 4 × 0,55 × 110 × 250K = 60,5 tr ≈ 61 tr                  │
│   (110h = ~5h/ngày × 22 ngày làm việc)                            │
├─────────────────────────────────────────────────────────────────────┤
│ EVENT HALL                                                           │
│   DT = 6 events/th × 3.000.000/event = 18 tr                       │
├─────────────────────────────────────────────────────────────────────┤
│ BIZ PROMOTE / SHOWROOM                                               │
│   DT = 5 booths × 70% occ × 10.000.000/booth/th = 35 tr           │
├─────────────────────────────────────────────────────────────────────┤
│ F&B / CAFÉ (cho thuê mặt bằng)                                      │
│   DT = 75m² × 500.000 VNĐ/m²/th = 37,5 tr ≈ 38 tr                │
├─────────────────────────────────────────────────────────────────────┤
│ ANCILLARY (Print, Locker, Printing…)                                 │
│   DT = 10 tr/th (ước tính cố định)                                  │
└─────────────────────────────────────────────────────────────────────┘

TỔNG DT DIỆN TÍCH = 563+123+68+61+18+35+38+10 = 916 tr/th (tại CS 88%)
```

### Công thức DT theo tháng (tỷ lệ Occupancy)

```
DT_Diện_tích(CS%) = 916 × (CS% / 88%)

Ví dụ:
  T1 (CS=15%): 916 × 15/88 = 156 tr
  T4 (CS=45%): 916 × 45/88 = 469 tr
  T7 (CS=70%): 916 × 70/88 = 729 tr
  T12(CS=88%): 916 tr (không đổi)
```

---

## 4. Doanh thu Add-on

### Phễu VPA

```
VPA = NLA × 0,3 = 1.500 × 0,3 = 450 DN
Hub DN = PO (250÷8 = 31) + (CW+DD)×0,6 = (48+19)×0,6 = 40
       = 31 + 40 = 71 DN
Phễu tổng = 450 VPA + 71 Hub = 521 DN
```

### 7 nhóm dịch vụ Add-on

| Dịch vụ | Pool | Conversion | Đơn giá HH | DT/th |
|---------|------|-----------|-----------|------|
| **Membership** | 450 VPA | 30% = 135 DN | 450K/DN/th | **61 tr** |
| **Giong Tax** | 450 VPA + 71 Hub | 30%+50% = 171 DN | 2tr/th × 15% HH | **51 tr** |
| **Giong Grow** | 450 + 71 | 10%+20% = 59 DN | 4-10tr × 20% HH | **83 tr** |
| **Giong Promote** | Hub+Network | 4 events/th | 3-15tr/event | **35 tr** |
| **Giong Legal** | 450 VPA | 50% ĐKKD + 20%/năm | 3-5tr × 15% HH | **18 tr** |
| **Giong AI** | 450 + 71 | 8%+15% = 47 DN | 1,2tr × 25% HH | **14 tr** |
| **Giong Connect** | 521 phễu | 8% = 42 deals | 15tr × 15% HH | **94 tr** |
| **TỔNG** | | | | **~356 tr/th** |

> **Verify từng row** (đúng công thức với phễu mới = 521 = 450 VPA + 71 Hub):
> - Membership: 135 × 450K = 60,75 ≈ 61 ✓
> - Tax: 30%×450 + 50%×71 = 171 DN · 171 × 2tr × 15% = 51,3 ≈ 51 ✓
> - Grow: 10%×450 + 20%×71 = 59 DN · 59 × 7tr × 20% = 82,6 ≈ 83 ✓
> - Promote: 4 × ~9tr ≈ 35 ✓
> - AI: 8%×450 + 15%×71 = 47 DN · 47 × 1,2tr × 25% = 14,1 ≈ 14 ✓
> - Connect: 521 × 8% = 42 deals · 42 × 15tr × 15% = 93,78 ≈ 94 ✓
> - **Tổng: 61+51+83+35+18+14+94 = 356 tr/th**

### DT Add-on theo tháng

```
DT_Add-on(CS%) = 356 × (CS% / 88%)     [T1–T3: Add-on = 0 vì chưa vận hành VPA]
  T4 (CS=45%): 356 × 45/88 = 182 tr
  T7 (CS=70%): 356 × 70/88 = 283 tr
  T12(CS=88%): 356 tr

DT GROSS (ổn định) = 916 + 356 = 1.272 tr/th
```

---

## 5. Chi phí vận hành (OPEX & Rent)

### Công thức Rent

```
Rent/th = $15/m²/th × 1.500m² × 25.000 VNĐ
        = 15 × 1.500 × 25.000
        = 562.500.000 VNĐ ≈ 563 tr/th
        = 6,76 tỷ/năm

Giá $15/m² = mức thị trường văn phòng hạng B–C tại TP.HCM
```

### Công thức OPEX Location

```
OPEX Location/th = $2,5/m²/th × 1.500m² × 25.000 VNĐ
                 = 2,5 × 1.500 × 25.000
                 = 93.750.000 VNĐ ≈ 94 tr/th
                 = 1,13 tỷ/năm

Bao gồm: NS nhân viên + điện nước + bảo trì + PCCC
```

### OPEX theo CS%

```
OPEX_variable(CS%) = 94 × CS%

Ví dụ:
  CS=45%: 94 × 0,45 = 42 tr/th
  CS=70%: 94 × 0,70 = 66 tr/th
  CS=88%: 94 × 0,88 = 83 tr/th (ổn định)
```

### Chi phí Franchise (khi áp dụng)

```
OPEX Hệ thống (Sys Fee) = 5% × DT Gross = 5% × 1.272 = 64 tr/th
Royalty Fee             = 7% × DT Gross = 7% × 1.272 = 89 tr/th
OPEX Markup (HQ+0,5$/m²)= ($3-$2,5) × 1.500 × 25K = 19 tr/th ≈ 38 tr/th (làm tròn)

Tổng Franchise fees ổn định = 64 + 89 + 38 = 191 tr/th
```

---

## 6. S&M — Marketing & Sales

### Commission Agency (trả 1 lần khi KH ký HĐ)

```
Commission = PO_area × ΔCS% × Giá_PO/m²/th × Xth_hoa_hồng

Trong đó:
  PO_area  = 750 m² (50% NLA, chỉ tính PO sinh commission Agency)
  Giá_PO   = 2.500.000 VNĐ/seat/th, 1 seat = 3m² → 733.333 VNĐ/m²/th ≈ 733K/m²/th
  X_th HH  = 2 th (Aggressive) / 1,5 th (Growth) / 1 th (Retention)

Tính theo CS thực tế đạt 88% cuối Năm 1 (T1→T12):

Phase Aggressive (T1–T3, CS 0→35%, ΔCS=35%):
  = 750 × 35% × 733K × 2th = 262,5 × 733K × 2 = 384.825.000 ≈ 385 tr

Phase Growth (T4–T7, CS 35→70%, ΔCS=35%):
  = 750 × 35% × 733K × 1,5th = 262,5 × 733K × 1,5 = 288.618.750 ≈ 289 tr
  (per-month sum chính xác: 83+83+58+66 = 290 tr)

Phase Retention (T8–T12, CS 70→88%, ΔCS=18%):
  = 750 × 18% × 733K × 1th = 135 × 733K × 1 = 98.955.000 ≈ 99 tr
  (per-month sum chính xác: 39+28+17+11+6 = 101 tr)

Tổng Commission Năm 1 (per-month thực tế) = 385 + 290 + 101 = 776 tr
```

### Commission per tháng (theo ΔCS từng tháng)

```
T1 (ΔCS=15%, Agg, 2th): 750×15%×733K×2 = 112,5×733K×2 ≈ 165 tr
T2 (ΔCS=10%, Agg, 2th): 750×10%×733K×2 = 75×733K×2  ≈ 110 tr
T3 (ΔCS=10%, Agg, 2th): ≈ 110 tr
T4 (ΔCS=10%, Gr,1,5th): 750×10%×733K×1,5 = 75×733K×1,5 ≈ 83 tr
T5 (ΔCS=10%, Gr,1,5th): ≈ 83 tr
T6 (ΔCS=7%,  Gr,1,5th): 750×7%×733K×1,5 = 52,5×733K×1,5 ≈ 58 tr
T7 (ΔCS=8%,  Gr,1,5th): 750×8%×733K×1,5 = 60×733K×1,5 ≈ 66 tr
T8 (ΔCS=7%,  Ret,1th):  750×7%×733K×1 = 52,5×733K ≈ 39 tr
T9 (ΔCS=5%,  Ret,1th):  750×5%×733K = 27 tr
T10(ΔCS=3%,  Ret,1th):  ≈ 17 tr
T11(ΔCS=2%,  Ret,1th):  ≈ 11 tr
T12(ΔCS=1%,  Ret,1th):  ≈ 6 tr
```

### Digital Marketing (Brand + Lead Gen)

```
Digital = NLA_total × vacancy% × Rate/m²
        = 1.500m² × vac% × 9.500 VNĐ/m²
        = 14,25 × vac%  (đơn vị: triệu VNĐ)

Trong đó:
  Brand   = 1.500 × vac% × 2.500 VNĐ/m²
  Lead Gen= 1.500 × vac% × 7.000 VNĐ/m²

Vacancy % = (1 - CS%)

Ví dụ:
  T1 (vac=85%): 14,25 × 0,85 = 12 tr
  T4 (vac=55%): 14,25 × 0,55 = 8 tr
  T7 (vac=30%): 14,25 × 0,30 = 4 tr
  T12(vac=12%): 14,25 × 0,12 = 2 tr
```

### Events + BD Push (biến động theo vacancy phase)

```
Phase Aggressive (vac 60-100%): Events 8–12tr, BD 8–12tr
Phase Growth     (vac 30-60%):  Events 5–8tr,  BD 5–8tr
Phase Retention  (vac <30%):    Events 3–5tr,  BD 2–3tr

Nội suy tuyến tính trong range theo vacancy% thực tế từng tháng.
```

### Fixed S&M (không đổi theo phase)

```
Fixed = CRM 2,5 tr + Content/SEO 6 tr + BD base 10 tr + KOL/PR 3 tr = 22 tr/th
```

### Tổng S&M Năm đầu theo phase (per-month T1–T12 thực tế)

```
Phase Aggressive (T1–T3, 3 th)   : 544 tr  (Fixed 66 + Variable 478)
Phase Growth     (T4–T7, 4 th)   : 456 tr  (Fixed 88 + Variable 368)
Phase Retention  (T8–T12, 5 th)  : 258 tr  (Fixed 110 + Variable 148)
TỔNG NĂM ĐẦU                    : 1.258 tr (~1,26 tỷ)
  Trong đó: Commission 776 tr (trả 1 lần) + Fixed 264 tr (22×12) + Variable khác ~218 tr
  Avg: 1.258 ÷ 12 tháng = 105 tr/th · %DT avg ~13%
```

---

## 7. Cashflow 12 tháng

### Công thức từng tháng

```
DT_Gross(t)  = DT_DiệnTích(t) + DT_AddOn(t)
Cost(t)      = Rent(t) + OPEX(t) + SM(t)
NOI(t)       = DT_Gross(t) - Cost(t)

Trong đó:
  Rent(t)    = 563 tr     (T4+ mới có; T1–T3 = 0 vì đã tính trong CapEx)
  OPEX(t)    = 94 × CS%(t)
  SM(t)      = Commission(t) + Digital(t) + Events(t) + BD(t) + Fixed(22)
```

### Bảng 12 tháng tóm tắt

| Tháng | CS% | DT Diện tích | Add-on | DT Gross | Cost | NOI | NOI Lũy kế |
|-------|-----|-------------|--------|----------|------|-----|-----------|
| T1 | 15% | 156 tr | 0 | 156 | 235 | −79 | −79 |
| T2 | 25% | 260 tr | 0 | 260 | 187 | +73 | −6 |
| T3 | 35% | 365 tr | 0 | 365 | 193 | +172 | +166 |
| T4 | 45% | 469 tr | 182 | 651 | 734 | −83 | +83 |
| T5 | 55% | 573 tr | 223 | 796 | 741 | **+55** | +138 |
| **T6** | **62%** | 646 tr | 251 | 897 | 719 | **+178 ★BEP** | +316 |
| T7 | 70% | 730 tr | 283 | 1.013 | 732 | +281 | +597 |
| T8 | 77% | 803 tr | 312 | 1.115 | 708 | +407 | +1.004 |
| T9 | 82% | 851 tr | 332 | 1.183 | 700 | +483 | +1.487 |
| T10 | 85% | 884 tr | 344 | 1.228 | 691 | +537 | +2.024 |
| T11 | 87% | 905 tr | 352 | 1.257 | 686 | +571 | +2.595 |
| T12 | 88% | 916 tr | 356 | 1.272 | 682 | +590 | +3.185 |

> ★ **T6 = Hòa vốn Vận hành** (BEP)  
> ★★ **T7 = Lợi nhuận kế toán dương**

### Khấu hao (Depreciation)

```
Khấu hao/th = Fit-out ÷ 36 tháng = 4,125 tỷ ÷ 36 = 114,6 tr ≈ 115 tr/th
LN sau KH(t) = NOI(t) - 115 tr
```

---

## 8. Breakeven & NOI ổn định

### Breakeven vận hành

```
BEP_VH xảy ra khi: DT_Gross(t) = Cost(t)
                   DT(t) = Rent + OPEX(CS%) + SM_min

Tại CS ≈ 62% (T6):
  DT = 897 tr
  Cost = 563 + 58 + 98 = 719 tr → NOI +178 (vượt BEP xa)
  → BEP Tự mở (no Sys/Roy): CS ~51% (giữa T4 NOI −83 và T5 NOI +55)
  → BEP Baseline (incl. Sys+Roy 12%): CS ~58% (giữa T5 NOI −41 và T6 NOI +70)
```

### NOI ổn định (Steady State — CS = 88%)

```
DT Gross      = 916 + 356 = 1.272 tr/th
Rent          = −563 tr
OPEX Location = −94 tr
OPEX Sys      = −5% × 1.272 = −64 tr   [chỉ khi Franchise]
Royalty       = −7% × 1.272 = −89 tr   [chỉ khi Franchise]
S&M ổn định  = −22 tr (Fixed only, không commission)
─────────────────────────────────────
NOI (Tự mở, không Sys/Roy)  = 1.272 − 563 − 94 − 22          = 593 tr/th = 7,12 tỷ/năm
NOI (Baseline incl. Sys+Roy) = 1.272 − 563 − 94 − 64 − 89 − 22 = 440 tr/th = 5,28 tỷ/năm
```

### BEP số liệu trên P&L

```
DT Gross ổn định   = 1.272 tr/th (15,26 tỷ/năm)
Tổng chi phí (Baseline 4 lớp + S&M) = 832 tr/th (9,98 tỷ/năm)
  Rent               563 tr
  OPEX Location       94 tr
  OPEX Sys (5%)        64 tr   [Franchise only]
  Royalty (7%)         89 tr   [Franchise only]
  S&M Fixed            22 tr
NOI Baseline (incl.Sys+Roy)  = 440 tr/th  (5,28 tỷ/năm) — dùng cho payback chuẩn
NOI Giong tự mở (no Sys/Roy) = 593 tr/th  (7,12 tỷ/năm) — sau trừ S&M 22tr
Khấu hao                     = 115 tr/th  (1,375 tỷ/năm)
LN sau KH (Baseline)         = 325 tr/th  (3,90 tỷ/năm)
LN sau KH (Tự mở)            = 478 tr/th  (5,74 tỷ/năm)
```

---

## 9. Phân tích 3 phương thức phát triển

### A. Giong đi thuê ($15/m²)

```
NOI Giong = DT Gross − Rent − OPEX − S&M
           = 1.272 − 563 − 94 − 22 = 593 tr/th = 7,12 tỷ/năm
CapEx      = 7,785 tỷ (Giong tự mở, no IFF) hoặc 8,085 tỷ (Baseline)
```

### B. Franchise (Franchisee thuê MB)

```
Giong HQ nhận/th = Sys(5%) + Roy(7%) + OPEX markup(0,5$/m²)
                 = 64 + 89 + 38 = 191 tr/th
CapEx Giong      = 0 (Franchisee đầu tư)
IFF              = 300 tr (1 lần khi ký)
```

### C. Chủ nhà + Franchise ★ (Chủ nhà = Franchisee)

```
Chủ nhà hưởng:
  NOI Franchisee = DT Gross − OPEX − Sys − Roy
                 ≈ 1.272 × (1 − 5% − 7%) − 94 ≈ 1.025 tr/th *
  Không trả rent → tiết kiệm 563 tr/th

Giong HQ vẫn nhận = 191 tr/th (Sys + Roy + markup)
CapEx Chủ nhà     = 4,705 tỷ (Fit-out 4,125 + IFF 0,3 + Buffer 0,28 − Cọc/Thuê 0)

* DT Gross ở mức CS ổn định ~75%: 1.272 × 75/88 ≈ 1.084 tr → ước tính ~860 NOI
```

---

## 10. Payback & ROI

### Công thức payback

```
Payback_period = CapEx / NOI_bình_quân_năm

Năm 1 (ramp-up): NOI lũy kế = +3,19 tỷ (tổng NOI T1–T12 từ bảng cashflow)
Năm 2+ (ổn định): NOI/năm = 440 tr/th × 12 = 5,28 tỷ  (Baseline Sys+Roy)
                   NOI/năm = 593 tr/th × 12 = 7,12 tỷ  (Giong tự mở, no Sys/Roy)

NOI lũy kế (Baseline — Tổng vốn ban đầu 9,3 tỷ):
  Cuối Y1  : 3,19 tỷ
  Cuối Y2  : 3,19 + 5,28 = 8,47 tỷ   ← Còn 0,83 tỷ
  Cuối Y3  : 8,47 + 5,28 = 13,75 tỷ  ← Vượt 9,3 tỷ → HÒA VỐN (~2,2 năm)
  Cuối Y4  : 13,75 + 5,28 = 19,03 tỷ
  Cuối Y5  : 24,31 tỷ

NOI lũy kế (Giong tự mở — Tổng vốn ban đầu 9,0 tỷ):
  Cuối Y1  : 3,19 tỷ
  Cuối Y2  : 3,19 + 7,12 = 10,31 tỷ  ← Vượt 9,0 tỷ → HÒA VỐN (~1,8 năm)
  Cuối Y3  : 10,31 + 7,12 = 17,43 tỷ
```

### ROI

```
ROI = NOI_ổn_định/năm ÷ CapEx_thuần
    = 5,28 tỷ ÷ 8,085 tỷ = 65,3%        (Baseline)
    = 7,12 tỷ ÷ 7,785 tỷ = 91,5%        (Giong tự mở)

ROI thực = LN_sau_KH/năm ÷ CapEx_thuần
         = 3,90 tỷ ÷ 8,085 tỷ = 48,2%   (Baseline)
         = 5,74 tỷ ÷ 7,785 tỷ = 73,7%   (Giong tự mở)
```

---

## BẢNG TRA CỨU NHANH

```
Tổng thông số cốt lõi:
  NLA           = 1.500m²        PO = 750m²
  Rent          = 563 tr/th      = $15/m²
  OPEX          = 94 tr/th       = $2,5/m²
  DT max        = 1.272 tr/th    tại CS 88% (916 + 356 add-on)
  Commission    = 776 tr/năm 1   trả khi KH ký (CS thực tế đạt 88%)
  Digital coeff = 14,25 × vac%
  BEP VH        = ~CS 51% (Tự mở) · ~CS 58% (Baseline incl. Sys+Roy)
  NOI ổn định   = 440 tr/th (Baseline) · 593 tr/th (Tự mở)
  NOI lũy kế Y1 = +3,19 tỷ
  Payback       = ~2,2 năm (Baseline) / ~1,8 năm (Tự mở)
  ROI           = ~65% (Baseline) / ~92% (Tự mở) — NOI/y ÷ CapEx thuần

Vốn đầu tư ban đầu (incl. S&M năm đầu ~1,26 tỷ):
  Baseline       = ~9,3 tỷ
  Giong tự mở   = ~9,0 tỷ
  NĐT+Franchise  = ~5,96 tỷ

CapEx thuần (không S&M):
  Baseline       = 8,085 tỷ
  Giong tự mở   = 7,785 tỷ
  NĐT+Franchise  = 4,705 tỷ

Fit-out          = 4,125 tỷ (750m²×$1,5 + 750m²×$4)
Cọc MB           = 1,69 tỷ (3th × 563tr)
Thuê setup       = 1,69 tỷ (3th × 563tr)
Buffer           = 0,28 tỷ (3th × 94tr)
IFF              = 0,30 tỷ (cố định)
S&M năm đầu     = ~1,26 tỷ (per-month T1–T12 thực tế · 1.258 tr)
```

---

*Tài liệu này là nguồn tham chiếu duy nhất cho toàn bộ tính toán tài chính dự án Giong Space 1.500m².*  
*Cập nhật: 2026-03-30*
