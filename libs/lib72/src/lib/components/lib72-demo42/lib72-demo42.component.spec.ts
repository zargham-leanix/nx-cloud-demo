import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo42Component } from './lib72-demo42.component';

describe('Lib72Demo42Component', () => {
  let component: Lib72Demo42Component;
  let fixture: ComponentFixture<Lib72Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
