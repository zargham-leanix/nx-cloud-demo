import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo42Component } from './lib52-demo42.component';

describe('Lib52Demo42Component', () => {
  let component: Lib52Demo42Component;
  let fixture: ComponentFixture<Lib52Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
