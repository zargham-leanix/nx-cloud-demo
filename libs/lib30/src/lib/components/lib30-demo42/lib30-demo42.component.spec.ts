import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo42Component } from './lib30-demo42.component';

describe('Lib30Demo42Component', () => {
  let component: Lib30Demo42Component;
  let fixture: ComponentFixture<Lib30Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
