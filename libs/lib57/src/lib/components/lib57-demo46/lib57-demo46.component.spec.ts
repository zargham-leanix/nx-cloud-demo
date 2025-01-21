import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo46Component } from './lib57-demo46.component';

describe('Lib57Demo46Component', () => {
  let component: Lib57Demo46Component;
  let fixture: ComponentFixture<Lib57Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
