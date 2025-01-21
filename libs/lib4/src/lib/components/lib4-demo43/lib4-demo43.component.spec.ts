import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo43Component } from './lib4-demo43.component';

describe('Lib4Demo43Component', () => {
  let component: Lib4Demo43Component;
  let fixture: ComponentFixture<Lib4Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
