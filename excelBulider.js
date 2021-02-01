const fs = require('fs')
var jsn = [
    
        {
            "user": "drmravikannan50@protonmail.com",
            "asset": "USDT",
            "available": "0.00278657",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "INR",
            "available": "0.01",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "LTC",
            "available": "0.000062",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "0.00007715",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "0.00002447",
            "freeze": "0"
        },
        {
            "user": "logap6940@gmail.com",
            "asset": "USDT",
            "available": "0.008026",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "5.7e-7",
            "freeze": "0"
        },
        {
            "user": "sangamitharan@gmail.com",
            "asset": "INR",
            "available": "46.15",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "LTC",
            "available": "0.00009071",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "DASH",
            "available": "0.00008221",
            "freeze": "0"
        },
        {
            "user": "sulsha2020@gmail.com",
            "asset": "ETH",
            "available": "0.0000976",
            "freeze": "0"
        },
        {
            "user": "fahadhnasardheen98@gmail.com",
            "asset": "INR",
            "available": "1.12",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "0.00007333",
            "freeze": "0"
        },
        {
            "user": "suriyasingh001@gmail.com",
            "asset": "USDT",
            "available": "0.00040766",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "0.00006297",
            "freeze": "0"
        },
        {
            "user": "kumawat.pritish@gmail.com",
            "asset": "BTC",
            "available": "0e-8",
            "freeze": "0"
        },
        {
            "user": "rtaide254@gmail.com",
            "asset": "INR",
            "available": "0.19",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "LTC",
            "available": "0.43382241",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "3.6e-7",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "DASH",
            "available": "0.09240486",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "0.00206087",
            "freeze": "0"
        },
        {
            "user": "akhilkumar1991@gmail.com",
            "asset": "USDT",
            "available": "0.0067808",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "0.09393894",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "9.1e-7",
            "freeze": "0"
        },
        {
            "user": "saqeeb.ahmed@icloud.com",
            "asset": "LTC",
            "available": "0e-8",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "1e-8",
            "freeze": "0"
        },
        {
            "user": "selvamathimadasamy@gmail.com",
            "asset": "DASH",
            "available": "0.00008927",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "9.3e-7",
            "freeze": "0"
        },
        {
            "user": "choyal-brothers@protonmail.com",
            "asset": "INR",
            "available": "0.28",
            "freeze": "0"
        },
        {
            "user": "sajithram16@gmail.com",
            "asset": "INR",
            "available": "76.73",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "1.3e-7",
            "freeze": "0"
        },
        {
            "user": "goyalshalendra@gmail.com",
            "asset": "INR",
            "available": "182.12",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "LTC",
            "available": "0.00001311",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "0.00007865",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "0.00001089",
            "freeze": "0"
        },
        {
            "user": "goshailesh@gmail.com",
            "asset": "INR",
            "available": "0.05",
            "freeze": "0"
        },
        {
            "user": "varun.juneja@gmail.com",
            "asset": "INR",
            "available": "0.01",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "0.00015921",
            "freeze": "0"
        },
        {
            "user": "sanjeevsharmaddn@gmail.com",
            "asset": "INR",
            "available": "0.28",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "0.00001665",
            "freeze": "0"
        },
        {
            "user": "smashing_amit2005@yahoo.com",
            "asset": "LTC",
            "available": "0e-8",
            "freeze": "0"
        },
        {
            "user": "mayurbtc0312@gmail.com",
            "asset": "INR",
            "available": "90",
            "freeze": "0"
        },
        {
            "user": "sureshvenna9@gmail.com",
            "asset": "USDT",
            "available": "0.02705079",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "2.7e-7",
            "freeze": "0"
        },
        {
            "user": "manojdbms@gmail.com",
            "asset": "INR",
            "available": "0.25",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "6.0e-7",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "8.2e-7",
            "freeze": "0"
        },
        {
            "user": "yasvand94@gmail.com",
            "asset": "USDT",
            "available": "12.23548",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "INR",
            "available": "0.42",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "0.0012475",
            "freeze": "0"
        },
        {
            "user": "tamiltechjunction@gmail.com",
            "asset": "LTC",
            "available": "0.03671541",
            "freeze": "0"
        },
        {
            "user": "dcvetri@gmail.com",
            "asset": "INR",
            "available": "0.69",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "LTC",
            "available": "1.8e-7",
            "freeze": "0"
        },
        {
            "user": "ramdasse.bas@gmail.com",
            "asset": "INR",
            "available": "0.82",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "0.00001396",
            "freeze": "0"
        },
        {
            "user": "marshal.nagpal@gmail.com",
            "asset": "INR",
            "available": "6.01",
            "freeze": "0"
        },
        {
            "user": "pjat5613@gmail.com",
            "asset": "INR",
            "available": "0.09",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "LTC",
            "available": "0e-8",
            "freeze": "0"
        },
        {
            "user": "saleemlala95@gmail.com",
            "asset": "INR",
            "available": "9.62",
            "freeze": "0"
        },
        {
            "user": "reachvignesh@outlook.com",
            "asset": "INR",
            "available": "395.97",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "LTC",
            "available": "0.6986",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "0.00996902",
            "freeze": "0"
        },
        {
            "user": "ganeshsonar62@gmail.com",
            "asset": "USDT",
            "available": "0.00465568",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "7.4e-7",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "DASH",
            "available": "2.3e-7",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "0.00000113",
            "freeze": "0"
        },
        {
            "user": "saanthamanir@gmail.com",
            "asset": "INR",
            "available": "43.85",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "DASH",
            "available": "0.01996",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "0.0011976",
            "freeze": "0"
        },
        {
            "user": "manoj_kumar2797@yahoo.com",
            "asset": "ETH",
            "available": "1.4e-7",
            "freeze": "0"
        },
        {
            "user": "mkapresents@gmail.com",
            "asset": "INR",
            "available": "0.57",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "LTC",
            "available": "6.6e-7",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "8.3e-7",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "0.00003748",
            "freeze": "0"
        },
        {
            "user": "maheswaran_05@yahoo.co.in",
            "asset": "ETH",
            "available": "0.000091",
            "freeze": "0"
        },
        {
            "user": "vinothm14@gmail.com",
            "asset": "ETH",
            "available": "7.0e-7",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "DASH",
            "available": "0.00006164",
            "freeze": "0"
        },
        {
            "user": "dhayakirubakaran@gmail.com",
            "asset": "INR",
            "available": "0.83",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "0.04009312",
            "freeze": "0"
        },
        {
            "user": "shashwatjain.id@gmail.com",
            "asset": "BTC",
            "available": "0.001113",
            "freeze": "0"
        },
        {
            "user": "jebasingh1995@yahoo.com",
            "asset": "USDT",
            "available": "0.00035309",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "INR",
            "available": "0.01",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "2.0e-7",
            "freeze": "0"
        },
        {
            "user": "ryanberkeley@gmail.com",
            "asset": "INR",
            "available": "100",
            "freeze": "0"
        },
        {
            "user": "anilchoudhary.crypto@gmail.com",
            "asset": "INR",
            "available": "0.94",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "9.6e-7",
            "freeze": "0"
        },
        {
            "user": "pixelsnapshot@gmail.com",
            "asset": "USDT",
            "available": "2.5e-7",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "INR",
            "available": "0.01",
            "freeze": "0"
        },
        {
            "user": "shashank@bandari.in",
            "asset": "INR",
            "available": "0.01",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "LTC",
            "available": "0.0998",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "0.11478596",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "0.000998",
            "freeze": "0"
        },
        {
            "user": "balamuruganpandi1993@gmail.com",
            "asset": "INR",
            "available": "90",
            "freeze": "0"
        },
        {
            "user": "shahadil@gmail.com",
            "asset": "BTC",
            "available": "9e-8",
            "freeze": "0"
        },
        {
            "user": "manjeshjha@gmail.com",
            "asset": "INR",
            "available": "100",
            "freeze": "0"
        },
        {
            "user": "jignesh.v111333@gmail.com",
            "asset": "INR",
            "available": "2699.36",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "LTC",
            "available": "0.00171436",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "0.00838149",
            "freeze": "0"
        },
        {
            "user": "karthikiv@hotmail.com",
            "asset": "BTC",
            "available": "0.007531",
            "freeze": "0"
        },
        {
            "user": "dnsh87@gmail.com",
            "asset": "USDT",
            "available": "5.7e-7",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "INR",
            "available": "0.03",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "6.7e-7",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "0e-8",
            "freeze": "0"
        },
        {
            "user": "muruganece28@gmail.com",
            "asset": "INR",
            "available": "17.07",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "LTC",
            "available": "0.00004086",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "2.1e-7",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "DASH",
            "available": "1.7e-7",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "3.1e-7",
            "freeze": "0"
        },
        {
            "user": "emuthu832@gmail.com",
            "asset": "INR",
            "available": "100",
            "freeze": "0"
        },
        {
            "user": "umavaishnav2020@gmail.com",
            "asset": "USDT",
            "available": "0.00010315",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "INR",
            "available": "85.79",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "3.9e-7",
            "freeze": "0"
        },
        {
            "user": "sthshkumar45@gmail.com",
            "asset": "LTC",
            "available": "0.002793",
            "freeze": "0"
        },
        {
            "user": "pkamble907@gmail.com",
            "asset": "INR",
            "available": "100",
            "freeze": "0"
        },
        {
            "user": "manjunathp848@gmail.com",
            "asset": "USDT",
            "available": "0.0070002",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "INR",
            "available": "2.4",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "8.3e-7",
            "freeze": "0"
        },
        {
            "user": "raji.190617@gmail.com",
            "asset": "INR",
            "available": "1.31",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "0.00149201",
            "freeze": "0"
        },
        {
            "user": "rajusingh2003@gmail.com",
            "asset": "INR",
            "available": "0.54",
            "freeze": "0"
        },
        {
            "user": "mayav0824@gmail.com",
            "asset": "INR",
            "available": "0.01",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "0e-8",
            "freeze": "0"
        },
        {
            "user": "suniljose@ymail.com",
            "asset": "INR",
            "available": "2.01",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "0.00000124",
            "freeze": "0"
        },
        {
            "user": "amog7179@gmail.com",
            "asset": "INR",
            "available": "100",
            "freeze": "0"
        },
        {
            "user": "parwezmansuri@gmail.com",
            "asset": "LTC",
            "available": "0.00004509",
            "freeze": "0"
        },
        {
            "user": "raja.29@outlook.com",
            "asset": "ETH",
            "available": "0.00001471",
            "freeze": "0"
        },
        {
            "user": "prasada.prasih.hr@gmail.com",
            "asset": "USDT",
            "available": "0.00020474",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "INR",
            "available": "11.51",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "LTC",
            "available": "0.00003078",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "0.00007242",
            "freeze": "0"
        },
        {
            "user": "tarakant197@gmail.com",
            "asset": "BTC",
            "available": "0e-8",
            "freeze": "0.000001"
        },
        {
            "user": "amit.chaurasia88@yahoo.com",
            "asset": "ETH",
            "available": "0e-8",
            "freeze": "0"
        },
        {
            "user": "santhosam001@gmail.com",
            "asset": "INR",
            "available": "140",
            "freeze": "0"
        },
        {
            "user": "shubham.kasera0728@gmail.com",
            "asset": "INR",
            "available": "0.9",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "LTC",
            "available": "9.7e-7",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "4.2e-7",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "DASH",
            "available": "9e-8",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "4.7e-7",
            "freeze": "0"
        },
        {
            "user": "ankit.dhanopia@gmail.com",
            "asset": "INR",
            "available": "0.22",
            "freeze": "0"
        },
        {
            "user": "parikshitsharma777@gmail.com",
            "asset": "USDT",
            "available": "0.00462",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "INR",
            "available": "22.42",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "0e-8",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "0e-8",
            "freeze": "0"
        },
        {
            "user": "sudharmech92@gmail.com",
            "asset": "INR",
            "available": "3.53",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "0.00000768",
            "freeze": "0"
        },
        {
            "user": "harsh.22.7@gmail.com",
            "asset": "INR",
            "available": "0.74",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "LTC",
            "available": "1.5e-7",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "8.5e-7",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "DASH",
            "available": "0.00008148",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "9.5e-7",
            "freeze": "0"
        },
        {
            "user": "tanmaygarg12@gmail.com",
            "asset": "LTC",
            "available": "0e-8",
            "freeze": "0"
        },
        {
            "user": "dhanurbala@gmail.com",
            "asset": "INR",
            "available": "0.8",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "0.00004244",
            "freeze": "0"
        },
        {
            "user": "thilak.simtha@gmail.com",
            "asset": "ETH",
            "available": "7e-8",
            "freeze": "0"
        },
        {
            "user": "fazilmohamed2208@gmail.com",
            "asset": "LTC",
            "available": "2.5e-7",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "9.4e-7",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "DASH",
            "available": "0e-8",
            "freeze": "0"
        },
        {
            "user": "harryboss07@gmail.com",
            "asset": "INR",
            "available": "109.47",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "0.00004",
            "freeze": "0"
        },
        {
            "user": "hussainexpo@gmail.com",
            "asset": "INR",
            "available": "10.01",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "8.8e-7",
            "freeze": "0"
        },
        {
            "user": "zoher.btc@gmail.com",
            "asset": "INR",
            "available": "0.01",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "0.0000097",
            "freeze": "0"
        },
        {
            "user": "rahulbasu2013@gmail.com",
            "asset": "USDT",
            "available": "0.000142",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "LTC",
            "available": "0.00005921",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "5.0e-7",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "DASH",
            "available": "9.7e-7",
            "freeze": "0"
        },
        {
            "user": "jjrmbbs@gmail.com",
            "asset": "INR",
            "available": "66.1",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "LTC",
            "available": "0e-8",
            "freeze": "0"
        },
        {
            "user": "aryan111sujeet@gmail.com",
            "asset": "LTC",
            "available": "0e-8",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "0e-8",
            "freeze": "0"
        },
        {
            "user": "mukul.singh3@icloud.com",
            "asset": "USDT",
            "available": "0e-8",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "INR",
            "available": "13.12",
            "freeze": "0"
        },
        {
            "user": "saleem2931999@gmail.com",
            "asset": "ETH",
            "available": "0.00277752",
            "freeze": "0"
        },
        {
            "user": "teerkhela@gmail.com",
            "asset": "LTC",
            "available": "3e-8",
            "freeze": "0"
        },
        {
            "user": "santhosamg@gmail.com",
            "asset": "USDT",
            "available": "1.1e-7",
            "freeze": "0"
        },
        {
            "user": "m.lilly8089@gmail.com",
            "asset": "INR",
            "available": "118.58",
            "freeze": "0"
        },
        {
            "user": "manish210784@gmail.com",
            "asset": "INR",
            "available": "92.72",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "0.00001",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "0e-8",
            "freeze": "0"
        },
        {
            "user": "thiruppatigovinda@gmail.com",
            "asset": "INR",
            "available": "0.01",
            "freeze": "0"
        },
        {
            "user": "ondkd1@gmail.com",
            "asset": "ETH",
            "available": "9.6e-7",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "5.2e-7",
            "freeze": "0"
        },
        {
            "user": "randhirkumarbarnwal@gmail.com",
            "asset": "INR",
            "available": "82.38",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "0e-8",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "0e-8",
            "freeze": "0"
        },
        {
            "user": "ajithyadav406@gmail.com",
            "asset": "INR",
            "available": "100",
            "freeze": "0"
        },
        {
            "user": "sanketsaxena007@gmail.com",
            "asset": "INR",
            "available": "4.46",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "0e-8",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "0.000001",
            "freeze": "0"
        },
        {
            "user": "rkshreeram@protonmail.com",
            "asset": "INR",
            "available": "4.73",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "LTC",
            "available": "0e-8",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "9.6e-7",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "DASH",
            "available": "0e-8",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "6.2e-7",
            "freeze": "0"
        },
        {
            "user": "sdm198421@gmail.com",
            "asset": "INR",
            "available": "0.56",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "LTC",
            "available": "0.00009474",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "7.7e-7",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "DASH",
            "available": "0.00000196",
            "freeze": "0"
        },
        {
            "user": "subhadipghorai@gmail.com",
            "asset": "INR",
            "available": "0.4",
            "freeze": "0"
        },
        {
            "user": "vinosuryamts@outlook.com",
            "asset": "ETH",
            "available": "0.0434",
            "freeze": "0"
        },
        {
            "user": "manisaswath@gmail.com",
            "asset": "INR",
            "available": "15.41",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "0.00001277",
            "freeze": "0"
        },
        {
            "user": "ziau09@gmail.com",
            "asset": "ETH",
            "available": "2.7e-7",
            "freeze": "0"
        },
        {
            "user": "soulscience108@gmail.com",
            "asset": "LTC",
            "available": "0e-8",
            "freeze": "0"
        },
        {
            "user": "mahajan.yogesh11@gmail.com",
            "asset": "INR",
            "available": "17.01",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "0.000998",
            "freeze": "0"
        },
        {
            "user": "murdima02@gmail.com",
            "asset": "INR",
            "available": "0.77",
            "freeze": "0"
        },
        {
            "user": "prakashindiaaa@gmail.com",
            "asset": "LTC",
            "available": "0.00003669",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "0.00006489",
            "freeze": "0"
        },
        {
            "user": "rajeevahlawat84@gmail.com",
            "asset": "ETH",
            "available": "2e-8",
            "freeze": "0"
        },
        {
            "user": "tstgopal@gmail.com",
            "asset": "DASH",
            "available": "0.060515",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "0.0001",
            "freeze": "0"
        },
        {
            "user": "ganeshslm85@gmail.com",
            "asset": "LTC",
            "available": "0.02333765",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "8.6e-7",
            "freeze": "0"
        },
        {
            "user": "creativesrini@yahoo.com",
            "asset": "INR",
            "available": "11.06",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "LTC",
            "available": "0.26946",
            "freeze": "0"
        },
        {
            "user": "cryptogram1402@gmail.com",
            "asset": "INR",
            "available": "0.34",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "0e-8",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "0e-8",
            "freeze": "0"
        },
        {
            "user": "rishiparikh1976@rediffmail.com",
            "asset": "ETH",
            "available": "0e-8",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "9.9e-7",
            "freeze": "0"
        },
        {
            "user": "rajat.krbhadani@gmail.com",
            "asset": "ETH",
            "available": "0.00000759",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "0.00000151",
            "freeze": "0"
        },
        {
            "user": "kamal.sondhi61@gmail.com",
            "asset": "INR",
            "available": "0.64",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "0.00009245",
            "freeze": "0"
        },
        {
            "user": "adamcherai1@gmail.com",
            "asset": "INR",
            "available": "0.02",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "ETH",
            "available": "0.00005504",
            "freeze": "0"
        },
        {
            "user": "vision3636@gmail.com",
            "asset": "INR",
            "available": "174.19",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "0.00682483",
            "freeze": "0"
        },
        {
            "user": "harish.bj@live.com",
            "asset": "INR",
            "available": "10",
            "freeze": "0"
        },
        {
            "user": "arokiaraj.01@hotmail.com",
            "asset": "USDT",
            "available": "0.00166808",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "INR",
            "available": "0.19",
            "freeze": "0"
        },
        {
            "user": "",
            "asset": "BTC",
            "available": "0.00166693",
            "freeze": "0"
        },
        {
            "user": "ashray.venkat102@gmail.com",
            "asset": "USDT",
            "available": "0.261263",
            "freeze": "0"
        },
        {
            "user": "reachsudheerkumr@gmail.com",
            "asset": "ETH",
            "available": "0.00003512",
            "freeze": "0"
        }
    
]

var data = '';
for (var i = 0; i < jsn.length; i++) {
    data = data + jsn[i].user + '\t' + jsn[i].asset + '\t' + jsn[i].available + '\t' + jsn[i].freeze + '\n';
}
fs.appendFile('New_Bitpolo_balance.xls', data, (err) => {
    if (err) throw err;
    console.log('File created');
});
