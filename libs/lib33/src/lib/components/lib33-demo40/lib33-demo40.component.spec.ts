import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo40Component } from './lib33-demo40.component';

describe('Lib33Demo40Component', () => {
  let component: Lib33Demo40Component;
  let fixture: ComponentFixture<Lib33Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
