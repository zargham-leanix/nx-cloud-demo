import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo2Component } from './lib15-demo2.component';

describe('Lib15Demo2Component', () => {
  let component: Lib15Demo2Component;
  let fixture: ComponentFixture<Lib15Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
