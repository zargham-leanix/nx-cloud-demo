import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo17Component } from './lib72-demo17.component';

describe('Lib72Demo17Component', () => {
  let component: Lib72Demo17Component;
  let fixture: ComponentFixture<Lib72Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
