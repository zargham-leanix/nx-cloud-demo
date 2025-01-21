import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo15Component } from './lib4-demo15.component';

describe('Lib4Demo15Component', () => {
  let component: Lib4Demo15Component;
  let fixture: ComponentFixture<Lib4Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
