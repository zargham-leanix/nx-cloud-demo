import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo15Component } from './lib57-demo15.component';

describe('Lib57Demo15Component', () => {
  let component: Lib57Demo15Component;
  let fixture: ComponentFixture<Lib57Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
