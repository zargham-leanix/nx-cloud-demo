import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo33Component } from './lib4-demo33.component';

describe('Lib4Demo33Component', () => {
  let component: Lib4Demo33Component;
  let fixture: ComponentFixture<Lib4Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
