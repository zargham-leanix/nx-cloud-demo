import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo26Component } from './lib62-demo26.component';

describe('Lib62Demo26Component', () => {
  let component: Lib62Demo26Component;
  let fixture: ComponentFixture<Lib62Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
