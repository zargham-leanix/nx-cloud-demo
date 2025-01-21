import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo42Component } from './lib80-demo42.component';

describe('Lib80Demo42Component', () => {
  let component: Lib80Demo42Component;
  let fixture: ComponentFixture<Lib80Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
