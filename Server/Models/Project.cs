using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server
{
    public class Project
    {
        [Key]
        public int              project_id {get; set;}
        public string           address {get; set; }
        public string           est_cost{get; set;}
        public string           est_finish {get; set;}
        public string           start_date {get; set;}
        public string           end_date {get; set;}
        public string           materials {get; set;}
        public string           actual_cost {get; set;}
        public string           comments{get; set;}
        
        public Project()
        {
            
        }
    }
}