import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo29Component } from './lib71-demo29.component';

describe('Lib71Demo29Component', () => {
  let component: Lib71Demo29Component;
  let fixture: ComponentFixture<Lib71Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
