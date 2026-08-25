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
    "name": "Andaman and Nicobar Islands",
    "districts": [
      {
        "name": "Nicobar",
        "localBodies": [
          {
            "name": "Nicobar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Nicobar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nicobar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nicobar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Nicobar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Nicobar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "North and Middle Andaman",
        "localBodies": [
          {
            "name": "North and Middle Andaman Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "North and Middle Andaman Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "North and Middle Andaman Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "North and Middle Andaman Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "North and Middle Andaman Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "North and Middle Andaman Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "South Andaman",
        "localBodies": [
          {
            "name": "South Andaman Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "South Andaman Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "South Andaman Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "South Andaman Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "South Andaman Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "South Andaman Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Andhra Pradesh",
    "districts": [
      {
        "name": "Alluri Sitharama Raju",
        "localBodies": [
          {
            "name": "Alluri Sitharama Raju Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Alluri Sitharama Raju Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Alluri Sitharama Raju Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Alluri Sitharama Raju Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Alluri Sitharama Raju Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Alluri Sitharama Raju Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Anakapalli",
        "localBodies": [
          {
            "name": "Anakapalli Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Anakapalli Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Anakapalli Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Anakapalli Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Anakapalli Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Anakapalli Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Ananthapuramu",
        "localBodies": [
          {
            "name": "Ananthapuramu Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Ananthapuramu Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ananthapuramu Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ananthapuramu Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Ananthapuramu Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Ananthapuramu Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Annamayya",
        "localBodies": [
          {
            "name": "Annamayya Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Annamayya Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Annamayya Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Annamayya Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Annamayya Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Annamayya Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bapatla",
        "localBodies": [
          {
            "name": "Bapatla Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bapatla Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bapatla Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bapatla Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bapatla Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bapatla Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Chittoor",
        "localBodies": [
          {
            "name": "Chittoor Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Chittoor Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chittoor Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chittoor Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Chittoor Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Chittoor Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Dr. B.R. Ambedkar Konaseema",
        "localBodies": [
          {
            "name": "Dr. B.R. Ambedkar Konaseema Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Dr. B.R. Ambedkar Konaseema Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dr. B.R. Ambedkar Konaseema Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dr. B.R. Ambedkar Konaseema Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Dr. B.R. Ambedkar Konaseema Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Dr. B.R. Ambedkar Konaseema Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "East Godavari",
        "localBodies": [
          {
            "name": "East Godavari Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "East Godavari Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "East Godavari Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "East Godavari Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "East Godavari Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "East Godavari Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Eluru",
        "localBodies": [
          {
            "name": "Eluru Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Eluru Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Eluru Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Eluru Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Eluru Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Eluru Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Guntur",
        "localBodies": [
          {
            "name": "Guntur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Guntur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Guntur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Guntur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Guntur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Guntur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kakinada",
        "localBodies": [
          {
            "name": "Kakinada Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kakinada Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kakinada Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kakinada Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kakinada Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kakinada Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Krishna",
        "localBodies": [
          {
            "name": "Krishna Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Krishna Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Krishna Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Krishna Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Krishna Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Krishna Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kurnool",
        "localBodies": [
          {
            "name": "Kurnool Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kurnool Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kurnool Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kurnool Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kurnool Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kurnool Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Nandyal",
        "localBodies": [
          {
            "name": "Nandyal Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Nandyal Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nandyal Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nandyal Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Nandyal Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Nandyal Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "NTR",
        "localBodies": [
          {
            "name": "NTR Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "NTR Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "NTR Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "NTR Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "NTR Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "NTR Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Palnadu",
        "localBodies": [
          {
            "name": "Palnadu Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Palnadu Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Palnadu Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Palnadu Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Palnadu Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Palnadu Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Parvathipuram Manyam",
        "localBodies": [
          {
            "name": "Parvathipuram Manyam Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Parvathipuram Manyam Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Parvathipuram Manyam Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Parvathipuram Manyam Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Parvathipuram Manyam Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Parvathipuram Manyam Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Prakasam",
        "localBodies": [
          {
            "name": "Prakasam Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Prakasam Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Prakasam Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Prakasam Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Prakasam Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Prakasam Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sri Potti Sriramulu Nellore",
        "localBodies": [
          {
            "name": "Sri Potti Sriramulu Nellore Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sri Potti Sriramulu Nellore Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sri Potti Sriramulu Nellore Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sri Potti Sriramulu Nellore Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sri Potti Sriramulu Nellore Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sri Potti Sriramulu Nellore Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sri Sathya Sai",
        "localBodies": [
          {
            "name": "Sri Sathya Sai Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sri Sathya Sai Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sri Sathya Sai Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sri Sathya Sai Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sri Sathya Sai Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sri Sathya Sai Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Srikakulam",
        "localBodies": [
          {
            "name": "Srikakulam Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Srikakulam Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Srikakulam Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Srikakulam Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Srikakulam Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Srikakulam Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Tirupati",
        "localBodies": [
          {
            "name": "Tirupati Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Tirupati Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tirupati Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tirupati Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Tirupati Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Tirupati Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Visakhapatnam",
        "localBodies": [
          {
            "name": "Visakhapatnam Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Visakhapatnam Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Visakhapatnam Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Visakhapatnam Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Visakhapatnam Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Visakhapatnam Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Vizianagaram",
        "localBodies": [
          {
            "name": "Vizianagaram Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Vizianagaram Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Vizianagaram Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Vizianagaram Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Vizianagaram Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Vizianagaram Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "West Godavari",
        "localBodies": [
          {
            "name": "West Godavari Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "West Godavari Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "West Godavari Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "West Godavari Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "West Godavari Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "West Godavari Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "YSR Kadapa",
        "localBodies": [
          {
            "name": "YSR Kadapa Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "YSR Kadapa Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "YSR Kadapa Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "YSR Kadapa Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "YSR Kadapa Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "YSR Kadapa Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Arunachal Pradesh",
    "districts": [
      {
        "name": "Anjaw",
        "localBodies": [
          {
            "name": "Anjaw Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Anjaw Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Anjaw Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Anjaw Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Anjaw Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Anjaw Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Changlang",
        "localBodies": [
          {
            "name": "Changlang Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Changlang Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Changlang Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Changlang Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Changlang Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Changlang Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Dibang Valley",
        "localBodies": [
          {
            "name": "Dibang Valley Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Dibang Valley Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dibang Valley Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dibang Valley Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Dibang Valley Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Dibang Valley Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "East Kameng",
        "localBodies": [
          {
            "name": "East Kameng Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "East Kameng Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "East Kameng Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "East Kameng Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "East Kameng Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "East Kameng Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "East Siang",
        "localBodies": [
          {
            "name": "East Siang Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "East Siang Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "East Siang Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "East Siang Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "East Siang Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "East Siang Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kamle",
        "localBodies": [
          {
            "name": "Kamle Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kamle Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kamle Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kamle Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kamle Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kamle Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kra Daadi",
        "localBodies": [
          {
            "name": "Kra Daadi Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kra Daadi Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kra Daadi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kra Daadi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kra Daadi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kra Daadi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kurung Kumey",
        "localBodies": [
          {
            "name": "Kurung Kumey Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kurung Kumey Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kurung Kumey Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kurung Kumey Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kurung Kumey Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kurung Kumey Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Lepa Rada",
        "localBodies": [
          {
            "name": "Lepa Rada Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Lepa Rada Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Lepa Rada Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Lepa Rada Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Lepa Rada Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Lepa Rada Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Lohit",
        "localBodies": [
          {
            "name": "Lohit Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Lohit Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Lohit Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Lohit Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Lohit Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Lohit Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Longding",
        "localBodies": [
          {
            "name": "Longding Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Longding Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Longding Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Longding Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Longding Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Longding Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Lower Dibang Valley",
        "localBodies": [
          {
            "name": "Lower Dibang Valley Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Lower Dibang Valley Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Lower Dibang Valley Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Lower Dibang Valley Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Lower Dibang Valley Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Lower Dibang Valley Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Lower Siang",
        "localBodies": [
          {
            "name": "Lower Siang Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Lower Siang Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Lower Siang Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Lower Siang Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Lower Siang Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Lower Siang Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Lower Subansiri",
        "localBodies": [
          {
            "name": "Lower Subansiri Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Lower Subansiri Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Lower Subansiri Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Lower Subansiri Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Lower Subansiri Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Lower Subansiri Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Namsai",
        "localBodies": [
          {
            "name": "Namsai Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Namsai Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Namsai Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Namsai Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Namsai Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Namsai Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Pakke Kessang",
        "localBodies": [
          {
            "name": "Pakke Kessang Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Pakke Kessang Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pakke Kessang Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pakke Kessang Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Pakke Kessang Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Pakke Kessang Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Papum Pare",
        "localBodies": [
          {
            "name": "Papum Pare Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Papum Pare Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Papum Pare Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Papum Pare Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Papum Pare Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Papum Pare Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Shi Yomi",
        "localBodies": [
          {
            "name": "Shi Yomi Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Shi Yomi Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Shi Yomi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Shi Yomi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Shi Yomi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Shi Yomi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Siang",
        "localBodies": [
          {
            "name": "Siang Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Siang Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Siang Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Siang Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Siang Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Siang Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Tawang",
        "localBodies": [
          {
            "name": "Tawang Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Tawang Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tawang Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tawang Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Tawang Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Tawang Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Tirap",
        "localBodies": [
          {
            "name": "Tirap Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Tirap Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tirap Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tirap Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Tirap Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Tirap Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Upper Siang",
        "localBodies": [
          {
            "name": "Upper Siang Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Upper Siang Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Upper Siang Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Upper Siang Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Upper Siang Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Upper Siang Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Upper Subansiri",
        "localBodies": [
          {
            "name": "Upper Subansiri Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Upper Subansiri Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Upper Subansiri Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Upper Subansiri Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Upper Subansiri Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Upper Subansiri Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "West Kameng",
        "localBodies": [
          {
            "name": "West Kameng Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "West Kameng Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "West Kameng Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "West Kameng Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "West Kameng Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "West Kameng Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "West Siang",
        "localBodies": [
          {
            "name": "West Siang Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "West Siang Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "West Siang Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "West Siang Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "West Siang Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "West Siang Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Itanagar Capital Complex",
        "localBodies": [
          {
            "name": "Itanagar Capital Complex Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Itanagar Capital Complex Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Itanagar Capital Complex Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Itanagar Capital Complex Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Itanagar Capital Complex Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Itanagar Capital Complex Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Assam",
    "districts": [
      {
        "name": "Bajali",
        "localBodies": [
          {
            "name": "Bajali Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bajali Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bajali Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bajali Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bajali Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bajali Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Baksa",
        "localBodies": [
          {
            "name": "Baksa Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Baksa Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Baksa Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Baksa Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Baksa Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Baksa Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Barpeta",
        "localBodies": [
          {
            "name": "Barpeta Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Barpeta Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Barpeta Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Barpeta Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Barpeta Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Barpeta Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Biswanath",
        "localBodies": [
          {
            "name": "Biswanath Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Biswanath Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Biswanath Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Biswanath Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Biswanath Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Biswanath Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bongaigaon",
        "localBodies": [
          {
            "name": "Bongaigaon Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bongaigaon Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bongaigaon Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bongaigaon Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bongaigaon Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bongaigaon Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Cachar",
        "localBodies": [
          {
            "name": "Cachar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Cachar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Cachar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Cachar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Cachar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Cachar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Charaideo",
        "localBodies": [
          {
            "name": "Charaideo Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Charaideo Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Charaideo Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Charaideo Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Charaideo Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Charaideo Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Chirang",
        "localBodies": [
          {
            "name": "Chirang Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Chirang Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chirang Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chirang Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Chirang Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Chirang Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Darrang",
        "localBodies": [
          {
            "name": "Darrang Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Darrang Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Darrang Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Darrang Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Darrang Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Darrang Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Dhemaji",
        "localBodies": [
          {
            "name": "Dhemaji Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Dhemaji Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dhemaji Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dhemaji Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Dhemaji Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Dhemaji Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Dhubri",
        "localBodies": [
          {
            "name": "Dhubri Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Dhubri Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dhubri Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dhubri Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Dhubri Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Dhubri Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Dibrugarh",
        "localBodies": [
          {
            "name": "Dibrugarh Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Dibrugarh Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dibrugarh Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dibrugarh Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Dibrugarh Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Dibrugarh Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Dima Hasao",
        "localBodies": [
          {
            "name": "Dima Hasao Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Dima Hasao Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dima Hasao Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dima Hasao Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Dima Hasao Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Dima Hasao Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Goalpara",
        "localBodies": [
          {
            "name": "Goalpara Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Goalpara Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Goalpara Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Goalpara Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Goalpara Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Goalpara Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Golaghat",
        "localBodies": [
          {
            "name": "Golaghat Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Golaghat Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Golaghat Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Golaghat Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Golaghat Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Golaghat Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Hailakandi",
        "localBodies": [
          {
            "name": "Hailakandi Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Hailakandi Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hailakandi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hailakandi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Hailakandi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Hailakandi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Hojai",
        "localBodies": [
          {
            "name": "Hojai Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Hojai Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hojai Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hojai Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Hojai Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Hojai Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jorhat",
        "localBodies": [
          {
            "name": "Jorhat Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jorhat Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jorhat Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jorhat Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jorhat Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jorhat Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kamrup",
        "localBodies": [
          {
            "name": "Kamrup Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kamrup Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kamrup Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kamrup Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kamrup Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kamrup Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kamrup Metropolitan",
        "localBodies": [
          {
            "name": "Kamrup Metropolitan Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Kamrup Metropolitan Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Kamrup Metropolitan Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kamrup Metropolitan Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kamrup Metropolitan Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kamrup Metropolitan Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Karbi Anglong",
        "localBodies": [
          {
            "name": "Karbi Anglong Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Karbi Anglong Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Karbi Anglong Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Karbi Anglong Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Karbi Anglong Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Karbi Anglong Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Karimganj",
        "localBodies": [
          {
            "name": "Karimganj Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Karimganj Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Karimganj Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Karimganj Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Karimganj Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Karimganj Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kokrajhar",
        "localBodies": [
          {
            "name": "Kokrajhar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kokrajhar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kokrajhar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kokrajhar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kokrajhar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kokrajhar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Lakhimpur",
        "localBodies": [
          {
            "name": "Lakhimpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Lakhimpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Lakhimpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Lakhimpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Lakhimpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Lakhimpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Majuli",
        "localBodies": [
          {
            "name": "Majuli Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Majuli Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Majuli Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Majuli Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Majuli Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Majuli Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Morigaon",
        "localBodies": [
          {
            "name": "Morigaon Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Morigaon Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Morigaon Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Morigaon Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Morigaon Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Morigaon Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Nagaon",
        "localBodies": [
          {
            "name": "Nagaon Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Nagaon Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nagaon Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nagaon Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Nagaon Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Nagaon Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Nalbari",
        "localBodies": [
          {
            "name": "Nalbari Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Nalbari Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nalbari Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nalbari Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Nalbari Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Nalbari Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sivasagar",
        "localBodies": [
          {
            "name": "Sivasagar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sivasagar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sivasagar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sivasagar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sivasagar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sivasagar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sonitpur",
        "localBodies": [
          {
            "name": "Sonitpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sonitpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sonitpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sonitpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sonitpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sonitpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "South Salmara-Mankachar",
        "localBodies": [
          {
            "name": "South Salmara-Mankachar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "South Salmara-Mankachar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "South Salmara-Mankachar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "South Salmara-Mankachar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "South Salmara-Mankachar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "South Salmara-Mankachar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Tamulpur",
        "localBodies": [
          {
            "name": "Tamulpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Tamulpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tamulpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tamulpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Tamulpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Tamulpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Tinsukia",
        "localBodies": [
          {
            "name": "Tinsukia Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Tinsukia Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tinsukia Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tinsukia Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Tinsukia Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Tinsukia Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Udalguri",
        "localBodies": [
          {
            "name": "Udalguri Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Udalguri Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Udalguri Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Udalguri Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Udalguri Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Udalguri Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "West Karbi Anglong",
        "localBodies": [
          {
            "name": "West Karbi Anglong Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "West Karbi Anglong Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "West Karbi Anglong Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "West Karbi Anglong Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "West Karbi Anglong Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "West Karbi Anglong Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Bihar",
    "districts": [
      {
        "name": "Araria",
        "localBodies": [
          {
            "name": "Araria Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Araria Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Araria Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Araria Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Araria Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Araria Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Arwal",
        "localBodies": [
          {
            "name": "Arwal Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Arwal Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Arwal Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Arwal Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Arwal Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Arwal Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Aurangabad",
        "localBodies": [
          {
            "name": "Aurangabad Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Aurangabad Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Aurangabad Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Aurangabad Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Aurangabad Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Aurangabad Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Banka",
        "localBodies": [
          {
            "name": "Banka Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Banka Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Banka Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Banka Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Banka Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Banka Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Begusarai",
        "localBodies": [
          {
            "name": "Begusarai Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Begusarai Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Begusarai Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Begusarai Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Begusarai Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Begusarai Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bhagalpur",
        "localBodies": [
          {
            "name": "Bhagalpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bhagalpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bhagalpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bhagalpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bhagalpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bhagalpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bhojpur",
        "localBodies": [
          {
            "name": "Bhojpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bhojpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bhojpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bhojpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bhojpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bhojpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Buxar",
        "localBodies": [
          {
            "name": "Buxar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Buxar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Buxar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Buxar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Buxar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Buxar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Darbhanga",
        "localBodies": [
          {
            "name": "Darbhanga Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Darbhanga Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Darbhanga Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Darbhanga Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Darbhanga Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Darbhanga Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "East Champaran",
        "localBodies": [
          {
            "name": "East Champaran Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "East Champaran Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "East Champaran Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "East Champaran Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "East Champaran Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "East Champaran Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Gaya",
        "localBodies": [
          {
            "name": "Gaya Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Gaya Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gaya Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gaya Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Gaya Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Gaya Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Gopalganj",
        "localBodies": [
          {
            "name": "Gopalganj Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Gopalganj Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gopalganj Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gopalganj Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Gopalganj Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Gopalganj Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jamui",
        "localBodies": [
          {
            "name": "Jamui Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jamui Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jamui Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jamui Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jamui Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jamui Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jehanabad",
        "localBodies": [
          {
            "name": "Jehanabad Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jehanabad Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jehanabad Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jehanabad Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jehanabad Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jehanabad Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kaimur",
        "localBodies": [
          {
            "name": "Kaimur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kaimur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kaimur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kaimur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kaimur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kaimur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Katihar",
        "localBodies": [
          {
            "name": "Katihar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Katihar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Katihar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Katihar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Katihar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Katihar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Khagaria",
        "localBodies": [
          {
            "name": "Khagaria Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Khagaria Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Khagaria Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Khagaria Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Khagaria Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Khagaria Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kishanganj",
        "localBodies": [
          {
            "name": "Kishanganj Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kishanganj Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kishanganj Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kishanganj Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kishanganj Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kishanganj Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Lakhisarai",
        "localBodies": [
          {
            "name": "Lakhisarai Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Lakhisarai Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Lakhisarai Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Lakhisarai Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Lakhisarai Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Lakhisarai Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Madhepura",
        "localBodies": [
          {
            "name": "Madhepura Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Madhepura Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Madhepura Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Madhepura Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Madhepura Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Madhepura Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Madhubani",
        "localBodies": [
          {
            "name": "Madhubani Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Madhubani Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Madhubani Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Madhubani Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Madhubani Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Madhubani Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Munger",
        "localBodies": [
          {
            "name": "Munger Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Munger Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Munger Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Munger Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Munger Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Munger Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Muzaffarpur",
        "localBodies": [
          {
            "name": "Muzaffarpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Muzaffarpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Muzaffarpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Muzaffarpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Muzaffarpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Muzaffarpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Nalanda",
        "localBodies": [
          {
            "name": "Nalanda Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Nalanda Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nalanda Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nalanda Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Nalanda Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Nalanda Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Nawada",
        "localBodies": [
          {
            "name": "Nawada Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Nawada Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nawada Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nawada Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Nawada Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Nawada Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Patna",
        "localBodies": [
          {
            "name": "Patna Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Patna Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Patna Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Patna Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Patna Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Patna Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Purnia",
        "localBodies": [
          {
            "name": "Purnia Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Purnia Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Purnia Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Purnia Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Purnia Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Purnia Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Rohtas",
        "localBodies": [
          {
            "name": "Rohtas Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Rohtas Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Rohtas Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Rohtas Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Rohtas Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Rohtas Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Saharsa",
        "localBodies": [
          {
            "name": "Saharsa Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Saharsa Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Saharsa Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Saharsa Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Saharsa Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Saharsa Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Samastipur",
        "localBodies": [
          {
            "name": "Samastipur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Samastipur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Samastipur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Samastipur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Samastipur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Samastipur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Saran",
        "localBodies": [
          {
            "name": "Saran Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Saran Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Saran Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Saran Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Saran Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Saran Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sheikhpura",
        "localBodies": [
          {
            "name": "Sheikhpura Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sheikhpura Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sheikhpura Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sheikhpura Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sheikhpura Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sheikhpura Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sheohar",
        "localBodies": [
          {
            "name": "Sheohar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sheohar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sheohar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sheohar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sheohar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sheohar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sitamarhi",
        "localBodies": [
          {
            "name": "Sitamarhi Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sitamarhi Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sitamarhi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sitamarhi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sitamarhi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sitamarhi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Siwan",
        "localBodies": [
          {
            "name": "Siwan Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Siwan Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Siwan Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Siwan Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Siwan Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Siwan Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Supaul",
        "localBodies": [
          {
            "name": "Supaul Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Supaul Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Supaul Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Supaul Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Supaul Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Supaul Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Vaishali",
        "localBodies": [
          {
            "name": "Vaishali Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Vaishali Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Vaishali Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Vaishali Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Vaishali Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Vaishali Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "West Champaran",
        "localBodies": [
          {
            "name": "West Champaran Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "West Champaran Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "West Champaran Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "West Champaran Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "West Champaran Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "West Champaran Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Chandigarh",
    "districts": [
      {
        "name": "Chandigarh",
        "localBodies": [
          {
            "name": "Chandigarh Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Chandigarh Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Chandigarh Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chandigarh Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Chandigarh Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Chandigarh Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Chhattisgarh",
    "districts": [
      {
        "name": "Balod",
        "localBodies": [
          {
            "name": "Balod Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Balod Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Balod Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Balod Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Balod Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Balod Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Baloda Bazar-Bhatapara",
        "localBodies": [
          {
            "name": "Baloda Bazar-Bhatapara Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Baloda Bazar-Bhatapara Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Baloda Bazar-Bhatapara Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Baloda Bazar-Bhatapara Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Baloda Bazar-Bhatapara Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Baloda Bazar-Bhatapara Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Balrampur-Ramanujganj",
        "localBodies": [
          {
            "name": "Balrampur-Ramanujganj Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Balrampur-Ramanujganj Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Balrampur-Ramanujganj Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Balrampur-Ramanujganj Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Balrampur-Ramanujganj Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Balrampur-Ramanujganj Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bastar",
        "localBodies": [
          {
            "name": "Bastar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bastar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bastar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bastar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bastar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bastar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bemetara",
        "localBodies": [
          {
            "name": "Bemetara Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bemetara Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bemetara Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bemetara Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bemetara Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bemetara Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bijapur",
        "localBodies": [
          {
            "name": "Bijapur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bijapur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bijapur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bijapur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bijapur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bijapur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bilaspur",
        "localBodies": [
          {
            "name": "Bilaspur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bilaspur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bilaspur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bilaspur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bilaspur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bilaspur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Dantewada",
        "localBodies": [
          {
            "name": "Dantewada Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Dantewada Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dantewada Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dantewada Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Dantewada Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Dantewada Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Dhamtari",
        "localBodies": [
          {
            "name": "Dhamtari Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Dhamtari Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dhamtari Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dhamtari Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Dhamtari Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Dhamtari Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Durg",
        "localBodies": [
          {
            "name": "Durg Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Durg Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Durg Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Durg Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Durg Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Durg Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Gariaband",
        "localBodies": [
          {
            "name": "Gariaband Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Gariaband Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gariaband Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gariaband Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Gariaband Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Gariaband Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Gaurela-Pendra-Marwahi",
        "localBodies": [
          {
            "name": "Gaurela-Pendra-Marwahi Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Gaurela-Pendra-Marwahi Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gaurela-Pendra-Marwahi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gaurela-Pendra-Marwahi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Gaurela-Pendra-Marwahi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Gaurela-Pendra-Marwahi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Janjgir-Champa",
        "localBodies": [
          {
            "name": "Janjgir-Champa Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Janjgir-Champa Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Janjgir-Champa Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Janjgir-Champa Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Janjgir-Champa Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Janjgir-Champa Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jashpur",
        "localBodies": [
          {
            "name": "Jashpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jashpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jashpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jashpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jashpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jashpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kabirdham",
        "localBodies": [
          {
            "name": "Kabirdham Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kabirdham Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kabirdham Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kabirdham Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kabirdham Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kabirdham Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kanker",
        "localBodies": [
          {
            "name": "Kanker Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kanker Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kanker Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kanker Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kanker Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kanker Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Khairagarh-Chhuikhadan-Gandai",
        "localBodies": [
          {
            "name": "Khairagarh-Chhuikhadan-Gandai Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Khairagarh-Chhuikhadan-Gandai Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Khairagarh-Chhuikhadan-Gandai Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Khairagarh-Chhuikhadan-Gandai Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Khairagarh-Chhuikhadan-Gandai Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Khairagarh-Chhuikhadan-Gandai Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kondagaon",
        "localBodies": [
          {
            "name": "Kondagaon Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kondagaon Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kondagaon Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kondagaon Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kondagaon Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kondagaon Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Korba",
        "localBodies": [
          {
            "name": "Korba Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Korba Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Korba Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Korba Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Korba Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Korba Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Koriya",
        "localBodies": [
          {
            "name": "Koriya Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Koriya Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Koriya Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Koriya Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Koriya Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Koriya Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mahasamund",
        "localBodies": [
          {
            "name": "Mahasamund Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Mahasamund Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mahasamund Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mahasamund Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mahasamund Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mahasamund Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Manendragarh-Chirmiri-Bharatpur",
        "localBodies": [
          {
            "name": "Manendragarh-Chirmiri-Bharatpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Manendragarh-Chirmiri-Bharatpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Manendragarh-Chirmiri-Bharatpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Manendragarh-Chirmiri-Bharatpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Manendragarh-Chirmiri-Bharatpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Manendragarh-Chirmiri-Bharatpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mohla-Manpur-Ambagarh Chowki",
        "localBodies": [
          {
            "name": "Mohla-Manpur-Ambagarh Chowki Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Mohla-Manpur-Ambagarh Chowki Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mohla-Manpur-Ambagarh Chowki Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mohla-Manpur-Ambagarh Chowki Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mohla-Manpur-Ambagarh Chowki Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mohla-Manpur-Ambagarh Chowki Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mungeli",
        "localBodies": [
          {
            "name": "Mungeli Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Mungeli Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mungeli Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mungeli Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mungeli Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mungeli Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Narayanpur",
        "localBodies": [
          {
            "name": "Narayanpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Narayanpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Narayanpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Narayanpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Narayanpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Narayanpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Raigarh",
        "localBodies": [
          {
            "name": "Raigarh Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Raigarh Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Raigarh Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Raigarh Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Raigarh Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Raigarh Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Raipur",
        "localBodies": [
          {
            "name": "Raipur Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Raipur Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Raipur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Raipur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Raipur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Raipur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Rajnandgaon",
        "localBodies": [
          {
            "name": "Rajnandgaon Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Rajnandgaon Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Rajnandgaon Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Rajnandgaon Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Rajnandgaon Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Rajnandgaon Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sakti",
        "localBodies": [
          {
            "name": "Sakti Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sakti Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sakti Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sakti Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sakti Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sakti Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sarangarh-Bilaigarh",
        "localBodies": [
          {
            "name": "Sarangarh-Bilaigarh Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sarangarh-Bilaigarh Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sarangarh-Bilaigarh Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sarangarh-Bilaigarh Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sarangarh-Bilaigarh Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sarangarh-Bilaigarh Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sukma",
        "localBodies": [
          {
            "name": "Sukma Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sukma Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sukma Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sukma Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sukma Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sukma Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Surajpur",
        "localBodies": [
          {
            "name": "Surajpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Surajpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Surajpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Surajpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Surajpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Surajpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Surguja",
        "localBodies": [
          {
            "name": "Surguja Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Surguja Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Surguja Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Surguja Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Surguja Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Surguja Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Dadra and Nagar Haveli and Daman and Diu",
    "districts": [
      {
        "name": "Dadra and Nagar Haveli",
        "localBodies": [
          {
            "name": "Dadra and Nagar Haveli Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Dadra and Nagar Haveli Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dadra and Nagar Haveli Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dadra and Nagar Haveli Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Dadra and Nagar Haveli Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Dadra and Nagar Haveli Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Daman",
        "localBodies": [
          {
            "name": "Daman Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Daman Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Daman Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Daman Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Daman Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Daman Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Diu",
        "localBodies": [
          {
            "name": "Diu Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Diu Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Diu Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Diu Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Diu Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Diu Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Delhi",
    "districts": [
      {
        "name": "Central Delhi",
        "localBodies": [
          {
            "name": "Central Delhi Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Central Delhi Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Central Delhi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Central Delhi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Central Delhi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Central Delhi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "East Delhi",
        "localBodies": [
          {
            "name": "East Delhi Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "East Delhi Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "East Delhi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "East Delhi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "East Delhi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "East Delhi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "New Delhi",
        "localBodies": [
          {
            "name": "New Delhi Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "New Delhi Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "New Delhi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "New Delhi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "New Delhi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "New Delhi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "North Delhi",
        "localBodies": [
          {
            "name": "North Delhi Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "North Delhi Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "North Delhi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "North Delhi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "North Delhi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "North Delhi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "North East Delhi",
        "localBodies": [
          {
            "name": "North East Delhi Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "North East Delhi Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "North East Delhi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "North East Delhi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "North East Delhi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "North East Delhi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "North West Delhi",
        "localBodies": [
          {
            "name": "North West Delhi Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "North West Delhi Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "North West Delhi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "North West Delhi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "North West Delhi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "North West Delhi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Shahdara",
        "localBodies": [
          {
            "name": "Shahdara Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Shahdara Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Shahdara Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Shahdara Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Shahdara Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Shahdara Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "South Delhi",
        "localBodies": [
          {
            "name": "South Delhi Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "South Delhi Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "South Delhi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "South Delhi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "South Delhi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "South Delhi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "South East Delhi",
        "localBodies": [
          {
            "name": "South East Delhi Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "South East Delhi Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "South East Delhi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "South East Delhi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "South East Delhi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "South East Delhi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "South West Delhi",
        "localBodies": [
          {
            "name": "South West Delhi Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "South West Delhi Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "South West Delhi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "South West Delhi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "South West Delhi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "South West Delhi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "West Delhi",
        "localBodies": [
          {
            "name": "West Delhi Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "West Delhi Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "West Delhi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "West Delhi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "West Delhi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "West Delhi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Goa",
    "districts": [
      {
        "name": "North Goa",
        "localBodies": [
          {
            "name": "North Goa Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "North Goa Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "North Goa Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "North Goa Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "North Goa Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "North Goa Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "South Goa",
        "localBodies": [
          {
            "name": "South Goa Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "South Goa Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "South Goa Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "South Goa Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "South Goa Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "South Goa Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Gujarat",
    "districts": [
      {
        "name": "Ahmedabad",
        "localBodies": [
          {
            "name": "Ahmedabad Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Ahmedabad Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Ahmedabad Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ahmedabad Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Ahmedabad Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Ahmedabad Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Amreli",
        "localBodies": [
          {
            "name": "Amreli Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Amreli Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Amreli Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Amreli Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Amreli Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Amreli Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Anand",
        "localBodies": [
          {
            "name": "Anand Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Anand Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Anand Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Anand Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Anand Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Anand Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Aravalli",
        "localBodies": [
          {
            "name": "Aravalli Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Aravalli Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Aravalli Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Aravalli Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Aravalli Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Aravalli Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Banaskantha",
        "localBodies": [
          {
            "name": "Banaskantha Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Banaskantha Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Banaskantha Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Banaskantha Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Banaskantha Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Banaskantha Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bharuch",
        "localBodies": [
          {
            "name": "Bharuch Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bharuch Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bharuch Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bharuch Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bharuch Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bharuch Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bhavnagar",
        "localBodies": [
          {
            "name": "Bhavnagar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bhavnagar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bhavnagar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bhavnagar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bhavnagar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bhavnagar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Botad",
        "localBodies": [
          {
            "name": "Botad Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Botad Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Botad Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Botad Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Botad Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Botad Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Chhota Udaipur",
        "localBodies": [
          {
            "name": "Chhota Udaipur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Chhota Udaipur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chhota Udaipur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chhota Udaipur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Chhota Udaipur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Chhota Udaipur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Dahod",
        "localBodies": [
          {
            "name": "Dahod Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Dahod Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dahod Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dahod Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Dahod Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Dahod Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Dang",
        "localBodies": [
          {
            "name": "Dang Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Dang Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dang Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dang Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Dang Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Dang Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Devbhumi Dwarka",
        "localBodies": [
          {
            "name": "Devbhumi Dwarka Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Devbhumi Dwarka Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Devbhumi Dwarka Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Devbhumi Dwarka Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Devbhumi Dwarka Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Devbhumi Dwarka Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Gandhinagar",
        "localBodies": [
          {
            "name": "Gandhinagar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Gandhinagar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gandhinagar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gandhinagar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Gandhinagar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Gandhinagar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Gir Somnath",
        "localBodies": [
          {
            "name": "Gir Somnath Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Gir Somnath Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gir Somnath Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gir Somnath Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Gir Somnath Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Gir Somnath Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jamnagar",
        "localBodies": [
          {
            "name": "Jamnagar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jamnagar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jamnagar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jamnagar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jamnagar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jamnagar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Junagadh",
        "localBodies": [
          {
            "name": "Junagadh Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Junagadh Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Junagadh Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Junagadh Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Junagadh Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Junagadh Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kheda",
        "localBodies": [
          {
            "name": "Kheda Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kheda Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kheda Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kheda Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kheda Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kheda Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kutch",
        "localBodies": [
          {
            "name": "Kutch Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kutch Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kutch Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kutch Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kutch Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kutch Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mahisagar",
        "localBodies": [
          {
            "name": "Mahisagar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Mahisagar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mahisagar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mahisagar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mahisagar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mahisagar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mehsana",
        "localBodies": [
          {
            "name": "Mehsana Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Mehsana Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mehsana Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mehsana Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mehsana Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mehsana Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Morbi",
        "localBodies": [
          {
            "name": "Morbi Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Morbi Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Morbi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Morbi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Morbi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Morbi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Narmada",
        "localBodies": [
          {
            "name": "Narmada Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Narmada Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Narmada Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Narmada Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Narmada Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Narmada Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Navsari",
        "localBodies": [
          {
            "name": "Navsari Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Navsari Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Navsari Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Navsari Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Navsari Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Navsari Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Panchmahal",
        "localBodies": [
          {
            "name": "Panchmahal Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Panchmahal Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Panchmahal Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Panchmahal Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Panchmahal Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Panchmahal Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Patan",
        "localBodies": [
          {
            "name": "Patan Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Patan Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Patan Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Patan Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Patan Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Patan Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Porbandar",
        "localBodies": [
          {
            "name": "Porbandar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Porbandar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Porbandar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Porbandar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Porbandar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Porbandar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Rajkot",
        "localBodies": [
          {
            "name": "Rajkot Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Rajkot Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Rajkot Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Rajkot Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Rajkot Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Rajkot Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sabarkantha",
        "localBodies": [
          {
            "name": "Sabarkantha Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sabarkantha Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sabarkantha Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sabarkantha Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sabarkantha Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sabarkantha Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Surat",
        "localBodies": [
          {
            "name": "Surat Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Surat Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Surat Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Surat Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Surat Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Surat Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Surendranagar",
        "localBodies": [
          {
            "name": "Surendranagar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Surendranagar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Surendranagar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Surendranagar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Surendranagar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Surendranagar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Tapi",
        "localBodies": [
          {
            "name": "Tapi Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Tapi Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tapi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tapi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Tapi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Tapi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Vadodara",
        "localBodies": [
          {
            "name": "Vadodara Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Vadodara Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Vadodara Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Vadodara Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Vadodara Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Vadodara Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Valsad",
        "localBodies": [
          {
            "name": "Valsad Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Valsad Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Valsad Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Valsad Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Valsad Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Valsad Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Haryana",
    "districts": [
      {
        "name": "Ambala",
        "localBodies": [
          {
            "name": "Ambala Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Ambala Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ambala Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ambala Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Ambala Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Ambala Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bhiwani",
        "localBodies": [
          {
            "name": "Bhiwani Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bhiwani Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bhiwani Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bhiwani Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bhiwani Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bhiwani Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Charkhi Dadri",
        "localBodies": [
          {
            "name": "Charkhi Dadri Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Charkhi Dadri Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Charkhi Dadri Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Charkhi Dadri Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Charkhi Dadri Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Charkhi Dadri Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Faridabad",
        "localBodies": [
          {
            "name": "Faridabad Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Faridabad Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Faridabad Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Faridabad Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Faridabad Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Faridabad Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Fatehabad",
        "localBodies": [
          {
            "name": "Fatehabad Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Fatehabad Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Fatehabad Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Fatehabad Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Fatehabad Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Fatehabad Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Gurugram",
        "localBodies": [
          {
            "name": "Gurugram Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Gurugram Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gurugram Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gurugram Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Gurugram Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Gurugram Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Hisar",
        "localBodies": [
          {
            "name": "Hisar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Hisar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hisar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hisar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Hisar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Hisar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jhajjar",
        "localBodies": [
          {
            "name": "Jhajjar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jhajjar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jhajjar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jhajjar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jhajjar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jhajjar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jind",
        "localBodies": [
          {
            "name": "Jind Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jind Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jind Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jind Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jind Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jind Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kaithal",
        "localBodies": [
          {
            "name": "Kaithal Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kaithal Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kaithal Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kaithal Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kaithal Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kaithal Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Karnal",
        "localBodies": [
          {
            "name": "Karnal Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Karnal Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Karnal Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Karnal Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Karnal Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Karnal Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kurukshetra",
        "localBodies": [
          {
            "name": "Kurukshetra Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kurukshetra Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kurukshetra Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kurukshetra Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kurukshetra Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kurukshetra Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mahendragarh",
        "localBodies": [
          {
            "name": "Mahendragarh Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Mahendragarh Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mahendragarh Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mahendragarh Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mahendragarh Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mahendragarh Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Nuh",
        "localBodies": [
          {
            "name": "Nuh Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Nuh Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nuh Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nuh Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Nuh Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Nuh Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Palwal",
        "localBodies": [
          {
            "name": "Palwal Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Palwal Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Palwal Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Palwal Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Palwal Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Palwal Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Panchkula",
        "localBodies": [
          {
            "name": "Panchkula Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Panchkula Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Panchkula Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Panchkula Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Panchkula Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Panchkula Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Panipat",
        "localBodies": [
          {
            "name": "Panipat Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Panipat Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Panipat Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Panipat Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Panipat Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Panipat Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Rewari",
        "localBodies": [
          {
            "name": "Rewari Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Rewari Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Rewari Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Rewari Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Rewari Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Rewari Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Rohtak",
        "localBodies": [
          {
            "name": "Rohtak Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Rohtak Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Rohtak Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Rohtak Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Rohtak Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Rohtak Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sirsa",
        "localBodies": [
          {
            "name": "Sirsa Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sirsa Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sirsa Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sirsa Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sirsa Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sirsa Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sonipat",
        "localBodies": [
          {
            "name": "Sonipat Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sonipat Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sonipat Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sonipat Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sonipat Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sonipat Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Yamunanagar",
        "localBodies": [
          {
            "name": "Yamunanagar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Yamunanagar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Yamunanagar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Yamunanagar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Yamunanagar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Yamunanagar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Himachal Pradesh",
    "districts": [
      {
        "name": "Bilaspur",
        "localBodies": [
          {
            "name": "Bilaspur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bilaspur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bilaspur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bilaspur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bilaspur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bilaspur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Chamba",
        "localBodies": [
          {
            "name": "Chamba Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Chamba Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chamba Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chamba Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Chamba Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Chamba Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Hamirpur",
        "localBodies": [
          {
            "name": "Hamirpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Hamirpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hamirpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hamirpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Hamirpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Hamirpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kangra",
        "localBodies": [
          {
            "name": "Kangra Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kangra Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kangra Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kangra Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kangra Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kangra Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kinnaur",
        "localBodies": [
          {
            "name": "Kinnaur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kinnaur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kinnaur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kinnaur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kinnaur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kinnaur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kullu",
        "localBodies": [
          {
            "name": "Kullu Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kullu Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kullu Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kullu Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kullu Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kullu Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Lahaul and Spiti",
        "localBodies": [
          {
            "name": "Lahaul and Spiti Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Lahaul and Spiti Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Lahaul and Spiti Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Lahaul and Spiti Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Lahaul and Spiti Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Lahaul and Spiti Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mandi",
        "localBodies": [
          {
            "name": "Mandi Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Mandi Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mandi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mandi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mandi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mandi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Shimla",
        "localBodies": [
          {
            "name": "Shimla Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Shimla Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Shimla Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Shimla Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Shimla Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Shimla Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sirmaur",
        "localBodies": [
          {
            "name": "Sirmaur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sirmaur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sirmaur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sirmaur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sirmaur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sirmaur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Solan",
        "localBodies": [
          {
            "name": "Solan Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Solan Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Solan Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Solan Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Solan Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Solan Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Una",
        "localBodies": [
          {
            "name": "Una Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Una Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Una Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Una Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Una Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Una Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Jammu and Kashmir",
    "districts": [
      {
        "name": "Anantnag",
        "localBodies": [
          {
            "name": "Anantnag Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Anantnag Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Anantnag Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Anantnag Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Anantnag Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Anantnag Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bandipora",
        "localBodies": [
          {
            "name": "Bandipora Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bandipora Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bandipora Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bandipora Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bandipora Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bandipora Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Baramulla",
        "localBodies": [
          {
            "name": "Baramulla Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Baramulla Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Baramulla Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Baramulla Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Baramulla Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Baramulla Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Budgam",
        "localBodies": [
          {
            "name": "Budgam Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Budgam Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Budgam Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Budgam Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Budgam Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Budgam Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Doda",
        "localBodies": [
          {
            "name": "Doda Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Doda Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Doda Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Doda Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Doda Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Doda Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Ganderbal",
        "localBodies": [
          {
            "name": "Ganderbal Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Ganderbal Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ganderbal Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ganderbal Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Ganderbal Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Ganderbal Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jammu",
        "localBodies": [
          {
            "name": "Jammu Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jammu Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jammu Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jammu Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jammu Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jammu Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kathua",
        "localBodies": [
          {
            "name": "Kathua Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kathua Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kathua Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kathua Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kathua Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kathua Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kishtwar",
        "localBodies": [
          {
            "name": "Kishtwar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kishtwar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kishtwar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kishtwar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kishtwar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kishtwar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kulgam",
        "localBodies": [
          {
            "name": "Kulgam Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kulgam Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kulgam Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kulgam Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kulgam Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kulgam Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kupwara",
        "localBodies": [
          {
            "name": "Kupwara Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kupwara Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kupwara Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kupwara Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kupwara Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kupwara Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Poonch",
        "localBodies": [
          {
            "name": "Poonch Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Poonch Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Poonch Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Poonch Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Poonch Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Poonch Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Pulwama",
        "localBodies": [
          {
            "name": "Pulwama Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Pulwama Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pulwama Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pulwama Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Pulwama Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Pulwama Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Rajouri",
        "localBodies": [
          {
            "name": "Rajouri Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Rajouri Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Rajouri Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Rajouri Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Rajouri Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Rajouri Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Ramban",
        "localBodies": [
          {
            "name": "Ramban Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Ramban Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ramban Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ramban Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Ramban Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Ramban Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Reasi",
        "localBodies": [
          {
            "name": "Reasi Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Reasi Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Reasi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Reasi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Reasi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Reasi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Samba",
        "localBodies": [
          {
            "name": "Samba Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Samba Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Samba Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Samba Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Samba Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Samba Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Shopian",
        "localBodies": [
          {
            "name": "Shopian Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Shopian Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Shopian Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Shopian Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Shopian Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Shopian Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Srinagar",
        "localBodies": [
          {
            "name": "Srinagar Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Srinagar Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Srinagar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Srinagar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Srinagar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Srinagar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Udhampur",
        "localBodies": [
          {
            "name": "Udhampur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Udhampur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Udhampur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Udhampur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Udhampur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Udhampur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Jharkhand",
    "districts": [
      {
        "name": "Bokaro",
        "localBodies": [
          {
            "name": "Bokaro Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bokaro Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bokaro Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bokaro Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bokaro Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bokaro Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Chatra",
        "localBodies": [
          {
            "name": "Chatra Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Chatra Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chatra Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chatra Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Chatra Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Chatra Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Deoghar",
        "localBodies": [
          {
            "name": "Deoghar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Deoghar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Deoghar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Deoghar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Deoghar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Deoghar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Dhanbad",
        "localBodies": [
          {
            "name": "Dhanbad Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Dhanbad Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Dhanbad Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dhanbad Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Dhanbad Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Dhanbad Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Dumka",
        "localBodies": [
          {
            "name": "Dumka Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Dumka Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dumka Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dumka Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Dumka Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Dumka Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "East Singhbhum",
        "localBodies": [
          {
            "name": "East Singhbhum Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "East Singhbhum Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "East Singhbhum Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "East Singhbhum Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "East Singhbhum Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "East Singhbhum Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Garhwa",
        "localBodies": [
          {
            "name": "Garhwa Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Garhwa Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Garhwa Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Garhwa Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Garhwa Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Garhwa Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Giridih",
        "localBodies": [
          {
            "name": "Giridih Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Giridih Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Giridih Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Giridih Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Giridih Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Giridih Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Godda",
        "localBodies": [
          {
            "name": "Godda Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Godda Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Godda Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Godda Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Godda Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Godda Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Gumla",
        "localBodies": [
          {
            "name": "Gumla Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Gumla Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gumla Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gumla Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Gumla Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Gumla Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Hazaribagh",
        "localBodies": [
          {
            "name": "Hazaribagh Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Hazaribagh Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hazaribagh Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hazaribagh Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Hazaribagh Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Hazaribagh Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jamtara",
        "localBodies": [
          {
            "name": "Jamtara Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jamtara Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jamtara Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jamtara Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jamtara Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jamtara Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Khunti",
        "localBodies": [
          {
            "name": "Khunti Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Khunti Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Khunti Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Khunti Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Khunti Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Khunti Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Koderma",
        "localBodies": [
          {
            "name": "Koderma Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Koderma Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Koderma Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Koderma Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Koderma Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Koderma Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Latehar",
        "localBodies": [
          {
            "name": "Latehar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Latehar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Latehar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Latehar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Latehar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Latehar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Lohardaga",
        "localBodies": [
          {
            "name": "Lohardaga Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Lohardaga Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Lohardaga Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Lohardaga Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Lohardaga Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Lohardaga Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Pakur",
        "localBodies": [
          {
            "name": "Pakur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Pakur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pakur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pakur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Pakur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Pakur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Palamu",
        "localBodies": [
          {
            "name": "Palamu Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Palamu Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Palamu Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Palamu Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Palamu Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Palamu Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Ramgarh",
        "localBodies": [
          {
            "name": "Ramgarh Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Ramgarh Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ramgarh Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ramgarh Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Ramgarh Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Ramgarh Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Ranchi",
        "localBodies": [
          {
            "name": "Ranchi Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Ranchi Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Ranchi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ranchi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Ranchi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Ranchi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sahibganj",
        "localBodies": [
          {
            "name": "Sahibganj Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sahibganj Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sahibganj Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sahibganj Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sahibganj Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sahibganj Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Seraikela Kharsawan",
        "localBodies": [
          {
            "name": "Seraikela Kharsawan Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Seraikela Kharsawan Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Seraikela Kharsawan Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Seraikela Kharsawan Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Seraikela Kharsawan Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Seraikela Kharsawan Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Simdega",
        "localBodies": [
          {
            "name": "Simdega Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Simdega Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Simdega Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Simdega Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Simdega Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Simdega Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "West Singhbhum",
        "localBodies": [
          {
            "name": "West Singhbhum Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "West Singhbhum Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "West Singhbhum Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "West Singhbhum Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "West Singhbhum Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "West Singhbhum Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Karnataka",
    "districts": [
      {
        "name": "Bagalkote",
        "localBodies": [
          {
            "name": "Bagalkote Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bagalkote Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bagalkote Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bagalkote Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bagalkote Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bagalkote Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Ballari",
        "localBodies": [
          {
            "name": "Ballari Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Ballari Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ballari Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ballari Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Ballari Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Ballari Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Belagavi",
        "localBodies": [
          {
            "name": "Belagavi Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Belagavi Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Belagavi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Belagavi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Belagavi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Belagavi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bengaluru Rural",
        "localBodies": [
          {
            "name": "Bengaluru Rural Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bengaluru Rural Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bengaluru Rural Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bengaluru Rural Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bengaluru Rural Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bengaluru Rural Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bengaluru Urban",
        "localBodies": [
          {
            "name": "Bengaluru Urban Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Bengaluru Urban Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Bengaluru Urban Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bengaluru Urban Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bengaluru Urban Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bengaluru Urban Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bidar",
        "localBodies": [
          {
            "name": "Bidar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bidar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bidar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bidar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bidar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bidar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Chamarajanagar",
        "localBodies": [
          {
            "name": "Chamarajanagar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Chamarajanagar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chamarajanagar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chamarajanagar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Chamarajanagar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Chamarajanagar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Chikkaballapura",
        "localBodies": [
          {
            "name": "Chikkaballapura Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Chikkaballapura Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chikkaballapura Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chikkaballapura Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Chikkaballapura Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Chikkaballapura Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Chikkamagaluru",
        "localBodies": [
          {
            "name": "Chikkamagaluru Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Chikkamagaluru Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chikkamagaluru Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chikkamagaluru Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Chikkamagaluru Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Chikkamagaluru Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Chitradurga",
        "localBodies": [
          {
            "name": "Chitradurga Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Chitradurga Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chitradurga Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chitradurga Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Chitradurga Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Chitradurga Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Dakshina Kannada",
        "localBodies": [
          {
            "name": "Dakshina Kannada Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Dakshina Kannada Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dakshina Kannada Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dakshina Kannada Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Dakshina Kannada Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Dakshina Kannada Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Davanagere",
        "localBodies": [
          {
            "name": "Davanagere Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Davanagere Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Davanagere Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Davanagere Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Davanagere Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Davanagere Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Dharwad",
        "localBodies": [
          {
            "name": "Dharwad Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Dharwad Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dharwad Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dharwad Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Dharwad Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Dharwad Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Gadag",
        "localBodies": [
          {
            "name": "Gadag Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Gadag Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gadag Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gadag Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Gadag Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Gadag Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Hassan",
        "localBodies": [
          {
            "name": "Hassan Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Hassan Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hassan Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hassan Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Hassan Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Hassan Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Haveri",
        "localBodies": [
          {
            "name": "Haveri Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Haveri Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Haveri Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Haveri Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Haveri Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Haveri Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kalaburagi",
        "localBodies": [
          {
            "name": "Kalaburagi Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kalaburagi Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kalaburagi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kalaburagi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kalaburagi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kalaburagi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kodagu",
        "localBodies": [
          {
            "name": "Kodagu Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kodagu Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kodagu Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kodagu Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kodagu Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kodagu Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kolar",
        "localBodies": [
          {
            "name": "Kolar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kolar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kolar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kolar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kolar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kolar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Koppal",
        "localBodies": [
          {
            "name": "Koppal Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Koppal Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Koppal Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Koppal Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Koppal Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Koppal Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mandya",
        "localBodies": [
          {
            "name": "Mandya Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Mandya Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mandya Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mandya Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mandya Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mandya Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mysuru",
        "localBodies": [
          {
            "name": "Mysuru Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Mysuru Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mysuru Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mysuru Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mysuru Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mysuru Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Raichur",
        "localBodies": [
          {
            "name": "Raichur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Raichur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Raichur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Raichur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Raichur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Raichur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Ramanagara",
        "localBodies": [
          {
            "name": "Ramanagara Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Ramanagara Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ramanagara Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ramanagara Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Ramanagara Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Ramanagara Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Shivamogga",
        "localBodies": [
          {
            "name": "Shivamogga Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Shivamogga Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Shivamogga Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Shivamogga Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Shivamogga Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Shivamogga Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Tumakuru",
        "localBodies": [
          {
            "name": "Tumakuru Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Tumakuru Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tumakuru Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tumakuru Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Tumakuru Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Tumakuru Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Udupi",
        "localBodies": [
          {
            "name": "Udupi Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Udupi Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Udupi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Udupi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Udupi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Udupi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Uttara Kannada",
        "localBodies": [
          {
            "name": "Uttara Kannada Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Uttara Kannada Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Uttara Kannada Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Uttara Kannada Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Uttara Kannada Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Uttara Kannada Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Vijayanagara",
        "localBodies": [
          {
            "name": "Vijayanagara Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Vijayanagara Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Vijayanagara Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Vijayanagara Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Vijayanagara Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Vijayanagara Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Vijayapura",
        "localBodies": [
          {
            "name": "Vijayapura Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Vijayapura Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Vijayapura Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Vijayapura Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Vijayapura Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Vijayapura Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Yadgir",
        "localBodies": [
          {
            "name": "Yadgir Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Yadgir Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Yadgir Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Yadgir Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Yadgir Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Yadgir Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Kerala",
    "districts": [
      {
        "name": "Alappuzha",
        "localBodies": [
          {
            "name": "Alappuzha Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Alappuzha Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Alappuzha Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Alappuzha Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Alappuzha Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Alappuzha Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Ernakulam",
        "localBodies": [
          {
            "name": "Ernakulam Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Ernakulam Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ernakulam Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ernakulam Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Ernakulam Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Ernakulam Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Idukki",
        "localBodies": [
          {
            "name": "Idukki Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Idukki Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Idukki Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Idukki Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Idukki Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Idukki Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kannur",
        "localBodies": [
          {
            "name": "Kannur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kannur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kannur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kannur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kannur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kannur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kasaragod",
        "localBodies": [
          {
            "name": "Kasaragod Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kasaragod Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kasaragod Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kasaragod Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kasaragod Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kasaragod Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kollam",
        "localBodies": [
          {
            "name": "Kollam Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kollam Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kollam Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kollam Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kollam Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kollam Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kottayam",
        "localBodies": [
          {
            "name": "Kottayam Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kottayam Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kottayam Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kottayam Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kottayam Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kottayam Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kozhikode",
        "localBodies": [
          {
            "name": "Kozhikode Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kozhikode Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kozhikode Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kozhikode Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kozhikode Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kozhikode Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Malappuram",
        "localBodies": [
          {
            "name": "Malappuram Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Malappuram Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Malappuram Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Malappuram Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Malappuram Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Malappuram Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Palakkad",
        "localBodies": [
          {
            "name": "Palakkad Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Palakkad Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Palakkad Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Palakkad Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Palakkad Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Palakkad Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Pathanamthitta",
        "localBodies": [
          {
            "name": "Pathanamthitta Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Pathanamthitta Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pathanamthitta Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pathanamthitta Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Pathanamthitta Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Pathanamthitta Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Thiruvananthapuram",
        "localBodies": [
          {
            "name": "Thiruvananthapuram Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Thiruvananthapuram Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Thiruvananthapuram Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Thiruvananthapuram Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Thiruvananthapuram Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Thiruvananthapuram Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Thrissur",
        "localBodies": [
          {
            "name": "Thrissur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Thrissur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Thrissur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Thrissur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Thrissur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Thrissur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Wayanad",
        "localBodies": [
          {
            "name": "Wayanad Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Wayanad Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Wayanad Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Wayanad Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Wayanad Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Wayanad Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Ladakh",
    "districts": [
      {
        "name": "Kargil",
        "localBodies": [
          {
            "name": "Kargil Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kargil Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kargil Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kargil Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kargil Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kargil Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Leh",
        "localBodies": [
          {
            "name": "Leh Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Leh Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Leh Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Leh Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Leh Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Leh Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Lakshadweep",
    "districts": [
      {
        "name": "Lakshadweep",
        "localBodies": [
          {
            "name": "Lakshadweep Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Lakshadweep Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Lakshadweep Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Lakshadweep Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Lakshadweep Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Lakshadweep Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Madhya Pradesh",
    "districts": [
      {
        "name": "Agar Malwa",
        "localBodies": [
          {
            "name": "Agar Malwa Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Agar Malwa Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Agar Malwa Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Agar Malwa Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Agar Malwa Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Agar Malwa Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Alirajpur",
        "localBodies": [
          {
            "name": "Alirajpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Alirajpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Alirajpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Alirajpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Alirajpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Alirajpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Anuppur",
        "localBodies": [
          {
            "name": "Anuppur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Anuppur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Anuppur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Anuppur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Anuppur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Anuppur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Ashoknagar",
        "localBodies": [
          {
            "name": "Ashoknagar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Ashoknagar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ashoknagar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ashoknagar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Ashoknagar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Ashoknagar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Balaghat",
        "localBodies": [
          {
            "name": "Balaghat Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Balaghat Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Balaghat Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Balaghat Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Balaghat Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Balaghat Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Barwani",
        "localBodies": [
          {
            "name": "Barwani Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Barwani Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Barwani Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Barwani Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Barwani Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Barwani Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Betul",
        "localBodies": [
          {
            "name": "Betul Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Betul Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Betul Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Betul Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Betul Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Betul Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bhind",
        "localBodies": [
          {
            "name": "Bhind Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bhind Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bhind Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bhind Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bhind Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bhind Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bhopal",
        "localBodies": [
          {
            "name": "Bhopal Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Bhopal Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Bhopal Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bhopal Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bhopal Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bhopal Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Burhanpur",
        "localBodies": [
          {
            "name": "Burhanpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Burhanpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Burhanpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Burhanpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Burhanpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Burhanpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Chhatarpur",
        "localBodies": [
          {
            "name": "Chhatarpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Chhatarpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chhatarpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chhatarpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Chhatarpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Chhatarpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Chhindwara",
        "localBodies": [
          {
            "name": "Chhindwara Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Chhindwara Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chhindwara Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chhindwara Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Chhindwara Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Chhindwara Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Damoh",
        "localBodies": [
          {
            "name": "Damoh Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Damoh Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Damoh Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Damoh Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Damoh Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Damoh Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Datia",
        "localBodies": [
          {
            "name": "Datia Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Datia Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Datia Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Datia Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Datia Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Datia Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Dewas",
        "localBodies": [
          {
            "name": "Dewas Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Dewas Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dewas Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dewas Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Dewas Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Dewas Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Dhar",
        "localBodies": [
          {
            "name": "Dhar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Dhar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dhar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dhar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Dhar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Dhar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Dindori",
        "localBodies": [
          {
            "name": "Dindori Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Dindori Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dindori Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dindori Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Dindori Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Dindori Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Guna",
        "localBodies": [
          {
            "name": "Guna Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Guna Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Guna Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Guna Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Guna Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Guna Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Gwalior",
        "localBodies": [
          {
            "name": "Gwalior Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Gwalior Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Gwalior Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gwalior Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Gwalior Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Gwalior Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Harda",
        "localBodies": [
          {
            "name": "Harda Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Harda Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Harda Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Harda Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Harda Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Harda Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Hoshangabad (Narmadapuram)",
        "localBodies": [
          {
            "name": "Hoshangabad Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Hoshangabad Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hoshangabad Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hoshangabad Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Hoshangabad Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Hoshangabad Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Indore",
        "localBodies": [
          {
            "name": "Indore Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Indore Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Indore Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Indore Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Indore Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Indore Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jabalpur",
        "localBodies": [
          {
            "name": "Jabalpur Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Jabalpur Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Jabalpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jabalpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jabalpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jabalpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jhabua",
        "localBodies": [
          {
            "name": "Jhabua Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jhabua Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jhabua Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jhabua Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jhabua Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jhabua Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Katni",
        "localBodies": [
          {
            "name": "Katni Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Katni Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Katni Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Katni Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Katni Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Katni Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Khandwa",
        "localBodies": [
          {
            "name": "Khandwa Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Khandwa Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Khandwa Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Khandwa Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Khandwa Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Khandwa Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Khargone",
        "localBodies": [
          {
            "name": "Khargone Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Khargone Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Khargone Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Khargone Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Khargone Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Khargone Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Maihar",
        "localBodies": [
          {
            "name": "Maihar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Maihar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Maihar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Maihar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Maihar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Maihar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mandla",
        "localBodies": [
          {
            "name": "Mandla Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Mandla Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mandla Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mandla Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mandla Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mandla Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mandsaur",
        "localBodies": [
          {
            "name": "Mandsaur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Mandsaur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mandsaur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mandsaur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mandsaur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mandsaur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mauganj",
        "localBodies": [
          {
            "name": "Mauganj Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Mauganj Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mauganj Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mauganj Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mauganj Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mauganj Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Morena",
        "localBodies": [
          {
            "name": "Morena Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Morena Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Morena Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Morena Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Morena Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Morena Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Narsinghpur",
        "localBodies": [
          {
            "name": "Narsinghpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Narsinghpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Narsinghpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Narsinghpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Narsinghpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Narsinghpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Neemuch",
        "localBodies": [
          {
            "name": "Neemuch Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Neemuch Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Neemuch Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Neemuch Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Neemuch Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Neemuch Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Niwari",
        "localBodies": [
          {
            "name": "Niwari Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Niwari Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Niwari Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Niwari Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Niwari Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Niwari Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Pandhurna",
        "localBodies": [
          {
            "name": "Pandhurna Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Pandhurna Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pandhurna Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pandhurna Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Pandhurna Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Pandhurna Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Panna",
        "localBodies": [
          {
            "name": "Panna Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Panna Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Panna Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Panna Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Panna Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Panna Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Raisen",
        "localBodies": [
          {
            "name": "Raisen Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Raisen Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Raisen Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Raisen Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Raisen Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Raisen Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Rajgarh",
        "localBodies": [
          {
            "name": "Rajgarh Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Rajgarh Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Rajgarh Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Rajgarh Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Rajgarh Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Rajgarh Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Ratlam",
        "localBodies": [
          {
            "name": "Ratlam Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Ratlam Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ratlam Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ratlam Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Ratlam Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Ratlam Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Rewa",
        "localBodies": [
          {
            "name": "Rewa Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Rewa Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Rewa Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Rewa Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Rewa Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Rewa Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sagar",
        "localBodies": [
          {
            "name": "Sagar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sagar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sagar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sagar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sagar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sagar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Satna",
        "localBodies": [
          {
            "name": "Satna Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Satna Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Satna Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Satna Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Satna Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Satna Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sehore",
        "localBodies": [
          {
            "name": "Sehore Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sehore Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sehore Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sehore Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sehore Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sehore Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Seoni",
        "localBodies": [
          {
            "name": "Seoni Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Seoni Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Seoni Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Seoni Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Seoni Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Seoni Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Shahdol",
        "localBodies": [
          {
            "name": "Shahdol Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Shahdol Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Shahdol Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Shahdol Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Shahdol Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Shahdol Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Shajapur",
        "localBodies": [
          {
            "name": "Shajapur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Shajapur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Shajapur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Shajapur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Shajapur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Shajapur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sheopur",
        "localBodies": [
          {
            "name": "Sheopur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sheopur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sheopur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sheopur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sheopur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sheopur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Shivpuri",
        "localBodies": [
          {
            "name": "Shivpuri Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Shivpuri Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Shivpuri Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Shivpuri Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Shivpuri Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Shivpuri Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sidhi",
        "localBodies": [
          {
            "name": "Sidhi Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sidhi Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sidhi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sidhi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sidhi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sidhi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Singrauli",
        "localBodies": [
          {
            "name": "Singrauli Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Singrauli Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Singrauli Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Singrauli Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Singrauli Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Singrauli Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Tikamgarh",
        "localBodies": [
          {
            "name": "Tikamgarh Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Tikamgarh Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tikamgarh Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tikamgarh Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Tikamgarh Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Tikamgarh Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Ujjain",
        "localBodies": [
          {
            "name": "Ujjain Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Ujjain Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ujjain Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ujjain Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Ujjain Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Ujjain Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Umaria",
        "localBodies": [
          {
            "name": "Umaria Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Umaria Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Umaria Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Umaria Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Umaria Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Umaria Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Vidisha",
        "localBodies": [
          {
            "name": "Vidisha Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Vidisha Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Vidisha Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Vidisha Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Vidisha Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Vidisha Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Maharashtra",
    "districts": [
      {
        "name": "Ahmednagar (Ahilyanagar)",
        "localBodies": [
          {
            "name": "Ahmednagar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Ahmednagar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ahmednagar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ahmednagar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Ahmednagar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Ahmednagar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Akola",
        "localBodies": [
          {
            "name": "Akola Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Akola Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Akola Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Akola Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Akola Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Akola Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Amravati",
        "localBodies": [
          {
            "name": "Amravati Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Amravati Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Amravati Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Amravati Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Amravati Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Amravati Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Chhatrapati Sambhajinagar (Aurangabad)",
        "localBodies": [
          {
            "name": "Chhatrapati Sambhajinagar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Chhatrapati Sambhajinagar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chhatrapati Sambhajinagar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chhatrapati Sambhajinagar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Chhatrapati Sambhajinagar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Chhatrapati Sambhajinagar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Beed",
        "localBodies": [
          {
            "name": "Beed Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Beed Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Beed Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Beed Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Beed Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Beed Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bhandara",
        "localBodies": [
          {
            "name": "Bhandara Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bhandara Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bhandara Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bhandara Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bhandara Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bhandara Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Buldhana",
        "localBodies": [
          {
            "name": "Buldhana Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Buldhana Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Buldhana Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Buldhana Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Buldhana Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Buldhana Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Chandrapur",
        "localBodies": [
          {
            "name": "Chandrapur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Chandrapur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chandrapur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chandrapur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Chandrapur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Chandrapur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Dhule",
        "localBodies": [
          {
            "name": "Dhule Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Dhule Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dhule Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dhule Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Dhule Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Dhule Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Gadchiroli",
        "localBodies": [
          {
            "name": "Gadchiroli Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Gadchiroli Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gadchiroli Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gadchiroli Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Gadchiroli Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Gadchiroli Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Gondia",
        "localBodies": [
          {
            "name": "Gondia Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Gondia Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gondia Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gondia Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Gondia Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Gondia Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Hingoli",
        "localBodies": [
          {
            "name": "Hingoli Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Hingoli Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hingoli Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hingoli Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Hingoli Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Hingoli Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jalgaon",
        "localBodies": [
          {
            "name": "Jalgaon Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jalgaon Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jalgaon Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jalgaon Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jalgaon Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jalgaon Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jalna",
        "localBodies": [
          {
            "name": "Jalna Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jalna Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jalna Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jalna Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jalna Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jalna Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kolhapur",
        "localBodies": [
          {
            "name": "Kolhapur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kolhapur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kolhapur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kolhapur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kolhapur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kolhapur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Latur",
        "localBodies": [
          {
            "name": "Latur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Latur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Latur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Latur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Latur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Latur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mumbai City",
        "localBodies": [
          {
            "name": "Mumbai City Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Mumbai City Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Mumbai City Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mumbai City Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mumbai City Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mumbai City Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mumbai Suburban",
        "localBodies": [
          {
            "name": "Mumbai Suburban Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Mumbai Suburban Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Mumbai Suburban Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mumbai Suburban Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mumbai Suburban Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mumbai Suburban Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Nagpur",
        "localBodies": [
          {
            "name": "Nagpur Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Nagpur Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Nagpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nagpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Nagpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Nagpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Nanded",
        "localBodies": [
          {
            "name": "Nanded Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Nanded Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nanded Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nanded Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Nanded Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Nanded Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Nandurbar",
        "localBodies": [
          {
            "name": "Nandurbar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Nandurbar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nandurbar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nandurbar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Nandurbar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Nandurbar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Nashik",
        "localBodies": [
          {
            "name": "Nashik Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Nashik Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Nashik Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nashik Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Nashik Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Nashik Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Dharashiv (Osmanabad)",
        "localBodies": [
          {
            "name": "Dharashiv Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Dharashiv Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dharashiv Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dharashiv Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Dharashiv Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Dharashiv Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Palghar",
        "localBodies": [
          {
            "name": "Palghar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Palghar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Palghar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Palghar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Palghar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Palghar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Parbhani",
        "localBodies": [
          {
            "name": "Parbhani Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Parbhani Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Parbhani Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Parbhani Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Parbhani Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Parbhani Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Pune",
        "localBodies": [
          {
            "name": "Pune Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Pune Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Pune Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pune Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Pune Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Pune Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Raigad",
        "localBodies": [
          {
            "name": "Raigad Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Raigad Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Raigad Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Raigad Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Raigad Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Raigad Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Ratnagiri",
        "localBodies": [
          {
            "name": "Ratnagiri Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Ratnagiri Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ratnagiri Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ratnagiri Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Ratnagiri Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Ratnagiri Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sangli",
        "localBodies": [
          {
            "name": "Sangli Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sangli Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sangli Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sangli Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sangli Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sangli Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Satara",
        "localBodies": [
          {
            "name": "Satara Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Satara Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Satara Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Satara Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Satara Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Satara Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sindhudurg",
        "localBodies": [
          {
            "name": "Sindhudurg Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sindhudurg Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sindhudurg Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sindhudurg Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sindhudurg Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sindhudurg Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Solapur",
        "localBodies": [
          {
            "name": "Solapur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Solapur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Solapur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Solapur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Solapur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Solapur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Thane",
        "localBodies": [
          {
            "name": "Thane Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Thane Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Thane Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Thane Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Thane Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Thane Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Wardha",
        "localBodies": [
          {
            "name": "Wardha Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Wardha Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Wardha Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Wardha Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Wardha Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Wardha Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Washim",
        "localBodies": [
          {
            "name": "Washim Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Washim Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Washim Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Washim Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Washim Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Washim Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Yavatmal",
        "localBodies": [
          {
            "name": "Yavatmal Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Yavatmal Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Yavatmal Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Yavatmal Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Yavatmal Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Yavatmal Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Manipur",
    "districts": [
      {
        "name": "Bishnupur",
        "localBodies": [
          {
            "name": "Bishnupur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bishnupur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bishnupur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bishnupur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bishnupur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bishnupur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Chandel",
        "localBodies": [
          {
            "name": "Chandel Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Chandel Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chandel Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chandel Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Chandel Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Chandel Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Churachandpur",
        "localBodies": [
          {
            "name": "Churachandpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Churachandpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Churachandpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Churachandpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Churachandpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Churachandpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Imphal East",
        "localBodies": [
          {
            "name": "Imphal East Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Imphal East Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Imphal East Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Imphal East Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Imphal East Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Imphal East Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Imphal West",
        "localBodies": [
          {
            "name": "Imphal West Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Imphal West Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Imphal West Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Imphal West Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Imphal West Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Imphal West Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jiribam",
        "localBodies": [
          {
            "name": "Jiribam Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jiribam Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jiribam Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jiribam Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jiribam Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jiribam Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kakching",
        "localBodies": [
          {
            "name": "Kakching Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kakching Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kakching Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kakching Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kakching Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kakching Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kamjong",
        "localBodies": [
          {
            "name": "Kamjong Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kamjong Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kamjong Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kamjong Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kamjong Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kamjong Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kangpokpi",
        "localBodies": [
          {
            "name": "Kangpokpi Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kangpokpi Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kangpokpi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kangpokpi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kangpokpi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kangpokpi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Noney",
        "localBodies": [
          {
            "name": "Noney Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Noney Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Noney Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Noney Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Noney Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Noney Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Pherzawl",
        "localBodies": [
          {
            "name": "Pherzawl Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Pherzawl Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pherzawl Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pherzawl Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Pherzawl Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Pherzawl Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Senapati",
        "localBodies": [
          {
            "name": "Senapati Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Senapati Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Senapati Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Senapati Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Senapati Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Senapati Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Tamenglong",
        "localBodies": [
          {
            "name": "Tamenglong Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Tamenglong Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tamenglong Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tamenglong Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Tamenglong Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Tamenglong Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Tengnoupal",
        "localBodies": [
          {
            "name": "Tengnoupal Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Tengnoupal Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tengnoupal Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tengnoupal Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Tengnoupal Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Tengnoupal Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Thoubal",
        "localBodies": [
          {
            "name": "Thoubal Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Thoubal Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Thoubal Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Thoubal Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Thoubal Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Thoubal Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Ukhrul",
        "localBodies": [
          {
            "name": "Ukhrul Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Ukhrul Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ukhrul Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ukhrul Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Ukhrul Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Ukhrul Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Meghalaya",
    "districts": [
      {
        "name": "Eastern West Khasi Hills",
        "localBodies": [
          {
            "name": "Eastern West Khasi Hills Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Eastern West Khasi Hills Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Eastern West Khasi Hills Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Eastern West Khasi Hills Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Eastern West Khasi Hills Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Eastern West Khasi Hills Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "East Garo Hills",
        "localBodies": [
          {
            "name": "East Garo Hills Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "East Garo Hills Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "East Garo Hills Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "East Garo Hills Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "East Garo Hills Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "East Garo Hills Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "East Jaintia Hills",
        "localBodies": [
          {
            "name": "East Jaintia Hills Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "East Jaintia Hills Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "East Jaintia Hills Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "East Jaintia Hills Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "East Jaintia Hills Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "East Jaintia Hills Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "East Khasi Hills",
        "localBodies": [
          {
            "name": "East Khasi Hills Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "East Khasi Hills Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "East Khasi Hills Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "East Khasi Hills Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "East Khasi Hills Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "East Khasi Hills Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "North Garo Hills",
        "localBodies": [
          {
            "name": "North Garo Hills Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "North Garo Hills Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "North Garo Hills Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "North Garo Hills Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "North Garo Hills Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "North Garo Hills Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Ri-Bhoi",
        "localBodies": [
          {
            "name": "Ri-Bhoi Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Ri-Bhoi Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ri-Bhoi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ri-Bhoi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Ri-Bhoi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Ri-Bhoi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "South Garo Hills",
        "localBodies": [
          {
            "name": "South Garo Hills Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "South Garo Hills Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "South Garo Hills Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "South Garo Hills Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "South Garo Hills Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "South Garo Hills Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "South West Garo Hills",
        "localBodies": [
          {
            "name": "South West Garo Hills Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "South West Garo Hills Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "South West Garo Hills Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "South West Garo Hills Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "South West Garo Hills Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "South West Garo Hills Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "South West Khasi Hills",
        "localBodies": [
          {
            "name": "South West Khasi Hills Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "South West Khasi Hills Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "South West Khasi Hills Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "South West Khasi Hills Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "South West Khasi Hills Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "South West Khasi Hills Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "West Garo Hills",
        "localBodies": [
          {
            "name": "West Garo Hills Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "West Garo Hills Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "West Garo Hills Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "West Garo Hills Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "West Garo Hills Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "West Garo Hills Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "West Jaintia Hills",
        "localBodies": [
          {
            "name": "West Jaintia Hills Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "West Jaintia Hills Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "West Jaintia Hills Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "West Jaintia Hills Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "West Jaintia Hills Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "West Jaintia Hills Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "West Khasi Hills",
        "localBodies": [
          {
            "name": "West Khasi Hills Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "West Khasi Hills Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "West Khasi Hills Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "West Khasi Hills Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "West Khasi Hills Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "West Khasi Hills Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Mizoram",
    "districts": [
      {
        "name": "Aizawl",
        "localBodies": [
          {
            "name": "Aizawl Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Aizawl Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Aizawl Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Aizawl Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Aizawl Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Aizawl Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Champhai",
        "localBodies": [
          {
            "name": "Champhai Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Champhai Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Champhai Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Champhai Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Champhai Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Champhai Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Hnahthial",
        "localBodies": [
          {
            "name": "Hnahthial Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Hnahthial Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hnahthial Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hnahthial Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Hnahthial Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Hnahthial Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Khawzawl",
        "localBodies": [
          {
            "name": "Khawzawl Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Khawzawl Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Khawzawl Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Khawzawl Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Khawzawl Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Khawzawl Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kolasib",
        "localBodies": [
          {
            "name": "Kolasib Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kolasib Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kolasib Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kolasib Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kolasib Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kolasib Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Lawngtlai",
        "localBodies": [
          {
            "name": "Lawngtlai Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Lawngtlai Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Lawngtlai Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Lawngtlai Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Lawngtlai Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Lawngtlai Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Lunglei",
        "localBodies": [
          {
            "name": "Lunglei Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Lunglei Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Lunglei Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Lunglei Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Lunglei Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Lunglei Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mamit",
        "localBodies": [
          {
            "name": "Mamit Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Mamit Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mamit Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mamit Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mamit Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mamit Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Saitual",
        "localBodies": [
          {
            "name": "Saitual Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Saitual Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Saitual Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Saitual Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Saitual Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Saitual Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Serchhip",
        "localBodies": [
          {
            "name": "Serchhip Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Serchhip Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Serchhip Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Serchhip Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Serchhip Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Serchhip Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Siaha",
        "localBodies": [
          {
            "name": "Siaha Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Siaha Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Siaha Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Siaha Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Siaha Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Siaha Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Nagaland",
    "districts": [
      {
        "name": "Chumoukedima",
        "localBodies": [
          {
            "name": "Chumoukedima Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Chumoukedima Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chumoukedima Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chumoukedima Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Chumoukedima Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Chumoukedima Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Dimapur",
        "localBodies": [
          {
            "name": "Dimapur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Dimapur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dimapur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dimapur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Dimapur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Dimapur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kiphire",
        "localBodies": [
          {
            "name": "Kiphire Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kiphire Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kiphire Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kiphire Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kiphire Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kiphire Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kohima",
        "localBodies": [
          {
            "name": "Kohima Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kohima Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kohima Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kohima Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kohima Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kohima Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Longleng",
        "localBodies": [
          {
            "name": "Longleng Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Longleng Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Longleng Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Longleng Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Longleng Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Longleng Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mokokchung",
        "localBodies": [
          {
            "name": "Mokokchung Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Mokokchung Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mokokchung Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mokokchung Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mokokchung Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mokokchung Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mon",
        "localBodies": [
          {
            "name": "Mon Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Mon Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mon Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mon Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mon Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mon Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Niuland",
        "localBodies": [
          {
            "name": "Niuland Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Niuland Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Niuland Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Niuland Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Niuland Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Niuland Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Noklak",
        "localBodies": [
          {
            "name": "Noklak Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Noklak Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Noklak Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Noklak Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Noklak Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Noklak Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Peren",
        "localBodies": [
          {
            "name": "Peren Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Peren Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Peren Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Peren Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Peren Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Peren Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Phek",
        "localBodies": [
          {
            "name": "Phek Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Phek Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Phek Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Phek Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Phek Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Phek Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Shamator",
        "localBodies": [
          {
            "name": "Shamator Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Shamator Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Shamator Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Shamator Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Shamator Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Shamator Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Tseminyu",
        "localBodies": [
          {
            "name": "Tseminyu Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Tseminyu Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tseminyu Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tseminyu Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Tseminyu Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Tseminyu Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Tuensang",
        "localBodies": [
          {
            "name": "Tuensang Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Tuensang Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tuensang Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tuensang Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Tuensang Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Tuensang Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Wokha",
        "localBodies": [
          {
            "name": "Wokha Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Wokha Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Wokha Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Wokha Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Wokha Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Wokha Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Zunheboto",
        "localBodies": [
          {
            "name": "Zunheboto Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Zunheboto Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Zunheboto Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Zunheboto Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Zunheboto Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Zunheboto Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Odisha",
    "districts": [
      {
        "name": "Angul",
        "localBodies": [
          {
            "name": "Angul Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Angul Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Angul Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Angul Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Angul Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Angul Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Balangir",
        "localBodies": [
          {
            "name": "Balangir Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Balangir Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Balangir Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Balangir Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Balangir Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Balangir Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Balasore",
        "localBodies": [
          {
            "name": "Balasore Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Balasore Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Balasore Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Balasore Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Balasore Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Balasore Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bargarh",
        "localBodies": [
          {
            "name": "Bargarh Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bargarh Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bargarh Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bargarh Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bargarh Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bargarh Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bhadrak",
        "localBodies": [
          {
            "name": "Bhadrak Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bhadrak Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bhadrak Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bhadrak Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bhadrak Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bhadrak Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Boudh",
        "localBodies": [
          {
            "name": "Boudh Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Boudh Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Boudh Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Boudh Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Boudh Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Boudh Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Cuttack",
        "localBodies": [
          {
            "name": "Cuttack Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Cuttack Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Cuttack Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Cuttack Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Cuttack Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Cuttack Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Deogarh",
        "localBodies": [
          {
            "name": "Deogarh Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Deogarh Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Deogarh Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Deogarh Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Deogarh Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Deogarh Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Dhenkanal",
        "localBodies": [
          {
            "name": "Dhenkanal Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Dhenkanal Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dhenkanal Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dhenkanal Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Dhenkanal Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Dhenkanal Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Gajapati",
        "localBodies": [
          {
            "name": "Gajapati Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Gajapati Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gajapati Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gajapati Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Gajapati Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Gajapati Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Ganjam",
        "localBodies": [
          {
            "name": "Ganjam Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Ganjam Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ganjam Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ganjam Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Ganjam Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Ganjam Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jagatsinghpur",
        "localBodies": [
          {
            "name": "Jagatsinghpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jagatsinghpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jagatsinghpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jagatsinghpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jagatsinghpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jagatsinghpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jajpur",
        "localBodies": [
          {
            "name": "Jajpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jajpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jajpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jajpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jajpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jajpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jharsuguda",
        "localBodies": [
          {
            "name": "Jharsuguda Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jharsuguda Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jharsuguda Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jharsuguda Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jharsuguda Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jharsuguda Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kalahandi",
        "localBodies": [
          {
            "name": "Kalahandi Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kalahandi Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kalahandi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kalahandi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kalahandi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kalahandi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kandhamal",
        "localBodies": [
          {
            "name": "Kandhamal Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kandhamal Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kandhamal Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kandhamal Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kandhamal Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kandhamal Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kendrapara",
        "localBodies": [
          {
            "name": "Kendrapara Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kendrapara Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kendrapara Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kendrapara Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kendrapara Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kendrapara Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kendujhar (Keonjhar)",
        "localBodies": [
          {
            "name": "Kendujhar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kendujhar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kendujhar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kendujhar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kendujhar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kendujhar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Khordha",
        "localBodies": [
          {
            "name": "Khordha Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Khordha Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Khordha Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Khordha Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Khordha Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Khordha Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Koraput",
        "localBodies": [
          {
            "name": "Koraput Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Koraput Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Koraput Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Koraput Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Koraput Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Koraput Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Malkangiri",
        "localBodies": [
          {
            "name": "Malkangiri Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Malkangiri Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Malkangiri Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Malkangiri Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Malkangiri Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Malkangiri Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mayurbhanj",
        "localBodies": [
          {
            "name": "Mayurbhanj Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Mayurbhanj Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mayurbhanj Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mayurbhanj Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mayurbhanj Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mayurbhanj Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Nabarangpur",
        "localBodies": [
          {
            "name": "Nabarangpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Nabarangpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nabarangpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nabarangpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Nabarangpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Nabarangpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Nayagarh",
        "localBodies": [
          {
            "name": "Nayagarh Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Nayagarh Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nayagarh Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nayagarh Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Nayagarh Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Nayagarh Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Nuapada",
        "localBodies": [
          {
            "name": "Nuapada Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Nuapada Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nuapada Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nuapada Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Nuapada Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Nuapada Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Puri",
        "localBodies": [
          {
            "name": "Puri Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Puri Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Puri Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Puri Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Puri Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Puri Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Rayagada",
        "localBodies": [
          {
            "name": "Rayagada Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Rayagada Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Rayagada Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Rayagada Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Rayagada Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Rayagada Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sambalpur",
        "localBodies": [
          {
            "name": "Sambalpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sambalpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sambalpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sambalpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sambalpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sambalpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Subarnapur (Sonepur)",
        "localBodies": [
          {
            "name": "Subarnapur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Subarnapur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Subarnapur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Subarnapur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Subarnapur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Subarnapur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sundargarh",
        "localBodies": [
          {
            "name": "Sundargarh Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sundargarh Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sundargarh Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sundargarh Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sundargarh Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sundargarh Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Puducherry",
    "districts": [
      {
        "name": "Karaikal",
        "localBodies": [
          {
            "name": "Karaikal Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Karaikal Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Karaikal Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Karaikal Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Karaikal Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Karaikal Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mahe",
        "localBodies": [
          {
            "name": "Mahe Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Mahe Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mahe Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mahe Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mahe Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mahe Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Puducherry",
        "localBodies": [
          {
            "name": "Puducherry Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Puducherry Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Puducherry Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Puducherry Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Puducherry Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Puducherry Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Yanam",
        "localBodies": [
          {
            "name": "Yanam Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Yanam Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Yanam Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Yanam Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Yanam Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Yanam Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Punjab",
    "districts": [
      {
        "name": "Amritsar",
        "localBodies": [
          {
            "name": "Amritsar Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Amritsar Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Amritsar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Amritsar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Amritsar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Amritsar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Barnala",
        "localBodies": [
          {
            "name": "Barnala Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Barnala Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Barnala Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Barnala Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Barnala Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Barnala Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bathinda",
        "localBodies": [
          {
            "name": "Bathinda Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bathinda Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bathinda Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bathinda Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bathinda Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bathinda Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Faridkot",
        "localBodies": [
          {
            "name": "Faridkot Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Faridkot Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Faridkot Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Faridkot Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Faridkot Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Faridkot Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Fatehgarh Sahib",
        "localBodies": [
          {
            "name": "Fatehgarh Sahib Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Fatehgarh Sahib Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Fatehgarh Sahib Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Fatehgarh Sahib Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Fatehgarh Sahib Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Fatehgarh Sahib Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Fazilka",
        "localBodies": [
          {
            "name": "Fazilka Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Fazilka Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Fazilka Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Fazilka Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Fazilka Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Fazilka Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Ferozepur",
        "localBodies": [
          {
            "name": "Ferozepur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Ferozepur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ferozepur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ferozepur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Ferozepur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Ferozepur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Gurdaspur",
        "localBodies": [
          {
            "name": "Gurdaspur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Gurdaspur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gurdaspur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gurdaspur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Gurdaspur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Gurdaspur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Hoshiarpur",
        "localBodies": [
          {
            "name": "Hoshiarpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Hoshiarpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hoshiarpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hoshiarpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Hoshiarpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Hoshiarpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jalandhar",
        "localBodies": [
          {
            "name": "Jalandhar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jalandhar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jalandhar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jalandhar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jalandhar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jalandhar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kapurthala",
        "localBodies": [
          {
            "name": "Kapurthala Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kapurthala Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kapurthala Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kapurthala Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kapurthala Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kapurthala Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Ludhiana",
        "localBodies": [
          {
            "name": "Ludhiana Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Ludhiana Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Ludhiana Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ludhiana Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Ludhiana Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Ludhiana Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Malerkotla",
        "localBodies": [
          {
            "name": "Malerkotla Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Malerkotla Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Malerkotla Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Malerkotla Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Malerkotla Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Malerkotla Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mansa",
        "localBodies": [
          {
            "name": "Mansa Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Mansa Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mansa Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mansa Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mansa Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mansa Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Moga",
        "localBodies": [
          {
            "name": "Moga Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Moga Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Moga Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Moga Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Moga Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Moga Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sri Muktsar Sahib",
        "localBodies": [
          {
            "name": "Sri Muktsar Sahib Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sri Muktsar Sahib Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sri Muktsar Sahib Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sri Muktsar Sahib Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sri Muktsar Sahib Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sri Muktsar Sahib Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Pathankot",
        "localBodies": [
          {
            "name": "Pathankot Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Pathankot Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pathankot Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pathankot Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Pathankot Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Pathankot Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Patiala",
        "localBodies": [
          {
            "name": "Patiala Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Patiala Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Patiala Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Patiala Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Patiala Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Patiala Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Rupnagar (Ropar)",
        "localBodies": [
          {
            "name": "Rupnagar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Rupnagar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Rupnagar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Rupnagar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Rupnagar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Rupnagar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sahibzada Ajit Singh Nagar (Mohali)",
        "localBodies": [
          {
            "name": "Sahibzada Ajit Singh Nagar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sahibzada Ajit Singh Nagar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sahibzada Ajit Singh Nagar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sahibzada Ajit Singh Nagar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sahibzada Ajit Singh Nagar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sahibzada Ajit Singh Nagar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Shahid Bhagat Singh Nagar (Nawanshahr)",
        "localBodies": [
          {
            "name": "Shahid Bhagat Singh Nagar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Shahid Bhagat Singh Nagar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Shahid Bhagat Singh Nagar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Shahid Bhagat Singh Nagar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Shahid Bhagat Singh Nagar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Shahid Bhagat Singh Nagar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sangrur",
        "localBodies": [
          {
            "name": "Sangrur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sangrur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sangrur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sangrur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sangrur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sangrur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Tarn Taran",
        "localBodies": [
          {
            "name": "Tarn Taran Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Tarn Taran Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tarn Taran Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tarn Taran Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Tarn Taran Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Tarn Taran Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Rajasthan",
    "districts": [
      {
        "name": "Ajmer",
        "localBodies": [
          {
            "name": "Ajmer Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Ajmer Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ajmer Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ajmer Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Ajmer Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Ajmer Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Alwar",
        "localBodies": [
          {
            "name": "Alwar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Alwar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Alwar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Alwar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Alwar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Alwar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Anupgarh",
        "localBodies": [
          {
            "name": "Anupgarh Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Anupgarh Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Anupgarh Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Anupgarh Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Anupgarh Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Anupgarh Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Balotra",
        "localBodies": [
          {
            "name": "Balotra Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Balotra Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Balotra Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Balotra Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Balotra Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Balotra Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Banswara",
        "localBodies": [
          {
            "name": "Banswara Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Banswara Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Banswara Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Banswara Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Banswara Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Banswara Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Baran",
        "localBodies": [
          {
            "name": "Baran Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Baran Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Baran Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Baran Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Baran Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Baran Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Barmer",
        "localBodies": [
          {
            "name": "Barmer Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Barmer Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Barmer Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Barmer Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Barmer Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Barmer Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Beawar",
        "localBodies": [
          {
            "name": "Beawar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Beawar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Beawar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Beawar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Beawar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Beawar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bharatpur",
        "localBodies": [
          {
            "name": "Bharatpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bharatpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bharatpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bharatpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bharatpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bharatpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bhilwara",
        "localBodies": [
          {
            "name": "Bhilwara Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bhilwara Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bhilwara Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bhilwara Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bhilwara Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bhilwara Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bikaner",
        "localBodies": [
          {
            "name": "Bikaner Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bikaner Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bikaner Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bikaner Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bikaner Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bikaner Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bundi",
        "localBodies": [
          {
            "name": "Bundi Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bundi Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bundi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bundi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bundi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bundi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Chittorgarh",
        "localBodies": [
          {
            "name": "Chittorgarh Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Chittorgarh Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chittorgarh Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chittorgarh Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Chittorgarh Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Chittorgarh Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Churu",
        "localBodies": [
          {
            "name": "Churu Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Churu Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Churu Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Churu Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Churu Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Churu Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Dausa",
        "localBodies": [
          {
            "name": "Dausa Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Dausa Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dausa Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dausa Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Dausa Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Dausa Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Deeg",
        "localBodies": [
          {
            "name": "Deeg Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Deeg Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Deeg Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Deeg Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Deeg Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Deeg Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Didwana-Kuchaman",
        "localBodies": [
          {
            "name": "Didwana-Kuchaman Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Didwana-Kuchaman Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Didwana-Kuchaman Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Didwana-Kuchaman Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Didwana-Kuchaman Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Didwana-Kuchaman Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Dholpur",
        "localBodies": [
          {
            "name": "Dholpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Dholpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dholpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dholpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Dholpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Dholpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Dungarpur",
        "localBodies": [
          {
            "name": "Dungarpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Dungarpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dungarpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dungarpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Dungarpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Dungarpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Gangapur City",
        "localBodies": [
          {
            "name": "Gangapur City Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Gangapur City Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gangapur City Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gangapur City Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Gangapur City Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Gangapur City Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Hanumangarh",
        "localBodies": [
          {
            "name": "Hanumangarh Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Hanumangarh Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hanumangarh Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hanumangarh Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Hanumangarh Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Hanumangarh Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jaipur",
        "localBodies": [
          {
            "name": "Jaipur Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Jaipur Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Jaipur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jaipur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jaipur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jaipur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jaipur Rural",
        "localBodies": [
          {
            "name": "Jaipur Rural Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jaipur Rural Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jaipur Rural Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jaipur Rural Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jaipur Rural Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jaipur Rural Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jaisalmer",
        "localBodies": [
          {
            "name": "Jaisalmer Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jaisalmer Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jaisalmer Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jaisalmer Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jaisalmer Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jaisalmer Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jalore",
        "localBodies": [
          {
            "name": "Jalore Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jalore Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jalore Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jalore Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jalore Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jalore Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jhalawar",
        "localBodies": [
          {
            "name": "Jhalawar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jhalawar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jhalawar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jhalawar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jhalawar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jhalawar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jhunjhunu",
        "localBodies": [
          {
            "name": "Jhunjhunu Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jhunjhunu Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jhunjhunu Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jhunjhunu Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jhunjhunu Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jhunjhunu Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jodhpur",
        "localBodies": [
          {
            "name": "Jodhpur Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Jodhpur Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Jodhpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jodhpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jodhpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jodhpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jodhpur Rural",
        "localBodies": [
          {
            "name": "Jodhpur Rural Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jodhpur Rural Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jodhpur Rural Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jodhpur Rural Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jodhpur Rural Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jodhpur Rural Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Karauli",
        "localBodies": [
          {
            "name": "Karauli Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Karauli Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Karauli Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Karauli Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Karauli Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Karauli Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kekri",
        "localBodies": [
          {
            "name": "Kekri Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kekri Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kekri Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kekri Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kekri Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kekri Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Khairthal-Tijara",
        "localBodies": [
          {
            "name": "Khairthal-Tijara Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Khairthal-Tijara Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Khairthal-Tijara Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Khairthal-Tijara Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Khairthal-Tijara Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Khairthal-Tijara Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kota",
        "localBodies": [
          {
            "name": "Kota Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Kota Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Kota Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kota Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kota Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kota Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kotputli-Behror",
        "localBodies": [
          {
            "name": "Kotputli-Behror Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kotputli-Behror Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kotputli-Behror Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kotputli-Behror Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kotputli-Behror Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kotputli-Behror Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Nagaur",
        "localBodies": [
          {
            "name": "Nagaur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Nagaur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nagaur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nagaur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Nagaur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Nagaur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Neem Ka Thana",
        "localBodies": [
          {
            "name": "Neem Ka Thana Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Neem Ka Thana Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Neem Ka Thana Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Neem Ka Thana Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Neem Ka Thana Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Neem Ka Thana Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Pali",
        "localBodies": [
          {
            "name": "Pali Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Pali Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pali Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pali Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Pali Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Pali Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Phalodi",
        "localBodies": [
          {
            "name": "Phalodi Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Phalodi Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Phalodi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Phalodi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Phalodi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Phalodi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Pratapgarh",
        "localBodies": [
          {
            "name": "Pratapgarh Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Pratapgarh Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pratapgarh Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pratapgarh Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Pratapgarh Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Pratapgarh Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Rajsamand",
        "localBodies": [
          {
            "name": "Rajsamand Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Rajsamand Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Rajsamand Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Rajsamand Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Rajsamand Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Rajsamand Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Salumber",
        "localBodies": [
          {
            "name": "Salumber Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Salumber Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Salumber Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Salumber Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Salumber Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Salumber Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sanchore",
        "localBodies": [
          {
            "name": "Sanchore Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sanchore Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sanchore Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sanchore Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sanchore Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sanchore Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sawai Madhopur",
        "localBodies": [
          {
            "name": "Sawai Madhopur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sawai Madhopur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sawai Madhopur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sawai Madhopur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sawai Madhopur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sawai Madhopur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Shahpura",
        "localBodies": [
          {
            "name": "Shahpura Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Shahpura Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Shahpura Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Shahpura Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Shahpura Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Shahpura Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sikar",
        "localBodies": [
          {
            "name": "Sikar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sikar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sikar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sikar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sikar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sikar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sirohi",
        "localBodies": [
          {
            "name": "Sirohi Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sirohi Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sirohi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sirohi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sirohi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sirohi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sri Ganganagar",
        "localBodies": [
          {
            "name": "Sri Ganganagar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sri Ganganagar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sri Ganganagar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sri Ganganagar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sri Ganganagar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sri Ganganagar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Tonk",
        "localBodies": [
          {
            "name": "Tonk Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Tonk Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tonk Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tonk Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Tonk Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Tonk Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Udaipur",
        "localBodies": [
          {
            "name": "Udaipur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Udaipur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Udaipur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Udaipur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Udaipur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Udaipur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Sikkim",
    "districts": [
      {
        "name": "East Sikkim (Gangtok)",
        "localBodies": [
          {
            "name": "East Sikkim Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "East Sikkim Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "East Sikkim Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "East Sikkim Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "East Sikkim Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "East Sikkim Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Gyalshing",
        "localBodies": [
          {
            "name": "Gyalshing Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Gyalshing Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gyalshing Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gyalshing Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Gyalshing Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Gyalshing Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mangan",
        "localBodies": [
          {
            "name": "Mangan Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Mangan Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mangan Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mangan Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mangan Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mangan Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Namchi",
        "localBodies": [
          {
            "name": "Namchi Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Namchi Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Namchi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Namchi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Namchi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Namchi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Pakyong",
        "localBodies": [
          {
            "name": "Pakyong Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Pakyong Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pakyong Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pakyong Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Pakyong Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Pakyong Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Soreng",
        "localBodies": [
          {
            "name": "Soreng Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Soreng Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Soreng Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Soreng Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Soreng Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Soreng Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Tamil Nadu",
    "districts": [
      {
        "name": "Ariyalur",
        "localBodies": [
          {
            "name": "Ariyalur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Ariyalur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ariyalur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ariyalur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Ariyalur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Ariyalur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Chengalpattu",
        "localBodies": [
          {
            "name": "Chengalpattu Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Chengalpattu Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chengalpattu Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chengalpattu Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Chengalpattu Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Chengalpattu Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Chennai",
        "localBodies": [
          {
            "name": "Chennai Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Chennai Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Chennai Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chennai Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Chennai Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Chennai Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Coimbatore",
        "localBodies": [
          {
            "name": "Coimbatore Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Coimbatore Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Coimbatore Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Coimbatore Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Coimbatore Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Coimbatore Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Cuddalore",
        "localBodies": [
          {
            "name": "Cuddalore Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Cuddalore Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Cuddalore Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Cuddalore Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Cuddalore Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Cuddalore Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Dharmapuri",
        "localBodies": [
          {
            "name": "Dharmapuri Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Dharmapuri Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dharmapuri Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dharmapuri Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Dharmapuri Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Dharmapuri Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Dindigul",
        "localBodies": [
          {
            "name": "Dindigul Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Dindigul Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dindigul Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dindigul Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Dindigul Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Dindigul Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Erode",
        "localBodies": [
          {
            "name": "Erode Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Erode Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Erode Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Erode Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Erode Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Erode Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kallakurichi",
        "localBodies": [
          {
            "name": "Kallakurichi Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kallakurichi Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kallakurichi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kallakurichi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kallakurichi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kallakurichi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kanchipuram",
        "localBodies": [
          {
            "name": "Kanchipuram Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kanchipuram Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kanchipuram Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kanchipuram Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kanchipuram Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kanchipuram Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kanyakumari",
        "localBodies": [
          {
            "name": "Kanyakumari Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kanyakumari Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kanyakumari Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kanyakumari Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kanyakumari Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kanyakumari Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Karur",
        "localBodies": [
          {
            "name": "Karur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Karur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Karur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Karur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Karur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Karur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Krishnagiri",
        "localBodies": [
          {
            "name": "Krishnagiri Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Krishnagiri Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Krishnagiri Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Krishnagiri Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Krishnagiri Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Krishnagiri Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Madurai",
        "localBodies": [
          {
            "name": "Madurai Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Madurai Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Madurai Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Madurai Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Madurai Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Madurai Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mayiladuthurai",
        "localBodies": [
          {
            "name": "Mayiladuthurai Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Mayiladuthurai Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mayiladuthurai Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mayiladuthurai Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mayiladuthurai Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mayiladuthurai Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Nagapattinam",
        "localBodies": [
          {
            "name": "Nagapattinam Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Nagapattinam Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nagapattinam Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nagapattinam Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Nagapattinam Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Nagapattinam Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Namakkal",
        "localBodies": [
          {
            "name": "Namakkal Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Namakkal Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Namakkal Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Namakkal Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Namakkal Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Namakkal Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Nilgiris",
        "localBodies": [
          {
            "name": "Nilgiris Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Nilgiris Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nilgiris Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nilgiris Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Nilgiris Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Nilgiris Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Perambalur",
        "localBodies": [
          {
            "name": "Perambalur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Perambalur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Perambalur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Perambalur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Perambalur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Perambalur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Pudukkottai",
        "localBodies": [
          {
            "name": "Pudukkottai Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Pudukkottai Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pudukkottai Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pudukkottai Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Pudukkottai Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Pudukkottai Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Ramanathapuram",
        "localBodies": [
          {
            "name": "Ramanathapuram Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Ramanathapuram Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ramanathapuram Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ramanathapuram Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Ramanathapuram Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Ramanathapuram Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Ranipet",
        "localBodies": [
          {
            "name": "Ranipet Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Ranipet Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ranipet Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ranipet Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Ranipet Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Ranipet Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Salem",
        "localBodies": [
          {
            "name": "Salem Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Salem Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Salem Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Salem Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Salem Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Salem Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sivaganga",
        "localBodies": [
          {
            "name": "Sivaganga Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sivaganga Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sivaganga Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sivaganga Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sivaganga Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sivaganga Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Tenkasi",
        "localBodies": [
          {
            "name": "Tenkasi Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Tenkasi Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tenkasi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tenkasi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Tenkasi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Tenkasi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Thanjavur",
        "localBodies": [
          {
            "name": "Thanjavur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Thanjavur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Thanjavur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Thanjavur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Thanjavur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Thanjavur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Theni",
        "localBodies": [
          {
            "name": "Theni Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Theni Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Theni Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Theni Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Theni Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Theni Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Thoothukudi",
        "localBodies": [
          {
            "name": "Thoothukudi Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Thoothukudi Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Thoothukudi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Thoothukudi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Thoothukudi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Thoothukudi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Tiruchirappalli",
        "localBodies": [
          {
            "name": "Tiruchirappalli Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Tiruchirappalli Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tiruchirappalli Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tiruchirappalli Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Tiruchirappalli Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Tiruchirappalli Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Tirunelveli",
        "localBodies": [
          {
            "name": "Tirunelveli Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Tirunelveli Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tirunelveli Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tirunelveli Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Tirunelveli Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Tirunelveli Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Tirupathur",
        "localBodies": [
          {
            "name": "Tirupathur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Tirupathur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tirupathur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tirupathur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Tirupathur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Tirupathur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Tiruppur",
        "localBodies": [
          {
            "name": "Tiruppur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Tiruppur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tiruppur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tiruppur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Tiruppur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Tiruppur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Tiruvallur",
        "localBodies": [
          {
            "name": "Tiruvallur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Tiruvallur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tiruvallur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tiruvallur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Tiruvallur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Tiruvallur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Tiruvannamalai",
        "localBodies": [
          {
            "name": "Tiruvannamalai Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Tiruvannamalai Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tiruvannamalai Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tiruvannamalai Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Tiruvannamalai Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Tiruvannamalai Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Tiruvarur",
        "localBodies": [
          {
            "name": "Tiruvarur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Tiruvarur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tiruvarur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tiruvarur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Tiruvarur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Tiruvarur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Vellore",
        "localBodies": [
          {
            "name": "Vellore Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Vellore Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Vellore Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Vellore Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Vellore Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Vellore Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Viluppuram",
        "localBodies": [
          {
            "name": "Viluppuram Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Viluppuram Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Viluppuram Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Viluppuram Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Viluppuram Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Viluppuram Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Virudhunagar",
        "localBodies": [
          {
            "name": "Virudhunagar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Virudhunagar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Virudhunagar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Virudhunagar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Virudhunagar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Virudhunagar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Telangana",
    "districts": [
      {
        "name": "Adilabad",
        "localBodies": [
          {
            "name": "Adilabad Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Adilabad Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Adilabad Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Adilabad Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Adilabad Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Adilabad Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bhadradri Kothagudem",
        "localBodies": [
          {
            "name": "Bhadradri Kothagudem Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bhadradri Kothagudem Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bhadradri Kothagudem Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bhadradri Kothagudem Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bhadradri Kothagudem Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bhadradri Kothagudem Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Hanumakonda",
        "localBodies": [
          {
            "name": "Hanumakonda Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Hanumakonda Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hanumakonda Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hanumakonda Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Hanumakonda Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Hanumakonda Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Hyderabad",
        "localBodies": [
          {
            "name": "Hyderabad Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Hyderabad Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Hyderabad Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hyderabad Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Hyderabad Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Hyderabad Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jagtial",
        "localBodies": [
          {
            "name": "Jagtial Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jagtial Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jagtial Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jagtial Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jagtial Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jagtial Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jangaon",
        "localBodies": [
          {
            "name": "Jangaon Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jangaon Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jangaon Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jangaon Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jangaon Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jangaon Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jayashankar Bhupalpally",
        "localBodies": [
          {
            "name": "Jayashankar Bhupalpally Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jayashankar Bhupalpally Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jayashankar Bhupalpally Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jayashankar Bhupalpally Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jayashankar Bhupalpally Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jayashankar Bhupalpally Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jogulamba Gadwal",
        "localBodies": [
          {
            "name": "Jogulamba Gadwal Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jogulamba Gadwal Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jogulamba Gadwal Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jogulamba Gadwal Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jogulamba Gadwal Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jogulamba Gadwal Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kamareddy",
        "localBodies": [
          {
            "name": "Kamareddy Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kamareddy Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kamareddy Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kamareddy Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kamareddy Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kamareddy Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Karimnagar",
        "localBodies": [
          {
            "name": "Karimnagar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Karimnagar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Karimnagar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Karimnagar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Karimnagar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Karimnagar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Khammam",
        "localBodies": [
          {
            "name": "Khammam Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Khammam Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Khammam Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Khammam Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Khammam Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Khammam Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kumuram Bheem Asifabad",
        "localBodies": [
          {
            "name": "Kumuram Bheem Asifabad Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kumuram Bheem Asifabad Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kumuram Bheem Asifabad Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kumuram Bheem Asifabad Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kumuram Bheem Asifabad Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kumuram Bheem Asifabad Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mahabubabad",
        "localBodies": [
          {
            "name": "Mahabubabad Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Mahabubabad Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mahabubabad Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mahabubabad Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mahabubabad Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mahabubabad Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mahabubnagar",
        "localBodies": [
          {
            "name": "Mahabubnagar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Mahabubnagar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mahabubnagar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mahabubnagar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mahabubnagar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mahabubnagar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mancherial",
        "localBodies": [
          {
            "name": "Mancherial Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Mancherial Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mancherial Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mancherial Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mancherial Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mancherial Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Medak",
        "localBodies": [
          {
            "name": "Medak Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Medak Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Medak Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Medak Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Medak Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Medak Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Medchal-Malkajgiri",
        "localBodies": [
          {
            "name": "Medchal-Malkajgiri Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Medchal-Malkajgiri Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Medchal-Malkajgiri Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Medchal-Malkajgiri Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Medchal-Malkajgiri Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Medchal-Malkajgiri Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mulugu",
        "localBodies": [
          {
            "name": "Mulugu Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Mulugu Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mulugu Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mulugu Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mulugu Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mulugu Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Nagarkurnool",
        "localBodies": [
          {
            "name": "Nagarkurnool Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Nagarkurnool Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nagarkurnool Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nagarkurnool Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Nagarkurnool Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Nagarkurnool Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Nalgonda",
        "localBodies": [
          {
            "name": "Nalgonda Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Nalgonda Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nalgonda Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nalgonda Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Nalgonda Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Nalgonda Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Narayanpet",
        "localBodies": [
          {
            "name": "Narayanpet Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Narayanpet Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Narayanpet Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Narayanpet Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Narayanpet Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Narayanpet Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Nirmal",
        "localBodies": [
          {
            "name": "Nirmal Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Nirmal Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nirmal Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nirmal Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Nirmal Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Nirmal Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Nizamabad",
        "localBodies": [
          {
            "name": "Nizamabad Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Nizamabad Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nizamabad Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nizamabad Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Nizamabad Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Nizamabad Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Peddapalli",
        "localBodies": [
          {
            "name": "Peddapalli Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Peddapalli Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Peddapalli Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Peddapalli Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Peddapalli Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Peddapalli Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Rajanna Sircilla",
        "localBodies": [
          {
            "name": "Rajanna Sircilla Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Rajanna Sircilla Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Rajanna Sircilla Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Rajanna Sircilla Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Rajanna Sircilla Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Rajanna Sircilla Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Ranga Reddy",
        "localBodies": [
          {
            "name": "Ranga Reddy Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Ranga Reddy Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ranga Reddy Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ranga Reddy Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Ranga Reddy Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Ranga Reddy Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sangareddy",
        "localBodies": [
          {
            "name": "Sangareddy Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sangareddy Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sangareddy Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sangareddy Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sangareddy Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sangareddy Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Siddipet",
        "localBodies": [
          {
            "name": "Siddipet Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Siddipet Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Siddipet Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Siddipet Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Siddipet Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Siddipet Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Suryapet",
        "localBodies": [
          {
            "name": "Suryapet Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Suryapet Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Suryapet Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Suryapet Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Suryapet Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Suryapet Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Vikarabad",
        "localBodies": [
          {
            "name": "Vikarabad Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Vikarabad Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Vikarabad Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Vikarabad Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Vikarabad Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Vikarabad Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Wanaparthy",
        "localBodies": [
          {
            "name": "Wanaparthy Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Wanaparthy Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Wanaparthy Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Wanaparthy Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Wanaparthy Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Wanaparthy Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Warangal",
        "localBodies": [
          {
            "name": "Warangal Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Warangal Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Warangal Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Warangal Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Warangal Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Warangal Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Yadadri Bhuvanagiri",
        "localBodies": [
          {
            "name": "Yadadri Bhuvanagiri Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Yadadri Bhuvanagiri Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Yadadri Bhuvanagiri Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Yadadri Bhuvanagiri Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Yadadri Bhuvanagiri Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Yadadri Bhuvanagiri Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Tripura",
    "districts": [
      {
        "name": "Dhalai",
        "localBodies": [
          {
            "name": "Dhalai Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Dhalai Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dhalai Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dhalai Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Dhalai Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Dhalai Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Gomati",
        "localBodies": [
          {
            "name": "Gomati Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Gomati Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gomati Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gomati Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Gomati Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Gomati Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Khowai",
        "localBodies": [
          {
            "name": "Khowai Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Khowai Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Khowai Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Khowai Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Khowai Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Khowai Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "North Tripura",
        "localBodies": [
          {
            "name": "North Tripura Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "North Tripura Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "North Tripura Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "North Tripura Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "North Tripura Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "North Tripura Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sepahijala",
        "localBodies": [
          {
            "name": "Sepahijala Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sepahijala Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sepahijala Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sepahijala Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sepahijala Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sepahijala Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "South Tripura",
        "localBodies": [
          {
            "name": "South Tripura Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "South Tripura Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "South Tripura Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "South Tripura Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "South Tripura Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "South Tripura Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Unakoti",
        "localBodies": [
          {
            "name": "Unakoti Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Unakoti Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Unakoti Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Unakoti Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Unakoti Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Unakoti Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "West Tripura",
        "localBodies": [
          {
            "name": "West Tripura Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "West Tripura Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "West Tripura Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "West Tripura Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "West Tripura Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "West Tripura Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Uttar Pradesh",
    "districts": [
      {
        "name": "Agra",
        "localBodies": [
          {
            "name": "Agra Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Agra Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Agra Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Agra Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Agra Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Agra Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Aligarh",
        "localBodies": [
          {
            "name": "Aligarh Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Aligarh Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Aligarh Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Aligarh Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Aligarh Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Aligarh Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Ambedkar Nagar",
        "localBodies": [
          {
            "name": "Ambedkar Nagar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Ambedkar Nagar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ambedkar Nagar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ambedkar Nagar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Ambedkar Nagar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Ambedkar Nagar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Amethi",
        "localBodies": [
          {
            "name": "Amethi Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Amethi Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Amethi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Amethi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Amethi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Amethi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Amroha",
        "localBodies": [
          {
            "name": "Amroha Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Amroha Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Amroha Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Amroha Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Amroha Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Amroha Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Auraiya",
        "localBodies": [
          {
            "name": "Auraiya Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Auraiya Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Auraiya Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Auraiya Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Auraiya Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Auraiya Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Ayodhya",
        "localBodies": [
          {
            "name": "Ayodhya Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Ayodhya Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ayodhya Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ayodhya Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Ayodhya Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Ayodhya Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Azamgarh",
        "localBodies": [
          {
            "name": "Azamgarh Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Azamgarh Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Azamgarh Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Azamgarh Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Azamgarh Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Azamgarh Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Baghpat",
        "localBodies": [
          {
            "name": "Baghpat Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Baghpat Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Baghpat Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Baghpat Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Baghpat Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Baghpat Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bahraich",
        "localBodies": [
          {
            "name": "Bahraich Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bahraich Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bahraich Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bahraich Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bahraich Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bahraich Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Ballia",
        "localBodies": [
          {
            "name": "Ballia Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Ballia Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ballia Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ballia Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Ballia Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Ballia Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Balrampur",
        "localBodies": [
          {
            "name": "Balrampur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Balrampur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Balrampur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Balrampur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Balrampur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Balrampur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Banda",
        "localBodies": [
          {
            "name": "Banda Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Banda Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Banda Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Banda Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Banda Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Banda Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Barabanki",
        "localBodies": [
          {
            "name": "Barabanki Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Barabanki Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Barabanki Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Barabanki Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Barabanki Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Barabanki Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bareilly",
        "localBodies": [
          {
            "name": "Bareilly Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bareilly Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bareilly Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bareilly Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bareilly Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bareilly Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Basti",
        "localBodies": [
          {
            "name": "Basti Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Basti Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Basti Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Basti Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Basti Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Basti Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bhadohi",
        "localBodies": [
          {
            "name": "Bhadohi Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bhadohi Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bhadohi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bhadohi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bhadohi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bhadohi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bijnor",
        "localBodies": [
          {
            "name": "Bijnor Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bijnor Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bijnor Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bijnor Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bijnor Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bijnor Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Budaun",
        "localBodies": [
          {
            "name": "Budaun Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Budaun Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Budaun Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Budaun Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Budaun Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Budaun Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bulandshahr",
        "localBodies": [
          {
            "name": "Bulandshahr Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bulandshahr Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bulandshahr Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bulandshahr Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bulandshahr Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bulandshahr Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Chandauli",
        "localBodies": [
          {
            "name": "Chandauli Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Chandauli Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chandauli Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chandauli Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Chandauli Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Chandauli Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Chitrakoot",
        "localBodies": [
          {
            "name": "Chitrakoot Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Chitrakoot Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chitrakoot Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chitrakoot Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Chitrakoot Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Chitrakoot Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Deoria",
        "localBodies": [
          {
            "name": "Deoria Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Deoria Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Deoria Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Deoria Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Deoria Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Deoria Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Etah",
        "localBodies": [
          {
            "name": "Etah Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Etah Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Etah Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Etah Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Etah Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Etah Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Etawah",
        "localBodies": [
          {
            "name": "Etawah Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Etawah Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Etawah Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Etawah Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Etawah Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Etawah Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Farrukhabad",
        "localBodies": [
          {
            "name": "Farrukhabad Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Farrukhabad Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Farrukhabad Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Farrukhabad Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Farrukhabad Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Farrukhabad Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Fatehpur",
        "localBodies": [
          {
            "name": "Fatehpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Fatehpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Fatehpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Fatehpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Fatehpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Fatehpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Firozabad",
        "localBodies": [
          {
            "name": "Firozabad Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Firozabad Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Firozabad Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Firozabad Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Firozabad Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Firozabad Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Gautam Buddha Nagar (Noida)",
        "localBodies": [
          {
            "name": "Gautam Buddha Nagar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Gautam Buddha Nagar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gautam Buddha Nagar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gautam Buddha Nagar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Gautam Buddha Nagar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Gautam Buddha Nagar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Ghaziabad",
        "localBodies": [
          {
            "name": "Ghaziabad Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Ghaziabad Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Ghaziabad Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ghaziabad Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Ghaziabad Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Ghaziabad Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Ghazipur",
        "localBodies": [
          {
            "name": "Ghazipur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Ghazipur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ghazipur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Ghazipur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Ghazipur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Ghazipur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Gonda",
        "localBodies": [
          {
            "name": "Gonda Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Gonda Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gonda Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gonda Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Gonda Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Gonda Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Gorakhpur",
        "localBodies": [
          {
            "name": "Gorakhpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Gorakhpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gorakhpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Gorakhpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Gorakhpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Gorakhpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Hamirpur",
        "localBodies": [
          {
            "name": "Hamirpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Hamirpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hamirpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hamirpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Hamirpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Hamirpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Hapur",
        "localBodies": [
          {
            "name": "Hapur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Hapur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hapur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hapur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Hapur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Hapur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Hardoi",
        "localBodies": [
          {
            "name": "Hardoi Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Hardoi Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hardoi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hardoi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Hardoi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Hardoi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Hathras",
        "localBodies": [
          {
            "name": "Hathras Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Hathras Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hathras Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hathras Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Hathras Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Hathras Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jalaun",
        "localBodies": [
          {
            "name": "Jalaun Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jalaun Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jalaun Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jalaun Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jalaun Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jalaun Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jaunpur",
        "localBodies": [
          {
            "name": "Jaunpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jaunpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jaunpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jaunpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jaunpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jaunpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jhansi",
        "localBodies": [
          {
            "name": "Jhansi Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jhansi Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jhansi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jhansi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jhansi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jhansi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kannauj",
        "localBodies": [
          {
            "name": "Kannauj Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kannauj Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kannauj Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kannauj Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kannauj Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kannauj Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kanpur Dehat",
        "localBodies": [
          {
            "name": "Kanpur Dehat Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kanpur Dehat Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kanpur Dehat Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kanpur Dehat Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kanpur Dehat Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kanpur Dehat Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kanpur Nagar",
        "localBodies": [
          {
            "name": "Kanpur Nagar Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Kanpur Nagar Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Kanpur Nagar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kanpur Nagar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kanpur Nagar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kanpur Nagar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kasganj",
        "localBodies": [
          {
            "name": "Kasganj Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kasganj Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kasganj Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kasganj Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kasganj Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kasganj Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kaushambi",
        "localBodies": [
          {
            "name": "Kaushambi Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kaushambi Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kaushambi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kaushambi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kaushambi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kaushambi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kheri (Lakhimpur)",
        "localBodies": [
          {
            "name": "Kheri Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kheri Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kheri Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kheri Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kheri Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kheri Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kushinagar",
        "localBodies": [
          {
            "name": "Kushinagar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kushinagar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kushinagar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kushinagar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kushinagar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kushinagar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Lalitpur",
        "localBodies": [
          {
            "name": "Lalitpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Lalitpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Lalitpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Lalitpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Lalitpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Lalitpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Lucknow",
        "localBodies": [
          {
            "name": "Lucknow Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Lucknow Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Lucknow Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Lucknow Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Lucknow Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Lucknow Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Maharajganj",
        "localBodies": [
          {
            "name": "Maharajganj Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Maharajganj Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Maharajganj Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Maharajganj Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Maharajganj Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Maharajganj Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mahoba",
        "localBodies": [
          {
            "name": "Mahoba Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Mahoba Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mahoba Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mahoba Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mahoba Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mahoba Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mainpuri",
        "localBodies": [
          {
            "name": "Mainpuri Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Mainpuri Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mainpuri Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mainpuri Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mainpuri Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mainpuri Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mathura",
        "localBodies": [
          {
            "name": "Mathura Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Mathura Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mathura Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mathura Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mathura Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mathura Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mau",
        "localBodies": [
          {
            "name": "Mau Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Mau Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mau Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mau Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mau Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mau Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Meerut",
        "localBodies": [
          {
            "name": "Meerut Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Meerut Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Meerut Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Meerut Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Meerut Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Meerut Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Mirzapur",
        "localBodies": [
          {
            "name": "Mirzapur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Mirzapur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mirzapur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Mirzapur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Mirzapur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Mirzapur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Moradabad",
        "localBodies": [
          {
            "name": "Moradabad Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Moradabad Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Moradabad Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Moradabad Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Moradabad Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Moradabad Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Muzaffarnagar",
        "localBodies": [
          {
            "name": "Muzaffarnagar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Muzaffarnagar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Muzaffarnagar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Muzaffarnagar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Muzaffarnagar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Muzaffarnagar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Pilibhit",
        "localBodies": [
          {
            "name": "Pilibhit Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Pilibhit Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pilibhit Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pilibhit Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Pilibhit Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Pilibhit Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Pratapgarh",
        "localBodies": [
          {
            "name": "Pratapgarh Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Pratapgarh Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pratapgarh Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pratapgarh Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Pratapgarh Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Pratapgarh Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Prayagraj",
        "localBodies": [
          {
            "name": "Prayagraj Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Prayagraj Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Prayagraj Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Prayagraj Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Prayagraj Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Prayagraj Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Raebareli",
        "localBodies": [
          {
            "name": "Raebareli Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Raebareli Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Raebareli Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Raebareli Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Raebareli Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Raebareli Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Rampur",
        "localBodies": [
          {
            "name": "Rampur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Rampur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Rampur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Rampur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Rampur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Rampur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Saharanpur",
        "localBodies": [
          {
            "name": "Saharanpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Saharanpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Saharanpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Saharanpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Saharanpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Saharanpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sambhal",
        "localBodies": [
          {
            "name": "Sambhal Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sambhal Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sambhal Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sambhal Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sambhal Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sambhal Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sant Kabir Nagar",
        "localBodies": [
          {
            "name": "Sant Kabir Nagar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sant Kabir Nagar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sant Kabir Nagar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sant Kabir Nagar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sant Kabir Nagar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sant Kabir Nagar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Shahjahanpur",
        "localBodies": [
          {
            "name": "Shahjahanpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Shahjahanpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Shahjahanpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Shahjahanpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Shahjahanpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Shahjahanpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Shamli",
        "localBodies": [
          {
            "name": "Shamli Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Shamli Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Shamli Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Shamli Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Shamli Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Shamli Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Shravasti",
        "localBodies": [
          {
            "name": "Shravasti Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Shravasti Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Shravasti Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Shravasti Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Shravasti Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Shravasti Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Siddharthnagar",
        "localBodies": [
          {
            "name": "Siddharthnagar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Siddharthnagar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Siddharthnagar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Siddharthnagar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Siddharthnagar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Siddharthnagar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sitapur",
        "localBodies": [
          {
            "name": "Sitapur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sitapur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sitapur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sitapur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sitapur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sitapur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sonbhadra",
        "localBodies": [
          {
            "name": "Sonbhadra Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sonbhadra Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sonbhadra Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sonbhadra Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sonbhadra Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sonbhadra Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Sultanpur",
        "localBodies": [
          {
            "name": "Sultanpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Sultanpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sultanpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Sultanpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Sultanpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Sultanpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Unnao",
        "localBodies": [
          {
            "name": "Unnao Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Unnao Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Unnao Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Unnao Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Unnao Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Unnao Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Varanasi",
        "localBodies": [
          {
            "name": "Varanasi Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Varanasi Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Varanasi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Varanasi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Varanasi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Varanasi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "Uttarakhand",
    "districts": [
      {
        "name": "Almora",
        "localBodies": [
          {
            "name": "Almora Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Almora Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Almora Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Almora Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Almora Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Almora Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bageshwar",
        "localBodies": [
          {
            "name": "Bageshwar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bageshwar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bageshwar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bageshwar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bageshwar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bageshwar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Chamoli",
        "localBodies": [
          {
            "name": "Chamoli Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Chamoli Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chamoli Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Chamoli Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Chamoli Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Chamoli Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Champawat",
        "localBodies": [
          {
            "name": "Champawat Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Champawat Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Champawat Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Champawat Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Champawat Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Champawat Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Dehradun",
        "localBodies": [
          {
            "name": "Dehradun Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Dehradun Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Dehradun Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dehradun Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Dehradun Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Dehradun Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Haridwar",
        "localBodies": [
          {
            "name": "Haridwar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Haridwar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Haridwar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Haridwar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Haridwar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Haridwar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Nainital",
        "localBodies": [
          {
            "name": "Nainital Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Nainital Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nainital Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nainital Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Nainital Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Nainital Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Pauri Garhwal",
        "localBodies": [
          {
            "name": "Pauri Garhwal Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Pauri Garhwal Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pauri Garhwal Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pauri Garhwal Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Pauri Garhwal Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Pauri Garhwal Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Pithoragarh",
        "localBodies": [
          {
            "name": "Pithoragarh Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Pithoragarh Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pithoragarh Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Pithoragarh Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Pithoragarh Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Pithoragarh Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Rudraprayag",
        "localBodies": [
          {
            "name": "Rudraprayag Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Rudraprayag Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Rudraprayag Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Rudraprayag Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Rudraprayag Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Rudraprayag Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Tehri Garhwal",
        "localBodies": [
          {
            "name": "Tehri Garhwal Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Tehri Garhwal Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tehri Garhwal Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Tehri Garhwal Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Tehri Garhwal Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Tehri Garhwal Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Udham Singh Nagar",
        "localBodies": [
          {
            "name": "Udham Singh Nagar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Udham Singh Nagar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Udham Singh Nagar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Udham Singh Nagar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Udham Singh Nagar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Udham Singh Nagar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Uttarkashi",
        "localBodies": [
          {
            "name": "Uttarkashi Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Uttarkashi Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Uttarkashi Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Uttarkashi Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Uttarkashi Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Uttarkashi Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  },
  {
    "name": "West Bengal",
    "districts": [
      {
        "name": "Alipurduar",
        "localBodies": [
          {
            "name": "Alipurduar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Alipurduar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Alipurduar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Alipurduar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Alipurduar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Alipurduar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Bankura",
        "localBodies": [
          {
            "name": "Bankura Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Bankura Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bankura Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Bankura Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Bankura Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Bankura Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Birbhum",
        "localBodies": [
          {
            "name": "Birbhum Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Birbhum Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Birbhum Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Birbhum Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Birbhum Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Birbhum Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Cooch Behar",
        "localBodies": [
          {
            "name": "Cooch Behar Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Cooch Behar Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Cooch Behar Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Cooch Behar Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Cooch Behar Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Cooch Behar Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Dakshin Dinajpur",
        "localBodies": [
          {
            "name": "Dakshin Dinajpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Dakshin Dinajpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dakshin Dinajpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Dakshin Dinajpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Dakshin Dinajpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Dakshin Dinajpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Darjeeling",
        "localBodies": [
          {
            "name": "Darjeeling Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Darjeeling Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Darjeeling Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Darjeeling Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Darjeeling Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Darjeeling Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Hooghly",
        "localBodies": [
          {
            "name": "Hooghly Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Hooghly Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hooghly Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Hooghly Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Hooghly Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Hooghly Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Howrah",
        "localBodies": [
          {
            "name": "Howrah Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Howrah Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Howrah Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Howrah Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Howrah Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Howrah Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jalpaiguri",
        "localBodies": [
          {
            "name": "Jalpaiguri Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jalpaiguri Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jalpaiguri Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jalpaiguri Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jalpaiguri Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jalpaiguri Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Jhargram",
        "localBodies": [
          {
            "name": "Jhargram Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Jhargram Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jhargram Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Jhargram Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Jhargram Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Jhargram Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kalimpong",
        "localBodies": [
          {
            "name": "Kalimpong Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Kalimpong Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kalimpong Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kalimpong Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kalimpong Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kalimpong Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Kolkata",
        "localBodies": [
          {
            "name": "Kolkata Municipal Corporation (Nagar Nigam)",
            "authorityId": "morth"
          },
          {
            "name": "Kolkata Urban Development Authority",
            "authorityId": "morth"
          },
          {
            "name": "Kolkata Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Kolkata Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Kolkata Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Kolkata Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Malda",
        "localBodies": [
          {
            "name": "Malda Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Malda Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Malda Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Malda Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Malda Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Malda Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Murshidabad",
        "localBodies": [
          {
            "name": "Murshidabad Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Murshidabad Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Murshidabad Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Murshidabad Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Murshidabad Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Murshidabad Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Nadia",
        "localBodies": [
          {
            "name": "Nadia Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Nadia Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nadia Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Nadia Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Nadia Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Nadia Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "North 24 Parganas",
        "localBodies": [
          {
            "name": "North 24 Parganas Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "North 24 Parganas Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "North 24 Parganas Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "North 24 Parganas Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "North 24 Parganas Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "North 24 Parganas Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Paschim Bardhaman",
        "localBodies": [
          {
            "name": "Paschim Bardhaman Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Paschim Bardhaman Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Paschim Bardhaman Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Paschim Bardhaman Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Paschim Bardhaman Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Paschim Bardhaman Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Paschim Medinipur",
        "localBodies": [
          {
            "name": "Paschim Medinipur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Paschim Medinipur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Paschim Medinipur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Paschim Medinipur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Paschim Medinipur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Paschim Medinipur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Purba Bardhaman",
        "localBodies": [
          {
            "name": "Purba Bardhaman Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Purba Bardhaman Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Purba Bardhaman Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Purba Bardhaman Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Purba Bardhaman Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Purba Bardhaman Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Purba Medinipur",
        "localBodies": [
          {
            "name": "Purba Medinipur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Purba Medinipur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Purba Medinipur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Purba Medinipur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Purba Medinipur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Purba Medinipur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Purulia",
        "localBodies": [
          {
            "name": "Purulia Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Purulia Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Purulia Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Purulia Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Purulia Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Purulia Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "South 24 Parganas",
        "localBodies": [
          {
            "name": "South 24 Parganas Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "South 24 Parganas Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "South 24 Parganas Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "South 24 Parganas Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "South 24 Parganas Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "South 24 Parganas Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      },
      {
        "name": "Uttar Dinajpur",
        "localBodies": [
          {
            "name": "Uttar Dinajpur Municipal Council (Nagar Palika Parishad)",
            "authorityId": "morth"
          },
          {
            "name": "Uttar Dinajpur Town Area / Nagar Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Uttar Dinajpur Zilla Parishad / District Panchayat",
            "authorityId": "morth"
          },
          {
            "name": "Uttar Dinajpur Block Development & Panchayati Raj Office",
            "authorityId": "morth"
          },
          {
            "name": "Uttar Dinajpur Public Works Division (PWD Roads & Buildings)",
            "authorityId": "morth"
          },
          {
            "name": "Uttar Dinajpur Jal Sansthan / District Water Supply Board",
            "authorityId": "morth"
          }
        ]
      }
    ]
  }
];
