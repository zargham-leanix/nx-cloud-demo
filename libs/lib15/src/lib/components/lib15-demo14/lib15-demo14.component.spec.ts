import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo14Component } from './lib15-demo14.component';

describe('Lib15Demo14Component', () => {
  let component: Lib15Demo14Component;
  let fixture: ComponentFixture<Lib15Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
