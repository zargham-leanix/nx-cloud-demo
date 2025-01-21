import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo8Component } from './lib62-demo8.component';

describe('Lib62Demo8Component', () => {
  let component: Lib62Demo8Component;
  let fixture: ComponentFixture<Lib62Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
