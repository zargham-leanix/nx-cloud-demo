import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo35Component } from './lib4-demo35.component';

describe('Lib4Demo35Component', () => {
  let component: Lib4Demo35Component;
  let fixture: ComponentFixture<Lib4Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
