import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo18Component } from './lib86-demo18.component';

describe('Lib86Demo18Component', () => {
  let component: Lib86Demo18Component;
  let fixture: ComponentFixture<Lib86Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
