import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo5Component } from './lib62-demo5.component';

describe('Lib62Demo5Component', () => {
  let component: Lib62Demo5Component;
  let fixture: ComponentFixture<Lib62Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
