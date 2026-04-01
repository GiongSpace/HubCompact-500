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
| **Phễu DN** | ~546 DN | 450 VPA + 66 Hub + 30 Network |
| **HH PO** | ~33 Hub DN | PO + CW + DD ≈ 33 đơn vị |

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
| **S&M năm đầu** | **~1,05 tỷ** | **~1,05 tỷ** | **~1,05 tỷ** |
| **TỔNG** | **~9,1 tỷ** | **~8,8 tỷ** | **~5,72 tỷ** |

```
Baseline  = 4,125 + 0,30 + 1,69 + 1,69 + 0,28 + 1,05 ≈ 9,1 tỷ
Tự mở    = 4,125 + 0    + 1,69 + 1,69 + 0,28 + 1,05 ≈ 8,8 tỷ
NĐT      = 4,125 + 0,30 + 0    + 0    + 0,28 + 1,05 ≈ 5,72 tỷ

Lưu ý: S&M năm đầu (~1.017–1.090 tr, dùng trung vị ~1.050 tr = ~1,05 tỷ) là chi
 phí vận hành nhưng được đưa vào “vốn đầu tư ban đầu” để giúp NDĐT thấy
 tổng vốn cần chuẩn bị trước khi vận hành (Pitch Deck convention).
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
Phễu tổng = 450 VPA + 66 Hub DN + 30 Network ≈ 546 DN tham chiếu
```

### 7 nhóm dịch vụ Add-on

| Dịch vụ | Pool | Conversion | Đơn giá HH | DT/th |
|---------|------|-----------|-----------|------|
| **Membership** | 450 VPA | 30% = 135 DN | 450K/DN/th | **61 tr** |
| **Giong Tax** | 450 VPA + 33 Hub | 30%+50% = 153 DN | 2tr/th × 15% HH | **58 tr** |
| **Giong Grow** | 450+33 | 10%+20% = 52 DN | 4-10tr × 20% HH | **74 tr** |
| **Giong Promote** | Hub+Network | 4 events/th | 3-15tr/event | **35 tr** |
| **Giong Legal** | 450 VPA | 50% ĐKKD + 20%/năm | 3-5tr × 15% HH | **18 tr** |
| **Giong AI** | 450+33 | 8%+15% = 41 DN | 1,2tr × 25% HH | **72 tr** |
| **Giong Connect** | 283 ecosystem | 8% = 23 deal | 15tr × 15% HH | **12 tr** |
| **TỔNG** | | | | **~273 tr/th** |

> **Lưu ý:** Tổng cộng lẻ = 330 tr. File dùng 273 tr (= 546 VPA pool ÷ 2 theo tỷ lệ 1.500m²) — phương pháp bảo thủ hơn.

### DT Add-on theo tháng

