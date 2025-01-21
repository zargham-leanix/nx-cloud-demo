import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo45Component } from './lib4-demo45.component';

describe('Lib4Demo45Component', () => {
  let component: Lib4Demo45Component;
  let fixture: ComponentFixture<Lib4Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
