import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo13Component } from './lib15-demo13.component';

describe('Lib15Demo13Component', () => {
  let component: Lib15Demo13Component;
  let fixture: ComponentFixture<Lib15Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
