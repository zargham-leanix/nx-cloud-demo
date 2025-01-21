import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo11Component } from './lib33-demo11.component';

describe('Lib33Demo11Component', () => {
  let component: Lib33Demo11Component;
  let fixture: ComponentFixture<Lib33Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
