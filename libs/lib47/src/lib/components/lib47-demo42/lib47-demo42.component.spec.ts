import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo42Component } from './lib47-demo42.component';

describe('Lib47Demo42Component', () => {
  let component: Lib47Demo42Component;
  let fixture: ComponentFixture<Lib47Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
