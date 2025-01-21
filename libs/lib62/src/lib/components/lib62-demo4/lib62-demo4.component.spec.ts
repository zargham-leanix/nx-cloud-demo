import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo4Component } from './lib62-demo4.component';

describe('Lib62Demo4Component', () => {
  let component: Lib62Demo4Component;
  let fixture: ComponentFixture<Lib62Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
