import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo44Component } from './lib20-demo44.component';

describe('Lib20Demo44Component', () => {
  let component: Lib20Demo44Component;
  let fixture: ComponentFixture<Lib20Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
