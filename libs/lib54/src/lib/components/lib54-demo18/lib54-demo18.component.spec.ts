import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo18Component } from './lib54-demo18.component';

describe('Lib54Demo18Component', () => {
  let component: Lib54Demo18Component;
  let fixture: ComponentFixture<Lib54Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
