using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server
{
    public class Lead
    {
        [Key]
        public int              lead_id {get; set;}
        [ForeignKey("client_id")]
        public int              client_id {get; set;}
        public Contact          client {get; set;}
        public string           consult_date {get; set; }
        public string           est_cost{get; set;}
        public string           est_finish {get; set;}
        public string           comments{get; set;}
        
        public Lead()
        {
            
        }
    }
}