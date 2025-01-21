import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo26Component } from './lib57-demo26.component';

describe('Lib57Demo26Component', () => {
  let component: Lib57Demo26Component;
  let fixture: ComponentFixture<Lib57Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
