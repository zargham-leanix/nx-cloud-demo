import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo31Component } from './lib62-demo31.component';

describe('Lib62Demo31Component', () => {
  let component: Lib62Demo31Component;
  let fixture: ComponentFixture<Lib62Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
