package basic;

public class TestExtends {
	public static void main(String[] args) {
		// C c = new C();
		// A a = new A();
		// A a = new C();
		C c = new A();
		c.f();
	}
}

class A extends C {
	A() {
		System.out.println("AAA");
	}

	void f() {
		System.out.println("fffAAA");
	}
}

class B {
	B() {
		System.out.println("BBB");
	}

	void f() {
		System.out.println("fffBBB");
	}
}

class C {
	B b = new B();
	// B b;

	void f() {
		System.out.println("fffCCC");
	}
}
