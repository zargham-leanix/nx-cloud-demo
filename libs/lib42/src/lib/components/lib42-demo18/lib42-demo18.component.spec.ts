import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo18Component } from './lib42-demo18.component';

describe('Lib42Demo18Component', () => {
  let component: Lib42Demo18Component;
  let fixture: ComponentFixture<Lib42Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
