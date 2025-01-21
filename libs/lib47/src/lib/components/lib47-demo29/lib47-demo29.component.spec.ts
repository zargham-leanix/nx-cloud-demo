import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo29Component } from './lib47-demo29.component';

describe('Lib47Demo29Component', () => {
  let component: Lib47Demo29Component;
  let fixture: ComponentFixture<Lib47Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
