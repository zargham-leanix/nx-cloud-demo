import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo3Component } from './lib62-demo3.component';

describe('Lib62Demo3Component', () => {
  let component: Lib62Demo3Component;
  let fixture: ComponentFixture<Lib62Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
