import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo39Component } from './lib62-demo39.component';

describe('Lib62Demo39Component', () => {
  let component: Lib62Demo39Component;
  let fixture: ComponentFixture<Lib62Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
