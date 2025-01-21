import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo29Component } from './lib4-demo29.component';

describe('Lib4Demo29Component', () => {
  let component: Lib4Demo29Component;
  let fixture: ComponentFixture<Lib4Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
