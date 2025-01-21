import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo18Component } from './lib98-demo18.component';

describe('Lib98Demo18Component', () => {
  let component: Lib98Demo18Component;
  let fixture: ComponentFixture<Lib98Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
