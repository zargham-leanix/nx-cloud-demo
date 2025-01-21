import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo18Component } from './lib76-demo18.component';

describe('Lib76Demo18Component', () => {
  let component: Lib76Demo18Component;
  let fixture: ComponentFixture<Lib76Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
