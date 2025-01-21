import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo18Component } from './lib24-demo18.component';

describe('Lib24Demo18Component', () => {
  let component: Lib24Demo18Component;
  let fixture: ComponentFixture<Lib24Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
