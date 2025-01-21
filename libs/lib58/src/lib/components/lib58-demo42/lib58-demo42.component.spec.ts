import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo42Component } from './lib58-demo42.component';

describe('Lib58Demo42Component', () => {
  let component: Lib58Demo42Component;
  let fixture: ComponentFixture<Lib58Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
