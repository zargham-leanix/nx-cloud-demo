import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo18Component } from './lib21-demo18.component';

describe('Lib21Demo18Component', () => {
  let component: Lib21Demo18Component;
  let fixture: ComponentFixture<Lib21Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
