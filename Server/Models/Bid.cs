using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server
{
    public class Bid
    {
        [Key]
        public int              bid_id         {get; set;}
        [ForeignKey("contact_id")]
        public int              contact_id      {get; set;}
        public Contact          contact         {get; set;}
        public string           consult_date    {get; set;}
        public string           last_contact    {get; set;}
        public string           address        {get; set;}
        public string           city        {get; set;}
        public string           zip         {get; set;}
        public string           est_cost        {get; set;}
        public string           est_finish      {get; set;}
        public string           bid_status          {get; set;}
        public string           comments        {get; set;}
        
        public Bid()
        {
            this.contact_id     = contact_id;
            this.consult_date   = consult_date;
            this.est_cost       = est_cost;
            this.est_finish     = est_finish;
            this.comments       = comments;
        }
    }
}