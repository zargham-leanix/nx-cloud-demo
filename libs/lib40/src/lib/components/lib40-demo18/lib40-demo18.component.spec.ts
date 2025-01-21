import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo18Component } from './lib40-demo18.component';

describe('Lib40Demo18Component', () => {
  let component: Lib40Demo18Component;
  let fixture: ComponentFixture<Lib40Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
