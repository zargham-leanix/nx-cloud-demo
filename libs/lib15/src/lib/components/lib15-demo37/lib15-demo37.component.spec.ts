import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo37Component } from './lib15-demo37.component';

describe('Lib15Demo37Component', () => {
  let component: Lib15Demo37Component;
  let fixture: ComponentFixture<Lib15Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
