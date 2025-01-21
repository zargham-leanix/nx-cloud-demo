import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo29Component } from './lib55-demo29.component';

describe('Lib55Demo29Component', () => {
  let component: Lib55Demo29Component;
  let fixture: ComponentFixture<Lib55Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
