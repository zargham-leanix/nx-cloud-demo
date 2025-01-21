import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo29Component } from './lib28-demo29.component';

describe('Lib28Demo29Component', () => {
  let component: Lib28Demo29Component;
  let fixture: ComponentFixture<Lib28Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
