import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo29Component } from './lib30-demo29.component';

describe('Lib30Demo29Component', () => {
  let component: Lib30Demo29Component;
  let fixture: ComponentFixture<Lib30Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
