import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo29Component } from './lib26-demo29.component';

describe('Lib26Demo29Component', () => {
  let component: Lib26Demo29Component;
  let fixture: ComponentFixture<Lib26Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
