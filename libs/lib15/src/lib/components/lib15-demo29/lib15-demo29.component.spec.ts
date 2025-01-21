import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo29Component } from './lib15-demo29.component';

describe('Lib15Demo29Component', () => {
  let component: Lib15Demo29Component;
  let fixture: ComponentFixture<Lib15Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
