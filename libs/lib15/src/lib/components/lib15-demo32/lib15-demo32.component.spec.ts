import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo32Component } from './lib15-demo32.component';

describe('Lib15Demo32Component', () => {
  let component: Lib15Demo32Component;
  let fixture: ComponentFixture<Lib15Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
