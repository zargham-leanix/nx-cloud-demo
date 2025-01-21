import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo29Component } from './lib95-demo29.component';

describe('Lib95Demo29Component', () => {
  let component: Lib95Demo29Component;
  let fixture: ComponentFixture<Lib95Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
