import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo6Component } from './lib62-demo6.component';

describe('Lib62Demo6Component', () => {
  let component: Lib62Demo6Component;
  let fixture: ComponentFixture<Lib62Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
