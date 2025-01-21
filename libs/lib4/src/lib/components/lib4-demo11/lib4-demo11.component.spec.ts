import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo11Component } from './lib4-demo11.component';

describe('Lib4Demo11Component', () => {
  let component: Lib4Demo11Component;
  let fixture: ComponentFixture<Lib4Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
