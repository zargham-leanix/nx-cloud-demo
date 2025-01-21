import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo18Component } from './lib14-demo18.component';

describe('Lib14Demo18Component', () => {
  let component: Lib14Demo18Component;
  let fixture: ComponentFixture<Lib14Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
