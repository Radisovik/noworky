(function (_, Kotlin, $module$protobufjs_light) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var contentEquals = Kotlin.arrayEquals;
  var contentHashCode = Kotlin.arrayHashCode;
  var contentToString = Kotlin.arrayToString;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var getCallableRef = Kotlin.getCallableRef;
  var L_128 = Kotlin.Long.fromInt(-128);
  var L0 = Kotlin.Long.ZERO;
  var equals = Kotlin.equals;
  var L_34359738368 = new Kotlin.Long(0, -8);
  var L_2097152 = Kotlin.Long.fromInt(-2097152);
  var L_16384 = Kotlin.Long.fromInt(-16384);
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var List = Kotlin.kotlin.collections.List;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var AbstractMap = Kotlin.kotlin.collections.AbstractMap;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var plus = Kotlin.kotlin.collections.plus_iwxh38$;
  var plus_0 = Kotlin.kotlin.collections.plus_mydzjv$;
  var Map$Entry = Kotlin.kotlin.collections.Map.Entry;
  var Writer$Companion = $module$protobufjs_light.Writer;
  var util$utf8$Companion = $module$protobufjs_light.util.utf8;
  var kotlin_js_internal_LongCompanionObject = Kotlin.kotlin.js.internal.LongCompanionObject;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var plus_1 = Kotlin.kotlin.collections.plus_qloxvw$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var toMap = Kotlin.kotlin.collections.toMap_abgq59$;
  var Reader$Companion = $module$protobufjs_light.Reader;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  Sizer$Simple.prototype = Object.create(Sizer.prototype);
  Sizer$Simple.prototype.constructor = Sizer$Simple;
  MapWithSize.prototype = Object.create(AbstractMap.prototype);
  MapWithSize.prototype.constructor = MapWithSize;
  UnknownField$Value$Varint.prototype = Object.create(UnknownField$Value.prototype);
  UnknownField$Value$Varint.prototype.constructor = UnknownField$Value$Varint;
  UnknownField$Value$Fixed64.prototype = Object.create(UnknownField$Value.prototype);
  UnknownField$Value$Fixed64.prototype.constructor = UnknownField$Value$Fixed64;
  UnknownField$Value$LengthDelimited.prototype = Object.create(UnknownField$Value.prototype);
  UnknownField$Value$LengthDelimited.prototype.constructor = UnknownField$Value$LengthDelimited;
  UnknownField$Value$StartGroup.prototype = Object.create(UnknownField$Value.prototype);
  UnknownField$Value$StartGroup.prototype.constructor = UnknownField$Value$StartGroup;
  UnknownField$Value$EndGroup.prototype = Object.create(UnknownField$Value.prototype);
  UnknownField$Value$EndGroup.prototype.constructor = UnknownField$Value$EndGroup;
  UnknownField$Value$Fixed32.prototype = Object.create(UnknownField$Value.prototype);
  UnknownField$Value$Fixed32.prototype.constructor = UnknownField$Value$Fixed32;
  UnknownField$Value$Composite.prototype = Object.create(UnknownField$Value.prototype);
  UnknownField$Value$Composite.prototype.constructor = UnknownField$Value$Composite;
  Value$Kind$NullValue.prototype = Object.create(Value$Kind.prototype);
  Value$Kind$NullValue.prototype.constructor = Value$Kind$NullValue;
  Value$Kind$NumberValue.prototype = Object.create(Value$Kind.prototype);
  Value$Kind$NumberValue.prototype.constructor = Value$Kind$NumberValue;
  Value$Kind$StringValue.prototype = Object.create(Value$Kind.prototype);
  Value$Kind$StringValue.prototype.constructor = Value$Kind$StringValue;
  Value$Kind$BoolValue.prototype = Object.create(Value$Kind.prototype);
  Value$Kind$BoolValue.prototype.constructor = Value$Kind$BoolValue;
  Value$Kind$StructValue.prototype = Object.create(Value$Kind.prototype);
  Value$Kind$StructValue.prototype.constructor = Value$Kind$StructValue;
  Value$Kind$ListValue.prototype = Object.create(Value$Kind.prototype);
  Value$Kind$ListValue.prototype.constructor = Value$Kind$ListValue;
  Marshaller_0.prototype = Object.create(Marshaller.prototype);
  Marshaller_0.prototype.constructor = Marshaller_0;
  Sizer_0.prototype = Object.create(Sizer$Simple.prototype);
  Sizer_0.prototype.constructor = Sizer_0;
  function ByteArr(array) {
    ByteArr$Companion_getInstance();
    this.array = array;
  }
  ByteArr.prototype.equals = function (other) {
    return Kotlin.isType(other, ByteArr) && contentEquals(this.array, other.array);
  };
  ByteArr.prototype.hashCode = function () {
    return contentHashCode(this.array);
  };
  ByteArr.prototype.toString = function () {
    return contentToString(this.array);
  };
  function ByteArr$Companion() {
    ByteArr$Companion_instance = this;
    this.empty = new ByteArr(new Int8Array(0));
  }
  ByteArr$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ByteArr$Companion_instance = null;
  function ByteArr$Companion_getInstance() {
    if (ByteArr$Companion_instance === null) {
      new ByteArr$Companion();
    }
    return ByteArr$Companion_instance;
  }
  ByteArr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ByteArr',
    interfaces: []
  };
  function Marshaller() {
  }
  Marshaller.prototype.writeTag_vux9f0$ = function (fieldNum, wireType) {
    this.writeUInt32_za3lpa$(fieldNum << 3 | wireType);
    return this;
  };
  Marshaller.prototype.writeEnum_do1vow$ = function (value) {
    this.writeInt32_za3lpa$(value.value);
  };
  Marshaller.prototype.writeMessage_3k86cv$ = function (value) {
    var tmp$;
    this.writeUInt32_za3lpa$(value.protoSize);
    value.protoMarshal_5j3s6l$(Kotlin.isType(tmp$ = this, Marshaller_0) ? tmp$ : throwCCE());
  };
  function Marshaller$writeUnknownFields$writeUnknownFieldValue(this$Marshaller) {
    var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
    return function closure$writeUnknownFieldValue(fieldNum, v) {
      if (Kotlin.isType(v, UnknownField$Value$Varint))
        this$Marshaller.writeTag_vux9f0$(fieldNum, 0).writeUInt64_s8cxhz$(v.varint);
      else if (Kotlin.isType(v, UnknownField$Value$Fixed64))
        this$Marshaller.writeTag_vux9f0$(fieldNum, 1).writeFixed64_s8cxhz$(v.fixed64);
      else if (Kotlin.isType(v, UnknownField$Value$LengthDelimited))
        this$Marshaller.writeTag_vux9f0$(fieldNum, 2).writeBytes_w7fipb$(v.bytes);
      else if (Kotlin.isType(v, UnknownField$Value$StartGroup)) {
        throw new NotImplementedError_init();
      }
       else if (Kotlin.isType(v, UnknownField$Value$EndGroup)) {
        throw new NotImplementedError_init();
      }
       else if (Kotlin.isType(v, UnknownField$Value$Fixed32))
        this$Marshaller.writeTag_vux9f0$(fieldNum, 5).writeFixed32_za3lpa$(v.fixed32);
      else if (Kotlin.isType(v, UnknownField$Value$Composite)) {
        var $receiver = v.values;
        closure$writeUnknownFieldValue;
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          closure$writeUnknownFieldValue(fieldNum, element);
        }
      }
    };
  }
  Marshaller.prototype.writeUnknownFields_v72k7n$ = function (fields) {
    var writeUnknownFieldValue = Marshaller$writeUnknownFields$writeUnknownFieldValue(this);
    var tmp$;
    tmp$ = fields.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      writeUnknownFieldValue(element.key, element.value.value);
    }
  };
  Marshaller.prototype.writePackedRepeated_w6577c$ = function (list, sizeFn, writeFn) {
    var tmp$, tmp$_0, tmp$_1;
    var tmp$_2;
    if ((tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = list, ListWithSize) ? tmp$ : null) != null ? tmp$_0.protoSize : null) != null)
      tmp$_2 = tmp$_1;
    else {
      var tmp$_3;
      var sum = 0;
      tmp$_3 = list.iterator();
      while (tmp$_3.hasNext()) {
        var element = tmp$_3.next();
        sum = sum + sizeFn(element) | 0;
      }
      tmp$_2 = sum;
    }
    this.writeUInt32_za3lpa$(tmp$_2);
    var tmp$_4;
    tmp$_4 = list.iterator();
    while (tmp$_4.hasNext()) {
      var element_0 = tmp$_4.next();
      writeFn(element_0);
    }
  };
  Marshaller.prototype.writeMap_6kflhk$ = function (map, createEntry) {
    if (Kotlin.isType(map, MapWithSize)) {
      this.writeUInt32_za3lpa$(map.protoSize);
      var tmp$;
      tmp$ = map.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0, tmp$_1;
        this.writeMessage_3k86cv$((tmp$_1 = Kotlin.isType(tmp$_0 = element, Message) ? tmp$_0 : null) != null ? tmp$_1 : createEntry(element.key, element.value, emptyMap()));
      }
    }
     else {
      var destination = ArrayList_init(map.size);
      var tmp$_2;
      tmp$_2 = map.entries.iterator();
      while (tmp$_2.hasNext()) {
        var item = tmp$_2.next();
        var tmp$_3 = destination.add_11rb$;
        var k = item.key;
        var v = item.value;
        tmp$_3.call(destination, createEntry(k, v, emptyMap()));
      }
      this.writePackedRepeated_w6577c$(destination, getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance())), getCallableRef('writeMessage', function ($receiver, value) {
        return $receiver.writeMessage_3k86cv$(value), Unit;
      }.bind(null, this)));
    }
  };
  Marshaller.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Marshaller',
    interfaces: []
  };
  function Sizer() {
  }
  Sizer.prototype.enumSize_do1vow$ = function (value) {
    return this.int32Size_za3lpa$(value.value);
  };
  Sizer.prototype.messageSize_3k86cv$ = function (value) {
    return this.uInt32Size_za3lpa$(value.protoSize) + value.protoSize | 0;
  };
  Sizer.prototype.packedRepeatedSize_juvmgx$ = function (list, sizeFn) {
    var tmp$;
    if (Kotlin.isType(list, ListWithSize) && list.protoSize != null)
      tmp$ = list.protoSize + this.uInt32Size_za3lpa$(list.protoSize) | 0;
    else {
      var tmp$_0;
      var sum = 0;
      tmp$_0 = list.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        sum = sum + sizeFn(element) | 0;
      }
      var it = sum;
      tmp$ = it + this.uInt32Size_za3lpa$(it) | 0;
    }
    return tmp$;
  };
  Sizer.prototype.mapSize_6kflhk$ = function (map, createEntry) {
    var tmp$;
    if (Kotlin.isType(map, MapWithSize))
      tmp$ = map.protoSize + this.uInt32Size_za3lpa$(map.protoSize) | 0;
    else {
      var tmp$_0;
      var sum = 0;
      tmp$_0 = map.entries.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        var tmp$_1 = sum;
        var k = element.key;
        var v = element.value;
        sum = tmp$_1 + createEntry(k, v, emptyMap()).protoSize | 0;
      }
      var it = sum;
      tmp$ = it + this.uInt32Size_za3lpa$(it) | 0;
    }
    return tmp$;
  };
  function Sizer$Simple() {
    Sizer.call(this);
  }
  Sizer$Simple.prototype.tagSize_za3lpa$ = function (fieldNum) {
    return this.uInt32Size_za3lpa$(fieldNum << 3);
  };
  Sizer$Simple.prototype.doubleSize_14dthe$ = function (value) {
    return 8;
  };
  Sizer$Simple.prototype.floatSize_mx4ult$ = function (value) {
    return 4;
  };
  Sizer$Simple.prototype.int32Size_za3lpa$ = function (value) {
    return value >= 0 ? this.uInt32Size_za3lpa$(value) : 10;
  };
  Sizer$Simple.prototype.int64Size_s8cxhz$ = function (value) {
    return this.uInt64Size_s8cxhz$(value);
  };
  Sizer$Simple.prototype.uInt32Size_za3lpa$ = function (value) {
    if ((value & -128) === 0)
      return 1;
    else if ((value & -16384) === 0)
      return 2;
    else if ((value & -2097152) === 0)
      return 3;
    else if ((value & -268435456) === 0)
      return 4;
    else
      return 5;
  };
  Sizer$Simple.prototype.uInt64Size_s8cxhz$ = function (value) {
    var value_0 = value;
    if (equals(value_0.and(L_128), L0))
      return 1;
    if (value_0.compareTo_11rb$(L0) < 0)
      return 10;
    var n = 2;
    if (!equals(value_0.and(L_34359738368), L0)) {
      n = n + 4 | 0;
      value_0 = value_0.shiftRightUnsigned(28);
    }
    if (!equals(value_0.and(L_2097152), L0)) {
      n = n + 2 | 0;
      value_0 = value_0.shiftRightUnsigned(14);
    }
    if (!equals(value_0.and(L_16384), L0)) {
      n = n + 1 | 0;
    }
    return n;
  };
  Sizer$Simple.prototype.sInt32Size_za3lpa$ = function (value) {
    return this.uInt32Size_za3lpa$(this.get_zigZagEncoded_s8ev3n$(value));
  };
  Sizer$Simple.prototype.sInt64Size_s8cxhz$ = function (value) {
    return this.uInt64Size_s8cxhz$(this.get_zigZagEncoded_mts6qi$(value));
  };
  Sizer$Simple.prototype.fixed32Size_za3lpa$ = function (value) {
    return 4;
  };
  Sizer$Simple.prototype.fixed64Size_s8cxhz$ = function (value) {
    return 8;
  };
  Sizer$Simple.prototype.sFixed32Size_za3lpa$ = function (value) {
    return 4;
  };
  Sizer$Simple.prototype.sFixed64Size_s8cxhz$ = function (value) {
    return 8;
  };
  Sizer$Simple.prototype.boolSize_6taknv$ = function (value) {
    return 1;
  };
  Sizer$Simple.prototype.bytesSize_w7fipb$ = function (value) {
    return this.uInt32Size_za3lpa$(value.array.length) + value.array.length | 0;
  };
  Sizer$Simple.prototype.get_zigZagEncoded_s8ev3n$ = function ($receiver) {
    return $receiver << 1 ^ $receiver >> 31;
  };
  Sizer$Simple.prototype.get_zigZagEncoded_mts6qi$ = function ($receiver) {
    return $receiver.shiftLeft(1).xor($receiver.shiftRight(63));
  };
  Sizer$Simple.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Simple',
    interfaces: [Sizer]
  };
  Sizer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sizer',
    interfaces: []
  };
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function Unmarshaller(discardUnknownFields) {
    this.discardUnknownFields = discardUnknownFields;
    this.currentUnknownFields = this.discardUnknownFields ? null : LinkedHashMap_init();
  }
  Unmarshaller.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Unmarshaller',
    interfaces: []
  };
  function ListWithSize(list, protoSize) {
    ListWithSize$Companion_getInstance();
    this.list = list;
    this.protoSize = protoSize;
  }
  ListWithSize.prototype.toString = function () {
    return this.list.toString();
  };
  function ListWithSize$Builder() {
    ListWithSize$Builder$Companion_getInstance();
    this.list = ArrayList_init();
    this.protoSize = 0;
  }
  ListWithSize$Builder.prototype.fixed = function () {
    var $receiver = this.list;
    $receiver.trimToSize();
    return new ListWithSize($receiver, this.protoSize);
  };
  function ListWithSize$Builder$Companion() {
    ListWithSize$Builder$Companion_instance = this;
  }
  ListWithSize$Builder$Companion.prototype.fixed_hnp5n5$ = function (bld) {
    var tmp$;
    return (tmp$ = bld != null ? bld.fixed() : null) != null ? tmp$ : ListWithSize$Companion_getInstance().Empty;
  };
  ListWithSize$Builder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ListWithSize$Builder$Companion_instance = null;
  function ListWithSize$Builder$Companion_getInstance() {
    if (ListWithSize$Builder$Companion_instance === null) {
      new ListWithSize$Builder$Companion();
    }
    return ListWithSize$Builder$Companion_instance;
  }
  ListWithSize$Builder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Builder',
    interfaces: []
  };
  function ListWithSize$Companion() {
    ListWithSize$Companion_instance = this;
    this.Empty = new ListWithSize(emptyList(), 0);
  }
  ListWithSize$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ListWithSize$Companion_instance = null;
  function ListWithSize$Companion_getInstance() {
    if (ListWithSize$Companion_instance === null) {
      new ListWithSize$Companion();
    }
    return ListWithSize$Companion_instance;
  }
  Object.defineProperty(ListWithSize.prototype, 'size', {
    get: function () {
      return this.list.size;
    }
  });
  ListWithSize.prototype.contains_11rb$ = function (element) {
    return this.list.contains_11rb$(element);
  };
  ListWithSize.prototype.containsAll_brywnq$ = function (elements) {
    return this.list.containsAll_brywnq$(elements);
  };
  ListWithSize.prototype.get_za3lpa$ = function (index) {
    return this.list.get_za3lpa$(index);
  };
  ListWithSize.prototype.indexOf_11rb$ = function (element) {
    return this.list.indexOf_11rb$(element);
  };
  ListWithSize.prototype.isEmpty = function () {
    return this.list.isEmpty();
  };
  ListWithSize.prototype.iterator = function () {
    return this.list.iterator();
  };
  ListWithSize.prototype.lastIndexOf_11rb$ = function (element) {
    return this.list.lastIndexOf_11rb$(element);
  };
  ListWithSize.prototype.listIterator = function () {
    return this.list.listIterator();
  };
  ListWithSize.prototype.listIterator_za3lpa$ = function (index) {
    return this.list.listIterator_za3lpa$(index);
  };
  ListWithSize.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return this.list.subList_vux9f0$(fromIndex, toIndex);
  };
  ListWithSize.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListWithSize',
    interfaces: [List]
  };
  function ListWithSize_init(list, sizeFn, $this) {
    $this = $this || Object.create(ListWithSize.prototype);
    var tmp$;
    var sum = 0;
    tmp$ = list.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      sum = sum + sizeFn(element) | 0;
    }
    ListWithSize.call($this, list, sum);
    return $this;
  }
  ListWithSize.prototype.component1 = function () {
    return this.list;
  };
  ListWithSize.prototype.component2 = function () {
    return this.protoSize;
  };
  ListWithSize.prototype.copy_eymw4b$ = function (list, protoSize) {
    return new ListWithSize(list === void 0 ? this.list : list, protoSize === void 0 ? this.protoSize : protoSize);
  };
  ListWithSize.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.list) | 0;
    result = result * 31 + Kotlin.hashCode(this.protoSize) | 0;
    return result;
  };
  ListWithSize.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.list, other.list) && Kotlin.equals(this.protoSize, other.protoSize)))));
  };
  function MapWithSize(entries, protoSize) {
    MapWithSize$Companion_getInstance();
    AbstractMap.call(this);
    this.entries_rxrgjn$_0 = entries;
    this.protoSize = protoSize;
  }
  Object.defineProperty(MapWithSize.prototype, 'entries', {
    get: function () {
      return this.entries_rxrgjn$_0;
    }
  });
  function MapWithSize$Builder() {
    MapWithSize$Builder$Companion_getInstance();
    this.entries = LinkedHashMap_init();
    this.protoSize = 0;
  }
  MapWithSize$Builder.prototype.fixed = function () {
    return new MapWithSize(toSet(this.entries.values), this.protoSize);
  };
  function MapWithSize$Builder$Companion() {
    MapWithSize$Builder$Companion_instance = this;
  }
  MapWithSize$Builder$Companion.prototype.fixed_goowx9$ = function (bld) {
    var tmp$, tmp$_0;
    return (tmp$_0 = bld != null ? bld.fixed() : null) != null ? tmp$_0 : Kotlin.isType(tmp$ = MapWithSize$Companion_getInstance().Empty, MapWithSize) ? tmp$ : throwCCE();
  };
  MapWithSize$Builder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MapWithSize$Builder$Companion_instance = null;
  function MapWithSize$Builder$Companion_getInstance() {
    if (MapWithSize$Builder$Companion_instance === null) {
      new MapWithSize$Builder$Companion();
    }
    return MapWithSize$Builder$Companion_instance;
  }
  MapWithSize$Builder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Builder',
    interfaces: []
  };
  function MapWithSize$Companion() {
    MapWithSize$Companion_instance = this;
    this.Empty = new MapWithSize(emptySet(), 0);
  }
  MapWithSize$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MapWithSize$Companion_instance = null;
  function MapWithSize$Companion_getInstance() {
    if (MapWithSize$Companion_instance === null) {
      new MapWithSize$Companion();
    }
    return MapWithSize$Companion_instance;
  }
  MapWithSize.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MapWithSize',
    interfaces: [AbstractMap]
  };
  function Message() {
  }
  Message.prototype.protoMarshal = function () {
    var $receiver = Marshaller$Companion_getInstance().allocate_za3lpa$(this.protoSize);
    getCallableRef('protoMarshal', function ($receiver, m) {
      return $receiver.protoMarshal_5j3s6l$(m), Unit;
    }.bind(null, this))($receiver);
    return ensureNotNull($receiver.complete());
  };
  function Message$Companion() {
  }
  Message$Companion.prototype.protoUnmarshal_fqrh44$ = function (arr) {
    return this.protoUnmarshal_cscpc6$(Unmarshaller$Companion_getInstance().fromByteArray_fqrh44$(arr));
  };
  Message$Companion.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Companion',
    interfaces: []
  };
  function Message$Enum() {
  }
  function Message$Enum$Companion() {
  }
  Message$Enum$Companion.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Companion',
    interfaces: []
  };
  Message$Enum.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Enum',
    interfaces: []
  };
  Message.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Message',
    interfaces: []
  };
  function UnknownField(fieldNum, value) {
    this.fieldNum = fieldNum;
    this.value = value;
  }
  UnknownField.prototype.size = function () {
    return Kotlin.isType(this.value, UnknownField$Value$Composite) ? Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(this.fieldNum), this.value.values.size) + this.value.size() | 0 : Sizer_getInstance().tagSize_za3lpa$(this.fieldNum) + this.value.size() | 0;
  };
  function UnknownField$Value() {
  }
  function UnknownField$Value$Varint(varint) {
    UnknownField$Value.call(this);
    this.varint = varint;
  }
  UnknownField$Value$Varint.prototype.size = function () {
    return Sizer_getInstance().uInt64Size_s8cxhz$(this.varint);
  };
  UnknownField$Value$Varint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Varint',
    interfaces: [UnknownField$Value]
  };
  UnknownField$Value$Varint.prototype.component1 = function () {
    return this.varint;
  };
  UnknownField$Value$Varint.prototype.copy_s8cxhz$ = function (varint) {
    return new UnknownField$Value$Varint(varint === void 0 ? this.varint : varint);
  };
  UnknownField$Value$Varint.prototype.toString = function () {
    return 'Varint(varint=' + Kotlin.toString(this.varint) + ')';
  };
  UnknownField$Value$Varint.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.varint) | 0;
    return result;
  };
  UnknownField$Value$Varint.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.varint, other.varint))));
  };
  function UnknownField$Value$Fixed64(fixed64) {
    UnknownField$Value.call(this);
    this.fixed64 = fixed64;
  }
  UnknownField$Value$Fixed64.prototype.size = function () {
    return Sizer_getInstance().fixed64Size_s8cxhz$(this.fixed64);
  };
  UnknownField$Value$Fixed64.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Fixed64',
    interfaces: [UnknownField$Value]
  };
  UnknownField$Value$Fixed64.prototype.component1 = function () {
    return this.fixed64;
  };
  UnknownField$Value$Fixed64.prototype.copy_s8cxhz$ = function (fixed64) {
    return new UnknownField$Value$Fixed64(fixed64 === void 0 ? this.fixed64 : fixed64);
  };
  UnknownField$Value$Fixed64.prototype.toString = function () {
    return 'Fixed64(fixed64=' + Kotlin.toString(this.fixed64) + ')';
  };
  UnknownField$Value$Fixed64.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.fixed64) | 0;
    return result;
  };
  UnknownField$Value$Fixed64.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.fixed64, other.fixed64))));
  };
  function UnknownField$Value$LengthDelimited(bytes) {
    UnknownField$Value.call(this);
    this.bytes = bytes;
  }
  UnknownField$Value$LengthDelimited.prototype.size = function () {
    return Sizer_getInstance().bytesSize_w7fipb$(this.bytes);
  };
  UnknownField$Value$LengthDelimited.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LengthDelimited',
    interfaces: [UnknownField$Value]
  };
  UnknownField$Value$LengthDelimited.prototype.component1 = function () {
    return this.bytes;
  };
  UnknownField$Value$LengthDelimited.prototype.copy_w7fipb$ = function (bytes) {
    return new UnknownField$Value$LengthDelimited(bytes === void 0 ? this.bytes : bytes);
  };
  UnknownField$Value$LengthDelimited.prototype.toString = function () {
    return 'LengthDelimited(bytes=' + Kotlin.toString(this.bytes) + ')';
  };
  UnknownField$Value$LengthDelimited.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.bytes) | 0;
    return result;
  };
  UnknownField$Value$LengthDelimited.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.bytes, other.bytes))));
  };
  function UnknownField$Value$StartGroup() {
    UnknownField$Value$StartGroup_instance = this;
    UnknownField$Value.call(this);
  }
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  UnknownField$Value$StartGroup.prototype.size = function () {
    throw new NotImplementedError_init();
  };
  UnknownField$Value$StartGroup.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StartGroup',
    interfaces: [UnknownField$Value]
  };
  var UnknownField$Value$StartGroup_instance = null;
  function UnknownField$Value$StartGroup_getInstance() {
    if (UnknownField$Value$StartGroup_instance === null) {
      new UnknownField$Value$StartGroup();
    }
    return UnknownField$Value$StartGroup_instance;
  }
  function UnknownField$Value$EndGroup() {
    UnknownField$Value$EndGroup_instance = this;
    UnknownField$Value.call(this);
  }
  UnknownField$Value$EndGroup.prototype.size = function () {
    throw new NotImplementedError_init();
  };
  UnknownField$Value$EndGroup.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'EndGroup',
    interfaces: [UnknownField$Value]
  };
  var UnknownField$Value$EndGroup_instance = null;
  function UnknownField$Value$EndGroup_getInstance() {
    if (UnknownField$Value$EndGroup_instance === null) {
      new UnknownField$Value$EndGroup();
    }
    return UnknownField$Value$EndGroup_instance;
  }
  function UnknownField$Value$Fixed32(fixed32) {
    UnknownField$Value.call(this);
    this.fixed32 = fixed32;
  }
  UnknownField$Value$Fixed32.prototype.size = function () {
    return Sizer_getInstance().fixed32Size_za3lpa$(this.fixed32);
  };
  UnknownField$Value$Fixed32.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Fixed32',
    interfaces: [UnknownField$Value]
  };
  UnknownField$Value$Fixed32.prototype.component1 = function () {
    return this.fixed32;
  };
  UnknownField$Value$Fixed32.prototype.copy_za3lpa$ = function (fixed32) {
    return new UnknownField$Value$Fixed32(fixed32 === void 0 ? this.fixed32 : fixed32);
  };
  UnknownField$Value$Fixed32.prototype.toString = function () {
    return 'Fixed32(fixed32=' + Kotlin.toString(this.fixed32) + ')';
  };
  UnknownField$Value$Fixed32.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.fixed32) | 0;
    return result;
  };
  UnknownField$Value$Fixed32.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.fixed32, other.fixed32))));
  };
  function UnknownField$Value$Composite(values) {
    UnknownField$Value.call(this);
    this.values = values;
  }
  UnknownField$Value$Composite.prototype.size = function () {
    var tmp$;
    var sum = 0;
    tmp$ = this.values.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      sum = sum + element.size() | 0;
    }
    return sum;
  };
  UnknownField$Value$Composite.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Composite',
    interfaces: [UnknownField$Value]
  };
  UnknownField$Value$Composite.prototype.component1 = function () {
    return this.values;
  };
  UnknownField$Value$Composite.prototype.copy_4xqs7e$ = function (values) {
    return new UnknownField$Value$Composite(values === void 0 ? this.values : values);
  };
  UnknownField$Value$Composite.prototype.toString = function () {
    return 'Composite(values=' + Kotlin.toString(this.values) + ')';
  };
  UnknownField$Value$Composite.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.values) | 0;
    return result;
  };
  UnknownField$Value$Composite.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.values, other.values))));
  };
  UnknownField$Value.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Value',
    interfaces: []
  };
  UnknownField.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UnknownField',
    interfaces: []
  };
  function UnknownField_init(fieldNum, value, fixed, $this) {
    if (fixed === void 0)
      fixed = false;
    $this = $this || Object.create(UnknownField.prototype);
    UnknownField.call($this, fieldNum, fixed ? new UnknownField$Value$Fixed64(value) : new UnknownField$Value$Varint(value));
    return $this;
  }
  function UnknownField_init_0(fieldNum, value, fixed, $this) {
    if (fixed === void 0)
      fixed = false;
    $this = $this || Object.create(UnknownField.prototype);
    UnknownField.call($this, fieldNum, fixed ? new UnknownField$Value$Fixed32(value) : new UnknownField$Value$Varint(Kotlin.Long.fromInt(value)));
    return $this;
  }
  function UnknownField_init_1(fieldNum, value, $this) {
    $this = $this || Object.create(UnknownField.prototype);
    UnknownField.call($this, fieldNum, new UnknownField$Value$LengthDelimited(value));
    return $this;
  }
  function UnknownField_init_2(fieldNum, value, $this) {
    $this = $this || Object.create(UnknownField.prototype);
    UnknownField.call($this, fieldNum, new UnknownField$Value$LengthDelimited(new ByteArr(value)));
    return $this;
  }
  function UnknownField_init_3(fieldNum, value, $this) {
    $this = $this || Object.create(UnknownField.prototype);
    UnknownField.call($this, fieldNum, new UnknownField$Value$LengthDelimited(new ByteArr(Util_getInstance().stringToUtf8_61zpoe$(value))));
    return $this;
  }
  UnknownField.prototype.component1 = function () {
    return this.fieldNum;
  };
  UnknownField.prototype.component2 = function () {
    return this.value;
  };
  UnknownField.prototype.copy_wwn2wf$ = function (fieldNum, value) {
    return new UnknownField(fieldNum === void 0 ? this.fieldNum : fieldNum, value === void 0 ? this.value : value);
  };
  UnknownField.prototype.toString = function () {
    return 'UnknownField(fieldNum=' + Kotlin.toString(this.fieldNum) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  UnknownField.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.fieldNum) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  UnknownField.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.fieldNum, other.fieldNum) && Kotlin.equals(this.value, other.value)))));
  };
  function Any(typeUrl, value, unknownFields) {
    Any$Companion_getInstance();
    if (typeUrl === void 0)
      typeUrl = '';
    if (value === void 0)
      value = ByteArr$Companion_getInstance().empty;
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.typeUrl = typeUrl;
    this.value = value;
    this.unknownFields = unknownFields;
    this.protoSize_hyna2x$_0 = lazy(Any$protoSize$lambda(this));
  }
  Any.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl(this, other);
  };
  Object.defineProperty(Any.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_hyna2x$_0.value;
    }
  });
  Any.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl(this, m);
  };
  function Any$Companion() {
    Any$Companion_instance = this;
  }
  Any$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl(Any$Companion_getInstance(), u);
  };
  Any$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var Any$Companion_instance = null;
  function Any$Companion_getInstance() {
    if (Any$Companion_instance === null) {
      new Any$Companion();
    }
    return Any$Companion_instance;
  }
  function Any$protoSize$lambda(this$Any) {
    return function () {
      return protoSizeImpl(this$Any);
    };
  }
  Any.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Any',
    interfaces: [Message]
  };
  Any.prototype.component1 = function () {
    return this.typeUrl;
  };
  Any.prototype.component2 = function () {
    return this.value;
  };
  Any.prototype.component3 = function () {
    return this.unknownFields;
  };
  Any.prototype.copy_7phqkg$ = function (typeUrl, value, unknownFields) {
    return new Any(typeUrl === void 0 ? this.typeUrl : typeUrl, value === void 0 ? this.value : value, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  Any.prototype.toString = function () {
    return 'Any(typeUrl=' + Kotlin.toString(this.typeUrl) + (', value=' + Kotlin.toString(this.value)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  Any.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.typeUrl) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  Any.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.typeUrl, other.typeUrl) && Kotlin.equals(this.value, other.value) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function protoMergeImpl($receiver, plus_0) {
    var tmp$;
    return (tmp$ = plus_0 != null ? plus_0.copy_7phqkg$(void 0, void 0, plus($receiver.unknownFields, plus_0.unknownFields)) : null) != null ? tmp$ : $receiver;
  }
  function protoSizeImpl($receiver) {
    var protoSize = 0;
    if ($receiver.typeUrl.length > 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().stringSize_61zpoe$($receiver.typeUrl)) | 0;
    if (!($receiver.value.array.length === 0))
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(2) + Sizer_getInstance().bytesSize_w7fipb$($receiver.value)) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl($receiver, protoMarshal) {
    if ($receiver.typeUrl.length > 0)
      protoMarshal.writeTag_za3lpa$(10).writeString_61zpoe$($receiver.typeUrl);
    if (!($receiver.value.array.length === 0))
      protoMarshal.writeTag_za3lpa$(18).writeBytes_w7fipb$($receiver.value);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl($receiver, protoUnmarshal) {
    var typeUrl = '';
    var value = ByteArr$Companion_getInstance().empty;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new Any(typeUrl, value, protoUnmarshal.unknownFields());
        case 10:
          typeUrl = protoUnmarshal.readString();
          break;
        case 18:
          value = protoUnmarshal.readBytes();
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function Api(name, methods, options, version, sourceContext, mixins, syntax, unknownFields) {
    Api$Companion_getInstance();
    if (name === void 0)
      name = '';
    if (methods === void 0)
      methods = emptyList();
    if (options === void 0)
      options = emptyList();
    if (version === void 0)
      version = '';
    if (sourceContext === void 0)
      sourceContext = null;
    if (mixins === void 0)
      mixins = emptyList();
    if (syntax === void 0)
      syntax = Syntax$Companion_getInstance().fromValue_za3lpa$(0);
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.name = name;
    this.methods = methods;
    this.options = options;
    this.version = version;
    this.sourceContext = sourceContext;
    this.mixins = mixins;
    this.syntax = syntax;
    this.unknownFields = unknownFields;
    this.protoSize_pwd25h$_0 = lazy(Api$protoSize$lambda(this));
  }
  Api.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_0(this, other);
  };
  Object.defineProperty(Api.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_pwd25h$_0.value;
    }
  });
  Api.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_0(this, m);
  };
  function Api$Companion() {
    Api$Companion_instance = this;
  }
  Api$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_0(Api$Companion_getInstance(), u);
  };
  Api$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var Api$Companion_instance = null;
  function Api$Companion_getInstance() {
    if (Api$Companion_instance === null) {
      new Api$Companion();
    }
    return Api$Companion_instance;
  }
  function Api$protoSize$lambda(this$Api) {
    return function () {
      return protoSizeImpl_0(this$Api);
    };
  }
  Api.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Api',
    interfaces: [Message]
  };
  Api.prototype.component1 = function () {
    return this.name;
  };
  Api.prototype.component2 = function () {
    return this.methods;
  };
  Api.prototype.component3 = function () {
    return this.options;
  };
  Api.prototype.component4 = function () {
    return this.version;
  };
  Api.prototype.component5 = function () {
    return this.sourceContext;
  };
  Api.prototype.component6 = function () {
    return this.mixins;
  };
  Api.prototype.component7 = function () {
    return this.syntax;
  };
  Api.prototype.component8 = function () {
    return this.unknownFields;
  };
  Api.prototype.copy_pxidt9$ = function (name, methods, options, version, sourceContext, mixins, syntax, unknownFields) {
    return new Api(name === void 0 ? this.name : name, methods === void 0 ? this.methods : methods, options === void 0 ? this.options : options, version === void 0 ? this.version : version, sourceContext === void 0 ? this.sourceContext : sourceContext, mixins === void 0 ? this.mixins : mixins, syntax === void 0 ? this.syntax : syntax, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  Api.prototype.toString = function () {
    return 'Api(name=' + Kotlin.toString(this.name) + (', methods=' + Kotlin.toString(this.methods)) + (', options=' + Kotlin.toString(this.options)) + (', version=' + Kotlin.toString(this.version)) + (', sourceContext=' + Kotlin.toString(this.sourceContext)) + (', mixins=' + Kotlin.toString(this.mixins)) + (', syntax=' + Kotlin.toString(this.syntax)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  Api.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.methods) | 0;
    result = result * 31 + Kotlin.hashCode(this.options) | 0;
    result = result * 31 + Kotlin.hashCode(this.version) | 0;
    result = result * 31 + Kotlin.hashCode(this.sourceContext) | 0;
    result = result * 31 + Kotlin.hashCode(this.mixins) | 0;
    result = result * 31 + Kotlin.hashCode(this.syntax) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  Api.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.methods, other.methods) && Kotlin.equals(this.options, other.options) && Kotlin.equals(this.version, other.version) && Kotlin.equals(this.sourceContext, other.sourceContext) && Kotlin.equals(this.mixins, other.mixins) && Kotlin.equals(this.syntax, other.syntax) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function Method(name, requestTypeUrl, requestStreaming, responseTypeUrl, responseStreaming, options, syntax, unknownFields) {
    Method$Companion_getInstance();
    if (name === void 0)
      name = '';
    if (requestTypeUrl === void 0)
      requestTypeUrl = '';
    if (requestStreaming === void 0)
      requestStreaming = false;
    if (responseTypeUrl === void 0)
      responseTypeUrl = '';
    if (responseStreaming === void 0)
      responseStreaming = false;
    if (options === void 0)
      options = emptyList();
    if (syntax === void 0)
      syntax = Syntax$Companion_getInstance().fromValue_za3lpa$(0);
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.name = name;
    this.requestTypeUrl = requestTypeUrl;
    this.requestStreaming = requestStreaming;
    this.responseTypeUrl = responseTypeUrl;
    this.responseStreaming = responseStreaming;
    this.options = options;
    this.syntax = syntax;
    this.unknownFields = unknownFields;
    this.protoSize_d4ners$_0 = lazy(Method$protoSize$lambda(this));
  }
  Method.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_1(this, other);
  };
  Object.defineProperty(Method.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_d4ners$_0.value;
    }
  });
  Method.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_1(this, m);
  };
  function Method$Companion() {
    Method$Companion_instance = this;
  }
  Method$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_1(Method$Companion_getInstance(), u);
  };
  Method$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var Method$Companion_instance = null;
  function Method$Companion_getInstance() {
    if (Method$Companion_instance === null) {
      new Method$Companion();
    }
    return Method$Companion_instance;
  }
  function Method$protoSize$lambda(this$Method) {
    return function () {
      return protoSizeImpl_1(this$Method);
    };
  }
  Method.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Method',
    interfaces: [Message]
  };
  Method.prototype.component1 = function () {
    return this.name;
  };
  Method.prototype.component2 = function () {
    return this.requestTypeUrl;
  };
  Method.prototype.component3 = function () {
    return this.requestStreaming;
  };
  Method.prototype.component4 = function () {
    return this.responseTypeUrl;
  };
  Method.prototype.component5 = function () {
    return this.responseStreaming;
  };
  Method.prototype.component6 = function () {
    return this.options;
  };
  Method.prototype.component7 = function () {
    return this.syntax;
  };
  Method.prototype.component8 = function () {
    return this.unknownFields;
  };
  Method.prototype.copy_3znoqi$ = function (name, requestTypeUrl, requestStreaming, responseTypeUrl, responseStreaming, options, syntax, unknownFields) {
    return new Method(name === void 0 ? this.name : name, requestTypeUrl === void 0 ? this.requestTypeUrl : requestTypeUrl, requestStreaming === void 0 ? this.requestStreaming : requestStreaming, responseTypeUrl === void 0 ? this.responseTypeUrl : responseTypeUrl, responseStreaming === void 0 ? this.responseStreaming : responseStreaming, options === void 0 ? this.options : options, syntax === void 0 ? this.syntax : syntax, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  Method.prototype.toString = function () {
    return 'Method(name=' + Kotlin.toString(this.name) + (', requestTypeUrl=' + Kotlin.toString(this.requestTypeUrl)) + (', requestStreaming=' + Kotlin.toString(this.requestStreaming)) + (', responseTypeUrl=' + Kotlin.toString(this.responseTypeUrl)) + (', responseStreaming=' + Kotlin.toString(this.responseStreaming)) + (', options=' + Kotlin.toString(this.options)) + (', syntax=' + Kotlin.toString(this.syntax)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  Method.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.requestTypeUrl) | 0;
    result = result * 31 + Kotlin.hashCode(this.requestStreaming) | 0;
    result = result * 31 + Kotlin.hashCode(this.responseTypeUrl) | 0;
    result = result * 31 + Kotlin.hashCode(this.responseStreaming) | 0;
    result = result * 31 + Kotlin.hashCode(this.options) | 0;
    result = result * 31 + Kotlin.hashCode(this.syntax) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  Method.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.requestTypeUrl, other.requestTypeUrl) && Kotlin.equals(this.requestStreaming, other.requestStreaming) && Kotlin.equals(this.responseTypeUrl, other.responseTypeUrl) && Kotlin.equals(this.responseStreaming, other.responseStreaming) && Kotlin.equals(this.options, other.options) && Kotlin.equals(this.syntax, other.syntax) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function Mixin(name, root, unknownFields) {
    Mixin$Companion_getInstance();
    if (name === void 0)
      name = '';
    if (root === void 0)
      root = '';
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.name = name;
    this.root = root;
    this.unknownFields = unknownFields;
    this.protoSize_2pyb8s$_0 = lazy(Mixin$protoSize$lambda(this));
  }
  Mixin.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_2(this, other);
  };
  Object.defineProperty(Mixin.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_2pyb8s$_0.value;
    }
  });
  Mixin.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_2(this, m);
  };
  function Mixin$Companion() {
    Mixin$Companion_instance = this;
  }
  Mixin$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_2(Mixin$Companion_getInstance(), u);
  };
  Mixin$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var Mixin$Companion_instance = null;
  function Mixin$Companion_getInstance() {
    if (Mixin$Companion_instance === null) {
      new Mixin$Companion();
    }
    return Mixin$Companion_instance;
  }
  function Mixin$protoSize$lambda(this$Mixin) {
    return function () {
      return protoSizeImpl_2(this$Mixin);
    };
  }
  Mixin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mixin',
    interfaces: [Message]
  };
  Mixin.prototype.component1 = function () {
    return this.name;
  };
  Mixin.prototype.component2 = function () {
    return this.root;
  };
  Mixin.prototype.component3 = function () {
    return this.unknownFields;
  };
  Mixin.prototype.copy_s403pt$ = function (name, root, unknownFields) {
    return new Mixin(name === void 0 ? this.name : name, root === void 0 ? this.root : root, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  Mixin.prototype.toString = function () {
    return 'Mixin(name=' + Kotlin.toString(this.name) + (', root=' + Kotlin.toString(this.root)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  Mixin.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.root) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  Mixin.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.root, other.root) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function protoMergeImpl_0($receiver, plus_1) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    tmp$ = plus_0($receiver.methods, plus_1.methods);
    tmp$_0 = plus_0($receiver.options, plus_1.options);
    tmp$_3 = (tmp$_2 = (tmp$_1 = $receiver.sourceContext) != null ? tmp$_1.plus_2gqcnw$(plus_1.sourceContext) : null) != null ? tmp$_2 : plus_1.sourceContext;
    tmp$_4 = plus_0($receiver.mixins, plus_1.mixins);
    tmp$_5 = plus($receiver.unknownFields, plus_1.unknownFields);
    return (tmp$_6 = plus_1 != null ? plus_1.copy_pxidt9$(void 0, tmp$, tmp$_0, void 0, tmp$_3, tmp$_4, void 0, tmp$_5) : null) != null ? tmp$_6 : $receiver;
  }
  function protoSizeImpl_0($receiver) {
    var protoSize = 0;
    if ($receiver.name.length > 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().stringSize_61zpoe$($receiver.name)) | 0;
    if (!$receiver.methods.isEmpty())
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(2) + Sizer_getInstance().packedRepeatedSize_juvmgx$($receiver.methods, getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance())))) | 0;
    if (!$receiver.options.isEmpty())
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(3) + Sizer_getInstance().packedRepeatedSize_juvmgx$($receiver.options, getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance())))) | 0;
    if ($receiver.version.length > 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(4) + Sizer_getInstance().stringSize_61zpoe$($receiver.version)) | 0;
    if ($receiver.sourceContext != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(5) + Sizer_getInstance().messageSize_3k86cv$($receiver.sourceContext)) | 0;
    if (!$receiver.mixins.isEmpty())
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(6) + Sizer_getInstance().packedRepeatedSize_juvmgx$($receiver.mixins, getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance())))) | 0;
    if ($receiver.syntax.value !== 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(7) + Sizer_getInstance().enumSize_do1vow$($receiver.syntax)) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_0($receiver, protoMarshal) {
    if ($receiver.name.length > 0)
      protoMarshal.writeTag_za3lpa$(10).writeString_61zpoe$($receiver.name);
    if (!$receiver.methods.isEmpty())
      protoMarshal.writeTag_za3lpa$(18).writePackedRepeated_w6577c$($receiver.methods, getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance())), getCallableRef('writeMessage', function ($receiver, value) {
        return $receiver.writeMessage_3k86cv$(value), Unit;
      }.bind(null, protoMarshal)));
    if (!$receiver.options.isEmpty())
      protoMarshal.writeTag_za3lpa$(26).writePackedRepeated_w6577c$($receiver.options, getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance())), getCallableRef('writeMessage', function ($receiver, value) {
        return $receiver.writeMessage_3k86cv$(value), Unit;
      }.bind(null, protoMarshal)));
    if ($receiver.version.length > 0)
      protoMarshal.writeTag_za3lpa$(34).writeString_61zpoe$($receiver.version);
    if ($receiver.sourceContext != null)
      protoMarshal.writeTag_za3lpa$(42).writeMessage_3k86cv$($receiver.sourceContext);
    if (!$receiver.mixins.isEmpty())
      protoMarshal.writeTag_za3lpa$(50).writePackedRepeated_w6577c$($receiver.mixins, getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance())), getCallableRef('writeMessage', function ($receiver, value) {
        return $receiver.writeMessage_3k86cv$(value), Unit;
      }.bind(null, protoMarshal)));
    if ($receiver.syntax.value !== 0)
      protoMarshal.writeTag_za3lpa$(56).writeEnum_do1vow$($receiver.syntax);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_0($receiver, protoUnmarshal) {
    var name = '';
    var methods = null;
    var options = null;
    var version = '';
    var sourceContext = null;
    var mixins = null;
    var syntax = Syntax$Companion_getInstance().fromValue_za3lpa$(0);
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new Api(name, ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(methods), ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(options), version, sourceContext, ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(mixins), syntax, protoUnmarshal.unknownFields());
        case 10:
          name = protoUnmarshal.readString();
          break;
        case 18:
          methods = protoUnmarshal.readRepeatedMessage_f2m3pm$(methods, Method$Companion_getInstance(), false);
          break;
        case 26:
          options = protoUnmarshal.readRepeatedMessage_f2m3pm$(options, Option$Companion_getInstance(), false);
          break;
        case 34:
          version = protoUnmarshal.readString();
          break;
        case 42:
          sourceContext = protoUnmarshal.readMessage_7rd7cm$(SourceContext$Companion_getInstance());
          break;
        case 50:
          mixins = protoUnmarshal.readRepeatedMessage_f2m3pm$(mixins, Mixin$Companion_getInstance(), false);
          break;
        case 56:
          syntax = protoUnmarshal.readEnum_vjsov6$(Syntax$Companion_getInstance());
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_1($receiver, plus_1) {
    var tmp$;
    return (tmp$ = plus_1 != null ? plus_1.copy_3znoqi$(void 0, void 0, void 0, void 0, void 0, plus_0($receiver.options, plus_1.options), void 0, plus($receiver.unknownFields, plus_1.unknownFields)) : null) != null ? tmp$ : $receiver;
  }
  function protoSizeImpl_1($receiver) {
    var protoSize = 0;
    if ($receiver.name.length > 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().stringSize_61zpoe$($receiver.name)) | 0;
    if ($receiver.requestTypeUrl.length > 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(2) + Sizer_getInstance().stringSize_61zpoe$($receiver.requestTypeUrl)) | 0;
    if ($receiver.requestStreaming)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(3) + Sizer_getInstance().boolSize_6taknv$($receiver.requestStreaming)) | 0;
    if ($receiver.responseTypeUrl.length > 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(4) + Sizer_getInstance().stringSize_61zpoe$($receiver.responseTypeUrl)) | 0;
    if ($receiver.responseStreaming)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(5) + Sizer_getInstance().boolSize_6taknv$($receiver.responseStreaming)) | 0;
    if (!$receiver.options.isEmpty())
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(6) + Sizer_getInstance().packedRepeatedSize_juvmgx$($receiver.options, getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance())))) | 0;
    if ($receiver.syntax.value !== 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(7) + Sizer_getInstance().enumSize_do1vow$($receiver.syntax)) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_1($receiver, protoMarshal) {
    if ($receiver.name.length > 0)
      protoMarshal.writeTag_za3lpa$(10).writeString_61zpoe$($receiver.name);
    if ($receiver.requestTypeUrl.length > 0)
      protoMarshal.writeTag_za3lpa$(18).writeString_61zpoe$($receiver.requestTypeUrl);
    if ($receiver.requestStreaming)
      protoMarshal.writeTag_za3lpa$(24).writeBool_6taknv$($receiver.requestStreaming);
    if ($receiver.responseTypeUrl.length > 0)
      protoMarshal.writeTag_za3lpa$(34).writeString_61zpoe$($receiver.responseTypeUrl);
    if ($receiver.responseStreaming)
      protoMarshal.writeTag_za3lpa$(40).writeBool_6taknv$($receiver.responseStreaming);
    if (!$receiver.options.isEmpty())
      protoMarshal.writeTag_za3lpa$(50).writePackedRepeated_w6577c$($receiver.options, getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance())), getCallableRef('writeMessage', function ($receiver, value) {
        return $receiver.writeMessage_3k86cv$(value), Unit;
      }.bind(null, protoMarshal)));
    if ($receiver.syntax.value !== 0)
      protoMarshal.writeTag_za3lpa$(56).writeEnum_do1vow$($receiver.syntax);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_1($receiver, protoUnmarshal) {
    var name = '';
    var requestTypeUrl = '';
    var requestStreaming = false;
    var responseTypeUrl = '';
    var responseStreaming = false;
    var options = null;
    var syntax = Syntax$Companion_getInstance().fromValue_za3lpa$(0);
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new Method(name, requestTypeUrl, requestStreaming, responseTypeUrl, responseStreaming, ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(options), syntax, protoUnmarshal.unknownFields());
        case 10:
          name = protoUnmarshal.readString();
          break;
        case 18:
          requestTypeUrl = protoUnmarshal.readString();
          break;
        case 24:
          requestStreaming = protoUnmarshal.readBool();
          break;
        case 34:
          responseTypeUrl = protoUnmarshal.readString();
          break;
        case 40:
          responseStreaming = protoUnmarshal.readBool();
          break;
        case 50:
          options = protoUnmarshal.readRepeatedMessage_f2m3pm$(options, Option$Companion_getInstance(), false);
          break;
        case 56:
          syntax = protoUnmarshal.readEnum_vjsov6$(Syntax$Companion_getInstance());
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_2($receiver, plus_0) {
    var tmp$;
    return (tmp$ = plus_0 != null ? plus_0.copy_s403pt$(void 0, void 0, plus($receiver.unknownFields, plus_0.unknownFields)) : null) != null ? tmp$ : $receiver;
  }
  function protoSizeImpl_2($receiver) {
    var protoSize = 0;
    if ($receiver.name.length > 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().stringSize_61zpoe$($receiver.name)) | 0;
    if ($receiver.root.length > 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(2) + Sizer_getInstance().stringSize_61zpoe$($receiver.root)) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_2($receiver, protoMarshal) {
    if ($receiver.name.length > 0)
      protoMarshal.writeTag_za3lpa$(10).writeString_61zpoe$($receiver.name);
    if ($receiver.root.length > 0)
      protoMarshal.writeTag_za3lpa$(18).writeString_61zpoe$($receiver.root);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_2($receiver, protoUnmarshal) {
    var name = '';
    var root = '';
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new Mixin(name, root, protoUnmarshal.unknownFields());
        case 10:
          name = protoUnmarshal.readString();
          break;
        case 18:
          root = protoUnmarshal.readString();
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function FileDescriptorSet(file, unknownFields) {
    FileDescriptorSet$Companion_getInstance();
    if (file === void 0)
      file = emptyList();
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.file = file;
    this.unknownFields = unknownFields;
    this.protoSize_qyphj6$_0 = lazy(FileDescriptorSet$protoSize$lambda(this));
  }
  FileDescriptorSet.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_3(this, other);
  };
  Object.defineProperty(FileDescriptorSet.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_qyphj6$_0.value;
    }
  });
  FileDescriptorSet.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_3(this, m);
  };
  function FileDescriptorSet$Companion() {
    FileDescriptorSet$Companion_instance = this;
  }
  FileDescriptorSet$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_3(FileDescriptorSet$Companion_getInstance(), u);
  };
  FileDescriptorSet$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var FileDescriptorSet$Companion_instance = null;
  function FileDescriptorSet$Companion_getInstance() {
    if (FileDescriptorSet$Companion_instance === null) {
      new FileDescriptorSet$Companion();
    }
    return FileDescriptorSet$Companion_instance;
  }
  function FileDescriptorSet$protoSize$lambda(this$FileDescriptorSet) {
    return function () {
      return protoSizeImpl_3(this$FileDescriptorSet);
    };
  }
  FileDescriptorSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FileDescriptorSet',
    interfaces: [Message]
  };
  FileDescriptorSet.prototype.component1 = function () {
    return this.file;
  };
  FileDescriptorSet.prototype.component2 = function () {
    return this.unknownFields;
  };
  FileDescriptorSet.prototype.copy_36goh1$ = function (file, unknownFields) {
    return new FileDescriptorSet(file === void 0 ? this.file : file, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  FileDescriptorSet.prototype.toString = function () {
    return 'FileDescriptorSet(file=' + Kotlin.toString(this.file) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  FileDescriptorSet.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.file) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  FileDescriptorSet.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.file, other.file) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function FileDescriptorProto(name, package_0, dependency, publicDependency, weakDependency, messageType, enumType, service, extension, options, sourceCodeInfo, syntax, unknownFields) {
    FileDescriptorProto$Companion_getInstance();
    if (name === void 0)
      name = null;
    if (package_0 === void 0)
      package_0 = null;
    if (dependency === void 0)
      dependency = emptyList();
    if (publicDependency === void 0)
      publicDependency = emptyList();
    if (weakDependency === void 0)
      weakDependency = emptyList();
    if (messageType === void 0)
      messageType = emptyList();
    if (enumType === void 0)
      enumType = emptyList();
    if (service === void 0)
      service = emptyList();
    if (extension === void 0)
      extension = emptyList();
    if (options === void 0)
      options = null;
    if (sourceCodeInfo === void 0)
      sourceCodeInfo = null;
    if (syntax === void 0)
      syntax = null;
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.name = name;
    this.package = package_0;
    this.dependency = dependency;
    this.publicDependency = publicDependency;
    this.weakDependency = weakDependency;
    this.messageType = messageType;
    this.enumType = enumType;
    this.service = service;
    this.extension = extension;
    this.options = options;
    this.sourceCodeInfo = sourceCodeInfo;
    this.syntax = syntax;
    this.unknownFields = unknownFields;
    this.protoSize_xgex4$_0 = lazy(FileDescriptorProto$protoSize$lambda(this));
  }
  FileDescriptorProto.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_4(this, other);
  };
  Object.defineProperty(FileDescriptorProto.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_xgex4$_0.value;
    }
  });
  FileDescriptorProto.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_4(this, m);
  };
  function FileDescriptorProto$Companion() {
    FileDescriptorProto$Companion_instance = this;
  }
  FileDescriptorProto$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_4(FileDescriptorProto$Companion_getInstance(), u);
  };
  FileDescriptorProto$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var FileDescriptorProto$Companion_instance = null;
  function FileDescriptorProto$Companion_getInstance() {
    if (FileDescriptorProto$Companion_instance === null) {
      new FileDescriptorProto$Companion();
    }
    return FileDescriptorProto$Companion_instance;
  }
  function FileDescriptorProto$protoSize$lambda(this$FileDescriptorProto) {
    return function () {
      return protoSizeImpl_4(this$FileDescriptorProto);
    };
  }
  FileDescriptorProto.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FileDescriptorProto',
    interfaces: [Message]
  };
  FileDescriptorProto.prototype.component1 = function () {
    return this.name;
  };
  FileDescriptorProto.prototype.component2 = function () {
    return this.package;
  };
  FileDescriptorProto.prototype.component3 = function () {
    return this.dependency;
  };
  FileDescriptorProto.prototype.component4 = function () {
    return this.publicDependency;
  };
  FileDescriptorProto.prototype.component5 = function () {
    return this.weakDependency;
  };
  FileDescriptorProto.prototype.component6 = function () {
    return this.messageType;
  };
  FileDescriptorProto.prototype.component7 = function () {
    return this.enumType;
  };
  FileDescriptorProto.prototype.component8 = function () {
    return this.service;
  };
  FileDescriptorProto.prototype.component9 = function () {
    return this.extension;
  };
  FileDescriptorProto.prototype.component10 = function () {
    return this.options;
  };
  FileDescriptorProto.prototype.component11 = function () {
    return this.sourceCodeInfo;
  };
  FileDescriptorProto.prototype.component12 = function () {
    return this.syntax;
  };
  FileDescriptorProto.prototype.component13 = function () {
    return this.unknownFields;
  };
  FileDescriptorProto.prototype.copy_bjb9tn$ = function (name, package_0, dependency, publicDependency, weakDependency, messageType, enumType, service, extension, options, sourceCodeInfo, syntax, unknownFields) {
    return new FileDescriptorProto(name === void 0 ? this.name : name, package_0 === void 0 ? this.package : package_0, dependency === void 0 ? this.dependency : dependency, publicDependency === void 0 ? this.publicDependency : publicDependency, weakDependency === void 0 ? this.weakDependency : weakDependency, messageType === void 0 ? this.messageType : messageType, enumType === void 0 ? this.enumType : enumType, service === void 0 ? this.service : service, extension === void 0 ? this.extension : extension, options === void 0 ? this.options : options, sourceCodeInfo === void 0 ? this.sourceCodeInfo : sourceCodeInfo, syntax === void 0 ? this.syntax : syntax, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  FileDescriptorProto.prototype.toString = function () {
    return 'FileDescriptorProto(name=' + Kotlin.toString(this.name) + (', package=' + Kotlin.toString(this.package)) + (', dependency=' + Kotlin.toString(this.dependency)) + (', publicDependency=' + Kotlin.toString(this.publicDependency)) + (', weakDependency=' + Kotlin.toString(this.weakDependency)) + (', messageType=' + Kotlin.toString(this.messageType)) + (', enumType=' + Kotlin.toString(this.enumType)) + (', service=' + Kotlin.toString(this.service)) + (', extension=' + Kotlin.toString(this.extension)) + (', options=' + Kotlin.toString(this.options)) + (', sourceCodeInfo=' + Kotlin.toString(this.sourceCodeInfo)) + (', syntax=' + Kotlin.toString(this.syntax)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  FileDescriptorProto.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.package) | 0;
    result = result * 31 + Kotlin.hashCode(this.dependency) | 0;
    result = result * 31 + Kotlin.hashCode(this.publicDependency) | 0;
    result = result * 31 + Kotlin.hashCode(this.weakDependency) | 0;
    result = result * 31 + Kotlin.hashCode(this.messageType) | 0;
    result = result * 31 + Kotlin.hashCode(this.enumType) | 0;
    result = result * 31 + Kotlin.hashCode(this.service) | 0;
    result = result * 31 + Kotlin.hashCode(this.extension) | 0;
    result = result * 31 + Kotlin.hashCode(this.options) | 0;
    result = result * 31 + Kotlin.hashCode(this.sourceCodeInfo) | 0;
    result = result * 31 + Kotlin.hashCode(this.syntax) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  FileDescriptorProto.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.package, other.package) && Kotlin.equals(this.dependency, other.dependency) && Kotlin.equals(this.publicDependency, other.publicDependency) && Kotlin.equals(this.weakDependency, other.weakDependency) && Kotlin.equals(this.messageType, other.messageType) && Kotlin.equals(this.enumType, other.enumType) && Kotlin.equals(this.service, other.service) && Kotlin.equals(this.extension, other.extension) && Kotlin.equals(this.options, other.options) && Kotlin.equals(this.sourceCodeInfo, other.sourceCodeInfo) && Kotlin.equals(this.syntax, other.syntax) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function DescriptorProto(name, field, extension, nestedType, enumType, extensionRange, oneofDecl, options, reservedRange, reservedName, unknownFields) {
    DescriptorProto$Companion_getInstance();
    if (name === void 0)
      name = null;
    if (field === void 0)
      field = emptyList();
    if (extension === void 0)
      extension = emptyList();
    if (nestedType === void 0)
      nestedType = emptyList();
    if (enumType === void 0)
      enumType = emptyList();
    if (extensionRange === void 0)
      extensionRange = emptyList();
    if (oneofDecl === void 0)
      oneofDecl = emptyList();
    if (options === void 0)
      options = null;
    if (reservedRange === void 0)
      reservedRange = emptyList();
    if (reservedName === void 0)
      reservedName = emptyList();
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.name = name;
    this.field = field;
    this.extension = extension;
    this.nestedType = nestedType;
    this.enumType = enumType;
    this.extensionRange = extensionRange;
    this.oneofDecl = oneofDecl;
    this.options = options;
    this.reservedRange = reservedRange;
    this.reservedName = reservedName;
    this.unknownFields = unknownFields;
    this.protoSize_i9ph5w$_0 = lazy(DescriptorProto$protoSize$lambda(this));
  }
  DescriptorProto.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_5(this, other);
  };
  Object.defineProperty(DescriptorProto.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_i9ph5w$_0.value;
    }
  });
  DescriptorProto.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_5(this, m);
  };
  function DescriptorProto$Companion() {
    DescriptorProto$Companion_instance = this;
  }
  DescriptorProto$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_5(DescriptorProto$Companion_getInstance(), u);
  };
  DescriptorProto$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var DescriptorProto$Companion_instance = null;
  function DescriptorProto$Companion_getInstance() {
    if (DescriptorProto$Companion_instance === null) {
      new DescriptorProto$Companion();
    }
    return DescriptorProto$Companion_instance;
  }
  function DescriptorProto$ExtensionRange(start, end, options, unknownFields) {
    DescriptorProto$ExtensionRange$Companion_getInstance();
    if (start === void 0)
      start = null;
    if (end === void 0)
      end = null;
    if (options === void 0)
      options = null;
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.start = start;
    this.end = end;
    this.options = options;
    this.unknownFields = unknownFields;
    this.protoSize_cas2dm$_0 = lazy(DescriptorProto$ExtensionRange$protoSize$lambda(this));
  }
  DescriptorProto$ExtensionRange.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_6(this, other);
  };
  Object.defineProperty(DescriptorProto$ExtensionRange.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_cas2dm$_0.value;
    }
  });
  DescriptorProto$ExtensionRange.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_6(this, m);
  };
  function DescriptorProto$ExtensionRange$Companion() {
    DescriptorProto$ExtensionRange$Companion_instance = this;
  }
  DescriptorProto$ExtensionRange$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_6(DescriptorProto$ExtensionRange$Companion_getInstance(), u);
  };
  DescriptorProto$ExtensionRange$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var DescriptorProto$ExtensionRange$Companion_instance = null;
  function DescriptorProto$ExtensionRange$Companion_getInstance() {
    if (DescriptorProto$ExtensionRange$Companion_instance === null) {
      new DescriptorProto$ExtensionRange$Companion();
    }
    return DescriptorProto$ExtensionRange$Companion_instance;
  }
  function DescriptorProto$ExtensionRange$protoSize$lambda(this$ExtensionRange) {
    return function () {
      return protoSizeImpl_6(this$ExtensionRange);
    };
  }
  DescriptorProto$ExtensionRange.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExtensionRange',
    interfaces: [Message]
  };
  DescriptorProto$ExtensionRange.prototype.component1 = function () {
    return this.start;
  };
  DescriptorProto$ExtensionRange.prototype.component2 = function () {
    return this.end;
  };
  DescriptorProto$ExtensionRange.prototype.component3 = function () {
    return this.options;
  };
  DescriptorProto$ExtensionRange.prototype.component4 = function () {
    return this.unknownFields;
  };
  DescriptorProto$ExtensionRange.prototype.copy_nftn6w$ = function (start, end, options, unknownFields) {
    return new DescriptorProto$ExtensionRange(start === void 0 ? this.start : start, end === void 0 ? this.end : end, options === void 0 ? this.options : options, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  DescriptorProto$ExtensionRange.prototype.toString = function () {
    return 'ExtensionRange(start=' + Kotlin.toString(this.start) + (', end=' + Kotlin.toString(this.end)) + (', options=' + Kotlin.toString(this.options)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  DescriptorProto$ExtensionRange.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.start) | 0;
    result = result * 31 + Kotlin.hashCode(this.end) | 0;
    result = result * 31 + Kotlin.hashCode(this.options) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  DescriptorProto$ExtensionRange.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.start, other.start) && Kotlin.equals(this.end, other.end) && Kotlin.equals(this.options, other.options) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function DescriptorProto$ReservedRange(start, end, unknownFields) {
    DescriptorProto$ReservedRange$Companion_getInstance();
    if (start === void 0)
      start = null;
    if (end === void 0)
      end = null;
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.start = start;
    this.end = end;
    this.unknownFields = unknownFields;
    this.protoSize_xdi9pn$_0 = lazy(DescriptorProto$ReservedRange$protoSize$lambda(this));
  }
  DescriptorProto$ReservedRange.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_7(this, other);
  };
  Object.defineProperty(DescriptorProto$ReservedRange.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_xdi9pn$_0.value;
    }
  });
  DescriptorProto$ReservedRange.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_7(this, m);
  };
  function DescriptorProto$ReservedRange$Companion() {
    DescriptorProto$ReservedRange$Companion_instance = this;
  }
  DescriptorProto$ReservedRange$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_7(DescriptorProto$ReservedRange$Companion_getInstance(), u);
  };
  DescriptorProto$ReservedRange$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var DescriptorProto$ReservedRange$Companion_instance = null;
  function DescriptorProto$ReservedRange$Companion_getInstance() {
    if (DescriptorProto$ReservedRange$Companion_instance === null) {
      new DescriptorProto$ReservedRange$Companion();
    }
    return DescriptorProto$ReservedRange$Companion_instance;
  }
  function DescriptorProto$ReservedRange$protoSize$lambda(this$ReservedRange) {
    return function () {
      return protoSizeImpl_7(this$ReservedRange);
    };
  }
  DescriptorProto$ReservedRange.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReservedRange',
    interfaces: [Message]
  };
  DescriptorProto$ReservedRange.prototype.component1 = function () {
    return this.start;
  };
  DescriptorProto$ReservedRange.prototype.component2 = function () {
    return this.end;
  };
  DescriptorProto$ReservedRange.prototype.component3 = function () {
    return this.unknownFields;
  };
  DescriptorProto$ReservedRange.prototype.copy_xmjek1$ = function (start, end, unknownFields) {
    return new DescriptorProto$ReservedRange(start === void 0 ? this.start : start, end === void 0 ? this.end : end, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  DescriptorProto$ReservedRange.prototype.toString = function () {
    return 'ReservedRange(start=' + Kotlin.toString(this.start) + (', end=' + Kotlin.toString(this.end)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  DescriptorProto$ReservedRange.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.start) | 0;
    result = result * 31 + Kotlin.hashCode(this.end) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  DescriptorProto$ReservedRange.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.start, other.start) && Kotlin.equals(this.end, other.end) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function DescriptorProto$protoSize$lambda(this$DescriptorProto) {
    return function () {
      return protoSizeImpl_5(this$DescriptorProto);
    };
  }
  DescriptorProto.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DescriptorProto',
    interfaces: [Message]
  };
  DescriptorProto.prototype.component1 = function () {
    return this.name;
  };
  DescriptorProto.prototype.component2 = function () {
    return this.field;
  };
  DescriptorProto.prototype.component3 = function () {
    return this.extension;
  };
  DescriptorProto.prototype.component4 = function () {
    return this.nestedType;
  };
  DescriptorProto.prototype.component5 = function () {
    return this.enumType;
  };
  DescriptorProto.prototype.component6 = function () {
    return this.extensionRange;
  };
  DescriptorProto.prototype.component7 = function () {
    return this.oneofDecl;
  };
  DescriptorProto.prototype.component8 = function () {
    return this.options;
  };
  DescriptorProto.prototype.component9 = function () {
    return this.reservedRange;
  };
  DescriptorProto.prototype.component10 = function () {
    return this.reservedName;
  };
  DescriptorProto.prototype.component11 = function () {
    return this.unknownFields;
  };
  DescriptorProto.prototype.copy_maooxk$ = function (name, field, extension, nestedType, enumType, extensionRange, oneofDecl, options, reservedRange, reservedName, unknownFields) {
    return new DescriptorProto(name === void 0 ? this.name : name, field === void 0 ? this.field : field, extension === void 0 ? this.extension : extension, nestedType === void 0 ? this.nestedType : nestedType, enumType === void 0 ? this.enumType : enumType, extensionRange === void 0 ? this.extensionRange : extensionRange, oneofDecl === void 0 ? this.oneofDecl : oneofDecl, options === void 0 ? this.options : options, reservedRange === void 0 ? this.reservedRange : reservedRange, reservedName === void 0 ? this.reservedName : reservedName, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  DescriptorProto.prototype.toString = function () {
    return 'DescriptorProto(name=' + Kotlin.toString(this.name) + (', field=' + Kotlin.toString(this.field)) + (', extension=' + Kotlin.toString(this.extension)) + (', nestedType=' + Kotlin.toString(this.nestedType)) + (', enumType=' + Kotlin.toString(this.enumType)) + (', extensionRange=' + Kotlin.toString(this.extensionRange)) + (', oneofDecl=' + Kotlin.toString(this.oneofDecl)) + (', options=' + Kotlin.toString(this.options)) + (', reservedRange=' + Kotlin.toString(this.reservedRange)) + (', reservedName=' + Kotlin.toString(this.reservedName)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  DescriptorProto.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.field) | 0;
    result = result * 31 + Kotlin.hashCode(this.extension) | 0;
    result = result * 31 + Kotlin.hashCode(this.nestedType) | 0;
    result = result * 31 + Kotlin.hashCode(this.enumType) | 0;
    result = result * 31 + Kotlin.hashCode(this.extensionRange) | 0;
    result = result * 31 + Kotlin.hashCode(this.oneofDecl) | 0;
    result = result * 31 + Kotlin.hashCode(this.options) | 0;
    result = result * 31 + Kotlin.hashCode(this.reservedRange) | 0;
    result = result * 31 + Kotlin.hashCode(this.reservedName) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  DescriptorProto.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.field, other.field) && Kotlin.equals(this.extension, other.extension) && Kotlin.equals(this.nestedType, other.nestedType) && Kotlin.equals(this.enumType, other.enumType) && Kotlin.equals(this.extensionRange, other.extensionRange) && Kotlin.equals(this.oneofDecl, other.oneofDecl) && Kotlin.equals(this.options, other.options) && Kotlin.equals(this.reservedRange, other.reservedRange) && Kotlin.equals(this.reservedName, other.reservedName) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function ExtensionRangeOptions(uninterpretedOption, unknownFields) {
    ExtensionRangeOptions$Companion_getInstance();
    if (uninterpretedOption === void 0)
      uninterpretedOption = emptyList();
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.uninterpretedOption = uninterpretedOption;
    this.unknownFields = unknownFields;
    this.protoSize_sw7cqd$_0 = lazy(ExtensionRangeOptions$protoSize$lambda(this));
  }
  ExtensionRangeOptions.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_8(this, other);
  };
  Object.defineProperty(ExtensionRangeOptions.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_sw7cqd$_0.value;
    }
  });
  ExtensionRangeOptions.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_8(this, m);
  };
  function ExtensionRangeOptions$Companion() {
    ExtensionRangeOptions$Companion_instance = this;
  }
  ExtensionRangeOptions$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_8(ExtensionRangeOptions$Companion_getInstance(), u);
  };
  ExtensionRangeOptions$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var ExtensionRangeOptions$Companion_instance = null;
  function ExtensionRangeOptions$Companion_getInstance() {
    if (ExtensionRangeOptions$Companion_instance === null) {
      new ExtensionRangeOptions$Companion();
    }
    return ExtensionRangeOptions$Companion_instance;
  }
  function ExtensionRangeOptions$protoSize$lambda(this$ExtensionRangeOptions) {
    return function () {
      return protoSizeImpl_8(this$ExtensionRangeOptions);
    };
  }
  ExtensionRangeOptions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExtensionRangeOptions',
    interfaces: [Message]
  };
  ExtensionRangeOptions.prototype.component1 = function () {
    return this.uninterpretedOption;
  };
  ExtensionRangeOptions.prototype.component2 = function () {
    return this.unknownFields;
  };
  ExtensionRangeOptions.prototype.copy_zext2$ = function (uninterpretedOption, unknownFields) {
    return new ExtensionRangeOptions(uninterpretedOption === void 0 ? this.uninterpretedOption : uninterpretedOption, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  ExtensionRangeOptions.prototype.toString = function () {
    return 'ExtensionRangeOptions(uninterpretedOption=' + Kotlin.toString(this.uninterpretedOption) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  ExtensionRangeOptions.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.uninterpretedOption) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  ExtensionRangeOptions.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.uninterpretedOption, other.uninterpretedOption) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function FieldDescriptorProto(name, number, label, type, typeName, extendee, defaultValue, oneofIndex, jsonName, options, unknownFields) {
    FieldDescriptorProto$Companion_getInstance();
    if (name === void 0)
      name = null;
    if (number === void 0)
      number = null;
    if (label === void 0)
      label = null;
    if (type === void 0)
      type = null;
    if (typeName === void 0)
      typeName = null;
    if (extendee === void 0)
      extendee = null;
    if (defaultValue === void 0)
      defaultValue = null;
    if (oneofIndex === void 0)
      oneofIndex = null;
    if (jsonName === void 0)
      jsonName = null;
    if (options === void 0)
      options = null;
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.name = name;
    this.number = number;
    this.label = label;
    this.type = type;
    this.typeName = typeName;
    this.extendee = extendee;
    this.defaultValue = defaultValue;
    this.oneofIndex = oneofIndex;
    this.jsonName = jsonName;
    this.options = options;
    this.unknownFields = unknownFields;
    this.protoSize_iuzave$_0 = lazy(FieldDescriptorProto$protoSize$lambda(this));
  }
  FieldDescriptorProto.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_9(this, other);
  };
  Object.defineProperty(FieldDescriptorProto.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_iuzave$_0.value;
    }
  });
  FieldDescriptorProto.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_9(this, m);
  };
  function FieldDescriptorProto$Companion() {
    FieldDescriptorProto$Companion_instance = this;
  }
  FieldDescriptorProto$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_9(FieldDescriptorProto$Companion_getInstance(), u);
  };
  FieldDescriptorProto$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var FieldDescriptorProto$Companion_instance = null;
  function FieldDescriptorProto$Companion_getInstance() {
    if (FieldDescriptorProto$Companion_instance === null) {
      new FieldDescriptorProto$Companion();
    }
    return FieldDescriptorProto$Companion_instance;
  }
  function FieldDescriptorProto$Type(value) {
    FieldDescriptorProto$Type$Companion_getInstance();
    this.value_5svucc$_0 = value;
  }
  Object.defineProperty(FieldDescriptorProto$Type.prototype, 'value', {
    get: function () {
      return this.value_5svucc$_0;
    }
  });
  function FieldDescriptorProto$Type$Companion() {
    FieldDescriptorProto$Type$Companion_instance = this;
    this.TYPE_DOUBLE = new FieldDescriptorProto$Type(1);
    this.TYPE_FLOAT = new FieldDescriptorProto$Type(2);
    this.TYPE_INT64 = new FieldDescriptorProto$Type(3);
    this.TYPE_UINT64 = new FieldDescriptorProto$Type(4);
    this.TYPE_INT32 = new FieldDescriptorProto$Type(5);
    this.TYPE_FIXED64 = new FieldDescriptorProto$Type(6);
    this.TYPE_FIXED32 = new FieldDescriptorProto$Type(7);
    this.TYPE_BOOL = new FieldDescriptorProto$Type(8);
    this.TYPE_STRING = new FieldDescriptorProto$Type(9);
    this.TYPE_GROUP = new FieldDescriptorProto$Type(10);
    this.TYPE_MESSAGE = new FieldDescriptorProto$Type(11);
    this.TYPE_BYTES = new FieldDescriptorProto$Type(12);
    this.TYPE_UINT32 = new FieldDescriptorProto$Type(13);
    this.TYPE_ENUM = new FieldDescriptorProto$Type(14);
    this.TYPE_SFIXED32 = new FieldDescriptorProto$Type(15);
    this.TYPE_SFIXED64 = new FieldDescriptorProto$Type(16);
    this.TYPE_SINT32 = new FieldDescriptorProto$Type(17);
    this.TYPE_SINT64 = new FieldDescriptorProto$Type(18);
  }
  FieldDescriptorProto$Type$Companion.prototype.fromValue_za3lpa$ = function (value) {
    switch (value) {
      case 1:
        return this.TYPE_DOUBLE;
      case 2:
        return this.TYPE_FLOAT;
      case 3:
        return this.TYPE_INT64;
      case 4:
        return this.TYPE_UINT64;
      case 5:
        return this.TYPE_INT32;
      case 6:
        return this.TYPE_FIXED64;
      case 7:
        return this.TYPE_FIXED32;
      case 8:
        return this.TYPE_BOOL;
      case 9:
        return this.TYPE_STRING;
      case 10:
        return this.TYPE_GROUP;
      case 11:
        return this.TYPE_MESSAGE;
      case 12:
        return this.TYPE_BYTES;
      case 13:
        return this.TYPE_UINT32;
      case 14:
        return this.TYPE_ENUM;
      case 15:
        return this.TYPE_SFIXED32;
      case 16:
        return this.TYPE_SFIXED64;
      case 17:
        return this.TYPE_SINT32;
      case 18:
        return this.TYPE_SINT64;
      default:return new FieldDescriptorProto$Type(value);
    }
  };
  FieldDescriptorProto$Type$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Enum$Companion]
  };
  var FieldDescriptorProto$Type$Companion_instance = null;
  function FieldDescriptorProto$Type$Companion_getInstance() {
    if (FieldDescriptorProto$Type$Companion_instance === null) {
      new FieldDescriptorProto$Type$Companion();
    }
    return FieldDescriptorProto$Type$Companion_instance;
  }
  FieldDescriptorProto$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Message$Enum]
  };
  FieldDescriptorProto$Type.prototype.component1 = function () {
    return this.value;
  };
  FieldDescriptorProto$Type.prototype.copy_za3lpa$ = function (value) {
    return new FieldDescriptorProto$Type(value === void 0 ? this.value : value);
  };
  FieldDescriptorProto$Type.prototype.toString = function () {
    return 'Type(value=' + Kotlin.toString(this.value) + ')';
  };
  FieldDescriptorProto$Type.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  FieldDescriptorProto$Type.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function FieldDescriptorProto$Label(value) {
    FieldDescriptorProto$Label$Companion_getInstance();
    this.value_n87gjg$_0 = value;
  }
  Object.defineProperty(FieldDescriptorProto$Label.prototype, 'value', {
    get: function () {
      return this.value_n87gjg$_0;
    }
  });
  function FieldDescriptorProto$Label$Companion() {
    FieldDescriptorProto$Label$Companion_instance = this;
    this.LABEL_OPTIONAL = new FieldDescriptorProto$Label(1);
    this.LABEL_REQUIRED = new FieldDescriptorProto$Label(2);
    this.LABEL_REPEATED = new FieldDescriptorProto$Label(3);
  }
  FieldDescriptorProto$Label$Companion.prototype.fromValue_za3lpa$ = function (value) {
    switch (value) {
      case 1:
        return this.LABEL_OPTIONAL;
      case 2:
        return this.LABEL_REQUIRED;
      case 3:
        return this.LABEL_REPEATED;
      default:return new FieldDescriptorProto$Label(value);
    }
  };
  FieldDescriptorProto$Label$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Enum$Companion]
  };
  var FieldDescriptorProto$Label$Companion_instance = null;
  function FieldDescriptorProto$Label$Companion_getInstance() {
    if (FieldDescriptorProto$Label$Companion_instance === null) {
      new FieldDescriptorProto$Label$Companion();
    }
    return FieldDescriptorProto$Label$Companion_instance;
  }
  FieldDescriptorProto$Label.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Label',
    interfaces: [Message$Enum]
  };
  FieldDescriptorProto$Label.prototype.component1 = function () {
    return this.value;
  };
  FieldDescriptorProto$Label.prototype.copy_za3lpa$ = function (value) {
    return new FieldDescriptorProto$Label(value === void 0 ? this.value : value);
  };
  FieldDescriptorProto$Label.prototype.toString = function () {
    return 'Label(value=' + Kotlin.toString(this.value) + ')';
  };
  FieldDescriptorProto$Label.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  FieldDescriptorProto$Label.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function FieldDescriptorProto$protoSize$lambda(this$FieldDescriptorProto) {
    return function () {
      return protoSizeImpl_9(this$FieldDescriptorProto);
    };
  }
  FieldDescriptorProto.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FieldDescriptorProto',
    interfaces: [Message]
  };
  FieldDescriptorProto.prototype.component1 = function () {
    return this.name;
  };
  FieldDescriptorProto.prototype.component2 = function () {
    return this.number;
  };
  FieldDescriptorProto.prototype.component3 = function () {
    return this.label;
  };
  FieldDescriptorProto.prototype.component4 = function () {
    return this.type;
  };
  FieldDescriptorProto.prototype.component5 = function () {
    return this.typeName;
  };
  FieldDescriptorProto.prototype.component6 = function () {
    return this.extendee;
  };
  FieldDescriptorProto.prototype.component7 = function () {
    return this.defaultValue;
  };
  FieldDescriptorProto.prototype.component8 = function () {
    return this.oneofIndex;
  };
  FieldDescriptorProto.prototype.component9 = function () {
    return this.jsonName;
  };
  FieldDescriptorProto.prototype.component10 = function () {
    return this.options;
  };
  FieldDescriptorProto.prototype.component11 = function () {
    return this.unknownFields;
  };
  FieldDescriptorProto.prototype.copy_lq6mxx$ = function (name, number, label, type, typeName, extendee, defaultValue, oneofIndex, jsonName, options, unknownFields) {
    return new FieldDescriptorProto(name === void 0 ? this.name : name, number === void 0 ? this.number : number, label === void 0 ? this.label : label, type === void 0 ? this.type : type, typeName === void 0 ? this.typeName : typeName, extendee === void 0 ? this.extendee : extendee, defaultValue === void 0 ? this.defaultValue : defaultValue, oneofIndex === void 0 ? this.oneofIndex : oneofIndex, jsonName === void 0 ? this.jsonName : jsonName, options === void 0 ? this.options : options, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  FieldDescriptorProto.prototype.toString = function () {
    return 'FieldDescriptorProto(name=' + Kotlin.toString(this.name) + (', number=' + Kotlin.toString(this.number)) + (', label=' + Kotlin.toString(this.label)) + (', type=' + Kotlin.toString(this.type)) + (', typeName=' + Kotlin.toString(this.typeName)) + (', extendee=' + Kotlin.toString(this.extendee)) + (', defaultValue=' + Kotlin.toString(this.defaultValue)) + (', oneofIndex=' + Kotlin.toString(this.oneofIndex)) + (', jsonName=' + Kotlin.toString(this.jsonName)) + (', options=' + Kotlin.toString(this.options)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  FieldDescriptorProto.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.number) | 0;
    result = result * 31 + Kotlin.hashCode(this.label) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.typeName) | 0;
    result = result * 31 + Kotlin.hashCode(this.extendee) | 0;
    result = result * 31 + Kotlin.hashCode(this.defaultValue) | 0;
    result = result * 31 + Kotlin.hashCode(this.oneofIndex) | 0;
    result = result * 31 + Kotlin.hashCode(this.jsonName) | 0;
    result = result * 31 + Kotlin.hashCode(this.options) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  FieldDescriptorProto.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.number, other.number) && Kotlin.equals(this.label, other.label) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.typeName, other.typeName) && Kotlin.equals(this.extendee, other.extendee) && Kotlin.equals(this.defaultValue, other.defaultValue) && Kotlin.equals(this.oneofIndex, other.oneofIndex) && Kotlin.equals(this.jsonName, other.jsonName) && Kotlin.equals(this.options, other.options) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function OneofDescriptorProto(name, options, unknownFields) {
    OneofDescriptorProto$Companion_getInstance();
    if (name === void 0)
      name = null;
    if (options === void 0)
      options = null;
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.name = name;
    this.options = options;
    this.unknownFields = unknownFields;
    this.protoSize_k5bhsd$_0 = lazy(OneofDescriptorProto$protoSize$lambda(this));
  }
  OneofDescriptorProto.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_10(this, other);
  };
  Object.defineProperty(OneofDescriptorProto.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_k5bhsd$_0.value;
    }
  });
  OneofDescriptorProto.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_10(this, m);
  };
  function OneofDescriptorProto$Companion() {
    OneofDescriptorProto$Companion_instance = this;
  }
  OneofDescriptorProto$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_10(OneofDescriptorProto$Companion_getInstance(), u);
  };
  OneofDescriptorProto$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var OneofDescriptorProto$Companion_instance = null;
  function OneofDescriptorProto$Companion_getInstance() {
    if (OneofDescriptorProto$Companion_instance === null) {
      new OneofDescriptorProto$Companion();
    }
    return OneofDescriptorProto$Companion_instance;
  }
  function OneofDescriptorProto$protoSize$lambda(this$OneofDescriptorProto) {
    return function () {
      return protoSizeImpl_10(this$OneofDescriptorProto);
    };
  }
  OneofDescriptorProto.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OneofDescriptorProto',
    interfaces: [Message]
  };
  OneofDescriptorProto.prototype.component1 = function () {
    return this.name;
  };
  OneofDescriptorProto.prototype.component2 = function () {
    return this.options;
  };
  OneofDescriptorProto.prototype.component3 = function () {
    return this.unknownFields;
  };
  OneofDescriptorProto.prototype.copy_mvowd0$ = function (name, options, unknownFields) {
    return new OneofDescriptorProto(name === void 0 ? this.name : name, options === void 0 ? this.options : options, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  OneofDescriptorProto.prototype.toString = function () {
    return 'OneofDescriptorProto(name=' + Kotlin.toString(this.name) + (', options=' + Kotlin.toString(this.options)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  OneofDescriptorProto.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.options) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  OneofDescriptorProto.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.options, other.options) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function EnumDescriptorProto(name, value, options, reservedRange, reservedName, unknownFields) {
    EnumDescriptorProto$Companion_getInstance();
    if (name === void 0)
      name = null;
    if (value === void 0)
      value = emptyList();
    if (options === void 0)
      options = null;
    if (reservedRange === void 0)
      reservedRange = emptyList();
    if (reservedName === void 0)
      reservedName = emptyList();
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.name = name;
    this.value = value;
    this.options = options;
    this.reservedRange = reservedRange;
    this.reservedName = reservedName;
    this.unknownFields = unknownFields;
    this.protoSize_3g1m7x$_0 = lazy(EnumDescriptorProto$protoSize$lambda(this));
  }
  EnumDescriptorProto.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_11(this, other);
  };
  Object.defineProperty(EnumDescriptorProto.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_3g1m7x$_0.value;
    }
  });
  EnumDescriptorProto.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_11(this, m);
  };
  function EnumDescriptorProto$Companion() {
    EnumDescriptorProto$Companion_instance = this;
  }
  EnumDescriptorProto$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_11(EnumDescriptorProto$Companion_getInstance(), u);
  };
  EnumDescriptorProto$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var EnumDescriptorProto$Companion_instance = null;
  function EnumDescriptorProto$Companion_getInstance() {
    if (EnumDescriptorProto$Companion_instance === null) {
      new EnumDescriptorProto$Companion();
    }
    return EnumDescriptorProto$Companion_instance;
  }
  function EnumDescriptorProto$EnumReservedRange(start, end, unknownFields) {
    EnumDescriptorProto$EnumReservedRange$Companion_getInstance();
    if (start === void 0)
      start = null;
    if (end === void 0)
      end = null;
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.start = start;
    this.end = end;
    this.unknownFields = unknownFields;
    this.protoSize_aqe8wn$_0 = lazy(EnumDescriptorProto$EnumReservedRange$protoSize$lambda(this));
  }
  EnumDescriptorProto$EnumReservedRange.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_12(this, other);
  };
  Object.defineProperty(EnumDescriptorProto$EnumReservedRange.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_aqe8wn$_0.value;
    }
  });
  EnumDescriptorProto$EnumReservedRange.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_12(this, m);
  };
  function EnumDescriptorProto$EnumReservedRange$Companion() {
    EnumDescriptorProto$EnumReservedRange$Companion_instance = this;
  }
  EnumDescriptorProto$EnumReservedRange$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_12(EnumDescriptorProto$EnumReservedRange$Companion_getInstance(), u);
  };
  EnumDescriptorProto$EnumReservedRange$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var EnumDescriptorProto$EnumReservedRange$Companion_instance = null;
  function EnumDescriptorProto$EnumReservedRange$Companion_getInstance() {
    if (EnumDescriptorProto$EnumReservedRange$Companion_instance === null) {
      new EnumDescriptorProto$EnumReservedRange$Companion();
    }
    return EnumDescriptorProto$EnumReservedRange$Companion_instance;
  }
  function EnumDescriptorProto$EnumReservedRange$protoSize$lambda(this$EnumReservedRange) {
    return function () {
      return protoSizeImpl_12(this$EnumReservedRange);
    };
  }
  EnumDescriptorProto$EnumReservedRange.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EnumReservedRange',
    interfaces: [Message]
  };
  EnumDescriptorProto$EnumReservedRange.prototype.component1 = function () {
    return this.start;
  };
  EnumDescriptorProto$EnumReservedRange.prototype.component2 = function () {
    return this.end;
  };
  EnumDescriptorProto$EnumReservedRange.prototype.component3 = function () {
    return this.unknownFields;
  };
  EnumDescriptorProto$EnumReservedRange.prototype.copy_xmjek1$ = function (start, end, unknownFields) {
    return new EnumDescriptorProto$EnumReservedRange(start === void 0 ? this.start : start, end === void 0 ? this.end : end, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  EnumDescriptorProto$EnumReservedRange.prototype.toString = function () {
    return 'EnumReservedRange(start=' + Kotlin.toString(this.start) + (', end=' + Kotlin.toString(this.end)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  EnumDescriptorProto$EnumReservedRange.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.start) | 0;
    result = result * 31 + Kotlin.hashCode(this.end) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  EnumDescriptorProto$EnumReservedRange.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.start, other.start) && Kotlin.equals(this.end, other.end) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function EnumDescriptorProto$protoSize$lambda(this$EnumDescriptorProto) {
    return function () {
      return protoSizeImpl_11(this$EnumDescriptorProto);
    };
  }
  EnumDescriptorProto.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EnumDescriptorProto',
    interfaces: [Message]
  };
  EnumDescriptorProto.prototype.component1 = function () {
    return this.name;
  };
  EnumDescriptorProto.prototype.component2 = function () {
    return this.value;
  };
  EnumDescriptorProto.prototype.component3 = function () {
    return this.options;
  };
  EnumDescriptorProto.prototype.component4 = function () {
    return this.reservedRange;
  };
  EnumDescriptorProto.prototype.component5 = function () {
    return this.reservedName;
  };
  EnumDescriptorProto.prototype.component6 = function () {
    return this.unknownFields;
  };
  EnumDescriptorProto.prototype.copy_q3grr0$ = function (name, value, options, reservedRange, reservedName, unknownFields) {
    return new EnumDescriptorProto(name === void 0 ? this.name : name, value === void 0 ? this.value : value, options === void 0 ? this.options : options, reservedRange === void 0 ? this.reservedRange : reservedRange, reservedName === void 0 ? this.reservedName : reservedName, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  EnumDescriptorProto.prototype.toString = function () {
    return 'EnumDescriptorProto(name=' + Kotlin.toString(this.name) + (', value=' + Kotlin.toString(this.value)) + (', options=' + Kotlin.toString(this.options)) + (', reservedRange=' + Kotlin.toString(this.reservedRange)) + (', reservedName=' + Kotlin.toString(this.reservedName)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  EnumDescriptorProto.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.options) | 0;
    result = result * 31 + Kotlin.hashCode(this.reservedRange) | 0;
    result = result * 31 + Kotlin.hashCode(this.reservedName) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  EnumDescriptorProto.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.value, other.value) && Kotlin.equals(this.options, other.options) && Kotlin.equals(this.reservedRange, other.reservedRange) && Kotlin.equals(this.reservedName, other.reservedName) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function EnumValueDescriptorProto(name, number, options, unknownFields) {
    EnumValueDescriptorProto$Companion_getInstance();
    if (name === void 0)
      name = null;
    if (number === void 0)
      number = null;
    if (options === void 0)
      options = null;
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.name = name;
    this.number = number;
    this.options = options;
    this.unknownFields = unknownFields;
    this.protoSize_q6ssw0$_0 = lazy(EnumValueDescriptorProto$protoSize$lambda(this));
  }
  EnumValueDescriptorProto.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_13(this, other);
  };
  Object.defineProperty(EnumValueDescriptorProto.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_q6ssw0$_0.value;
    }
  });
  EnumValueDescriptorProto.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_13(this, m);
  };
  function EnumValueDescriptorProto$Companion() {
    EnumValueDescriptorProto$Companion_instance = this;
  }
  EnumValueDescriptorProto$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_13(EnumValueDescriptorProto$Companion_getInstance(), u);
  };
  EnumValueDescriptorProto$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var EnumValueDescriptorProto$Companion_instance = null;
  function EnumValueDescriptorProto$Companion_getInstance() {
    if (EnumValueDescriptorProto$Companion_instance === null) {
      new EnumValueDescriptorProto$Companion();
    }
    return EnumValueDescriptorProto$Companion_instance;
  }
  function EnumValueDescriptorProto$protoSize$lambda(this$EnumValueDescriptorProto) {
    return function () {
      return protoSizeImpl_13(this$EnumValueDescriptorProto);
    };
  }
  EnumValueDescriptorProto.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EnumValueDescriptorProto',
    interfaces: [Message]
  };
  EnumValueDescriptorProto.prototype.component1 = function () {
    return this.name;
  };
  EnumValueDescriptorProto.prototype.component2 = function () {
    return this.number;
  };
  EnumValueDescriptorProto.prototype.component3 = function () {
    return this.options;
  };
  EnumValueDescriptorProto.prototype.component4 = function () {
    return this.unknownFields;
  };
  EnumValueDescriptorProto.prototype.copy_i4bjg6$ = function (name, number, options, unknownFields) {
    return new EnumValueDescriptorProto(name === void 0 ? this.name : name, number === void 0 ? this.number : number, options === void 0 ? this.options : options, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  EnumValueDescriptorProto.prototype.toString = function () {
    return 'EnumValueDescriptorProto(name=' + Kotlin.toString(this.name) + (', number=' + Kotlin.toString(this.number)) + (', options=' + Kotlin.toString(this.options)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  EnumValueDescriptorProto.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.number) | 0;
    result = result * 31 + Kotlin.hashCode(this.options) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  EnumValueDescriptorProto.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.number, other.number) && Kotlin.equals(this.options, other.options) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function ServiceDescriptorProto(name, method, options, unknownFields) {
    ServiceDescriptorProto$Companion_getInstance();
    if (name === void 0)
      name = null;
    if (method === void 0)
      method = emptyList();
    if (options === void 0)
      options = null;
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.name = name;
    this.method = method;
    this.options = options;
    this.unknownFields = unknownFields;
    this.protoSize_y1g0qj$_0 = lazy(ServiceDescriptorProto$protoSize$lambda(this));
  }
  ServiceDescriptorProto.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_14(this, other);
  };
  Object.defineProperty(ServiceDescriptorProto.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_y1g0qj$_0.value;
    }
  });
  ServiceDescriptorProto.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_14(this, m);
  };
  function ServiceDescriptorProto$Companion() {
    ServiceDescriptorProto$Companion_instance = this;
  }
  ServiceDescriptorProto$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_14(ServiceDescriptorProto$Companion_getInstance(), u);
  };
  ServiceDescriptorProto$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var ServiceDescriptorProto$Companion_instance = null;
  function ServiceDescriptorProto$Companion_getInstance() {
    if (ServiceDescriptorProto$Companion_instance === null) {
      new ServiceDescriptorProto$Companion();
    }
    return ServiceDescriptorProto$Companion_instance;
  }
  function ServiceDescriptorProto$protoSize$lambda(this$ServiceDescriptorProto) {
    return function () {
      return protoSizeImpl_14(this$ServiceDescriptorProto);
    };
  }
  ServiceDescriptorProto.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ServiceDescriptorProto',
    interfaces: [Message]
  };
  ServiceDescriptorProto.prototype.component1 = function () {
    return this.name;
  };
  ServiceDescriptorProto.prototype.component2 = function () {
    return this.method;
  };
  ServiceDescriptorProto.prototype.component3 = function () {
    return this.options;
  };
  ServiceDescriptorProto.prototype.component4 = function () {
    return this.unknownFields;
  };
  ServiceDescriptorProto.prototype.copy_fbhpjt$ = function (name, method, options, unknownFields) {
    return new ServiceDescriptorProto(name === void 0 ? this.name : name, method === void 0 ? this.method : method, options === void 0 ? this.options : options, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  ServiceDescriptorProto.prototype.toString = function () {
    return 'ServiceDescriptorProto(name=' + Kotlin.toString(this.name) + (', method=' + Kotlin.toString(this.method)) + (', options=' + Kotlin.toString(this.options)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  ServiceDescriptorProto.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.method) | 0;
    result = result * 31 + Kotlin.hashCode(this.options) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  ServiceDescriptorProto.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.method, other.method) && Kotlin.equals(this.options, other.options) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function MethodDescriptorProto(name, inputType, outputType, options, clientStreaming, serverStreaming, unknownFields) {
    MethodDescriptorProto$Companion_getInstance();
    if (name === void 0)
      name = null;
    if (inputType === void 0)
      inputType = null;
    if (outputType === void 0)
      outputType = null;
    if (options === void 0)
      options = null;
    if (clientStreaming === void 0)
      clientStreaming = null;
    if (serverStreaming === void 0)
      serverStreaming = null;
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.name = name;
    this.inputType = inputType;
    this.outputType = outputType;
    this.options = options;
    this.clientStreaming = clientStreaming;
    this.serverStreaming = serverStreaming;
    this.unknownFields = unknownFields;
    this.protoSize_tekfs3$_0 = lazy(MethodDescriptorProto$protoSize$lambda(this));
  }
  MethodDescriptorProto.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_15(this, other);
  };
  Object.defineProperty(MethodDescriptorProto.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_tekfs3$_0.value;
    }
  });
  MethodDescriptorProto.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_15(this, m);
  };
  function MethodDescriptorProto$Companion() {
    MethodDescriptorProto$Companion_instance = this;
  }
  MethodDescriptorProto$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_15(MethodDescriptorProto$Companion_getInstance(), u);
  };
  MethodDescriptorProto$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var MethodDescriptorProto$Companion_instance = null;
  function MethodDescriptorProto$Companion_getInstance() {
    if (MethodDescriptorProto$Companion_instance === null) {
      new MethodDescriptorProto$Companion();
    }
    return MethodDescriptorProto$Companion_instance;
  }
  function MethodDescriptorProto$protoSize$lambda(this$MethodDescriptorProto) {
    return function () {
      return protoSizeImpl_15(this$MethodDescriptorProto);
    };
  }
  MethodDescriptorProto.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MethodDescriptorProto',
    interfaces: [Message]
  };
  MethodDescriptorProto.prototype.component1 = function () {
    return this.name;
  };
  MethodDescriptorProto.prototype.component2 = function () {
    return this.inputType;
  };
  MethodDescriptorProto.prototype.component3 = function () {
    return this.outputType;
  };
  MethodDescriptorProto.prototype.component4 = function () {
    return this.options;
  };
  MethodDescriptorProto.prototype.component5 = function () {
    return this.clientStreaming;
  };
  MethodDescriptorProto.prototype.component6 = function () {
    return this.serverStreaming;
  };
  MethodDescriptorProto.prototype.component7 = function () {
    return this.unknownFields;
  };
  MethodDescriptorProto.prototype.copy_txn7pa$ = function (name, inputType, outputType, options, clientStreaming, serverStreaming, unknownFields) {
    return new MethodDescriptorProto(name === void 0 ? this.name : name, inputType === void 0 ? this.inputType : inputType, outputType === void 0 ? this.outputType : outputType, options === void 0 ? this.options : options, clientStreaming === void 0 ? this.clientStreaming : clientStreaming, serverStreaming === void 0 ? this.serverStreaming : serverStreaming, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  MethodDescriptorProto.prototype.toString = function () {
    return 'MethodDescriptorProto(name=' + Kotlin.toString(this.name) + (', inputType=' + Kotlin.toString(this.inputType)) + (', outputType=' + Kotlin.toString(this.outputType)) + (', options=' + Kotlin.toString(this.options)) + (', clientStreaming=' + Kotlin.toString(this.clientStreaming)) + (', serverStreaming=' + Kotlin.toString(this.serverStreaming)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  MethodDescriptorProto.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.inputType) | 0;
    result = result * 31 + Kotlin.hashCode(this.outputType) | 0;
    result = result * 31 + Kotlin.hashCode(this.options) | 0;
    result = result * 31 + Kotlin.hashCode(this.clientStreaming) | 0;
    result = result * 31 + Kotlin.hashCode(this.serverStreaming) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  MethodDescriptorProto.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.inputType, other.inputType) && Kotlin.equals(this.outputType, other.outputType) && Kotlin.equals(this.options, other.options) && Kotlin.equals(this.clientStreaming, other.clientStreaming) && Kotlin.equals(this.serverStreaming, other.serverStreaming) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function FileOptions(javaPackage, javaOuterClassname, javaMultipleFiles, javaGenerateEqualsAndHash, javaStringCheckUtf8, optimizeFor, goPackage, ccGenericServices, javaGenericServices, pyGenericServices, phpGenericServices, deprecated, ccEnableArenas, objcClassPrefix, csharpNamespace, swiftPrefix, phpClassPrefix, phpNamespace, uninterpretedOption, unknownFields) {
    FileOptions$Companion_getInstance();
    if (javaPackage === void 0)
      javaPackage = null;
    if (javaOuterClassname === void 0)
      javaOuterClassname = null;
    if (javaMultipleFiles === void 0)
      javaMultipleFiles = null;
    if (javaGenerateEqualsAndHash === void 0)
      javaGenerateEqualsAndHash = null;
    if (javaStringCheckUtf8 === void 0)
      javaStringCheckUtf8 = null;
    if (optimizeFor === void 0)
      optimizeFor = null;
    if (goPackage === void 0)
      goPackage = null;
    if (ccGenericServices === void 0)
      ccGenericServices = null;
    if (javaGenericServices === void 0)
      javaGenericServices = null;
    if (pyGenericServices === void 0)
      pyGenericServices = null;
    if (phpGenericServices === void 0)
      phpGenericServices = null;
    if (deprecated === void 0)
      deprecated = null;
    if (ccEnableArenas === void 0)
      ccEnableArenas = null;
    if (objcClassPrefix === void 0)
      objcClassPrefix = null;
    if (csharpNamespace === void 0)
      csharpNamespace = null;
    if (swiftPrefix === void 0)
      swiftPrefix = null;
    if (phpClassPrefix === void 0)
      phpClassPrefix = null;
    if (phpNamespace === void 0)
      phpNamespace = null;
    if (uninterpretedOption === void 0)
      uninterpretedOption = emptyList();
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.javaPackage = javaPackage;
    this.javaOuterClassname = javaOuterClassname;
    this.javaMultipleFiles = javaMultipleFiles;
    this.javaGenerateEqualsAndHash = javaGenerateEqualsAndHash;
    this.javaStringCheckUtf8 = javaStringCheckUtf8;
    this.optimizeFor = optimizeFor;
    this.goPackage = goPackage;
    this.ccGenericServices = ccGenericServices;
    this.javaGenericServices = javaGenericServices;
    this.pyGenericServices = pyGenericServices;
    this.phpGenericServices = phpGenericServices;
    this.deprecated = deprecated;
    this.ccEnableArenas = ccEnableArenas;
    this.objcClassPrefix = objcClassPrefix;
    this.csharpNamespace = csharpNamespace;
    this.swiftPrefix = swiftPrefix;
    this.phpClassPrefix = phpClassPrefix;
    this.phpNamespace = phpNamespace;
    this.uninterpretedOption = uninterpretedOption;
    this.unknownFields = unknownFields;
    this.protoSize_i6qy5v$_0 = lazy(FileOptions$protoSize$lambda(this));
  }
  FileOptions.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_16(this, other);
  };
  Object.defineProperty(FileOptions.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_i6qy5v$_0.value;
    }
  });
  FileOptions.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_16(this, m);
  };
  function FileOptions$Companion() {
    FileOptions$Companion_instance = this;
  }
  FileOptions$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_16(FileOptions$Companion_getInstance(), u);
  };
  FileOptions$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var FileOptions$Companion_instance = null;
  function FileOptions$Companion_getInstance() {
    if (FileOptions$Companion_instance === null) {
      new FileOptions$Companion();
    }
    return FileOptions$Companion_instance;
  }
  function FileOptions$OptimizeMode(value) {
    FileOptions$OptimizeMode$Companion_getInstance();
    this.value_61qe8b$_0 = value;
  }
  Object.defineProperty(FileOptions$OptimizeMode.prototype, 'value', {
    get: function () {
      return this.value_61qe8b$_0;
    }
  });
  function FileOptions$OptimizeMode$Companion() {
    FileOptions$OptimizeMode$Companion_instance = this;
    this.SPEED = new FileOptions$OptimizeMode(1);
    this.CODE_SIZE = new FileOptions$OptimizeMode(2);
    this.LITE_RUNTIME = new FileOptions$OptimizeMode(3);
  }
  FileOptions$OptimizeMode$Companion.prototype.fromValue_za3lpa$ = function (value) {
    switch (value) {
      case 1:
        return this.SPEED;
      case 2:
        return this.CODE_SIZE;
      case 3:
        return this.LITE_RUNTIME;
      default:return new FileOptions$OptimizeMode(value);
    }
  };
  FileOptions$OptimizeMode$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Enum$Companion]
  };
  var FileOptions$OptimizeMode$Companion_instance = null;
  function FileOptions$OptimizeMode$Companion_getInstance() {
    if (FileOptions$OptimizeMode$Companion_instance === null) {
      new FileOptions$OptimizeMode$Companion();
    }
    return FileOptions$OptimizeMode$Companion_instance;
  }
  FileOptions$OptimizeMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OptimizeMode',
    interfaces: [Message$Enum]
  };
  FileOptions$OptimizeMode.prototype.component1 = function () {
    return this.value;
  };
  FileOptions$OptimizeMode.prototype.copy_za3lpa$ = function (value) {
    return new FileOptions$OptimizeMode(value === void 0 ? this.value : value);
  };
  FileOptions$OptimizeMode.prototype.toString = function () {
    return 'OptimizeMode(value=' + Kotlin.toString(this.value) + ')';
  };
  FileOptions$OptimizeMode.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  FileOptions$OptimizeMode.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function FileOptions$protoSize$lambda(this$FileOptions) {
    return function () {
      return protoSizeImpl_16(this$FileOptions);
    };
  }
  FileOptions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FileOptions',
    interfaces: [Message]
  };
  FileOptions.prototype.component1 = function () {
    return this.javaPackage;
  };
  FileOptions.prototype.component2 = function () {
    return this.javaOuterClassname;
  };
  FileOptions.prototype.component3 = function () {
    return this.javaMultipleFiles;
  };
  FileOptions.prototype.component4 = function () {
    return this.javaGenerateEqualsAndHash;
  };
  FileOptions.prototype.component5 = function () {
    return this.javaStringCheckUtf8;
  };
  FileOptions.prototype.component6 = function () {
    return this.optimizeFor;
  };
  FileOptions.prototype.component7 = function () {
    return this.goPackage;
  };
  FileOptions.prototype.component8 = function () {
    return this.ccGenericServices;
  };
  FileOptions.prototype.component9 = function () {
    return this.javaGenericServices;
  };
  FileOptions.prototype.component10 = function () {
    return this.pyGenericServices;
  };
  FileOptions.prototype.component11 = function () {
    return this.phpGenericServices;
  };
  FileOptions.prototype.component12 = function () {
    return this.deprecated;
  };
  FileOptions.prototype.component13 = function () {
    return this.ccEnableArenas;
  };
  FileOptions.prototype.component14 = function () {
    return this.objcClassPrefix;
  };
  FileOptions.prototype.component15 = function () {
    return this.csharpNamespace;
  };
  FileOptions.prototype.component16 = function () {
    return this.swiftPrefix;
  };
  FileOptions.prototype.component17 = function () {
    return this.phpClassPrefix;
  };
  FileOptions.prototype.component18 = function () {
    return this.phpNamespace;
  };
  FileOptions.prototype.component19 = function () {
    return this.uninterpretedOption;
  };
  FileOptions.prototype.component20 = function () {
    return this.unknownFields;
  };
  FileOptions.prototype.copy_qbus2p$ = function (javaPackage, javaOuterClassname, javaMultipleFiles, javaGenerateEqualsAndHash, javaStringCheckUtf8, optimizeFor, goPackage, ccGenericServices, javaGenericServices, pyGenericServices, phpGenericServices, deprecated, ccEnableArenas, objcClassPrefix, csharpNamespace, swiftPrefix, phpClassPrefix, phpNamespace, uninterpretedOption, unknownFields) {
    return new FileOptions(javaPackage === void 0 ? this.javaPackage : javaPackage, javaOuterClassname === void 0 ? this.javaOuterClassname : javaOuterClassname, javaMultipleFiles === void 0 ? this.javaMultipleFiles : javaMultipleFiles, javaGenerateEqualsAndHash === void 0 ? this.javaGenerateEqualsAndHash : javaGenerateEqualsAndHash, javaStringCheckUtf8 === void 0 ? this.javaStringCheckUtf8 : javaStringCheckUtf8, optimizeFor === void 0 ? this.optimizeFor : optimizeFor, goPackage === void 0 ? this.goPackage : goPackage, ccGenericServices === void 0 ? this.ccGenericServices : ccGenericServices, javaGenericServices === void 0 ? this.javaGenericServices : javaGenericServices, pyGenericServices === void 0 ? this.pyGenericServices : pyGenericServices, phpGenericServices === void 0 ? this.phpGenericServices : phpGenericServices, deprecated === void 0 ? this.deprecated : deprecated, ccEnableArenas === void 0 ? this.ccEnableArenas : ccEnableArenas, objcClassPrefix === void 0 ? this.objcClassPrefix : objcClassPrefix, csharpNamespace === void 0 ? this.csharpNamespace : csharpNamespace, swiftPrefix === void 0 ? this.swiftPrefix : swiftPrefix, phpClassPrefix === void 0 ? this.phpClassPrefix : phpClassPrefix, phpNamespace === void 0 ? this.phpNamespace : phpNamespace, uninterpretedOption === void 0 ? this.uninterpretedOption : uninterpretedOption, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  FileOptions.prototype.toString = function () {
    return 'FileOptions(javaPackage=' + Kotlin.toString(this.javaPackage) + (', javaOuterClassname=' + Kotlin.toString(this.javaOuterClassname)) + (', javaMultipleFiles=' + Kotlin.toString(this.javaMultipleFiles)) + (', javaGenerateEqualsAndHash=' + Kotlin.toString(this.javaGenerateEqualsAndHash)) + (', javaStringCheckUtf8=' + Kotlin.toString(this.javaStringCheckUtf8)) + (', optimizeFor=' + Kotlin.toString(this.optimizeFor)) + (', goPackage=' + Kotlin.toString(this.goPackage)) + (', ccGenericServices=' + Kotlin.toString(this.ccGenericServices)) + (', javaGenericServices=' + Kotlin.toString(this.javaGenericServices)) + (', pyGenericServices=' + Kotlin.toString(this.pyGenericServices)) + (', phpGenericServices=' + Kotlin.toString(this.phpGenericServices)) + (', deprecated=' + Kotlin.toString(this.deprecated)) + (', ccEnableArenas=' + Kotlin.toString(this.ccEnableArenas)) + (', objcClassPrefix=' + Kotlin.toString(this.objcClassPrefix)) + (', csharpNamespace=' + Kotlin.toString(this.csharpNamespace)) + (', swiftPrefix=' + Kotlin.toString(this.swiftPrefix)) + (', phpClassPrefix=' + Kotlin.toString(this.phpClassPrefix)) + (', phpNamespace=' + Kotlin.toString(this.phpNamespace)) + (', uninterpretedOption=' + Kotlin.toString(this.uninterpretedOption)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  FileOptions.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.javaPackage) | 0;
    result = result * 31 + Kotlin.hashCode(this.javaOuterClassname) | 0;
    result = result * 31 + Kotlin.hashCode(this.javaMultipleFiles) | 0;
    result = result * 31 + Kotlin.hashCode(this.javaGenerateEqualsAndHash) | 0;
    result = result * 31 + Kotlin.hashCode(this.javaStringCheckUtf8) | 0;
    result = result * 31 + Kotlin.hashCode(this.optimizeFor) | 0;
    result = result * 31 + Kotlin.hashCode(this.goPackage) | 0;
    result = result * 31 + Kotlin.hashCode(this.ccGenericServices) | 0;
    result = result * 31 + Kotlin.hashCode(this.javaGenericServices) | 0;
    result = result * 31 + Kotlin.hashCode(this.pyGenericServices) | 0;
    result = result * 31 + Kotlin.hashCode(this.phpGenericServices) | 0;
    result = result * 31 + Kotlin.hashCode(this.deprecated) | 0;
    result = result * 31 + Kotlin.hashCode(this.ccEnableArenas) | 0;
    result = result * 31 + Kotlin.hashCode(this.objcClassPrefix) | 0;
    result = result * 31 + Kotlin.hashCode(this.csharpNamespace) | 0;
    result = result * 31 + Kotlin.hashCode(this.swiftPrefix) | 0;
    result = result * 31 + Kotlin.hashCode(this.phpClassPrefix) | 0;
    result = result * 31 + Kotlin.hashCode(this.phpNamespace) | 0;
    result = result * 31 + Kotlin.hashCode(this.uninterpretedOption) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  FileOptions.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.javaPackage, other.javaPackage) && Kotlin.equals(this.javaOuterClassname, other.javaOuterClassname) && Kotlin.equals(this.javaMultipleFiles, other.javaMultipleFiles) && Kotlin.equals(this.javaGenerateEqualsAndHash, other.javaGenerateEqualsAndHash) && Kotlin.equals(this.javaStringCheckUtf8, other.javaStringCheckUtf8) && Kotlin.equals(this.optimizeFor, other.optimizeFor) && Kotlin.equals(this.goPackage, other.goPackage) && Kotlin.equals(this.ccGenericServices, other.ccGenericServices) && Kotlin.equals(this.javaGenericServices, other.javaGenericServices) && Kotlin.equals(this.pyGenericServices, other.pyGenericServices) && Kotlin.equals(this.phpGenericServices, other.phpGenericServices) && Kotlin.equals(this.deprecated, other.deprecated) && Kotlin.equals(this.ccEnableArenas, other.ccEnableArenas) && Kotlin.equals(this.objcClassPrefix, other.objcClassPrefix) && Kotlin.equals(this.csharpNamespace, other.csharpNamespace) && Kotlin.equals(this.swiftPrefix, other.swiftPrefix) && Kotlin.equals(this.phpClassPrefix, other.phpClassPrefix) && Kotlin.equals(this.phpNamespace, other.phpNamespace) && Kotlin.equals(this.uninterpretedOption, other.uninterpretedOption) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function MessageOptions(messageSetWireFormat, noStandardDescriptorAccessor, deprecated, mapEntry, uninterpretedOption, unknownFields) {
    MessageOptions$Companion_getInstance();
    if (messageSetWireFormat === void 0)
      messageSetWireFormat = null;
    if (noStandardDescriptorAccessor === void 0)
      noStandardDescriptorAccessor = null;
    if (deprecated === void 0)
      deprecated = null;
    if (mapEntry === void 0)
      mapEntry = null;
    if (uninterpretedOption === void 0)
      uninterpretedOption = emptyList();
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.messageSetWireFormat = messageSetWireFormat;
    this.noStandardDescriptorAccessor = noStandardDescriptorAccessor;
    this.deprecated = deprecated;
    this.mapEntry = mapEntry;
    this.uninterpretedOption = uninterpretedOption;
    this.unknownFields = unknownFields;
    this.protoSize_3x9loy$_0 = lazy(MessageOptions$protoSize$lambda(this));
  }
  MessageOptions.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_17(this, other);
  };
  Object.defineProperty(MessageOptions.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_3x9loy$_0.value;
    }
  });
  MessageOptions.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_17(this, m);
  };
  function MessageOptions$Companion() {
    MessageOptions$Companion_instance = this;
  }
  MessageOptions$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_17(MessageOptions$Companion_getInstance(), u);
  };
  MessageOptions$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var MessageOptions$Companion_instance = null;
  function MessageOptions$Companion_getInstance() {
    if (MessageOptions$Companion_instance === null) {
      new MessageOptions$Companion();
    }
    return MessageOptions$Companion_instance;
  }
  function MessageOptions$protoSize$lambda(this$MessageOptions) {
    return function () {
      return protoSizeImpl_17(this$MessageOptions);
    };
  }
  MessageOptions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MessageOptions',
    interfaces: [Message]
  };
  MessageOptions.prototype.component1 = function () {
    return this.messageSetWireFormat;
  };
  MessageOptions.prototype.component2 = function () {
    return this.noStandardDescriptorAccessor;
  };
  MessageOptions.prototype.component3 = function () {
    return this.deprecated;
  };
  MessageOptions.prototype.component4 = function () {
    return this.mapEntry;
  };
  MessageOptions.prototype.component5 = function () {
    return this.uninterpretedOption;
  };
  MessageOptions.prototype.component6 = function () {
    return this.unknownFields;
  };
  MessageOptions.prototype.copy_n2h1qe$ = function (messageSetWireFormat, noStandardDescriptorAccessor, deprecated, mapEntry, uninterpretedOption, unknownFields) {
    return new MessageOptions(messageSetWireFormat === void 0 ? this.messageSetWireFormat : messageSetWireFormat, noStandardDescriptorAccessor === void 0 ? this.noStandardDescriptorAccessor : noStandardDescriptorAccessor, deprecated === void 0 ? this.deprecated : deprecated, mapEntry === void 0 ? this.mapEntry : mapEntry, uninterpretedOption === void 0 ? this.uninterpretedOption : uninterpretedOption, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  MessageOptions.prototype.toString = function () {
    return 'MessageOptions(messageSetWireFormat=' + Kotlin.toString(this.messageSetWireFormat) + (', noStandardDescriptorAccessor=' + Kotlin.toString(this.noStandardDescriptorAccessor)) + (', deprecated=' + Kotlin.toString(this.deprecated)) + (', mapEntry=' + Kotlin.toString(this.mapEntry)) + (', uninterpretedOption=' + Kotlin.toString(this.uninterpretedOption)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  MessageOptions.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.messageSetWireFormat) | 0;
    result = result * 31 + Kotlin.hashCode(this.noStandardDescriptorAccessor) | 0;
    result = result * 31 + Kotlin.hashCode(this.deprecated) | 0;
    result = result * 31 + Kotlin.hashCode(this.mapEntry) | 0;
    result = result * 31 + Kotlin.hashCode(this.uninterpretedOption) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  MessageOptions.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.messageSetWireFormat, other.messageSetWireFormat) && Kotlin.equals(this.noStandardDescriptorAccessor, other.noStandardDescriptorAccessor) && Kotlin.equals(this.deprecated, other.deprecated) && Kotlin.equals(this.mapEntry, other.mapEntry) && Kotlin.equals(this.uninterpretedOption, other.uninterpretedOption) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function FieldOptions(ctype, packed, jstype, lazy_0, deprecated, weak, uninterpretedOption, unknownFields) {
    FieldOptions$Companion_getInstance();
    if (ctype === void 0)
      ctype = null;
    if (packed === void 0)
      packed = null;
    if (jstype === void 0)
      jstype = null;
    if (lazy_0 === void 0)
      lazy_0 = null;
    if (deprecated === void 0)
      deprecated = null;
    if (weak === void 0)
      weak = null;
    if (uninterpretedOption === void 0)
      uninterpretedOption = emptyList();
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.ctype = ctype;
    this.packed = packed;
    this.jstype = jstype;
    this.lazy = lazy_0;
    this.deprecated = deprecated;
    this.weak = weak;
    this.uninterpretedOption = uninterpretedOption;
    this.unknownFields = unknownFields;
    this.protoSize_kj8w8r$_0 = lazy(FieldOptions$protoSize$lambda(this));
  }
  FieldOptions.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_18(this, other);
  };
  Object.defineProperty(FieldOptions.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_kj8w8r$_0.value;
    }
  });
  FieldOptions.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_18(this, m);
  };
  function FieldOptions$Companion() {
    FieldOptions$Companion_instance = this;
  }
  FieldOptions$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_18(FieldOptions$Companion_getInstance(), u);
  };
  FieldOptions$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var FieldOptions$Companion_instance = null;
  function FieldOptions$Companion_getInstance() {
    if (FieldOptions$Companion_instance === null) {
      new FieldOptions$Companion();
    }
    return FieldOptions$Companion_instance;
  }
  function FieldOptions$CType(value) {
    FieldOptions$CType$Companion_getInstance();
    this.value_17cb76$_0 = value;
  }
  Object.defineProperty(FieldOptions$CType.prototype, 'value', {
    get: function () {
      return this.value_17cb76$_0;
    }
  });
  function FieldOptions$CType$Companion() {
    FieldOptions$CType$Companion_instance = this;
    this.STRING = new FieldOptions$CType(0);
    this.CORD = new FieldOptions$CType(1);
    this.STRING_PIECE = new FieldOptions$CType(2);
  }
  FieldOptions$CType$Companion.prototype.fromValue_za3lpa$ = function (value) {
    switch (value) {
      case 0:
        return this.STRING;
      case 1:
        return this.CORD;
      case 2:
        return this.STRING_PIECE;
      default:return new FieldOptions$CType(value);
    }
  };
  FieldOptions$CType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Enum$Companion]
  };
  var FieldOptions$CType$Companion_instance = null;
  function FieldOptions$CType$Companion_getInstance() {
    if (FieldOptions$CType$Companion_instance === null) {
      new FieldOptions$CType$Companion();
    }
    return FieldOptions$CType$Companion_instance;
  }
  FieldOptions$CType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CType',
    interfaces: [Message$Enum]
  };
  FieldOptions$CType.prototype.component1 = function () {
    return this.value;
  };
  FieldOptions$CType.prototype.copy_za3lpa$ = function (value) {
    return new FieldOptions$CType(value === void 0 ? this.value : value);
  };
  FieldOptions$CType.prototype.toString = function () {
    return 'CType(value=' + Kotlin.toString(this.value) + ')';
  };
  FieldOptions$CType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  FieldOptions$CType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function FieldOptions$JSType(value) {
    FieldOptions$JSType$Companion_getInstance();
    this.value_173ppc$_0 = value;
  }
  Object.defineProperty(FieldOptions$JSType.prototype, 'value', {
    get: function () {
      return this.value_173ppc$_0;
    }
  });
  function FieldOptions$JSType$Companion() {
    FieldOptions$JSType$Companion_instance = this;
    this.JS_NORMAL = new FieldOptions$JSType(0);
    this.JS_STRING = new FieldOptions$JSType(1);
    this.JS_NUMBER = new FieldOptions$JSType(2);
  }
  FieldOptions$JSType$Companion.prototype.fromValue_za3lpa$ = function (value) {
    switch (value) {
      case 0:
        return this.JS_NORMAL;
      case 1:
        return this.JS_STRING;
      case 2:
        return this.JS_NUMBER;
      default:return new FieldOptions$JSType(value);
    }
  };
  FieldOptions$JSType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Enum$Companion]
  };
  var FieldOptions$JSType$Companion_instance = null;
  function FieldOptions$JSType$Companion_getInstance() {
    if (FieldOptions$JSType$Companion_instance === null) {
      new FieldOptions$JSType$Companion();
    }
    return FieldOptions$JSType$Companion_instance;
  }
  FieldOptions$JSType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JSType',
    interfaces: [Message$Enum]
  };
  FieldOptions$JSType.prototype.component1 = function () {
    return this.value;
  };
  FieldOptions$JSType.prototype.copy_za3lpa$ = function (value) {
    return new FieldOptions$JSType(value === void 0 ? this.value : value);
  };
  FieldOptions$JSType.prototype.toString = function () {
    return 'JSType(value=' + Kotlin.toString(this.value) + ')';
  };
  FieldOptions$JSType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  FieldOptions$JSType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function FieldOptions$protoSize$lambda(this$FieldOptions) {
    return function () {
      return protoSizeImpl_18(this$FieldOptions);
    };
  }
  FieldOptions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FieldOptions',
    interfaces: [Message]
  };
  FieldOptions.prototype.component1 = function () {
    return this.ctype;
  };
  FieldOptions.prototype.component2 = function () {
    return this.packed;
  };
  FieldOptions.prototype.component3 = function () {
    return this.jstype;
  };
  FieldOptions.prototype.component4 = function () {
    return this.lazy;
  };
  FieldOptions.prototype.component5 = function () {
    return this.deprecated;
  };
  FieldOptions.prototype.component6 = function () {
    return this.weak;
  };
  FieldOptions.prototype.component7 = function () {
    return this.uninterpretedOption;
  };
  FieldOptions.prototype.component8 = function () {
    return this.unknownFields;
  };
  FieldOptions.prototype.copy_6yit78$ = function (ctype, packed, jstype, lazy, deprecated, weak, uninterpretedOption, unknownFields) {
    return new FieldOptions(ctype === void 0 ? this.ctype : ctype, packed === void 0 ? this.packed : packed, jstype === void 0 ? this.jstype : jstype, lazy === void 0 ? this.lazy : lazy, deprecated === void 0 ? this.deprecated : deprecated, weak === void 0 ? this.weak : weak, uninterpretedOption === void 0 ? this.uninterpretedOption : uninterpretedOption, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  FieldOptions.prototype.toString = function () {
    return 'FieldOptions(ctype=' + Kotlin.toString(this.ctype) + (', packed=' + Kotlin.toString(this.packed)) + (', jstype=' + Kotlin.toString(this.jstype)) + (', lazy=' + Kotlin.toString(this.lazy)) + (', deprecated=' + Kotlin.toString(this.deprecated)) + (', weak=' + Kotlin.toString(this.weak)) + (', uninterpretedOption=' + Kotlin.toString(this.uninterpretedOption)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  FieldOptions.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ctype) | 0;
    result = result * 31 + Kotlin.hashCode(this.packed) | 0;
    result = result * 31 + Kotlin.hashCode(this.jstype) | 0;
    result = result * 31 + Kotlin.hashCode(this.lazy) | 0;
    result = result * 31 + Kotlin.hashCode(this.deprecated) | 0;
    result = result * 31 + Kotlin.hashCode(this.weak) | 0;
    result = result * 31 + Kotlin.hashCode(this.uninterpretedOption) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  FieldOptions.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.ctype, other.ctype) && Kotlin.equals(this.packed, other.packed) && Kotlin.equals(this.jstype, other.jstype) && Kotlin.equals(this.lazy, other.lazy) && Kotlin.equals(this.deprecated, other.deprecated) && Kotlin.equals(this.weak, other.weak) && Kotlin.equals(this.uninterpretedOption, other.uninterpretedOption) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function OneofOptions(uninterpretedOption, unknownFields) {
    OneofOptions$Companion_getInstance();
    if (uninterpretedOption === void 0)
      uninterpretedOption = emptyList();
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.uninterpretedOption = uninterpretedOption;
    this.unknownFields = unknownFields;
    this.protoSize_j0z6bs$_0 = lazy(OneofOptions$protoSize$lambda(this));
  }
  OneofOptions.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_19(this, other);
  };
  Object.defineProperty(OneofOptions.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_j0z6bs$_0.value;
    }
  });
  OneofOptions.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_19(this, m);
  };
  function OneofOptions$Companion() {
    OneofOptions$Companion_instance = this;
  }
  OneofOptions$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_19(OneofOptions$Companion_getInstance(), u);
  };
  OneofOptions$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var OneofOptions$Companion_instance = null;
  function OneofOptions$Companion_getInstance() {
    if (OneofOptions$Companion_instance === null) {
      new OneofOptions$Companion();
    }
    return OneofOptions$Companion_instance;
  }
  function OneofOptions$protoSize$lambda(this$OneofOptions) {
    return function () {
      return protoSizeImpl_19(this$OneofOptions);
    };
  }
  OneofOptions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OneofOptions',
    interfaces: [Message]
  };
  OneofOptions.prototype.component1 = function () {
    return this.uninterpretedOption;
  };
  OneofOptions.prototype.component2 = function () {
    return this.unknownFields;
  };
  OneofOptions.prototype.copy_zext2$ = function (uninterpretedOption, unknownFields) {
    return new OneofOptions(uninterpretedOption === void 0 ? this.uninterpretedOption : uninterpretedOption, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  OneofOptions.prototype.toString = function () {
    return 'OneofOptions(uninterpretedOption=' + Kotlin.toString(this.uninterpretedOption) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  OneofOptions.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.uninterpretedOption) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  OneofOptions.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.uninterpretedOption, other.uninterpretedOption) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function EnumOptions(allowAlias, deprecated, uninterpretedOption, unknownFields) {
    EnumOptions$Companion_getInstance();
    if (allowAlias === void 0)
      allowAlias = null;
    if (deprecated === void 0)
      deprecated = null;
    if (uninterpretedOption === void 0)
      uninterpretedOption = emptyList();
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.allowAlias = allowAlias;
    this.deprecated = deprecated;
    this.uninterpretedOption = uninterpretedOption;
    this.unknownFields = unknownFields;
    this.protoSize_w6euyw$_0 = lazy(EnumOptions$protoSize$lambda(this));
  }
  EnumOptions.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_20(this, other);
  };
  Object.defineProperty(EnumOptions.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_w6euyw$_0.value;
    }
  });
  EnumOptions.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_20(this, m);
  };
  function EnumOptions$Companion() {
    EnumOptions$Companion_instance = this;
  }
  EnumOptions$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_20(EnumOptions$Companion_getInstance(), u);
  };
  EnumOptions$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var EnumOptions$Companion_instance = null;
  function EnumOptions$Companion_getInstance() {
    if (EnumOptions$Companion_instance === null) {
      new EnumOptions$Companion();
    }
    return EnumOptions$Companion_instance;
  }
  function EnumOptions$protoSize$lambda(this$EnumOptions) {
    return function () {
      return protoSizeImpl_20(this$EnumOptions);
    };
  }
  EnumOptions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EnumOptions',
    interfaces: [Message]
  };
  EnumOptions.prototype.component1 = function () {
    return this.allowAlias;
  };
  EnumOptions.prototype.component2 = function () {
    return this.deprecated;
  };
  EnumOptions.prototype.component3 = function () {
    return this.uninterpretedOption;
  };
  EnumOptions.prototype.component4 = function () {
    return this.unknownFields;
  };
  EnumOptions.prototype.copy_pjbnme$ = function (allowAlias, deprecated, uninterpretedOption, unknownFields) {
    return new EnumOptions(allowAlias === void 0 ? this.allowAlias : allowAlias, deprecated === void 0 ? this.deprecated : deprecated, uninterpretedOption === void 0 ? this.uninterpretedOption : uninterpretedOption, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  EnumOptions.prototype.toString = function () {
    return 'EnumOptions(allowAlias=' + Kotlin.toString(this.allowAlias) + (', deprecated=' + Kotlin.toString(this.deprecated)) + (', uninterpretedOption=' + Kotlin.toString(this.uninterpretedOption)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  EnumOptions.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.allowAlias) | 0;
    result = result * 31 + Kotlin.hashCode(this.deprecated) | 0;
    result = result * 31 + Kotlin.hashCode(this.uninterpretedOption) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  EnumOptions.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.allowAlias, other.allowAlias) && Kotlin.equals(this.deprecated, other.deprecated) && Kotlin.equals(this.uninterpretedOption, other.uninterpretedOption) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function EnumValueOptions(deprecated, uninterpretedOption, unknownFields) {
    EnumValueOptions$Companion_getInstance();
    if (deprecated === void 0)
      deprecated = null;
    if (uninterpretedOption === void 0)
      uninterpretedOption = emptyList();
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.deprecated = deprecated;
    this.uninterpretedOption = uninterpretedOption;
    this.unknownFields = unknownFields;
    this.protoSize_g98clh$_0 = lazy(EnumValueOptions$protoSize$lambda(this));
  }
  EnumValueOptions.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_21(this, other);
  };
  Object.defineProperty(EnumValueOptions.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_g98clh$_0.value;
    }
  });
  EnumValueOptions.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_21(this, m);
  };
  function EnumValueOptions$Companion() {
    EnumValueOptions$Companion_instance = this;
  }
  EnumValueOptions$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_21(EnumValueOptions$Companion_getInstance(), u);
  };
  EnumValueOptions$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var EnumValueOptions$Companion_instance = null;
  function EnumValueOptions$Companion_getInstance() {
    if (EnumValueOptions$Companion_instance === null) {
      new EnumValueOptions$Companion();
    }
    return EnumValueOptions$Companion_instance;
  }
  function EnumValueOptions$protoSize$lambda(this$EnumValueOptions) {
    return function () {
      return protoSizeImpl_21(this$EnumValueOptions);
    };
  }
  EnumValueOptions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EnumValueOptions',
    interfaces: [Message]
  };
  EnumValueOptions.prototype.component1 = function () {
    return this.deprecated;
  };
  EnumValueOptions.prototype.component2 = function () {
    return this.uninterpretedOption;
  };
  EnumValueOptions.prototype.component3 = function () {
    return this.unknownFields;
  };
  EnumValueOptions.prototype.copy_obiyym$ = function (deprecated, uninterpretedOption, unknownFields) {
    return new EnumValueOptions(deprecated === void 0 ? this.deprecated : deprecated, uninterpretedOption === void 0 ? this.uninterpretedOption : uninterpretedOption, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  EnumValueOptions.prototype.toString = function () {
    return 'EnumValueOptions(deprecated=' + Kotlin.toString(this.deprecated) + (', uninterpretedOption=' + Kotlin.toString(this.uninterpretedOption)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  EnumValueOptions.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.deprecated) | 0;
    result = result * 31 + Kotlin.hashCode(this.uninterpretedOption) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  EnumValueOptions.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.deprecated, other.deprecated) && Kotlin.equals(this.uninterpretedOption, other.uninterpretedOption) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function ServiceOptions(deprecated, uninterpretedOption, unknownFields) {
    ServiceOptions$Companion_getInstance();
    if (deprecated === void 0)
      deprecated = null;
    if (uninterpretedOption === void 0)
      uninterpretedOption = emptyList();
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.deprecated = deprecated;
    this.uninterpretedOption = uninterpretedOption;
    this.unknownFields = unknownFields;
    this.protoSize_f8dgsg$_0 = lazy(ServiceOptions$protoSize$lambda(this));
  }
  ServiceOptions.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_22(this, other);
  };
  Object.defineProperty(ServiceOptions.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_f8dgsg$_0.value;
    }
  });
  ServiceOptions.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_22(this, m);
  };
  function ServiceOptions$Companion() {
    ServiceOptions$Companion_instance = this;
  }
  ServiceOptions$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_22(ServiceOptions$Companion_getInstance(), u);
  };
  ServiceOptions$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var ServiceOptions$Companion_instance = null;
  function ServiceOptions$Companion_getInstance() {
    if (ServiceOptions$Companion_instance === null) {
      new ServiceOptions$Companion();
    }
    return ServiceOptions$Companion_instance;
  }
  function ServiceOptions$protoSize$lambda(this$ServiceOptions) {
    return function () {
      return protoSizeImpl_22(this$ServiceOptions);
    };
  }
  ServiceOptions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ServiceOptions',
    interfaces: [Message]
  };
  ServiceOptions.prototype.component1 = function () {
    return this.deprecated;
  };
  ServiceOptions.prototype.component2 = function () {
    return this.uninterpretedOption;
  };
  ServiceOptions.prototype.component3 = function () {
    return this.unknownFields;
  };
  ServiceOptions.prototype.copy_obiyym$ = function (deprecated, uninterpretedOption, unknownFields) {
    return new ServiceOptions(deprecated === void 0 ? this.deprecated : deprecated, uninterpretedOption === void 0 ? this.uninterpretedOption : uninterpretedOption, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  ServiceOptions.prototype.toString = function () {
    return 'ServiceOptions(deprecated=' + Kotlin.toString(this.deprecated) + (', uninterpretedOption=' + Kotlin.toString(this.uninterpretedOption)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  ServiceOptions.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.deprecated) | 0;
    result = result * 31 + Kotlin.hashCode(this.uninterpretedOption) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  ServiceOptions.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.deprecated, other.deprecated) && Kotlin.equals(this.uninterpretedOption, other.uninterpretedOption) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function MethodOptions(deprecated, idempotencyLevel, uninterpretedOption, unknownFields) {
    MethodOptions$Companion_getInstance();
    if (deprecated === void 0)
      deprecated = null;
    if (idempotencyLevel === void 0)
      idempotencyLevel = null;
    if (uninterpretedOption === void 0)
      uninterpretedOption = emptyList();
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.deprecated = deprecated;
    this.idempotencyLevel = idempotencyLevel;
    this.uninterpretedOption = uninterpretedOption;
    this.unknownFields = unknownFields;
    this.protoSize_dmy49k$_0 = lazy(MethodOptions$protoSize$lambda(this));
  }
  MethodOptions.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_23(this, other);
  };
  Object.defineProperty(MethodOptions.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_dmy49k$_0.value;
    }
  });
  MethodOptions.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_23(this, m);
  };
  function MethodOptions$Companion() {
    MethodOptions$Companion_instance = this;
  }
  MethodOptions$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_23(MethodOptions$Companion_getInstance(), u);
  };
  MethodOptions$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var MethodOptions$Companion_instance = null;
  function MethodOptions$Companion_getInstance() {
    if (MethodOptions$Companion_instance === null) {
      new MethodOptions$Companion();
    }
    return MethodOptions$Companion_instance;
  }
  function MethodOptions$IdempotencyLevel(value) {
    MethodOptions$IdempotencyLevel$Companion_getInstance();
    this.value_a6fjel$_0 = value;
  }
  Object.defineProperty(MethodOptions$IdempotencyLevel.prototype, 'value', {
    get: function () {
      return this.value_a6fjel$_0;
    }
  });
  function MethodOptions$IdempotencyLevel$Companion() {
    MethodOptions$IdempotencyLevel$Companion_instance = this;
    this.IDEMPOTENCY_UNKNOWN = new MethodOptions$IdempotencyLevel(0);
    this.NO_SIDE_EFFECTS = new MethodOptions$IdempotencyLevel(1);
    this.IDEMPOTENT = new MethodOptions$IdempotencyLevel(2);
  }
  MethodOptions$IdempotencyLevel$Companion.prototype.fromValue_za3lpa$ = function (value) {
    switch (value) {
      case 0:
        return this.IDEMPOTENCY_UNKNOWN;
      case 1:
        return this.NO_SIDE_EFFECTS;
      case 2:
        return this.IDEMPOTENT;
      default:return new MethodOptions$IdempotencyLevel(value);
    }
  };
  MethodOptions$IdempotencyLevel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Enum$Companion]
  };
  var MethodOptions$IdempotencyLevel$Companion_instance = null;
  function MethodOptions$IdempotencyLevel$Companion_getInstance() {
    if (MethodOptions$IdempotencyLevel$Companion_instance === null) {
      new MethodOptions$IdempotencyLevel$Companion();
    }
    return MethodOptions$IdempotencyLevel$Companion_instance;
  }
  MethodOptions$IdempotencyLevel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IdempotencyLevel',
    interfaces: [Message$Enum]
  };
  MethodOptions$IdempotencyLevel.prototype.component1 = function () {
    return this.value;
  };
  MethodOptions$IdempotencyLevel.prototype.copy_za3lpa$ = function (value) {
    return new MethodOptions$IdempotencyLevel(value === void 0 ? this.value : value);
  };
  MethodOptions$IdempotencyLevel.prototype.toString = function () {
    return 'IdempotencyLevel(value=' + Kotlin.toString(this.value) + ')';
  };
  MethodOptions$IdempotencyLevel.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  MethodOptions$IdempotencyLevel.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function MethodOptions$protoSize$lambda(this$MethodOptions) {
    return function () {
      return protoSizeImpl_23(this$MethodOptions);
    };
  }
  MethodOptions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MethodOptions',
    interfaces: [Message]
  };
  MethodOptions.prototype.component1 = function () {
    return this.deprecated;
  };
  MethodOptions.prototype.component2 = function () {
    return this.idempotencyLevel;
  };
  MethodOptions.prototype.component3 = function () {
    return this.uninterpretedOption;
  };
  MethodOptions.prototype.component4 = function () {
    return this.unknownFields;
  };
  MethodOptions.prototype.copy_mxmu3d$ = function (deprecated, idempotencyLevel, uninterpretedOption, unknownFields) {
    return new MethodOptions(deprecated === void 0 ? this.deprecated : deprecated, idempotencyLevel === void 0 ? this.idempotencyLevel : idempotencyLevel, uninterpretedOption === void 0 ? this.uninterpretedOption : uninterpretedOption, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  MethodOptions.prototype.toString = function () {
    return 'MethodOptions(deprecated=' + Kotlin.toString(this.deprecated) + (', idempotencyLevel=' + Kotlin.toString(this.idempotencyLevel)) + (', uninterpretedOption=' + Kotlin.toString(this.uninterpretedOption)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  MethodOptions.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.deprecated) | 0;
    result = result * 31 + Kotlin.hashCode(this.idempotencyLevel) | 0;
    result = result * 31 + Kotlin.hashCode(this.uninterpretedOption) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  MethodOptions.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.deprecated, other.deprecated) && Kotlin.equals(this.idempotencyLevel, other.idempotencyLevel) && Kotlin.equals(this.uninterpretedOption, other.uninterpretedOption) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function UninterpretedOption(name, identifierValue, positiveIntValue, negativeIntValue, doubleValue, stringValue, aggregateValue, unknownFields) {
    UninterpretedOption$Companion_getInstance();
    if (name === void 0)
      name = emptyList();
    if (identifierValue === void 0)
      identifierValue = null;
    if (positiveIntValue === void 0)
      positiveIntValue = null;
    if (negativeIntValue === void 0)
      negativeIntValue = null;
    if (doubleValue === void 0)
      doubleValue = null;
    if (stringValue === void 0)
      stringValue = null;
    if (aggregateValue === void 0)
      aggregateValue = null;
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.name = name;
    this.identifierValue = identifierValue;
    this.positiveIntValue = positiveIntValue;
    this.negativeIntValue = negativeIntValue;
    this.doubleValue = doubleValue;
    this.stringValue = stringValue;
    this.aggregateValue = aggregateValue;
    this.unknownFields = unknownFields;
    this.protoSize_26f4nn$_0 = lazy(UninterpretedOption$protoSize$lambda(this));
  }
  UninterpretedOption.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_24(this, other);
  };
  Object.defineProperty(UninterpretedOption.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_26f4nn$_0.value;
    }
  });
  UninterpretedOption.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_24(this, m);
  };
  function UninterpretedOption$Companion() {
    UninterpretedOption$Companion_instance = this;
  }
  UninterpretedOption$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_24(UninterpretedOption$Companion_getInstance(), u);
  };
  UninterpretedOption$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var UninterpretedOption$Companion_instance = null;
  function UninterpretedOption$Companion_getInstance() {
    if (UninterpretedOption$Companion_instance === null) {
      new UninterpretedOption$Companion();
    }
    return UninterpretedOption$Companion_instance;
  }
  function UninterpretedOption$NamePart(namePart, isExtension, unknownFields) {
    UninterpretedOption$NamePart$Companion_getInstance();
    if (namePart === void 0)
      namePart = '';
    if (isExtension === void 0)
      isExtension = false;
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.namePart = namePart;
    this.isExtension = isExtension;
    this.unknownFields = unknownFields;
    this.protoSize_n5l1k5$_0 = lazy(UninterpretedOption$NamePart$protoSize$lambda(this));
  }
  UninterpretedOption$NamePart.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_25(this, other);
  };
  Object.defineProperty(UninterpretedOption$NamePart.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_n5l1k5$_0.value;
    }
  });
  UninterpretedOption$NamePart.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_25(this, m);
  };
  function UninterpretedOption$NamePart$Companion() {
    UninterpretedOption$NamePart$Companion_instance = this;
  }
  UninterpretedOption$NamePart$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_25(UninterpretedOption$NamePart$Companion_getInstance(), u);
  };
  UninterpretedOption$NamePart$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var UninterpretedOption$NamePart$Companion_instance = null;
  function UninterpretedOption$NamePart$Companion_getInstance() {
    if (UninterpretedOption$NamePart$Companion_instance === null) {
      new UninterpretedOption$NamePart$Companion();
    }
    return UninterpretedOption$NamePart$Companion_instance;
  }
  function UninterpretedOption$NamePart$protoSize$lambda(this$NamePart) {
    return function () {
      return protoSizeImpl_25(this$NamePart);
    };
  }
  UninterpretedOption$NamePart.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NamePart',
    interfaces: [Message]
  };
  UninterpretedOption$NamePart.prototype.component1 = function () {
    return this.namePart;
  };
  UninterpretedOption$NamePart.prototype.component2 = function () {
    return this.isExtension;
  };
  UninterpretedOption$NamePart.prototype.component3 = function () {
    return this.unknownFields;
  };
  UninterpretedOption$NamePart.prototype.copy_ixmf62$ = function (namePart, isExtension, unknownFields) {
    return new UninterpretedOption$NamePart(namePart === void 0 ? this.namePart : namePart, isExtension === void 0 ? this.isExtension : isExtension, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  UninterpretedOption$NamePart.prototype.toString = function () {
    return 'NamePart(namePart=' + Kotlin.toString(this.namePart) + (', isExtension=' + Kotlin.toString(this.isExtension)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  UninterpretedOption$NamePart.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.namePart) | 0;
    result = result * 31 + Kotlin.hashCode(this.isExtension) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  UninterpretedOption$NamePart.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.namePart, other.namePart) && Kotlin.equals(this.isExtension, other.isExtension) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function UninterpretedOption$protoSize$lambda(this$UninterpretedOption) {
    return function () {
      return protoSizeImpl_24(this$UninterpretedOption);
    };
  }
  UninterpretedOption.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UninterpretedOption',
    interfaces: [Message]
  };
  UninterpretedOption.prototype.component1 = function () {
    return this.name;
  };
  UninterpretedOption.prototype.component2 = function () {
    return this.identifierValue;
  };
  UninterpretedOption.prototype.component3 = function () {
    return this.positiveIntValue;
  };
  UninterpretedOption.prototype.component4 = function () {
    return this.negativeIntValue;
  };
  UninterpretedOption.prototype.component5 = function () {
    return this.doubleValue;
  };
  UninterpretedOption.prototype.component6 = function () {
    return this.stringValue;
  };
  UninterpretedOption.prototype.component7 = function () {
    return this.aggregateValue;
  };
  UninterpretedOption.prototype.component8 = function () {
    return this.unknownFields;
  };
  UninterpretedOption.prototype.copy_dbwu8b$ = function (name, identifierValue, positiveIntValue, negativeIntValue, doubleValue, stringValue, aggregateValue, unknownFields) {
    return new UninterpretedOption(name === void 0 ? this.name : name, identifierValue === void 0 ? this.identifierValue : identifierValue, positiveIntValue === void 0 ? this.positiveIntValue : positiveIntValue, negativeIntValue === void 0 ? this.negativeIntValue : negativeIntValue, doubleValue === void 0 ? this.doubleValue : doubleValue, stringValue === void 0 ? this.stringValue : stringValue, aggregateValue === void 0 ? this.aggregateValue : aggregateValue, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  UninterpretedOption.prototype.toString = function () {
    return 'UninterpretedOption(name=' + Kotlin.toString(this.name) + (', identifierValue=' + Kotlin.toString(this.identifierValue)) + (', positiveIntValue=' + Kotlin.toString(this.positiveIntValue)) + (', negativeIntValue=' + Kotlin.toString(this.negativeIntValue)) + (', doubleValue=' + Kotlin.toString(this.doubleValue)) + (', stringValue=' + Kotlin.toString(this.stringValue)) + (', aggregateValue=' + Kotlin.toString(this.aggregateValue)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  UninterpretedOption.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.identifierValue) | 0;
    result = result * 31 + Kotlin.hashCode(this.positiveIntValue) | 0;
    result = result * 31 + Kotlin.hashCode(this.negativeIntValue) | 0;
    result = result * 31 + Kotlin.hashCode(this.doubleValue) | 0;
    result = result * 31 + Kotlin.hashCode(this.stringValue) | 0;
    result = result * 31 + Kotlin.hashCode(this.aggregateValue) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  UninterpretedOption.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.identifierValue, other.identifierValue) && Kotlin.equals(this.positiveIntValue, other.positiveIntValue) && Kotlin.equals(this.negativeIntValue, other.negativeIntValue) && Kotlin.equals(this.doubleValue, other.doubleValue) && Kotlin.equals(this.stringValue, other.stringValue) && Kotlin.equals(this.aggregateValue, other.aggregateValue) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function SourceCodeInfo(location, unknownFields) {
    SourceCodeInfo$Companion_getInstance();
    if (location === void 0)
      location = emptyList();
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.location = location;
    this.unknownFields = unknownFields;
    this.protoSize_6d3ay5$_0 = lazy(SourceCodeInfo$protoSize$lambda(this));
  }
  SourceCodeInfo.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_26(this, other);
  };
  Object.defineProperty(SourceCodeInfo.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_6d3ay5$_0.value;
    }
  });
  SourceCodeInfo.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_26(this, m);
  };
  function SourceCodeInfo$Companion() {
    SourceCodeInfo$Companion_instance = this;
  }
  SourceCodeInfo$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_26(SourceCodeInfo$Companion_getInstance(), u);
  };
  SourceCodeInfo$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var SourceCodeInfo$Companion_instance = null;
  function SourceCodeInfo$Companion_getInstance() {
    if (SourceCodeInfo$Companion_instance === null) {
      new SourceCodeInfo$Companion();
    }
    return SourceCodeInfo$Companion_instance;
  }
  function SourceCodeInfo$Location(path, span, leadingComments, trailingComments, leadingDetachedComments, unknownFields) {
    SourceCodeInfo$Location$Companion_getInstance();
    if (path === void 0)
      path = emptyList();
    if (span === void 0)
      span = emptyList();
    if (leadingComments === void 0)
      leadingComments = null;
    if (trailingComments === void 0)
      trailingComments = null;
    if (leadingDetachedComments === void 0)
      leadingDetachedComments = emptyList();
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.path = path;
    this.span = span;
    this.leadingComments = leadingComments;
    this.trailingComments = trailingComments;
    this.leadingDetachedComments = leadingDetachedComments;
    this.unknownFields = unknownFields;
    this.protoSize_ygxans$_0 = lazy(SourceCodeInfo$Location$protoSize$lambda(this));
  }
  SourceCodeInfo$Location.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_27(this, other);
  };
  Object.defineProperty(SourceCodeInfo$Location.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_ygxans$_0.value;
    }
  });
  SourceCodeInfo$Location.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_27(this, m);
  };
  function SourceCodeInfo$Location$Companion() {
    SourceCodeInfo$Location$Companion_instance = this;
  }
  SourceCodeInfo$Location$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_27(SourceCodeInfo$Location$Companion_getInstance(), u);
  };
  SourceCodeInfo$Location$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var SourceCodeInfo$Location$Companion_instance = null;
  function SourceCodeInfo$Location$Companion_getInstance() {
    if (SourceCodeInfo$Location$Companion_instance === null) {
      new SourceCodeInfo$Location$Companion();
    }
    return SourceCodeInfo$Location$Companion_instance;
  }
  function SourceCodeInfo$Location$protoSize$lambda(this$Location) {
    return function () {
      return protoSizeImpl_27(this$Location);
    };
  }
  SourceCodeInfo$Location.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Location',
    interfaces: [Message]
  };
  SourceCodeInfo$Location.prototype.component1 = function () {
    return this.path;
  };
  SourceCodeInfo$Location.prototype.component2 = function () {
    return this.span;
  };
  SourceCodeInfo$Location.prototype.component3 = function () {
    return this.leadingComments;
  };
  SourceCodeInfo$Location.prototype.component4 = function () {
    return this.trailingComments;
  };
  SourceCodeInfo$Location.prototype.component5 = function () {
    return this.leadingDetachedComments;
  };
  SourceCodeInfo$Location.prototype.component6 = function () {
    return this.unknownFields;
  };
  SourceCodeInfo$Location.prototype.copy_f2pjg$ = function (path, span, leadingComments, trailingComments, leadingDetachedComments, unknownFields) {
    return new SourceCodeInfo$Location(path === void 0 ? this.path : path, span === void 0 ? this.span : span, leadingComments === void 0 ? this.leadingComments : leadingComments, trailingComments === void 0 ? this.trailingComments : trailingComments, leadingDetachedComments === void 0 ? this.leadingDetachedComments : leadingDetachedComments, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  SourceCodeInfo$Location.prototype.toString = function () {
    return 'Location(path=' + Kotlin.toString(this.path) + (', span=' + Kotlin.toString(this.span)) + (', leadingComments=' + Kotlin.toString(this.leadingComments)) + (', trailingComments=' + Kotlin.toString(this.trailingComments)) + (', leadingDetachedComments=' + Kotlin.toString(this.leadingDetachedComments)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  SourceCodeInfo$Location.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    result = result * 31 + Kotlin.hashCode(this.span) | 0;
    result = result * 31 + Kotlin.hashCode(this.leadingComments) | 0;
    result = result * 31 + Kotlin.hashCode(this.trailingComments) | 0;
    result = result * 31 + Kotlin.hashCode(this.leadingDetachedComments) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  SourceCodeInfo$Location.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.path, other.path) && Kotlin.equals(this.span, other.span) && Kotlin.equals(this.leadingComments, other.leadingComments) && Kotlin.equals(this.trailingComments, other.trailingComments) && Kotlin.equals(this.leadingDetachedComments, other.leadingDetachedComments) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function SourceCodeInfo$protoSize$lambda(this$SourceCodeInfo) {
    return function () {
      return protoSizeImpl_26(this$SourceCodeInfo);
    };
  }
  SourceCodeInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SourceCodeInfo',
    interfaces: [Message]
  };
  SourceCodeInfo.prototype.component1 = function () {
    return this.location;
  };
  SourceCodeInfo.prototype.component2 = function () {
    return this.unknownFields;
  };
  SourceCodeInfo.prototype.copy_mpwgc5$ = function (location, unknownFields) {
    return new SourceCodeInfo(location === void 0 ? this.location : location, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  SourceCodeInfo.prototype.toString = function () {
    return 'SourceCodeInfo(location=' + Kotlin.toString(this.location) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  SourceCodeInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.location) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  SourceCodeInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.location, other.location) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function GeneratedCodeInfo(annotation, unknownFields) {
    GeneratedCodeInfo$Companion_getInstance();
    if (annotation === void 0)
      annotation = emptyList();
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.annotation = annotation;
    this.unknownFields = unknownFields;
    this.protoSize_clx3lh$_0 = lazy(GeneratedCodeInfo$protoSize$lambda(this));
  }
  GeneratedCodeInfo.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_28(this, other);
  };
  Object.defineProperty(GeneratedCodeInfo.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_clx3lh$_0.value;
    }
  });
  GeneratedCodeInfo.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_28(this, m);
  };
  function GeneratedCodeInfo$Companion() {
    GeneratedCodeInfo$Companion_instance = this;
  }
  GeneratedCodeInfo$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_28(GeneratedCodeInfo$Companion_getInstance(), u);
  };
  GeneratedCodeInfo$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var GeneratedCodeInfo$Companion_instance = null;
  function GeneratedCodeInfo$Companion_getInstance() {
    if (GeneratedCodeInfo$Companion_instance === null) {
      new GeneratedCodeInfo$Companion();
    }
    return GeneratedCodeInfo$Companion_instance;
  }
  function GeneratedCodeInfo$Annotation(path, sourceFile, begin, end, unknownFields) {
    GeneratedCodeInfo$Annotation$Companion_getInstance();
    if (path === void 0)
      path = emptyList();
    if (sourceFile === void 0)
      sourceFile = null;
    if (begin === void 0)
      begin = null;
    if (end === void 0)
      end = null;
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.path = path;
    this.sourceFile = sourceFile;
    this.begin = begin;
    this.end = end;
    this.unknownFields = unknownFields;
    this.protoSize_79q40m$_0 = lazy(GeneratedCodeInfo$Annotation$protoSize$lambda(this));
  }
  GeneratedCodeInfo$Annotation.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_29(this, other);
  };
  Object.defineProperty(GeneratedCodeInfo$Annotation.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_79q40m$_0.value;
    }
  });
  GeneratedCodeInfo$Annotation.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_29(this, m);
  };
  function GeneratedCodeInfo$Annotation$Companion() {
    GeneratedCodeInfo$Annotation$Companion_instance = this;
  }
  GeneratedCodeInfo$Annotation$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_29(GeneratedCodeInfo$Annotation$Companion_getInstance(), u);
  };
  GeneratedCodeInfo$Annotation$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var GeneratedCodeInfo$Annotation$Companion_instance = null;
  function GeneratedCodeInfo$Annotation$Companion_getInstance() {
    if (GeneratedCodeInfo$Annotation$Companion_instance === null) {
      new GeneratedCodeInfo$Annotation$Companion();
    }
    return GeneratedCodeInfo$Annotation$Companion_instance;
  }
  function GeneratedCodeInfo$Annotation$protoSize$lambda(this$Annotation) {
    return function () {
      return protoSizeImpl_29(this$Annotation);
    };
  }
  GeneratedCodeInfo$Annotation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Annotation',
    interfaces: [Message]
  };
  GeneratedCodeInfo$Annotation.prototype.component1 = function () {
    return this.path;
  };
  GeneratedCodeInfo$Annotation.prototype.component2 = function () {
    return this.sourceFile;
  };
  GeneratedCodeInfo$Annotation.prototype.component3 = function () {
    return this.begin;
  };
  GeneratedCodeInfo$Annotation.prototype.component4 = function () {
    return this.end;
  };
  GeneratedCodeInfo$Annotation.prototype.component5 = function () {
    return this.unknownFields;
  };
  GeneratedCodeInfo$Annotation.prototype.copy_nxgfyx$ = function (path, sourceFile, begin, end, unknownFields) {
    return new GeneratedCodeInfo$Annotation(path === void 0 ? this.path : path, sourceFile === void 0 ? this.sourceFile : sourceFile, begin === void 0 ? this.begin : begin, end === void 0 ? this.end : end, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  GeneratedCodeInfo$Annotation.prototype.toString = function () {
    return 'Annotation(path=' + Kotlin.toString(this.path) + (', sourceFile=' + Kotlin.toString(this.sourceFile)) + (', begin=' + Kotlin.toString(this.begin)) + (', end=' + Kotlin.toString(this.end)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  GeneratedCodeInfo$Annotation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    result = result * 31 + Kotlin.hashCode(this.sourceFile) | 0;
    result = result * 31 + Kotlin.hashCode(this.begin) | 0;
    result = result * 31 + Kotlin.hashCode(this.end) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  GeneratedCodeInfo$Annotation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.path, other.path) && Kotlin.equals(this.sourceFile, other.sourceFile) && Kotlin.equals(this.begin, other.begin) && Kotlin.equals(this.end, other.end) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function GeneratedCodeInfo$protoSize$lambda(this$GeneratedCodeInfo) {
    return function () {
      return protoSizeImpl_28(this$GeneratedCodeInfo);
    };
  }
  GeneratedCodeInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeneratedCodeInfo',
    interfaces: [Message]
  };
  GeneratedCodeInfo.prototype.component1 = function () {
    return this.annotation;
  };
  GeneratedCodeInfo.prototype.component2 = function () {
    return this.unknownFields;
  };
  GeneratedCodeInfo.prototype.copy_r1ibux$ = function (annotation, unknownFields) {
    return new GeneratedCodeInfo(annotation === void 0 ? this.annotation : annotation, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  GeneratedCodeInfo.prototype.toString = function () {
    return 'GeneratedCodeInfo(annotation=' + Kotlin.toString(this.annotation) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  GeneratedCodeInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.annotation) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  GeneratedCodeInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.annotation, other.annotation) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function protoMergeImpl_3($receiver, plus_1) {
    var tmp$;
    return (tmp$ = plus_1 != null ? plus_1.copy_36goh1$(plus_0($receiver.file, plus_1.file), plus($receiver.unknownFields, plus_1.unknownFields)) : null) != null ? tmp$ : $receiver;
  }
  function protoSizeImpl_3($receiver) {
    var protoSize = 0;
    if (!$receiver.file.isEmpty()) {
      var tmp$ = protoSize;
      var tmp$_0 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(1), $receiver.file.size);
      var $receiver_0 = $receiver.file;
      var selector = getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_1;
      var sum = 0;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        sum = sum + selector(element) | 0;
      }
      protoSize = tmp$ + (tmp$_0 + sum) | 0;
    }
    var tmp$_2 = protoSize;
    var tmp$_3;
    var sum_0 = 0;
    tmp$_3 = $receiver.unknownFields.entries.iterator();
    while (tmp$_3.hasNext()) {
      var element_0 = tmp$_3.next();
      sum_0 = sum_0 + element_0.value.size() | 0;
    }
    protoSize = tmp$_2 + sum_0 | 0;
    return protoSize;
  }
  function protoMarshalImpl_3($receiver, protoMarshal) {
    if (!$receiver.file.isEmpty()) {
      var tmp$;
      tmp$ = $receiver.file.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        protoMarshal.writeTag_za3lpa$(10).writeMessage_3k86cv$(element);
      }
    }
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_3($receiver, protoUnmarshal) {
    var file = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new FileDescriptorSet(ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(file), protoUnmarshal.unknownFields());
        case 10:
          file = protoUnmarshal.readRepeatedMessage_f2m3pm$(file, FileDescriptorProto$Companion_getInstance(), true);
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_4($receiver, plus_1) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19;
    tmp$_0 = (tmp$ = plus_1.name) != null ? tmp$ : $receiver.name;
    tmp$_2 = (tmp$_1 = plus_1.package) != null ? tmp$_1 : $receiver.package;
    tmp$_3 = plus_0($receiver.dependency, plus_1.dependency);
    tmp$_4 = plus_0($receiver.publicDependency, plus_1.publicDependency);
    tmp$_5 = plus_0($receiver.weakDependency, plus_1.weakDependency);
    tmp$_6 = plus_0($receiver.messageType, plus_1.messageType);
    tmp$_7 = plus_0($receiver.enumType, plus_1.enumType);
    tmp$_8 = plus_0($receiver.service, plus_1.service);
    tmp$_9 = plus_0($receiver.extension, plus_1.extension);
    tmp$_12 = (tmp$_11 = (tmp$_10 = $receiver.options) != null ? tmp$_10.plus_2gqcnw$(plus_1.options) : null) != null ? tmp$_11 : plus_1.options;
    tmp$_15 = (tmp$_14 = (tmp$_13 = $receiver.sourceCodeInfo) != null ? tmp$_13.plus_2gqcnw$(plus_1.sourceCodeInfo) : null) != null ? tmp$_14 : plus_1.sourceCodeInfo;
    tmp$_17 = (tmp$_16 = plus_1.syntax) != null ? tmp$_16 : $receiver.syntax;
    tmp$_18 = plus($receiver.unknownFields, plus_1.unknownFields);
    return (tmp$_19 = plus_1 != null ? plus_1.copy_bjb9tn$(tmp$_0, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_12, tmp$_15, tmp$_17, tmp$_18) : null) != null ? tmp$_19 : $receiver;
  }
  function protoSizeImpl_4($receiver) {
    var protoSize = 0;
    if ($receiver.name != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().stringSize_61zpoe$($receiver.name)) | 0;
    if ($receiver.package != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(2) + Sizer_getInstance().stringSize_61zpoe$($receiver.package)) | 0;
    if (!$receiver.dependency.isEmpty()) {
      var tmp$ = protoSize;
      var tmp$_0 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(3), $receiver.dependency.size);
      var $receiver_0 = $receiver.dependency;
      var selector = getCallableRef('stringSize', function ($receiver, value) {
        return $receiver.stringSize_61zpoe$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_1;
      var sum = 0;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        sum = sum + selector(element) | 0;
      }
      protoSize = tmp$ + (tmp$_0 + sum) | 0;
    }
    if (!$receiver.publicDependency.isEmpty()) {
      var tmp$_2 = protoSize;
      var tmp$_3 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(10), $receiver.publicDependency.size);
      var $receiver_1 = $receiver.publicDependency;
      var selector_0 = getCallableRef('int32Size', function ($receiver, value) {
        return $receiver.int32Size_za3lpa$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_4;
      var sum_0 = 0;
      tmp$_4 = $receiver_1.iterator();
      while (tmp$_4.hasNext()) {
        var element_0 = tmp$_4.next();
        sum_0 = sum_0 + selector_0(element_0) | 0;
      }
      protoSize = tmp$_2 + (tmp$_3 + sum_0) | 0;
    }
    if (!$receiver.weakDependency.isEmpty()) {
      var tmp$_5 = protoSize;
      var tmp$_6 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(11), $receiver.weakDependency.size);
      var $receiver_2 = $receiver.weakDependency;
      var selector_1 = getCallableRef('int32Size', function ($receiver, value) {
        return $receiver.int32Size_za3lpa$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_7;
      var sum_1 = 0;
      tmp$_7 = $receiver_2.iterator();
      while (tmp$_7.hasNext()) {
        var element_1 = tmp$_7.next();
        sum_1 = sum_1 + selector_1(element_1) | 0;
      }
      protoSize = tmp$_5 + (tmp$_6 + sum_1) | 0;
    }
    if (!$receiver.messageType.isEmpty()) {
      var tmp$_8 = protoSize;
      var tmp$_9 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(4), $receiver.messageType.size);
      var $receiver_3 = $receiver.messageType;
      var selector_2 = getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_10;
      var sum_2 = 0;
      tmp$_10 = $receiver_3.iterator();
      while (tmp$_10.hasNext()) {
        var element_2 = tmp$_10.next();
        sum_2 = sum_2 + selector_2(element_2) | 0;
      }
      protoSize = tmp$_8 + (tmp$_9 + sum_2) | 0;
    }
    if (!$receiver.enumType.isEmpty()) {
      var tmp$_11 = protoSize;
      var tmp$_12 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(5), $receiver.enumType.size);
      var $receiver_4 = $receiver.enumType;
      var selector_3 = getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_13;
      var sum_3 = 0;
      tmp$_13 = $receiver_4.iterator();
      while (tmp$_13.hasNext()) {
        var element_3 = tmp$_13.next();
        sum_3 = sum_3 + selector_3(element_3) | 0;
      }
      protoSize = tmp$_11 + (tmp$_12 + sum_3) | 0;
    }
    if (!$receiver.service.isEmpty()) {
      var tmp$_14 = protoSize;
      var tmp$_15 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(6), $receiver.service.size);
      var $receiver_5 = $receiver.service;
      var selector_4 = getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_16;
      var sum_4 = 0;
      tmp$_16 = $receiver_5.iterator();
      while (tmp$_16.hasNext()) {
        var element_4 = tmp$_16.next();
        sum_4 = sum_4 + selector_4(element_4) | 0;
      }
      protoSize = tmp$_14 + (tmp$_15 + sum_4) | 0;
    }
    if (!$receiver.extension.isEmpty()) {
      var tmp$_17 = protoSize;
      var tmp$_18 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(7), $receiver.extension.size);
      var $receiver_6 = $receiver.extension;
      var selector_5 = getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_19;
      var sum_5 = 0;
      tmp$_19 = $receiver_6.iterator();
      while (tmp$_19.hasNext()) {
        var element_5 = tmp$_19.next();
        sum_5 = sum_5 + selector_5(element_5) | 0;
      }
      protoSize = tmp$_17 + (tmp$_18 + sum_5) | 0;
    }
    if ($receiver.options != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(8) + Sizer_getInstance().messageSize_3k86cv$($receiver.options)) | 0;
    if ($receiver.sourceCodeInfo != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(9) + Sizer_getInstance().messageSize_3k86cv$($receiver.sourceCodeInfo)) | 0;
    if ($receiver.syntax != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(12) + Sizer_getInstance().stringSize_61zpoe$($receiver.syntax)) | 0;
    var tmp$_20 = protoSize;
    var tmp$_21;
    var sum_6 = 0;
    tmp$_21 = $receiver.unknownFields.entries.iterator();
    while (tmp$_21.hasNext()) {
      var element_6 = tmp$_21.next();
      sum_6 = sum_6 + element_6.value.size() | 0;
    }
    protoSize = tmp$_20 + sum_6 | 0;
    return protoSize;
  }
  function protoMarshalImpl_4($receiver, protoMarshal) {
    if ($receiver.name != null)
      protoMarshal.writeTag_za3lpa$(10).writeString_61zpoe$($receiver.name);
    if ($receiver.package != null)
      protoMarshal.writeTag_za3lpa$(18).writeString_61zpoe$($receiver.package);
    if (!$receiver.dependency.isEmpty()) {
      var tmp$;
      tmp$ = $receiver.dependency.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        protoMarshal.writeTag_za3lpa$(26).writeString_61zpoe$(element);
      }
    }
    if (!$receiver.messageType.isEmpty()) {
      var tmp$_0;
      tmp$_0 = $receiver.messageType.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        protoMarshal.writeTag_za3lpa$(34).writeMessage_3k86cv$(element_0);
      }
    }
    if (!$receiver.enumType.isEmpty()) {
      var tmp$_1;
      tmp$_1 = $receiver.enumType.iterator();
      while (tmp$_1.hasNext()) {
        var element_1 = tmp$_1.next();
        protoMarshal.writeTag_za3lpa$(42).writeMessage_3k86cv$(element_1);
      }
    }
    if (!$receiver.service.isEmpty()) {
      var tmp$_2;
      tmp$_2 = $receiver.service.iterator();
      while (tmp$_2.hasNext()) {
        var element_2 = tmp$_2.next();
        protoMarshal.writeTag_za3lpa$(50).writeMessage_3k86cv$(element_2);
      }
    }
    if (!$receiver.extension.isEmpty()) {
      var tmp$_3;
      tmp$_3 = $receiver.extension.iterator();
      while (tmp$_3.hasNext()) {
        var element_3 = tmp$_3.next();
        protoMarshal.writeTag_za3lpa$(58).writeMessage_3k86cv$(element_3);
      }
    }
    if ($receiver.options != null)
      protoMarshal.writeTag_za3lpa$(66).writeMessage_3k86cv$($receiver.options);
    if ($receiver.sourceCodeInfo != null)
      protoMarshal.writeTag_za3lpa$(74).writeMessage_3k86cv$($receiver.sourceCodeInfo);
    if (!$receiver.publicDependency.isEmpty()) {
      var tmp$_4;
      tmp$_4 = $receiver.publicDependency.iterator();
      while (tmp$_4.hasNext()) {
        var element_4 = tmp$_4.next();
        protoMarshal.writeTag_za3lpa$(80).writeInt32_za3lpa$(element_4);
      }
    }
    if (!$receiver.weakDependency.isEmpty()) {
      var tmp$_5;
      tmp$_5 = $receiver.weakDependency.iterator();
      while (tmp$_5.hasNext()) {
        var element_5 = tmp$_5.next();
        protoMarshal.writeTag_za3lpa$(88).writeInt32_za3lpa$(element_5);
      }
    }
    if ($receiver.syntax != null)
      protoMarshal.writeTag_za3lpa$(98).writeString_61zpoe$($receiver.syntax);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_4($receiver, protoUnmarshal) {
    var name = null;
    var package_0 = null;
    var dependency = null;
    var publicDependency = null;
    var weakDependency = null;
    var messageType = null;
    var enumType = null;
    var service = null;
    var extension = null;
    var options = null;
    var sourceCodeInfo = null;
    var syntax = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new FileDescriptorProto(name, package_0, ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(dependency), ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(publicDependency), ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(weakDependency), ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(messageType), ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(enumType), ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(service), ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(extension), options, sourceCodeInfo, syntax, protoUnmarshal.unknownFields());
        case 10:
          name = protoUnmarshal.readString();
          break;
        case 18:
          package_0 = protoUnmarshal.readString();
          break;
        case 26:
          dependency = protoUnmarshal.readRepeated_2nrlh4$(dependency, getCallableRef('readString', function ($receiver) {
            return $receiver.readString();
          }.bind(null, protoUnmarshal)), true);
          break;
        case 34:
          messageType = protoUnmarshal.readRepeatedMessage_f2m3pm$(messageType, DescriptorProto$Companion_getInstance(), true);
          break;
        case 42:
          enumType = protoUnmarshal.readRepeatedMessage_f2m3pm$(enumType, EnumDescriptorProto$Companion_getInstance(), true);
          break;
        case 50:
          service = protoUnmarshal.readRepeatedMessage_f2m3pm$(service, ServiceDescriptorProto$Companion_getInstance(), true);
          break;
        case 58:
          extension = protoUnmarshal.readRepeatedMessage_f2m3pm$(extension, FieldDescriptorProto$Companion_getInstance(), true);
          break;
        case 66:
          options = protoUnmarshal.readMessage_7rd7cm$(FileOptions$Companion_getInstance());
          break;
        case 74:
          sourceCodeInfo = protoUnmarshal.readMessage_7rd7cm$(SourceCodeInfo$Companion_getInstance());
          break;
        case 80:
        case 82:
          publicDependency = protoUnmarshal.readRepeated_2nrlh4$(publicDependency, getCallableRef('readInt32', function ($receiver) {
            return $receiver.readInt32();
          }.bind(null, protoUnmarshal)), false);
          break;
        case 88:
        case 90:
          weakDependency = protoUnmarshal.readRepeated_2nrlh4$(weakDependency, getCallableRef('readInt32', function ($receiver) {
            return $receiver.readInt32();
          }.bind(null, protoUnmarshal)), false);
          break;
        case 98:
          syntax = protoUnmarshal.readString();
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_5($receiver, plus_1) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
    tmp$_0 = (tmp$ = plus_1.name) != null ? tmp$ : $receiver.name;
    tmp$_1 = plus_0($receiver.field, plus_1.field);
    tmp$_2 = plus_0($receiver.extension, plus_1.extension);
    tmp$_3 = plus_0($receiver.nestedType, plus_1.nestedType);
    tmp$_4 = plus_0($receiver.enumType, plus_1.enumType);
    tmp$_5 = plus_0($receiver.extensionRange, plus_1.extensionRange);
    tmp$_6 = plus_0($receiver.oneofDecl, plus_1.oneofDecl);
    tmp$_9 = (tmp$_8 = (tmp$_7 = $receiver.options) != null ? tmp$_7.plus_2gqcnw$(plus_1.options) : null) != null ? tmp$_8 : plus_1.options;
    tmp$_10 = plus_0($receiver.reservedRange, plus_1.reservedRange);
    tmp$_11 = plus_0($receiver.reservedName, plus_1.reservedName);
    tmp$_12 = plus($receiver.unknownFields, plus_1.unknownFields);
    return (tmp$_13 = plus_1 != null ? plus_1.copy_maooxk$(tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_9, tmp$_10, tmp$_11, tmp$_12) : null) != null ? tmp$_13 : $receiver;
  }
  function protoSizeImpl_5($receiver) {
    var protoSize = 0;
    if ($receiver.name != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().stringSize_61zpoe$($receiver.name)) | 0;
    if (!$receiver.field.isEmpty()) {
      var tmp$ = protoSize;
      var tmp$_0 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(2), $receiver.field.size);
      var $receiver_0 = $receiver.field;
      var selector = getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_1;
      var sum = 0;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        sum = sum + selector(element) | 0;
      }
      protoSize = tmp$ + (tmp$_0 + sum) | 0;
    }
    if (!$receiver.extension.isEmpty()) {
      var tmp$_2 = protoSize;
      var tmp$_3 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(6), $receiver.extension.size);
      var $receiver_1 = $receiver.extension;
      var selector_0 = getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_4;
      var sum_0 = 0;
      tmp$_4 = $receiver_1.iterator();
      while (tmp$_4.hasNext()) {
        var element_0 = tmp$_4.next();
        sum_0 = sum_0 + selector_0(element_0) | 0;
      }
      protoSize = tmp$_2 + (tmp$_3 + sum_0) | 0;
    }
    if (!$receiver.nestedType.isEmpty()) {
      var tmp$_5 = protoSize;
      var tmp$_6 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(3), $receiver.nestedType.size);
      var $receiver_2 = $receiver.nestedType;
      var selector_1 = getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_7;
      var sum_1 = 0;
      tmp$_7 = $receiver_2.iterator();
      while (tmp$_7.hasNext()) {
        var element_1 = tmp$_7.next();
        sum_1 = sum_1 + selector_1(element_1) | 0;
      }
      protoSize = tmp$_5 + (tmp$_6 + sum_1) | 0;
    }
    if (!$receiver.enumType.isEmpty()) {
      var tmp$_8 = protoSize;
      var tmp$_9 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(4), $receiver.enumType.size);
      var $receiver_3 = $receiver.enumType;
      var selector_2 = getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_10;
      var sum_2 = 0;
      tmp$_10 = $receiver_3.iterator();
      while (tmp$_10.hasNext()) {
        var element_2 = tmp$_10.next();
        sum_2 = sum_2 + selector_2(element_2) | 0;
      }
      protoSize = tmp$_8 + (tmp$_9 + sum_2) | 0;
    }
    if (!$receiver.extensionRange.isEmpty()) {
      var tmp$_11 = protoSize;
      var tmp$_12 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(5), $receiver.extensionRange.size);
      var $receiver_4 = $receiver.extensionRange;
      var selector_3 = getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_13;
      var sum_3 = 0;
      tmp$_13 = $receiver_4.iterator();
      while (tmp$_13.hasNext()) {
        var element_3 = tmp$_13.next();
        sum_3 = sum_3 + selector_3(element_3) | 0;
      }
      protoSize = tmp$_11 + (tmp$_12 + sum_3) | 0;
    }
    if (!$receiver.oneofDecl.isEmpty()) {
      var tmp$_14 = protoSize;
      var tmp$_15 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(8), $receiver.oneofDecl.size);
      var $receiver_5 = $receiver.oneofDecl;
      var selector_4 = getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_16;
      var sum_4 = 0;
      tmp$_16 = $receiver_5.iterator();
      while (tmp$_16.hasNext()) {
        var element_4 = tmp$_16.next();
        sum_4 = sum_4 + selector_4(element_4) | 0;
      }
      protoSize = tmp$_14 + (tmp$_15 + sum_4) | 0;
    }
    if ($receiver.options != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(7) + Sizer_getInstance().messageSize_3k86cv$($receiver.options)) | 0;
    if (!$receiver.reservedRange.isEmpty()) {
      var tmp$_17 = protoSize;
      var tmp$_18 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(9), $receiver.reservedRange.size);
      var $receiver_6 = $receiver.reservedRange;
      var selector_5 = getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_19;
      var sum_5 = 0;
      tmp$_19 = $receiver_6.iterator();
      while (tmp$_19.hasNext()) {
        var element_5 = tmp$_19.next();
        sum_5 = sum_5 + selector_5(element_5) | 0;
      }
      protoSize = tmp$_17 + (tmp$_18 + sum_5) | 0;
    }
    if (!$receiver.reservedName.isEmpty()) {
      var tmp$_20 = protoSize;
      var tmp$_21 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(10), $receiver.reservedName.size);
      var $receiver_7 = $receiver.reservedName;
      var selector_6 = getCallableRef('stringSize', function ($receiver, value) {
        return $receiver.stringSize_61zpoe$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_22;
      var sum_6 = 0;
      tmp$_22 = $receiver_7.iterator();
      while (tmp$_22.hasNext()) {
        var element_6 = tmp$_22.next();
        sum_6 = sum_6 + selector_6(element_6) | 0;
      }
      protoSize = tmp$_20 + (tmp$_21 + sum_6) | 0;
    }
    var tmp$_23 = protoSize;
    var tmp$_24;
    var sum_7 = 0;
    tmp$_24 = $receiver.unknownFields.entries.iterator();
    while (tmp$_24.hasNext()) {
      var element_7 = tmp$_24.next();
      sum_7 = sum_7 + element_7.value.size() | 0;
    }
    protoSize = tmp$_23 + sum_7 | 0;
    return protoSize;
  }
  function protoMarshalImpl_5($receiver, protoMarshal) {
    if ($receiver.name != null)
      protoMarshal.writeTag_za3lpa$(10).writeString_61zpoe$($receiver.name);
    if (!$receiver.field.isEmpty()) {
      var tmp$;
      tmp$ = $receiver.field.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        protoMarshal.writeTag_za3lpa$(18).writeMessage_3k86cv$(element);
      }
    }
    if (!$receiver.nestedType.isEmpty()) {
      var tmp$_0;
      tmp$_0 = $receiver.nestedType.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        protoMarshal.writeTag_za3lpa$(26).writeMessage_3k86cv$(element_0);
      }
    }
    if (!$receiver.enumType.isEmpty()) {
      var tmp$_1;
      tmp$_1 = $receiver.enumType.iterator();
      while (tmp$_1.hasNext()) {
        var element_1 = tmp$_1.next();
        protoMarshal.writeTag_za3lpa$(34).writeMessage_3k86cv$(element_1);
      }
    }
    if (!$receiver.extensionRange.isEmpty()) {
      var tmp$_2;
      tmp$_2 = $receiver.extensionRange.iterator();
      while (tmp$_2.hasNext()) {
        var element_2 = tmp$_2.next();
        protoMarshal.writeTag_za3lpa$(42).writeMessage_3k86cv$(element_2);
      }
    }
    if (!$receiver.extension.isEmpty()) {
      var tmp$_3;
      tmp$_3 = $receiver.extension.iterator();
      while (tmp$_3.hasNext()) {
        var element_3 = tmp$_3.next();
        protoMarshal.writeTag_za3lpa$(50).writeMessage_3k86cv$(element_3);
      }
    }
    if ($receiver.options != null)
      protoMarshal.writeTag_za3lpa$(58).writeMessage_3k86cv$($receiver.options);
    if (!$receiver.oneofDecl.isEmpty()) {
      var tmp$_4;
      tmp$_4 = $receiver.oneofDecl.iterator();
      while (tmp$_4.hasNext()) {
        var element_4 = tmp$_4.next();
        protoMarshal.writeTag_za3lpa$(66).writeMessage_3k86cv$(element_4);
      }
    }
    if (!$receiver.reservedRange.isEmpty()) {
      var tmp$_5;
      tmp$_5 = $receiver.reservedRange.iterator();
      while (tmp$_5.hasNext()) {
        var element_5 = tmp$_5.next();
        protoMarshal.writeTag_za3lpa$(74).writeMessage_3k86cv$(element_5);
      }
    }
    if (!$receiver.reservedName.isEmpty()) {
      var tmp$_6;
      tmp$_6 = $receiver.reservedName.iterator();
      while (tmp$_6.hasNext()) {
        var element_6 = tmp$_6.next();
        protoMarshal.writeTag_za3lpa$(82).writeString_61zpoe$(element_6);
      }
    }
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_5($receiver, protoUnmarshal) {
    var name = null;
    var field = null;
    var extension = null;
    var nestedType = null;
    var enumType = null;
    var extensionRange = null;
    var oneofDecl = null;
    var options = null;
    var reservedRange = null;
    var reservedName = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new DescriptorProto(name, ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(field), ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(extension), ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(nestedType), ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(enumType), ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(extensionRange), ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(oneofDecl), options, ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(reservedRange), ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(reservedName), protoUnmarshal.unknownFields());
        case 10:
          name = protoUnmarshal.readString();
          break;
        case 18:
          field = protoUnmarshal.readRepeatedMessage_f2m3pm$(field, FieldDescriptorProto$Companion_getInstance(), true);
          break;
        case 26:
          nestedType = protoUnmarshal.readRepeatedMessage_f2m3pm$(nestedType, DescriptorProto$Companion_getInstance(), true);
          break;
        case 34:
          enumType = protoUnmarshal.readRepeatedMessage_f2m3pm$(enumType, EnumDescriptorProto$Companion_getInstance(), true);
          break;
        case 42:
          extensionRange = protoUnmarshal.readRepeatedMessage_f2m3pm$(extensionRange, DescriptorProto$ExtensionRange$Companion_getInstance(), true);
          break;
        case 50:
          extension = protoUnmarshal.readRepeatedMessage_f2m3pm$(extension, FieldDescriptorProto$Companion_getInstance(), true);
          break;
        case 58:
          options = protoUnmarshal.readMessage_7rd7cm$(MessageOptions$Companion_getInstance());
          break;
        case 66:
          oneofDecl = protoUnmarshal.readRepeatedMessage_f2m3pm$(oneofDecl, OneofDescriptorProto$Companion_getInstance(), true);
          break;
        case 74:
          reservedRange = protoUnmarshal.readRepeatedMessage_f2m3pm$(reservedRange, DescriptorProto$ReservedRange$Companion_getInstance(), true);
          break;
        case 82:
          reservedName = protoUnmarshal.readRepeated_2nrlh4$(reservedName, getCallableRef('readString', function ($receiver) {
            return $receiver.readString();
          }.bind(null, protoUnmarshal)), true);
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_6($receiver, plus_0) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    tmp$_0 = (tmp$ = plus_0.start) != null ? tmp$ : $receiver.start;
    tmp$_2 = (tmp$_1 = plus_0.end) != null ? tmp$_1 : $receiver.end;
    tmp$_5 = (tmp$_4 = (tmp$_3 = $receiver.options) != null ? tmp$_3.plus_2gqcnw$(plus_0.options) : null) != null ? tmp$_4 : plus_0.options;
    tmp$_6 = plus($receiver.unknownFields, plus_0.unknownFields);
    return (tmp$_7 = plus_0 != null ? plus_0.copy_nftn6w$(tmp$_0, tmp$_2, tmp$_5, tmp$_6) : null) != null ? tmp$_7 : $receiver;
  }
  function protoSizeImpl_6($receiver) {
    var protoSize = 0;
    if ($receiver.start != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().int32Size_za3lpa$($receiver.start)) | 0;
    if ($receiver.end != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(2) + Sizer_getInstance().int32Size_za3lpa$($receiver.end)) | 0;
    if ($receiver.options != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(3) + Sizer_getInstance().messageSize_3k86cv$($receiver.options)) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_6($receiver, protoMarshal) {
    if ($receiver.start != null)
      protoMarshal.writeTag_za3lpa$(8).writeInt32_za3lpa$($receiver.start);
    if ($receiver.end != null)
      protoMarshal.writeTag_za3lpa$(16).writeInt32_za3lpa$($receiver.end);
    if ($receiver.options != null)
      protoMarshal.writeTag_za3lpa$(26).writeMessage_3k86cv$($receiver.options);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_6($receiver, protoUnmarshal) {
    var start = null;
    var end = null;
    var options = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new DescriptorProto$ExtensionRange(start, end, options, protoUnmarshal.unknownFields());
        case 8:
          start = protoUnmarshal.readInt32();
          break;
        case 16:
          end = protoUnmarshal.readInt32();
          break;
        case 26:
          options = protoUnmarshal.readMessage_7rd7cm$(ExtensionRangeOptions$Companion_getInstance());
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_7($receiver, plus_0) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    tmp$_0 = (tmp$ = plus_0.start) != null ? tmp$ : $receiver.start;
    tmp$_2 = (tmp$_1 = plus_0.end) != null ? tmp$_1 : $receiver.end;
    tmp$_3 = plus($receiver.unknownFields, plus_0.unknownFields);
    return (tmp$_4 = plus_0 != null ? plus_0.copy_xmjek1$(tmp$_0, tmp$_2, tmp$_3) : null) != null ? tmp$_4 : $receiver;
  }
  function protoSizeImpl_7($receiver) {
    var protoSize = 0;
    if ($receiver.start != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().int32Size_za3lpa$($receiver.start)) | 0;
    if ($receiver.end != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(2) + Sizer_getInstance().int32Size_za3lpa$($receiver.end)) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_7($receiver, protoMarshal) {
    if ($receiver.start != null)
      protoMarshal.writeTag_za3lpa$(8).writeInt32_za3lpa$($receiver.start);
    if ($receiver.end != null)
      protoMarshal.writeTag_za3lpa$(16).writeInt32_za3lpa$($receiver.end);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_7($receiver, protoUnmarshal) {
    var start = null;
    var end = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new DescriptorProto$ReservedRange(start, end, protoUnmarshal.unknownFields());
        case 8:
          start = protoUnmarshal.readInt32();
          break;
        case 16:
          end = protoUnmarshal.readInt32();
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_8($receiver, plus_1) {
    var tmp$;
    return (tmp$ = plus_1 != null ? plus_1.copy_zext2$(plus_0($receiver.uninterpretedOption, plus_1.uninterpretedOption), plus($receiver.unknownFields, plus_1.unknownFields)) : null) != null ? tmp$ : $receiver;
  }
  function protoSizeImpl_8($receiver) {
    var protoSize = 0;
    if (!$receiver.uninterpretedOption.isEmpty()) {
      var tmp$ = protoSize;
      var tmp$_0 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(999), $receiver.uninterpretedOption.size);
      var $receiver_0 = $receiver.uninterpretedOption;
      var selector = getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_1;
      var sum = 0;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        sum = sum + selector(element) | 0;
      }
      protoSize = tmp$ + (tmp$_0 + sum) | 0;
    }
    var tmp$_2 = protoSize;
    var tmp$_3;
    var sum_0 = 0;
    tmp$_3 = $receiver.unknownFields.entries.iterator();
    while (tmp$_3.hasNext()) {
      var element_0 = tmp$_3.next();
      sum_0 = sum_0 + element_0.value.size() | 0;
    }
    protoSize = tmp$_2 + sum_0 | 0;
    return protoSize;
  }
  function protoMarshalImpl_8($receiver, protoMarshal) {
    if (!$receiver.uninterpretedOption.isEmpty()) {
      var tmp$;
      tmp$ = $receiver.uninterpretedOption.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        protoMarshal.writeTag_za3lpa$(7994).writeMessage_3k86cv$(element);
      }
    }
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_8($receiver, protoUnmarshal) {
    var uninterpretedOption = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new ExtensionRangeOptions(ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(uninterpretedOption), protoUnmarshal.unknownFields());
        case 7994:
          uninterpretedOption = protoUnmarshal.readRepeatedMessage_f2m3pm$(uninterpretedOption, UninterpretedOption$Companion_getInstance(), true);
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_9($receiver, plus_0) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21;
    tmp$_0 = (tmp$ = plus_0.name) != null ? tmp$ : $receiver.name;
    tmp$_2 = (tmp$_1 = plus_0.number) != null ? tmp$_1 : $receiver.number;
    tmp$_4 = (tmp$_3 = plus_0.label) != null ? tmp$_3 : $receiver.label;
    tmp$_6 = (tmp$_5 = plus_0.type) != null ? tmp$_5 : $receiver.type;
    tmp$_8 = (tmp$_7 = plus_0.typeName) != null ? tmp$_7 : $receiver.typeName;
    tmp$_10 = (tmp$_9 = plus_0.extendee) != null ? tmp$_9 : $receiver.extendee;
    tmp$_12 = (tmp$_11 = plus_0.defaultValue) != null ? tmp$_11 : $receiver.defaultValue;
    tmp$_14 = (tmp$_13 = plus_0.oneofIndex) != null ? tmp$_13 : $receiver.oneofIndex;
    tmp$_16 = (tmp$_15 = plus_0.jsonName) != null ? tmp$_15 : $receiver.jsonName;
    tmp$_19 = (tmp$_18 = (tmp$_17 = $receiver.options) != null ? tmp$_17.plus_2gqcnw$(plus_0.options) : null) != null ? tmp$_18 : plus_0.options;
    tmp$_20 = plus($receiver.unknownFields, plus_0.unknownFields);
    return (tmp$_21 = plus_0 != null ? plus_0.copy_lq6mxx$(tmp$_0, tmp$_2, tmp$_4, tmp$_6, tmp$_8, tmp$_10, tmp$_12, tmp$_14, tmp$_16, tmp$_19, tmp$_20) : null) != null ? tmp$_21 : $receiver;
  }
  function protoSizeImpl_9($receiver) {
    var protoSize = 0;
    if ($receiver.name != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().stringSize_61zpoe$($receiver.name)) | 0;
    if ($receiver.number != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(3) + Sizer_getInstance().int32Size_za3lpa$($receiver.number)) | 0;
    if ($receiver.label != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(4) + Sizer_getInstance().enumSize_do1vow$($receiver.label)) | 0;
    if ($receiver.type != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(5) + Sizer_getInstance().enumSize_do1vow$($receiver.type)) | 0;
    if ($receiver.typeName != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(6) + Sizer_getInstance().stringSize_61zpoe$($receiver.typeName)) | 0;
    if ($receiver.extendee != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(2) + Sizer_getInstance().stringSize_61zpoe$($receiver.extendee)) | 0;
    if ($receiver.defaultValue != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(7) + Sizer_getInstance().stringSize_61zpoe$($receiver.defaultValue)) | 0;
    if ($receiver.oneofIndex != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(9) + Sizer_getInstance().int32Size_za3lpa$($receiver.oneofIndex)) | 0;
    if ($receiver.jsonName != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(10) + Sizer_getInstance().stringSize_61zpoe$($receiver.jsonName)) | 0;
    if ($receiver.options != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(8) + Sizer_getInstance().messageSize_3k86cv$($receiver.options)) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_9($receiver, protoMarshal) {
    if ($receiver.name != null)
      protoMarshal.writeTag_za3lpa$(10).writeString_61zpoe$($receiver.name);
    if ($receiver.extendee != null)
      protoMarshal.writeTag_za3lpa$(18).writeString_61zpoe$($receiver.extendee);
    if ($receiver.number != null)
      protoMarshal.writeTag_za3lpa$(24).writeInt32_za3lpa$($receiver.number);
    if ($receiver.label != null)
      protoMarshal.writeTag_za3lpa$(32).writeEnum_do1vow$($receiver.label);
    if ($receiver.type != null)
      protoMarshal.writeTag_za3lpa$(40).writeEnum_do1vow$($receiver.type);
    if ($receiver.typeName != null)
      protoMarshal.writeTag_za3lpa$(50).writeString_61zpoe$($receiver.typeName);
    if ($receiver.defaultValue != null)
      protoMarshal.writeTag_za3lpa$(58).writeString_61zpoe$($receiver.defaultValue);
    if ($receiver.options != null)
      protoMarshal.writeTag_za3lpa$(66).writeMessage_3k86cv$($receiver.options);
    if ($receiver.oneofIndex != null)
      protoMarshal.writeTag_za3lpa$(72).writeInt32_za3lpa$($receiver.oneofIndex);
    if ($receiver.jsonName != null)
      protoMarshal.writeTag_za3lpa$(82).writeString_61zpoe$($receiver.jsonName);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_9($receiver, protoUnmarshal) {
    var name = null;
    var number = null;
    var label = null;
    var type = null;
    var typeName = null;
    var extendee = null;
    var defaultValue = null;
    var oneofIndex = null;
    var jsonName = null;
    var options = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new FieldDescriptorProto(name, number, label, type, typeName, extendee, defaultValue, oneofIndex, jsonName, options, protoUnmarshal.unknownFields());
        case 10:
          name = protoUnmarshal.readString();
          break;
        case 18:
          extendee = protoUnmarshal.readString();
          break;
        case 24:
          number = protoUnmarshal.readInt32();
          break;
        case 32:
          label = protoUnmarshal.readEnum_vjsov6$(FieldDescriptorProto$Label$Companion_getInstance());
          break;
        case 40:
          type = protoUnmarshal.readEnum_vjsov6$(FieldDescriptorProto$Type$Companion_getInstance());
          break;
        case 50:
          typeName = protoUnmarshal.readString();
          break;
        case 58:
          defaultValue = protoUnmarshal.readString();
          break;
        case 66:
          options = protoUnmarshal.readMessage_7rd7cm$(FieldOptions$Companion_getInstance());
          break;
        case 72:
          oneofIndex = protoUnmarshal.readInt32();
          break;
        case 82:
          jsonName = protoUnmarshal.readString();
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_10($receiver, plus_0) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    tmp$_0 = (tmp$ = plus_0.name) != null ? tmp$ : $receiver.name;
    tmp$_3 = (tmp$_2 = (tmp$_1 = $receiver.options) != null ? tmp$_1.plus_2gqcnw$(plus_0.options) : null) != null ? tmp$_2 : plus_0.options;
    tmp$_4 = plus($receiver.unknownFields, plus_0.unknownFields);
    return (tmp$_5 = plus_0 != null ? plus_0.copy_mvowd0$(tmp$_0, tmp$_3, tmp$_4) : null) != null ? tmp$_5 : $receiver;
  }
  function protoSizeImpl_10($receiver) {
    var protoSize = 0;
    if ($receiver.name != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().stringSize_61zpoe$($receiver.name)) | 0;
    if ($receiver.options != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(2) + Sizer_getInstance().messageSize_3k86cv$($receiver.options)) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_10($receiver, protoMarshal) {
    if ($receiver.name != null)
      protoMarshal.writeTag_za3lpa$(10).writeString_61zpoe$($receiver.name);
    if ($receiver.options != null)
      protoMarshal.writeTag_za3lpa$(18).writeMessage_3k86cv$($receiver.options);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_10($receiver, protoUnmarshal) {
    var name = null;
    var options = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new OneofDescriptorProto(name, options, protoUnmarshal.unknownFields());
        case 10:
          name = protoUnmarshal.readString();
          break;
        case 18:
          options = protoUnmarshal.readMessage_7rd7cm$(OneofOptions$Companion_getInstance());
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_11($receiver, plus_1) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    tmp$_0 = (tmp$ = plus_1.name) != null ? tmp$ : $receiver.name;
    tmp$_1 = plus_0($receiver.value, plus_1.value);
    tmp$_4 = (tmp$_3 = (tmp$_2 = $receiver.options) != null ? tmp$_2.plus_2gqcnw$(plus_1.options) : null) != null ? tmp$_3 : plus_1.options;
    tmp$_5 = plus_0($receiver.reservedRange, plus_1.reservedRange);
    tmp$_6 = plus_0($receiver.reservedName, plus_1.reservedName);
    tmp$_7 = plus($receiver.unknownFields, plus_1.unknownFields);
    return (tmp$_8 = plus_1 != null ? plus_1.copy_q3grr0$(tmp$_0, tmp$_1, tmp$_4, tmp$_5, tmp$_6, tmp$_7) : null) != null ? tmp$_8 : $receiver;
  }
  function protoSizeImpl_11($receiver) {
    var protoSize = 0;
    if ($receiver.name != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().stringSize_61zpoe$($receiver.name)) | 0;
    if (!$receiver.value.isEmpty()) {
      var tmp$ = protoSize;
      var tmp$_0 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(2), $receiver.value.size);
      var $receiver_0 = $receiver.value;
      var selector = getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_1;
      var sum = 0;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        sum = sum + selector(element) | 0;
      }
      protoSize = tmp$ + (tmp$_0 + sum) | 0;
    }
    if ($receiver.options != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(3) + Sizer_getInstance().messageSize_3k86cv$($receiver.options)) | 0;
    if (!$receiver.reservedRange.isEmpty()) {
      var tmp$_2 = protoSize;
      var tmp$_3 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(4), $receiver.reservedRange.size);
      var $receiver_1 = $receiver.reservedRange;
      var selector_0 = getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_4;
      var sum_0 = 0;
      tmp$_4 = $receiver_1.iterator();
      while (tmp$_4.hasNext()) {
        var element_0 = tmp$_4.next();
        sum_0 = sum_0 + selector_0(element_0) | 0;
      }
      protoSize = tmp$_2 + (tmp$_3 + sum_0) | 0;
    }
    if (!$receiver.reservedName.isEmpty()) {
      var tmp$_5 = protoSize;
      var tmp$_6 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(5), $receiver.reservedName.size);
      var $receiver_2 = $receiver.reservedName;
      var selector_1 = getCallableRef('stringSize', function ($receiver, value) {
        return $receiver.stringSize_61zpoe$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_7;
      var sum_1 = 0;
      tmp$_7 = $receiver_2.iterator();
      while (tmp$_7.hasNext()) {
        var element_1 = tmp$_7.next();
        sum_1 = sum_1 + selector_1(element_1) | 0;
      }
      protoSize = tmp$_5 + (tmp$_6 + sum_1) | 0;
    }
    var tmp$_8 = protoSize;
    var tmp$_9;
    var sum_2 = 0;
    tmp$_9 = $receiver.unknownFields.entries.iterator();
    while (tmp$_9.hasNext()) {
      var element_2 = tmp$_9.next();
      sum_2 = sum_2 + element_2.value.size() | 0;
    }
    protoSize = tmp$_8 + sum_2 | 0;
    return protoSize;
  }
  function protoMarshalImpl_11($receiver, protoMarshal) {
    if ($receiver.name != null)
      protoMarshal.writeTag_za3lpa$(10).writeString_61zpoe$($receiver.name);
    if (!$receiver.value.isEmpty()) {
      var tmp$;
      tmp$ = $receiver.value.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        protoMarshal.writeTag_za3lpa$(18).writeMessage_3k86cv$(element);
      }
    }
    if ($receiver.options != null)
      protoMarshal.writeTag_za3lpa$(26).writeMessage_3k86cv$($receiver.options);
    if (!$receiver.reservedRange.isEmpty()) {
      var tmp$_0;
      tmp$_0 = $receiver.reservedRange.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        protoMarshal.writeTag_za3lpa$(34).writeMessage_3k86cv$(element_0);
      }
    }
    if (!$receiver.reservedName.isEmpty()) {
      var tmp$_1;
      tmp$_1 = $receiver.reservedName.iterator();
      while (tmp$_1.hasNext()) {
        var element_1 = tmp$_1.next();
        protoMarshal.writeTag_za3lpa$(42).writeString_61zpoe$(element_1);
      }
    }
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_11($receiver, protoUnmarshal) {
    var name = null;
    var value = null;
    var options = null;
    var reservedRange = null;
    var reservedName = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new EnumDescriptorProto(name, ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(value), options, ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(reservedRange), ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(reservedName), protoUnmarshal.unknownFields());
        case 10:
          name = protoUnmarshal.readString();
          break;
        case 18:
          value = protoUnmarshal.readRepeatedMessage_f2m3pm$(value, EnumValueDescriptorProto$Companion_getInstance(), true);
          break;
        case 26:
          options = protoUnmarshal.readMessage_7rd7cm$(EnumOptions$Companion_getInstance());
          break;
        case 34:
          reservedRange = protoUnmarshal.readRepeatedMessage_f2m3pm$(reservedRange, EnumDescriptorProto$EnumReservedRange$Companion_getInstance(), true);
          break;
        case 42:
          reservedName = protoUnmarshal.readRepeated_2nrlh4$(reservedName, getCallableRef('readString', function ($receiver) {
            return $receiver.readString();
          }.bind(null, protoUnmarshal)), true);
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_12($receiver, plus_0) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    tmp$_0 = (tmp$ = plus_0.start) != null ? tmp$ : $receiver.start;
    tmp$_2 = (tmp$_1 = plus_0.end) != null ? tmp$_1 : $receiver.end;
    tmp$_3 = plus($receiver.unknownFields, plus_0.unknownFields);
    return (tmp$_4 = plus_0 != null ? plus_0.copy_xmjek1$(tmp$_0, tmp$_2, tmp$_3) : null) != null ? tmp$_4 : $receiver;
  }
  function protoSizeImpl_12($receiver) {
    var protoSize = 0;
    if ($receiver.start != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().int32Size_za3lpa$($receiver.start)) | 0;
    if ($receiver.end != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(2) + Sizer_getInstance().int32Size_za3lpa$($receiver.end)) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_12($receiver, protoMarshal) {
    if ($receiver.start != null)
      protoMarshal.writeTag_za3lpa$(8).writeInt32_za3lpa$($receiver.start);
    if ($receiver.end != null)
      protoMarshal.writeTag_za3lpa$(16).writeInt32_za3lpa$($receiver.end);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_12($receiver, protoUnmarshal) {
    var start = null;
    var end = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new EnumDescriptorProto$EnumReservedRange(start, end, protoUnmarshal.unknownFields());
        case 8:
          start = protoUnmarshal.readInt32();
          break;
        case 16:
          end = protoUnmarshal.readInt32();
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_13($receiver, plus_0) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    tmp$_0 = (tmp$ = plus_0.name) != null ? tmp$ : $receiver.name;
    tmp$_2 = (tmp$_1 = plus_0.number) != null ? tmp$_1 : $receiver.number;
    tmp$_5 = (tmp$_4 = (tmp$_3 = $receiver.options) != null ? tmp$_3.plus_2gqcnw$(plus_0.options) : null) != null ? tmp$_4 : plus_0.options;
    tmp$_6 = plus($receiver.unknownFields, plus_0.unknownFields);
    return (tmp$_7 = plus_0 != null ? plus_0.copy_i4bjg6$(tmp$_0, tmp$_2, tmp$_5, tmp$_6) : null) != null ? tmp$_7 : $receiver;
  }
  function protoSizeImpl_13($receiver) {
    var protoSize = 0;
    if ($receiver.name != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().stringSize_61zpoe$($receiver.name)) | 0;
    if ($receiver.number != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(2) + Sizer_getInstance().int32Size_za3lpa$($receiver.number)) | 0;
    if ($receiver.options != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(3) + Sizer_getInstance().messageSize_3k86cv$($receiver.options)) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_13($receiver, protoMarshal) {
    if ($receiver.name != null)
      protoMarshal.writeTag_za3lpa$(10).writeString_61zpoe$($receiver.name);
    if ($receiver.number != null)
      protoMarshal.writeTag_za3lpa$(16).writeInt32_za3lpa$($receiver.number);
    if ($receiver.options != null)
      protoMarshal.writeTag_za3lpa$(26).writeMessage_3k86cv$($receiver.options);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_13($receiver, protoUnmarshal) {
    var name = null;
    var number = null;
    var options = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new EnumValueDescriptorProto(name, number, options, protoUnmarshal.unknownFields());
        case 10:
          name = protoUnmarshal.readString();
          break;
        case 16:
          number = protoUnmarshal.readInt32();
          break;
        case 26:
          options = protoUnmarshal.readMessage_7rd7cm$(EnumValueOptions$Companion_getInstance());
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_14($receiver, plus_1) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    tmp$_0 = (tmp$ = plus_1.name) != null ? tmp$ : $receiver.name;
    tmp$_1 = plus_0($receiver.method, plus_1.method);
    tmp$_4 = (tmp$_3 = (tmp$_2 = $receiver.options) != null ? tmp$_2.plus_2gqcnw$(plus_1.options) : null) != null ? tmp$_3 : plus_1.options;
    tmp$_5 = plus($receiver.unknownFields, plus_1.unknownFields);
    return (tmp$_6 = plus_1 != null ? plus_1.copy_fbhpjt$(tmp$_0, tmp$_1, tmp$_4, tmp$_5) : null) != null ? tmp$_6 : $receiver;
  }
  function protoSizeImpl_14($receiver) {
    var protoSize = 0;
    if ($receiver.name != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().stringSize_61zpoe$($receiver.name)) | 0;
    if (!$receiver.method.isEmpty()) {
      var tmp$ = protoSize;
      var tmp$_0 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(2), $receiver.method.size);
      var $receiver_0 = $receiver.method;
      var selector = getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_1;
      var sum = 0;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        sum = sum + selector(element) | 0;
      }
      protoSize = tmp$ + (tmp$_0 + sum) | 0;
    }
    if ($receiver.options != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(3) + Sizer_getInstance().messageSize_3k86cv$($receiver.options)) | 0;
    var tmp$_2 = protoSize;
    var tmp$_3;
    var sum_0 = 0;
    tmp$_3 = $receiver.unknownFields.entries.iterator();
    while (tmp$_3.hasNext()) {
      var element_0 = tmp$_3.next();
      sum_0 = sum_0 + element_0.value.size() | 0;
    }
    protoSize = tmp$_2 + sum_0 | 0;
    return protoSize;
  }
  function protoMarshalImpl_14($receiver, protoMarshal) {
    if ($receiver.name != null)
      protoMarshal.writeTag_za3lpa$(10).writeString_61zpoe$($receiver.name);
    if (!$receiver.method.isEmpty()) {
      var tmp$;
      tmp$ = $receiver.method.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        protoMarshal.writeTag_za3lpa$(18).writeMessage_3k86cv$(element);
      }
    }
    if ($receiver.options != null)
      protoMarshal.writeTag_za3lpa$(26).writeMessage_3k86cv$($receiver.options);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_14($receiver, protoUnmarshal) {
    var name = null;
    var method = null;
    var options = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new ServiceDescriptorProto(name, ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(method), options, protoUnmarshal.unknownFields());
        case 10:
          name = protoUnmarshal.readString();
          break;
        case 18:
          method = protoUnmarshal.readRepeatedMessage_f2m3pm$(method, MethodDescriptorProto$Companion_getInstance(), true);
          break;
        case 26:
          options = protoUnmarshal.readMessage_7rd7cm$(ServiceOptions$Companion_getInstance());
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_15($receiver, plus_0) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
    tmp$_0 = (tmp$ = plus_0.name) != null ? tmp$ : $receiver.name;
    tmp$_2 = (tmp$_1 = plus_0.inputType) != null ? tmp$_1 : $receiver.inputType;
    tmp$_4 = (tmp$_3 = plus_0.outputType) != null ? tmp$_3 : $receiver.outputType;
    tmp$_7 = (tmp$_6 = (tmp$_5 = $receiver.options) != null ? tmp$_5.plus_2gqcnw$(plus_0.options) : null) != null ? tmp$_6 : plus_0.options;
    tmp$_9 = (tmp$_8 = plus_0.clientStreaming) != null ? tmp$_8 : $receiver.clientStreaming;
    tmp$_11 = (tmp$_10 = plus_0.serverStreaming) != null ? tmp$_10 : $receiver.serverStreaming;
    tmp$_12 = plus($receiver.unknownFields, plus_0.unknownFields);
    return (tmp$_13 = plus_0 != null ? plus_0.copy_txn7pa$(tmp$_0, tmp$_2, tmp$_4, tmp$_7, tmp$_9, tmp$_11, tmp$_12) : null) != null ? tmp$_13 : $receiver;
  }
  function protoSizeImpl_15($receiver) {
    var protoSize = 0;
    if ($receiver.name != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().stringSize_61zpoe$($receiver.name)) | 0;
    if ($receiver.inputType != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(2) + Sizer_getInstance().stringSize_61zpoe$($receiver.inputType)) | 0;
    if ($receiver.outputType != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(3) + Sizer_getInstance().stringSize_61zpoe$($receiver.outputType)) | 0;
    if ($receiver.options != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(4) + Sizer_getInstance().messageSize_3k86cv$($receiver.options)) | 0;
    if ($receiver.clientStreaming != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(5) + Sizer_getInstance().boolSize_6taknv$($receiver.clientStreaming)) | 0;
    if ($receiver.serverStreaming != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(6) + Sizer_getInstance().boolSize_6taknv$($receiver.serverStreaming)) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_15($receiver, protoMarshal) {
    if ($receiver.name != null)
      protoMarshal.writeTag_za3lpa$(10).writeString_61zpoe$($receiver.name);
    if ($receiver.inputType != null)
      protoMarshal.writeTag_za3lpa$(18).writeString_61zpoe$($receiver.inputType);
    if ($receiver.outputType != null)
      protoMarshal.writeTag_za3lpa$(26).writeString_61zpoe$($receiver.outputType);
    if ($receiver.options != null)
      protoMarshal.writeTag_za3lpa$(34).writeMessage_3k86cv$($receiver.options);
    if ($receiver.clientStreaming != null)
      protoMarshal.writeTag_za3lpa$(40).writeBool_6taknv$($receiver.clientStreaming);
    if ($receiver.serverStreaming != null)
      protoMarshal.writeTag_za3lpa$(48).writeBool_6taknv$($receiver.serverStreaming);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_15($receiver, protoUnmarshal) {
    var name = null;
    var inputType = null;
    var outputType = null;
    var options = null;
    var clientStreaming = null;
    var serverStreaming = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new MethodDescriptorProto(name, inputType, outputType, options, clientStreaming, serverStreaming, protoUnmarshal.unknownFields());
        case 10:
          name = protoUnmarshal.readString();
          break;
        case 18:
          inputType = protoUnmarshal.readString();
          break;
        case 26:
          outputType = protoUnmarshal.readString();
          break;
        case 34:
          options = protoUnmarshal.readMessage_7rd7cm$(MethodOptions$Companion_getInstance());
          break;
        case 40:
          clientStreaming = protoUnmarshal.readBool();
          break;
        case 48:
          serverStreaming = protoUnmarshal.readBool();
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_16($receiver, plus_1) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23, tmp$_24, tmp$_25, tmp$_26, tmp$_27, tmp$_28, tmp$_29, tmp$_30, tmp$_31, tmp$_32, tmp$_33, tmp$_34, tmp$_35, tmp$_36, tmp$_37;
    tmp$_0 = (tmp$ = plus_1.javaPackage) != null ? tmp$ : $receiver.javaPackage;
    tmp$_2 = (tmp$_1 = plus_1.javaOuterClassname) != null ? tmp$_1 : $receiver.javaOuterClassname;
    tmp$_4 = (tmp$_3 = plus_1.javaMultipleFiles) != null ? tmp$_3 : $receiver.javaMultipleFiles;
    tmp$_6 = (tmp$_5 = plus_1.javaGenerateEqualsAndHash) != null ? tmp$_5 : $receiver.javaGenerateEqualsAndHash;
    tmp$_8 = (tmp$_7 = plus_1.javaStringCheckUtf8) != null ? tmp$_7 : $receiver.javaStringCheckUtf8;
    tmp$_10 = (tmp$_9 = plus_1.optimizeFor) != null ? tmp$_9 : $receiver.optimizeFor;
    tmp$_12 = (tmp$_11 = plus_1.goPackage) != null ? tmp$_11 : $receiver.goPackage;
    tmp$_14 = (tmp$_13 = plus_1.ccGenericServices) != null ? tmp$_13 : $receiver.ccGenericServices;
    tmp$_16 = (tmp$_15 = plus_1.javaGenericServices) != null ? tmp$_15 : $receiver.javaGenericServices;
    tmp$_18 = (tmp$_17 = plus_1.pyGenericServices) != null ? tmp$_17 : $receiver.pyGenericServices;
    tmp$_20 = (tmp$_19 = plus_1.phpGenericServices) != null ? tmp$_19 : $receiver.phpGenericServices;
    tmp$_22 = (tmp$_21 = plus_1.deprecated) != null ? tmp$_21 : $receiver.deprecated;
    tmp$_24 = (tmp$_23 = plus_1.ccEnableArenas) != null ? tmp$_23 : $receiver.ccEnableArenas;
    tmp$_26 = (tmp$_25 = plus_1.objcClassPrefix) != null ? tmp$_25 : $receiver.objcClassPrefix;
    tmp$_28 = (tmp$_27 = plus_1.csharpNamespace) != null ? tmp$_27 : $receiver.csharpNamespace;
    tmp$_30 = (tmp$_29 = plus_1.swiftPrefix) != null ? tmp$_29 : $receiver.swiftPrefix;
    tmp$_32 = (tmp$_31 = plus_1.phpClassPrefix) != null ? tmp$_31 : $receiver.phpClassPrefix;
    tmp$_34 = (tmp$_33 = plus_1.phpNamespace) != null ? tmp$_33 : $receiver.phpNamespace;
    tmp$_35 = plus_0($receiver.uninterpretedOption, plus_1.uninterpretedOption);
    tmp$_36 = plus($receiver.unknownFields, plus_1.unknownFields);
    return (tmp$_37 = plus_1 != null ? plus_1.copy_qbus2p$(tmp$_0, tmp$_2, tmp$_4, tmp$_6, tmp$_8, tmp$_10, tmp$_12, tmp$_14, tmp$_16, tmp$_18, tmp$_20, tmp$_22, tmp$_24, tmp$_26, tmp$_28, tmp$_30, tmp$_32, tmp$_34, tmp$_35, tmp$_36) : null) != null ? tmp$_37 : $receiver;
  }
  function protoSizeImpl_16($receiver) {
    var protoSize = 0;
    if ($receiver.javaPackage != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().stringSize_61zpoe$($receiver.javaPackage)) | 0;
    if ($receiver.javaOuterClassname != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(8) + Sizer_getInstance().stringSize_61zpoe$($receiver.javaOuterClassname)) | 0;
    if ($receiver.javaMultipleFiles != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(10) + Sizer_getInstance().boolSize_6taknv$($receiver.javaMultipleFiles)) | 0;
    if ($receiver.javaGenerateEqualsAndHash != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(20) + Sizer_getInstance().boolSize_6taknv$($receiver.javaGenerateEqualsAndHash)) | 0;
    if ($receiver.javaStringCheckUtf8 != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(27) + Sizer_getInstance().boolSize_6taknv$($receiver.javaStringCheckUtf8)) | 0;
    if ($receiver.optimizeFor != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(9) + Sizer_getInstance().enumSize_do1vow$($receiver.optimizeFor)) | 0;
    if ($receiver.goPackage != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(11) + Sizer_getInstance().stringSize_61zpoe$($receiver.goPackage)) | 0;
    if ($receiver.ccGenericServices != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(16) + Sizer_getInstance().boolSize_6taknv$($receiver.ccGenericServices)) | 0;
    if ($receiver.javaGenericServices != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(17) + Sizer_getInstance().boolSize_6taknv$($receiver.javaGenericServices)) | 0;
    if ($receiver.pyGenericServices != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(18) + Sizer_getInstance().boolSize_6taknv$($receiver.pyGenericServices)) | 0;
    if ($receiver.phpGenericServices != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(42) + Sizer_getInstance().boolSize_6taknv$($receiver.phpGenericServices)) | 0;
    if ($receiver.deprecated != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(23) + Sizer_getInstance().boolSize_6taknv$($receiver.deprecated)) | 0;
    if ($receiver.ccEnableArenas != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(31) + Sizer_getInstance().boolSize_6taknv$($receiver.ccEnableArenas)) | 0;
    if ($receiver.objcClassPrefix != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(36) + Sizer_getInstance().stringSize_61zpoe$($receiver.objcClassPrefix)) | 0;
    if ($receiver.csharpNamespace != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(37) + Sizer_getInstance().stringSize_61zpoe$($receiver.csharpNamespace)) | 0;
    if ($receiver.swiftPrefix != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(39) + Sizer_getInstance().stringSize_61zpoe$($receiver.swiftPrefix)) | 0;
    if ($receiver.phpClassPrefix != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(40) + Sizer_getInstance().stringSize_61zpoe$($receiver.phpClassPrefix)) | 0;
    if ($receiver.phpNamespace != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(41) + Sizer_getInstance().stringSize_61zpoe$($receiver.phpNamespace)) | 0;
    if (!$receiver.uninterpretedOption.isEmpty()) {
      var tmp$ = protoSize;
      var tmp$_0 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(999), $receiver.uninterpretedOption.size);
      var $receiver_0 = $receiver.uninterpretedOption;
      var selector = getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_1;
      var sum = 0;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        sum = sum + selector(element) | 0;
      }
      protoSize = tmp$ + (tmp$_0 + sum) | 0;
    }
    var tmp$_2 = protoSize;
    var tmp$_3;
    var sum_0 = 0;
    tmp$_3 = $receiver.unknownFields.entries.iterator();
    while (tmp$_3.hasNext()) {
      var element_0 = tmp$_3.next();
      sum_0 = sum_0 + element_0.value.size() | 0;
    }
    protoSize = tmp$_2 + sum_0 | 0;
    return protoSize;
  }
  function protoMarshalImpl_16($receiver, protoMarshal) {
    if ($receiver.javaPackage != null)
      protoMarshal.writeTag_za3lpa$(10).writeString_61zpoe$($receiver.javaPackage);
    if ($receiver.javaOuterClassname != null)
      protoMarshal.writeTag_za3lpa$(66).writeString_61zpoe$($receiver.javaOuterClassname);
    if ($receiver.optimizeFor != null)
      protoMarshal.writeTag_za3lpa$(72).writeEnum_do1vow$($receiver.optimizeFor);
    if ($receiver.javaMultipleFiles != null)
      protoMarshal.writeTag_za3lpa$(80).writeBool_6taknv$($receiver.javaMultipleFiles);
    if ($receiver.goPackage != null)
      protoMarshal.writeTag_za3lpa$(90).writeString_61zpoe$($receiver.goPackage);
    if ($receiver.ccGenericServices != null)
      protoMarshal.writeTag_za3lpa$(128).writeBool_6taknv$($receiver.ccGenericServices);
    if ($receiver.javaGenericServices != null)
      protoMarshal.writeTag_za3lpa$(136).writeBool_6taknv$($receiver.javaGenericServices);
    if ($receiver.pyGenericServices != null)
      protoMarshal.writeTag_za3lpa$(144).writeBool_6taknv$($receiver.pyGenericServices);
    if ($receiver.javaGenerateEqualsAndHash != null)
      protoMarshal.writeTag_za3lpa$(160).writeBool_6taknv$($receiver.javaGenerateEqualsAndHash);
    if ($receiver.deprecated != null)
      protoMarshal.writeTag_za3lpa$(184).writeBool_6taknv$($receiver.deprecated);
    if ($receiver.javaStringCheckUtf8 != null)
      protoMarshal.writeTag_za3lpa$(216).writeBool_6taknv$($receiver.javaStringCheckUtf8);
    if ($receiver.ccEnableArenas != null)
      protoMarshal.writeTag_za3lpa$(248).writeBool_6taknv$($receiver.ccEnableArenas);
    if ($receiver.objcClassPrefix != null)
      protoMarshal.writeTag_za3lpa$(290).writeString_61zpoe$($receiver.objcClassPrefix);
    if ($receiver.csharpNamespace != null)
      protoMarshal.writeTag_za3lpa$(298).writeString_61zpoe$($receiver.csharpNamespace);
    if ($receiver.swiftPrefix != null)
      protoMarshal.writeTag_za3lpa$(314).writeString_61zpoe$($receiver.swiftPrefix);
    if ($receiver.phpClassPrefix != null)
      protoMarshal.writeTag_za3lpa$(322).writeString_61zpoe$($receiver.phpClassPrefix);
    if ($receiver.phpNamespace != null)
      protoMarshal.writeTag_za3lpa$(330).writeString_61zpoe$($receiver.phpNamespace);
    if ($receiver.phpGenericServices != null)
      protoMarshal.writeTag_za3lpa$(336).writeBool_6taknv$($receiver.phpGenericServices);
    if (!$receiver.uninterpretedOption.isEmpty()) {
      var tmp$;
      tmp$ = $receiver.uninterpretedOption.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        protoMarshal.writeTag_za3lpa$(7994).writeMessage_3k86cv$(element);
      }
    }
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_16($receiver, protoUnmarshal) {
    var javaPackage = null;
    var javaOuterClassname = null;
    var javaMultipleFiles = null;
    var javaGenerateEqualsAndHash = null;
    var javaStringCheckUtf8 = null;
    var optimizeFor = null;
    var goPackage = null;
    var ccGenericServices = null;
    var javaGenericServices = null;
    var pyGenericServices = null;
    var phpGenericServices = null;
    var deprecated = null;
    var ccEnableArenas = null;
    var objcClassPrefix = null;
    var csharpNamespace = null;
    var swiftPrefix = null;
    var phpClassPrefix = null;
    var phpNamespace = null;
    var uninterpretedOption = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new FileOptions(javaPackage, javaOuterClassname, javaMultipleFiles, javaGenerateEqualsAndHash, javaStringCheckUtf8, optimizeFor, goPackage, ccGenericServices, javaGenericServices, pyGenericServices, phpGenericServices, deprecated, ccEnableArenas, objcClassPrefix, csharpNamespace, swiftPrefix, phpClassPrefix, phpNamespace, ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(uninterpretedOption), protoUnmarshal.unknownFields());
        case 10:
          javaPackage = protoUnmarshal.readString();
          break;
        case 66:
          javaOuterClassname = protoUnmarshal.readString();
          break;
        case 72:
          optimizeFor = protoUnmarshal.readEnum_vjsov6$(FileOptions$OptimizeMode$Companion_getInstance());
          break;
        case 80:
          javaMultipleFiles = protoUnmarshal.readBool();
          break;
        case 90:
          goPackage = protoUnmarshal.readString();
          break;
        case 128:
          ccGenericServices = protoUnmarshal.readBool();
          break;
        case 136:
          javaGenericServices = protoUnmarshal.readBool();
          break;
        case 144:
          pyGenericServices = protoUnmarshal.readBool();
          break;
        case 160:
          javaGenerateEqualsAndHash = protoUnmarshal.readBool();
          break;
        case 184:
          deprecated = protoUnmarshal.readBool();
          break;
        case 216:
          javaStringCheckUtf8 = protoUnmarshal.readBool();
          break;
        case 248:
          ccEnableArenas = protoUnmarshal.readBool();
          break;
        case 290:
          objcClassPrefix = protoUnmarshal.readString();
          break;
        case 298:
          csharpNamespace = protoUnmarshal.readString();
          break;
        case 314:
          swiftPrefix = protoUnmarshal.readString();
          break;
        case 322:
          phpClassPrefix = protoUnmarshal.readString();
          break;
        case 330:
          phpNamespace = protoUnmarshal.readString();
          break;
        case 336:
          phpGenericServices = protoUnmarshal.readBool();
          break;
        case 7994:
          uninterpretedOption = protoUnmarshal.readRepeatedMessage_f2m3pm$(uninterpretedOption, UninterpretedOption$Companion_getInstance(), true);
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_17($receiver, plus_1) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9;
    tmp$_0 = (tmp$ = plus_1.messageSetWireFormat) != null ? tmp$ : $receiver.messageSetWireFormat;
    tmp$_2 = (tmp$_1 = plus_1.noStandardDescriptorAccessor) != null ? tmp$_1 : $receiver.noStandardDescriptorAccessor;
    tmp$_4 = (tmp$_3 = plus_1.deprecated) != null ? tmp$_3 : $receiver.deprecated;
    tmp$_6 = (tmp$_5 = plus_1.mapEntry) != null ? tmp$_5 : $receiver.mapEntry;
    tmp$_7 = plus_0($receiver.uninterpretedOption, plus_1.uninterpretedOption);
    tmp$_8 = plus($receiver.unknownFields, plus_1.unknownFields);
    return (tmp$_9 = plus_1 != null ? plus_1.copy_n2h1qe$(tmp$_0, tmp$_2, tmp$_4, tmp$_6, tmp$_7, tmp$_8) : null) != null ? tmp$_9 : $receiver;
  }
  function protoSizeImpl_17($receiver) {
    var protoSize = 0;
    if ($receiver.messageSetWireFormat != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().boolSize_6taknv$($receiver.messageSetWireFormat)) | 0;
    if ($receiver.noStandardDescriptorAccessor != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(2) + Sizer_getInstance().boolSize_6taknv$($receiver.noStandardDescriptorAccessor)) | 0;
    if ($receiver.deprecated != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(3) + Sizer_getInstance().boolSize_6taknv$($receiver.deprecated)) | 0;
    if ($receiver.mapEntry != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(7) + Sizer_getInstance().boolSize_6taknv$($receiver.mapEntry)) | 0;
    if (!$receiver.uninterpretedOption.isEmpty()) {
      var tmp$ = protoSize;
      var tmp$_0 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(999), $receiver.uninterpretedOption.size);
      var $receiver_0 = $receiver.uninterpretedOption;
      var selector = getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_1;
      var sum = 0;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        sum = sum + selector(element) | 0;
      }
      protoSize = tmp$ + (tmp$_0 + sum) | 0;
    }
    var tmp$_2 = protoSize;
    var tmp$_3;
    var sum_0 = 0;
    tmp$_3 = $receiver.unknownFields.entries.iterator();
    while (tmp$_3.hasNext()) {
      var element_0 = tmp$_3.next();
      sum_0 = sum_0 + element_0.value.size() | 0;
    }
    protoSize = tmp$_2 + sum_0 | 0;
    return protoSize;
  }
  function protoMarshalImpl_17($receiver, protoMarshal) {
    if ($receiver.messageSetWireFormat != null)
      protoMarshal.writeTag_za3lpa$(8).writeBool_6taknv$($receiver.messageSetWireFormat);
    if ($receiver.noStandardDescriptorAccessor != null)
      protoMarshal.writeTag_za3lpa$(16).writeBool_6taknv$($receiver.noStandardDescriptorAccessor);
    if ($receiver.deprecated != null)
      protoMarshal.writeTag_za3lpa$(24).writeBool_6taknv$($receiver.deprecated);
    if ($receiver.mapEntry != null)
      protoMarshal.writeTag_za3lpa$(56).writeBool_6taknv$($receiver.mapEntry);
    if (!$receiver.uninterpretedOption.isEmpty()) {
      var tmp$;
      tmp$ = $receiver.uninterpretedOption.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        protoMarshal.writeTag_za3lpa$(7994).writeMessage_3k86cv$(element);
      }
    }
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_17($receiver, protoUnmarshal) {
    var messageSetWireFormat = null;
    var noStandardDescriptorAccessor = null;
    var deprecated = null;
    var mapEntry = null;
    var uninterpretedOption = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new MessageOptions(messageSetWireFormat, noStandardDescriptorAccessor, deprecated, mapEntry, ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(uninterpretedOption), protoUnmarshal.unknownFields());
        case 8:
          messageSetWireFormat = protoUnmarshal.readBool();
          break;
        case 16:
          noStandardDescriptorAccessor = protoUnmarshal.readBool();
          break;
        case 24:
          deprecated = protoUnmarshal.readBool();
          break;
        case 56:
          mapEntry = protoUnmarshal.readBool();
          break;
        case 7994:
          uninterpretedOption = protoUnmarshal.readRepeatedMessage_f2m3pm$(uninterpretedOption, UninterpretedOption$Companion_getInstance(), true);
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_18($receiver, plus_1) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
    tmp$_0 = (tmp$ = plus_1.ctype) != null ? tmp$ : $receiver.ctype;
    tmp$_2 = (tmp$_1 = plus_1.packed) != null ? tmp$_1 : $receiver.packed;
    tmp$_4 = (tmp$_3 = plus_1.jstype) != null ? tmp$_3 : $receiver.jstype;
    tmp$_6 = (tmp$_5 = plus_1.lazy) != null ? tmp$_5 : $receiver.lazy;
    tmp$_8 = (tmp$_7 = plus_1.deprecated) != null ? tmp$_7 : $receiver.deprecated;
    tmp$_10 = (tmp$_9 = plus_1.weak) != null ? tmp$_9 : $receiver.weak;
    tmp$_11 = plus_0($receiver.uninterpretedOption, plus_1.uninterpretedOption);
    tmp$_12 = plus($receiver.unknownFields, plus_1.unknownFields);
    return (tmp$_13 = plus_1 != null ? plus_1.copy_6yit78$(tmp$_0, tmp$_2, tmp$_4, tmp$_6, tmp$_8, tmp$_10, tmp$_11, tmp$_12) : null) != null ? tmp$_13 : $receiver;
  }
  function protoSizeImpl_18($receiver) {
    var protoSize = 0;
    if ($receiver.ctype != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().enumSize_do1vow$($receiver.ctype)) | 0;
    if ($receiver.packed != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(2) + Sizer_getInstance().boolSize_6taknv$($receiver.packed)) | 0;
    if ($receiver.jstype != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(6) + Sizer_getInstance().enumSize_do1vow$($receiver.jstype)) | 0;
    if ($receiver.lazy != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(5) + Sizer_getInstance().boolSize_6taknv$($receiver.lazy)) | 0;
    if ($receiver.deprecated != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(3) + Sizer_getInstance().boolSize_6taknv$($receiver.deprecated)) | 0;
    if ($receiver.weak != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(10) + Sizer_getInstance().boolSize_6taknv$($receiver.weak)) | 0;
    if (!$receiver.uninterpretedOption.isEmpty()) {
      var tmp$ = protoSize;
      var tmp$_0 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(999), $receiver.uninterpretedOption.size);
      var $receiver_0 = $receiver.uninterpretedOption;
      var selector = getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_1;
      var sum = 0;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        sum = sum + selector(element) | 0;
      }
      protoSize = tmp$ + (tmp$_0 + sum) | 0;
    }
    var tmp$_2 = protoSize;
    var tmp$_3;
    var sum_0 = 0;
    tmp$_3 = $receiver.unknownFields.entries.iterator();
    while (tmp$_3.hasNext()) {
      var element_0 = tmp$_3.next();
      sum_0 = sum_0 + element_0.value.size() | 0;
    }
    protoSize = tmp$_2 + sum_0 | 0;
    return protoSize;
  }
  function protoMarshalImpl_18($receiver, protoMarshal) {
    if ($receiver.ctype != null)
      protoMarshal.writeTag_za3lpa$(8).writeEnum_do1vow$($receiver.ctype);
    if ($receiver.packed != null)
      protoMarshal.writeTag_za3lpa$(16).writeBool_6taknv$($receiver.packed);
    if ($receiver.deprecated != null)
      protoMarshal.writeTag_za3lpa$(24).writeBool_6taknv$($receiver.deprecated);
    if ($receiver.lazy != null)
      protoMarshal.writeTag_za3lpa$(40).writeBool_6taknv$($receiver.lazy);
    if ($receiver.jstype != null)
      protoMarshal.writeTag_za3lpa$(48).writeEnum_do1vow$($receiver.jstype);
    if ($receiver.weak != null)
      protoMarshal.writeTag_za3lpa$(80).writeBool_6taknv$($receiver.weak);
    if (!$receiver.uninterpretedOption.isEmpty()) {
      var tmp$;
      tmp$ = $receiver.uninterpretedOption.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        protoMarshal.writeTag_za3lpa$(7994).writeMessage_3k86cv$(element);
      }
    }
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_18($receiver, protoUnmarshal) {
    var ctype = null;
    var packed = null;
    var jstype = null;
    var lazy = null;
    var deprecated = null;
    var weak = null;
    var uninterpretedOption = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new FieldOptions(ctype, packed, jstype, lazy, deprecated, weak, ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(uninterpretedOption), protoUnmarshal.unknownFields());
        case 8:
          ctype = protoUnmarshal.readEnum_vjsov6$(FieldOptions$CType$Companion_getInstance());
          break;
        case 16:
          packed = protoUnmarshal.readBool();
          break;
        case 24:
          deprecated = protoUnmarshal.readBool();
          break;
        case 40:
          lazy = protoUnmarshal.readBool();
          break;
        case 48:
          jstype = protoUnmarshal.readEnum_vjsov6$(FieldOptions$JSType$Companion_getInstance());
          break;
        case 80:
          weak = protoUnmarshal.readBool();
          break;
        case 7994:
          uninterpretedOption = protoUnmarshal.readRepeatedMessage_f2m3pm$(uninterpretedOption, UninterpretedOption$Companion_getInstance(), true);
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_19($receiver, plus_1) {
    var tmp$;
    return (tmp$ = plus_1 != null ? plus_1.copy_zext2$(plus_0($receiver.uninterpretedOption, plus_1.uninterpretedOption), plus($receiver.unknownFields, plus_1.unknownFields)) : null) != null ? tmp$ : $receiver;
  }
  function protoSizeImpl_19($receiver) {
    var protoSize = 0;
    if (!$receiver.uninterpretedOption.isEmpty()) {
      var tmp$ = protoSize;
      var tmp$_0 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(999), $receiver.uninterpretedOption.size);
      var $receiver_0 = $receiver.uninterpretedOption;
      var selector = getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_1;
      var sum = 0;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        sum = sum + selector(element) | 0;
      }
      protoSize = tmp$ + (tmp$_0 + sum) | 0;
    }
    var tmp$_2 = protoSize;
    var tmp$_3;
    var sum_0 = 0;
    tmp$_3 = $receiver.unknownFields.entries.iterator();
    while (tmp$_3.hasNext()) {
      var element_0 = tmp$_3.next();
      sum_0 = sum_0 + element_0.value.size() | 0;
    }
    protoSize = tmp$_2 + sum_0 | 0;
    return protoSize;
  }
  function protoMarshalImpl_19($receiver, protoMarshal) {
    if (!$receiver.uninterpretedOption.isEmpty()) {
      var tmp$;
      tmp$ = $receiver.uninterpretedOption.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        protoMarshal.writeTag_za3lpa$(7994).writeMessage_3k86cv$(element);
      }
    }
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_19($receiver, protoUnmarshal) {
    var uninterpretedOption = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new OneofOptions(ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(uninterpretedOption), protoUnmarshal.unknownFields());
        case 7994:
          uninterpretedOption = protoUnmarshal.readRepeatedMessage_f2m3pm$(uninterpretedOption, UninterpretedOption$Companion_getInstance(), true);
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_20($receiver, plus_1) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    tmp$_0 = (tmp$ = plus_1.allowAlias) != null ? tmp$ : $receiver.allowAlias;
    tmp$_2 = (tmp$_1 = plus_1.deprecated) != null ? tmp$_1 : $receiver.deprecated;
    tmp$_3 = plus_0($receiver.uninterpretedOption, plus_1.uninterpretedOption);
    tmp$_4 = plus($receiver.unknownFields, plus_1.unknownFields);
    return (tmp$_5 = plus_1 != null ? plus_1.copy_pjbnme$(tmp$_0, tmp$_2, tmp$_3, tmp$_4) : null) != null ? tmp$_5 : $receiver;
  }
  function protoSizeImpl_20($receiver) {
    var protoSize = 0;
    if ($receiver.allowAlias != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(2) + Sizer_getInstance().boolSize_6taknv$($receiver.allowAlias)) | 0;
    if ($receiver.deprecated != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(3) + Sizer_getInstance().boolSize_6taknv$($receiver.deprecated)) | 0;
    if (!$receiver.uninterpretedOption.isEmpty()) {
      var tmp$ = protoSize;
      var tmp$_0 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(999), $receiver.uninterpretedOption.size);
      var $receiver_0 = $receiver.uninterpretedOption;
      var selector = getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_1;
      var sum = 0;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        sum = sum + selector(element) | 0;
      }
      protoSize = tmp$ + (tmp$_0 + sum) | 0;
    }
    var tmp$_2 = protoSize;
    var tmp$_3;
    var sum_0 = 0;
    tmp$_3 = $receiver.unknownFields.entries.iterator();
    while (tmp$_3.hasNext()) {
      var element_0 = tmp$_3.next();
      sum_0 = sum_0 + element_0.value.size() | 0;
    }
    protoSize = tmp$_2 + sum_0 | 0;
    return protoSize;
  }
  function protoMarshalImpl_20($receiver, protoMarshal) {
    if ($receiver.allowAlias != null)
      protoMarshal.writeTag_za3lpa$(16).writeBool_6taknv$($receiver.allowAlias);
    if ($receiver.deprecated != null)
      protoMarshal.writeTag_za3lpa$(24).writeBool_6taknv$($receiver.deprecated);
    if (!$receiver.uninterpretedOption.isEmpty()) {
      var tmp$;
      tmp$ = $receiver.uninterpretedOption.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        protoMarshal.writeTag_za3lpa$(7994).writeMessage_3k86cv$(element);
      }
    }
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_20($receiver, protoUnmarshal) {
    var allowAlias = null;
    var deprecated = null;
    var uninterpretedOption = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new EnumOptions(allowAlias, deprecated, ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(uninterpretedOption), protoUnmarshal.unknownFields());
        case 16:
          allowAlias = protoUnmarshal.readBool();
          break;
        case 24:
          deprecated = protoUnmarshal.readBool();
          break;
        case 7994:
          uninterpretedOption = protoUnmarshal.readRepeatedMessage_f2m3pm$(uninterpretedOption, UninterpretedOption$Companion_getInstance(), true);
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_21($receiver, plus_1) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$_0 = (tmp$ = plus_1.deprecated) != null ? tmp$ : $receiver.deprecated;
    tmp$_1 = plus_0($receiver.uninterpretedOption, plus_1.uninterpretedOption);
    tmp$_2 = plus($receiver.unknownFields, plus_1.unknownFields);
    return (tmp$_3 = plus_1 != null ? plus_1.copy_obiyym$(tmp$_0, tmp$_1, tmp$_2) : null) != null ? tmp$_3 : $receiver;
  }
  function protoSizeImpl_21($receiver) {
    var protoSize = 0;
    if ($receiver.deprecated != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().boolSize_6taknv$($receiver.deprecated)) | 0;
    if (!$receiver.uninterpretedOption.isEmpty()) {
      var tmp$ = protoSize;
      var tmp$_0 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(999), $receiver.uninterpretedOption.size);
      var $receiver_0 = $receiver.uninterpretedOption;
      var selector = getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_1;
      var sum = 0;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        sum = sum + selector(element) | 0;
      }
      protoSize = tmp$ + (tmp$_0 + sum) | 0;
    }
    var tmp$_2 = protoSize;
    var tmp$_3;
    var sum_0 = 0;
    tmp$_3 = $receiver.unknownFields.entries.iterator();
    while (tmp$_3.hasNext()) {
      var element_0 = tmp$_3.next();
      sum_0 = sum_0 + element_0.value.size() | 0;
    }
    protoSize = tmp$_2 + sum_0 | 0;
    return protoSize;
  }
  function protoMarshalImpl_21($receiver, protoMarshal) {
    if ($receiver.deprecated != null)
      protoMarshal.writeTag_za3lpa$(8).writeBool_6taknv$($receiver.deprecated);
    if (!$receiver.uninterpretedOption.isEmpty()) {
      var tmp$;
      tmp$ = $receiver.uninterpretedOption.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        protoMarshal.writeTag_za3lpa$(7994).writeMessage_3k86cv$(element);
      }
    }
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_21($receiver, protoUnmarshal) {
    var deprecated = null;
    var uninterpretedOption = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new EnumValueOptions(deprecated, ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(uninterpretedOption), protoUnmarshal.unknownFields());
        case 8:
          deprecated = protoUnmarshal.readBool();
          break;
        case 7994:
          uninterpretedOption = protoUnmarshal.readRepeatedMessage_f2m3pm$(uninterpretedOption, UninterpretedOption$Companion_getInstance(), true);
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_22($receiver, plus_1) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$_0 = (tmp$ = plus_1.deprecated) != null ? tmp$ : $receiver.deprecated;
    tmp$_1 = plus_0($receiver.uninterpretedOption, plus_1.uninterpretedOption);
    tmp$_2 = plus($receiver.unknownFields, plus_1.unknownFields);
    return (tmp$_3 = plus_1 != null ? plus_1.copy_obiyym$(tmp$_0, tmp$_1, tmp$_2) : null) != null ? tmp$_3 : $receiver;
  }
  function protoSizeImpl_22($receiver) {
    var protoSize = 0;
    if ($receiver.deprecated != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(33) + Sizer_getInstance().boolSize_6taknv$($receiver.deprecated)) | 0;
    if (!$receiver.uninterpretedOption.isEmpty()) {
      var tmp$ = protoSize;
      var tmp$_0 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(999), $receiver.uninterpretedOption.size);
      var $receiver_0 = $receiver.uninterpretedOption;
      var selector = getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_1;
      var sum = 0;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        sum = sum + selector(element) | 0;
      }
      protoSize = tmp$ + (tmp$_0 + sum) | 0;
    }
    var tmp$_2 = protoSize;
    var tmp$_3;
    var sum_0 = 0;
    tmp$_3 = $receiver.unknownFields.entries.iterator();
    while (tmp$_3.hasNext()) {
      var element_0 = tmp$_3.next();
      sum_0 = sum_0 + element_0.value.size() | 0;
    }
    protoSize = tmp$_2 + sum_0 | 0;
    return protoSize;
  }
  function protoMarshalImpl_22($receiver, protoMarshal) {
    if ($receiver.deprecated != null)
      protoMarshal.writeTag_za3lpa$(264).writeBool_6taknv$($receiver.deprecated);
    if (!$receiver.uninterpretedOption.isEmpty()) {
      var tmp$;
      tmp$ = $receiver.uninterpretedOption.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        protoMarshal.writeTag_za3lpa$(7994).writeMessage_3k86cv$(element);
      }
    }
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_22($receiver, protoUnmarshal) {
    var deprecated = null;
    var uninterpretedOption = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new ServiceOptions(deprecated, ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(uninterpretedOption), protoUnmarshal.unknownFields());
        case 264:
          deprecated = protoUnmarshal.readBool();
          break;
        case 7994:
          uninterpretedOption = protoUnmarshal.readRepeatedMessage_f2m3pm$(uninterpretedOption, UninterpretedOption$Companion_getInstance(), true);
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_23($receiver, plus_1) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    tmp$_0 = (tmp$ = plus_1.deprecated) != null ? tmp$ : $receiver.deprecated;
    tmp$_2 = (tmp$_1 = plus_1.idempotencyLevel) != null ? tmp$_1 : $receiver.idempotencyLevel;
    tmp$_3 = plus_0($receiver.uninterpretedOption, plus_1.uninterpretedOption);
    tmp$_4 = plus($receiver.unknownFields, plus_1.unknownFields);
    return (tmp$_5 = plus_1 != null ? plus_1.copy_mxmu3d$(tmp$_0, tmp$_2, tmp$_3, tmp$_4) : null) != null ? tmp$_5 : $receiver;
  }
  function protoSizeImpl_23($receiver) {
    var protoSize = 0;
    if ($receiver.deprecated != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(33) + Sizer_getInstance().boolSize_6taknv$($receiver.deprecated)) | 0;
    if ($receiver.idempotencyLevel != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(34) + Sizer_getInstance().enumSize_do1vow$($receiver.idempotencyLevel)) | 0;
    if (!$receiver.uninterpretedOption.isEmpty()) {
      var tmp$ = protoSize;
      var tmp$_0 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(999), $receiver.uninterpretedOption.size);
      var $receiver_0 = $receiver.uninterpretedOption;
      var selector = getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_1;
      var sum = 0;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        sum = sum + selector(element) | 0;
      }
      protoSize = tmp$ + (tmp$_0 + sum) | 0;
    }
    var tmp$_2 = protoSize;
    var tmp$_3;
    var sum_0 = 0;
    tmp$_3 = $receiver.unknownFields.entries.iterator();
    while (tmp$_3.hasNext()) {
      var element_0 = tmp$_3.next();
      sum_0 = sum_0 + element_0.value.size() | 0;
    }
    protoSize = tmp$_2 + sum_0 | 0;
    return protoSize;
  }
  function protoMarshalImpl_23($receiver, protoMarshal) {
    if ($receiver.deprecated != null)
      protoMarshal.writeTag_za3lpa$(264).writeBool_6taknv$($receiver.deprecated);
    if ($receiver.idempotencyLevel != null)
      protoMarshal.writeTag_za3lpa$(272).writeEnum_do1vow$($receiver.idempotencyLevel);
    if (!$receiver.uninterpretedOption.isEmpty()) {
      var tmp$;
      tmp$ = $receiver.uninterpretedOption.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        protoMarshal.writeTag_za3lpa$(7994).writeMessage_3k86cv$(element);
      }
    }
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_23($receiver, protoUnmarshal) {
    var deprecated = null;
    var idempotencyLevel = null;
    var uninterpretedOption = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new MethodOptions(deprecated, idempotencyLevel, ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(uninterpretedOption), protoUnmarshal.unknownFields());
        case 264:
          deprecated = protoUnmarshal.readBool();
          break;
        case 272:
          idempotencyLevel = protoUnmarshal.readEnum_vjsov6$(MethodOptions$IdempotencyLevel$Companion_getInstance());
          break;
        case 7994:
          uninterpretedOption = protoUnmarshal.readRepeatedMessage_f2m3pm$(uninterpretedOption, UninterpretedOption$Companion_getInstance(), true);
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_24($receiver, plus_1) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
    tmp$ = plus_0($receiver.name, plus_1.name);
    tmp$_1 = (tmp$_0 = plus_1.identifierValue) != null ? tmp$_0 : $receiver.identifierValue;
    tmp$_3 = (tmp$_2 = plus_1.positiveIntValue) != null ? tmp$_2 : $receiver.positiveIntValue;
    tmp$_5 = (tmp$_4 = plus_1.negativeIntValue) != null ? tmp$_4 : $receiver.negativeIntValue;
    tmp$_7 = (tmp$_6 = plus_1.doubleValue) != null ? tmp$_6 : $receiver.doubleValue;
    tmp$_9 = (tmp$_8 = plus_1.stringValue) != null ? tmp$_8 : $receiver.stringValue;
    tmp$_11 = (tmp$_10 = plus_1.aggregateValue) != null ? tmp$_10 : $receiver.aggregateValue;
    tmp$_12 = plus($receiver.unknownFields, plus_1.unknownFields);
    return (tmp$_13 = plus_1 != null ? plus_1.copy_dbwu8b$(tmp$, tmp$_1, tmp$_3, tmp$_5, tmp$_7, tmp$_9, tmp$_11, tmp$_12) : null) != null ? tmp$_13 : $receiver;
  }
  function protoSizeImpl_24($receiver) {
    var protoSize = 0;
    if (!$receiver.name.isEmpty()) {
      var tmp$ = protoSize;
      var tmp$_0 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(2), $receiver.name.size);
      var $receiver_0 = $receiver.name;
      var selector = getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_1;
      var sum = 0;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        sum = sum + selector(element) | 0;
      }
      protoSize = tmp$ + (tmp$_0 + sum) | 0;
    }
    if ($receiver.identifierValue != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(3) + Sizer_getInstance().stringSize_61zpoe$($receiver.identifierValue)) | 0;
    if ($receiver.positiveIntValue != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(4) + Sizer_getInstance().uInt64Size_s8cxhz$($receiver.positiveIntValue)) | 0;
    if ($receiver.negativeIntValue != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(5) + Sizer_getInstance().int64Size_s8cxhz$($receiver.negativeIntValue)) | 0;
    if ($receiver.doubleValue != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(6) + Sizer_getInstance().doubleSize_14dthe$($receiver.doubleValue)) | 0;
    if ($receiver.stringValue != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(7) + Sizer_getInstance().bytesSize_w7fipb$($receiver.stringValue)) | 0;
    if ($receiver.aggregateValue != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(8) + Sizer_getInstance().stringSize_61zpoe$($receiver.aggregateValue)) | 0;
    var tmp$_2 = protoSize;
    var tmp$_3;
    var sum_0 = 0;
    tmp$_3 = $receiver.unknownFields.entries.iterator();
    while (tmp$_3.hasNext()) {
      var element_0 = tmp$_3.next();
      sum_0 = sum_0 + element_0.value.size() | 0;
    }
    protoSize = tmp$_2 + sum_0 | 0;
    return protoSize;
  }
  function protoMarshalImpl_24($receiver, protoMarshal) {
    if (!$receiver.name.isEmpty()) {
      var tmp$;
      tmp$ = $receiver.name.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        protoMarshal.writeTag_za3lpa$(18).writeMessage_3k86cv$(element);
      }
    }
    if ($receiver.identifierValue != null)
      protoMarshal.writeTag_za3lpa$(26).writeString_61zpoe$($receiver.identifierValue);
    if ($receiver.positiveIntValue != null)
      protoMarshal.writeTag_za3lpa$(32).writeUInt64_s8cxhz$($receiver.positiveIntValue);
    if ($receiver.negativeIntValue != null)
      protoMarshal.writeTag_za3lpa$(40).writeInt64_s8cxhz$($receiver.negativeIntValue);
    if ($receiver.doubleValue != null)
      protoMarshal.writeTag_za3lpa$(49).writeDouble_14dthe$($receiver.doubleValue);
    if ($receiver.stringValue != null)
      protoMarshal.writeTag_za3lpa$(58).writeBytes_w7fipb$($receiver.stringValue);
    if ($receiver.aggregateValue != null)
      protoMarshal.writeTag_za3lpa$(66).writeString_61zpoe$($receiver.aggregateValue);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_24($receiver, protoUnmarshal) {
    var name = null;
    var identifierValue = null;
    var positiveIntValue = null;
    var negativeIntValue = null;
    var doubleValue = null;
    var stringValue = null;
    var aggregateValue = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new UninterpretedOption(ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(name), identifierValue, positiveIntValue, negativeIntValue, doubleValue, stringValue, aggregateValue, protoUnmarshal.unknownFields());
        case 18:
          name = protoUnmarshal.readRepeatedMessage_f2m3pm$(name, UninterpretedOption$NamePart$Companion_getInstance(), true);
          break;
        case 26:
          identifierValue = protoUnmarshal.readString();
          break;
        case 32:
          positiveIntValue = protoUnmarshal.readUInt64();
          break;
        case 40:
          negativeIntValue = protoUnmarshal.readInt64();
          break;
        case 49:
          doubleValue = protoUnmarshal.readDouble();
          break;
        case 58:
          stringValue = protoUnmarshal.readBytes();
          break;
        case 66:
          aggregateValue = protoUnmarshal.readString();
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_25($receiver, plus_0) {
    var tmp$;
    return (tmp$ = plus_0 != null ? plus_0.copy_ixmf62$(void 0, void 0, plus($receiver.unknownFields, plus_0.unknownFields)) : null) != null ? tmp$ : $receiver;
  }
  function protoSizeImpl_25($receiver) {
    var protoSize = 0;
    if ($receiver.namePart.length > 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().stringSize_61zpoe$($receiver.namePart)) | 0;
    if ($receiver.isExtension)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(2) + Sizer_getInstance().boolSize_6taknv$($receiver.isExtension)) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_25($receiver, protoMarshal) {
    if ($receiver.namePart.length > 0)
      protoMarshal.writeTag_za3lpa$(10).writeString_61zpoe$($receiver.namePart);
    if ($receiver.isExtension)
      protoMarshal.writeTag_za3lpa$(16).writeBool_6taknv$($receiver.isExtension);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_25($receiver, protoUnmarshal) {
    var namePart = '';
    var isExtension = false;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new UninterpretedOption$NamePart(namePart, isExtension, protoUnmarshal.unknownFields());
        case 10:
          namePart = protoUnmarshal.readString();
          break;
        case 16:
          isExtension = protoUnmarshal.readBool();
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_26($receiver, plus_1) {
    var tmp$;
    return (tmp$ = plus_1 != null ? plus_1.copy_mpwgc5$(plus_0($receiver.location, plus_1.location), plus($receiver.unknownFields, plus_1.unknownFields)) : null) != null ? tmp$ : $receiver;
  }
  function protoSizeImpl_26($receiver) {
    var protoSize = 0;
    if (!$receiver.location.isEmpty()) {
      var tmp$ = protoSize;
      var tmp$_0 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(1), $receiver.location.size);
      var $receiver_0 = $receiver.location;
      var selector = getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_1;
      var sum = 0;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        sum = sum + selector(element) | 0;
      }
      protoSize = tmp$ + (tmp$_0 + sum) | 0;
    }
    var tmp$_2 = protoSize;
    var tmp$_3;
    var sum_0 = 0;
    tmp$_3 = $receiver.unknownFields.entries.iterator();
    while (tmp$_3.hasNext()) {
      var element_0 = tmp$_3.next();
      sum_0 = sum_0 + element_0.value.size() | 0;
    }
    protoSize = tmp$_2 + sum_0 | 0;
    return protoSize;
  }
  function protoMarshalImpl_26($receiver, protoMarshal) {
    if (!$receiver.location.isEmpty()) {
      var tmp$;
      tmp$ = $receiver.location.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        protoMarshal.writeTag_za3lpa$(10).writeMessage_3k86cv$(element);
      }
    }
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_26($receiver, protoUnmarshal) {
    var location = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new SourceCodeInfo(ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(location), protoUnmarshal.unknownFields());
        case 10:
          location = protoUnmarshal.readRepeatedMessage_f2m3pm$(location, SourceCodeInfo$Location$Companion_getInstance(), true);
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_27($receiver, plus_1) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    tmp$ = plus_0($receiver.path, plus_1.path);
    tmp$_0 = plus_0($receiver.span, plus_1.span);
    tmp$_2 = (tmp$_1 = plus_1.leadingComments) != null ? tmp$_1 : $receiver.leadingComments;
    tmp$_4 = (tmp$_3 = plus_1.trailingComments) != null ? tmp$_3 : $receiver.trailingComments;
    tmp$_5 = plus_0($receiver.leadingDetachedComments, plus_1.leadingDetachedComments);
    tmp$_6 = plus($receiver.unknownFields, plus_1.unknownFields);
    return (tmp$_7 = plus_1 != null ? plus_1.copy_f2pjg$(tmp$, tmp$_0, tmp$_2, tmp$_4, tmp$_5, tmp$_6) : null) != null ? tmp$_7 : $receiver;
  }
  function protoSizeImpl_27($receiver) {
    var protoSize = 0;
    if (!$receiver.path.isEmpty())
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().packedRepeatedSize_juvmgx$($receiver.path, getCallableRef('int32Size', function ($receiver, value) {
        return $receiver.int32Size_za3lpa$(value);
      }.bind(null, Sizer_getInstance())))) | 0;
    if (!$receiver.span.isEmpty())
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(2) + Sizer_getInstance().packedRepeatedSize_juvmgx$($receiver.span, getCallableRef('int32Size', function ($receiver, value) {
        return $receiver.int32Size_za3lpa$(value);
      }.bind(null, Sizer_getInstance())))) | 0;
    if ($receiver.leadingComments != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(3) + Sizer_getInstance().stringSize_61zpoe$($receiver.leadingComments)) | 0;
    if ($receiver.trailingComments != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(4) + Sizer_getInstance().stringSize_61zpoe$($receiver.trailingComments)) | 0;
    if (!$receiver.leadingDetachedComments.isEmpty()) {
      var tmp$ = protoSize;
      var tmp$_0 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(6), $receiver.leadingDetachedComments.size);
      var $receiver_0 = $receiver.leadingDetachedComments;
      var selector = getCallableRef('stringSize', function ($receiver, value) {
        return $receiver.stringSize_61zpoe$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_1;
      var sum = 0;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        sum = sum + selector(element) | 0;
      }
      protoSize = tmp$ + (tmp$_0 + sum) | 0;
    }
    var tmp$_2 = protoSize;
    var tmp$_3;
    var sum_0 = 0;
    tmp$_3 = $receiver.unknownFields.entries.iterator();
    while (tmp$_3.hasNext()) {
      var element_0 = tmp$_3.next();
      sum_0 = sum_0 + element_0.value.size() | 0;
    }
    protoSize = tmp$_2 + sum_0 | 0;
    return protoSize;
  }
  function protoMarshalImpl_27($receiver, protoMarshal) {
    if (!$receiver.path.isEmpty())
      protoMarshal.writeTag_za3lpa$(10).writePackedRepeated_w6577c$($receiver.path, getCallableRef('int32Size', function ($receiver, value) {
        return $receiver.int32Size_za3lpa$(value);
      }.bind(null, Sizer_getInstance())), getCallableRef('writeInt32', function ($receiver, value) {
        return $receiver.writeInt32_za3lpa$(value), Unit;
      }.bind(null, protoMarshal)));
    if (!$receiver.span.isEmpty())
      protoMarshal.writeTag_za3lpa$(18).writePackedRepeated_w6577c$($receiver.span, getCallableRef('int32Size', function ($receiver, value) {
        return $receiver.int32Size_za3lpa$(value);
      }.bind(null, Sizer_getInstance())), getCallableRef('writeInt32', function ($receiver, value) {
        return $receiver.writeInt32_za3lpa$(value), Unit;
      }.bind(null, protoMarshal)));
    if ($receiver.leadingComments != null)
      protoMarshal.writeTag_za3lpa$(26).writeString_61zpoe$($receiver.leadingComments);
    if ($receiver.trailingComments != null)
      protoMarshal.writeTag_za3lpa$(34).writeString_61zpoe$($receiver.trailingComments);
    if (!$receiver.leadingDetachedComments.isEmpty()) {
      var tmp$;
      tmp$ = $receiver.leadingDetachedComments.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        protoMarshal.writeTag_za3lpa$(50).writeString_61zpoe$(element);
      }
    }
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_27($receiver, protoUnmarshal) {
    var path = null;
    var span = null;
    var leadingComments = null;
    var trailingComments = null;
    var leadingDetachedComments = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new SourceCodeInfo$Location(ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(path), ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(span), leadingComments, trailingComments, ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(leadingDetachedComments), protoUnmarshal.unknownFields());
        case 10:
        case 8:
          path = protoUnmarshal.readRepeated_2nrlh4$(path, getCallableRef('readInt32', function ($receiver) {
            return $receiver.readInt32();
          }.bind(null, protoUnmarshal)), false);
          break;
        case 18:
        case 16:
          span = protoUnmarshal.readRepeated_2nrlh4$(span, getCallableRef('readInt32', function ($receiver) {
            return $receiver.readInt32();
          }.bind(null, protoUnmarshal)), false);
          break;
        case 26:
          leadingComments = protoUnmarshal.readString();
          break;
        case 34:
          trailingComments = protoUnmarshal.readString();
          break;
        case 50:
          leadingDetachedComments = protoUnmarshal.readRepeated_2nrlh4$(leadingDetachedComments, getCallableRef('readString', function ($receiver) {
            return $receiver.readString();
          }.bind(null, protoUnmarshal)), true);
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_28($receiver, plus_1) {
    var tmp$;
    return (tmp$ = plus_1 != null ? plus_1.copy_r1ibux$(plus_0($receiver.annotation, plus_1.annotation), plus($receiver.unknownFields, plus_1.unknownFields)) : null) != null ? tmp$ : $receiver;
  }
  function protoSizeImpl_28($receiver) {
    var protoSize = 0;
    if (!$receiver.annotation.isEmpty()) {
      var tmp$ = protoSize;
      var tmp$_0 = Kotlin.imul(Sizer_getInstance().tagSize_za3lpa$(1), $receiver.annotation.size);
      var $receiver_0 = $receiver.annotation;
      var selector = getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance()));
      var tmp$_1;
      var sum = 0;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        sum = sum + selector(element) | 0;
      }
      protoSize = tmp$ + (tmp$_0 + sum) | 0;
    }
    var tmp$_2 = protoSize;
    var tmp$_3;
    var sum_0 = 0;
    tmp$_3 = $receiver.unknownFields.entries.iterator();
    while (tmp$_3.hasNext()) {
      var element_0 = tmp$_3.next();
      sum_0 = sum_0 + element_0.value.size() | 0;
    }
    protoSize = tmp$_2 + sum_0 | 0;
    return protoSize;
  }
  function protoMarshalImpl_28($receiver, protoMarshal) {
    if (!$receiver.annotation.isEmpty()) {
      var tmp$;
      tmp$ = $receiver.annotation.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        protoMarshal.writeTag_za3lpa$(10).writeMessage_3k86cv$(element);
      }
    }
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_28($receiver, protoUnmarshal) {
    var annotation = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new GeneratedCodeInfo(ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(annotation), protoUnmarshal.unknownFields());
        case 10:
          annotation = protoUnmarshal.readRepeatedMessage_f2m3pm$(annotation, GeneratedCodeInfo$Annotation$Companion_getInstance(), true);
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_29($receiver, plus_1) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    tmp$ = plus_0($receiver.path, plus_1.path);
    tmp$_1 = (tmp$_0 = plus_1.sourceFile) != null ? tmp$_0 : $receiver.sourceFile;
    tmp$_3 = (tmp$_2 = plus_1.begin) != null ? tmp$_2 : $receiver.begin;
    tmp$_5 = (tmp$_4 = plus_1.end) != null ? tmp$_4 : $receiver.end;
    tmp$_6 = plus($receiver.unknownFields, plus_1.unknownFields);
    return (tmp$_7 = plus_1 != null ? plus_1.copy_nxgfyx$(tmp$, tmp$_1, tmp$_3, tmp$_5, tmp$_6) : null) != null ? tmp$_7 : $receiver;
  }
  function protoSizeImpl_29($receiver) {
    var protoSize = 0;
    if (!$receiver.path.isEmpty())
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().packedRepeatedSize_juvmgx$($receiver.path, getCallableRef('int32Size', function ($receiver, value) {
        return $receiver.int32Size_za3lpa$(value);
      }.bind(null, Sizer_getInstance())))) | 0;
    if ($receiver.sourceFile != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(2) + Sizer_getInstance().stringSize_61zpoe$($receiver.sourceFile)) | 0;
    if ($receiver.begin != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(3) + Sizer_getInstance().int32Size_za3lpa$($receiver.begin)) | 0;
    if ($receiver.end != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(4) + Sizer_getInstance().int32Size_za3lpa$($receiver.end)) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_29($receiver, protoMarshal) {
    if (!$receiver.path.isEmpty())
      protoMarshal.writeTag_za3lpa$(10).writePackedRepeated_w6577c$($receiver.path, getCallableRef('int32Size', function ($receiver, value) {
        return $receiver.int32Size_za3lpa$(value);
      }.bind(null, Sizer_getInstance())), getCallableRef('writeInt32', function ($receiver, value) {
        return $receiver.writeInt32_za3lpa$(value), Unit;
      }.bind(null, protoMarshal)));
    if ($receiver.sourceFile != null)
      protoMarshal.writeTag_za3lpa$(18).writeString_61zpoe$($receiver.sourceFile);
    if ($receiver.begin != null)
      protoMarshal.writeTag_za3lpa$(24).writeInt32_za3lpa$($receiver.begin);
    if ($receiver.end != null)
      protoMarshal.writeTag_za3lpa$(32).writeInt32_za3lpa$($receiver.end);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_29($receiver, protoUnmarshal) {
    var path = null;
    var sourceFile = null;
    var begin = null;
    var end = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new GeneratedCodeInfo$Annotation(ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(path), sourceFile, begin, end, protoUnmarshal.unknownFields());
        case 10:
        case 8:
          path = protoUnmarshal.readRepeated_2nrlh4$(path, getCallableRef('readInt32', function ($receiver) {
            return $receiver.readInt32();
          }.bind(null, protoUnmarshal)), false);
          break;
        case 18:
          sourceFile = protoUnmarshal.readString();
          break;
        case 24:
          begin = protoUnmarshal.readInt32();
          break;
        case 32:
          end = protoUnmarshal.readInt32();
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function Duration(seconds, nanos, unknownFields) {
    Duration$Companion_getInstance();
    if (seconds === void 0)
      seconds = L0;
    if (nanos === void 0)
      nanos = 0;
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.seconds = seconds;
    this.nanos = nanos;
    this.unknownFields = unknownFields;
    this.protoSize_oy8ccr$_0 = lazy(Duration$protoSize$lambda(this));
  }
  Duration.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_30(this, other);
  };
  Object.defineProperty(Duration.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_oy8ccr$_0.value;
    }
  });
  Duration.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_30(this, m);
  };
  function Duration$Companion() {
    Duration$Companion_instance = this;
  }
  Duration$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_30(Duration$Companion_getInstance(), u);
  };
  Duration$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var Duration$Companion_instance = null;
  function Duration$Companion_getInstance() {
    if (Duration$Companion_instance === null) {
      new Duration$Companion();
    }
    return Duration$Companion_instance;
  }
  function Duration$protoSize$lambda(this$Duration) {
    return function () {
      return protoSizeImpl_30(this$Duration);
    };
  }
  Duration.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Duration',
    interfaces: [Message]
  };
  Duration.prototype.component1 = function () {
    return this.seconds;
  };
  Duration.prototype.component2 = function () {
    return this.nanos;
  };
  Duration.prototype.component3 = function () {
    return this.unknownFields;
  };
  Duration.prototype.copy_4wkohy$ = function (seconds, nanos, unknownFields) {
    return new Duration(seconds === void 0 ? this.seconds : seconds, nanos === void 0 ? this.nanos : nanos, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  Duration.prototype.toString = function () {
    return 'Duration(seconds=' + Kotlin.toString(this.seconds) + (', nanos=' + Kotlin.toString(this.nanos)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  Duration.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.seconds) | 0;
    result = result * 31 + Kotlin.hashCode(this.nanos) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  Duration.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.seconds, other.seconds) && Kotlin.equals(this.nanos, other.nanos) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function protoMergeImpl_30($receiver, plus_0) {
    var tmp$;
    return (tmp$ = plus_0 != null ? plus_0.copy_4wkohy$(void 0, void 0, plus($receiver.unknownFields, plus_0.unknownFields)) : null) != null ? tmp$ : $receiver;
  }
  function protoSizeImpl_30($receiver) {
    var protoSize = 0;
    if (!equals($receiver.seconds, L0))
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().int64Size_s8cxhz$($receiver.seconds)) | 0;
    if ($receiver.nanos !== 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(2) + Sizer_getInstance().int32Size_za3lpa$($receiver.nanos)) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_30($receiver, protoMarshal) {
    if (!equals($receiver.seconds, L0))
      protoMarshal.writeTag_za3lpa$(8).writeInt64_s8cxhz$($receiver.seconds);
    if ($receiver.nanos !== 0)
      protoMarshal.writeTag_za3lpa$(16).writeInt32_za3lpa$($receiver.nanos);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_30($receiver, protoUnmarshal) {
    var seconds = L0;
    var nanos = 0;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new Duration(seconds, nanos, protoUnmarshal.unknownFields());
        case 8:
          seconds = protoUnmarshal.readInt64();
          break;
        case 16:
          nanos = protoUnmarshal.readInt32();
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function Empty(unknownFields) {
    Empty$Companion_getInstance();
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.unknownFields = unknownFields;
    this.protoSize_bjkji0$_0 = lazy(Empty$protoSize$lambda(this));
  }
  Empty.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_31(this, other);
  };
  Object.defineProperty(Empty.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_bjkji0$_0.value;
    }
  });
  Empty.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_31(this, m);
  };
  function Empty$Companion() {
    Empty$Companion_instance = this;
  }
  Empty$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_31(Empty$Companion_getInstance(), u);
  };
  Empty$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var Empty$Companion_instance = null;
  function Empty$Companion_getInstance() {
    if (Empty$Companion_instance === null) {
      new Empty$Companion();
    }
    return Empty$Companion_instance;
  }
  function Empty$protoSize$lambda(this$Empty) {
    return function () {
      return protoSizeImpl_31(this$Empty);
    };
  }
  Empty.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Empty',
    interfaces: [Message]
  };
  Empty.prototype.component1 = function () {
    return this.unknownFields;
  };
  Empty.prototype.copy_v72k7n$ = function (unknownFields) {
    return new Empty(unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  Empty.prototype.toString = function () {
    return 'Empty(unknownFields=' + Kotlin.toString(this.unknownFields) + ')';
  };
  Empty.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  Empty.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.unknownFields, other.unknownFields))));
  };
  function protoMergeImpl_31($receiver, plus_0) {
    var tmp$;
    return (tmp$ = plus_0 != null ? plus_0.copy_v72k7n$(plus($receiver.unknownFields, plus_0.unknownFields)) : null) != null ? tmp$ : $receiver;
  }
  function protoSizeImpl_31($receiver) {
    var protoSize = 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_31($receiver, protoMarshal) {
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_31($receiver, protoUnmarshal) {
    while (true) {
      if (protoUnmarshal.readTag() === 0)
        return new Empty(protoUnmarshal.unknownFields());
      else
        protoUnmarshal.unknownField();
    }
  }
  function FieldMask(paths, unknownFields) {
    FieldMask$Companion_getInstance();
    if (paths === void 0)
      paths = emptyList();
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.paths = paths;
    this.unknownFields = unknownFields;
    this.protoSize_s0apsh$_0 = lazy(FieldMask$protoSize$lambda(this));
  }
  FieldMask.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_32(this, other);
  };
  Object.defineProperty(FieldMask.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_s0apsh$_0.value;
    }
  });
  FieldMask.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_32(this, m);
  };
  function FieldMask$Companion() {
    FieldMask$Companion_instance = this;
  }
  FieldMask$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_32(FieldMask$Companion_getInstance(), u);
  };
  FieldMask$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var FieldMask$Companion_instance = null;
  function FieldMask$Companion_getInstance() {
    if (FieldMask$Companion_instance === null) {
      new FieldMask$Companion();
    }
    return FieldMask$Companion_instance;
  }
  function FieldMask$protoSize$lambda(this$FieldMask) {
    return function () {
      return protoSizeImpl_32(this$FieldMask);
    };
  }
  FieldMask.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FieldMask',
    interfaces: [Message]
  };
  FieldMask.prototype.component1 = function () {
    return this.paths;
  };
  FieldMask.prototype.component2 = function () {
    return this.unknownFields;
  };
  FieldMask.prototype.copy_xn8q7o$ = function (paths, unknownFields) {
    return new FieldMask(paths === void 0 ? this.paths : paths, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  FieldMask.prototype.toString = function () {
    return 'FieldMask(paths=' + Kotlin.toString(this.paths) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  FieldMask.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.paths) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  FieldMask.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.paths, other.paths) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function protoMergeImpl_32($receiver, plus_1) {
    var tmp$;
    return (tmp$ = plus_1 != null ? plus_1.copy_xn8q7o$(plus_0($receiver.paths, plus_1.paths), plus($receiver.unknownFields, plus_1.unknownFields)) : null) != null ? tmp$ : $receiver;
  }
  function protoSizeImpl_32($receiver) {
    var protoSize = 0;
    if (!$receiver.paths.isEmpty())
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().packedRepeatedSize_juvmgx$($receiver.paths, getCallableRef('stringSize', function ($receiver, value) {
        return $receiver.stringSize_61zpoe$(value);
      }.bind(null, Sizer_getInstance())))) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_32($receiver, protoMarshal) {
    if (!$receiver.paths.isEmpty())
      protoMarshal.writeTag_za3lpa$(10).writePackedRepeated_w6577c$($receiver.paths, getCallableRef('stringSize', function ($receiver, value) {
        return $receiver.stringSize_61zpoe$(value);
      }.bind(null, Sizer_getInstance())), getCallableRef('writeString', function ($receiver, value) {
        return $receiver.writeString_61zpoe$(value), Unit;
      }.bind(null, protoMarshal)));
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_32($receiver, protoUnmarshal) {
    var paths = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new FieldMask(ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(paths), protoUnmarshal.unknownFields());
        case 10:
          paths = protoUnmarshal.readRepeated_2nrlh4$(paths, getCallableRef('readString', function ($receiver) {
            return $receiver.readString();
          }.bind(null, protoUnmarshal)), false);
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function SourceContext(fileName, unknownFields) {
    SourceContext$Companion_getInstance();
    if (fileName === void 0)
      fileName = '';
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.fileName = fileName;
    this.unknownFields = unknownFields;
    this.protoSize_xh2j8f$_0 = lazy(SourceContext$protoSize$lambda(this));
  }
  SourceContext.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_33(this, other);
  };
  Object.defineProperty(SourceContext.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_xh2j8f$_0.value;
    }
  });
  SourceContext.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_33(this, m);
  };
  function SourceContext$Companion() {
    SourceContext$Companion_instance = this;
  }
  SourceContext$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_33(SourceContext$Companion_getInstance(), u);
  };
  SourceContext$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var SourceContext$Companion_instance = null;
  function SourceContext$Companion_getInstance() {
    if (SourceContext$Companion_instance === null) {
      new SourceContext$Companion();
    }
    return SourceContext$Companion_instance;
  }
  function SourceContext$protoSize$lambda(this$SourceContext) {
    return function () {
      return protoSizeImpl_33(this$SourceContext);
    };
  }
  SourceContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SourceContext',
    interfaces: [Message]
  };
  SourceContext.prototype.component1 = function () {
    return this.fileName;
  };
  SourceContext.prototype.component2 = function () {
    return this.unknownFields;
  };
  SourceContext.prototype.copy_w083i9$ = function (fileName, unknownFields) {
    return new SourceContext(fileName === void 0 ? this.fileName : fileName, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  SourceContext.prototype.toString = function () {
    return 'SourceContext(fileName=' + Kotlin.toString(this.fileName) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  SourceContext.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.fileName) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  SourceContext.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.fileName, other.fileName) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function protoMergeImpl_33($receiver, plus_0) {
    var tmp$;
    return (tmp$ = plus_0 != null ? plus_0.copy_w083i9$(void 0, plus($receiver.unknownFields, plus_0.unknownFields)) : null) != null ? tmp$ : $receiver;
  }
  function protoSizeImpl_33($receiver) {
    var protoSize = 0;
    if ($receiver.fileName.length > 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().stringSize_61zpoe$($receiver.fileName)) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_33($receiver, protoMarshal) {
    if ($receiver.fileName.length > 0)
      protoMarshal.writeTag_za3lpa$(10).writeString_61zpoe$($receiver.fileName);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_33($receiver, protoUnmarshal) {
    var fileName = '';
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new SourceContext(fileName, protoUnmarshal.unknownFields());
        case 10:
          fileName = protoUnmarshal.readString();
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function NullValue(value) {
    NullValue$Companion_getInstance();
    this.value_orsoil$_0 = value;
  }
  Object.defineProperty(NullValue.prototype, 'value', {
    get: function () {
      return this.value_orsoil$_0;
    }
  });
  function NullValue$Companion() {
    NullValue$Companion_instance = this;
    this.NULL_VALUE = new NullValue(0);
  }
  NullValue$Companion.prototype.fromValue_za3lpa$ = function (value) {
    if (value === 0)
      return this.NULL_VALUE;
    else
      return new NullValue(value);
  };
  NullValue$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Enum$Companion]
  };
  var NullValue$Companion_instance = null;
  function NullValue$Companion_getInstance() {
    if (NullValue$Companion_instance === null) {
      new NullValue$Companion();
    }
    return NullValue$Companion_instance;
  }
  NullValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NullValue',
    interfaces: [Message$Enum]
  };
  NullValue.prototype.component1 = function () {
    return this.value;
  };
  NullValue.prototype.copy_za3lpa$ = function (value) {
    return new NullValue(value === void 0 ? this.value : value);
  };
  NullValue.prototype.toString = function () {
    return 'NullValue(value=' + Kotlin.toString(this.value) + ')';
  };
  NullValue.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  NullValue.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function Struct(fields, unknownFields) {
    Struct$Companion_getInstance();
    if (fields === void 0)
      fields = emptyMap();
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.fields = fields;
    this.unknownFields = unknownFields;
    this.protoSize_pmiolw$_0 = lazy(Struct$protoSize$lambda(this));
  }
  Struct.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_34(this, other);
  };
  Object.defineProperty(Struct.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_pmiolw$_0.value;
    }
  });
  Struct.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_34(this, m);
  };
  function Struct$Companion() {
    Struct$Companion_instance = this;
  }
  Struct$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_34(Struct$Companion_getInstance(), u);
  };
  Struct$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var Struct$Companion_instance = null;
  function Struct$Companion_getInstance() {
    if (Struct$Companion_instance === null) {
      new Struct$Companion();
    }
    return Struct$Companion_instance;
  }
  function Struct$FieldsEntry(key, value, unknownFields) {
    Struct$FieldsEntry$Companion_getInstance();
    if (key === void 0)
      key = '';
    if (value === void 0)
      value = null;
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.key_pjzevh$_0 = key;
    this.value_ndqko1$_0 = value;
    this.unknownFields = unknownFields;
    this.protoSize_w44gw9$_0 = lazy(Struct$FieldsEntry$protoSize$lambda(this));
  }
  Object.defineProperty(Struct$FieldsEntry.prototype, 'key', {
    get: function () {
      return this.key_pjzevh$_0;
    }
  });
  Object.defineProperty(Struct$FieldsEntry.prototype, 'value', {
    get: function () {
      return this.value_ndqko1$_0;
    }
  });
  Struct$FieldsEntry.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_35(this, other);
  };
  Object.defineProperty(Struct$FieldsEntry.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_w44gw9$_0.value;
    }
  });
  Struct$FieldsEntry.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_35(this, m);
  };
  function Struct$FieldsEntry$Companion() {
    Struct$FieldsEntry$Companion_instance = this;
  }
  Struct$FieldsEntry$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_35(Struct$FieldsEntry$Companion_getInstance(), u);
  };
  Struct$FieldsEntry$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var Struct$FieldsEntry$Companion_instance = null;
  function Struct$FieldsEntry$Companion_getInstance() {
    if (Struct$FieldsEntry$Companion_instance === null) {
      new Struct$FieldsEntry$Companion();
    }
    return Struct$FieldsEntry$Companion_instance;
  }
  function Struct$FieldsEntry$protoSize$lambda(this$FieldsEntry) {
    return function () {
      return protoSizeImpl_35(this$FieldsEntry);
    };
  }
  Struct$FieldsEntry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FieldsEntry',
    interfaces: [Map$Entry, Message]
  };
  Struct$FieldsEntry.prototype.component1 = function () {
    return this.key;
  };
  Struct$FieldsEntry.prototype.component2 = function () {
    return this.value;
  };
  Struct$FieldsEntry.prototype.component3 = function () {
    return this.unknownFields;
  };
  Struct$FieldsEntry.prototype.copy_oazdiv$ = function (key, value, unknownFields) {
    return new Struct$FieldsEntry(key === void 0 ? this.key : key, value === void 0 ? this.value : value, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  Struct$FieldsEntry.prototype.toString = function () {
    return 'FieldsEntry(key=' + Kotlin.toString(this.key) + (', value=' + Kotlin.toString(this.value)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  Struct$FieldsEntry.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.key) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  Struct$FieldsEntry.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.key, other.key) && Kotlin.equals(this.value, other.value) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function Struct$protoSize$lambda(this$Struct) {
    return function () {
      return protoSizeImpl_34(this$Struct);
    };
  }
  Struct.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Struct',
    interfaces: [Message]
  };
  Struct.prototype.component1 = function () {
    return this.fields;
  };
  Struct.prototype.component2 = function () {
    return this.unknownFields;
  };
  Struct.prototype.copy_540kwi$ = function (fields, unknownFields) {
    return new Struct(fields === void 0 ? this.fields : fields, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  Struct.prototype.toString = function () {
    return 'Struct(fields=' + Kotlin.toString(this.fields) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  Struct.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.fields) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  Struct.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.fields, other.fields) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function Value(kind, unknownFields) {
    Value$Companion_getInstance();
    if (kind === void 0)
      kind = null;
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.kind = kind;
    this.unknownFields = unknownFields;
    this.protoSize_suh95w$_0 = lazy(Value$protoSize$lambda(this));
  }
  function Value$Kind() {
  }
  function Value$Kind$NullValue(nullValue) {
    if (nullValue === void 0)
      nullValue = NullValue$Companion_getInstance().fromValue_za3lpa$(0);
    Value$Kind.call(this);
    this.nullValue = nullValue;
  }
  Value$Kind$NullValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NullValue',
    interfaces: [Value$Kind]
  };
  Value$Kind$NullValue.prototype.component1 = function () {
    return this.nullValue;
  };
  Value$Kind$NullValue.prototype.copy_qnrd1o$ = function (nullValue) {
    return new Value$Kind$NullValue(nullValue === void 0 ? this.nullValue : nullValue);
  };
  Value$Kind$NullValue.prototype.toString = function () {
    return 'NullValue(nullValue=' + Kotlin.toString(this.nullValue) + ')';
  };
  Value$Kind$NullValue.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.nullValue) | 0;
    return result;
  };
  Value$Kind$NullValue.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.nullValue, other.nullValue))));
  };
  function Value$Kind$NumberValue(numberValue) {
    if (numberValue === void 0)
      numberValue = 0.0;
    Value$Kind.call(this);
    this.numberValue = numberValue;
  }
  Value$Kind$NumberValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NumberValue',
    interfaces: [Value$Kind]
  };
  Value$Kind$NumberValue.prototype.component1 = function () {
    return this.numberValue;
  };
  Value$Kind$NumberValue.prototype.copy_14dthe$ = function (numberValue) {
    return new Value$Kind$NumberValue(numberValue === void 0 ? this.numberValue : numberValue);
  };
  Value$Kind$NumberValue.prototype.toString = function () {
    return 'NumberValue(numberValue=' + Kotlin.toString(this.numberValue) + ')';
  };
  Value$Kind$NumberValue.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.numberValue) | 0;
    return result;
  };
  Value$Kind$NumberValue.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.numberValue, other.numberValue))));
  };
  function Value$Kind$StringValue(stringValue) {
    if (stringValue === void 0)
      stringValue = '';
    Value$Kind.call(this);
    this.stringValue = stringValue;
  }
  Value$Kind$StringValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StringValue',
    interfaces: [Value$Kind]
  };
  Value$Kind$StringValue.prototype.component1 = function () {
    return this.stringValue;
  };
  Value$Kind$StringValue.prototype.copy_61zpoe$ = function (stringValue) {
    return new Value$Kind$StringValue(stringValue === void 0 ? this.stringValue : stringValue);
  };
  Value$Kind$StringValue.prototype.toString = function () {
    return 'StringValue(stringValue=' + Kotlin.toString(this.stringValue) + ')';
  };
  Value$Kind$StringValue.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.stringValue) | 0;
    return result;
  };
  Value$Kind$StringValue.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.stringValue, other.stringValue))));
  };
  function Value$Kind$BoolValue(boolValue) {
    if (boolValue === void 0)
      boolValue = false;
    Value$Kind.call(this);
    this.boolValue = boolValue;
  }
  Value$Kind$BoolValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoolValue',
    interfaces: [Value$Kind]
  };
  Value$Kind$BoolValue.prototype.component1 = function () {
    return this.boolValue;
  };
  Value$Kind$BoolValue.prototype.copy_6taknv$ = function (boolValue) {
    return new Value$Kind$BoolValue(boolValue === void 0 ? this.boolValue : boolValue);
  };
  Value$Kind$BoolValue.prototype.toString = function () {
    return 'BoolValue(boolValue=' + Kotlin.toString(this.boolValue) + ')';
  };
  Value$Kind$BoolValue.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.boolValue) | 0;
    return result;
  };
  Value$Kind$BoolValue.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.boolValue, other.boolValue))));
  };
  function Value$Kind$StructValue(structValue) {
    Value$Kind.call(this);
    this.structValue = structValue;
  }
  Value$Kind$StructValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StructValue',
    interfaces: [Value$Kind]
  };
  Value$Kind$StructValue.prototype.component1 = function () {
    return this.structValue;
  };
  Value$Kind$StructValue.prototype.copy_v7swdx$ = function (structValue) {
    return new Value$Kind$StructValue(structValue === void 0 ? this.structValue : structValue);
  };
  Value$Kind$StructValue.prototype.toString = function () {
    return 'StructValue(structValue=' + Kotlin.toString(this.structValue) + ')';
  };
  Value$Kind$StructValue.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.structValue) | 0;
    return result;
  };
  Value$Kind$StructValue.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.structValue, other.structValue))));
  };
  function Value$Kind$ListValue(listValue) {
    Value$Kind.call(this);
    this.listValue = listValue;
  }
  Value$Kind$ListValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListValue',
    interfaces: [Value$Kind]
  };
  Value$Kind$ListValue.prototype.component1 = function () {
    return this.listValue;
  };
  Value$Kind$ListValue.prototype.copy_6vg4fx$ = function (listValue) {
    return new Value$Kind$ListValue(listValue === void 0 ? this.listValue : listValue);
  };
  Value$Kind$ListValue.prototype.toString = function () {
    return 'ListValue(listValue=' + Kotlin.toString(this.listValue) + ')';
  };
  Value$Kind$ListValue.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.listValue) | 0;
    return result;
  };
  Value$Kind$ListValue.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.listValue, other.listValue))));
  };
  Value$Kind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Kind',
    interfaces: []
  };
  Value.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_36(this, other);
  };
  Object.defineProperty(Value.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_suh95w$_0.value;
    }
  });
  Value.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_36(this, m);
  };
  function Value$Companion() {
    Value$Companion_instance = this;
  }
  Value$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_36(Value$Companion_getInstance(), u);
  };
  Value$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var Value$Companion_instance = null;
  function Value$Companion_getInstance() {
    if (Value$Companion_instance === null) {
      new Value$Companion();
    }
    return Value$Companion_instance;
  }
  function Value$protoSize$lambda(this$Value) {
    return function () {
      return protoSizeImpl_36(this$Value);
    };
  }
  Value.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Value',
    interfaces: [Message]
  };
  Value.prototype.component1 = function () {
    return this.kind;
  };
  Value.prototype.component2 = function () {
    return this.unknownFields;
  };
  Value.prototype.copy_3phpd3$ = function (kind, unknownFields) {
    return new Value(kind === void 0 ? this.kind : kind, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  Value.prototype.toString = function () {
    return 'Value(kind=' + Kotlin.toString(this.kind) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  Value.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.kind) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  Value.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.kind, other.kind) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function ListValue(values, unknownFields) {
    ListValue$Companion_getInstance();
    if (values === void 0)
      values = emptyList();
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.values = values;
    this.unknownFields = unknownFields;
    this.protoSize_qttbhe$_0 = lazy(ListValue$protoSize$lambda(this));
  }
  ListValue.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_37(this, other);
  };
  Object.defineProperty(ListValue.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_qttbhe$_0.value;
    }
  });
  ListValue.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_37(this, m);
  };
  function ListValue$Companion() {
    ListValue$Companion_instance = this;
  }
  ListValue$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_37(ListValue$Companion_getInstance(), u);
  };
  ListValue$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var ListValue$Companion_instance = null;
  function ListValue$Companion_getInstance() {
    if (ListValue$Companion_instance === null) {
      new ListValue$Companion();
    }
    return ListValue$Companion_instance;
  }
  function ListValue$protoSize$lambda(this$ListValue) {
    return function () {
      return protoSizeImpl_37(this$ListValue);
    };
  }
  ListValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListValue',
    interfaces: [Message]
  };
  ListValue.prototype.component1 = function () {
    return this.values;
  };
  ListValue.prototype.component2 = function () {
    return this.unknownFields;
  };
  ListValue.prototype.copy_i2vk1b$ = function (values, unknownFields) {
    return new ListValue(values === void 0 ? this.values : values, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  ListValue.prototype.toString = function () {
    return 'ListValue(values=' + Kotlin.toString(this.values) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  ListValue.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.values) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  ListValue.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.values, other.values) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function protoMergeImpl_34($receiver, plus_0) {
    var tmp$;
    return (tmp$ = plus_0 != null ? plus_0.copy_540kwi$(plus($receiver.fields, plus_0.fields), plus($receiver.unknownFields, plus_0.unknownFields)) : null) != null ? tmp$ : $receiver;
  }
  function protoSizeImpl_34($receiver) {
    var protoSize = 0;
    if (!$receiver.fields.isEmpty())
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().mapSize_6kflhk$($receiver.fields, getCallableRef('FieldsEntry', function (key, value, unknownFields) {
        return new Struct$FieldsEntry(key, value, unknownFields);
      }))) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_34($receiver, protoMarshal) {
    if (!$receiver.fields.isEmpty())
      protoMarshal.writeTag_za3lpa$(10).writeMap_6kflhk$($receiver.fields, getCallableRef('FieldsEntry', function (key, value, unknownFields) {
        return new Struct$FieldsEntry(key, value, unknownFields);
      }));
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_34($receiver, protoUnmarshal) {
    var fields = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new Struct(MapWithSize$Builder$Companion_getInstance().fixed_goowx9$(fields), protoUnmarshal.unknownFields());
        case 10:
          fields = protoUnmarshal.readMap_hx2l2n$(fields, Struct$FieldsEntry$Companion_getInstance(), false);
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_35($receiver, plus_0) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$_1 = (tmp$_0 = (tmp$ = $receiver.value) != null ? tmp$.plus_2gqcnw$(plus_0.value) : null) != null ? tmp$_0 : plus_0.value;
    tmp$_2 = plus($receiver.unknownFields, plus_0.unknownFields);
    return (tmp$_3 = plus_0 != null ? plus_0.copy_oazdiv$(void 0, tmp$_1, tmp$_2) : null) != null ? tmp$_3 : $receiver;
  }
  function protoSizeImpl_35($receiver) {
    var protoSize = 0;
    if ($receiver.key.length > 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().stringSize_61zpoe$($receiver.key)) | 0;
    if ($receiver.value != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(2) + Sizer_getInstance().messageSize_3k86cv$($receiver.value)) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_35($receiver, protoMarshal) {
    if ($receiver.key.length > 0)
      protoMarshal.writeTag_za3lpa$(10).writeString_61zpoe$($receiver.key);
    if ($receiver.value != null)
      protoMarshal.writeTag_za3lpa$(18).writeMessage_3k86cv$($receiver.value);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_35($receiver, protoUnmarshal) {
    var key = '';
    var value = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new Struct$FieldsEntry(key, value, protoUnmarshal.unknownFields());
        case 10:
          key = protoUnmarshal.readString();
          break;
        case 18:
          value = protoUnmarshal.readMessage_7rd7cm$(Value$Companion_getInstance());
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_36($receiver, plus_0) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (Kotlin.isType($receiver.kind, Value$Kind$StructValue) && Kotlin.isType(plus_0.kind, Value$Kind$StructValue))
      tmp$_0 = new Value$Kind$StructValue($receiver.kind.structValue.plus_2gqcnw$(plus_0.kind.structValue));
    else if (Kotlin.isType($receiver.kind, Value$Kind$ListValue) && Kotlin.isType(plus_0.kind, Value$Kind$ListValue))
      tmp$_0 = new Value$Kind$ListValue($receiver.kind.listValue.plus_2gqcnw$(plus_0.kind.listValue));
    else
      tmp$_0 = (tmp$ = plus_0.kind) != null ? tmp$ : $receiver.kind;
    tmp$_1 = plus($receiver.unknownFields, plus_0.unknownFields);
    return (tmp$_2 = plus_0 != null ? plus_0.copy_3phpd3$(tmp$_0, tmp$_1) : null) != null ? tmp$_2 : $receiver;
  }
  function protoSizeImpl_36($receiver) {
    var tmp$;
    var protoSize = 0;
    tmp$ = $receiver.kind;
    if (Kotlin.isType(tmp$, Value$Kind$NullValue))
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().enumSize_do1vow$($receiver.kind.nullValue)) | 0;
    else if (Kotlin.isType(tmp$, Value$Kind$NumberValue))
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(2) + Sizer_getInstance().doubleSize_14dthe$($receiver.kind.numberValue)) | 0;
    else if (Kotlin.isType(tmp$, Value$Kind$StringValue))
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(3) + Sizer_getInstance().stringSize_61zpoe$($receiver.kind.stringValue)) | 0;
    else if (Kotlin.isType(tmp$, Value$Kind$BoolValue))
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(4) + Sizer_getInstance().boolSize_6taknv$($receiver.kind.boolValue)) | 0;
    else if (Kotlin.isType(tmp$, Value$Kind$StructValue))
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(5) + Sizer_getInstance().messageSize_3k86cv$($receiver.kind.structValue)) | 0;
    else if (Kotlin.isType(tmp$, Value$Kind$ListValue))
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(6) + Sizer_getInstance().messageSize_3k86cv$($receiver.kind.listValue)) | 0;
    var tmp$_0 = protoSize;
    var tmp$_1;
    var sum = 0;
    tmp$_1 = $receiver.unknownFields.entries.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$_0 + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_36($receiver, protoMarshal) {
    if (Kotlin.isType($receiver.kind, Value$Kind$NullValue))
      protoMarshal.writeTag_za3lpa$(8).writeEnum_do1vow$($receiver.kind.nullValue);
    if (Kotlin.isType($receiver.kind, Value$Kind$NumberValue))
      protoMarshal.writeTag_za3lpa$(17).writeDouble_14dthe$($receiver.kind.numberValue);
    if (Kotlin.isType($receiver.kind, Value$Kind$StringValue))
      protoMarshal.writeTag_za3lpa$(26).writeString_61zpoe$($receiver.kind.stringValue);
    if (Kotlin.isType($receiver.kind, Value$Kind$BoolValue))
      protoMarshal.writeTag_za3lpa$(32).writeBool_6taknv$($receiver.kind.boolValue);
    if (Kotlin.isType($receiver.kind, Value$Kind$StructValue))
      protoMarshal.writeTag_za3lpa$(42).writeMessage_3k86cv$($receiver.kind.structValue);
    if (Kotlin.isType($receiver.kind, Value$Kind$ListValue))
      protoMarshal.writeTag_za3lpa$(50).writeMessage_3k86cv$($receiver.kind.listValue);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_36($receiver, protoUnmarshal) {
    var kind = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new Value(kind, protoUnmarshal.unknownFields());
        case 8:
          kind = new Value$Kind$NullValue(protoUnmarshal.readEnum_vjsov6$(NullValue$Companion_getInstance()));
          break;
        case 17:
          kind = new Value$Kind$NumberValue(protoUnmarshal.readDouble());
          break;
        case 26:
          kind = new Value$Kind$StringValue(protoUnmarshal.readString());
          break;
        case 32:
          kind = new Value$Kind$BoolValue(protoUnmarshal.readBool());
          break;
        case 42:
          kind = new Value$Kind$StructValue(protoUnmarshal.readMessage_7rd7cm$(Struct$Companion_getInstance()));
          break;
        case 50:
          kind = new Value$Kind$ListValue(protoUnmarshal.readMessage_7rd7cm$(ListValue$Companion_getInstance()));
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_37($receiver, plus_1) {
    var tmp$;
    return (tmp$ = plus_1 != null ? plus_1.copy_i2vk1b$(plus_0($receiver.values, plus_1.values), plus($receiver.unknownFields, plus_1.unknownFields)) : null) != null ? tmp$ : $receiver;
  }
  function protoSizeImpl_37($receiver) {
    var protoSize = 0;
    if (!$receiver.values.isEmpty())
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().packedRepeatedSize_juvmgx$($receiver.values, getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance())))) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_37($receiver, protoMarshal) {
    if (!$receiver.values.isEmpty())
      protoMarshal.writeTag_za3lpa$(10).writePackedRepeated_w6577c$($receiver.values, getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance())), getCallableRef('writeMessage', function ($receiver, value) {
        return $receiver.writeMessage_3k86cv$(value), Unit;
      }.bind(null, protoMarshal)));
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_37($receiver, protoUnmarshal) {
    var values = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new ListValue(ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(values), protoUnmarshal.unknownFields());
        case 10:
          values = protoUnmarshal.readRepeatedMessage_f2m3pm$(values, Value$Companion_getInstance(), false);
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function Timestamp(seconds, nanos, unknownFields) {
    Timestamp$Companion_getInstance();
    if (seconds === void 0)
      seconds = L0;
    if (nanos === void 0)
      nanos = 0;
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.seconds = seconds;
    this.nanos = nanos;
    this.unknownFields = unknownFields;
    this.protoSize_mz4vtt$_0 = lazy(Timestamp$protoSize$lambda(this));
  }
  Timestamp.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_38(this, other);
  };
  Object.defineProperty(Timestamp.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_mz4vtt$_0.value;
    }
  });
  Timestamp.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_38(this, m);
  };
  function Timestamp$Companion() {
    Timestamp$Companion_instance = this;
  }
  Timestamp$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_38(Timestamp$Companion_getInstance(), u);
  };
  Timestamp$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var Timestamp$Companion_instance = null;
  function Timestamp$Companion_getInstance() {
    if (Timestamp$Companion_instance === null) {
      new Timestamp$Companion();
    }
    return Timestamp$Companion_instance;
  }
  function Timestamp$protoSize$lambda(this$Timestamp) {
    return function () {
      return protoSizeImpl_38(this$Timestamp);
    };
  }
  Timestamp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Timestamp',
    interfaces: [Message]
  };
  Timestamp.prototype.component1 = function () {
    return this.seconds;
  };
  Timestamp.prototype.component2 = function () {
    return this.nanos;
  };
  Timestamp.prototype.component3 = function () {
    return this.unknownFields;
  };
  Timestamp.prototype.copy_4wkohy$ = function (seconds, nanos, unknownFields) {
    return new Timestamp(seconds === void 0 ? this.seconds : seconds, nanos === void 0 ? this.nanos : nanos, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  Timestamp.prototype.toString = function () {
    return 'Timestamp(seconds=' + Kotlin.toString(this.seconds) + (', nanos=' + Kotlin.toString(this.nanos)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  Timestamp.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.seconds) | 0;
    result = result * 31 + Kotlin.hashCode(this.nanos) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  Timestamp.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.seconds, other.seconds) && Kotlin.equals(this.nanos, other.nanos) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function protoMergeImpl_38($receiver, plus_0) {
    var tmp$;
    return (tmp$ = plus_0 != null ? plus_0.copy_4wkohy$(void 0, void 0, plus($receiver.unknownFields, plus_0.unknownFields)) : null) != null ? tmp$ : $receiver;
  }
  function protoSizeImpl_38($receiver) {
    var protoSize = 0;
    if (!equals($receiver.seconds, L0))
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().int64Size_s8cxhz$($receiver.seconds)) | 0;
    if ($receiver.nanos !== 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(2) + Sizer_getInstance().int32Size_za3lpa$($receiver.nanos)) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_38($receiver, protoMarshal) {
    if (!equals($receiver.seconds, L0))
      protoMarshal.writeTag_za3lpa$(8).writeInt64_s8cxhz$($receiver.seconds);
    if ($receiver.nanos !== 0)
      protoMarshal.writeTag_za3lpa$(16).writeInt32_za3lpa$($receiver.nanos);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_38($receiver, protoUnmarshal) {
    var seconds = L0;
    var nanos = 0;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new Timestamp(seconds, nanos, protoUnmarshal.unknownFields());
        case 8:
          seconds = protoUnmarshal.readInt64();
          break;
        case 16:
          nanos = protoUnmarshal.readInt32();
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function Syntax(value) {
    Syntax$Companion_getInstance();
    this.value_kwlpr6$_0 = value;
  }
  Object.defineProperty(Syntax.prototype, 'value', {
    get: function () {
      return this.value_kwlpr6$_0;
    }
  });
  function Syntax$Companion() {
    Syntax$Companion_instance = this;
    this.SYNTAX_PROTO2 = new Syntax(0);
    this.SYNTAX_PROTO3 = new Syntax(1);
  }
  Syntax$Companion.prototype.fromValue_za3lpa$ = function (value) {
    switch (value) {
      case 0:
        return this.SYNTAX_PROTO2;
      case 1:
        return this.SYNTAX_PROTO3;
      default:return new Syntax(value);
    }
  };
  Syntax$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Enum$Companion]
  };
  var Syntax$Companion_instance = null;
  function Syntax$Companion_getInstance() {
    if (Syntax$Companion_instance === null) {
      new Syntax$Companion();
    }
    return Syntax$Companion_instance;
  }
  Syntax.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Syntax',
    interfaces: [Message$Enum]
  };
  Syntax.prototype.component1 = function () {
    return this.value;
  };
  Syntax.prototype.copy_za3lpa$ = function (value) {
    return new Syntax(value === void 0 ? this.value : value);
  };
  Syntax.prototype.toString = function () {
    return 'Syntax(value=' + Kotlin.toString(this.value) + ')';
  };
  Syntax.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Syntax.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function Type(name, fields, oneofs, options, sourceContext, syntax, unknownFields) {
    Type$Companion_getInstance();
    if (name === void 0)
      name = '';
    if (fields === void 0)
      fields = emptyList();
    if (oneofs === void 0)
      oneofs = emptyList();
    if (options === void 0)
      options = emptyList();
    if (sourceContext === void 0)
      sourceContext = null;
    if (syntax === void 0)
      syntax = Syntax$Companion_getInstance().fromValue_za3lpa$(0);
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.name = name;
    this.fields = fields;
    this.oneofs = oneofs;
    this.options = options;
    this.sourceContext = sourceContext;
    this.syntax = syntax;
    this.unknownFields = unknownFields;
    this.protoSize_7t5zpr$_0 = lazy(Type$protoSize$lambda(this));
  }
  Type.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_39(this, other);
  };
  Object.defineProperty(Type.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_7t5zpr$_0.value;
    }
  });
  Type.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_39(this, m);
  };
  function Type$Companion() {
    Type$Companion_instance = this;
  }
  Type$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_39(Type$Companion_getInstance(), u);
  };
  Type$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var Type$Companion_instance = null;
  function Type$Companion_getInstance() {
    if (Type$Companion_instance === null) {
      new Type$Companion();
    }
    return Type$Companion_instance;
  }
  function Type$protoSize$lambda(this$Type) {
    return function () {
      return protoSizeImpl_39(this$Type);
    };
  }
  Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Message]
  };
  Type.prototype.component1 = function () {
    return this.name;
  };
  Type.prototype.component2 = function () {
    return this.fields;
  };
  Type.prototype.component3 = function () {
    return this.oneofs;
  };
  Type.prototype.component4 = function () {
    return this.options;
  };
  Type.prototype.component5 = function () {
    return this.sourceContext;
  };
  Type.prototype.component6 = function () {
    return this.syntax;
  };
  Type.prototype.component7 = function () {
    return this.unknownFields;
  };
  Type.prototype.copy_mbhxh5$ = function (name, fields, oneofs, options, sourceContext, syntax, unknownFields) {
    return new Type(name === void 0 ? this.name : name, fields === void 0 ? this.fields : fields, oneofs === void 0 ? this.oneofs : oneofs, options === void 0 ? this.options : options, sourceContext === void 0 ? this.sourceContext : sourceContext, syntax === void 0 ? this.syntax : syntax, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  Type.prototype.toString = function () {
    return 'Type(name=' + Kotlin.toString(this.name) + (', fields=' + Kotlin.toString(this.fields)) + (', oneofs=' + Kotlin.toString(this.oneofs)) + (', options=' + Kotlin.toString(this.options)) + (', sourceContext=' + Kotlin.toString(this.sourceContext)) + (', syntax=' + Kotlin.toString(this.syntax)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  Type.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.fields) | 0;
    result = result * 31 + Kotlin.hashCode(this.oneofs) | 0;
    result = result * 31 + Kotlin.hashCode(this.options) | 0;
    result = result * 31 + Kotlin.hashCode(this.sourceContext) | 0;
    result = result * 31 + Kotlin.hashCode(this.syntax) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  Type.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.fields, other.fields) && Kotlin.equals(this.oneofs, other.oneofs) && Kotlin.equals(this.options, other.options) && Kotlin.equals(this.sourceContext, other.sourceContext) && Kotlin.equals(this.syntax, other.syntax) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function Field(kind, cardinality, number, name, typeUrl, oneofIndex, packed, options, jsonName, defaultValue, unknownFields) {
    Field$Companion_getInstance();
    if (kind === void 0)
      kind = Field$Kind$Companion_getInstance().fromValue_za3lpa$(0);
    if (cardinality === void 0)
      cardinality = Field$Cardinality$Companion_getInstance().fromValue_za3lpa$(0);
    if (number === void 0)
      number = 0;
    if (name === void 0)
      name = '';
    if (typeUrl === void 0)
      typeUrl = '';
    if (oneofIndex === void 0)
      oneofIndex = 0;
    if (packed === void 0)
      packed = false;
    if (options === void 0)
      options = emptyList();
    if (jsonName === void 0)
      jsonName = '';
    if (defaultValue === void 0)
      defaultValue = '';
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.kind = kind;
    this.cardinality = cardinality;
    this.number = number;
    this.name = name;
    this.typeUrl = typeUrl;
    this.oneofIndex = oneofIndex;
    this.packed = packed;
    this.options = options;
    this.jsonName = jsonName;
    this.defaultValue = defaultValue;
    this.unknownFields = unknownFields;
    this.protoSize_xr81hh$_0 = lazy(Field$protoSize$lambda(this));
  }
  Field.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_40(this, other);
  };
  Object.defineProperty(Field.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_xr81hh$_0.value;
    }
  });
  Field.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_40(this, m);
  };
  function Field$Companion() {
    Field$Companion_instance = this;
  }
  Field$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_40(Field$Companion_getInstance(), u);
  };
  Field$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var Field$Companion_instance = null;
  function Field$Companion_getInstance() {
    if (Field$Companion_instance === null) {
      new Field$Companion();
    }
    return Field$Companion_instance;
  }
  function Field$Kind(value) {
    Field$Kind$Companion_getInstance();
    this.value_7xvbt3$_0 = value;
  }
  Object.defineProperty(Field$Kind.prototype, 'value', {
    get: function () {
      return this.value_7xvbt3$_0;
    }
  });
  function Field$Kind$Companion() {
    Field$Kind$Companion_instance = this;
    this.TYPE_UNKNOWN = new Field$Kind(0);
    this.TYPE_DOUBLE = new Field$Kind(1);
    this.TYPE_FLOAT = new Field$Kind(2);
    this.TYPE_INT64 = new Field$Kind(3);
    this.TYPE_UINT64 = new Field$Kind(4);
    this.TYPE_INT32 = new Field$Kind(5);
    this.TYPE_FIXED64 = new Field$Kind(6);
    this.TYPE_FIXED32 = new Field$Kind(7);
    this.TYPE_BOOL = new Field$Kind(8);
    this.TYPE_STRING = new Field$Kind(9);
    this.TYPE_GROUP = new Field$Kind(10);
    this.TYPE_MESSAGE = new Field$Kind(11);
    this.TYPE_BYTES = new Field$Kind(12);
    this.TYPE_UINT32 = new Field$Kind(13);
    this.TYPE_ENUM = new Field$Kind(14);
    this.TYPE_SFIXED32 = new Field$Kind(15);
    this.TYPE_SFIXED64 = new Field$Kind(16);
    this.TYPE_SINT32 = new Field$Kind(17);
    this.TYPE_SINT64 = new Field$Kind(18);
  }
  Field$Kind$Companion.prototype.fromValue_za3lpa$ = function (value) {
    switch (value) {
      case 0:
        return this.TYPE_UNKNOWN;
      case 1:
        return this.TYPE_DOUBLE;
      case 2:
        return this.TYPE_FLOAT;
      case 3:
        return this.TYPE_INT64;
      case 4:
        return this.TYPE_UINT64;
      case 5:
        return this.TYPE_INT32;
      case 6:
        return this.TYPE_FIXED64;
      case 7:
        return this.TYPE_FIXED32;
      case 8:
        return this.TYPE_BOOL;
      case 9:
        return this.TYPE_STRING;
      case 10:
        return this.TYPE_GROUP;
      case 11:
        return this.TYPE_MESSAGE;
      case 12:
        return this.TYPE_BYTES;
      case 13:
        return this.TYPE_UINT32;
      case 14:
        return this.TYPE_ENUM;
      case 15:
        return this.TYPE_SFIXED32;
      case 16:
        return this.TYPE_SFIXED64;
      case 17:
        return this.TYPE_SINT32;
      case 18:
        return this.TYPE_SINT64;
      default:return new Field$Kind(value);
    }
  };
  Field$Kind$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Enum$Companion]
  };
  var Field$Kind$Companion_instance = null;
  function Field$Kind$Companion_getInstance() {
    if (Field$Kind$Companion_instance === null) {
      new Field$Kind$Companion();
    }
    return Field$Kind$Companion_instance;
  }
  Field$Kind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Kind',
    interfaces: [Message$Enum]
  };
  Field$Kind.prototype.component1 = function () {
    return this.value;
  };
  Field$Kind.prototype.copy_za3lpa$ = function (value) {
    return new Field$Kind(value === void 0 ? this.value : value);
  };
  Field$Kind.prototype.toString = function () {
    return 'Kind(value=' + Kotlin.toString(this.value) + ')';
  };
  Field$Kind.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Field$Kind.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function Field$Cardinality(value) {
    Field$Cardinality$Companion_getInstance();
    this.value_nc74pf$_0 = value;
  }
  Object.defineProperty(Field$Cardinality.prototype, 'value', {
    get: function () {
      return this.value_nc74pf$_0;
    }
  });
  function Field$Cardinality$Companion() {
    Field$Cardinality$Companion_instance = this;
    this.CARDINALITY_UNKNOWN = new Field$Cardinality(0);
    this.CARDINALITY_OPTIONAL = new Field$Cardinality(1);
    this.CARDINALITY_REQUIRED = new Field$Cardinality(2);
    this.CARDINALITY_REPEATED = new Field$Cardinality(3);
  }
  Field$Cardinality$Companion.prototype.fromValue_za3lpa$ = function (value) {
    switch (value) {
      case 0:
        return this.CARDINALITY_UNKNOWN;
      case 1:
        return this.CARDINALITY_OPTIONAL;
      case 2:
        return this.CARDINALITY_REQUIRED;
      case 3:
        return this.CARDINALITY_REPEATED;
      default:return new Field$Cardinality(value);
    }
  };
  Field$Cardinality$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Enum$Companion]
  };
  var Field$Cardinality$Companion_instance = null;
  function Field$Cardinality$Companion_getInstance() {
    if (Field$Cardinality$Companion_instance === null) {
      new Field$Cardinality$Companion();
    }
    return Field$Cardinality$Companion_instance;
  }
  Field$Cardinality.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Cardinality',
    interfaces: [Message$Enum]
  };
  Field$Cardinality.prototype.component1 = function () {
    return this.value;
  };
  Field$Cardinality.prototype.copy_za3lpa$ = function (value) {
    return new Field$Cardinality(value === void 0 ? this.value : value);
  };
  Field$Cardinality.prototype.toString = function () {
    return 'Cardinality(value=' + Kotlin.toString(this.value) + ')';
  };
  Field$Cardinality.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Field$Cardinality.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function Field$protoSize$lambda(this$Field) {
    return function () {
      return protoSizeImpl_40(this$Field);
    };
  }
  Field.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Field',
    interfaces: [Message]
  };
  Field.prototype.component1 = function () {
    return this.kind;
  };
  Field.prototype.component2 = function () {
    return this.cardinality;
  };
  Field.prototype.component3 = function () {
    return this.number;
  };
  Field.prototype.component4 = function () {
    return this.name;
  };
  Field.prototype.component5 = function () {
    return this.typeUrl;
  };
  Field.prototype.component6 = function () {
    return this.oneofIndex;
  };
  Field.prototype.component7 = function () {
    return this.packed;
  };
  Field.prototype.component8 = function () {
    return this.options;
  };
  Field.prototype.component9 = function () {
    return this.jsonName;
  };
  Field.prototype.component10 = function () {
    return this.defaultValue;
  };
  Field.prototype.component11 = function () {
    return this.unknownFields;
  };
  Field.prototype.copy_rsqdvc$ = function (kind, cardinality, number, name, typeUrl, oneofIndex, packed, options, jsonName, defaultValue, unknownFields) {
    return new Field(kind === void 0 ? this.kind : kind, cardinality === void 0 ? this.cardinality : cardinality, number === void 0 ? this.number : number, name === void 0 ? this.name : name, typeUrl === void 0 ? this.typeUrl : typeUrl, oneofIndex === void 0 ? this.oneofIndex : oneofIndex, packed === void 0 ? this.packed : packed, options === void 0 ? this.options : options, jsonName === void 0 ? this.jsonName : jsonName, defaultValue === void 0 ? this.defaultValue : defaultValue, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  Field.prototype.toString = function () {
    return 'Field(kind=' + Kotlin.toString(this.kind) + (', cardinality=' + Kotlin.toString(this.cardinality)) + (', number=' + Kotlin.toString(this.number)) + (', name=' + Kotlin.toString(this.name)) + (', typeUrl=' + Kotlin.toString(this.typeUrl)) + (', oneofIndex=' + Kotlin.toString(this.oneofIndex)) + (', packed=' + Kotlin.toString(this.packed)) + (', options=' + Kotlin.toString(this.options)) + (', jsonName=' + Kotlin.toString(this.jsonName)) + (', defaultValue=' + Kotlin.toString(this.defaultValue)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  Field.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.kind) | 0;
    result = result * 31 + Kotlin.hashCode(this.cardinality) | 0;
    result = result * 31 + Kotlin.hashCode(this.number) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.typeUrl) | 0;
    result = result * 31 + Kotlin.hashCode(this.oneofIndex) | 0;
    result = result * 31 + Kotlin.hashCode(this.packed) | 0;
    result = result * 31 + Kotlin.hashCode(this.options) | 0;
    result = result * 31 + Kotlin.hashCode(this.jsonName) | 0;
    result = result * 31 + Kotlin.hashCode(this.defaultValue) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  Field.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.kind, other.kind) && Kotlin.equals(this.cardinality, other.cardinality) && Kotlin.equals(this.number, other.number) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.typeUrl, other.typeUrl) && Kotlin.equals(this.oneofIndex, other.oneofIndex) && Kotlin.equals(this.packed, other.packed) && Kotlin.equals(this.options, other.options) && Kotlin.equals(this.jsonName, other.jsonName) && Kotlin.equals(this.defaultValue, other.defaultValue) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function Enum(name, enumvalue, options, sourceContext, syntax, unknownFields) {
    Enum$Companion_getInstance();
    if (name === void 0)
      name = '';
    if (enumvalue === void 0)
      enumvalue = emptyList();
    if (options === void 0)
      options = emptyList();
    if (sourceContext === void 0)
      sourceContext = null;
    if (syntax === void 0)
      syntax = Syntax$Companion_getInstance().fromValue_za3lpa$(0);
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.name = name;
    this.enumvalue = enumvalue;
    this.options = options;
    this.sourceContext = sourceContext;
    this.syntax = syntax;
    this.unknownFields = unknownFields;
    this.protoSize_2qm50o$_0 = lazy(Enum$protoSize$lambda(this));
  }
  Enum.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_41(this, other);
  };
  Object.defineProperty(Enum.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_2qm50o$_0.value;
    }
  });
  Enum.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_41(this, m);
  };
  function Enum$Companion() {
    Enum$Companion_instance = this;
  }
  Enum$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_41(Enum$Companion_getInstance(), u);
  };
  Enum$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var Enum$Companion_instance = null;
  function Enum$Companion_getInstance() {
    if (Enum$Companion_instance === null) {
      new Enum$Companion();
    }
    return Enum$Companion_instance;
  }
  function Enum$protoSize$lambda(this$Enum) {
    return function () {
      return protoSizeImpl_41(this$Enum);
    };
  }
  Enum.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Enum',
    interfaces: [Message]
  };
  Enum.prototype.component1 = function () {
    return this.name;
  };
  Enum.prototype.component2 = function () {
    return this.enumvalue;
  };
  Enum.prototype.component3 = function () {
    return this.options;
  };
  Enum.prototype.component4 = function () {
    return this.sourceContext;
  };
  Enum.prototype.component5 = function () {
    return this.syntax;
  };
  Enum.prototype.component6 = function () {
    return this.unknownFields;
  };
  Enum.prototype.copy_i8ssjg$ = function (name, enumvalue, options, sourceContext, syntax, unknownFields) {
    return new Enum(name === void 0 ? this.name : name, enumvalue === void 0 ? this.enumvalue : enumvalue, options === void 0 ? this.options : options, sourceContext === void 0 ? this.sourceContext : sourceContext, syntax === void 0 ? this.syntax : syntax, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  Enum.prototype.toString = function () {
    return 'Enum(name=' + Kotlin.toString(this.name) + (', enumvalue=' + Kotlin.toString(this.enumvalue)) + (', options=' + Kotlin.toString(this.options)) + (', sourceContext=' + Kotlin.toString(this.sourceContext)) + (', syntax=' + Kotlin.toString(this.syntax)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  Enum.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.enumvalue) | 0;
    result = result * 31 + Kotlin.hashCode(this.options) | 0;
    result = result * 31 + Kotlin.hashCode(this.sourceContext) | 0;
    result = result * 31 + Kotlin.hashCode(this.syntax) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  Enum.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.enumvalue, other.enumvalue) && Kotlin.equals(this.options, other.options) && Kotlin.equals(this.sourceContext, other.sourceContext) && Kotlin.equals(this.syntax, other.syntax) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function EnumValue(name, number, options, unknownFields) {
    EnumValue$Companion_getInstance();
    if (name === void 0)
      name = '';
    if (number === void 0)
      number = 0;
    if (options === void 0)
      options = emptyList();
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.name = name;
    this.number = number;
    this.options = options;
    this.unknownFields = unknownFields;
    this.protoSize_rrr0lh$_0 = lazy(EnumValue$protoSize$lambda(this));
  }
  EnumValue.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_42(this, other);
  };
  Object.defineProperty(EnumValue.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_rrr0lh$_0.value;
    }
  });
  EnumValue.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_42(this, m);
  };
  function EnumValue$Companion() {
    EnumValue$Companion_instance = this;
  }
  EnumValue$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_42(EnumValue$Companion_getInstance(), u);
  };
  EnumValue$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var EnumValue$Companion_instance = null;
  function EnumValue$Companion_getInstance() {
    if (EnumValue$Companion_instance === null) {
      new EnumValue$Companion();
    }
    return EnumValue$Companion_instance;
  }
  function EnumValue$protoSize$lambda(this$EnumValue) {
    return function () {
      return protoSizeImpl_42(this$EnumValue);
    };
  }
  EnumValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EnumValue',
    interfaces: [Message]
  };
  EnumValue.prototype.component1 = function () {
    return this.name;
  };
  EnumValue.prototype.component2 = function () {
    return this.number;
  };
  EnumValue.prototype.component3 = function () {
    return this.options;
  };
  EnumValue.prototype.component4 = function () {
    return this.unknownFields;
  };
  EnumValue.prototype.copy_x7nfpn$ = function (name, number, options, unknownFields) {
    return new EnumValue(name === void 0 ? this.name : name, number === void 0 ? this.number : number, options === void 0 ? this.options : options, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  EnumValue.prototype.toString = function () {
    return 'EnumValue(name=' + Kotlin.toString(this.name) + (', number=' + Kotlin.toString(this.number)) + (', options=' + Kotlin.toString(this.options)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  EnumValue.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.number) | 0;
    result = result * 31 + Kotlin.hashCode(this.options) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  EnumValue.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.number, other.number) && Kotlin.equals(this.options, other.options) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function Option(name, value, unknownFields) {
    Option$Companion_getInstance();
    if (name === void 0)
      name = '';
    if (value === void 0)
      value = null;
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.name = name;
    this.value = value;
    this.unknownFields = unknownFields;
    this.protoSize_lzx0uk$_0 = lazy(Option$protoSize$lambda(this));
  }
  Option.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_43(this, other);
  };
  Object.defineProperty(Option.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_lzx0uk$_0.value;
    }
  });
  Option.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_43(this, m);
  };
  function Option$Companion() {
    Option$Companion_instance = this;
  }
  Option$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_43(Option$Companion_getInstance(), u);
  };
  Option$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var Option$Companion_instance = null;
  function Option$Companion_getInstance() {
    if (Option$Companion_instance === null) {
      new Option$Companion();
    }
    return Option$Companion_instance;
  }
  function Option$protoSize$lambda(this$Option) {
    return function () {
      return protoSizeImpl_43(this$Option);
    };
  }
  Option.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Option',
    interfaces: [Message]
  };
  Option.prototype.component1 = function () {
    return this.name;
  };
  Option.prototype.component2 = function () {
    return this.value;
  };
  Option.prototype.component3 = function () {
    return this.unknownFields;
  };
  Option.prototype.copy_629vc4$ = function (name, value, unknownFields) {
    return new Option(name === void 0 ? this.name : name, value === void 0 ? this.value : value, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  Option.prototype.toString = function () {
    return 'Option(name=' + Kotlin.toString(this.name) + (', value=' + Kotlin.toString(this.value)) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  Option.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  Option.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.value, other.value) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function protoMergeImpl_39($receiver, plus_1) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    tmp$ = plus_0($receiver.fields, plus_1.fields);
    tmp$_0 = plus_0($receiver.oneofs, plus_1.oneofs);
    tmp$_1 = plus_0($receiver.options, plus_1.options);
    tmp$_4 = (tmp$_3 = (tmp$_2 = $receiver.sourceContext) != null ? tmp$_2.plus_2gqcnw$(plus_1.sourceContext) : null) != null ? tmp$_3 : plus_1.sourceContext;
    tmp$_5 = plus($receiver.unknownFields, plus_1.unknownFields);
    return (tmp$_6 = plus_1 != null ? plus_1.copy_mbhxh5$(void 0, tmp$, tmp$_0, tmp$_1, tmp$_4, void 0, tmp$_5) : null) != null ? tmp$_6 : $receiver;
  }
  function protoSizeImpl_39($receiver) {
    var protoSize = 0;
    if ($receiver.name.length > 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().stringSize_61zpoe$($receiver.name)) | 0;
    if (!$receiver.fields.isEmpty())
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(2) + Sizer_getInstance().packedRepeatedSize_juvmgx$($receiver.fields, getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance())))) | 0;
    if (!$receiver.oneofs.isEmpty())
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(3) + Sizer_getInstance().packedRepeatedSize_juvmgx$($receiver.oneofs, getCallableRef('stringSize', function ($receiver, value) {
        return $receiver.stringSize_61zpoe$(value);
      }.bind(null, Sizer_getInstance())))) | 0;
    if (!$receiver.options.isEmpty())
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(4) + Sizer_getInstance().packedRepeatedSize_juvmgx$($receiver.options, getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance())))) | 0;
    if ($receiver.sourceContext != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(5) + Sizer_getInstance().messageSize_3k86cv$($receiver.sourceContext)) | 0;
    if ($receiver.syntax.value !== 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(6) + Sizer_getInstance().enumSize_do1vow$($receiver.syntax)) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_39($receiver, protoMarshal) {
    if ($receiver.name.length > 0)
      protoMarshal.writeTag_za3lpa$(10).writeString_61zpoe$($receiver.name);
    if (!$receiver.fields.isEmpty())
      protoMarshal.writeTag_za3lpa$(18).writePackedRepeated_w6577c$($receiver.fields, getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance())), getCallableRef('writeMessage', function ($receiver, value) {
        return $receiver.writeMessage_3k86cv$(value), Unit;
      }.bind(null, protoMarshal)));
    if (!$receiver.oneofs.isEmpty())
      protoMarshal.writeTag_za3lpa$(26).writePackedRepeated_w6577c$($receiver.oneofs, getCallableRef('stringSize', function ($receiver, value) {
        return $receiver.stringSize_61zpoe$(value);
      }.bind(null, Sizer_getInstance())), getCallableRef('writeString', function ($receiver, value) {
        return $receiver.writeString_61zpoe$(value), Unit;
      }.bind(null, protoMarshal)));
    if (!$receiver.options.isEmpty())
      protoMarshal.writeTag_za3lpa$(34).writePackedRepeated_w6577c$($receiver.options, getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance())), getCallableRef('writeMessage', function ($receiver, value) {
        return $receiver.writeMessage_3k86cv$(value), Unit;
      }.bind(null, protoMarshal)));
    if ($receiver.sourceContext != null)
      protoMarshal.writeTag_za3lpa$(42).writeMessage_3k86cv$($receiver.sourceContext);
    if ($receiver.syntax.value !== 0)
      protoMarshal.writeTag_za3lpa$(48).writeEnum_do1vow$($receiver.syntax);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_39($receiver, protoUnmarshal) {
    var name = '';
    var fields = null;
    var oneofs = null;
    var options = null;
    var sourceContext = null;
    var syntax = Syntax$Companion_getInstance().fromValue_za3lpa$(0);
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new Type(name, ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(fields), ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(oneofs), ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(options), sourceContext, syntax, protoUnmarshal.unknownFields());
        case 10:
          name = protoUnmarshal.readString();
          break;
        case 18:
          fields = protoUnmarshal.readRepeatedMessage_f2m3pm$(fields, Field$Companion_getInstance(), false);
          break;
        case 26:
          oneofs = protoUnmarshal.readRepeated_2nrlh4$(oneofs, getCallableRef('readString', function ($receiver) {
            return $receiver.readString();
          }.bind(null, protoUnmarshal)), false);
          break;
        case 34:
          options = protoUnmarshal.readRepeatedMessage_f2m3pm$(options, Option$Companion_getInstance(), false);
          break;
        case 42:
          sourceContext = protoUnmarshal.readMessage_7rd7cm$(SourceContext$Companion_getInstance());
          break;
        case 48:
          syntax = protoUnmarshal.readEnum_vjsov6$(Syntax$Companion_getInstance());
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_40($receiver, plus_1) {
    var tmp$;
    return (tmp$ = plus_1 != null ? plus_1.copy_rsqdvc$(void 0, void 0, void 0, void 0, void 0, void 0, void 0, plus_0($receiver.options, plus_1.options), void 0, void 0, plus($receiver.unknownFields, plus_1.unknownFields)) : null) != null ? tmp$ : $receiver;
  }
  function protoSizeImpl_40($receiver) {
    var protoSize = 0;
    if ($receiver.kind.value !== 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().enumSize_do1vow$($receiver.kind)) | 0;
    if ($receiver.cardinality.value !== 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(2) + Sizer_getInstance().enumSize_do1vow$($receiver.cardinality)) | 0;
    if ($receiver.number !== 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(3) + Sizer_getInstance().int32Size_za3lpa$($receiver.number)) | 0;
    if ($receiver.name.length > 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(4) + Sizer_getInstance().stringSize_61zpoe$($receiver.name)) | 0;
    if ($receiver.typeUrl.length > 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(6) + Sizer_getInstance().stringSize_61zpoe$($receiver.typeUrl)) | 0;
    if ($receiver.oneofIndex !== 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(7) + Sizer_getInstance().int32Size_za3lpa$($receiver.oneofIndex)) | 0;
    if ($receiver.packed)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(8) + Sizer_getInstance().boolSize_6taknv$($receiver.packed)) | 0;
    if (!$receiver.options.isEmpty())
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(9) + Sizer_getInstance().packedRepeatedSize_juvmgx$($receiver.options, getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance())))) | 0;
    if ($receiver.jsonName.length > 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(10) + Sizer_getInstance().stringSize_61zpoe$($receiver.jsonName)) | 0;
    if ($receiver.defaultValue.length > 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(11) + Sizer_getInstance().stringSize_61zpoe$($receiver.defaultValue)) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_40($receiver, protoMarshal) {
    if ($receiver.kind.value !== 0)
      protoMarshal.writeTag_za3lpa$(8).writeEnum_do1vow$($receiver.kind);
    if ($receiver.cardinality.value !== 0)
      protoMarshal.writeTag_za3lpa$(16).writeEnum_do1vow$($receiver.cardinality);
    if ($receiver.number !== 0)
      protoMarshal.writeTag_za3lpa$(24).writeInt32_za3lpa$($receiver.number);
    if ($receiver.name.length > 0)
      protoMarshal.writeTag_za3lpa$(34).writeString_61zpoe$($receiver.name);
    if ($receiver.typeUrl.length > 0)
      protoMarshal.writeTag_za3lpa$(50).writeString_61zpoe$($receiver.typeUrl);
    if ($receiver.oneofIndex !== 0)
      protoMarshal.writeTag_za3lpa$(56).writeInt32_za3lpa$($receiver.oneofIndex);
    if ($receiver.packed)
      protoMarshal.writeTag_za3lpa$(64).writeBool_6taknv$($receiver.packed);
    if (!$receiver.options.isEmpty())
      protoMarshal.writeTag_za3lpa$(74).writePackedRepeated_w6577c$($receiver.options, getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance())), getCallableRef('writeMessage', function ($receiver, value) {
        return $receiver.writeMessage_3k86cv$(value), Unit;
      }.bind(null, protoMarshal)));
    if ($receiver.jsonName.length > 0)
      protoMarshal.writeTag_za3lpa$(82).writeString_61zpoe$($receiver.jsonName);
    if ($receiver.defaultValue.length > 0)
      protoMarshal.writeTag_za3lpa$(90).writeString_61zpoe$($receiver.defaultValue);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_40($receiver, protoUnmarshal) {
    var kind = Field$Kind$Companion_getInstance().fromValue_za3lpa$(0);
    var cardinality = Field$Cardinality$Companion_getInstance().fromValue_za3lpa$(0);
    var number = 0;
    var name = '';
    var typeUrl = '';
    var oneofIndex = 0;
    var packed = false;
    var options = null;
    var jsonName = '';
    var defaultValue = '';
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new Field(kind, cardinality, number, name, typeUrl, oneofIndex, packed, ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(options), jsonName, defaultValue, protoUnmarshal.unknownFields());
        case 8:
          kind = protoUnmarshal.readEnum_vjsov6$(Field$Kind$Companion_getInstance());
          break;
        case 16:
          cardinality = protoUnmarshal.readEnum_vjsov6$(Field$Cardinality$Companion_getInstance());
          break;
        case 24:
          number = protoUnmarshal.readInt32();
          break;
        case 34:
          name = protoUnmarshal.readString();
          break;
        case 50:
          typeUrl = protoUnmarshal.readString();
          break;
        case 56:
          oneofIndex = protoUnmarshal.readInt32();
          break;
        case 64:
          packed = protoUnmarshal.readBool();
          break;
        case 74:
          options = protoUnmarshal.readRepeatedMessage_f2m3pm$(options, Option$Companion_getInstance(), false);
          break;
        case 82:
          jsonName = protoUnmarshal.readString();
          break;
        case 90:
          defaultValue = protoUnmarshal.readString();
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_41($receiver, plus_1) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    tmp$ = plus_0($receiver.enumvalue, plus_1.enumvalue);
    tmp$_0 = plus_0($receiver.options, plus_1.options);
    tmp$_3 = (tmp$_2 = (tmp$_1 = $receiver.sourceContext) != null ? tmp$_1.plus_2gqcnw$(plus_1.sourceContext) : null) != null ? tmp$_2 : plus_1.sourceContext;
    tmp$_4 = plus($receiver.unknownFields, plus_1.unknownFields);
    return (tmp$_5 = plus_1 != null ? plus_1.copy_i8ssjg$(void 0, tmp$, tmp$_0, tmp$_3, void 0, tmp$_4) : null) != null ? tmp$_5 : $receiver;
  }
  function protoSizeImpl_41($receiver) {
    var protoSize = 0;
    if ($receiver.name.length > 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().stringSize_61zpoe$($receiver.name)) | 0;
    if (!$receiver.enumvalue.isEmpty())
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(2) + Sizer_getInstance().packedRepeatedSize_juvmgx$($receiver.enumvalue, getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance())))) | 0;
    if (!$receiver.options.isEmpty())
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(3) + Sizer_getInstance().packedRepeatedSize_juvmgx$($receiver.options, getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance())))) | 0;
    if ($receiver.sourceContext != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(4) + Sizer_getInstance().messageSize_3k86cv$($receiver.sourceContext)) | 0;
    if ($receiver.syntax.value !== 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(5) + Sizer_getInstance().enumSize_do1vow$($receiver.syntax)) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_41($receiver, protoMarshal) {
    if ($receiver.name.length > 0)
      protoMarshal.writeTag_za3lpa$(10).writeString_61zpoe$($receiver.name);
    if (!$receiver.enumvalue.isEmpty())
      protoMarshal.writeTag_za3lpa$(18).writePackedRepeated_w6577c$($receiver.enumvalue, getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance())), getCallableRef('writeMessage', function ($receiver, value) {
        return $receiver.writeMessage_3k86cv$(value), Unit;
      }.bind(null, protoMarshal)));
    if (!$receiver.options.isEmpty())
      protoMarshal.writeTag_za3lpa$(26).writePackedRepeated_w6577c$($receiver.options, getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance())), getCallableRef('writeMessage', function ($receiver, value) {
        return $receiver.writeMessage_3k86cv$(value), Unit;
      }.bind(null, protoMarshal)));
    if ($receiver.sourceContext != null)
      protoMarshal.writeTag_za3lpa$(34).writeMessage_3k86cv$($receiver.sourceContext);
    if ($receiver.syntax.value !== 0)
      protoMarshal.writeTag_za3lpa$(40).writeEnum_do1vow$($receiver.syntax);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_41($receiver, protoUnmarshal) {
    var name = '';
    var enumvalue = null;
    var options = null;
    var sourceContext = null;
    var syntax = Syntax$Companion_getInstance().fromValue_za3lpa$(0);
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new Enum(name, ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(enumvalue), ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(options), sourceContext, syntax, protoUnmarshal.unknownFields());
        case 10:
          name = protoUnmarshal.readString();
          break;
        case 18:
          enumvalue = protoUnmarshal.readRepeatedMessage_f2m3pm$(enumvalue, EnumValue$Companion_getInstance(), false);
          break;
        case 26:
          options = protoUnmarshal.readRepeatedMessage_f2m3pm$(options, Option$Companion_getInstance(), false);
          break;
        case 34:
          sourceContext = protoUnmarshal.readMessage_7rd7cm$(SourceContext$Companion_getInstance());
          break;
        case 40:
          syntax = protoUnmarshal.readEnum_vjsov6$(Syntax$Companion_getInstance());
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_42($receiver, plus_1) {
    var tmp$;
    return (tmp$ = plus_1 != null ? plus_1.copy_x7nfpn$(void 0, void 0, plus_0($receiver.options, plus_1.options), plus($receiver.unknownFields, plus_1.unknownFields)) : null) != null ? tmp$ : $receiver;
  }
  function protoSizeImpl_42($receiver) {
    var protoSize = 0;
    if ($receiver.name.length > 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().stringSize_61zpoe$($receiver.name)) | 0;
    if ($receiver.number !== 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(2) + Sizer_getInstance().int32Size_za3lpa$($receiver.number)) | 0;
    if (!$receiver.options.isEmpty())
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(3) + Sizer_getInstance().packedRepeatedSize_juvmgx$($receiver.options, getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance())))) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_42($receiver, protoMarshal) {
    if ($receiver.name.length > 0)
      protoMarshal.writeTag_za3lpa$(10).writeString_61zpoe$($receiver.name);
    if ($receiver.number !== 0)
      protoMarshal.writeTag_za3lpa$(16).writeInt32_za3lpa$($receiver.number);
    if (!$receiver.options.isEmpty())
      protoMarshal.writeTag_za3lpa$(26).writePackedRepeated_w6577c$($receiver.options, getCallableRef('messageSize', function ($receiver, value) {
        return $receiver.messageSize_3k86cv$(value);
      }.bind(null, Sizer_getInstance())), getCallableRef('writeMessage', function ($receiver, value) {
        return $receiver.writeMessage_3k86cv$(value), Unit;
      }.bind(null, protoMarshal)));
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_42($receiver, protoUnmarshal) {
    var name = '';
    var number = 0;
    var options = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new EnumValue(name, number, ListWithSize$Builder$Companion_getInstance().fixed_hnp5n5$(options), protoUnmarshal.unknownFields());
        case 10:
          name = protoUnmarshal.readString();
          break;
        case 16:
          number = protoUnmarshal.readInt32();
          break;
        case 26:
          options = protoUnmarshal.readRepeatedMessage_f2m3pm$(options, Option$Companion_getInstance(), false);
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_43($receiver, plus_0) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$_1 = (tmp$_0 = (tmp$ = $receiver.value) != null ? tmp$.plus_2gqcnw$(plus_0.value) : null) != null ? tmp$_0 : plus_0.value;
    tmp$_2 = plus($receiver.unknownFields, plus_0.unknownFields);
    return (tmp$_3 = plus_0 != null ? plus_0.copy_629vc4$(void 0, tmp$_1, tmp$_2) : null) != null ? tmp$_3 : $receiver;
  }
  function protoSizeImpl_43($receiver) {
    var protoSize = 0;
    if ($receiver.name.length > 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().stringSize_61zpoe$($receiver.name)) | 0;
    if ($receiver.value != null)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(2) + Sizer_getInstance().messageSize_3k86cv$($receiver.value)) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_43($receiver, protoMarshal) {
    if ($receiver.name.length > 0)
      protoMarshal.writeTag_za3lpa$(10).writeString_61zpoe$($receiver.name);
    if ($receiver.value != null)
      protoMarshal.writeTag_za3lpa$(18).writeMessage_3k86cv$($receiver.value);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_43($receiver, protoUnmarshal) {
    var name = '';
    var value = null;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new Option(name, value, protoUnmarshal.unknownFields());
        case 10:
          name = protoUnmarshal.readString();
          break;
        case 18:
          value = protoUnmarshal.readMessage_7rd7cm$(Any$Companion_getInstance());
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function DoubleValue(value, unknownFields) {
    DoubleValue$Companion_getInstance();
    if (value === void 0)
      value = 0.0;
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.value = value;
    this.unknownFields = unknownFields;
    this.protoSize_hkjzth$_0 = lazy(DoubleValue$protoSize$lambda(this));
  }
  DoubleValue.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_44(this, other);
  };
  Object.defineProperty(DoubleValue.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_hkjzth$_0.value;
    }
  });
  DoubleValue.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_44(this, m);
  };
  function DoubleValue$Companion() {
    DoubleValue$Companion_instance = this;
  }
  DoubleValue$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_44(DoubleValue$Companion_getInstance(), u);
  };
  DoubleValue$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var DoubleValue$Companion_instance = null;
  function DoubleValue$Companion_getInstance() {
    if (DoubleValue$Companion_instance === null) {
      new DoubleValue$Companion();
    }
    return DoubleValue$Companion_instance;
  }
  function DoubleValue$protoSize$lambda(this$DoubleValue) {
    return function () {
      return protoSizeImpl_44(this$DoubleValue);
    };
  }
  DoubleValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DoubleValue',
    interfaces: [Message]
  };
  DoubleValue.prototype.component1 = function () {
    return this.value;
  };
  DoubleValue.prototype.component2 = function () {
    return this.unknownFields;
  };
  DoubleValue.prototype.copy_vaaghr$ = function (value, unknownFields) {
    return new DoubleValue(value === void 0 ? this.value : value, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  DoubleValue.prototype.toString = function () {
    return 'DoubleValue(value=' + Kotlin.toString(this.value) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  DoubleValue.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  DoubleValue.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.value, other.value) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function FloatValue(value, unknownFields) {
    FloatValue$Companion_getInstance();
    if (value === void 0)
      value = 0.0;
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.value = value;
    this.unknownFields = unknownFields;
    this.protoSize_xjnl2s$_0 = lazy(FloatValue$protoSize$lambda(this));
  }
  FloatValue.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_45(this, other);
  };
  Object.defineProperty(FloatValue.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_xjnl2s$_0.value;
    }
  });
  FloatValue.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_45(this, m);
  };
  function FloatValue$Companion() {
    FloatValue$Companion_instance = this;
  }
  FloatValue$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_45(FloatValue$Companion_getInstance(), u);
  };
  FloatValue$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var FloatValue$Companion_instance = null;
  function FloatValue$Companion_getInstance() {
    if (FloatValue$Companion_instance === null) {
      new FloatValue$Companion();
    }
    return FloatValue$Companion_instance;
  }
  function FloatValue$protoSize$lambda(this$FloatValue) {
    return function () {
      return protoSizeImpl_45(this$FloatValue);
    };
  }
  FloatValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FloatValue',
    interfaces: [Message]
  };
  FloatValue.prototype.component1 = function () {
    return this.value;
  };
  FloatValue.prototype.component2 = function () {
    return this.unknownFields;
  };
  FloatValue.prototype.copy_n8f8mo$ = function (value, unknownFields) {
    return new FloatValue(value === void 0 ? this.value : value, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  FloatValue.prototype.toString = function () {
    return 'FloatValue(value=' + Kotlin.toString(this.value) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  FloatValue.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  FloatValue.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.value, other.value) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function Int64Value(value, unknownFields) {
    Int64Value$Companion_getInstance();
    if (value === void 0)
      value = L0;
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.value = value;
    this.unknownFields = unknownFields;
    this.protoSize_ioedj9$_0 = lazy(Int64Value$protoSize$lambda(this));
  }
  Int64Value.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_46(this, other);
  };
  Object.defineProperty(Int64Value.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_ioedj9$_0.value;
    }
  });
  Int64Value.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_46(this, m);
  };
  function Int64Value$Companion() {
    Int64Value$Companion_instance = this;
  }
  Int64Value$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_46(Int64Value$Companion_getInstance(), u);
  };
  Int64Value$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var Int64Value$Companion_instance = null;
  function Int64Value$Companion_getInstance() {
    if (Int64Value$Companion_instance === null) {
      new Int64Value$Companion();
    }
    return Int64Value$Companion_instance;
  }
  function Int64Value$protoSize$lambda(this$Int64Value) {
    return function () {
      return protoSizeImpl_46(this$Int64Value);
    };
  }
  Int64Value.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Int64Value',
    interfaces: [Message]
  };
  Int64Value.prototype.component1 = function () {
    return this.value;
  };
  Int64Value.prototype.component2 = function () {
    return this.unknownFields;
  };
  Int64Value.prototype.copy_wu9re$ = function (value, unknownFields) {
    return new Int64Value(value === void 0 ? this.value : value, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  Int64Value.prototype.toString = function () {
    return 'Int64Value(value=' + Kotlin.toString(this.value) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  Int64Value.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  Int64Value.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.value, other.value) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function UInt64Value(value, unknownFields) {
    UInt64Value$Companion_getInstance();
    if (value === void 0)
      value = L0;
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.value = value;
    this.unknownFields = unknownFields;
    this.protoSize_x2xw04$_0 = lazy(UInt64Value$protoSize$lambda(this));
  }
  UInt64Value.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_47(this, other);
  };
  Object.defineProperty(UInt64Value.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_x2xw04$_0.value;
    }
  });
  UInt64Value.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_47(this, m);
  };
  function UInt64Value$Companion() {
    UInt64Value$Companion_instance = this;
  }
  UInt64Value$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_47(UInt64Value$Companion_getInstance(), u);
  };
  UInt64Value$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var UInt64Value$Companion_instance = null;
  function UInt64Value$Companion_getInstance() {
    if (UInt64Value$Companion_instance === null) {
      new UInt64Value$Companion();
    }
    return UInt64Value$Companion_instance;
  }
  function UInt64Value$protoSize$lambda(this$UInt64Value) {
    return function () {
      return protoSizeImpl_47(this$UInt64Value);
    };
  }
  UInt64Value.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UInt64Value',
    interfaces: [Message]
  };
  UInt64Value.prototype.component1 = function () {
    return this.value;
  };
  UInt64Value.prototype.component2 = function () {
    return this.unknownFields;
  };
  UInt64Value.prototype.copy_wu9re$ = function (value, unknownFields) {
    return new UInt64Value(value === void 0 ? this.value : value, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  UInt64Value.prototype.toString = function () {
    return 'UInt64Value(value=' + Kotlin.toString(this.value) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  UInt64Value.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  UInt64Value.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.value, other.value) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function Int32Value(value, unknownFields) {
    Int32Value$Companion_getInstance();
    if (value === void 0)
      value = 0;
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.value = value;
    this.unknownFields = unknownFields;
    this.protoSize_nduahy$_0 = lazy(Int32Value$protoSize$lambda(this));
  }
  Int32Value.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_48(this, other);
  };
  Object.defineProperty(Int32Value.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_nduahy$_0.value;
    }
  });
  Int32Value.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_48(this, m);
  };
  function Int32Value$Companion() {
    Int32Value$Companion_instance = this;
  }
  Int32Value$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_48(Int32Value$Companion_getInstance(), u);
  };
  Int32Value$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var Int32Value$Companion_instance = null;
  function Int32Value$Companion_getInstance() {
    if (Int32Value$Companion_instance === null) {
      new Int32Value$Companion();
    }
    return Int32Value$Companion_instance;
  }
  function Int32Value$protoSize$lambda(this$Int32Value) {
    return function () {
      return protoSizeImpl_48(this$Int32Value);
    };
  }
  Int32Value.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Int32Value',
    interfaces: [Message]
  };
  Int32Value.prototype.component1 = function () {
    return this.value;
  };
  Int32Value.prototype.component2 = function () {
    return this.unknownFields;
  };
  Int32Value.prototype.copy_gckesj$ = function (value, unknownFields) {
    return new Int32Value(value === void 0 ? this.value : value, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  Int32Value.prototype.toString = function () {
    return 'Int32Value(value=' + Kotlin.toString(this.value) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  Int32Value.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  Int32Value.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.value, other.value) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function UInt32Value(value, unknownFields) {
    UInt32Value$Companion_getInstance();
    if (value === void 0)
      value = 0;
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.value = value;
    this.unknownFields = unknownFields;
    this.protoSize_sdhz1f$_0 = lazy(UInt32Value$protoSize$lambda(this));
  }
  UInt32Value.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_49(this, other);
  };
  Object.defineProperty(UInt32Value.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_sdhz1f$_0.value;
    }
  });
  UInt32Value.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_49(this, m);
  };
  function UInt32Value$Companion() {
    UInt32Value$Companion_instance = this;
  }
  UInt32Value$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_49(UInt32Value$Companion_getInstance(), u);
  };
  UInt32Value$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var UInt32Value$Companion_instance = null;
  function UInt32Value$Companion_getInstance() {
    if (UInt32Value$Companion_instance === null) {
      new UInt32Value$Companion();
    }
    return UInt32Value$Companion_instance;
  }
  function UInt32Value$protoSize$lambda(this$UInt32Value) {
    return function () {
      return protoSizeImpl_49(this$UInt32Value);
    };
  }
  UInt32Value.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UInt32Value',
    interfaces: [Message]
  };
  UInt32Value.prototype.component1 = function () {
    return this.value;
  };
  UInt32Value.prototype.component2 = function () {
    return this.unknownFields;
  };
  UInt32Value.prototype.copy_gckesj$ = function (value, unknownFields) {
    return new UInt32Value(value === void 0 ? this.value : value, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  UInt32Value.prototype.toString = function () {
    return 'UInt32Value(value=' + Kotlin.toString(this.value) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  UInt32Value.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  UInt32Value.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.value, other.value) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function BoolValue(value, unknownFields) {
    BoolValue$Companion_getInstance();
    if (value === void 0)
      value = false;
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.value = value;
    this.unknownFields = unknownFields;
    this.protoSize_vezadu$_0 = lazy(BoolValue$protoSize$lambda(this));
  }
  BoolValue.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_50(this, other);
  };
  Object.defineProperty(BoolValue.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_vezadu$_0.value;
    }
  });
  BoolValue.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_50(this, m);
  };
  function BoolValue$Companion() {
    BoolValue$Companion_instance = this;
  }
  BoolValue$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_50(BoolValue$Companion_getInstance(), u);
  };
  BoolValue$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var BoolValue$Companion_instance = null;
  function BoolValue$Companion_getInstance() {
    if (BoolValue$Companion_instance === null) {
      new BoolValue$Companion();
    }
    return BoolValue$Companion_instance;
  }
  function BoolValue$protoSize$lambda(this$BoolValue) {
    return function () {
      return protoSizeImpl_50(this$BoolValue);
    };
  }
  BoolValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoolValue',
    interfaces: [Message]
  };
  BoolValue.prototype.component1 = function () {
    return this.value;
  };
  BoolValue.prototype.component2 = function () {
    return this.unknownFields;
  };
  BoolValue.prototype.copy_23hml8$ = function (value, unknownFields) {
    return new BoolValue(value === void 0 ? this.value : value, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  BoolValue.prototype.toString = function () {
    return 'BoolValue(value=' + Kotlin.toString(this.value) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  BoolValue.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  BoolValue.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.value, other.value) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function StringValue(value, unknownFields) {
    StringValue$Companion_getInstance();
    if (value === void 0)
      value = '';
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.value = value;
    this.unknownFields = unknownFields;
    this.protoSize_w0howl$_0 = lazy(StringValue$protoSize$lambda(this));
  }
  StringValue.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_51(this, other);
  };
  Object.defineProperty(StringValue.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_w0howl$_0.value;
    }
  });
  StringValue.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_51(this, m);
  };
  function StringValue$Companion() {
    StringValue$Companion_instance = this;
  }
  StringValue$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_51(StringValue$Companion_getInstance(), u);
  };
  StringValue$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var StringValue$Companion_instance = null;
  function StringValue$Companion_getInstance() {
    if (StringValue$Companion_instance === null) {
      new StringValue$Companion();
    }
    return StringValue$Companion_instance;
  }
  function StringValue$protoSize$lambda(this$StringValue) {
    return function () {
      return protoSizeImpl_51(this$StringValue);
    };
  }
  StringValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StringValue',
    interfaces: [Message]
  };
  StringValue.prototype.component1 = function () {
    return this.value;
  };
  StringValue.prototype.component2 = function () {
    return this.unknownFields;
  };
  StringValue.prototype.copy_w083i9$ = function (value, unknownFields) {
    return new StringValue(value === void 0 ? this.value : value, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  StringValue.prototype.toString = function () {
    return 'StringValue(value=' + Kotlin.toString(this.value) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  StringValue.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  StringValue.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.value, other.value) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function BytesValue(value, unknownFields) {
    BytesValue$Companion_getInstance();
    if (value === void 0)
      value = ByteArr$Companion_getInstance().empty;
    if (unknownFields === void 0)
      unknownFields = emptyMap();
    this.value = value;
    this.unknownFields = unknownFields;
    this.protoSize_depshp$_0 = lazy(BytesValue$protoSize$lambda(this));
  }
  BytesValue.prototype.plus_2gqcnw$ = function (other) {
    return protoMergeImpl_52(this, other);
  };
  Object.defineProperty(BytesValue.prototype, 'protoSize', {
    get: function () {
      return this.protoSize_depshp$_0.value;
    }
  });
  BytesValue.prototype.protoMarshal_5j3s6l$ = function (m) {
    protoMarshalImpl_52(this, m);
  };
  function BytesValue$Companion() {
    BytesValue$Companion_instance = this;
  }
  BytesValue$Companion.prototype.protoUnmarshal_cscpc6$ = function (u) {
    return protoUnmarshalImpl_52(BytesValue$Companion_getInstance(), u);
  };
  BytesValue$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Message$Companion]
  };
  var BytesValue$Companion_instance = null;
  function BytesValue$Companion_getInstance() {
    if (BytesValue$Companion_instance === null) {
      new BytesValue$Companion();
    }
    return BytesValue$Companion_instance;
  }
  function BytesValue$protoSize$lambda(this$BytesValue) {
    return function () {
      return protoSizeImpl_52(this$BytesValue);
    };
  }
  BytesValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BytesValue',
    interfaces: [Message]
  };
  BytesValue.prototype.component1 = function () {
    return this.value;
  };
  BytesValue.prototype.component2 = function () {
    return this.unknownFields;
  };
  BytesValue.prototype.copy_94n20e$ = function (value, unknownFields) {
    return new BytesValue(value === void 0 ? this.value : value, unknownFields === void 0 ? this.unknownFields : unknownFields);
  };
  BytesValue.prototype.toString = function () {
    return 'BytesValue(value=' + Kotlin.toString(this.value) + (', unknownFields=' + Kotlin.toString(this.unknownFields)) + ')';
  };
  BytesValue.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.unknownFields) | 0;
    return result;
  };
  BytesValue.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.value, other.value) && Kotlin.equals(this.unknownFields, other.unknownFields)))));
  };
  function protoMergeImpl_44($receiver, plus_0) {
    var tmp$;
    return (tmp$ = plus_0 != null ? plus_0.copy_vaaghr$(void 0, plus($receiver.unknownFields, plus_0.unknownFields)) : null) != null ? tmp$ : $receiver;
  }
  function protoSizeImpl_44($receiver) {
    var protoSize = 0;
    if ($receiver.value !== 0.0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().doubleSize_14dthe$($receiver.value)) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_44($receiver, protoMarshal) {
    if ($receiver.value !== 0.0)
      protoMarshal.writeTag_za3lpa$(9).writeDouble_14dthe$($receiver.value);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_44($receiver, protoUnmarshal) {
    var value = 0.0;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new DoubleValue(value, protoUnmarshal.unknownFields());
        case 9:
          value = protoUnmarshal.readDouble();
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_45($receiver, plus_0) {
    var tmp$;
    return (tmp$ = plus_0 != null ? plus_0.copy_n8f8mo$(void 0, plus($receiver.unknownFields, plus_0.unknownFields)) : null) != null ? tmp$ : $receiver;
  }
  function protoSizeImpl_45($receiver) {
    var protoSize = 0;
    if ($receiver.value !== 0.0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().floatSize_mx4ult$($receiver.value)) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_45($receiver, protoMarshal) {
    if ($receiver.value !== 0.0)
      protoMarshal.writeTag_za3lpa$(13).writeFloat_mx4ult$($receiver.value);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_45($receiver, protoUnmarshal) {
    var value = 0.0;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new FloatValue(value, protoUnmarshal.unknownFields());
        case 13:
          value = protoUnmarshal.readFloat();
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_46($receiver, plus_0) {
    var tmp$;
    return (tmp$ = plus_0 != null ? plus_0.copy_wu9re$(void 0, plus($receiver.unknownFields, plus_0.unknownFields)) : null) != null ? tmp$ : $receiver;
  }
  function protoSizeImpl_46($receiver) {
    var protoSize = 0;
    if (!equals($receiver.value, L0))
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().int64Size_s8cxhz$($receiver.value)) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_46($receiver, protoMarshal) {
    if (!equals($receiver.value, L0))
      protoMarshal.writeTag_za3lpa$(8).writeInt64_s8cxhz$($receiver.value);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_46($receiver, protoUnmarshal) {
    var value = L0;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new Int64Value(value, protoUnmarshal.unknownFields());
        case 8:
          value = protoUnmarshal.readInt64();
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_47($receiver, plus_0) {
    var tmp$;
    return (tmp$ = plus_0 != null ? plus_0.copy_wu9re$(void 0, plus($receiver.unknownFields, plus_0.unknownFields)) : null) != null ? tmp$ : $receiver;
  }
  function protoSizeImpl_47($receiver) {
    var protoSize = 0;
    if (!equals($receiver.value, L0))
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().uInt64Size_s8cxhz$($receiver.value)) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_47($receiver, protoMarshal) {
    if (!equals($receiver.value, L0))
      protoMarshal.writeTag_za3lpa$(8).writeUInt64_s8cxhz$($receiver.value);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_47($receiver, protoUnmarshal) {
    var value = L0;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new UInt64Value(value, protoUnmarshal.unknownFields());
        case 8:
          value = protoUnmarshal.readUInt64();
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_48($receiver, plus_0) {
    var tmp$;
    return (tmp$ = plus_0 != null ? plus_0.copy_gckesj$(void 0, plus($receiver.unknownFields, plus_0.unknownFields)) : null) != null ? tmp$ : $receiver;
  }
  function protoSizeImpl_48($receiver) {
    var protoSize = 0;
    if ($receiver.value !== 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().int32Size_za3lpa$($receiver.value)) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_48($receiver, protoMarshal) {
    if ($receiver.value !== 0)
      protoMarshal.writeTag_za3lpa$(8).writeInt32_za3lpa$($receiver.value);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_48($receiver, protoUnmarshal) {
    var value = 0;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new Int32Value(value, protoUnmarshal.unknownFields());
        case 8:
          value = protoUnmarshal.readInt32();
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_49($receiver, plus_0) {
    var tmp$;
    return (tmp$ = plus_0 != null ? plus_0.copy_gckesj$(void 0, plus($receiver.unknownFields, plus_0.unknownFields)) : null) != null ? tmp$ : $receiver;
  }
  function protoSizeImpl_49($receiver) {
    var protoSize = 0;
    if ($receiver.value !== 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().uInt32Size_za3lpa$($receiver.value)) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_49($receiver, protoMarshal) {
    if ($receiver.value !== 0)
      protoMarshal.writeTag_za3lpa$(8).writeUInt32_za3lpa$($receiver.value);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_49($receiver, protoUnmarshal) {
    var value = 0;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new UInt32Value(value, protoUnmarshal.unknownFields());
        case 8:
          value = protoUnmarshal.readUInt32();
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_50($receiver, plus_0) {
    var tmp$;
    return (tmp$ = plus_0 != null ? plus_0.copy_23hml8$(void 0, plus($receiver.unknownFields, plus_0.unknownFields)) : null) != null ? tmp$ : $receiver;
  }
  function protoSizeImpl_50($receiver) {
    var protoSize = 0;
    if ($receiver.value)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().boolSize_6taknv$($receiver.value)) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_50($receiver, protoMarshal) {
    if ($receiver.value)
      protoMarshal.writeTag_za3lpa$(8).writeBool_6taknv$($receiver.value);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_50($receiver, protoUnmarshal) {
    var value = false;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new BoolValue(value, protoUnmarshal.unknownFields());
        case 8:
          value = protoUnmarshal.readBool();
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_51($receiver, plus_0) {
    var tmp$;
    return (tmp$ = plus_0 != null ? plus_0.copy_w083i9$(void 0, plus($receiver.unknownFields, plus_0.unknownFields)) : null) != null ? tmp$ : $receiver;
  }
  function protoSizeImpl_51($receiver) {
    var protoSize = 0;
    if ($receiver.value.length > 0)
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().stringSize_61zpoe$($receiver.value)) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_51($receiver, protoMarshal) {
    if ($receiver.value.length > 0)
      protoMarshal.writeTag_za3lpa$(10).writeString_61zpoe$($receiver.value);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_51($receiver, protoUnmarshal) {
    var value = '';
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new StringValue(value, protoUnmarshal.unknownFields());
        case 10:
          value = protoUnmarshal.readString();
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function protoMergeImpl_52($receiver, plus_0) {
    var tmp$;
    return (tmp$ = plus_0 != null ? plus_0.copy_94n20e$(void 0, plus($receiver.unknownFields, plus_0.unknownFields)) : null) != null ? tmp$ : $receiver;
  }
  function protoSizeImpl_52($receiver) {
    var protoSize = 0;
    if (!($receiver.value.array.length === 0))
      protoSize = protoSize + (Sizer_getInstance().tagSize_za3lpa$(1) + Sizer_getInstance().bytesSize_w7fipb$($receiver.value)) | 0;
    var tmp$ = protoSize;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = $receiver.unknownFields.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.value.size() | 0;
    }
    protoSize = tmp$ + sum | 0;
    return protoSize;
  }
  function protoMarshalImpl_52($receiver, protoMarshal) {
    if (!($receiver.value.array.length === 0))
      protoMarshal.writeTag_za3lpa$(10).writeBytes_w7fipb$($receiver.value);
    if (!$receiver.unknownFields.isEmpty())
      protoMarshal.writeUnknownFields_v72k7n$($receiver.unknownFields);
  }
  function protoUnmarshalImpl_52($receiver, protoUnmarshal) {
    var value = ByteArr$Companion_getInstance().empty;
    while (true) {
      switch (protoUnmarshal.readTag()) {
        case 0:
          return new BytesValue(value, protoUnmarshal.unknownFields());
        case 10:
          value = protoUnmarshal.readBytes();
          break;
        default:protoUnmarshal.unknownField();
          break;
      }
    }
  }
  function Marshaller_0(w, expectedSize) {
    Marshaller$Companion_getInstance();
    Marshaller.call(this);
    this.w = w;
    this.expectedSize = expectedSize;
  }
  Marshaller_0.prototype.writeTag_za3lpa$ = function (tag) {
    this.w.uint32(tag);
    return this;
  };
  Marshaller_0.prototype.writeDouble_14dthe$ = function (value) {
    this.w.double(value);
  };
  Marshaller_0.prototype.writeFloat_mx4ult$ = function (value) {
    this.w.float(value);
  };
  Marshaller_0.prototype.writeInt32_za3lpa$ = function (value) {
    this.w.int32(value);
  };
  Marshaller_0.prototype.writeInt64_s8cxhz$ = function (value) {
    this.w.int64(get_protobufjsLong(value));
  };
  Marshaller_0.prototype.writeUInt32_za3lpa$ = function (value) {
    this.w.uint32(value);
  };
  Marshaller_0.prototype.writeUInt64_s8cxhz$ = function (value) {
    this.w.uint64(get_protobufjsLong(value));
  };
  Marshaller_0.prototype.writeSInt32_za3lpa$ = function (value) {
    this.w.sint32(value);
  };
  Marshaller_0.prototype.writeSInt64_s8cxhz$ = function (value) {
    this.w.sint64(get_protobufjsLong(value));
  };
  Marshaller_0.prototype.writeFixed32_za3lpa$ = function (value) {
    this.w.fixed32(value);
  };
  Marshaller_0.prototype.writeFixed64_s8cxhz$ = function (value) {
    this.w.fixed64(get_protobufjsLong(value));
  };
  Marshaller_0.prototype.writeSFixed32_za3lpa$ = function (value) {
    this.w.sfixed32(value);
  };
  Marshaller_0.prototype.writeSFixed64_s8cxhz$ = function (value) {
    this.w.sfixed64(get_protobufjsLong(value));
  };
  Marshaller_0.prototype.writeBool_6taknv$ = function (value) {
    this.w.bool(value);
  };
  Marshaller_0.prototype.writeString_61zpoe$ = function (value) {
    this.w.string(value);
  };
  var Uint8Array_init = Uint8Array;
  Marshaller_0.prototype.writeBytes_w7fipb$ = function (value) {
    var $receiver = value.array;
    this.w.bytes(new Uint8Array_init($receiver.buffer, $receiver.byteOffset, $receiver.length));
  };
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var Int8Array_init = Int8Array;
  Marshaller_0.prototype.complete = function () {
    var $receiver = this.w.finish();
    var $receiver_0 = new Int8Array_init($receiver.buffer, $receiver.byteOffset, $receiver.length);
    if (!($receiver_0.length === this.expectedSize)) {
      var message = 'Expected ' + this.expectedSize + ', got ' + $receiver_0.length;
      throw IllegalArgumentException_init(message.toString());
    }
    return $receiver_0;
  };
  function Marshaller$Companion() {
    Marshaller$Companion_instance = this;
  }
  Marshaller$Companion.prototype.allocate_za3lpa$ = function (size) {
    return new Marshaller_0(Writer$Companion.create(), size);
  };
  Marshaller$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Marshaller$Companion_instance = null;
  function Marshaller$Companion_getInstance() {
    if (Marshaller$Companion_instance === null) {
      new Marshaller$Companion();
    }
    return Marshaller$Companion_instance;
  }
  Marshaller_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Marshaller',
    interfaces: [Marshaller]
  };
  function Sizer_0() {
    Sizer_instance = this;
    Sizer$Simple.call(this);
  }
  Sizer_0.prototype.stringSize_61zpoe$ = function (value) {
    var it = util$utf8$Companion.length(value);
    return it + this.uInt32Size_za3lpa$(it) | 0;
  };
  Sizer_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Sizer',
    interfaces: [Sizer$Simple]
  };
  var Sizer_instance = null;
  function Sizer_getInstance() {
    if (Sizer_instance === null) {
      new Sizer_0();
    }
    return Sizer_instance;
  }
  function Unmarshaller_0(r, discardUnknownFields) {
    Unmarshaller$Companion_getInstance();
    if (discardUnknownFields === void 0)
      discardUnknownFields = false;
    this.r = r;
    this.discardUnknownFields = discardUnknownFields;
    this.lastTag = 0;
    this.currentUnknownFields = this.discardUnknownFields ? null : LinkedHashMap_init();
    this.endPos = this.r.len;
  }
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  Unmarshaller_0.prototype.readTag = function () {
    var tmp$;
    if (this.r.pos === this.endPos)
      tmp$ = 0;
    else {
      var $receiver = this.readInt32();
      if ($receiver >>> 3 === 0) {
        throw IllegalStateException_init('Invalid tag'.toString());
      }
      tmp$ = $receiver;
    }
    this.lastTag = tmp$;
    return this.lastTag;
  };
  Unmarshaller_0.prototype.readDouble = function () {
    return this.r.double();
  };
  Unmarshaller_0.prototype.readFloat = function () {
    return this.r.float();
  };
  Unmarshaller_0.prototype.readInt32 = function () {
    return this.r.int32();
  };
  Unmarshaller_0.prototype.readInt64 = function () {
    return fromProtobufjsLong(kotlin_js_internal_LongCompanionObject, this.r.int64());
  };
  Unmarshaller_0.prototype.readUInt32 = function () {
    return this.r.uint32();
  };
  Unmarshaller_0.prototype.readUInt64 = function () {
    return fromProtobufjsLong(kotlin_js_internal_LongCompanionObject, this.r.uint64());
  };
  Unmarshaller_0.prototype.readSInt32 = function () {
    return this.r.sint32();
  };
  Unmarshaller_0.prototype.readSInt64 = function () {
    return fromProtobufjsLong(kotlin_js_internal_LongCompanionObject, this.r.sint64());
  };
  Unmarshaller_0.prototype.readFixed32 = function () {
    return this.r.fixed32();
  };
  Unmarshaller_0.prototype.readFixed64 = function () {
    return fromProtobufjsLong(kotlin_js_internal_LongCompanionObject, this.r.fixed64());
  };
  Unmarshaller_0.prototype.readSFixed32 = function () {
    return this.r.sfixed32();
  };
  Unmarshaller_0.prototype.readSFixed64 = function () {
    return fromProtobufjsLong(kotlin_js_internal_LongCompanionObject, this.r.sfixed64());
  };
  Unmarshaller_0.prototype.readBool = function () {
    return this.r.bool();
  };
  Unmarshaller_0.prototype.readString = function () {
    return this.r.string();
  };
  Unmarshaller_0.prototype.readBytes = function () {
    var $receiver = this.r.bytes();
    return new ByteArr(new Int8Array_init($receiver.buffer, $receiver.byteOffset, $receiver.length));
  };
  Unmarshaller_0.prototype.readEnum_vjsov6$ = function (s) {
    return s.fromValue_za3lpa$(this.readInt32());
  };
  Unmarshaller_0.prototype.readMessage_7rd7cm$ = function (s) {
    var tmp$;
    var oldEndPos = this.endPos;
    this.endPos = this.readInt32() + this.r.pos | 0;
    var oldUnknownFields = this.currentUnknownFields;
    if (!this.discardUnknownFields) {
      this.currentUnknownFields = LinkedHashMap_init();
    }
    var ret = s.protoUnmarshal_cscpc6$(Kotlin.isType(tmp$ = this, Unmarshaller_0) ? tmp$ : throwCCE());
    if (!(this.r.pos === this.endPos)) {
      var message = 'Not at the end of the current message limit as expected';
      throw IllegalArgumentException_init(message.toString());
    }
    this.endPos = oldEndPos;
    this.currentUnknownFields = oldUnknownFields;
    return ret;
  };
  Unmarshaller_0.prototype.tagWireType_za3lpa$ = function (tag) {
    return tag & 7;
  };
  Unmarshaller_0.prototype.readRepeated_2nrlh4$ = function (appendTo, readFn, neverPacked) {
    var $receiver = appendTo != null ? appendTo : new ListWithSize$Builder();
    if (neverPacked || this.tagWireType_za3lpa$(this.lastTag) !== 2) {
      var tmp$ = $receiver.list;
      var $receiver_0 = readFn();
      var tmp$_0;
      if ((tmp$_0 = $receiver.protoSize) != null) {
        $receiver.protoSize = Kotlin.isType($receiver_0, Message) ? tmp$_0 + $receiver_0.protoSize | 0 : null;
      }
      tmp$.add_11rb$($receiver_0);
    }
     else {
      var $receiver_1 = this.readInt32();
      var tmp$_1;
      if ((tmp$_1 = $receiver.protoSize) != null) {
        $receiver.protoSize = tmp$_1 + $receiver_1 | 0;
      }
      var endPos = this.r.pos + $receiver_1 | 0;
      while (this.r.pos < endPos) {
        var $receiver_2 = $receiver.list;
        var element = readFn();
        $receiver_2.add_11rb$(element);
      }
    }
    return $receiver;
  };
  function Unmarshaller$readRepeatedEnum$lambda(closure$s, this$Unmarshaller) {
    return function () {
      return this$Unmarshaller.readEnum_vjsov6$(closure$s);
    };
  }
  Unmarshaller_0.prototype.readRepeatedEnum_1f0y63$ = function (appendTo, s) {
    return this.readRepeated_2nrlh4$(appendTo, Unmarshaller$readRepeatedEnum$lambda(s, this), false);
  };
  function Unmarshaller$readRepeatedMessage$lambda(closure$s, this$Unmarshaller) {
    return function () {
      return this$Unmarshaller.readMessage_7rd7cm$(closure$s);
    };
  }
  Unmarshaller_0.prototype.readRepeatedMessage_f2m3pm$ = function (appendTo, s, neverPacked) {
    return this.readRepeated_2nrlh4$(appendTo, Unmarshaller$readRepeatedMessage$lambda(s, this), neverPacked);
  };
  Unmarshaller_0.prototype.readMap_hx2l2n$ = function (appendTo, s, neverPacked) {
    var $receiver = appendTo != null ? appendTo : new MapWithSize$Builder();
    if (neverPacked || this.tagWireType_za3lpa$(this.lastTag) !== 2) {
      var tmp$ = $receiver.entries;
      var $receiver_0 = this.readMessage_7rd7cm$(s);
      $receiver.protoSize = $receiver.protoSize + $receiver_0.protoSize | 0;
      var pair = to($receiver_0.key, $receiver_0);
      tmp$.put_xwzc9p$(pair.first, pair.second);
    }
     else {
      var $receiver_1 = this.readInt32();
      $receiver.protoSize = $receiver.protoSize + $receiver_1 | 0;
      var endPos = this.r.pos + $receiver_1 | 0;
      while (this.r.pos < endPos) {
        var tmp$_0 = $receiver.entries;
        var it = this.readMessage_7rd7cm$(s);
        var pair_0 = to(it.key, it);
        tmp$_0.put_xwzc9p$(pair_0.first, pair_0.second);
      }
    }
    return $receiver;
  };
  Unmarshaller_0.prototype.unknownField = function () {
    var tmp$, tmp$_0;
    var tag = this.lastTag;
    tmp$ = this.currentUnknownFields;
    if (tmp$ == null) {
      this.r.skipType(this.tagWireType_za3lpa$(tag));
      return Unit;
    }
    var unknownFields = tmp$;
    switch (this.tagWireType_za3lpa$(tag)) {
      case 0:
        tmp$_0 = new UnknownField$Value$Varint(this.readInt64());
        break;
      case 1:
        tmp$_0 = new UnknownField$Value$Fixed64(this.readFixed64());
        break;
      case 2:
        tmp$_0 = new UnknownField$Value$LengthDelimited(this.readBytes());
        break;
      case 3:
        tmp$_0 = UnknownField$Value$StartGroup_getInstance();
        break;
      case 4:
        tmp$_0 = UnknownField$Value$EndGroup_getInstance();
        break;
      case 5:
        tmp$_0 = new UnknownField$Value$Fixed32(this.readFixed32());
        break;
      default:throw IllegalStateException_init('Unrecognized wire type'.toString());
    }
    var value = tmp$_0;
    var fieldNum = tag >>> 3;
    var prevVal = unknownFields.get_11rb$(fieldNum);
    var $receiver = prevVal != null ? prevVal.value : null;
    var block$result;
    if ($receiver == null) {
      block$result = value;
    }
     else if (Kotlin.isType($receiver, UnknownField$Value$Composite)) {
      block$result = $receiver.copy_4xqs7e$(plus_1($receiver.values, value));
    }
     else {
      block$result = new UnknownField$Value$Composite(listOf([$receiver, value]));
    }
    var value_0 = new UnknownField(fieldNum, block$result);
    unknownFields.put_xwzc9p$(fieldNum, value_0);
  };
  Unmarshaller_0.prototype.unknownFields = function () {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.currentUnknownFields) != null ? toMap(tmp$) : null) != null ? tmp$_0 : emptyMap();
  };
  function Unmarshaller$Companion() {
    Unmarshaller$Companion_instance = this;
  }
  Unmarshaller$Companion.prototype.fromByteArray_fqrh44$ = function (arr) {
    return new Unmarshaller_0(Reader$Companion.create(new Uint8Array_init(arr.buffer, arr.byteOffset, arr.length)));
  };
  Unmarshaller$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Unmarshaller$Companion_instance = null;
  function Unmarshaller$Companion_getInstance() {
    if (Unmarshaller$Companion_instance === null) {
      new Unmarshaller$Companion();
    }
    return Unmarshaller$Companion_instance;
  }
  Unmarshaller_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Unmarshaller',
    interfaces: []
  };
  function get_protobufjsLong($receiver) {
    var ret = {};
    ret.high = $receiver.getHighBits();
    ret.low = $receiver.getLowBits();
    return ret;
  }
  function fromProtobufjsLong($receiver, l) {
    var tmp$;
    return Kotlin.isType(tmp$ = Kotlin.Long.fromBits(l.low, l.high), Kotlin.Long) ? tmp$ : throwCCE();
  }
  function Util() {
    Util_instance = this;
  }
  Util.prototype.stringToUtf8_61zpoe$ = function (str) {
    var $receiver = new Int8Array(util$utf8$Companion.length(str));
    util$utf8$Companion.write(str, new Uint8Array_init($receiver.buffer, $receiver.byteOffset, $receiver.length), 0);
    return $receiver;
  };
  Util.prototype.utf8ToString_fqrh44$ = function (bytes) {
    var it = new Uint8Array_init(bytes.buffer, bytes.byteOffset, bytes.length);
    return util$utf8$Companion.read(it, 0, it.length);
  };
  Util.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Util',
    interfaces: []
  };
  var Util_instance = null;
  function Util_getInstance() {
    if (Util_instance === null) {
      new Util();
    }
    return Util_instance;
  }
  var asUint8Array = defineInlineFunction('pbandk-runtime-js.pbandk.asUint8Array_964n91$', wrapFunction(function () {
    var Uint8Array_init = Uint8Array;
    return function ($receiver) {
      return new Uint8Array_init($receiver.buffer, $receiver.byteOffset, $receiver.length);
    };
  }));
  var asByteArray = defineInlineFunction('pbandk-runtime-js.pbandk.asByteArray_lye5cv$', wrapFunction(function () {
    var Int8Array_init = Int8Array;
    return function ($receiver) {
      return new Int8Array_init($receiver.buffer, $receiver.byteOffset, $receiver.length);
    };
  }));
  Object.defineProperty(ByteArr, 'Companion', {
    get: ByteArr$Companion_getInstance
  });
  var package$pbandk = _.pbandk || (_.pbandk = {});
  package$pbandk.ByteArr = ByteArr;
  var package$impl = package$pbandk.impl || (package$pbandk.impl = {});
  package$impl.Marshaller = Marshaller;
  Sizer.Simple = Sizer$Simple;
  package$impl.Sizer = Sizer;
  package$impl.Unmarshaller = Unmarshaller;
  Object.defineProperty(ListWithSize$Builder, 'Companion', {
    get: ListWithSize$Builder$Companion_getInstance
  });
  ListWithSize.Builder = ListWithSize$Builder;
  Object.defineProperty(ListWithSize, 'Companion', {
    get: ListWithSize$Companion_getInstance
  });
  package$pbandk.ListWithSize_init_juvmgx$ = ListWithSize_init;
  package$pbandk.ListWithSize = ListWithSize;
  Object.defineProperty(MapWithSize$Builder, 'Companion', {
    get: MapWithSize$Builder$Companion_getInstance
  });
  MapWithSize.Builder = MapWithSize$Builder;
  Object.defineProperty(MapWithSize, 'Companion', {
    get: MapWithSize$Companion_getInstance
  });
  package$pbandk.MapWithSize = MapWithSize;
  Message.Companion = Message$Companion;
  Message$Enum.Companion = Message$Enum$Companion;
  Message.Enum = Message$Enum;
  package$pbandk.Message = Message;
  UnknownField$Value.Varint = UnknownField$Value$Varint;
  UnknownField$Value.Fixed64 = UnknownField$Value$Fixed64;
  UnknownField$Value.LengthDelimited = UnknownField$Value$LengthDelimited;
  Object.defineProperty(UnknownField$Value, 'StartGroup', {
    get: UnknownField$Value$StartGroup_getInstance
  });
  Object.defineProperty(UnknownField$Value, 'EndGroup', {
    get: UnknownField$Value$EndGroup_getInstance
  });
  UnknownField$Value.Fixed32 = UnknownField$Value$Fixed32;
  UnknownField$Value.Composite = UnknownField$Value$Composite;
  UnknownField.Value = UnknownField$Value;
  package$pbandk.UnknownField_init_aqqzlk$ = UnknownField_init;
  package$pbandk.UnknownField_init_ydzd23$ = UnknownField_init_0;
  package$pbandk.UnknownField_init_wgdtej$ = UnknownField_init_1;
  package$pbandk.UnknownField_init_3fbn1q$ = UnknownField_init_2;
  package$pbandk.UnknownField_init_19mbxw$ = UnknownField_init_3;
  package$pbandk.UnknownField = UnknownField;
  Object.defineProperty(Any, 'Companion', {
    get: Any$Companion_getInstance
  });
  var package$wkt = package$pbandk.wkt || (package$pbandk.wkt = {});
  package$wkt.Any = Any;
  Object.defineProperty(Api, 'Companion', {
    get: Api$Companion_getInstance
  });
  package$wkt.Api = Api;
  Object.defineProperty(Method, 'Companion', {
    get: Method$Companion_getInstance
  });
  package$wkt.Method = Method;
  Object.defineProperty(Mixin, 'Companion', {
    get: Mixin$Companion_getInstance
  });
  package$wkt.Mixin = Mixin;
  Object.defineProperty(FileDescriptorSet, 'Companion', {
    get: FileDescriptorSet$Companion_getInstance
  });
  package$wkt.FileDescriptorSet = FileDescriptorSet;
  Object.defineProperty(FileDescriptorProto, 'Companion', {
    get: FileDescriptorProto$Companion_getInstance
  });
  package$wkt.FileDescriptorProto = FileDescriptorProto;
  Object.defineProperty(DescriptorProto, 'Companion', {
    get: DescriptorProto$Companion_getInstance
  });
  Object.defineProperty(DescriptorProto$ExtensionRange, 'Companion', {
    get: DescriptorProto$ExtensionRange$Companion_getInstance
  });
  DescriptorProto.ExtensionRange = DescriptorProto$ExtensionRange;
  Object.defineProperty(DescriptorProto$ReservedRange, 'Companion', {
    get: DescriptorProto$ReservedRange$Companion_getInstance
  });
  DescriptorProto.ReservedRange = DescriptorProto$ReservedRange;
  package$wkt.DescriptorProto = DescriptorProto;
  Object.defineProperty(ExtensionRangeOptions, 'Companion', {
    get: ExtensionRangeOptions$Companion_getInstance
  });
  package$wkt.ExtensionRangeOptions = ExtensionRangeOptions;
  Object.defineProperty(FieldDescriptorProto, 'Companion', {
    get: FieldDescriptorProto$Companion_getInstance
  });
  Object.defineProperty(FieldDescriptorProto$Type, 'Companion', {
    get: FieldDescriptorProto$Type$Companion_getInstance
  });
  FieldDescriptorProto.Type = FieldDescriptorProto$Type;
  Object.defineProperty(FieldDescriptorProto$Label, 'Companion', {
    get: FieldDescriptorProto$Label$Companion_getInstance
  });
  FieldDescriptorProto.Label = FieldDescriptorProto$Label;
  package$wkt.FieldDescriptorProto = FieldDescriptorProto;
  Object.defineProperty(OneofDescriptorProto, 'Companion', {
    get: OneofDescriptorProto$Companion_getInstance
  });
  package$wkt.OneofDescriptorProto = OneofDescriptorProto;
  Object.defineProperty(EnumDescriptorProto, 'Companion', {
    get: EnumDescriptorProto$Companion_getInstance
  });
  Object.defineProperty(EnumDescriptorProto$EnumReservedRange, 'Companion', {
    get: EnumDescriptorProto$EnumReservedRange$Companion_getInstance
  });
  EnumDescriptorProto.EnumReservedRange = EnumDescriptorProto$EnumReservedRange;
  package$wkt.EnumDescriptorProto = EnumDescriptorProto;
  Object.defineProperty(EnumValueDescriptorProto, 'Companion', {
    get: EnumValueDescriptorProto$Companion_getInstance
  });
  package$wkt.EnumValueDescriptorProto = EnumValueDescriptorProto;
  Object.defineProperty(ServiceDescriptorProto, 'Companion', {
    get: ServiceDescriptorProto$Companion_getInstance
  });
  package$wkt.ServiceDescriptorProto = ServiceDescriptorProto;
  Object.defineProperty(MethodDescriptorProto, 'Companion', {
    get: MethodDescriptorProto$Companion_getInstance
  });
  package$wkt.MethodDescriptorProto = MethodDescriptorProto;
  Object.defineProperty(FileOptions, 'Companion', {
    get: FileOptions$Companion_getInstance
  });
  Object.defineProperty(FileOptions$OptimizeMode, 'Companion', {
    get: FileOptions$OptimizeMode$Companion_getInstance
  });
  FileOptions.OptimizeMode = FileOptions$OptimizeMode;
  package$wkt.FileOptions = FileOptions;
  Object.defineProperty(MessageOptions, 'Companion', {
    get: MessageOptions$Companion_getInstance
  });
  package$wkt.MessageOptions = MessageOptions;
  Object.defineProperty(FieldOptions, 'Companion', {
    get: FieldOptions$Companion_getInstance
  });
  Object.defineProperty(FieldOptions$CType, 'Companion', {
    get: FieldOptions$CType$Companion_getInstance
  });
  FieldOptions.CType = FieldOptions$CType;
  Object.defineProperty(FieldOptions$JSType, 'Companion', {
    get: FieldOptions$JSType$Companion_getInstance
  });
  FieldOptions.JSType = FieldOptions$JSType;
  package$wkt.FieldOptions = FieldOptions;
  Object.defineProperty(OneofOptions, 'Companion', {
    get: OneofOptions$Companion_getInstance
  });
  package$wkt.OneofOptions = OneofOptions;
  Object.defineProperty(EnumOptions, 'Companion', {
    get: EnumOptions$Companion_getInstance
  });
  package$wkt.EnumOptions = EnumOptions;
  Object.defineProperty(EnumValueOptions, 'Companion', {
    get: EnumValueOptions$Companion_getInstance
  });
  package$wkt.EnumValueOptions = EnumValueOptions;
  Object.defineProperty(ServiceOptions, 'Companion', {
    get: ServiceOptions$Companion_getInstance
  });
  package$wkt.ServiceOptions = ServiceOptions;
  Object.defineProperty(MethodOptions, 'Companion', {
    get: MethodOptions$Companion_getInstance
  });
  Object.defineProperty(MethodOptions$IdempotencyLevel, 'Companion', {
    get: MethodOptions$IdempotencyLevel$Companion_getInstance
  });
  MethodOptions.IdempotencyLevel = MethodOptions$IdempotencyLevel;
  package$wkt.MethodOptions = MethodOptions;
  Object.defineProperty(UninterpretedOption, 'Companion', {
    get: UninterpretedOption$Companion_getInstance
  });
  Object.defineProperty(UninterpretedOption$NamePart, 'Companion', {
    get: UninterpretedOption$NamePart$Companion_getInstance
  });
  UninterpretedOption.NamePart = UninterpretedOption$NamePart;
  package$wkt.UninterpretedOption = UninterpretedOption;
  Object.defineProperty(SourceCodeInfo, 'Companion', {
    get: SourceCodeInfo$Companion_getInstance
  });
  Object.defineProperty(SourceCodeInfo$Location, 'Companion', {
    get: SourceCodeInfo$Location$Companion_getInstance
  });
  SourceCodeInfo.Location = SourceCodeInfo$Location;
  package$wkt.SourceCodeInfo = SourceCodeInfo;
  Object.defineProperty(GeneratedCodeInfo, 'Companion', {
    get: GeneratedCodeInfo$Companion_getInstance
  });
  Object.defineProperty(GeneratedCodeInfo$Annotation, 'Companion', {
    get: GeneratedCodeInfo$Annotation$Companion_getInstance
  });
  GeneratedCodeInfo.Annotation = GeneratedCodeInfo$Annotation;
  package$wkt.GeneratedCodeInfo = GeneratedCodeInfo;
  Object.defineProperty(Duration, 'Companion', {
    get: Duration$Companion_getInstance
  });
  package$wkt.Duration = Duration;
  Object.defineProperty(Empty, 'Companion', {
    get: Empty$Companion_getInstance
  });
  package$wkt.Empty = Empty;
  Object.defineProperty(FieldMask, 'Companion', {
    get: FieldMask$Companion_getInstance
  });
  package$wkt.FieldMask = FieldMask;
  Object.defineProperty(SourceContext, 'Companion', {
    get: SourceContext$Companion_getInstance
  });
  package$wkt.SourceContext = SourceContext;
  Object.defineProperty(NullValue, 'Companion', {
    get: NullValue$Companion_getInstance
  });
  package$wkt.NullValue = NullValue;
  Object.defineProperty(Struct, 'Companion', {
    get: Struct$Companion_getInstance
  });
  Object.defineProperty(Struct$FieldsEntry, 'Companion', {
    get: Struct$FieldsEntry$Companion_getInstance
  });
  Struct.FieldsEntry = Struct$FieldsEntry;
  package$wkt.Struct = Struct;
  Value$Kind.NullValue = Value$Kind$NullValue;
  Value$Kind.NumberValue = Value$Kind$NumberValue;
  Value$Kind.StringValue = Value$Kind$StringValue;
  Value$Kind.BoolValue = Value$Kind$BoolValue;
  Value$Kind.StructValue = Value$Kind$StructValue;
  Value$Kind.ListValue = Value$Kind$ListValue;
  Value.Kind = Value$Kind;
  Object.defineProperty(Value, 'Companion', {
    get: Value$Companion_getInstance
  });
  package$wkt.Value = Value;
  Object.defineProperty(ListValue, 'Companion', {
    get: ListValue$Companion_getInstance
  });
  package$wkt.ListValue = ListValue;
  Object.defineProperty(Timestamp, 'Companion', {
    get: Timestamp$Companion_getInstance
  });
  package$wkt.Timestamp = Timestamp;
  Object.defineProperty(Syntax, 'Companion', {
    get: Syntax$Companion_getInstance
  });
  package$wkt.Syntax = Syntax;
  Object.defineProperty(Type, 'Companion', {
    get: Type$Companion_getInstance
  });
  package$wkt.Type = Type;
  Object.defineProperty(Field, 'Companion', {
    get: Field$Companion_getInstance
  });
  Object.defineProperty(Field$Kind, 'Companion', {
    get: Field$Kind$Companion_getInstance
  });
  Field.Kind = Field$Kind;
  Object.defineProperty(Field$Cardinality, 'Companion', {
    get: Field$Cardinality$Companion_getInstance
  });
  Field.Cardinality = Field$Cardinality;
  package$wkt.Field = Field;
  Object.defineProperty(Enum, 'Companion', {
    get: Enum$Companion_getInstance
  });
  package$wkt.Enum = Enum;
  Object.defineProperty(EnumValue, 'Companion', {
    get: EnumValue$Companion_getInstance
  });
  package$wkt.EnumValue = EnumValue;
  Object.defineProperty(Option, 'Companion', {
    get: Option$Companion_getInstance
  });
  package$wkt.Option = Option;
  Object.defineProperty(DoubleValue, 'Companion', {
    get: DoubleValue$Companion_getInstance
  });
  package$wkt.DoubleValue = DoubleValue;
  Object.defineProperty(FloatValue, 'Companion', {
    get: FloatValue$Companion_getInstance
  });
  package$wkt.FloatValue = FloatValue;
  Object.defineProperty(Int64Value, 'Companion', {
    get: Int64Value$Companion_getInstance
  });
  package$wkt.Int64Value = Int64Value;
  Object.defineProperty(UInt64Value, 'Companion', {
    get: UInt64Value$Companion_getInstance
  });
  package$wkt.UInt64Value = UInt64Value;
  Object.defineProperty(Int32Value, 'Companion', {
    get: Int32Value$Companion_getInstance
  });
  package$wkt.Int32Value = Int32Value;
  Object.defineProperty(UInt32Value, 'Companion', {
    get: UInt32Value$Companion_getInstance
  });
  package$wkt.UInt32Value = UInt32Value;
  Object.defineProperty(BoolValue, 'Companion', {
    get: BoolValue$Companion_getInstance
  });
  package$wkt.BoolValue = BoolValue;
  Object.defineProperty(StringValue, 'Companion', {
    get: StringValue$Companion_getInstance
  });
  package$wkt.StringValue = StringValue;
  Object.defineProperty(BytesValue, 'Companion', {
    get: BytesValue$Companion_getInstance
  });
  package$wkt.BytesValue = BytesValue;
  $$importsForInline$$['pbandk-runtime-js'] = _;
  Object.defineProperty(Marshaller_0, 'Companion', {
    get: Marshaller$Companion_getInstance
  });
  var package$protobufjs = package$pbandk.protobufjs || (package$pbandk.protobufjs = {});
  package$protobufjs.Marshaller = Marshaller_0;
  Object.defineProperty(package$protobufjs, 'Sizer', {
    get: Sizer_getInstance
  });
  Object.defineProperty(Unmarshaller_0, 'Companion', {
    get: Unmarshaller$Companion_getInstance
  });
  package$protobufjs.Unmarshaller = Unmarshaller_0;
  package$protobufjs.get_protobufjsLong_mts6qi$ = get_protobufjsLong;
  package$protobufjs.fromProtobufjsLong_lhiimf$ = fromProtobufjsLong;
  Object.defineProperty(package$protobufjs, 'Util', {
    get: Util_getInstance
  });
  package$pbandk.asUint8Array_964n91$ = asUint8Array;
  package$pbandk.asByteArray_lye5cv$ = asByteArray;
  Any$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  Any.prototype.protoMarshal = Message.prototype.protoMarshal;
  Api$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  Api.prototype.protoMarshal = Message.prototype.protoMarshal;
  Method$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  Method.prototype.protoMarshal = Message.prototype.protoMarshal;
  Mixin$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  Mixin.prototype.protoMarshal = Message.prototype.protoMarshal;
  FileDescriptorSet$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  FileDescriptorSet.prototype.protoMarshal = Message.prototype.protoMarshal;
  FileDescriptorProto$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  FileDescriptorProto.prototype.protoMarshal = Message.prototype.protoMarshal;
  DescriptorProto$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  DescriptorProto$ExtensionRange$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  DescriptorProto$ExtensionRange.prototype.protoMarshal = Message.prototype.protoMarshal;
  DescriptorProto$ReservedRange$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  DescriptorProto$ReservedRange.prototype.protoMarshal = Message.prototype.protoMarshal;
  DescriptorProto.prototype.protoMarshal = Message.prototype.protoMarshal;
  ExtensionRangeOptions$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  ExtensionRangeOptions.prototype.protoMarshal = Message.prototype.protoMarshal;
  FieldDescriptorProto$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  FieldDescriptorProto.prototype.protoMarshal = Message.prototype.protoMarshal;
  OneofDescriptorProto$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  OneofDescriptorProto.prototype.protoMarshal = Message.prototype.protoMarshal;
  EnumDescriptorProto$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  EnumDescriptorProto$EnumReservedRange$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  EnumDescriptorProto$EnumReservedRange.prototype.protoMarshal = Message.prototype.protoMarshal;
  EnumDescriptorProto.prototype.protoMarshal = Message.prototype.protoMarshal;
  EnumValueDescriptorProto$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  EnumValueDescriptorProto.prototype.protoMarshal = Message.prototype.protoMarshal;
  ServiceDescriptorProto$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  ServiceDescriptorProto.prototype.protoMarshal = Message.prototype.protoMarshal;
  MethodDescriptorProto$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  MethodDescriptorProto.prototype.protoMarshal = Message.prototype.protoMarshal;
  FileOptions$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  FileOptions.prototype.protoMarshal = Message.prototype.protoMarshal;
  MessageOptions$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  MessageOptions.prototype.protoMarshal = Message.prototype.protoMarshal;
  FieldOptions$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  FieldOptions.prototype.protoMarshal = Message.prototype.protoMarshal;
  OneofOptions$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  OneofOptions.prototype.protoMarshal = Message.prototype.protoMarshal;
  EnumOptions$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  EnumOptions.prototype.protoMarshal = Message.prototype.protoMarshal;
  EnumValueOptions$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  EnumValueOptions.prototype.protoMarshal = Message.prototype.protoMarshal;
  ServiceOptions$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  ServiceOptions.prototype.protoMarshal = Message.prototype.protoMarshal;
  MethodOptions$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  MethodOptions.prototype.protoMarshal = Message.prototype.protoMarshal;
  UninterpretedOption$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  UninterpretedOption$NamePart$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  UninterpretedOption$NamePart.prototype.protoMarshal = Message.prototype.protoMarshal;
  UninterpretedOption.prototype.protoMarshal = Message.prototype.protoMarshal;
  SourceCodeInfo$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  SourceCodeInfo$Location$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  SourceCodeInfo$Location.prototype.protoMarshal = Message.prototype.protoMarshal;
  SourceCodeInfo.prototype.protoMarshal = Message.prototype.protoMarshal;
  GeneratedCodeInfo$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  GeneratedCodeInfo$Annotation$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  GeneratedCodeInfo$Annotation.prototype.protoMarshal = Message.prototype.protoMarshal;
  GeneratedCodeInfo.prototype.protoMarshal = Message.prototype.protoMarshal;
  Duration$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  Duration.prototype.protoMarshal = Message.prototype.protoMarshal;
  Empty$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  Empty.prototype.protoMarshal = Message.prototype.protoMarshal;
  FieldMask$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  FieldMask.prototype.protoMarshal = Message.prototype.protoMarshal;
  SourceContext$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  SourceContext.prototype.protoMarshal = Message.prototype.protoMarshal;
  Struct$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  Struct$FieldsEntry$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  Struct$FieldsEntry.prototype.protoMarshal = Message.prototype.protoMarshal;
  Struct.prototype.protoMarshal = Message.prototype.protoMarshal;
  Value$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  Value.prototype.protoMarshal = Message.prototype.protoMarshal;
  ListValue$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  ListValue.prototype.protoMarshal = Message.prototype.protoMarshal;
  Timestamp$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  Timestamp.prototype.protoMarshal = Message.prototype.protoMarshal;
  Type$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  Type.prototype.protoMarshal = Message.prototype.protoMarshal;
  Field$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  Field.prototype.protoMarshal = Message.prototype.protoMarshal;
  Enum$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  Enum.prototype.protoMarshal = Message.prototype.protoMarshal;
  EnumValue$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  EnumValue.prototype.protoMarshal = Message.prototype.protoMarshal;
  Option$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  Option.prototype.protoMarshal = Message.prototype.protoMarshal;
  DoubleValue$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  DoubleValue.prototype.protoMarshal = Message.prototype.protoMarshal;
  FloatValue$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  FloatValue.prototype.protoMarshal = Message.prototype.protoMarshal;
  Int64Value$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  Int64Value.prototype.protoMarshal = Message.prototype.protoMarshal;
  UInt64Value$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  UInt64Value.prototype.protoMarshal = Message.prototype.protoMarshal;
  Int32Value$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  Int32Value.prototype.protoMarshal = Message.prototype.protoMarshal;
  UInt32Value$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  UInt32Value.prototype.protoMarshal = Message.prototype.protoMarshal;
  BoolValue$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  BoolValue.prototype.protoMarshal = Message.prototype.protoMarshal;
  StringValue$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  StringValue.prototype.protoMarshal = Message.prototype.protoMarshal;
  BytesValue$Companion.prototype.protoUnmarshal_fqrh44$ = Message$Companion.prototype.protoUnmarshal_fqrh44$;
  BytesValue.prototype.protoMarshal = Message.prototype.protoMarshal;
  Kotlin.defineModule('pbandk-runtime-js', _);
  return _;
}(module.exports,
    require('kotlin'),
    require('protobufjs/light')));
