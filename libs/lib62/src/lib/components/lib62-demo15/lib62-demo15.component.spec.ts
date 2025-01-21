import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo15Component } from './lib62-demo15.component';

describe('Lib62Demo15Component', () => {
  let component: Lib62Demo15Component;
  let fixture: ComponentFixture<Lib62Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
