import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo5Component } from './lib98-demo5.component';

describe('Lib98Demo5Component', () => {
  let component: Lib98Demo5Component;
  let fixture: ComponentFixture<Lib98Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
