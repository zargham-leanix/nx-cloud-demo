import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo42Component } from './lib15-demo42.component';

describe('Lib15Demo42Component', () => {
  let component: Lib15Demo42Component;
  let fixture: ComponentFixture<Lib15Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
