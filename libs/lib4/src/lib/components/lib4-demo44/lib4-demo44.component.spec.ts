import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo44Component } from './lib4-demo44.component';

describe('Lib4Demo44Component', () => {
  let component: Lib4Demo44Component;
  let fixture: ComponentFixture<Lib4Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
