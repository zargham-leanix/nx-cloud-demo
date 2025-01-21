import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo17Component } from './lib15-demo17.component';

describe('Lib15Demo17Component', () => {
  let component: Lib15Demo17Component;
  let fixture: ComponentFixture<Lib15Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
