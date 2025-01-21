import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo10Component } from './lib62-demo10.component';

describe('Lib62Demo10Component', () => {
  let component: Lib62Demo10Component;
  let fixture: ComponentFixture<Lib62Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
