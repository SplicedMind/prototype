module.exports = {
 
   Array: function() {
      this.toTwenty = function()
      {
         var array = [];
         for(var i = 1; i <= 20; i += 1)
         {
            array.push(i);
         }
         return array;
      }
      this.toForty = function()
      {
         var array = [];
         for(var i = 2; i <= 40; i += 2)
         {
            array.push(i);
         }
         return array;
      }
      this.toOneThousand = function()
      {
         var array = [];
         for(var i = 10; i <= 1000; i += 10)
         {
            array.push(i);
         }
         return array;
      }

      Array.prototype.search= function(num) 
      {
         var arr = this;
         var count = 0;
         const len = arr.length;
         var index = 0;
         var inde;
         var json = {};
         for (var s = 0; s < len; s += 1)
         {
            if(arr[s] === num)
            {
               inde = s;
               break;
            }           
         }
         if(inde === undefined)
         {
            json['count'] = count;
            json['index'] = -1;
            json['length'] = len;
            return json;
         }
         while(true)
         {
            index = Math.floor(arr.length/2);
            if(arr.length === 1)
           {
              json['count'] = count;
              json['index'] = inde;
              json['length'] = len;
              break;
           }            
            
            if(num === arr[index])
            {
               json['count'] = count;
               json['index'] = inde;
               json['length'] = len;
               break;
            }
            else
            {
               if(num < this[index])
               {
                  arr.splice(index);
                  count += 1;
               }
               else
               {
                  arr = arr.splice(index);
                  count += 1;
               }
            }
         }
         return json;
      }
   }
}