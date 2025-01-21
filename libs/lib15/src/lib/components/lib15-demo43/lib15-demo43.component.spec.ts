import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo43Component } from './lib15-demo43.component';

describe('Lib15Demo43Component', () => {
  let component: Lib15Demo43Component;
  let fixture: ComponentFixture<Lib15Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