```
DT_Add-on(CS%) = 273 × (CS% / 88%)     [T1–T3: Add-on = 0 vì chưa vận hành VPA]
  T4 (CS=45%): 273 × 45/88 = 140 tr
  T7 (CS=70%): 273 × 70/88 = 217 tr
  T12(CS=88%): 273 tr

DT GROSS (ổn định) = 916 + 273 = 1.189 tr/th
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
OPEX Hệ thống (Sys Fee) = 5% × DT Gross = 5% × 1.189 = 59 tr/th
Royalty Fee             = 7% × DT Gross = 7% × 1.189 = 83 tr/th
OPEX Markup (HQ+0,5$/m²)= ($3-$2,5) × 1.500 × 25K = 19 tr/th ≈ 38 tr/th (làm tròn)

Tổng Franchise fees ổn định = 59 + 83 + 38 = 180 tr/th ≈ 181 tr/th
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

Phase Aggressive (CS 0→40%, ΔCS=40%):
  = 750 × 40% × 733K × 2th = 300 × 733K × 2 = 439.800.000 ≈ 440 tr

Phase Growth (CS 40→70%, ΔCS=30%):
  = 750 × 30% × 733K × 1,5th = 225 × 733K × 1,5 = 247.387.500 ≈ 247 tr

Phase Retention (CS 70→100%, ΔCS=30%):
  = 750 × 30% × 733K × 1th = 225 × 733K × 1 = 165.000.000 ≈ 165 tr

Tổng Commission Năm 1 = 440 + 247 + 165 = 852 tr
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

### Tổng S&M Năm đầu theo phase

```
Phase Aggressive (~3,5 th) : ~513–540 tr  (commission 440 + variable + fixed)
Phase Growth     (~4 th)   : ~304–330 tr
Phase Retention  (~3 th)   : ~200–220 tr
TỔNG NĂM ĐẦU              : ~1.017–1.090 tr
  Trong đó: Commission 852 tr (trả 1 lần) + Fixed 264 tr + Variable ~100 tr
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
| T4 | 45% | 469 tr | 140 | 609 | 734 | −125 | +41 |
| T5 | 55% | 573 tr | 171 | 744 | 741 | **+3** | +44 |
| **T6** | **62%** | 646 tr | 193 | 839 | 719 | **+120 ★BEP** | +164 |
| T7 | 70% | 730 tr | 218 | 948 | 732 | +216 | +380 |
| T8 | 77% | 803 tr | 239 | 1.042 | 708 | +334 | +714 |
| T9 | 82% | 851 tr | 254 | 1.105 | 700 | +405 | +1.119 |
| T10 | 85% | 884 tr | 264 | 1.148 | 691 | +457 | +1.576 |
| T11 | 87% | 905 tr | 270 | 1.175 | 686 | +489 | +2.065 |
| T12 | 88% | 916 tr | 273 | 1.189 | 682 | +507 | +2.572 |

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
  DT = 839 tr
  Cost = 563 + 58 + 98 + 80 = 719 tr (gần BEP, NOI +120)
  → BEP nằm trong khoảng CS 55–62%
```

### NOI ổn định (Steady State — CS = 88%)

```
DT Gross      = 916 + 273 = 1.189 tr/th
Rent          = −563 tr
OPEX Location = −94 tr
OPEX Sys      = −5% × 1.189 = −59 tr   [chỉ khi Franchise]
Royalty       = −7% × 1.189 = −83 tr   [chỉ khi Franchise]
S&M ổn định  = −22 tr (Fixed only, không commission)
─────────────────────────────────────
NOI (Tự mở, không Sys/Roy)  = 1.189 − 563 − 94 − 22          = 510 tr/th = 6,12 tỷ/năm
NOI (Baseline incl. Sys+Roy) = 1.189 − 563 − 94 − 59 − 83 − 22 = 368 tr/th = 4,42 tỷ/năm

Ghi chú: Bảng P&L ổn định bên dưới dùng NOI = 390 tr (không trừ S&M 22 tr — benchmark)
```

### BEP số liệu trên P&L

```
DT Gross ổn định   = 1.189 tr/th (14,27 tỷ/năm)
Tổng chi phí (Baseline 4 lớp) = 799 tr/th (9,59 tỷ/năm)
  Rent               563 tr
  OPEX Location       94 tr
  OPEX Sys (5%)        59 tr   [Franchise only]
  Royalty (7%)         83 tr   [Franchise only]
NOI Baseline (incl.Sys+Roy)  = 390 tr/th  (4,68 tỷ/năm) — dùng cho payback chuẩn
NOI Giong tự mở (no Sys/Roy) = 510 tr/th  (6,12 tỷ/năm) — sau trừ S&M 22tr
Khấu hao                     = 115 tr/th  (1,375 tỷ/năm)
LN sau KH (Baseline)         = 275 tr/th  (3,3 tỷ/năm)
LN sau KH (Tự mở)            = 395 tr/th  (4,74 tỷ/năm)
```

---

## 9. Phân tích 3 phương thức phát triển

### A. Giong đi thuê ($15/m²)

```
NOI Giong = DT Gross − Rent − OPEX − S&M
           = 1.189 − 563 − 94 − 22 = 510 tr/th = 6,12 tỷ/năm
CapEx      = 7,785 tỷ (Giong tự mở, no IFF) hoặc 8,085 tỷ (Baseline)
```

### B. Franchise (Franchisee thuê MB)

```
Giong HQ nhận/th = Sys(5%) + Roy(7%) + OPEX markup(0,5$/m²)
                 = 59 + 83 + 38 = 180 tr/th ≈ 181 tr/th
