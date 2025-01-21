import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo18Component } from './lib22-demo18.component';

describe('Lib22Demo18Component', () => {
  let component: Lib22Demo18Component;
  let fixture: ComponentFixture<Lib22Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
