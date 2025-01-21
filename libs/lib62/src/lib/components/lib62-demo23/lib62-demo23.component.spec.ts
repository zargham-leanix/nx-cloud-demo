import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo23Component } from './lib62-demo23.component';

describe('Lib62Demo23Component', () => {
  let component: Lib62Demo23Component;
  let fixture: ComponentFixture<Lib62Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