CapEx Giong      = 0 (Franchisee đầu tư)
IFF              = 300 tr (1 lần khi ký)
```

### C. Chủ nhà + Franchise ★ (Chủ nhà = Franchisee)

```
Chủ nhà hưởng:
  NOI Franchisee = DT Gross − OPEX − Sys − Roy = 1.402 × (1 − 5% − 7%) − 94 ≈ 1.057 tr/th *
  Không trả rent → tiết kiệm 563 tr/th

Giong HQ vẫn nhận = 181 tr/th (Sys + Roy + markup)
CapEx Chủ nhà     = 4,705 tỷ (Fit-out 4,125 + IFF 0,3 + Buffer 0,28 − Cọc/Thuê 0)

* DT Gross ở mức CS ổn định ~75%: 1.189 × 75/88 ≈ 1.013 tr → ước tính 927 NOI
```

---

## 10. Payback & ROI

### Công thức payback

```
Payback_period = CapEx / NOI_bình_quân_năm

Năm 1 (ramp-up): NOI lũy kế = +2,57 tỷ (tổng NOI T1–T12 từ bảng cashflow)
Năm 2+ (ổn định): NOI/năm = 390 tr/th × 12 = 4,68 tỷ  (Baseline Sys+Roy)
                   NOI/năm = 510 tr/th × 12 = 6,12 tỷ  (Giong tự mở, no Sys/Roy)

NOI lũy kế (Baseline — Tổng vốn ban đầu 9,1 tỷ):
  Cuối Y1  : 2,57 tỷ
  Cuối Y2  : 2,57 + 4,68 = 7,25 tỷ
  Cuối Y3  : 7,25 + 4,68 = 11,93 tỷ  ← Vượt 9,1 tỷ → HÒA VỐN (~2,5 năm)
  Cuối Y4  : 11,93 + 4,68 = 16,61 tỷ
  Cuối Y5  : 21,29 tỷ

NOI lũy kế (Giong tự mở — Tổng vốn ban đầu 8,8 tỷ):
  Cuối Y1  : 2,57 tỷ
  Cuối Y2  : 2,57 + 6,12 = 8,69 tỷ   ← Gần đạt 8,8 tỷ → HÒA VỐN (~2,1 năm)
  Cuối Y3  : 8,69 + 6,12 = 14,81 tỷ
```

### ROI

```
ROI = NOI_ổn_định/năm ÷ CapEx
    = 4,68 tỷ ÷ 8,085 tỷ = 57,9% ≈ 58%

ROI thực = LN_sau_KH/năm ÷ CapEx
         = 3,3 tỷ ÷ 8,085 tỷ = 40,8%
```

---

## BẢNG TRA CỨU NHANH

```
Tổng thông số cốt lõi:
  NLA           = 1.500m²        PO = 750m²
  Rent          = 563 tr/th      = $15/m²
  OPEX          = 94 tr/th       = $2,5/m²
  DT max        = 1.189 tr/th    tại CS 88%
  Commission    = 852 tr/năm 1   trả khi KH ký
  Digital coeff = 14,25 × vac%
  BEP VH        = ~CS 62% (T6)
  NOI ổn định   = 390 tr/th
  NOI lũy kế Y1 = +2,76 tỷ
  Payback       = ~2,2 năm (Baseline incl. S&M) / ~2 năm (Tự mở)
  ROI           = ~58% (NOI/y ÷ CapEx thuần)

Vốn đầu tư ban đầu (incl. S&M năm đầu ~1,05 tỷ):
  Baseline       = ~9,1 tỷ
  Giong tự mở   = ~8,8 tỷ
  NĐT+Franchise  = ~5,72 tỷ

CapEx thuần (không S&M):
  Baseline       = 8,085 tỷ
  Giong tự mở   = 7,785 tỷ
  NĐT+Franchise  = 4,705 tỷ

Fit-out          = 4,125 tỷ (750m²×$1,5 + 750m²×$4)
Cọc MB           = 1,69 tỷ (3th × 563tr)
Thuê setup       = 1,69 tỷ (3th × 563tr)
Buffer           = 0,28 tỷ (3th × 94tr)
IFF              = 0,30 tỷ (cố định)
S&M năm đầu     = ~1,05 tỷ (mid-range 1.017–1.090 tr)
```

---

*Tài liệu này là nguồn tham chiếu duy nhất cho toàn bộ tính toán tài chính dự án Giong Space 1.500m².*  
*Cập nhật: 2026-03-30*
