export interface GeoLocalBody {
  name: string;
  authorityId: string;
}

export interface GeoDistrict {
  name: string;
  localBodies: GeoLocalBody[];
}

export interface GeoState {
  name: string;
  districts: GeoDistrict[];
}

export const geographicHierarchy: GeoState[] = [
  {
    name: 'Andaman and Nicobar Islands',
    districts: [
      {
        name: 'South Andaman',
        localBodies: [
          { name: 'Port Blair Municipal Council (PBMC)', authorityId: 'morth' },
          { name: 'South Andaman Zilla Parishad', authorityId: 'morth' },
          { name: 'Andaman Public Works Department (APWD)', authorityId: 'morth' }
        ]
      },
      {
        name: 'North and Middle Andaman',
        localBodies: [
          { name: 'Mayabunder Zilla Parishad', authorityId: 'morth' },
          { name: 'Diglipur Panchayat Samiti', authorityId: 'morth' },
          { name: 'Rangat Town Panchayat', authorityId: 'morth' }
        ]
      },
      {
        name: 'Nicobar',
        localBodies: [
          { name: 'Car Nicobar Tribal Council', authorityId: 'morth' },
          { name: 'Nancowry Island Council', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Andhra Pradesh',
    districts: [
      {
        name: 'Visakhapatnam',
        localBodies: [
          { name: 'Greater Visakhapatnam Municipal Corporation (GVMC)', authorityId: 'morth' },
          { name: 'Visakhapatnam Metropolitan Region Development Authority (VMRDA)', authorityId: 'morth' },
          { name: 'Visakhapatnam Smart City Corporation', authorityId: 'morth' }
        ]
      },
      {
        name: 'NTR / Vijayawada',
        localBodies: [
          { name: 'Vijayawada Municipal Corporation (VMC)', authorityId: 'morth' },
          { name: 'AP Capital Region Development Authority (APCRDA)', authorityId: 'morth' },
          { name: 'NTR District Zilla Praja Parishad', authorityId: 'morth' }
        ]
      },
      {
        name: 'Guntur',
        localBodies: [
          { name: 'Guntur Municipal Corporation (GMC)', authorityId: 'morth' },
          { name: 'Mangalagiri Tadepalli Municipal Corporation (MTMC)', authorityId: 'morth' },
          { name: 'Guntur Urban Development Authority', authorityId: 'morth' }
        ]
      },
      {
        name: 'Tirupati',
        localBodies: [
          { name: 'Municipal Corporation of Tirupati (MCT)', authorityId: 'morth' },
          { name: 'Tirupati Urban Development Authority (TUDA)', authorityId: 'morth' },
          { name: 'Srikalahasti Municipality', authorityId: 'morth' }
        ]
      },
      {
        name: 'Kurnool',
        localBodies: [
          { name: 'Kurnool Municipal Corporation (KMC)', authorityId: 'morth' },
          { name: 'Kurnool Urban Development Authority (KUDA)', authorityId: 'morth' },
          { name: 'Adoni Municipality', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Arunachal Pradesh',
    districts: [
      {
        name: 'Papum Pare (Itanagar)',
        localBodies: [
          { name: 'Itanagar Municipal Corporation (IMC)', authorityId: 'morth' },
          { name: 'Naharlagun Town Planning Authority', authorityId: 'morth' },
          { name: 'Papum Pare Zilla Parishad', authorityId: 'morth' }
        ]
      },
      {
        name: 'Tawang',
        localBodies: [
          { name: 'Tawang Town Planning & Urban Local Body', authorityId: 'morth' },
          { name: 'Tawang Zilla Parishad', authorityId: 'morth' }
        ]
      },
      {
        name: 'East Siang (Pasighat)',
        localBodies: [
          { name: 'Pasighat Municipal Council (PMC)', authorityId: 'morth' },
          { name: 'Pasighat Smart City Development Corporation', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Assam',
    districts: [
      {
        name: 'Kamrup Metropolitan (Guwahati)',
        localBodies: [
          { name: 'Guwahati Municipal Corporation (GMC)', authorityId: 'morth' },
          { name: 'Guwahati Metropolitan Development Authority (GMDA)', authorityId: 'morth' },
          { name: 'Guwahati Smart City Limited', authorityId: 'morth' }
        ]
      },
      {
        name: 'Dibrugarh',
        localBodies: [
          { name: 'Dibrugarh Municipal Board', authorityId: 'morth' },
          { name: 'Dibrugarh Development Authority', authorityId: 'morth' },
          { name: 'Dibrugarh Zilla Parishad', authorityId: 'morth' }
        ]
      },
      {
        name: 'Cachar (Silchar)',
        localBodies: [
          { name: 'Silchar Municipal Board', authorityId: 'morth' },
          { name: 'Silchar Development Authority', authorityId: 'morth' },
          { name: 'Cachar Zilla Parishad', authorityId: 'morth' }
        ]
      },
      {
        name: 'Jorhat',
        localBodies: [
          { name: 'Jorhat Municipal Board', authorityId: 'morth' },
          { name: 'Jorhat Zilla Parishad', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Bihar',
    districts: [
      {
        name: 'Patna',
        localBodies: [
          { name: 'Patna Municipal Corporation (PMC)', authorityId: 'morth' },
          { name: 'Patna Metropolitan Area Authority (PMAA)', authorityId: 'morth' },
          { name: 'Danapur Nizamat Nagar Parishad', authorityId: 'morth' },
          { name: 'Patna Smart City Limited', authorityId: 'morth' }
        ]
      },
      {
        name: 'Gaya',
        localBodies: [
          { name: 'Gaya Municipal Corporation', authorityId: 'morth' },
          { name: 'Bodhgaya Nagar Panchayat', authorityId: 'morth' },
          { name: 'Gaya Zilla Parishad', authorityId: 'morth' }
        ]
      },
      {
        name: 'Muzaffarpur',
        localBodies: [
          { name: 'Muzaffarpur Municipal Corporation', authorityId: 'morth' },
          { name: 'Muzaffarpur Smart City SPV', authorityId: 'morth' },
          { name: 'Muzaffarpur Zilla Parishad', authorityId: 'morth' }
        ]
      },
      {
        name: 'Bhagalpur',
        localBodies: [
          { name: 'Bhagalpur Municipal Corporation (BMC)', authorityId: 'morth' },
          { name: 'Bhagalpur Smart City Limited', authorityId: 'morth' },
          { name: 'Bhagalpur Zilla Parishad', authorityId: 'morth' }
        ]
      },
      {
        name: 'Darbhanga',
        localBodies: [
          { name: 'Darbhanga Municipal Corporation', authorityId: 'morth' },
          { name: 'Darbhanga Zilla Parishad', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Chandigarh',
    districts: [
      {
        name: 'Chandigarh',
        localBodies: [
          { name: 'Municipal Corporation of Chandigarh (MCC)', authorityId: 'morth' },
          { name: 'Chandigarh Housing Board (CHB)', authorityId: 'morth' },
          { name: 'Chandigarh Smart City Limited', authorityId: 'morth' },
          { name: 'Chandigarh Administration Engineering Department', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Chhattisgarh',
    districts: [
      {
        name: 'Raipur',
        localBodies: [
          { name: 'Raipur Municipal Corporation (RMC)', authorityId: 'morth' },
          { name: 'Raipur Development Authority (RDA)', authorityId: 'morth' },
          { name: 'Nava Raipur Atal Nagar Development Authority (NRDA)', authorityId: 'morth' },
          { name: 'Raipur Smart City Limited', authorityId: 'morth' }
        ]
      },
      {
        name: 'Durg (Bhilai)',
        localBodies: [
          { name: 'Bhilai Municipal Corporation', authorityId: 'morth' },
          { name: 'Durg Municipal Corporation', authorityId: 'morth' },
          { name: 'Risali Municipal Corporation', authorityId: 'morth' }
        ]
      },
      {
        name: 'Bilaspur',
        localBodies: [
          { name: 'Bilaspur Municipal Corporation', authorityId: 'morth' },
          { name: 'Bilaspur Smart City Limited', authorityId: 'morth' },
          { name: 'Bilaspur Zilla Panchayat', authorityId: 'morth' }
        ]
      },
      {
        name: 'Korba',
        localBodies: [
          { name: 'Korba Municipal Corporation', authorityId: 'morth' },
          { name: 'Korba Zilla Panchayat', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Dadra and Nagar Haveli and Daman and Diu',
    districts: [
      {
        name: 'Daman',
        localBodies: [
          { name: 'Daman Municipal Council (DMC)', authorityId: 'morth' },
          { name: 'Daman District Panchayat', authorityId: 'morth' }
        ]
      },
      {
        name: 'Diu',
        localBodies: [
          { name: 'Diu Municipal Council', authorityId: 'morth' },
          { name: 'Diu District Panchayat', authorityId: 'morth' }
        ]
      },
      {
        name: 'Dadra and Nagar Haveli (Silvassa)',
        localBodies: [
          { name: 'Silvassa Municipal Council (SMC)', authorityId: 'morth' },
          { name: 'Dadra and Nagar Haveli District Panchayat', authorityId: 'morth' },
          { name: 'Silvassa Smart City Limited', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Delhi',
    districts: [
      {
        name: 'New Delhi',
        localBodies: [
          { name: 'New Delhi Municipal Council (NDMC)', authorityId: 'morth' },
          { name: 'Delhi Development Authority (DDA)', authorityId: 'morth' },
          { name: 'Delhi Jal Board (DJB)', authorityId: 'djb' },
          { name: 'Delhi Cantt Board', authorityId: 'morth' }
        ]
      },
      {
        name: 'North Delhi',
        localBodies: [
          { name: 'Municipal Corporation of Delhi (Civil Lines Zone)', authorityId: 'morth' },
          { name: 'Municipal Corporation of Delhi (Narela Zone)', authorityId: 'morth' },
          { name: 'Delhi Urban Shelter Improvement Board (DUSIB)', authorityId: 'morth' }
        ]
      },
      {
        name: 'South Delhi',
        localBodies: [
          { name: 'Municipal Corporation of Delhi (South Zone)', authorityId: 'morth' },
          { name: 'Municipal Corporation of Delhi (Central Zone)', authorityId: 'morth' },
          { name: 'Delhi Development Authority (South Zone)', authorityId: 'morth' }
        ]
      },
      {
        name: 'East Delhi',
        localBodies: [
          { name: 'Municipal Corporation of Delhi (Shahdara South Zone)', authorityId: 'morth' },
          { name: 'Municipal Corporation of Delhi (Shahdara North Zone)', authorityId: 'morth' },
          { name: 'Trans-Yamuna Area Development Board', authorityId: 'morth' }
        ]
      },
      {
        name: 'West Delhi',
        localBodies: [
          { name: 'Municipal Corporation of Delhi (West Zone)', authorityId: 'morth' },
          { name: 'Municipal Corporation of Delhi (Najafgarh Zone)', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Goa',
    districts: [
      {
        name: 'North Goa (Panaji)',
        localBodies: [
          { name: 'Corporation of the City of Panaji (CCP)', authorityId: 'morth' },
          { name: 'Mapusa Municipal Council', authorityId: 'morth' },
          { name: 'North Goa Zilla Panchayat', authorityId: 'morth' },
          { name: 'Imagine Panaji Smart City Development Limited', authorityId: 'morth' }
        ]
      },
      {
        name: 'South Goa (Margao)',
        localBodies: [
          { name: 'Margao Municipal Council (MMC)', authorityId: 'morth' },
          { name: 'Mormugao Municipal Council (Vasco)', authorityId: 'morth' },
          { name: 'South Goa Zilla Panchayat', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Gujarat',
    districts: [
      {
        name: 'Ahmedabad',
        localBodies: [
          { name: 'Ahmedabad Municipal Corporation (AMC)', authorityId: 'morth' },
          { name: 'Ahmedabad Urban Development Authority (AUDA)', authorityId: 'morth' },
          { name: 'Sabarmati Riverfront Development Corporation', authorityId: 'morth' }
        ]
      },
      {
        name: 'Surat',
        localBodies: [
          { name: 'Surat Municipal Corporation (SMC)', authorityId: 'morth' },
          { name: 'Surat Urban Development Authority (SUDA)', authorityId: 'morth' },
          { name: 'Surat Smart City Development Limited', authorityId: 'morth' }
        ]
      },
      {
        name: 'Vadodara',
        localBodies: [
          { name: 'Vadodara Municipal Corporation (VMC)', authorityId: 'morth' },
          { name: 'Vadodara Urban Development Authority (VUDA)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Rajkot',
        localBodies: [
          { name: 'Rajkot Municipal Corporation (RMC)', authorityId: 'morth' },
          { name: 'Rajkot Urban Development Authority (RUDA)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Gandhinagar',
        localBodies: [
          { name: 'Gandhinagar Municipal Corporation (GMC)', authorityId: 'morth' },
          { name: 'Gandhinagar Urban Development Authority (GUDA)', authorityId: 'morth' },
          { name: 'GIFT City Urban Development Authority', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Haryana',
    districts: [
      {
        name: 'Gurugram',
        localBodies: [
          { name: 'Municipal Corporation of Gurugram (MCG)', authorityId: 'morth' },
          { name: 'Gurugram Metropolitan Development Authority (GMDA)', authorityId: 'morth' },
          { name: 'Municipal Corporation of Manesar (MCM)', authorityId: 'morth' },
          { name: 'Haryana Shehri Vikas Pradhikaran (HSVP Gurugram)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Faridabad',
        localBodies: [
          { name: 'Municipal Corporation of Faridabad (MCF)', authorityId: 'morth' },
          { name: 'Faridabad Metropolitan Development Authority (FMDA)', authorityId: 'morth' },
          { name: 'Faridabad Smart City Limited', authorityId: 'morth' }
        ]
      },
      {
        name: 'Panchkula',
        localBodies: [
          { name: 'Municipal Corporation of Panchkula (MCP)', authorityId: 'morth' },
          { name: 'Panchkula Metropolitan Development Authority (PMDA)', authorityId: 'morth' },
          { name: 'HSVP Panchkula Zone', authorityId: 'morth' }
        ]
      },
      {
        name: 'Karnal',
        localBodies: [
          { name: 'Municipal Corporation of Karnal', authorityId: 'morth' },
          { name: 'Karnal Smart City Limited', authorityId: 'morth' }
        ]
      },
      {
        name: 'Ambala',
        localBodies: [
          { name: 'Municipal Corporation of Ambala', authorityId: 'morth' },
          { name: 'Ambala Cantt Municipal Council', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Himachal Pradesh',
    districts: [
      {
        name: 'Shimla',
        localBodies: [
          { name: 'Shimla Municipal Corporation (SMC)', authorityId: 'morth' },
          { name: 'Shimla Jal Prabandhan Nigam Limited (SJPNL)', authorityId: 'morth' },
          { name: 'Shimla Smart City Limited', authorityId: 'morth' },
          { name: 'Himachal Pradesh Housing and Urban Development Authority (HIMUDA)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Kangra (Dharamshala)',
        localBodies: [
          { name: 'Dharamshala Municipal Corporation', authorityId: 'morth' },
          { name: 'Dharamshala Smart City Limited', authorityId: 'morth' },
          { name: 'Kangra Zilla Parishad', authorityId: 'morth' }
        ]
      },
      {
        name: 'Mandi',
        localBodies: [
          { name: 'Mandi Municipal Corporation', authorityId: 'morth' },
          { name: 'Mandi Zilla Parishad', authorityId: 'morth' }
        ]
      },
      {
        name: 'Solan',
        localBodies: [
          { name: 'Solan Municipal Corporation', authorityId: 'morth' },
          { name: 'Baddi Barotiwala Nalagarh Development Authority (BBNDA)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Kullu (Manali)',
        localBodies: [
          { name: 'Kullu Municipal Council', authorityId: 'morth' },
          { name: 'Manali Nagar Parishad', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Jammu and Kashmir',
    districts: [
      {
        name: 'Srinagar',
        localBodies: [
          { name: 'Srinagar Municipal Corporation (SMC)', authorityId: 'morth' },
          { name: 'Srinagar Development Authority (SDA)', authorityId: 'morth' },
          { name: 'Srinagar Smart City Limited', authorityId: 'morth' }
        ]
      },
      {
        name: 'Jammu',
        localBodies: [
          { name: 'Jammu Municipal Corporation (JMC)', authorityId: 'morth' },
          { name: 'Jammu Development Authority (JDA)', authorityId: 'morth' },
          { name: 'Jammu Smart City Limited', authorityId: 'morth' }
        ]
      },
      {
        name: 'Anantnag',
        localBodies: [
          { name: 'Anantnag Municipal Council', authorityId: 'morth' },
          { name: 'Anantnag Development Authority', authorityId: 'morth' }
        ]
      },
      {
        name: 'Baramulla',
        localBodies: [
          { name: 'Baramulla Municipal Council', authorityId: 'morth' },
          { name: 'Gulmarg Development Authority', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Jharkhand',
    districts: [
      {
        name: 'Ranchi',
        localBodies: [
          { name: 'Ranchi Municipal Corporation (RMC)', authorityId: 'morth' },
          { name: 'Ranchi Regional Development Authority (RRDA)', authorityId: 'morth' },
          { name: 'Ranchi Smart City Corporation Limited', authorityId: 'morth' }
        ]
      },
      {
        name: 'East Singhbhum (Jamshedpur)',
        localBodies: [
          { name: 'Jamshedpur Notified Area Committee (JNAC)', authorityId: 'morth' },
          { name: 'Mango Municipal Corporation', authorityId: 'morth' },
          { name: 'Jugsalai Municipal Council', authorityId: 'morth' }
        ]
      },
      {
        name: 'Dhanbad',
        localBodies: [
          { name: 'Dhanbad Municipal Corporation (DMC)', authorityId: 'morth' },
          { name: 'Mineral Area Development Authority (MADA)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Bokaro',
        localBodies: [
          { name: 'Chas Municipal Corporation', authorityId: 'morth' },
          { name: 'Bokaro Steel City Town Administration', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Karnataka',
    districts: [
      {
        name: 'Bengaluru Urban',
        localBodies: [
          { name: 'Bruhat Bengaluru Mahanagara Palike (BBMP)', authorityId: 'bbmp' },
          { name: 'Bangalore Development Authority (BDA)', authorityId: 'morth' },
          { name: 'Bangalore Water Supply and Sewerage Board (BWSSB)', authorityId: 'morth' },
          { name: 'Bangalore Metropolitan Region Development Authority (BMRDA)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Mysuru',
        localBodies: [
          { name: 'Mysuru City Corporation (MCC)', authorityId: 'morth' },
          { name: 'Mysuru Urban Development Authority (MUDA)', authorityId: 'morth' },
          { name: 'Mysuru Zilla Panchayat', authorityId: 'morth' }
        ]
      },
      {
        name: 'Dharwad (Hubballi-Dharwad)',
        localBodies: [
          { name: 'Hubballi-Dharwad Municipal Corporation (HDMC)', authorityId: 'morth' },
          { name: 'Hubballi-Dharwad Urban Development Authority (HDUDA)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Dakshina Kannada (Mangaluru)',
        localBodies: [
          { name: 'Mangaluru City Corporation (MCC)', authorityId: 'morth' },
          { name: 'Mangaluru Urban Development Authority (MUDA)', authorityId: 'morth' },
          { name: 'Mangaluru Smart City Limited', authorityId: 'morth' }
        ]
      },
      {
        name: 'Belagavi',
        localBodies: [
          { name: 'City Corporation of Belagavi (CCB)', authorityId: 'morth' },
          { name: 'Belagavi Urban Development Authority (BUDA)', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Kerala',
    districts: [
      {
        name: 'Thiruvananthapuram',
        localBodies: [
          { name: 'Thiruvananthapuram Municipal Corporation (TMC)', authorityId: 'morth' },
          { name: 'Thiruvananthapuram Development Authority (TRIDA)', authorityId: 'morth' },
          { name: 'Smart City Thiruvananthapuram Limited', authorityId: 'morth' },
          { name: 'Kerala Water Authority (KWA)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Ernakulam (Kochi)',
        localBodies: [
          { name: 'Kochi Municipal Corporation (KMC)', authorityId: 'morth' },
          { name: 'Greater Cochin Development Authority (GCDA)', authorityId: 'morth' },
          { name: 'Cochin Smart Mission Limited (CSML)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Kozhikode',
        localBodies: [
          { name: 'Kozhikode Municipal Corporation', authorityId: 'morth' },
          { name: 'Calicut Development Authority', authorityId: 'morth' }
        ]
      },
      {
        name: 'Thrissur',
        localBodies: [
          { name: 'Thrissur Municipal Corporation', authorityId: 'morth' },
          { name: 'Thrissur Development Authority', authorityId: 'morth' }
        ]
      },
      {
        name: 'Kollam',
        localBodies: [
          { name: 'Kollam Municipal Corporation', authorityId: 'morth' },
          { name: 'Kollam Zilla Panchayat', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Ladakh',
    districts: [
      {
        name: 'Leh',
        localBodies: [
          { name: 'Leh Municipal Committee', authorityId: 'morth' },
          { name: 'Ladakh Autonomous Hill Development Council, Leh (LAHDC)', authorityId: 'morth' },
          { name: 'Public Works Department, Leh', authorityId: 'morth' }
        ]
      },
      {
        name: 'Kargil',
        localBodies: [
          { name: 'Kargil Municipal Committee', authorityId: 'morth' },
          { name: 'Ladakh Autonomous Hill Development Council, Kargil (LAHDC)', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Lakshadweep',
    districts: [
      {
        name: 'Lakshadweep (Kavaratti)',
        localBodies: [
          { name: 'Kavaratti Island Village (Dweep) Panchayat', authorityId: 'morth' },
          { name: 'Lakshadweep District Panchayat', authorityId: 'morth' },
          { name: 'Lakshadweep Public Works Department', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Madhya Pradesh',
    districts: [
      {
        name: 'Bhopal',
        localBodies: [
          { name: 'Bhopal Municipal Corporation (BMC)', authorityId: 'morth' },
          { name: 'Bhopal Development Authority (BDA)', authorityId: 'morth' },
          { name: 'Bhopal Smart City Development Corporation Limited', authorityId: 'morth' },
          { name: 'MP Housing & Infrastructure Development Board', authorityId: 'morth' }
        ]
      },
      {
        name: 'Indore',
        localBodies: [
          { name: 'Indore Municipal Corporation (IMC)', authorityId: 'morth' },
          { name: 'Indore Development Authority (IDA)', authorityId: 'morth' },
          { name: 'Indore Smart City Development Limited', authorityId: 'morth' }
        ]
      },
      {
        name: 'Jabalpur',
        localBodies: [
          { name: 'Jabalpur Municipal Corporation (JMC)', authorityId: 'morth' },
          { name: 'Jabalpur Development Authority (JDA)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Gwalior',
        localBodies: [
          { name: 'Gwalior Municipal Corporation (GMC)', authorityId: 'morth' },
          { name: 'Gwalior Development Authority (GDA)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Ujjain',
        localBodies: [
          { name: 'Ujjain Municipal Corporation (UMC)', authorityId: 'morth' },
          { name: 'Ujjain Development Authority (UDA)', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Maharashtra',
    districts: [
      {
        name: 'Mumbai City & Suburban',
        localBodies: [
          { name: 'Brihanmumbai Municipal Corporation (BMC)', authorityId: 'morth' },
          { name: 'Mumbai Metropolitan Region Development Authority (MMRDA)', authorityId: 'morth' },
          { name: 'Maharashtra Housing and Area Development Authority (MHADA)', authorityId: 'morth' },
          { name: 'Slum Rehabilitation Authority (SRA Mumbai)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Pune',
        localBodies: [
          { name: 'Pune Municipal Corporation (PMC)', authorityId: 'morth' },
          { name: 'Pimpri Chinchwad Municipal Corporation (PCMC)', authorityId: 'morth' },
          { name: 'Pune Metropolitan Region Development Authority (PMRDA)', authorityId: 'morth' },
          { name: 'Pune Smart City Development Corporation Limited', authorityId: 'morth' }
        ]
      },
      {
        name: 'Thane',
        localBodies: [
          { name: 'Thane Municipal Corporation (TMC)', authorityId: 'morth' },
          { name: 'Navi Mumbai Municipal Corporation (NMMC)', authorityId: 'morth' },
          { name: 'Kalyan Dombivli Municipal Corporation (KDMC)', authorityId: 'morth' },
          { name: 'Mira Bhayandar Municipal Corporation (MBMC)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Nagpur',
        localBodies: [
          { name: 'Nagpur Municipal Corporation (NMC)', authorityId: 'morth' },
          { name: 'Nagpur Improvement Trust (NIT)', authorityId: 'morth' },
          { name: 'Nagpur Metropolitan Region Development Authority (NMRDA)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Nashik',
        localBodies: [
          { name: 'Nashik Municipal Corporation (NMC)', authorityId: 'morth' },
          { name: 'Nashik Smart City Limited', authorityId: 'morth' }
        ]
      },
      {
        name: 'Chhatrapati Sambhaji Nagar (Aurangabad)',
        localBodies: [
          { name: 'Chhatrapati Sambhajinagar Municipal Corporation', authorityId: 'morth' },
          { name: 'CIDCO Aurangabad', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Manipur',
    districts: [
      {
        name: 'Imphal West',
        localBodies: [
          { name: 'Imphal Municipal Corporation (IMC)', authorityId: 'morth' },
          { name: 'Imphal Smart City Limited', authorityId: 'morth' },
          { name: 'Manipur Town Planning Department', authorityId: 'morth' }
        ]
      },
      {
        name: 'Imphal East',
        localBodies: [
          { name: 'Imphal East Zilla Parishad', authorityId: 'morth' },
          { name: 'Porompat Nagar Panchayat', authorityId: 'morth' }
        ]
      },
      {
        name: 'Churachandpur',
        localBodies: [
          { name: 'Churachandpur Autonomous District Council (ADC)', authorityId: 'morth' },
          { name: 'Churachandpur Town Committee', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Meghalaya',
    districts: [
      {
        name: 'East Khasi Hills (Shillong)',
        localBodies: [
          { name: 'Shillong Municipal Board (SMB)', authorityId: 'morth' },
          { name: 'Shillong Smart City Limited', authorityId: 'morth' },
          { name: 'Khasi Hills Autonomous District Council (KHADC)', authorityId: 'morth' },
          { name: 'Meghalaya Urban Development Authority (MUDA)', authorityId: 'morth' }
        ]
      },
      {
        name: 'West Garo Hills (Tura)',
        localBodies: [
          { name: 'Tura Municipal Board', authorityId: 'morth' },
          { name: 'Garo Hills Autonomous District Council (GHADC)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Ri-Bhoi (Nongpoh)',
        localBodies: [
          { name: 'Nongpoh Town Committee', authorityId: 'morth' },
          { name: 'Ri-Bhoi District Administration', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Mizoram',
    districts: [
      {
        name: 'Aizawl',
        localBodies: [
          { name: 'Aizawl Municipal Corporation (AMC)', authorityId: 'morth' },
          { name: 'Aizawl Smart City Limited', authorityId: 'morth' },
          { name: 'Mizoram Urban Development & Poverty Alleviation Department', authorityId: 'morth' }
        ]
      },
      {
        name: 'Lunglei',
        localBodies: [
          { name: 'Lunglei High Powered Committee', authorityId: 'morth' },
          { name: 'Lunglei Town Committee', authorityId: 'morth' }
        ]
      },
      {
        name: 'Champhai',
        localBodies: [
          { name: 'Champhai Town Committee', authorityId: 'morth' },
          { name: 'Champhai District Administration', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Nagaland',
    districts: [
      {
        name: 'Kohima',
        localBodies: [
          { name: 'Kohima Municipal Council (KMC)', authorityId: 'morth' },
          { name: 'Kohima Smart City Development Limited', authorityId: 'morth' },
          { name: 'Nagaland Urban Development Authority', authorityId: 'morth' }
        ]
      },
      {
        name: 'Dimapur',
        localBodies: [
          { name: 'Dimapur Municipal Council (DMC)', authorityId: 'morth' },
          { name: 'East Dimapur Town Council', authorityId: 'morth' }
        ]
      },
      {
        name: 'Mokokchung',
        localBodies: [
          { name: 'Mokokchung Municipal Council (MMC)', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Odisha',
    districts: [
      {
        name: 'Khordha (Bhubaneswar)',
        localBodies: [
          { name: 'Bhubaneswar Municipal Corporation (BMC)', authorityId: 'morth' },
          { name: 'Bhubaneswar Development Authority (BDA)', authorityId: 'morth' },
          { name: 'Bhubaneswar Smart City Limited', authorityId: 'morth' },
          { name: 'Water Corporation of Odisha (WATCO)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Cuttack',
        localBodies: [
          { name: 'Cuttack Municipal Corporation (CMC)', authorityId: 'morth' },
          { name: 'Cuttack Development Authority (CDA)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Ganjam (Berhampur)',
        localBodies: [
          { name: 'Berhampur Municipal Corporation (BeMC)', authorityId: 'morth' },
          { name: 'Berhampur Development Authority (BDA)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Sundargarh (Rourkela)',
        localBodies: [
          { name: 'Rourkela Municipal Corporation (RMC)', authorityId: 'morth' },
          { name: 'Rourkela Smart City Limited', authorityId: 'morth' }
        ]
      },
      {
        name: 'Puri',
        localBodies: [
          { name: 'Puri Municipality', authorityId: 'morth' },
          { name: 'Puri Konark Development Authority (PKDA)', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Puducherry',
    districts: [
      {
        name: 'Puducherry',
        localBodies: [
          { name: 'Puducherry Municipality', authorityId: 'morth' },
          { name: 'Oulgaret Municipal Council', authorityId: 'morth' },
          { name: 'Puducherry Smart City Development Limited', authorityId: 'morth' },
          { name: 'Puducherry Planning Authority (PPA)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Karaikal',
        localBodies: [
          { name: 'Karaikal Municipality', authorityId: 'morth' },
          { name: 'Karaikal Planning Authority', authorityId: 'morth' }
        ]
      },
      {
        name: 'Mahe',
        localBodies: [
          { name: 'Mahe Municipal Council', authorityId: 'morth' }
        ]
      },
      {
        name: 'Yanam',
        localBodies: [
          { name: 'Yanam Municipality', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Punjab',
    districts: [
      {
        name: 'Ludhiana',
        localBodies: [
          { name: 'Municipal Corporation Ludhiana (MCL)', authorityId: 'morth' },
          { name: 'Greater Ludhiana Area Development Authority (GLADA)', authorityId: 'morth' },
          { name: 'Ludhiana Smart City Limited', authorityId: 'morth' }
        ]
      },
      {
        name: 'Amritsar',
        localBodies: [
          { name: 'Municipal Corporation Amritsar (MCA)', authorityId: 'morth' },
          { name: 'Amritsar Development Authority (ADA)', authorityId: 'morth' },
          { name: 'Amritsar Smart City Limited', authorityId: 'morth' }
        ]
      },
      {
        name: 'Jalandhar',
        localBodies: [
          { name: 'Municipal Corporation Jalandhar (MCJ)', authorityId: 'morth' },
          { name: 'Jalandhar Development Authority (JDA)', authorityId: 'morth' },
          { name: 'Jalandhar Smart City Limited', authorityId: 'morth' }
        ]
      },
      {
        name: 'SAS Nagar (Mohali)',
        localBodies: [
          { name: 'Municipal Corporation SAS Nagar (Mohali)', authorityId: 'morth' },
          { name: 'Greater Mohali Area Development Authority (GMADA)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Patiala',
        localBodies: [
          { name: 'Municipal Corporation Patiala', authorityId: 'morth' },
          { name: 'Patiala Development Authority (PDA)', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Rajasthan',
    districts: [
      {
        name: 'Jaipur',
        localBodies: [
          { name: 'Jaipur Greater Municipal Corporation', authorityId: 'morth' },
          { name: 'Jaipur Heritage Municipal Corporation', authorityId: 'morth' },
          { name: 'Jaipur Development Authority (JDA)', authorityId: 'morth' },
          { name: 'Jaipur Smart City Limited', authorityId: 'morth' },
          { name: 'Rajasthan Housing Board (RHB Jaipur)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Jodhpur',
        localBodies: [
          { name: 'Jodhpur Municipal Corporation (North)', authorityId: 'morth' },
          { name: 'Jodhpur Municipal Corporation (South)', authorityId: 'morth' },
          { name: 'Jodhpur Development Authority (JDA)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Kota',
        localBodies: [
          { name: 'Kota Municipal Corporation (North)', authorityId: 'morth' },
          { name: 'Kota Municipal Corporation (South)', authorityId: 'morth' },
          { name: 'Urban Improvement Trust (UIT Kota)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Udaipur',
        localBodies: [
          { name: 'Udaipur Municipal Corporation (UMC)', authorityId: 'morth' },
          { name: 'Urban Improvement Trust (UIT Udaipur)', authorityId: 'morth' },
          { name: 'Udaipur Smart City Limited', authorityId: 'morth' }
        ]
      },
      {
        name: 'Bikaner',
        localBodies: [
          { name: 'Bikaner Municipal Corporation (BMC)', authorityId: 'morth' },
          { name: 'Urban Improvement Trust (UIT Bikaner)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Ajmer',
        localBodies: [
          { name: 'Ajmer Municipal Corporation (AMC)', authorityId: 'morth' },
          { name: 'Ajmer Development Authority (ADA)', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Sikkim',
    districts: [
      {
        name: 'East Sikkim (Gangtok)',
        localBodies: [
          { name: 'Gangtok Municipal Corporation (GMC)', authorityId: 'morth' },
          { name: 'Gangtok Smart City Development Limited', authorityId: 'morth' },
          { name: 'Urban Development and Housing Department (UDHD Sikkim)', authorityId: 'morth' }
        ]
      },
      {
        name: 'South Sikkim (Namchi)',
        localBodies: [
          { name: 'Namchi Municipal Council', authorityId: 'morth' },
          { name: 'Namchi Smart City Limited', authorityId: 'morth' }
        ]
      },
      {
        name: 'West Sikkim (Gyalshing)',
        localBodies: [
          { name: 'Gyalshing Municipal Council', authorityId: 'morth' }
        ]
      },
      {
        name: 'North Sikkim (Mangan)',
        localBodies: [
          { name: 'Mangan Nagar Panchayat', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Tamil Nadu',
    districts: [
      {
        name: 'Chennai',
        localBodies: [
          { name: 'Greater Chennai Corporation (GCC)', authorityId: 'morth' },
          { name: 'Chennai Metropolitan Development Authority (CMDA)', authorityId: 'morth' },
          { name: 'Chennai Metropolitan Water Supply and Sewerage Board (CMWSSB)', authorityId: 'morth' },
          { name: 'Tamil Nadu Housing Board (TNHB)', authorityId: 'morth' },
          { name: 'Chennai Smart City Limited', authorityId: 'morth' }
        ]
      },
      {
        name: 'Coimbatore',
        localBodies: [
          { name: 'Coimbatore City Municipal Corporation (CCMC)', authorityId: 'morth' },
          { name: 'Coimbatore Urban Development Authority (CUDA)', authorityId: 'morth' },
          { name: 'Coimbatore Smart City Limited', authorityId: 'morth' }
        ]
      },
      {
        name: 'Madurai',
        localBodies: [
          { name: 'Madurai Municipal Corporation', authorityId: 'morth' },
          { name: 'Madurai Smart City Limited', authorityId: 'morth' },
          { name: 'Madurai Urban Development Authority', authorityId: 'morth' }
        ]
      },
      {
        name: 'Tiruchirappalli',
        localBodies: [
          { name: 'Tiruchirappalli City Corporation', authorityId: 'morth' },
          { name: 'Tiruchirappalli Smart City Limited', authorityId: 'morth' }
        ]
      },
      {
        name: 'Salem',
        localBodies: [
          { name: 'Salem City Municipal Corporation', authorityId: 'morth' },
          { name: 'Salem Smart City Limited', authorityId: 'morth' }
        ]
      },
      {
        name: 'Tiruppur',
        localBodies: [
          { name: 'Tiruppur City Municipal Corporation', authorityId: 'morth' },
          { name: 'Tiruppur Smart City Limited', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Telangana',
    districts: [
      {
        name: 'Hyderabad',
        localBodies: [
          { name: 'Greater Hyderabad Municipal Corporation (GHMC)', authorityId: 'morth' },
          { name: 'Hyderabad Metropolitan Development Authority (HMDA)', authorityId: 'morth' },
          { name: 'Hyderabad Metropolitan Water Supply and Sewerage Board (HMWSSB)', authorityId: 'morth' },
          { name: 'Telangana Housing Board (THB)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Medchal-Malkajgiri',
        localBodies: [
          { name: 'Nizampet Municipal Corporation', authorityId: 'morth' },
          { name: 'Boduppal Municipal Corporation', authorityId: 'morth' },
          { name: 'Peerzadiguda Municipal Corporation', authorityId: 'morth' },
          { name: 'Jawaharnagar Municipal Corporation', authorityId: 'morth' }
        ]
      },
      {
        name: 'Rangareddy',
        localBodies: [
          { name: 'Bandlaguda Jagir Municipal Corporation', authorityId: 'morth' },
          { name: 'Badangpet Municipal Corporation', authorityId: 'morth' },
          { name: 'Meerpet Municipal Corporation', authorityId: 'morth' }
        ]
      },
      {
        name: 'Warangal (Hanamkonda)',
        localBodies: [
          { name: 'Greater Warangal Municipal Corporation (GWMC)', authorityId: 'morth' },
          { name: 'Kakatiya Urban Development Authority (KUDA)', authorityId: 'morth' },
          { name: 'Warangal Smart City Corporation Limited', authorityId: 'morth' }
        ]
      },
      {
        name: 'Karimnagar',
        localBodies: [
          { name: 'Municipal Corporation of Karimnagar (MCK)', authorityId: 'morth' },
          { name: 'Karimnagar Smart City Limited', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Tripura',
    districts: [
      {
        name: 'West Tripura (Agartala)',
        localBodies: [
          { name: 'Agartala Municipal Corporation (AMC)', authorityId: 'morth' },
          { name: 'Agartala Smart City Limited', authorityId: 'morth' },
          { name: 'Tripura Urban Planning and Development Authority (TUDA)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Gomati (Udaipur)',
        localBodies: [
          { name: 'Udaipur Municipal Council', authorityId: 'morth' },
          { name: 'Gomati Zilla Parishad', authorityId: 'morth' }
        ]
      },
      {
        name: 'North Tripura (Dharmanagar)',
        localBodies: [
          { name: 'Dharmanagar Municipal Council', authorityId: 'morth' },
          { name: 'North Tripura Zilla Parishad', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Uttar Pradesh',
    districts: [
      {
        name: 'Lucknow',
        localBodies: [
          { name: 'Lucknow Municipal Corporation (LMC / Lucknow Nagar Nigam)', authorityId: 'uppolice' },
          { name: 'Lucknow Development Authority (LDA)', authorityId: 'morth' },
          { name: 'Lucknow Smart City Limited', authorityId: 'morth' },
          { name: 'UP Housing and Development Board (Awas Vikas Parishad)', authorityId: 'morth' },
          { name: 'UP Jal Nigam', authorityId: 'morth' }
        ]
      },
      {
        name: 'Kanpur Nagar',
        localBodies: [
          { name: 'Kanpur Municipal Corporation (Kanpur Nagar Nigam)', authorityId: 'morth' },
          { name: 'Kanpur Development Authority (KDA)', authorityId: 'morth' },
          { name: 'Kanpur Smart City Limited', authorityId: 'morth' }
        ]
      },
      {
        name: 'Varanasi',
        localBodies: [
          { name: 'Varanasi Municipal Corporation (Varanasi Nagar Nigam)', authorityId: 'morth' },
          { name: 'Varanasi Development Authority (VDA)', authorityId: 'morth' },
          { name: 'Varanasi Smart City Limited', authorityId: 'morth' }
        ]
      },
      {
        name: 'Prayagraj (Allahabad)',
        localBodies: [
          { name: 'Prayagraj Municipal Corporation (Prayagraj Nagar Nigam)', authorityId: 'morth' },
          { name: 'Prayagraj Development Authority (PDA)', authorityId: 'morth' },
          { name: 'Prayagraj Smart City Limited', authorityId: 'morth' }
        ]
      },
      {
        name: 'Agra',
        localBodies: [
          { name: 'Agra Municipal Corporation (Agra Nagar Nigam)', authorityId: 'morth' },
          { name: 'Agra Development Authority (ADA)', authorityId: 'morth' },
          { name: 'Taj Trapezium Zone (TTZ) Authority', authorityId: 'morth' },
          { name: 'Agra Smart City Limited', authorityId: 'morth' }
        ]
      },
      {
        name: 'Gautam Buddha Nagar (Noida & Greater Noida)',
        localBodies: [
          { name: 'New Okhla Industrial Development Authority (NOIDA)', authorityId: 'morth' },
          { name: 'Greater Noida Industrial Development Authority (GNIDA)', authorityId: 'morth' },
          { name: 'Yamuna Expressway Industrial Development Authority (YEIDA)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Ghaziabad',
        localBodies: [
          { name: 'Ghaziabad Municipal Corporation (Ghaziabad Nagar Nigam)', authorityId: 'morth' },
          { name: 'Ghaziabad Development Authority (GDA)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Meerut',
        localBodies: [
          { name: 'Meerut Municipal Corporation (Meerut Nagar Nigam)', authorityId: 'morth' },
          { name: 'Meerut Development Authority (MDA)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Gorakhpur',
        localBodies: [
          { name: 'Gorakhpur Municipal Corporation (Gorakhpur Nagar Nigam)', authorityId: 'morth' },
          { name: 'Gorakhpur Development Authority (GDA)', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'Uttarakhand',
    districts: [
      {
        name: 'Dehradun',
        localBodies: [
          { name: 'Dehradun Municipal Corporation (Nagar Nigam Dehradun)', authorityId: 'morth' },
          { name: 'Mussoorie Dehradun Development Authority (MDDA)', authorityId: 'morth' },
          { name: 'Dehradun Smart City Limited', authorityId: 'morth' },
          { name: 'Uttarakhand Peyjal Nigam', authorityId: 'morth' }
        ]
      },
      {
        name: 'Haridwar',
        localBodies: [
          { name: 'Haridwar Municipal Corporation (Nagar Nigam Haridwar)', authorityId: 'morth' },
          { name: 'Haridwar Roorkee Development Authority (HRDA)', authorityId: 'morth' },
          { name: 'Roorkee Municipal Corporation', authorityId: 'morth' }
        ]
      },
      {
        name: 'Nainital (Haldwani)',
        localBodies: [
          { name: 'Haldwani-Kathgodam Municipal Corporation', authorityId: 'morth' },
          { name: 'Nainital Municipal Council (Nagar Palika)', authorityId: 'morth' },
          { name: 'Lake Development Authority (LDA Nainital)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Udham Singh Nagar (Rudrapur)',
        localBodies: [
          { name: 'Rudrapur Municipal Corporation', authorityId: 'morth' },
          { name: 'Kashipur Municipal Corporation', authorityId: 'morth' }
        ]
      }
    ]
  },
  {
    name: 'West Bengal',
    districts: [
      {
        name: 'Kolkata',
        localBodies: [
          { name: 'Kolkata Municipal Corporation (KMC)', authorityId: 'morth' },
          { name: 'Kolkata Metropolitan Development Authority (KMDA)', authorityId: 'morth' },
          { name: 'West Bengal Housing Board', authorityId: 'morth' },
          { name: 'New Town Kolkata Development Authority (NKDA)', authorityId: 'morth' }
        ]
      },
      {
        name: 'North 24 Parganas (Bidhannagar / Salt Lake)',
        localBodies: [
          { name: 'Bidhannagar Municipal Corporation (BMC Salt Lake)', authorityId: 'morth' },
          { name: 'South Dum Dum Municipality', authorityId: 'morth' },
          { name: 'Barasat Municipality', authorityId: 'morth' },
          { name: 'North Dum Dum Municipality', authorityId: 'morth' }
        ]
      },
      {
        name: 'Howrah',
        localBodies: [
          { name: 'Howrah Municipal Corporation (HMC)', authorityId: 'morth' },
          { name: 'Bally Municipality', authorityId: 'morth' },
          { name: 'Howrah Zilla Parishad', authorityId: 'morth' }
        ]
      },
      {
        name: 'Paschim Bardhaman (Asansol - Durgapur)',
        localBodies: [
          { name: 'Asansol Municipal Corporation (AMC)', authorityId: 'morth' },
          { name: 'Durgapur Municipal Corporation (DMC)', authorityId: 'morth' },
          { name: 'Asansol Durgapur Development Authority (ADDA)', authorityId: 'morth' }
        ]
      },
      {
        name: 'Darjeeling (Siliguri)',
        localBodies: [
          { name: 'Siliguri Municipal Corporation (SMC)', authorityId: 'morth' },
          { name: 'Siliguri Jalpaiguri Development Authority (SJDA)', authorityId: 'morth' },
          { name: 'Gorkhaland Territorial Administration (GTA)', authorityId: 'morth' },
          { name: 'Darjeeling Municipality', authorityId: 'morth' }
        ]
      }
    ]
  }
];
