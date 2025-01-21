import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo18Component } from './lib64-demo18.component';

describe('Lib64Demo18Component', () => {
  let component: Lib64Demo18Component;
  let fixture: ComponentFixture<Lib64Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
