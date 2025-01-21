import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo12Component } from './lib62-demo12.component';

describe('Lib62Demo12Component', () => {
  let component: Lib62Demo12Component;
  let fixture: ComponentFixture<Lib62Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
