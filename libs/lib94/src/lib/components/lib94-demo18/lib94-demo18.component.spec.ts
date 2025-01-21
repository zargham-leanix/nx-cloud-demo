import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo18Component } from './lib94-demo18.component';

describe('Lib94Demo18Component', () => {
  let component: Lib94Demo18Component;
  let fixture: ComponentFixture<Lib94Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
